//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/cupertino/picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/src/cupertino/colors.dart';
import 'package:flutter/src/cupertino/theme.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerPickerSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[cupertinoPicker.funName] = cupertinoPicker;
  m[cupertinoPicker_builder.funName] = cupertinoPicker_builder;
  return m;
}
var cupertinoPicker = MXFunctionInvoke(
    "CupertinoPicker",
    ({
      Key key,
      dynamic diameterRatio = 1.07,
      Color backgroundColor,
      dynamic offAxisFraction = 0.0,
      bool useMagnifier = false,
      dynamic magnification = 1.0,
      FixedExtentScrollController scrollController,
      dynamic squeeze = 1.45,
      dynamic itemExtent,
      dynamic onSelectedItemChanged,
      List<Widget> children,
      bool looping = false,
    }) =>
      CupertinoPicker(
      key: key,
      diameterRatio: diameterRatio,
      backgroundColor: backgroundColor,
      offAxisFraction: offAxisFraction,
      useMagnifier: useMagnifier,
      magnification: magnification,
      scrollController: scrollController,
      squeeze: squeeze,
      itemExtent: itemExtent,
      onSelectedItemChanged: createValueChangedGenericClosure<int>(cupertinoPicker.buildOwner, onSelectedItemChanged),
      children: children,
      looping: looping,
    ),
);
var cupertinoPicker_builder = MXFunctionInvoke(
  "cupertinoPicker.builder",
    ({
      Key key,
      dynamic diameterRatio = 1.07,
      Color backgroundColor,
      dynamic offAxisFraction = 0.0,
      bool useMagnifier = false,
      dynamic magnification = 1.0,
      FixedExtentScrollController scrollController,
      dynamic squeeze = 1.45,
      dynamic itemExtent,
      dynamic onSelectedItemChanged,
      dynamic itemBuilder,
      int childCount,
    }) =>
      CupertinoPicker.builder(
      key: key,
      diameterRatio: diameterRatio,
      backgroundColor: backgroundColor,
      offAxisFraction: offAxisFraction,
      useMagnifier: useMagnifier,
      magnification: magnification,
      scrollController: scrollController,
      squeeze: squeeze,
      itemExtent: itemExtent,
      onSelectedItemChanged: createValueChangedGenericClosure<int>(cupertinoPicker_builder.buildOwner, onSelectedItemChanged),
      itemBuilder: itemBuilder,
      childCount: childCount,
    ),
);
