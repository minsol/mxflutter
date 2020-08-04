//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/widgets/texture.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/src/widgets/framework.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerTextureSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[texture.funName] = texture;
  return m;
}
var texture = MXFunctionInvoke(
    "Texture",
    ({
      Key key,
      int textureId,
    }) =>
      Texture(
      key: key,
      textureId: textureId,
    ),
);
