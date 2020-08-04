//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/material/drawer_header.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/src/material/debug.dart';
import 'package:flutter/src/material/divider.dart';
import 'package:flutter/src/material/theme.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerDrawerHeaderSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[drawerHeader.funName] = drawerHeader;
  return m;
}
var drawerHeader = MXFunctionInvoke(
    "DrawerHeader",
    ({
      Key key,
      Decoration decoration,
      EdgeInsetsGeometry margin,
      EdgeInsetsGeometry padding,
      Duration duration,
      Curve curve,
      Widget child,
    }) =>
      DrawerHeader(
      key: key,
      decoration: decoration,
      margin: margin,
      padding: padding,
      duration: duration,
      curve: curve,
      child: child,
    ),
);
