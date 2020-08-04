//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/material/toggle_buttons.dart';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/src/material/button.dart';
import 'package:flutter/src/material/constants.dart';
import 'package:flutter/src/material/debug.dart';
import 'package:flutter/src/material/theme.dart';
import 'package:flutter/src/material/theme_data.dart';
import 'package:flutter/src/material/toggle_buttons_theme.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerToggleButtonsSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[toggleButtons.funName] = toggleButtons;
  return m;
}
var toggleButtons = MXFunctionInvoke(
    "ToggleButtons",
    ({
      Key key,
      List<Widget> children,
      List<bool> isSelected,
      dynamic onPressed,
      TextStyle textStyle,
      BoxConstraints constraints,
      Color color,
      Color selectedColor,
      Color disabledColor,
      Color fillColor,
      Color focusColor,
      Color highlightColor,
      Color hoverColor,
      Color splashColor,
      List<FocusNode> focusNodes,
      bool renderBorder = true,
      Color borderColor,
      Color selectedBorderColor,
      Color disabledBorderColor,
      BorderRadius borderRadius,
      dynamic borderWidth,
    }) =>
      ToggleButtons(
      key: key,
      children: children,
      isSelected: isSelected,
      onPressed: createValueChangedGenericClosure<int>(toggleButtons.buildOwner, onPressed),
      textStyle: textStyle,
      constraints: constraints,
      color: color,
      selectedColor: selectedColor,
      disabledColor: disabledColor,
      fillColor: fillColor,
      focusColor: focusColor,
      highlightColor: highlightColor,
      hoverColor: hoverColor,
      splashColor: splashColor,
      focusNodes: focusNodes,
      renderBorder: renderBorder,
      borderColor: borderColor,
      selectedBorderColor: selectedBorderColor,
      disabledBorderColor: disabledBorderColor,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
    ),
);
