//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/widgets/orientation_builder.dart';
import 'package:flutter/src/widgets/basic.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/layout_builder.dart';
import 'package:flutter/src/widgets/media_query.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerOrientationBuilderSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[orientationBuilder.funName] = orientationBuilder;
  return m;
}
var orientationBuilder = MXFunctionInvoke(
    "OrientationBuilder",
    ({
      Key key,
      dynamic builder,
    }) =>
      OrientationBuilder(
      key: key,
      builder: builder,
    ),
);
