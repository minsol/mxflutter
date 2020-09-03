//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mxflutter/mxflutter_test.dart';
import 'mx_build_owner.dart';
import 'mx_common.dart';

mixin MXJSWidgetBase {
  String get name;
  String get widgetID;
  Map get widgetBuildData;
  String get widgetBuildDataSeq;

  // TODO：发布版必须定制错误页面
  static Widget errorWidget({String error = ""}) {
    if (kReleaseMode) {
      return Container(color: Colors.white, child: Text("页面开了小差，请稍后再试..."));
    }

    return Container(color: Colors.white, child: Text("Error: $error"));
  }

  static Widget get loadingWidget {
    return Container(
        color: Colors.white,
        child: Center(
          child: CircularProgressIndicator(),
        ));
  }

  /// Flutter 侧生成的MXWidget widgetID 从1开始，为奇数 +2
  static int _widgetIDFeed = 1;

  static String generateWidgetID() {
    // Flutter 侧生成的MXWidget widgetID 从1开始，为奇数 +2
    _widgetIDFeed = _widgetIDFeed + 2;
    return _widgetIDFeed.toString();
  }
}

/// 封装JSWidget
// ignore: must_be_immutable
class MXJSStatefulWidget extends StatefulWidget with MXJSWidgetBase {
  final String name;
  final String widgetID;

  // JSLazy 模式 第一次用过widgetBuildData之后需要置空
  final Map widgetBuildData;
  final String widgetBuildDataSeq;

  /// The Widget Pages that pushed this Widget ID
  /// 把当前widget（this） push 出来的widget ID
  final String navPushingWidgetID;

  /// 通过 MXJsonBuildOwner 组成MXJSWidget的树形结构，管理MXJSWidget build过程
  final MXJsonBuildOwner parentBuildOwnerNode;

  /// Flutter 主动创建的 hostWidget，等待JS刷新
  final bool isHostWidget;

  /// JS 主动创建，等待 Flutter 真正 build 时，通知 JS 刷新
  final bool isJSLazyWidget;

  MXJSStatefulWidget(
      {Key key,
      this.name,
      this.widgetID,
      this.widgetBuildData,
      this.widgetBuildDataSeq,
      this.navPushingWidgetID,
      this.parentBuildOwnerNode,
      this.isJSLazyWidget})
      : this.isHostWidget = false,
        super(key: key);

  ///由dart侧创建MXWidget壳子
  MXJSStatefulWidget.hostWidget({Key key, this.name, this.parentBuildOwnerNode})
      : this.widgetID = MXJSWidgetBase.generateWidgetID(),
        this.widgetBuildData = null,
        this.isHostWidget = true,
        this.widgetBuildDataSeq = null,
        this.navPushingWidgetID = null,
        this.isJSLazyWidget = false,
        super(key: key);

  @override
  State<StatefulWidget> createState() {
    return MXJSWidgetState();
  }

  @override
  MXJSStatefulElement createElement() {
    assert(parentBuildOwnerNode != null);
    var element = MXJSStatefulElement(this);
    element.buildOwnerNode = MXJsonBuildOwner(element);
    parentBuildOwnerNode.addChild(element.buildOwnerNode);
    return element;
  }
}

class MXJSStatefulElement extends StatefulElement {
  MXJSStatefulElement(MXJSStatefulWidget widget) : super(widget);

  MXJsonBuildOwner buildOwnerNode;

  @override
  MXJSStatefulWidget get widget => super.widget as MXJSStatefulWidget;
}

class WidgetBuildDataCache {
  final Map widgetBuildData;
  Widget cacheWidget;
  BuildContext context;

  WidgetBuildDataCache(this.widgetBuildData);
}

class MXJSWidgetState extends State<MXJSStatefulWidget> {
  // 三个场景会更新widgetData
  // 1. 初始化 2. MXJSStatefulWidget的element被复用 3. MXJSWidgetState本身被js 刷新
  WidgetBuildDataCache widgetBuildDataCache;

  String widgetBuildDataSeq;
  bool isHostWidgetAlreadyCallJSRefreshed = false;

  MXJSWidgetState();

  @override
  void initState() {
    super.initState();

    // state初始化时，用widget的widgetData ，之后等js侧的刷新
    widgetBuildDataCache = WidgetBuildDataCache(widget.widgetBuildData);
    widgetBuildDataSeq = widget.widgetBuildDataSeq;
  }

  @override
  void didUpdateWidget(MXJSStatefulWidget old) {
    super.didUpdateWidget(old);
    // 当MXJSStatefulWidget 在element树中被复用，需要更新widgetData

    // 如果widget Tree相同位置都是 MXJSStatefulElement，
    // 按flutter的机制会复用 MXJSStatefulElement，调用update相关函数
    // 如果 widgetID 不同，说明完全不同的jsWidget 需要更新重置所有信息
    if (widget.widgetID == old.widgetID) {
      MXJSLog.log(
          "MXJSWidgetState:didUpdateWidget:widget.widgetID == old.widgetID "
          "widgetID ${widget.widgetID} "
          "old.widgetID:${old.widgetID} "
          "update BuildOwnerNode "
          "widget.widgetBuildDataSeq ${widget.widgetBuildDataSeq} "
          "old.widgetBuildDataSeq:${widgetBuildDataSeq} ");

      if (int.parse(widget.widgetBuildDataSeq) >=
          int.parse(widgetBuildDataSeq)) {
        MXJSLog.log(
            "MXJSWidgetState:didUpdateWidget:widget.widgetID == old.widgetID "
            "update BuildOwnerNode "
            "widget.widgetBuildDataSeq ${widget.widgetBuildDataSeq} >= "
            "old.widgetBuildDataSeq:${widgetBuildDataSeq} "
            "updateWidgetData widgetBuildData = widget.widgetBuildData");
        widgetBuildDataCache = WidgetBuildDataCache(widget.widgetBuildData);
        widgetBuildDataSeq = widget.widgetBuildDataSeq;
      }
    } else {
      MXJSLog.log(
          "MXJSWidgetState:didUpdateWidget:widget.widgetID != old.widgetID "
          "widgetID ${widget.widgetID}"
          "old.widgetID:${old.widgetID} "
          "update BuildOwnerNode");

      widgetBuildDataCache = WidgetBuildDataCache(widget.widgetBuildData);
      widgetBuildDataSeq = widget.widgetBuildDataSeq;

      buildOwnerNode.updateWidgetId(old);
    }
  }

  @override
  void dispose() {
    buildOwnerNode.onDispose();
    super.dispose();
  }

  MXJsonBuildOwner get buildOwnerNode =>
      (context as MXJSStatefulElement).buildOwnerNode;

  @override
  Widget build(BuildContext context) {
    return buildWidget(context);
  }

  Widget buildWidget(BuildContext context) {
    assert(buildOwnerNode != null);

    if (widgetBuildDataCache !=null &&
        widgetBuildDataCache.cacheWidget != null &&
        widgetBuildDataCache.context == context) {

      MXJSLog.log("MXJSStatefulWidget:build widgetBuildDataCache?.cacheWidget != null "
          "使用缓存直接返回 "
          "widgetID ${widget.widgetID} "
          "widgetBuildDataSeq:$widgetBuildDataSeq} ");

      return widgetBuildDataCache?.cacheWidget;
    }

    Widget child;

    MXJSLog.log("MXJSStatefulWidget:build begin: widgetID ${widget.widgetID} "
        "widgetBuildDataSeq: $widgetBuildDataSeq ");

    if (_isNotEmptyData(widgetBuildDataCache?.widgetBuildData)) {

      var widgetBuildData = widgetBuildDataCache.widgetBuildData;
      child = buildOwnerNode.buildWidgetData(widgetBuildData, context);
      widgetBuildDataCache.cacheWidget = child;
      widgetBuildDataCache.context = context;

      if (child == null || child is! Widget) {
        MXJSLog.error(
            "MXJSWidgetState:build: buildOwnerNode.buildWidgetData(widgetBuildData, context) return error; "
            "child: $child"
            "this.widget.widgetID:${this.widget.widgetID}");

        child = MXJSWidgetBase.errorWidget(
            error:
                "MXJSWidgetState:build: buildOwnerNode.buildWidgetData(widgetBuildData, context) return error; "
                "child: $child "
                "this.widget.widgetID:${this.widget.widgetID}");
      }
    } else {
      // host 等待js刷新，先显示loading页面
      // TODO: 定制loading页面和 error 页面
      if (widget.isHostWidget) {
        child = _hostWidgetInvokeJS(context);
      } else if (widget.isJSLazyWidget) {
        child = _lazyWidgetInvokeJS(context);
      } else {
        MXJSLog.error("MXJSWidgetState:build: widget.widgetData == null "
            "this.widget.widgetID:${this.widget.widgetID}");

        child = MXJSWidgetBase.errorWidget(
            error: "MXJSWidgetState:build: widget.widgetData == null "
                "this.widget.widgetID:${this.widget.widgetID}");
      }
    }

    MXJSLog.log("MXJSStatefulWidget:build end: widget:$child "
        "callJSOnBuildEnd  widgetID ${widget.widgetID} "
        "widgetBuildDataSeq:$widgetBuildDataSeq} ");

    // build 逻辑非常重要，保证到底JS，否则JS setState 不生效
    buildOwnerNode.callJSOnBuildEnd();
    return child;
  }

  bool _isNotEmptyData(widgetBuildData) {
    return widgetBuildData != null &&
        widgetBuildData is Map &&
        widgetBuildData.isNotEmpty;
  }

  Widget _hostWidgetInvokeJS(BuildContext context) {
    if (!isHostWidgetAlreadyCallJSRefreshed) {
      isHostWidgetAlreadyCallJSRefreshed = true;
      buildOwnerNode.callJSRefreshHostWidget(
          widget.name, widget.widgetID, context);
      return MXJSWidgetBase.loadingWidget;
    } else {
      return MXJSWidgetBase.errorWidget(
          error:
              "MXJSWidgetState:build: _hostWidgetInvokeJS isHostWidgetAlreadyCallJSRefreshed"
              "this.widget.widgetID:${this.widget.widgetID}");
    }
  }

  Widget _lazyWidgetInvokeJS(BuildContext context) {
    buildOwnerNode.callJSRefreshLazyWidget(widget.widgetID, context);
    return MXJSWidgetBase.loadingWidget;
  }

  jsCallRebuild(
      String widgetID, Map widgetBuildData, String buildWidgetDataSeq) {
    if (this.widget.widgetID != widgetID) {
      MXJSLog.error("MXJSWidgetState:jsCallRebuild: error "
          "this.widget.widgetID:(${this.widget.widgetID}) != widgetID:($widgetID)");
      return;
    }

    if (!_isNotEmptyData(widgetBuildData)) {
      MXJSLog.error("MXJSWidgetState:jsCallRebuild: error "
          "widgetBuildData = null");
      return;
    }

    setState(() {
      widgetBuildDataCache = WidgetBuildDataCache(widgetBuildData);
      this.widgetBuildDataSeq = buildWidgetDataSeq;
    });

    MXJSLog.log("MXJSWidgetState:jsCallRebuild:  "
        " widgetID:($widgetID) widgetBuildDataSeq:$widgetBuildDataSeq");

    MXJSLog.debug("MXJSWidgetState:jsCallRebuild:  "
        " widgetID:($widgetID) widgetBuildDataSeq:$widgetBuildDataSeq widgetBuildData:$widgetBuildData ");
  }
}

/// 静态json生成Widget
class MXJSStatelessWidget extends StatelessWidget with MXJSWidgetBase {
  final String name;
  final String widgetID;

  final Map widgetBuildData;
  final String widgetBuildDataSeq;

  /// The Widget Pages that pushed this Widget ID
  /// 把当前widget（this） push 出来的widget ID
  final String navPushingWidgetID;

  /// 通过 MXJsonBuildOwner 组成MXJSWidget的树形结构，管理MXJSWidget build过程
  final MXJsonBuildOwner parentBuildOwnerNode;

  MXJSStatelessWidget(
      {Key key,
      this.name,
      this.widgetID,
      this.widgetBuildData,
      this.widgetBuildDataSeq,
      this.navPushingWidgetID,
      this.parentBuildOwnerNode})
      : super(key: key);

  @override
  MXJSStatelessElement createElement() {
    assert(parentBuildOwnerNode != null);
    var element = MXJSStatelessElement(this);
    element.buildOwnerNode = MXJsonBuildOwner(element);
    parentBuildOwnerNode.addChild(element.buildOwnerNode);
    return element;
  }

  @override
  Widget build(BuildContext context) {
    MXJSLog.log("MXJSStatelessWidget:build begin: widgetID $widgetID"
        "widgetBuildDataSeq:$widgetBuildDataSeq ");

    if (widgetBuildData == null) {
      MXJSLog.error("MXJSStatelessWidget:build: widgetData == null "
          "this.widget.widgetID:${this.widgetID}");
      return MXJSWidgetBase.errorWidget(
          error: "MXJSStatelessWidget:build: widget.widgetData == null "
              "this.widget.widgetID:${this.widgetID}");
    }

    MXJSStatelessElement element = context as MXJSStatelessElement;
    MXJsonBuildOwner boNode = element.buildOwnerNode;
    Widget child = boNode.buildWidgetData(widgetBuildData, context);

    if (child == null) {
      MXJSLog.error(
          "MXJSStatelessWidget:build: boNode.buildWidgetData(widgetBuildData, context) == null error; "
          "this.widget.widgetID:$widgetID");
      child = MXJSWidgetBase.errorWidget(
          error: "MXJSStatelessWidget:build: widget.widgetData == null "
              "this.widget.widgetID:${this.widgetID}");
    }

    MXJSLog.log("MXJSStatelessWidget:build end: widget:$child "
        "callJSOnBuildEnd  widgetID $widgetID "
        "buildWidgetDataSeq:$widgetBuildDataSeq} ");

    boNode.callJSOnBuildEnd();
    return child;
  }
}

class MXJSStatelessElement extends StatelessElement {
  MXJsonBuildOwner buildOwnerNode;

  MXJSStatelessElement(MXJSStatelessWidget widget) : super(widget);

  @override
  MXJSStatelessWidget get widget => super.widget as MXJSStatelessWidget;

  @override
  void unmount() {
    buildOwnerNode.onUnmount();
    super.unmount();
  }
}