//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/rendering/editable.dart';
import 'dart:math';
import 'dart:ui';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/semantics.dart';
import 'package:flutter/services.dart';
import 'package:flutter/src/rendering/box.dart';
import 'package:flutter/src/rendering/layer.dart';
import 'package:flutter/src/rendering/object.dart';
import 'package:flutter/src/rendering/viewport_offset.dart';


///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerEditableSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[selectionChangedCause.funName] = selectionChangedCause;
  m[textSelectionPoint.funName] = textSelectionPoint;
  m[renderEditable.funName] = renderEditable;
  return m;
}
var selectionChangedCause = MXFunctionInvoke(
    "SelectionChangedCause",
    ({Map args}) => MXSelectionChangedCause.parse(args),
  );
var textSelectionPoint = MXFunctionInvoke(
    "TextSelectionPoint",
    ({
      Offset point,
      TextDirection direction,
    }) =>
      TextSelectionPoint(
      point,
      direction,
    ),
);
var renderEditable = MXFunctionInvoke(
    "RenderEditable",
    ({
      TextSpan text,
      TextDirection textDirection,
      TextAlign textAlign = TextAlign.start,
      Color cursorColor,
      Color backgroundCursorColor,
      ValueNotifier<bool> showCursor,
      bool hasFocus,
      LayerLink startHandleLayerLink,
      LayerLink endHandleLayerLink,
      int maxLines = 1,
      int minLines,
      bool expands = false,
      StrutStyle strutStyle,
      Color selectionColor,
      dynamic textScaleFactor = 1.0,
      TextSelection selection,
      ViewportOffset offset,
      dynamic onSelectionChanged,
      dynamic onCaretChanged,
      bool ignorePointer = false,
      bool readOnly = false,
      bool forceLine = true,
      TextWidthBasis textWidthBasis = TextWidthBasis.parent,
      bool obscureText = false,
      Locale locale,
      dynamic cursorWidth = 1.0,
      Radius cursorRadius,
      bool paintCursorAboveText = false,
      Offset cursorOffset,
      dynamic devicePixelRatio = 1.0,
      BoxHeightStyle selectionHeightStyle = BoxHeightStyle.tight,
      BoxWidthStyle selectionWidthStyle = BoxWidthStyle.tight,
      bool enableInteractiveSelection,
      EdgeInsets floatingCursorAddedMargin,
      TextSelectionDelegate textSelectionDelegate,
    }) =>
      RenderEditable(
      text: text,
      textDirection: textDirection,
      textAlign: textAlign,
      cursorColor: cursorColor,
      backgroundCursorColor: backgroundCursorColor,
      showCursor: showCursor,
      hasFocus: hasFocus,
      startHandleLayerLink: startHandleLayerLink,
      endHandleLayerLink: endHandleLayerLink,
      maxLines: maxLines,
      minLines: minLines,
      expands: expands,
      strutStyle: strutStyle,
      selectionColor: selectionColor,
      textScaleFactor: textScaleFactor,
      selection: selection,
      offset: offset,
      onSelectionChanged: createVoidCallbackClosure(renderEditable.buildOwner, onSelectionChanged),
      onCaretChanged: createValueChangedGenericClosure<Rect>(renderEditable.buildOwner, onCaretChanged),
      ignorePointer: ignorePointer,
      readOnly: readOnly,
      forceLine: forceLine,
      textWidthBasis: textWidthBasis,
      obscureText: obscureText,
      locale: locale,
      cursorWidth: cursorWidth,
      cursorRadius: cursorRadius,
      paintCursorAboveText: paintCursorAboveText,
      cursorOffset: cursorOffset,
      devicePixelRatio: devicePixelRatio,
      selectionHeightStyle: selectionHeightStyle,
      selectionWidthStyle: selectionWidthStyle,
      enableInteractiveSelection: enableInteractiveSelection,
      floatingCursorAddedMargin: floatingCursorAddedMargin,
      textSelectionDelegate: textSelectionDelegate,
    ),
);
class MXSelectionChangedCause {
  static Map str2VMap = {
    'SelectionChangedCause.tap': SelectionChangedCause.tap,
    'SelectionChangedCause.doubleTap': SelectionChangedCause.doubleTap,
    'SelectionChangedCause.longPress': SelectionChangedCause.longPress,
    'SelectionChangedCause.forcePress': SelectionChangedCause.forcePress,
    'SelectionChangedCause.keyboard': SelectionChangedCause.keyboard,
    'SelectionChangedCause.drag': SelectionChangedCause.drag,
  };
  static SelectionChangedCause parse(dynamic value) {
    if (value is Map) {
      var valueStr = value["_name"].trim();
      var v = str2VMap[valueStr];
      return v;
    } else {
      return value;
    }
  }
}
