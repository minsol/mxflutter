//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/services/text_formatter.dart';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/services/text_editing.dart';
import 'package:flutter/src/services/text_input.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerTextFormatterSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[blacklistingTextInputFormatter.funName] = blacklistingTextInputFormatter;
  m[lengthLimitingTextInputFormatter.funName] = lengthLimitingTextInputFormatter;
  m[whitelistingTextInputFormatter.funName] = whitelistingTextInputFormatter;
  return m;
}
var blacklistingTextInputFormatter = MXFunctionInvoke(
    "BlacklistingTextInputFormatter",
    ({
      Pattern blacklistedPattern,
      String replacementString = '',
    }) =>
      BlacklistingTextInputFormatter(
      blacklistedPattern,
      replacementString: replacementString,
    ),
);
var lengthLimitingTextInputFormatter = MXFunctionInvoke(
    "LengthLimitingTextInputFormatter",
    ({
      int maxLength,
    }) =>
      LengthLimitingTextInputFormatter(
      maxLength,
    ),
);
var whitelistingTextInputFormatter = MXFunctionInvoke(
    "WhitelistingTextInputFormatter",
    ({
      Pattern whitelistedPattern,
    }) =>
      WhitelistingTextInputFormatter(
      whitelistedPattern,
    ),
);
