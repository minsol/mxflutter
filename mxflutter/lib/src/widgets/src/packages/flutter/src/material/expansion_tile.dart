//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:mxflutter/src/mirror/mx_mirror.dart';
import 'package:flutter/src/material/expansion_tile.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/src/material/colors.dart';
import 'package:flutter/src/material/icons.dart';
import 'package:flutter/src/material/list_tile.dart';
import 'package:flutter/src/material/theme.dart';
import 'package:flutter/src/material/theme_data.dart';

///把自己能处理的类注册到分发器中
Map<String, MXFunctionInvoke> registerExpansionTileSeries() {
  var m = <String, MXFunctionInvoke>{};
  m[_expansionTile.funName] = _expansionTile;
  return m;
}

var _expansionTile = MXFunctionInvoke(
  "ExpansionTile",
  ({
    Key key,
    Widget leading,
    Widget title,
    Widget subtitle,
    Color backgroundColor,
    dynamic onExpansionChanged,
    dynamic children = const <Widget>[],
    Widget trailing,
    bool initiallyExpanded = false,
  }) =>
      ExpansionTile(
    key: key,
    leading: leading,
    title: title,
    subtitle: subtitle,
    backgroundColor: backgroundColor,
    onExpansionChanged: createValueChangedGenericClosure<bool>(
        _expansionTile.buildOwner, onExpansionChanged),
    children: toListT<Widget>(children),
    trailing: trailing,
    initiallyExpanded: initiallyExpanded,
  ),
  [
    "key",
    "leading",
    "title",
    "subtitle",
    "backgroundColor",
    "onExpansionChanged",
    "children",
    "trailing",
    "initiallyExpanded",
  ],
);