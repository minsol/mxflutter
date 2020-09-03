//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/painting/image_cache.dart';
import 'dart:developer';
import 'dart:ui';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/painting/image_stream.dart';

///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerImageCacheSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[_imageCache.funName] = _imageCache;
  return m;
}

var _imageCache = MXFunctionInvoke(
  "ImageCache",
  () => ImageCache(),
  [],
);