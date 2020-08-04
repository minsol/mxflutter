//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/rendering/sliver_padding.dart';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:vector_math/vector_math_64.dart';
import 'package:flutter/src/rendering/debug.dart';
import 'package:flutter/src/rendering/object.dart';
import 'package:flutter/src/rendering/sliver.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerSliverPaddingSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[renderSliverPadding.funName] = renderSliverPadding;
  return m;
}
var renderSliverPadding = MXFunctionInvoke(
    "RenderSliverPadding",
    ({
      EdgeInsetsGeometry padding,
      TextDirection textDirection,
      RenderSliver child,
    }) =>
      RenderSliverPadding(
      padding: padding,
      textDirection: textDirection,
      child: child,
    ),
);
