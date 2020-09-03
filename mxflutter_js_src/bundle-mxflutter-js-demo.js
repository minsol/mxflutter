/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetHomePage } = __webpack_require__(/*! ./src/home_page */ "./src/home_page.js");

const MXFlutter = globalThis.MXFlutter;

MXFlutter.regist({
  name: 'mxflutter-js-demo',
  RootWidget: MXJSWidgetHomePage,
});


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-cached-network-image/cached_network_image.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-cached-network-image/cached_network_image.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

const { MXMirrorWidget } = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");

class CachedNetworkImage extends MXMirrorWidget {
  constructor({
    key,
    imageUrl,
    imageBuilder,
    placeholder,
    errorWidget,
    fadeOutDuration,
    fadeOutCurve,
    fadeInDuration,
    fadeInCurve,
    width,
    height,
    fit,
    alignment,
    repeat,
    matchTextDirection,
    httpHeaders,
    cacheManager,
    useOldImageOnUrlChange,
    color,
    filterQuality,
    colorBlendMode,
    placeholderFadeInDuration,
  } = {}) {
    super();

    this.key = key;
    this.imageUrl = imageUrl;
    this.imageBuilder = imageBuilder;
    this.placeholder = placeholder;
    this.errorWidget = errorWidget;
    this.fadeOutDuration = fadeOutDuration;
    this.fadeOutCurve = fadeOutCurve;
    this.fadeInDuration = fadeInDuration;
    this.fadeInCurve = fadeInCurve;
    this.width = width;
    this.height = height;
    this.fit = fit;
    this.alignment = alignment;
    this.repeat = repeat;
    this.matchTextDirection = matchTextDirection;
    this.httpHeaders = httpHeaders;
    this.cacheManager = cacheManager;
    this.useOldImageOnUrlChange = useOldImageOnUrlChange;
    this.color = color;
    this.filterQuality = filterQuality;
    this.colorBlendMode = colorBlendMode;
    this.placeholderFadeInDuration = placeholderFadeInDuration;
  }

  preBuild(buildContext) {
    // 暂时只处理placeholder
    if (this.placeholder) {
      this.placeholderChild = this.placeholder(buildContext, this.imageUrl);
      delete this.placeholder;
    }
  }
}

CachedNetworkImage.new = function (arg) {
  return new CachedNetworkImage(arg);
};

// src__cached_image_widget = Object.create(null);
// src__cached_image_widget.CachedNetworkImage = CachedNetworkImage;
// exports.src__cached_image_widget = src__cached_image_widget;

//for js dev
module.exports = {
  CachedNetworkImage,
};


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-cached-network-image/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-cached-network-image/index.js ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let widgetExports = __webpack_require__(/*! ./cached_network_image */ "./node_modules/@tencent/mxflutter-cached-network-image/cached_network_image.js");
module.exports = widgetExports;


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-dio/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-dio/index.js ***!
  \******************************************************/
/*! default exports */
/*! export BaseOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Dio [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Headers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Options [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RequestOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Response [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ResponseType [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const packages__mxdio = __webpack_require__(/*! ./mxdio */ "./node_modules/@tencent/mxflutter-dio/mxdio.js");
exports.Dio = packages__mxdio.MXDio;
exports.BaseOptions = packages__mxdio.MXBaseOptions
exports.Options = packages__mxdio.MXOptions;
exports.Headers = packages__mxdio.MXHeaders;
exports.Response = packages__mxdio.MXResponse;
exports.RequestOptions = packages__mxdio.MXRequestOptions
exports.ResponseType = packages__mxdio.MXResponseType;


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-dio/mxdio.js":
/*!******************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-dio/mxdio.js ***!
  \******************************************************/
/*! default exports */
/*! export MXBaseOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXDio [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXHeaders [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXRequestOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXResponse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MXResponseType [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

const { MXDartClass, MXLifecycleDartClass, MXMirrorObjMethodCall, MXJSLog } = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");

MXResponseType = {
  json: { _name: 'ResponseType.json', index: 0 },
  stream: { _name: 'ResponseType.stream', index: 1 },
  plain: { _name: 'ResponseType.plain', index: 2 },
  bytes: { _name: 'ResponseType.bytes', index: 3 },
};

class MXBaseOptions extends MXDartClass {
  constructor({
    method,
    connectTimeout,
    receiveTimeout,
    sendTimeout,
    baseUrl,
    queryParameters,
    extra,
    headers,
    responseType,
    contentType,
    validateStatus,
    receiveDataWhenStatusError,
    followRedirects,
    maxRedirects,
  } = {}) {
    super();
    this.className = 'BaseOptions';

    this.method = method;
    this.connectTimeout = connectTimeout;
    this.receiveTimeout = receiveTimeout;
    this.sendTimeout = sendTimeout;
    this.baseUrl = baseUrl;
    this.queryParameters = queryParameters;
    this.extra = extra;
    this.headers = headers;
    this.responseType = responseType;
    this.contentType = contentType;
    this.validateStatus = validateStatus;
    this.receiveDataWhenStatusError = receiveDataWhenStatusError;
    this.followRedirects = followRedirects;
    this.maxRedirects = maxRedirects;
  }
}

class MXOptions extends MXDartClass {
  constructor({
    method,
    sendTimeout,
    receiveTimeout,
    extra,
    headers,
    responseType,
    contentType,
    validateStatus,
    receiveDataWhenStatusError,
    followRedirects,
    maxRedirects,
    // requestEncoder,
    // responseDecoder,
  } = {}) {
    super();
    this.className = 'Options';
    this.method = method;
    this.sendTimeout = sendTimeout;
    this.receiveTimeout = receiveTimeout;
    this.extra = extra;
    this.headers = headers;
    this.responseType = responseType;
    this.contentType = contentType;
    this.validateStatus = validateStatus;
    this.receiveDataWhenStatusError = receiveDataWhenStatusError;
    this.followRedirects = followRedirects;
    this.maxRedirects = maxRedirects;
    // this.requestEncoder = requestEncoder;
    // this.responseDecoder = responseDecoder;
  }
}

class MXRequestOptions extends MXDartClass {
  constructor({
    method,
    sendTimeout,
    receiveTimeout,
    connectTimeout,
    data,
    path,
    queryParameters,
    baseUrl,
    extra,
    headers,
    responseType,
    contentType,
    validateStatus,
    receiveDataWhenStatusError,
    followRedirects,
    maxRedirects,
  } = {}) {
    super();
    this.className = 'RequestOptions';
    this.method = method;
    this.sendTimeout = sendTimeout;
    this.receiveTimeout = receiveTimeout;
    this.connectTimeout = connectTimeout;
    this.data = data;
    this.path = path;
    this.queryParameters = queryParameters;
    this.baseUrl = baseUrl;
    this.extra = extra;
    this.headers = headers;
    this.responseType = responseType;
    this.contentType = contentType;
    this.validateStatus = validateStatus;
    this.receiveDataWhenStatusError = receiveDataWhenStatusError;
    this.followRedirects = followRedirects;
    this.maxRedirects = maxRedirects;
  }
}

class MXHeaders {
  constructor({ map } = {}) {
    this.map = map;
  }
  /// Convenience method for the value for a single valued header. If
  /// there is no header with the provided name, [:null:] will be
  /// returned. If the header has more than one value an exception is
  /// thrown.
  value(name) {
    let arr = this.map[name];
    if (arr == null) return null;
    if (arr.length == 1) return arr[0];
    throw Exception('"$name" header has more than one value, please use Headers[name]');
  }
}

MXHeaders.acceptHeader = 'accept';
MXHeaders.contentEncodingHeader = 'content-encoding';
MXHeaders.contentLengthHeader = 'content-length';
MXHeaders.contentTypeHeader = 'content-type';
MXHeaders.wwwAuthenticateHeader = 'www-authenticate';
// Header field value
MXHeaders.jsonContentType = 'application/json; charset=utf-8';
MXHeaders.formUrlEncodedContentType = 'application/x-www-form-urlencoded';

class MXResponse extends MXDartClass {
  constructor({ data, headers, request, isRedirect, statusCode, statusMessage, redirects, extra } = {}) {
    super();
    this.className = 'Response';

    this.data = data;
    this.headers = headers;
    this.request = request;
    this.isRedirect = isRedirect;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.redirects = redirects;
    this.extra = extra;
  }

  static fromJSON(jsonMap) {
    let resp = new MXResponse();
    resp.data = jsonMap['data'];
    resp.headers = new MXHeaders(jsonMap['headers']);
    resp.request = jsonMap['request'];
    resp.isRedirect = jsonMap['isRedirect'];
    resp.statusCode = jsonMap['statusCode'];
    resp.statusMessage = jsonMap['statusMessage'];
    resp.redirects = jsonMap['redirects'];
    resp.extra = jsonMap['extra'];

    return resp;
  }
}

///为了iOS / Android 双平台同时支持，用Flutter层能力来实现网络
class MXDio extends MXLifecycleDartClass {
  constructor(baseOptions) {
    //创建对应FLutter对象
    var argument = new MXMirrorObjMethodCall({
      className: 'Dio',
      args: {
        baseOptions: baseOptions,
      },
    });

    super(argument);
  }

  get(
    path,
    {
      queryParameters,
      options,
      //cancelToken,
      onReceiveProgress,
    } = {},
  ) {
    return this.request(path, {
      options: this.checkOptions('get', options),
      queryParameters: queryParameters,
      //cancelToken: cancelToken,
      onReceiveProgress: onReceiveProgress,
    });
  }

  post(
    path,
    {
      data,
      queryParameters, // Map<String, dynamic>
      options, //Options
      //cancelToken,
      onSendProgress, //ProgressCallback
      onReceiveProgress, //ProgressCallback
    } = {},
  ) {
    return this.request(path, {
      data: data,
      options: this.checkOptions('post', options),
      queryParameters: queryParameters,

      //cancelToken: cancelToken,
      onSendProgress: onSendProgress,
      onReceiveProgress: onReceiveProgress,
    });
  }

  request(
    path,
    {
      data,
      queryParameters, // Map<String, dynamic>
      options, //Options
      onSendProgress, //ProgressCallback
      onReceiveProgress, //ProgressCallback
    } = {},
  ) {
    let onSendProgressCallbackID = this.addCallback(onSendProgress);
    let onReceiveProgressCallbackID = this.addCallback(onReceiveProgress);

    let argument = new MXMirrorObjMethodCall({
      className: 'Dio',
      funcName: 'request',
      args: {
        path: path,
        data: data,
        options: options,
        queryParameters: queryParameters,
        onSendProgress: onSendProgressCallbackID,
        onReceiveProgress: onReceiveProgressCallbackID,
      },
    });

    let that = this;
    let promiseResult = new Promise(function (resolve, reject) {
      that.invokeMirrorObjMethod(argument, function (value) {
        if (value != null) {
          let jsonMap = JSON.parse(value);
          let response = MXResponse.fromJSON(jsonMap);

          if (response) {
            response.options = options;
          }

          if (options.responseType == MXResponseType.bytes) {
            response.data = convert.base64Encode(response.data);
          }

          resolve(response);
        } else {
          resolve(null);
        }

        setTimeout(function () {
          that.removeCallback(onSendProgressCallbackID);
          that.removeCallback(onReceiveProgressCallbackID);
        }, 1000);
      });
    });

    return promiseResult;
  }

  checkOptions(method, options) {
    options = options ? options : new MXOptions();
    options.method = method;
    return options;
  }
}

function MXFDio(baseOptions) {
  return new MXDio(baseOptions);
}

//手写JS使用的导出
exports.MXDio = MXFDio;
exports.MXBaseOptions = MXBaseOptions;
exports.MXOptions = MXOptions;
exports.MXHeaders = MXHeaders;
exports.MXResponse = MXResponse;
exports.MXRequestOptions = MXRequestOptions;
exports.MXResponseType = MXResponseType;


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-pull-to-refresh/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-pull-to-refresh/index.js ***!
  \******************************************************************/
/*! default exports */
/*! export ClassicFooter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ClassicHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! export IconPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LoadStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LoadStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshConfiguration [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshController [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SmartRefresher [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


let smartRefresherExports = __webpack_require__(/*! ./src/smart_refresher.js */ "./node_modules/@tencent/mxflutter-pull-to-refresh/src/smart_refresher.js");
let classIndicatorExports = __webpack_require__(/*! ./src/indicator/class_indicator.js */ "./node_modules/@tencent/mxflutter-pull-to-refresh/src/indicator/class_indicator.js");

exports.SmartRefresher = smartRefresherExports.SmartRefresher;
exports.RefreshController = smartRefresherExports.RefreshController;
exports.RefreshConfiguration = smartRefresherExports.RefreshConfiguration;
exports.LoadStatus = smartRefresherExports.LoadStatus;
exports.LoadStyle = smartRefresherExports.LoadStyle;
exports.IconPosition = smartRefresherExports.IconPosition;
exports.RefreshStatus = smartRefresherExports.RefreshStatus;

exports.ClassicHeader = classIndicatorExports.ClassicHeader;
exports.ClassicFooter = classIndicatorExports.ClassicFooter;


/***/ }),

/***/ "./node_modules/@tencent/mxflutter-pull-to-refresh/src/indicator/class_indicator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-pull-to-refresh/src/indicator/class_indicator.js ***!
  \******************************************************************************************/
/*! default exports */
/*! export ClassicFooter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ClassicHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

const { MXMirrorWidget ,MXLifecycleWidgetControllerBase,MXMirrorObjMethodCall} = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");

class ClassicHeader extends MXMirrorWidget {
    constructor({
        key,
        refreshStyle,
        height,
        completeDuration,
        outerBuilder,
        textStyle,
        releaseText,
        refreshingText,
        canTwoLevelIcon,
        twoLevelView,
        canTwoLevelText,
        completeText,
        failedText,
        idleText,
        iconPos,
        spacing,
        refreshingIcon,
        failedIcon,
        completeIcon,
        idleIcon,
        releaseIcon,
    } = {}) {
        super();

        this.key = key;
        this.refreshStyle = refreshStyle;
        this.height = height;
        this.completeDuration = completeDuration;
        this.outerBuilder = outerBuilder;
        this.textStyle = textStyle;
        this.releaseText = releaseText;
        this.refreshingText = refreshingText;
        this.canTwoLevelIcon = canTwoLevelIcon;
        this.twoLevelView = twoLevelView;
        this.canTwoLevelText = canTwoLevelText;
        this.completeText = completeText;
        this.failedText = failedText;
        this.idleText = idleText;
        this.iconPos = iconPos;
        this.spacing = spacing;
        this.refreshingIcon = refreshingIcon;
        this.failedIcon = failedIcon;
        this.completeIcon = completeIcon;
        this.idleIcon = idleIcon;
        this.releaseIcon = releaseIcon;
    }
}

ClassicHeader.new = function (arg) {
    return new ClassicHeader(arg);
};

class ClassicFooter extends MXMirrorWidget {
    constructor({
        key,
        onClick,
        loadStyle,
        height,
        outerBuilder,
        textStyle,
        loadingText,
        noDataText,
        noMoreIcon,
        idleText,
        failedText,
        canLoadingText,
        failedIcon,
        iconPos,
        spacing,
        completeDuration,
        loadingIcon,
        canLoadingIcon,
        idleIcon,
    } = {}) {
        super();

        this.key = key;
        this.onClick = onClick;
        this.loadStyle = loadStyle;
        this.height = height;
        this.outerBuilder = outerBuilder;
        this.textStyle = textStyle;
        this.loadingText = loadingText;
        this.noDataText = noDataText;
        this.noMoreIcon = noMoreIcon;
        this.idleText = idleText;
        this.failedText = failedText;
        this.canLoadingText = canLoadingText;
        this.failedIcon = failedIcon;
        this.iconPos = iconPos;
        this.spacing = spacing;
        this.completeDuration = completeDuration;
        this.loadingIcon = loadingIcon;
        this.canLoadingIcon = canLoadingIcon;
        this.idleIcon = idleIcon;
    }
}

ClassicFooter.new = function (arg) {
    return new ClassicFooter(arg);
};

// src__indicator__classic_indicator = Object.create(null);
// src__indicator__classic_indicator.ClassicHeader = ClassicHeader;
// src__indicator__classic_indicator.ClassicFooter = ClassicFooter;

// exports.src__indicator__classic_indicator = src__indicator__classic_indicator;

exports.ClassicHeader = ClassicHeader;
exports.ClassicFooter = ClassicFooter;

/***/ }),

/***/ "./node_modules/@tencent/mxflutter-pull-to-refresh/src/smart_refresher.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tencent/mxflutter-pull-to-refresh/src/smart_refresher.js ***!
  \********************************************************************************/
/*! default exports */
/*! export IconPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LoadStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LoadStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshConfiguration [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshController [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RefreshStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SmartRefresher [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.


const { MXMirrorWidget ,MXLifecycleWidgetControllerBase,MXMirrorObjMethodCall} = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");

LoadStatus = {
    start: {
        _name: "CrossAxisAlignment.idle",
        index: 0
    },
    end: {
        _name: "CrossAxisAlignment.canLoading",
        index: 1
    },
    center: {
        _name: "CrossAxisAlignment.loading",
        index: 2
    },
    stretch: {
        _name: "CrossAxisAlignment.noMore",
        index: 3
    },
    baseline: {
        _name: "CrossAxisAlignment.failed",
        index: 4
    }
};

class RefreshConfiguration extends MXMirrorWidget {
    constructor({
        child,
        headerBuilder,
        footerBuilder,
        dragSpeedRatio,
        shouldFooterFollowWhenNotFull,
        enableScrollWhenTwoLevel,
        enableLoadingWhenNoData,
        enableBallisticRefresh,
        springDescription,
        enableScrollWhenRefreshCompleted,
        enableLoadingWhenFailed,
        twiceTriggerDistance,
        closeTwoLevelDistance,
        skipCanRefresh,
        autoLoad,
        maxOverScrollExtent,
        enableBallisticLoad,
        maxUnderScrollExtent,
        headerTriggerDistance,
        footerTriggerDistance,
        hideFooterWhenNotFull,
        topHitBoundary,
        bottomHitBoundary,
    } = {}) {
        super();

        this.child = child;
        this.headerBuilder = headerBuilder;
        this.footerBuilder = footerBuilder;
        this.dragSpeedRatio = dragSpeedRatio;
        this.shouldFooterFollowWhenNotFull = shouldFooterFollowWhenNotFull;
        this.enableScrollWhenTwoLevel = enableScrollWhenTwoLevel;
        this.enableLoadingWhenNoData = enableLoadingWhenNoData;
        this.enableBallisticRefresh = enableBallisticRefresh;
        this.springDescription = springDescription;
        this.enableScrollWhenRefreshCompleted = enableScrollWhenRefreshCompleted;
        this.enableLoadingWhenFailed = enableLoadingWhenFailed;
        this.twiceTriggerDistance = twiceTriggerDistance;
        this.closeTwoLevelDistance = closeTwoLevelDistance;
        this.skipCanRefresh = skipCanRefresh;
        this.autoLoad = autoLoad;
        this.maxOverScrollExtent = maxOverScrollExtent;
        this.enableBallisticLoad = enableBallisticLoad;
        this.maxUnderScrollExtent = maxUnderScrollExtent;
        this.headerTriggerDistance = headerTriggerDistance;
        this.footerTriggerDistance = footerTriggerDistance;
        this.hideFooterWhenNotFull = hideFooterWhenNotFull;
        this.topHitBoundary = topHitBoundary;
        this.bottomHitBoundary = bottomHitBoundary;
    }

    preBuild(buildContext) {
        if (this.headerBuilder) {
          this.headerBuilderChild = this.headerBuilder();
          delete this.headerBuilder;
        }

        if (this.footerBuilder) {
            this.footerBuilderChild = this.footerBuilder();
            delete this.footerBuilder;
        }

    }
}

RefreshConfiguration.new = function (arg) {
    return new RefreshConfiguration(arg);
};

class SmartRefresher extends MXMirrorWidget {
    constructor({
        key,
        controller,
        child,
        header,
        footer,
        enablePullDown,
        enablePullUp,
        enableTwoLevel,
        onRefresh,
        onLoading,
        onTwoLevel,
        onOffsetChange,
        dragStartBehavior,
        primary,
        cacheExtent,
        semanticChildCount,
        reverse,
        physics,
        scrollDirection,
        scrollController,
    } = {}) {
        super();

        this.key = key;
        this.controller = controller;
        this.child = child;
        this.header = header;
        this.footer = footer;
        this.enablePullDown = enablePullDown;
        this.enablePullUp = enablePullUp;
        this.enableTwoLevel = enableTwoLevel;
        this.onRefresh = onRefresh;
        this.onLoading = onLoading;
        this.onTwoLevel = onTwoLevel;
        this.onOffsetChange = onOffsetChange;
        this.dragStartBehavior = dragStartBehavior;
        this.primary = primary;
        this.cacheExtent = cacheExtent;
        this.semanticChildCount = semanticChildCount;
        this.reverse = reverse;
        this.physics = physics;
        this.scrollDirection = scrollDirection;
        this.scrollController = scrollController;
    }
}

SmartRefresher.new = function (arg) {
    return new SmartRefresher(arg);
};

LoadStyle = {
    ShowAlways: {
        _name: "LoadStyle.ShowAlways",
        index: 0
    },
    HideAlways: {
        _name: "LoadStyle.HideAlways",
        index: 1
    },
    ShowWhenLoading: {
        _name: "LoadStyle.ShowWhenLoading",
        index: 2
    },
};

IconPosition = {
    left: {
        _name: "IconPosition.left",
        index: 0
    },
    right: {
        _name: "IconPosition.right",
        index: 1
    },
    top: {
        _name: "IconPosition.top",
        index: 2
    },
    bottom: {
        _name: "IconPosition.bottom",
        index: 3
    },
};

class RefreshController extends MXLifecycleWidgetControllerBase {
    constructor({
        initialRefresh,
        initialRefreshStatus,
        initialLoadStatus,
    } = {}) {
        super();

        this.initialRefresh = initialRefresh;
        this.initialRefreshStatus = initialRefreshStatus;
        this.initialLoadStatus = initialLoadStatus;

    }

    /// request complete,the header will enter complete state,
    ///
    /// resetFooterState : it will set the footer state from noData to idle
    refreshCompleted({ resetFooterState = false } = {}) {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshCompleted",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }

    /// end twoLeveling,will return back first floor
    twoLevelComplete(
        { duration = new Duration({ milliseconds: 500 }), curve } = {}) {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "twoLevelComplete",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }

    /// request failed,the header display failed state
    refreshFailed() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshFailed",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }

    /// not show success or failed, it will set header state to idle and spring back at once
    refreshToIdle() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshToIdle",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }


    loadComplete() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadComplete",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }

    loadFailed() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadFailed",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }

    loadNoData() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadNoData",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }

    resetNoData() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "resetNoData",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }

    dispose() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "dispose",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
}

RefreshController.new = function (arg) {
    return new RefreshController(arg);
};

RefreshStatus = {
    idle: { _name: "RefreshStatus.idle", index: 0 },
    canRefresh: { _name: "RefreshStatus.canRefresh", index: 1 },
    refreshing: { _name: "RefreshStatus.refreshing", index: 2 },
    completed: { _name: "RefreshStatus.completed", index: 3 },
    failed: { _name: "RefreshStatus.failed", index: 4 },
    canTwoLevel: { _name: "RefreshStatus.canTwoLevel", index: 5 },
    twoLevelOpening: { _name: "RefreshStatus.twoLevelOpening", index: 6 },
    twoLeveling: { _name: "RefreshStatus.twoLeveling", index: 7 },
    twoLevelClosing: { _name: "RefreshStatus.twoLevelClosing", index: 8 },
};

// src__smart_refresher = Object.create(null);
// src__smart_refresher.SmartRefresher = SmartRefresher;
// src__smart_refresher.RefreshConfiguration = RefreshConfiguration;
// src__smart_refresher.RefreshController = RefreshController;
// src__smart_refresher.LoadStatus = LoadStatus;
// src__smart_refresher.LoadStyle = LoadStyle;
// src__smart_refresher.IconPosition = IconPosition;
// src__smart_refresher.RefreshStatus = RefreshStatus;

// exports.src__smart_refresher = src__smart_refresher;

exports.SmartRefresher = SmartRefresher;
exports.RefreshController = RefreshController;
exports.RefreshConfiguration = RefreshConfiguration;
exports.LoadStatus = LoadStatus;
exports.LoadStyle = LoadStyle;
exports.IconPosition = IconPosition;
exports.RefreshStatus = RefreshStatus;

/***/ }),

/***/ "./src/app_demo/animation.js":
/*!***********************************!*\
  !*** ./src/app_demo/animation.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  Container,
  Center,
  AppBar,
  Text,
  Icon,
  IconData,
  FloatingActionButton,
  Image,
  Animation,
  Tween,
  AnimationController,
  AnimatedBuilder,
  Duration,
  AnimationStatus

} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");


//业务代码

class JSAnimationPage extends MXJSStatefulWidget {
  constructor() {
    super('JSAnimationPage');
  }

  createState() {
    return new JSAnimationPageState(this);
  }
}

class JSAnimationPageState extends MXJSWidgetState {
  constructor() {
    super();

    this.tween = new Tween({ begin: 50.0, end: 300.0 });
    this.animationController = new AnimationController({ duration: new Duration({ seconds: 3 }) });
    this.animation = new Animation({ tween: this.tween, controller: this.animationController });

    this.animation.addStatusListener(this.animationLoopFunc.bind(this));

    this.count = 0;
  }

  animationLoopFunc(status) {
    MXJSLog.log('callback from flutter ....  ' + status);
    if (status == AnimationStatus.completed) {
      this.animationController.reverse();
      this.count++;
    } else if (status == AnimationStatus.dismissed) {
      this.animationController.forward();
    }
    if (this.count > 5) {
      this.animation.removeStatusListener(this.animationLoopFunc);
    }
  }

  beginAnimation() {
    this.animationController.forward();
  }

  build(context) {
    var imageRatio = 1.455;

    let w = new Scaffold({
      appBar: new AppBar({
        title: new Text("Animation Demo")
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(new IconData(0xe145, { fontFamily: 'MaterialIcons', semanticLabel: 'Action' })),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new ScaleAnimation({
        child: Image.network('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
        animation: this.animation
      })
    });

    return w;
  }
}


class ScaleAnimation extends MXJSStatefulWidget {

  constructor({
    child,
    animation
  } = {}) {
    super('ScaleAnimation');
    this.child = child;
    this.animation = animation;
  }

  createState() {
    return new ScaleAnimationState(this);
  }
}

class ScaleAnimationState extends MXJSWidgetState {

  build(context) {
    var imageRatio = 1.455;
    let widget = new Center({
      child: new AnimatedBuilder({
        animation: this.widget.animation,
        widget: new Container({
          // height: this.animation.value() * imageRatio + 2 - 5,
          width: "$value",
          child: this.widget.child
        })
        // child: this.child,
      })
    })
    return widget;
  }
}
module.exports = { JSAnimationPage };


/***/ }),

/***/ "./src/app_demo/component/section_title.js":
/*!*************************************************!*\
  !*** ./src/app_demo/component/section_title.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {




let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Padding,
  Theme,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class SectionTitle extends MXJSStatelessWidget {
  constructor(title,{key}={}){
    super("SectionTitle",{key:key});
    this.title = title;
  }

  build(context){
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xFFFFFFFF) }),
          new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
          new Text(this.title, {
            textAlign: TextAlign.start,
            style:new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.title.fontWeight,
              color:Colors.white
            })
          })
        ]
      })
    });
  }
}

module.exports = {
  SectionTitle,
}



/***/ }),

/***/ "./src/app_demo/contact.js":
/*!*********************************!*\
  !*** ./src/app_demo/contact.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    MXJSLog,
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    Color,
    Text,
    Icon,
    IconData,
    Theme,
    ThemeData,
    CustomScrollView,
    SliverAppBar,
    SliverChildListDelegate,
    EdgeInsets,
    Expanded,
    Column,
    Image,
    BoxFit,
    Row,
    BorderSide,
    BoxDecoration,
    Border,
    MergeSemantics,
    SizedBox,
    IconButton,
    PopupMenuButton,
    PopupMenuItem,
    FlexibleSpaceBar,
    Stack,
    StackFit,
    AnnotatedRegion,
    DecoratedBox,
    LinearGradient,
    Alignment,
    SliverList,
    SystemUiOverlayStyle,
    Padding,
    DefaultTextStyle,
    MXJSStatelessWidget,
    SafeArea,
    Colors
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");


class ContactCategory extends MXJSStatelessWidget {
    constructor({icon, children} = {}) {
      super('ContactCategory');

      this.icon = icon;
      this.children = children;
    }

    build(context) {
        let themeData = Theme.of(context);
        let widget = new Container({
            padding: EdgeInsets.symmetric({
                vertical: 16.0
            }),
            decoration: new BoxDecoration({
                border: new Border({
                    bottom: new BorderSide({
                        color: themeData.dividerColor
                    })
                })
            }),
            child: new DefaultTextStyle({
                style: themeData.textTheme.subhead,
                child: new SafeArea({
                    top: false,
                    bottom: false,
                    child: new Row({
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                            new Container({
                                padding: EdgeInsets.symmetric({
                                    vertical: 24.0
                                }),
                                width: 72.0,
                                child: new Icon(this.icon, {
                                    color: themeData.primaryColor
                                })
                            }),
                            new Expanded({
                                child: new Column({
                                    children: this.children
                                })
                            })
                        ]
                    })
                })
            })
        });

        return widget;
    }
}

class ContactItem extends MXJSStatelessWidget {
    constructor({icon, lines, tooltip, onPressed} = {}) {
        super('ContactItem');

        this.icon = icon;
        this.lines = lines;
        this.tooltip = tooltip;
        this.onPressed = onPressed;
    }
    
    build(context) {
        let themeData = Theme.of(context);
        let columnChildren = [];
        let rowChildren = [];

        let length = this.lines.length;
        for(let i = 0; i < length; i++) {
            if (i != length -1) {
                columnChildren.push(new Text(this.lines[i]));
            }
            else {
                columnChildren.push(new Text(this.lines[i], {style: themeData.textTheme.caption}));
            }
        }
        rowChildren = [
            new Expanded({
                child: new Column({
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: columnChildren,
                }),
            }),
        ];

        if (this.icon != null) {
            rowChildren.push(
                new SizedBox({
                    width: 72.0,
                    child: new IconButton({
                        icon: new Icon(this.icon),
                        color: themeData.primaryColor,
                        onPressed: this.onPressed ,
                    }),
                })
            );
        }

        let widget = new MergeSemantics({
            child: new Padding({
                padding: EdgeInsets.symmetric({
                    vertical: 16.0,
                }),
                child: new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: rowChildren,
                }),
            }),
        });
    
        return widget;
    }
}

AppBarBehavior = {
    normal: 0, 
    pinned: 1, 
    floating: 2, 
    snapping: 3, 
};


class JSContactPage extends MXJSStatefulWidget {
    constructor() {
        super('JSContactPage');
    }

    createState() {
        return new JSContactPageState(this);
    }
}

class JSContactPageState extends MXJSWidgetState { 
    build(context) {
        let widget = new Theme({
            data: new ThemeData({
                brightness: Brightness.light,
                primarySwatch: Colors.indigo,
                platform: Theme.of(context).platform
            }),
            child: new Scaffold({
                body: new CustomScrollView({
                  slivers: this.buildBody(context)
                })
            })
        });
        return widget;
    }

    buildBody(context) {
        let appBarHeight = 256.0;
        let appBarBehavior = AppBarBehavior.pinned;
        let themeData = Theme.of(context);
        let widget = [
            new SliverAppBar({
                backgroundColor: themeData.primaryColor,
                expandedHeight: appBarHeight,
                pinned: appBarBehavior == AppBarBehavior.pinned,
                floating: appBarBehavior == AppBarBehavior.floating || appBarBehavior == AppBarBehavior.snapping,
                snap: appBarBehavior == AppBarBehavior.snapping,
                actions: [
                    new IconButton({
                        icon: new Icon(new IconData(0xe150, {fontFamily:'MaterialIcons'})),
                        tooltip: 'Edit',
                        onPressed: function () {
                            MXJSLog.log('edit button pressed');
                        }
                    }),
                    new PopupMenuButton({
                        onSelected: function(args) {
                            MXJSLog.log('more button pressed, index ' + args);
                        },
                        itemBuilder: function(context) {
                            let list = [
                                new PopupMenuItem({
                                    value: AppBarBehavior.normal,
                                    child: new Text('App bar scrolls away'),
                                }),
                                new PopupMenuItem({
                                    value: AppBarBehavior.pinned,
                                    child: new Text('App bar stays away'),
                                }),
                                new PopupMenuItem({
                                    value: AppBarBehavior.floating,
                                    child: new Text('App bar floats'),
                                }),
                                new PopupMenuItem({
                                    value: AppBarBehavior.snapping,
                                    child: new Text('App bar snaps'),
                                }),
                            ];
                            return list;
                        }
                    })
                ],
                flexibleSpace: new FlexibleSpaceBar({
                    title: new Text('Ali Connors'),
                    background: new Stack({
                        fit: StackFit.expand,
                        children: [
                            Image.asset('people/ali_landscape.png', {
                                mxPackage: 'flutter_gallery_assets',
                                fit: BoxFit.cover,
                                height: appBarHeight
                            }),
                            new DecoratedBox({
                                decoration: new BoxDecoration({
                                    gradient: new LinearGradient({
                                        begin: new Alignment(0.0, -1.0),
                                        end: new Alignment(0.0, -0.4),
                                        colors: [
                                            new Color(0x60000000), 
                                            new Color(0x00000000),
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            new SliverList({
                delegate: new SliverChildListDelegate([
                    new AnnotatedRegion({
                        value: new SystemUiOverlayStyle({
                            systemNavigationBarColor: new Color(0xFF000000),
                            systemNavigationBarDividerColor: null,
                            statusBarColor: null,
                            systemNavigationBarIconBrightness: Brightness.light,
                            statusBarIconBrightness: Brightness.light,
                            statusBarBrightness:Brightness.dark
                        }),
                        child: new ContactCategory({
                            icon: new IconData(0xe0b0, {fontFamily:'MaterialIcons'}),
                            children:[
                                new ContactItem({
                                    icon: new IconData(0xe0c9, {fontFamily:'MaterialIcons'}),
                                    tooltip: 'Send message',
                                    onPressed: function() {
                                        MXJSLog.log('Send message');
                                    },
                                    lines: [
                                        '(650) 555-1234',
                                        'Mobile'
                                    ]
                                }),
                                new ContactItem({
                                    icon: new IconData(0xe0c9, {fontFamily:'MaterialIcons'}),
                                    tooltip: 'Send message',
                                    onPressed: function () {
                                        MXJSLog.log('Send message');
                                    },
                                    lines: [
                                        '(323) 555-6789',
                                        'Work'
                                    ]
                                }),
                                new ContactItem({
                                    icon: new IconData(0xe0c9, {fontFamily:'MaterialIcons'}),
                                    tooltip: 'Send message',
                                    onPressed: function () {
                                        MXJSLog.log('Send message');
                                    },
                                    lines: [
                                        '(650) 555-6789',
                                        'Home'
                                    ]
                                })
                            ]
                        })
                    }),
                    new ContactCategory({
                        icon: new IconData(0xe0d0, {fontFamily:'MaterialIcons'}),
                        children:[
                            new ContactItem({
                                icon: new IconData(0xe0be, {fontFamily:'MaterialIcons'}),
                                tooltip: 'Send personal e-mail',
                                onPressed: function () {
                                    MXJSLog.log('Send personal e-mail');
                                },
                                lines: [
                                    'ali_connors@example.com',
                                    'Personal'
                                ]
                            }),
                            new ContactItem({
                                icon: new IconData(0xe0be, {fontFamily:'MaterialIcons'}),
                                tooltip: 'Send personal e-mail',
                                onPressed: function () {
                                    MXJSLog.log('Send personal e-mail');
                                },
                                lines: [
                                    'aliconnors@example.com',
                                    'Work'
                                ]
                            })
                        ]
                    }),
                    new ContactCategory({
                        icon: new IconData(0xe0c8, {fontFamily:'MaterialIcons'}),
                        children:[
                            new ContactItem({
                                icon: new IconData(0xe55b, {fontFamily:'MaterialIcons'}),
                                tooltip: 'Open map',
                                onPressed: function () {
                                    MXJSLog.log('Open map');
                                },
                                lines: [
                                    '2000 Main Street',
                                    'San Francisco, CA',
                                    'Home'
                                ]
                            }),
                            new ContactItem({
                                icon: new IconData(0xe55b, {fontFamily:'MaterialIcons'}),
                                tooltip: 'Open map',
                                onPressed: function () {
                                    MXJSLog.log('Open map');
                                },
                                lines: [
                                    '1600 Amphitheater Parkway',
                                    'Mountain View, CA',
                                    'Work'
                                ]
                            }),
                            new ContactItem({
                                icon: new IconData(0xe55b, {fontFamily:'MaterialIcons'}),
                                tooltip: 'Open map',
                                onPressed: function () {
                                    MXJSLog.log('Open map');
                                },
                                lines: [
                                    '126 Severyns Ave',
                                    'Mountain View, CA',
                                    'Jet Travel'
                                ]
                            })
                        ]
                    }),
                    new ContactCategory({
                        icon: new IconData(0xe8df, {fontFamily:'MaterialIcons'}),
                        children:[
                            new ContactItem({
                                lines: [
                                    'Birthday',
                                    'January 9th, 1989'
                                ]
                            }),
                            new ContactItem({
                                lines: [
                                    'Wedding anniversary',
                                    'June 21st, 2014'
                                ]
                            }),
                            new ContactItem({
                                lines: [
                                    'First day in office',
                                    'January 20th, 2015'
                                ]
                            }),
                            new ContactItem({
                                lines: [
                                    'Last day in office',
                                    'August 9th, 2018'
                                ]
                            })
                        ]
                    })
                ])
            })
        ];
        return widget;
    }
}

module.exports = {JSContactPage};


/***/ }),

/***/ "./src/app_demo/custom_js_api.js":
/*!***************************************!*\
  !*** ./src/app_demo/custom_js_api.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.


let {
    MXJSLog,
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    MaterialApp,
    Scaffold,
    Container,
    ListTile,
    Center,
    Color,
    AppBar,
    SnackBar,
    Text,
    Icon,
    IconData,
    EdgeInsets,
    Colors,
    IconButton,
    FlatButton,
    RaisedButton,
    FloatingActionButton,
    Column,
    Row,
    DropdownButton,
    DropdownMenuItem,
    MainAxisAlignment,
    TextStyle,
    PopupMenuButton,
    PopupMenuItem,
    ButtonBar,
    MainAxisSize,
    TextDecoration,
    RichText,
    TextSpan,
    Expanded,
    FontWeight,
    TextFormField,
    InputDecoration,
    UnderlineInputBorder,
    TextInputType,
    SizedBox,
    TextField,
    TextEditingController,
    ListView,
    Slider,
    TextDecorationStyle,
    TextOverflow,
    Padding,
    Icons,
    MethodChannel,
    DartClass, 
    MXMirrorObjMethodCall,
    MXLifecycleDartClass
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");


class MXMirrorExample extends MXLifecycleDartClass {

    constructor(baseOptions) {
        
        //创建对应FLutter对象
        var newDartMirrorObjArgs = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            args: {
                "key": 123
            }
        });
        super(newDartMirrorObjArgs);
        
    }

    //封装getMyAppName
    getMyAppName(platform, { v } = {}) {

        let argument = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            funcName: "getMyAppName",
            args: {
                platform: platform,
                v: v,
            }
        });

       return this.invokeMirrorObjMethodAsyc(argument);
    }

    // release dart侧实例
    release(){
        super.release();
    }

}


//使用MXMirrorExample
let g_jsApi = new MXMirrorExample();

const { SectionTitle } = __webpack_require__(/*! ./component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleJSApi extends MXJSStatefulWidget {
    constructor() {
        super("PageExampleJSApi");

    }

    createState() {
        return new PageExampleJSApiState(this);
    }
}

class PageExampleJSApiState extends MXJSWidgetState {
    constructor() {
        super("PageExampleJSApiState");
        this.response = "点击小人Run上面的代码";
    }

    codeText() {
        return "let result = await this.jsApi.getMyAppName('iOS', {v:'1.0'})";
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text("MXMirrorExample Example"),
            }),
            body: new ListView({
                children: [
                    new SectionTitle("Code 调用Dart MXMirrorExample.getMyAppName"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.codeText(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: async function () {

                            //call js api
                            let result = await g_jsApi.getMyAppName("iOS", { v: "1.0" });

                            this.setState(function () {

                                this.response = result;

                            }.bind(this));

                        }.bind(this)
                    }),
                    new SectionTitle("JSApi Result"),

                    new Padding({
                        padding: EdgeInsets.all(10),
                        child: new Text(this.response, {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                    })

                ],
            })
        });
        return widget;
    }
}

module.exports = {
    PageExampleJSApi,
};

/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_builder.js":
/*!*********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_builder.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {




let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Animation,
  AnimatedBuilder,
  AnimationController,
  Duration,
  Interval,
  CurveTween,
  Curves,
  Tween,
  Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedBuilder extends MXJSStatelessWidget {
  constructor() {
    super("PageExampleAnimatedBuilder");
    this.count = 0;
    this.tween = new Tween({ begin: 50.0, end: 300.0 });
    this.animationController = new AnimationController({ duration: new Duration({ seconds: 2 }) });
    this.animation = new Animation({ tween: this.tween, controller: this.animationController });
    this.animation.addStatusListener(this.animationLoopFunc.bind(this));
  }

  animationLoopFunc(status) {
    MXJSLog.log('callback from flutter ....  ' + status);
    if (status === AnimationStatus.completed) {
      this.animationController.reverse();
      this.count++;
    } else if (status === AnimationStatus.dismissed) {
      this.animationController.forward();
    }
    if (this.count > 5) {
      this.animation.removeStatusListener(this.animationLoopFunc);
    }
  }

  beginAnimation() {
    this.animationController.forward();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilder'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new ScaleAnimation({
        child: Image.network('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
        animation: this.animation
      })
    });
    return widget;
  }
}



class ScaleAnimation extends MXJSStatefulWidget {

  constructor({
    child,
    animation
  } = {}) {
    super('ScaleAnimation');
    this.child = child;
    this.animation = animation;
  }

  createState() {
    return new ScaleAnimationState();
  }
}

class ScaleAnimationState extends MXJSWidgetState {

  build(context) {
    const imageRatio = 1.455;
    const widget = new Center({
      child: new AnimatedBuilder({
        animation: this.widget.animation,
        widget: new Container({
          width: "$value",
          child: this.widget.child
        })
        // child: this.child,
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedBuilder,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_builder_v2.js":
/*!************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_builder_v2.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Animation,
  AnimatedBuilder,
  AnimationController,
  Duration,
  Interval,
  CurveTween,
  Curves,
  Tween,
  Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class PageExampleAnimatedBuilderV2 extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedBuilderV2');
  }

  createState() {
    return new PageExampleAnimatedBuilderV2State();
  }
}

class PageExampleAnimatedBuilderV2State extends MXJSWidgetState {

  constructor(){
    super();

    this.count = 0;
    this._controller = new AnimationController({
      duration: new Duration({seconds: 1}),
      // upperBound: 100,
      // vsync: this,
    });

    this._controller.forward();
  }

  beginAnimation(){
    this._controller.repeat();
  }

  build(context){
    const widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilderV2',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed:function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new AnimatedBuilder({
        animation: this._controller,
        widget: new Center({
          child: new Container({
            height:"100+$value*100",   //动态计算$value
            width:"200+$value*200",    //动态计算$value
            color: Colors.orange,
            child: new Center({
              child: new Text("点击 ( + ) 号，重复播放",{
                style:new TextStyle({
                  color:Colors.white
                })
              }),
            }),
          })
        }),
        // builder 由于异步频繁调用JS，会导致JS线程性能问题，没有实现，async在builder中调用也存在技术问题
        // builder: function(context,child){
        //   console.log("call builder in js....aaaa");
        //   MXJSLog.log("call builder in js....bbbb");
        //   return child;
        // },
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedBuilderV2,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_container.js":
/*!***********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_container.js ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedContainer,
  Duration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class PageExampleAnimatedContainer extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedContainer');
  }

  createState() {
    return new PageExampleAnimatedContainerState();
  }
}

class PageExampleAnimatedContainerState extends MXJSWidgetState {

  constructor(){
    super();
    this.selected = false;
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedContainer',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

          this.setState(function() {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedContainer"),
          new AnimatedContainer({
            height:this.selected ? 300.0 : 100,
            color:this.selected ? Colors.blue:Colors.orange,
            duration:new Duration({milliseconds:200}),
            child:new Center({
              child:new Text("动画容器",{
                style:new TextStyle({
                  color:Colors.white,
                  fontSize:20,
                })
              }),
            })
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedContainer,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_cross_fade.js":
/*!************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_cross_fade.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedCrossFade,
  CrossFadeState,
  Duration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedCrossFade extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedCrossFade');
  }

  createState() {
    return new PageExampleAnimatedCrossFadeState();
  }
}

class PageExampleAnimatedCrossFadeState extends MXJSWidgetState {

  constructor() {
    super();
    this.selected = true;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedCrossFade'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.setState(function () {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new AnimatedCrossFade({
        crossFadeState: this.selected ? CrossFadeState.showFirst : CrossFadeState.showSecond,
        duration: new Duration({ milliseconds: 200 }),
        firstChild: new Container({
          width: 500,
          height: 300,
          color: Colors.orange,
          child: new Center({
            child: new Text("第一页", {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              })
            })
          }),
        }),
        secondChild: new Container({
          width: 500,
          height: 300,
          color: Colors.blue,
          child: new Center({
            child: new Text("第二页", {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              })
            })
          }),
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedCrossFade,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_default_text_style.js":
/*!********************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_default_text_style.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedDefaultTextStyle,
  Duration,
  Alignment,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedDefaultTextStyle extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedDefaultTextStyle');
  }

  createState() {
    return new PageExampleAnimatedDefaultTextStyleState();
  }
}

class PageExampleAnimatedDefaultTextStyleState extends MXJSWidgetState {

  constructor(){
    super();
    this.fontSize = 20;
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedDefaultTextStyle',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedDefaultTextStyle"),
          new Container({
            height:600,
            alignment:Alignment.center,
            child:new AnimatedDefaultTextStyle({
              child:new Text("Hello"),
              style:new TextStyle({
                fontWeight: FontWeight.bold,
                fontSize:this.fontSize,
                color:Colors.blue,
              }),
              duration: new Duration({milliseconds:350}),
            }),
          }),
          new Row({
            mainAxisAlignment:MainAxisAlignment.center,
            children: [
              new RaisedButton({
                child:new Text("缩小"),
                onPressed:function(){
                  this.setState(function() {
                    this.fontSize -= 30;
                  }.bind(this));
                }.bind(this)
              }),
              new SizedBox({
                width: 10,
                height: 10,
              }),
              new RaisedButton({
                child:new Text("放大"),
                onPressed:function(){
                  this.setState(function() {
                    this.fontSize += 30;
                  }.bind(this));
                }.bind(this)
              }),
            ]
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedDefaultTextStyle,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_list_state.js":
/*!************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_list_state.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedListState extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedListState');
  }

  createState() {
    return new PageExampleAnimatedListStateState();
  }
}

class PageExampleAnimatedListStateState extends MXJSWidgetState {

  constructor(){
    super();
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedListState',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedListState"),
          new SectionTitle("Todo...."),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedListState,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_modal_barrier.js":
/*!***************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_modal_barrier.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class PageExampleAnimatedModalBarrier extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedModalBarrier');
  }

  createState() {
    return new PageExampleAnimatedModalBarrierState();
  }
}

class PageExampleAnimatedModalBarrierState extends MXJSWidgetState {

  constructor() {
    super();
  }
  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedModalBarrier'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedModalBarrier"),
          new SectionTitle("todo..."),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedModalBarrier,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_opacity.js":
/*!*********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_opacity.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedOpacity,
  FlutterLogo,
  Duration,
  Curves,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedOpacity extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedOpacity');
  }

  createState() {
    return new PageExampleAnimatedOpacityState();
  }
}

class PageExampleAnimatedOpacityState extends MXJSWidgetState {

  constructor() {
    super();
    this.opacityLevel = 1.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.opacityLevel = this.opacityLevel == 0 ? 1.0 : 0.0;
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedOpacity'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedOpacity"),
          new AnimatedOpacity({
            opacity: this.opacityLevel,
            duration: new Duration({ seconds: 1 }),
            child: new Padding({
              padding: EdgeInsets.all(10),
              child: new FlutterLogo({ size: 100 }),
            }),
          })
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedOpacity,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_physical_model.js":
/*!****************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_physical_model.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedPhysicalModel,
  Duration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedPhysicalModel extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedPhysicalModel');
  }

  createState() {
    return new PageExampleAnimatedPhysicalModelState();
  }
}

class PageExampleAnimatedPhysicalModelState extends MXJSWidgetState {
  constructor(){
    super();
    this.elevation = 50.0;
  }

  changeOpacity() {
    this.setState(function(){
      this.elevation = this.elevation == 50.0 ? 0.0 : 50.0;
    });
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedPhysicalModel',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new Center({
        child: new AnimatedPhysicalModel({
          child:new Container({
            width: 200,
            height: 200,
            color:Colors.orange,
          }),
          shape:BoxShape.rectangle,
          elevation: this.elevation,
          color:Colors.blue,
          shadowColor: Colors.grey,
          duration:new Duration({milliseconds:500}),
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedPhysicalModel,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_positioned.js":
/*!************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_positioned.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedPositioned,
  Duration,
  Stack,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedPositioned extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedPositioned');
  }

  createState() {
    return new PageExampleAnimatedPositionedState();
  }
}

class PageExampleAnimatedPositionedState extends MXJSWidgetState {

  constructor() {
    super();
    this.top = 200.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.top = this.top == 200.0 ? 0.0 : 200.0;
    });
  }


  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedPositioned'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new Stack({
        children: [
          new AnimatedPositioned({
            child: new Container({
              width: 200,
              height: 200,
              color: Colors.orange,
            }),
            top: this.top,
            left: this.top,
            duration: new Duration({ milliseconds: 300 }),
          }),
        ]
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedPositioned,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_size.js":
/*!******************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_size.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedSize,
  Duration,
  Stack,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedSize extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedSize');
  }

  createState() {
    return new PageExampleAnimatedSizeState();
  }
}

class PageExampleAnimatedSizeState extends MXJSWidgetState {

  constructor() {
    super("PageExampleAnimatedSize");
    this.size = 200.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.size = this.size == 200.0 ? 50.0 : 200.0;
    }.bind(this));
  }


  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedSize'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new AnimatedSize({
        child: new Container({
          width: this.size,
          height: this.size,
          color: Colors.orange,
        }),
        duration: new Duration({ milliseconds: 300 }),
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedSize,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_widget.js":
/*!********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_widget.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedWidget extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedWidget');
  }

  createState() {
    return new PageExampleAnimatedWidgetState();
  }
}

class PageExampleAnimatedWidgetState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedWidget'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedWidget"),
          new SectionTitle("抽象类"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedWidget,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_animated_widget_base_state.js":
/*!*******************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_animated_widget_base_state.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleAnimatedWidgetBaseState extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedWidgetBaseState');
  }

  createState() {
    return new PageExampleAnimatedWidgetBaseStateState();
  }
}

class PageExampleAnimatedWidgetBaseStateState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedWidgetBaseState'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedWidgetBaseState"),
          new SectionTitle("todo...泛型类"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedWidgetBaseState,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_decorated_box_transition.js":
/*!*****************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_decorated_box_transition.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Duration,
  DecoratedBoxTransition,
  Radius,
  BoxDecoration,
  AnimationController,
  DecorationTween,
  FlutterLogo,
  BorderRadius,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleDecoratedBoxTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleDecoratedBoxTransition');
  }

  createState() {
    return new PageExampleDecoratedBoxTransitionState();
  }
}

class PageExampleDecoratedBoxTransitionState extends MXJSWidgetState {

  constructor() {
    super();
    this.controller = new AnimationController();
    this.controller.duration = new Duration({ seconds: 2 });


    let dTween = new DecorationTween({
      begin: new BoxDecoration({
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(0))
      }),
      end: new BoxDecoration({
        color: Colors.blue,
        borderRadius: BorderRadius.all(Radius.circular(20))
      })
    });

    this.rectAnimation = dTween.animate(this.controller)

  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleDecoratedBoxTransition'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.controller.forward();
        }.bind(this),
      }),
      body: new DecoratedBoxTransition({
        child: new FlutterLogo({ size: 300 }),
        decoration: this.rectAnimation,
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleDecoratedBoxTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_fade_transition.js":
/*!********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_fade_transition.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleFadeTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleFadeTransition');
  }

  createState() {
    return new PageExampleFadeTransitionState();
  }
}

class PageExampleFadeTransitionState extends MXJSWidgetState {
  constructor(){
    super();
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleFadeTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleFadeTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleFadeTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_hero.js":
/*!*********************************************************!*\
  !*** ./src/app_demo/examples/animation/example_hero.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleHero extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleHero');
  }

  createState() {
    return new PageExampleHeroState();
  }
}

class PageExampleHeroState extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleHero'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleHero"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleHero,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_positioned_transition.js":
/*!**************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_positioned_transition.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExamplePositionedTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExamplePositionedTransition');
  }

  createState() {
    return new PageExamplePositionedTransitionState();
  }
}

class PageExamplePositionedTransitionState extends MXJSWidgetState {
  constructor(){
    super();
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExamplePositionedTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExamplePositionedTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExamplePositionedTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_rotation_transition.js":
/*!************************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_rotation_transition.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleRotationTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleRotationTransition');
  }

  createState() {
    return new PageExampleRotationTransitionState();
  }
}

class PageExampleRotationTransitionState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleRotationTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleRotationTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleRotationTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_scale_transition.js":
/*!*********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_scale_transition.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleScaleTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleScaleTransition');
  }

  createState() {
    return new PageExampleScaleTransitionState();
  }
}

class PageExampleScaleTransitionState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleScaleTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleScaleTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleScaleTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_size_transition.js":
/*!********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_size_transition.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleSizeTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleSizeTransition');
  }

  createState() {
    return new PageExampleSizeTransitionState();
  }
}

class PageExampleSizeTransitionState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleSizeTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleSizeTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSizeTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/animation/example_slide_transition.js":
/*!*********************************************************************!*\
  !*** ./src/app_demo/examples/animation/example_slide_transition.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleSlideTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleSlideTransition');
  }

  createState() {
    return new PageExampleSlideTransitionState();
  }
}

class PageExampleSlideTransitionState extends MXJSWidgetState {
  constructor(){
    super("PageExampleSlideTransition");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleSlideTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleSlideTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSlideTransition,
};


/***/ }),

/***/ "./src/app_demo/examples/example_app_bar.js":
/*!**************************************************!*\
  !*** ./src/app_demo/examples/example_app_bar.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleAppBar extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleAppBar");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('AppBar',),
      }),
      body: new ListView({
        children:[
          new ListTile({
            title: new Text('最简单的AppBar',),
          }),
          new AppBar({
            title: new Text('NormalAppBar',),
          }),
          new ListTile({
            title: new Text('标题换色',),
          }),
          new AppBar({
            title: new Text('NormalAppBar',{
              style:new TextStyle({
                color:Colors.white,
              }),
            }),
          }),
          new ListTile({
            title: new Text('背景换色',),
          }),
          new AppBar({
            backgroundColor: Colors.blue,
            title: new Text('NormalAppBar',{
              style:new TextStyle({
                color:Colors.white,
              }),
            }),
          }),
          new ListTile({
            title: new Text('设置 leading',),
          }),
          new AppBar({
            leading: new IconButton({
              icon:new Icon(Icons.add),
            }),
            title: new Text('AppBar',),
          }),
          new ListTile({
            title: new Text('设置 action',),
          }),
          new AppBar({
            actions:[
              new IconButton({
                icon:new Icon(Icons.camera),
              })
            ],
            title: new Text('AppBar',),
          }),
          new ListTile({
            title: new Text('设置多个action',),
          }),
          new AppBar({
            actions:[
              new IconButton({
                icon:new Icon(Icons.camera),
              }),
              new IconButton({
                icon:new Icon(Icons.print),
              }),
            ],
            title: new Text('AppBar',),
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAppBar,
};


/***/ }),

/***/ "./src/app_demo/examples/example_button.js":
/*!*************************************************!*\
  !*** ./src/app_demo/examples/example_button.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");


class PageExampleButton extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleButton");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Button',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("RaisedButton"),
          new RaisedButton({
            child:new Text("普通按钮"),
            onPressed:function () {
              MXJSLog.log("Click");
            },
          }),
          new SectionTitle("失效Disable"),
          new RaisedButton({
            child:new Text("Disable 按钮"),
          }),
          new SectionTitle("FlatButton"),
          new FlatButton({
            child:new Text("Flat 按钮"),
          }),
          new FlatButton({
            textColor:Colors.black,
            child:new Text("Flat 按钮"),
          }),
          new SectionTitle("Icon Button"),
          new IconButton({
            icon:new Icon(Icons.camera),
          }),
          new SectionTitle("Floating Action Button"),
          new FloatingActionButton({
            child:new Icon(Icons.camera),
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleButton,
};


/***/ }),

/***/ "./src/app_demo/examples/example_column.js":
/*!*************************************************!*\
  !*** ./src/app_demo/examples/example_column.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleColumn extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleColumn");
  }

  genSevenContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.orange,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.yellow,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.green,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.indigo,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.purple,
        height:30,
        width:100,
      }),
    ];
  }


  genThreeContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.orange,
        height:30,
        width:100,
      }),
      new Container({
        color:Colors.yellow,
        height:30,
        width:100,
      }),
    ];
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Column',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("Column"),}),
          new Column({
            children: [
              new Container({
                color:Colors.red,
                height:30,
              }),
              new Container({
                color:Colors.orange,
                height:30,
              }),
              new Container({
                color:Colors.yellow,
                height:30,
              }),
              new Container({
                color:Colors.green,
                height:30,
              }),
              new Container({
                color:Colors.indigo,
                height:30,
              }),
              new Container({
                color:Colors.purple,
                height:30,
              }),
            ],
          }),

          new ListTile({title:new Text("Column Top-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Top-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Top-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Column Center-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Center-Center"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Center-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Column Bottom-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Bottom-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column Bottom-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),



          new ListTile({title:new Text("Column SpaceAround-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceAround-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceAround-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),




          new ListTile({title:new Text("Column SpaceBetween-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceBetween-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceBetween-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Column SpaceEvenly-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceEvenly-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Column SpaceEvenly-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Column({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),


        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleColumn,
};


/***/ }),

/***/ "./src/app_demo/examples/example_container.js":
/*!****************************************************!*\
  !*** ./src/app_demo/examples/example_container.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleContainer extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleContainer");
  }

  genSevenContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.orange,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.yellow,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.green,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.indigo,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.purple,
        height:100,
        width:30,
      }),
    ];
  }


  genThreeContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.orange,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.yellow,
        height:100,
        width:30,
      }),
    ];
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Container',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("Container"),}),
          new Container({
            color:Colors.red,
            height:100,
          }),
          new ListTile({title:new Text("放置内容的Container"),}),
          new Container({
            color:Colors.orange,
            height:100,
            child:new Text("我有内容")
          }),
          new ListTile({title:new Text("Container里的Padding"),}),
          new Container({
            color:Colors.yellow,
            padding:EdgeInsets.all(10),
            child:new Text("我有内容")
          }),
          new ListTile({title:new Text("圆角的Container"),}),
          new Container({
            margin:EdgeInsets.all(10),
            padding:EdgeInsets.all(10),
            decoration:new BoxDecoration({
              borderRadius:BorderRadius.all(Radius.circular(4.0)),
              color:Colors.green,
            }),
            child:new Text("我是圆角Container")
          }),
          new ListTile({title:new Text("固定高宽的Container"),}),
          new Center({
            child:new Container({
              width:100,
              height:100,
              margin:EdgeInsets.all(10),
              padding:EdgeInsets.all(10),
              decoration:new BoxDecoration({
                borderRadius:BorderRadius.all(Radius.circular(4.0)),
                color:Colors.green,
              }),
              child:new Text("100x100",{
                style:new TextStyle({color:Colors.white}),
              })
            }),
          })
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleContainer,
};


/***/ }),

/***/ "./src/app_demo/examples/example_flutter_color.js":
/*!********************************************************!*\
  !*** ./src/app_demo/examples/example_flutter_color.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  FlutterLogo,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class PageExampleColor extends MXJSStatelessWidget {
  constructor() {
    super("PageExampleColor");
  }

  genColorUI(title, colorPrefix) {
    let uiList = [
      new ListTile({ title: new Text(title) }),
    ];
    const colorKeys = ["50", "100", "150", "200", "250", "300", "350", "400", "450", "500", "550", "600", "650", "700", "750", "800", "850", "900"]
    //查找主色
    colorKeys.forEach(function (colorKey) {
      const colorFnName = colorPrefix + colorKey;
      if (Colors.hasOwnProperty(colorPrefix)) {

        let c = Colors[colorPrefix].swatch[parseInt(colorKey)];

        if (c != null) {
          uiList.push(new Container({
            height: 30,
            color: Colors[colorPrefix].swatch[colorKey],
            child: new Center({
              child: new Text(colorFnName),
            }),
          }));
        }
      }
    });
    //查找辅助色
    let accentUIList = [];
    colorKeys.forEach(function (colorKey) {
      const colorFnName = colorPrefix + "Accent";
      if (Colors.hasOwnProperty(colorFnName)) {

        let c = Colors[colorPrefix].swatch[parseInt(colorKey)];

        if (c != null) {
          accentUIList.push(new Container({
            height: 30,
            color: c,
            child: new Center({
              child: new Text(colorFnName + colorKey),
            }),
          }));
        }
      }
    });
    if (accentUIList.length > 0) {
      uiList.push(new ListTile({ title: new Text(title + "Accent") }));
      uiList = uiList.concat(accentUIList);
    }

    return uiList;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Color'),
      }),
      body: new ListView({
        children: [
          ...this.genColorUI("Red", "red"),
          ...this.genColorUI("pink", "pink"),
          ...this.genColorUI("purple", "purple"),
          ...this.genColorUI("deepPurple", "deepPurple"),
          ...this.genColorUI("indigo", "indigo"),
          ...this.genColorUI("blue", "blue"),
          ...this.genColorUI("lightBlue", "lightBlue"),
          ...this.genColorUI("cyan", "cyan"),
          ...this.genColorUI("teal", "teal"),
          ...this.genColorUI("green", "green"),
          ...this.genColorUI("lightGreen", "lightGreen"),
          ...this.genColorUI("lime", "lime"),
          ...this.genColorUI("yellow", "yellow"),
          ...this.genColorUI("amber", "amber"),
          ...this.genColorUI("orange", "orange"),
          ...this.genColorUI("deepOrange", "deepOrange"),
          ...this.genColorUI("brown", "brown"),
          ...this.genColorUI("blueGrey", "blueGrey"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleColor,
};


/***/ }),

/***/ "./src/app_demo/examples/example_flutter_icon.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/examples/example_flutter_icon.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  FlutterLogo,
  Wrap,
  Scrollbar,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleIcon extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleIcon");
  }

  genIconUI(iconName){
    const icon = Icons[iconName];
    return new Container({
      padding:EdgeInsets.all(10),
      child:new Row({
        children: [
          new Icon(icon),
          new SizedBox({width:10}),
          new Text(iconName),
        ]
      }),
    })
  }

  build(context){
    const icons = [
      "threesixty",
      "threed_rotation",
      "four_k",
      "ac_unit",
      "access_alarm",
      "access_alarms",
      "access_time",
      "accessibility",
      "accessibility_new",
      "accessible",
      "accessible_forward",
      "account_balance",
      "account_balance_wallet",
      "account_box",
      "account_circle",
      "adb",
      "add",
      "add_a_photo",
      "add_alarm",
      "add_alert",
      "add_box",
      "add_call",
      "add_circle",
      "add_circle_outline",
      "add_comment",
      "add_location",
      "add_photo_alternate",
      "add_shopping_cart",
      "add_to_home_screen",
      "add_to_photos",
      "add_to_queue",
      "adjust",
      "airline_seat_flat",
      "airline_seat_flat_angled",
      "airline_seat_individual_suite",
      "airline_seat_legroom_extra",
      "airline_seat_legroom_normal",
      "airline_seat_legroom_reduced",
      "airline_seat_recline_extra",
      "airline_seat_recline_normal",
      "airplanemode_active",
      "airplanemode_inactive",
      "airplay",
      "airport_shuttle",
      "alarm",
      "alarm_add",
      "alarm_off",
      "alarm_on",
      "album",
      "all_inclusive",
      "all_out",
      "alternate_email",
      "android",
      "announcement",
      "apps",
      "archive",
      "arrow_back",
      "arrow_back_ios",
      "arrow_downward",
      "arrow_drop_down",
      "arrow_drop_down_circle",
      "arrow_drop_up",
      "arrow_forward",
      "arrow_forward_ios",
      "arrow_left",
      "arrow_right",
      "arrow_upward",
      "art_track",
      "aspect_ratio",
      "assessment",
      "assignment",
      "assignment_ind",
      "assignment_late",
      "assignment_return",
      "assignment_returned",
      "assignment_turned_in",
      "assistant",
      "assistant_photo",
      "atm",
      "attach_file",
      "attach_money",
      "attachment",
      "audiotrack",
      "autorenew",
      "av_timer",
      "backspace",
      "backup",
      "battery_alert",
      "battery_charging_full",
      "battery_full",
      "battery_std",
      "battery_unknown",
      "beach_access",
      "beenhere",
      "block",
      "bluetooth",
      "bluetooth_audio",
      "bluetooth_connected",
      "bluetooth_disabled",
      "bluetooth_searching",
      "blur_circular",
      "blur_linear",
      "blur_off",
      "blur_on",
      "book",
      "bookmark",
      "bookmark_border",
      "border_all",
      "border_bottom",
      "border_clear",
      "border_color",
      "border_horizontal",
      "border_inner",
      "border_left",
      "border_outer",
      "border_right",
      "border_style",
      "border_top",
      "border_vertical",
      "branding_watermark",
      "brightness_1",
      "brightness_2",
      "brightness_3",
      "brightness_4",
      "brightness_5",
      "brightness_6",
      "brightness_7",
      "brightness_auto",
      "brightness_high",
      "brightness_low",
      "brightness_medium",
      "broken_image",
      "brush",
      "bubble_chart",
      "bug_report",
      "build",
      "burst_mode",
      "business",
      "business_center",
      "cached",
      "cake",
      "calendar_today",
      "calendar_view_day",
      "call",
      "call_end",
      "call_made",
      "call_merge",
      "call_missed",
      "call_missed_outgoing",
      "call_received",
      "call_split",
      "call_to_action",
      "camera",
      "camera_alt",
      "camera_enhance",
      "camera_front",
      "camera_rear",
      "camera_roll",
      "cancel",
      "card_giftcard",
      "card_membership",
      "card_travel",
      "casino",
      "cast",
      "cast_connected",
      "category",
      "center_focus_strong",
      "center_focus_weak",
      "change_history",
      "chat",
      "chat_bubble",
      "chat_bubble_outline",
      "check",
      "check_box",
      "check_box_outline_blank",
      "check_circle",
      "check_circle_outline",
      "chevron_left",
      "chevron_right",
      "child_care",
      "child_friendly",
      "chrome_reader_mode",
      "class_",
      "clear",
      "clear_all",
      "close",
      "closed_caption",
      "cloud",
      "cloud_circle",
      "cloud_done",
      "cloud_download",
      "cloud_off",
      "cloud_queue",
      "cloud_upload",
      "code",
      "collections",
      "collections_bookmark",
      "color_lens",
      "colorize",
      "comment",
      "compare",
      "compare_arrows",
      "computer",
      "confirmation_number",
      "contact_mail",
      "contact_phone",
      "contacts",
      "content_copy",
      "content_cut",
      "content_paste",
      "control_point",
      "control_point_duplicate",
      "copyright",
      "create",
      "create_new_folder",
      "credit_card",
      "crop",
      "crop_16_9",
      "crop_3_2",
      "crop_5_4",
      "crop_7_5",
      "crop_din",
      "crop_free",
      "crop_landscape",
      "crop_original",
      "crop_portrait",
      "crop_rotate",
      "crop_square",
      "dashboard",
      "data_usage",
      "date_range",
      "dehaze",
      "delete",
      "delete_forever",
      "delete_outline",
      "delete_sweep",
      "departure_board",
      "description",
      "desktop_mac",
      "desktop_windows",
      "details",
      "developer_board",
      "developer_mode",
      "device_hub",
      "device_unknown",
      "devices",
      "devices_other",
      "dialer_sip",
      "dialpad",
      "directions",
      "directions_bike",
      "directions_boat",
      "directions_bus",
      "directions_car",
      "directions_railway",
      "directions_run",
      "directions_subway",
      "directions_transit",
      "directions_walk",
      "disc_full",
      "dns",
      "do_not_disturb",
      "do_not_disturb_alt",
      "do_not_disturb_off",
      "do_not_disturb_on",
      "dock",
      "domain",
      "done",
      "done_all",
      "done_outline",
      "donut_large",
      "donut_small",
      "drafts",
      "drag_handle",
      "drive_eta",
      "dvr",
      "edit",
      "edit_attributes",
      "edit_location",
      "eject",
      "email",
      "enhanced_encryption",
      "equalizer",
      "error",
      "error_outline",
      "euro_symbol",
      "ev_station",
      "event",
      "event_available",
      "event_busy",
      "event_note",
      "event_seat",
      "exit_to_app",
      "expand_less",
      "expand_more",
      "explicit",
      "explore",
      "exposure",
      "exposure_neg_1",
      "exposure_neg_2",
      "exposure_plus_1",
      "exposure_plus_2",
      "exposure_zero",
      "threed_rotation",
      "four_k",
      "ac_unit",
      "access_alarm",
      "access_alarms",
      "access_time",
      "accessibility",
      "accessibility_new",
      "accessible",
      "accessible_forward",
      "account_balance",
      "account_balance_wallet",
      "account_box",
      "account_circle",
      "adb",
      "add",
      "add_a_photo",
      "add_alarm",
      "add_alert",
      "add_box",
      "add_call",
      "add_circle",
      "add_circle_outline",
      "add_comment",
      "add_location",
      "add_photo_alternate",
      "add_shopping_cart",
      "add_to_home_screen",
      "add_to_photos",
      "add_to_queue",
      "adjust",
      "airline_seat_flat",
      "airline_seat_flat_angled",
      "airline_seat_individual_suite",
      "airline_seat_legroom_extra",
      "airline_seat_legroom_normal",
      "airline_seat_legroom_reduced",
      "airline_seat_recline_extra",
      "airline_seat_recline_normal",
      "airplanemode_active",
      "airplanemode_inactive",
      "airplay",
      "airport_shuttle",
      "alarm",
      "alarm_add",
      "alarm_off",
      "alarm_on",
      "album",
      "all_inclusive",
      "all_out",
      "alternate_email",
      "android",
      "announcement",
      "apps",
      "archive",
      "arrow_back",
      "arrow_back_ios",
      "arrow_downward",
      "arrow_drop_down",
      "arrow_drop_down_circle",
      "arrow_drop_up",
      "arrow_forward",
      "arrow_forward_ios",
      "arrow_left",
      "arrow_right",
      "arrow_upward",
      "art_track",
      "aspect_ratio",
      "assessment",
      "assignment",
      "assignment_ind",
      "assignment_late",
      "assignment_return",
      "assignment_returned",
      "assignment_turned_in",
      "assistant",
      "assistant_photo",
      "atm",
      "attach_file",
      "attach_money",
      "attachment",
      "audiotrack",
      "autorenew",
      "av_timer",
      "backspace",
      "backup",
      "battery_alert",
      "battery_charging_full",
      "battery_full",
      "battery_std",
      "battery_unknown",
      "beach_access",
      "beenhere",
      "block",
      "bluetooth",
      "bluetooth_audio",
      "bluetooth_connected",
      "bluetooth_disabled",
      "bluetooth_searching",
      "blur_circular",
      "blur_linear",
      "blur_off",
      "blur_on",
      "book",
      "bookmark",
      "bookmark_border",
      "border_all",
      "border_bottom",
      "border_clear",
      "border_color",
      "border_horizontal",
      "border_inner",
      "border_left",
      "border_outer",
      "border_right",
      "border_style",
      "border_top",
      "border_vertical",
      "branding_watermark",
      "brightness_1",
      "brightness_2",
      "brightness_3",
      "brightness_4",
      "brightness_5",
      "brightness_6",
      "brightness_7",
      "brightness_auto",
      "brightness_high",
      "brightness_low",
      "brightness_medium",
      "broken_image",
      "brush",
      "bubble_chart",
      "bug_report",
      "build",
      "burst_mode",
      "business",
      "business_center",
      "cached",
      "cake",
      "calendar_today",
      "calendar_view_day",
      "call",
      "call_end",
      "call_made",
      "call_merge",
      "call_missed",
      "call_missed_outgoing",
      "call_received",
      "call_split",
      "call_to_action",
      "camera",
      "camera_alt",
      "camera_enhance",
      "camera_front",
      "camera_rear",
      "camera_roll",
      "cancel",
      "card_giftcard",
      "card_membership",
      "card_travel",
      "casino",
      "cast",
      "cast_connected",
      "category",
      "center_focus_strong",
      "center_focus_weak",
      "change_history",
      "chat",
      "chat_bubble",
      "chat_bubble_outline",
      "check",
      "check_box",
      "check_box_outline_blank",
      "check_circle",
      "check_circle_outline",
      "chevron_left",
      "chevron_right",
      "child_care",
      "child_friendly",
      "chrome_reader_mode",
      "class_",
      "clear",
      "clear_all",
      "close",
      "closed_caption",
      "cloud",
      "cloud_circle",
      "cloud_done",
      "cloud_download",
      "cloud_off",
      "cloud_queue",
      "cloud_upload",
      "code",
      "collections",
      "collections_bookmark",
      "color_lens",
      "colorize",
      "comment",
      "compare",
      "compare_arrows",
      "computer",
      "confirmation_number",
      "contact_mail",
      "contact_phone",
      "contacts",
      "content_copy",
      "content_cut",
      "content_paste",
      "control_point",
      "control_point_duplicate",
      "copyright",
      "create",
      "create_new_folder",
      "credit_card",
      "crop",
      "crop_16_9",
      "crop_3_2",
      "crop_5_4",
      "crop_7_5",
      "crop_din",
      "crop_free",
      "crop_landscape",
      "crop_original",
      "crop_portrait",
      "crop_rotate",
      "crop_square",
      "dashboard",
      "data_usage",
      "date_range",
      "dehaze",
      "delete",
      "delete_forever",
      "delete_outline",
      "delete_sweep",
      "departure_board",
      "description",
      "desktop_mac",
      "desktop_windows",
      "details",
      "developer_board",
      "developer_mode",
      "device_hub",
      "device_unknown",
      "devices",
      "devices_other",
      "dialer_sip",
      "dialpad",
      "directions",
      "directions_bike",
      "directions_boat",
      "directions_bus",
      "directions_car",
      "directions_railway",
      "directions_run",
      "directions_subway",
      "directions_transit",
      "directions_walk",
      "disc_full",
      "dns",
      "do_not_disturb",
      "do_not_disturb_alt",
      "do_not_disturb_off",
      "do_not_disturb_on",
      "dock",
      "domain",
      "done",
      "done_all",
      "done_outline",
      "donut_large",
      "donut_small",
      "drafts",
      "drag_handle",
      "drive_eta",
      "dvr",
      "edit",
      "edit_attributes",
      "edit_location",
      "eject",
      "email",
      "enhanced_encryption",
      "equalizer",
      "error",
      "error_outline",
      "euro_symbol",
      "ev_station",
      "event",
      "event_available",
      "event_busy",
      "event_note",
      "event_seat",
      "exit_to_app",
      "expand_less",
      "expand_more",
      "explicit",
      "explore",
      "exposure",
      "exposure_neg_1",
      "exposure_neg_2",
      "exposure_plus_1",
      "exposure_plus_2",
      "exposure_zero",
      "extension",
      "face",
      "fast_forward",
      "fast_rewind",
      "fastfood",
      "favorite",
      "favorite_border",
      "featured_play_list",
      "featured_video",
      "feedback",
      "fiber_dvr",
      "fiber_manual_record",
      "fiber_new",
      "fiber_pin",
      "fiber_smart_record",
      "file_download",
      "file_upload",
      "filter",
      "filter_1",
      "filter_2",
      "filter_3",
      "filter_4",
      "filter_5",
      "filter_6",
      "filter_7",
      "filter_8",
      "filter_9",
      "filter_9_plus",
      "filter_b_and_w",
      "filter_center_focus",
      "filter_drama",
      "filter_frames",
      "filter_hdr",
      "filter_list",
      "filter_none",
      "filter_tilt_shift",
      "filter_vintage",
      "find_in_page",
      "find_replace",
      "fingerprint",
      "first_page",
      "fitness_center",
      "flag",
      "flare",
      "flash_auto",
      "flash_off",
      "flash_on",
      "flight",
      "flight_land",
      "flight_takeoff",
      "flip",
      "flip_to_back",
      "flip_to_front",
      "folder",
      "folder_open",
      "folder_shared",
      "folder_special",
      "font_download",
      "format_align_center",
      "format_align_justify",
      "format_align_left",
      "format_align_right",
      "format_bold",
      "format_clear",
      "format_color_fill",
      "format_color_reset",
      "format_color_text",
      "format_indent_decrease",
      "format_indent_increase",
      "format_italic",
      "format_line_spacing",
      "format_list_bulleted",
      "format_list_numbered",
      "format_list_numbered_rtl",
      "format_paint",
      "format_quote",
      "format_shapes",
      "format_size",
      "format_strikethrough",
      "format_textdirection_l_to_r",
      "format_textdirection_r_to_l",
      "format_underlined",
      "forum",
      "forward",
      "forward_10",
      "forward_30",
      "forward_5",
      "free_breakfast",
      "fullscreen",
      "fullscreen_exit",
      "functions",
      "g_translate",
      "gamepad",
      "games",
      "gavel",
      "gesture",
      "<i",
      "get_app",
      "gif",
      "golf_course",
      "gps_fixed",
      "gps_not_fixed",
      "gps_off",
      "grade",
      "gradient",
      "grain",
      "graphic_eq",
      "grid_off",
      "grid_on",
      "group",
      "group_add",
      "group_work",
      "hd",
      "hdr_off",
      "hdr_on",
      "hdr_strong",
      "hdr_weak",
      "headset",
      "headset_mic",
      "headset_off",
      "healing",
      "hearing",
      "help",
      "help_outline",
      "high_quality",
      "highlight",
      "highlight_off",
      "history",
      "home",
      "hot_tub",
      "hotel",
      "hourglass_empty",
      "hourglass_full",
      "http",
      "https",
      "image",
      "image_aspect_ratio",
      "import_contacts",
      "import_export",
      "important_devices",
      "inbox",
      "indeterminate_check_box",
      "info",
      "info_outline",
      "input",
      "insert_chart",
      "insert_comment",
      "insert_drive_file",
      "insert_emoticon",
      "insert_invitation",
      "insert_link",
      "insert_photo",
      "invert_colors",
      "invert_colors_off",
      "iso",
      "keyboard",
      "keyboard_arrow_down",
      "keyboard_arrow_left",
      "keyboard_arrow_right",
      "keyboard_arrow_up",
      "keyboard_backspace",
      "keyboard_capslock",
      "keyboard_hide",
      "keyboard_return",
      "keyboard_tab",
      "keyboard_voice",
      "kitchen",
      "label",
      "label_important",
      "label_outline",
      "landscape",
      "language",
      "laptop",
      "laptop_chromebook",
      "laptop_mac",
      "laptop_windows",
      "last_page",
      "launch",
      "layers",
      "layers_clear",
      "leak_add",
      "leak_remove",
      "lens",
      "library_add",
      "library_books",
      "library_music",
      "lightbulb_outline",
      "line_style",
      "line_weight",
      "linear_scale",
      "link",
      "link_off",
      "linked_camera",
      "list",
      "live_help",
      "live_tv",
      "local_activity",
      "local_airport",
      "local_atm",
      "local_bar",
      "local_cafe",
      "local_car_wash",
      "local_convenience_store",
      "local_dining",
      "local_drink",
      "local_florist",
      "local_gas_station",
      "local_grocery_store",
      "local_hospital",
      "local_hotel",
      "local_laundry_service",
      "local_library",
      "local_mall",
      "local_movies",
      "local_offer",
      "local_parking",
      "local_pharmacy",
      "local_phone",
      "local_pizza",
      "local_play",
      "local_post_office",
      "local_printshop",
      "local_see",
      "local_shipping",
      "local_taxi",
      "location_city",
      "location_disabled",
      "location_off",
      "location_on",
      "location_searching",
      "lock",
      "lock_open",
      "lock_outline",
      "looks",
      "looks_3",
      "looks_4",
      "looks_5",
      "looks_6",
      "looks_one",
      "looks_two",
      "loop",
      "loupe",
      "low_priority",
      "loyalty",
      "mail",
      "mail_outline",
      "map",
      "markunread",
      "markunread_mailbox",
      "maximize",
      "memory",
      "menu",
      "merge_type",
      "message",
      "mic",
      "mic_none",
      "mic_off",
      "minimize",
      "missed_video_call",
      "mms",
      "mobile_screen_share",
      "mode_comment",
      "mode_edit",
      "monetization_on",
      "money_off",
      "monochrome_photos",
      "mood",
      "mood_bad",
      "more",
      "more_horiz",
      "more_vert",
      "motorcycle",
      "mouse",
      "move_to_inbox",
      "movie",
      "movie_creation",
      "movie_filter",
      "multiline_chart",
      "music_note",
      "music_video",
      "my_location",
      "nature",
      "nature_people",
      "navigate_before",
      "navigate_next",
      "navigation",
      "near_me",
      "network_cell",
      "network_check",
      "network_locked",
      "network_wifi",
      "new_releases",
      "next_week",
      "nfc",
      "no_encryption",
      "no_sim",
      "not_interested",
      "not_listed_location",
      "note",
      "note_add",
      "notification_important",
      "notifications",
      "notifications_active",
      "notifications_none",
      "notifications_off",
      "notifications_paused",
      "offline_bolt",
      "offline_pin",
      "ondemand_video",
      "opacity",
      "open_in_browser",
      "open_in_new",
      "open_with",
      "outlined_flag",
      "pages",
      "pageview",
      "palette",
      "pan_tool",
      "panorama",
      "panorama_fish_eye",
      "panorama_horizontal",
      "panorama_vertical",
      "panorama_wide_angle",
      "party_mode",
      "pause",
      "pause_circle_filled",
      "pause_circle_outline",
      "payment",
      "people",
      "people_outline",
      "perm_camera_mic",
      "perm_contact_calendar",
      "perm_data_setting",
      "perm_device_information",
      "perm_identity",
      "perm_media",
      "perm_phone_msg",
      "perm_scan_wifi",
      "person",
      "person_add",
      "person_outline",
      "person_pin",
      "person_pin_circle",
      "personal_video",
      "pets",
      "phone",
      "phone_android",
      "phone_bluetooth_speaker",
      "phone_forwarded",
      "phone_in_talk",
      "phone_iphone",
      "phone_locked",
      "phone_missed",
      "phone_paused",
      "phonelink",
      "phonelink_erase",
      "phonelink_lock",
      "phonelink_off",
      "phonelink_ring",
      "phonelink_setup",
      "photo",
      "photo_album",
      "photo_camera",
      "photo_filter",
      "photo_library",
      "photo_size_select_actual",
      "photo_size_select_large",
      "photo_size_select_small",
      "picture_as_pdf",
      "picture_in_picture",
      "picture_in_picture_alt",
      "pie_chart",
      "pie_chart_outlined",
      "pin_drop",
      "place",
      "play_arrow",
      "play_circle_filled",
      "play_circle_outline",
      "play_for_work",
      "playlist_add",
      "playlist_add_check",
      "playlist_play",
      "plus_one",
      "poll",
      "polymer",
      "pool",
      "portable_wifi_off",
      "portrait",
      "power",
      "power_input",
      "power_settings_new",
      "pregnant_woman",
      "present_to_all",
      "print",
      "priority_high",
      "public",
      "publish",
      "query_builder",
      "question_answer",
      "queue",
      "queue_music",
      "queue_play_next",
      "radio",
      "radio_button_checked",
      "radio_button_unchecked",
      "rate_review",
      "receipt",
      "recent_actors",
      "record_voice_over",
      "redeem",
      "redo",
      "refresh",
      "remove",
      "remove_circle",
      "remove_circle_outline",
      "remove_from_queue",
      "remove_red_eye",
      "remove_shopping_cart",
      "reorder",
      "repeat",
      "repeat_one",
      "replay",
      "replay_10",
      "replay_30",
      "replay_5",
      "reply",
      "reply_all",
      "report",
      "report_off",
      "report_problem",
      "restaurant",
      "restaurant_menu",
      "restore",
      "restore_from_trash",
      "restore_page",
      "ring_volume",
      "room",
      "room_service",
      "rotate_90_degrees_ccw",
      "rotate_left",
      "rotate_right",
      "rounded_corner",
      "router",
      "rowing",
      "rss_feed",
      "rv_hookup",
      "satellite",
      "save",
      "save_alt",
      "scanner",
      "scatter_plot",
      "schedule",
      "school",
      "score",
      "screen_lock_landscape",
      "screen_lock_portrait",
      "screen_lock_rotation",
      "screen_rotation",
      "screen_share",
      "sd_card",
      "sd_storage",
      "search",
      "security",
      "select_all",
      "send",
      "sentiment_dissatisfied",
      "sentiment_neutral",
      "sentiment_satisfied",
      "sentiment_very_dissatisfied",
      "sentiment_very_satisfied",
      "settings",
      "settings_applications",
      "settings_backup_restore",
      "settings_bluetooth",
      "settings_brightness",
      "settings_cell",
      "settings_ethernet",
      "settings_input_antenna",
      "settings_input_component",
      "settings_input_composite",
      "settings_input_hdmi",
      "settings_input_svideo",
      "settings_overscan",
      "settings_phone",
      "settings_power",
      "settings_remote",
      "settings_system_daydream",
      "settings_voice",
      "share",
      "shop",
      "shop_two",
      "shopping_basket",
      "shopping_cart",
      "short_text",
      "show_chart",
      "shuffle",
      "shutter_speed",
      "signal_cellular_4_bar",
      "signal_cellular_connected_no_internet_4_bar",
      "signal_cellular_no_sim",
      "signal_cellular_null",
      "signal_cellular_off",
      "signal_wifi_4_bar",
      "signal_wifi_4_bar_lock",
      "signal_wifi_off",
      "sim_card",
      "sim_card_alert",
      "skip_next",
      "skip_previous",
      "slideshow",
      "slow_motion_video",
      "smartphone",
      "smoke_free",
      "smoking_rooms",
      "sms",
      "sms_failed",
      "snooze",
      "sort",
      "sort_by_alpha",
      "spa",
      "space_bar",
      "speaker",
      "speaker_group",
      "speaker_notes",
      "speaker_notes_off",
      "speaker_phone",
      "spellcheck",
      "star",
      "star_border",
      "star_half",
      "stars",
      "stay_current_landscape",
      "stay_current_portrait",
      "stay_primary_landscape",
      "stay_primary_portrait",
      "stop",
      "stop_screen_share",
      "storage",
      "store",
      "store_mall_directory",
      "straighten",
      "streetview",
      "strikethrough_s",
      "style",
      "subdirectory_arrow_left",
      "subdirectory_arrow_right",
      "subject",
      "subscriptions",
      "subtitles",
      "subway",
      "supervised_user_circle",
      "supervisor_account",
      "surround_sound",
      "swap_calls",
      "swap_horiz",
      "swap_horizontal_circle",
      "swap_vert",
      "swap_vertical_circle",
      "switch_camera",
      "switch_video",
      "sync",
      "sync_disabled",
      "sync_problem",
      "system_update",
      "system_update_alt",
      "tab",
      "tab_unselected",
      "table_chart",
      "tablet",
      "tablet_android",
      "tablet_mac",
      "tag_faces",
      "tap_and_play",
      "terrain",
      "text_fields",
      "text_format",
      "text_rotate_up",
      "text_rotate_vertical",
      "text_rotation_angledown",
      "text_rotation_angleup",
      "text_rotation_down",
      "text_rotation_none",
      "textsms",
      "texture",
      "theaters",
      "thumb_down",
      "thumb_up",
      "thumbs_up_down",
      "time_to_leave",
      "timelapse",
      "timeline",
      "timer",
      "timer_10",
      "timer_3",
      "timer_off",
      "title",
      "toc",
      "today",
      "toll",
      "tonality",
      "touch_app",
      "toys",
      "track_changes",
      "traffic",
      "train",
      "tram",
      "transfer_within_a_station",
      "transform",
      "transit_enterexit",
      "translate",
      "trending_down",
      "trending_flat",
      "trending_up",
      "trip_origin",
      "tune",
      "turned_in",
      "turned_in_not",
      "tv",
      "unarchive",
      "undo",
      "unfold_less",
      "unfold_more",
      "update",
      "usb",
      "verified_user",
      "vertical_align_bottom",
      "vertical_align_center",
      "vertical_align_top",
      "vibration",
      "video_call",
      "video_label",
      "video_library",
      "videocam",
      "videocam_off",
      "videogame_asset",
      "view_agenda",
      "view_array",
      "view_carousel",
      "view_column",
      "view_comfy",
      "view_compact",
      "view_day",
      "view_headline",
      "view_list",
      "view_module",
      "view_quilt",
      "view_stream",
      "view_week",
      "vignette",
      "visibility",
      "visibility_off",
      "voice_chat",
      "voicemail",
      "volume_down",
      "volume_mute",
      "volume_off",
      "volume_up",
      "vpn_key",
      "vpn_lock",
      "wallpaper",
      "warning",
      "watch",
      "watch_later",
      "wb_auto",
      "wb_cloudy",
      "wb_incandescent",
      "wb_iridescent",
      "wb_sunny",
      "wc",
      "web",
      "web_asset",
      "weekend",
      "whatshot",
      "widgets",
      "wifi",
      "wifi_lock",
      "wifi_tethering",
      "work",
      "wrap_text",
      "youtube_searched_for",
      "zoom_in",
      "zoom_out",
      "zoom_out_map",
    ];
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Icon',),
      }),
      body: new Scrollbar({
        child:new ListView({
          children:[
            ...icons.map( (iconName)=> {
              return this.genIconUI(iconName);
            })
          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleIcon,
};


/***/ }),

/***/ "./src/app_demo/examples/example_flutter_logo.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/examples/example_flutter_logo.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  FlutterLogo,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleFlutterLogo extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleFlutterLogo");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlutterLogo',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("FlutterLogo")}),
          new FlutterLogo(),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:60}),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:100}),
          //new FlutterLogo({size:100, colors:Colors.orange}),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleFlutterLogo,
};


/***/ }),

/***/ "./src/app_demo/examples/example_image.js":
/*!************************************************!*\
  !*** ./src/app_demo/examples/example_image.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class PageExampleImage extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleImage");
  }

  genImageUI(boxFitName){
    return [
      new ListTile({
        title: new Text('BoxFit.'+boxFitName,),
      }),
      new Container({
        height:150,
        width: 300,
        color:Colors.orange,
        child:Image.asset('people/ali_landscape.png', {
          mxPackage: 'flutter_gallery_assets',
          fit: BoxFit[boxFitName],
          height: 100
        }),
      }),
    ];
  }


  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Image',),
      }),
      body: new ListView({
        children:[
          new ListTile({
            title: new Text('加载网络图片',),
          }),
          Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg',{
            fit: BoxFit.cover,
            height: 250
          }),
          new ListTile({
            title: new Text('加载本地图片',),
          }),
          Image.asset('people/ali_landscape.png', {
            mxPackage: 'flutter_gallery_assets',
            fit: BoxFit.cover,
            height: 250
          }),
          ...this.genImageUI("contain"),
          ...this.genImageUI("fill"),
          ...this.genImageUI("fitHeight"),
          ...this.genImageUI("fitWidth"),
          ...this.genImageUI("scaleDown"),
          ...this.genImageUI("none"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleImage,
};


/***/ }),

/***/ "./src/app_demo/examples/example_placeholder.js":
/*!******************************************************!*\
  !*** ./src/app_demo/examples/example_placeholder.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Placeholder,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExamplePlaceholder extends MXJSStatelessWidget {
  constructor(){
    super("PageExamplePlaceholder");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Placeholder',),
      }),
      body: new ListView({
        children:[
          new ListTile({
            title:new Text("默认占位符"),
          }),
          new Placeholder(),
          new ListTile({
            title:new Text("占位符换色"),
          }),
          new Placeholder({
            fallbackHeight:100,
            color:Colors.orange,
          }),
          new ListTile({
            title:new Text("占位符指定高度"),
          }),
          new Placeholder({
            fallbackHeight:100,
            fallbackWidth:100,
            color:Colors.yellow,
          }),
          new ListTile({
            title:new Text("占位符线条粗细"),
          }),
          new Placeholder({
            fallbackHeight:100,
            fallbackWidth:100,
            strokeWidth:4,
            color:Colors.green,
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExamplePlaceholder,
};


/***/ }),

/***/ "./src/app_demo/examples/example_row.js":
/*!**********************************************!*\
  !*** ./src/app_demo/examples/example_row.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class PageExampleRow extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleRow");
  }

  genSevenContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.orange,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.yellow,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.green,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.indigo,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.purple,
        height:100,
        width:30,
      }),
    ];
  }


  genThreeContainers(){
    return  [
      new Container({
        color:Colors.red,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.orange,
        height:100,
        width:30,
      }),
      new Container({
        color:Colors.yellow,
        height:100,
        width:30,
      }),
    ];
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Row',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("Row"),}),
          new Row({
            children: [
              new Container({
                color:Colors.red,
                height:100,
                width:30,
              }),
              new Container({
                color:Colors.orange,
                height:100,
                width:30,
              }),
              new Container({
                color:Colors.yellow,
                height:100,
                width:30,
              }),
              new Container({
                color:Colors.green,
                height:100,
                width:30,
              }),
              new Container({
                color:Colors.indigo,
                height:100,
                width:30,
              }),
              new Container({
                color:Colors.purple,
                height:100,
                width:30,
              }),
            ],
          }),

          new ListTile({title:new Text("Row Top-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Top-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Top-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.start,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Row Center-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Center-Center"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Center-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.center,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Row Bottom-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Bottom-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row Bottom-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.end,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),



          new ListTile({title:new Text("Row SpaceAround-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceAround-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceAround-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceAround,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),




          new ListTile({title:new Text("Row SpaceBetween-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceBetween-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceBetween-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceBetween,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),

          new ListTile({title:new Text("Row SpaceEvenly-Left"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.start,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceEvenly-Middle"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.center,
              children: this.genThreeContainers(),
            }),
          }),
          new ListTile({title:new Text("Row SpaceEvenly-Right"),}),
          new Container({
            color:Colors.grey,
            height:200,
            child:new Row({
              mainAxisAlignment:MainAxisAlignment.spaceEvenly,
              crossAxisAlignment:CrossAxisAlignment.end,
              children: this.genThreeContainers(),
            }),
          }),


        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleRow,
};


/***/ }),

/***/ "./src/app_demo/examples/example_scaffold.js":
/*!***************************************************!*\
  !*** ./src/app_demo/examples/example_scaffold.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  BottomNavigationBar,
  BottomNavigationBarType,
  BottomNavigationBarItem,
  AnimationController,
  Duration,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Placeholder,
  Theme,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class HomePage extends MXJSStatelessWidget {
  constructor() {
    super("HomePage");
  }
  build(context) {
    return new Center({
      child: new Text("HomePage"),
    })
  }
}


class IdeaPage extends MXJSStatelessWidget {
  constructor() {
    super("IdeaPage");
  }
  build(context) {
    return new Center({
      child: new Text("IdeaPage"),
    })
  }
}


class MessagePage extends MXJSStatelessWidget {
  constructor() {
    super("MessagePage");
  }
  build(context) {
    return new Center({
      child: new Text("MessagePage"),
    })
  }
}


class MyPage extends MXJSStatelessWidget {
  constructor() {
    super("MyPage");
  }
  build(context) {
    return new Center({
      child: new Text("MyPage"),
    })
  }
}

class _NavigationIconView {
  constructor({ icon, title, vsync }) {
    this.item = new BottomNavigationBarItem({
      icon: icon,
      title: title
    });
    this.controller = new AnimationController({
      duration: new Duration({
        milliseconds: 200
      })
    });
  }
}



class PageExampleScaffold extends MXJSStatefulWidget {
  constructor() {
    super("PageExampleScaffold");
  }

  createState() {
    return new PageExampleScaffoldState(this);
  }
}

class PageExampleScaffoldState extends MXJSWidgetState {
  constructor(widget) {
    super(widget);
    this._currentIndex = 0;
    this._navigationViews = [];
    this._pageList = [];
    this._currentPage = null;
  }

  build(context) {
    this._navigationViews = [
      new _NavigationIconView({
        icon: new Icon(Icons.assignment),
        title: new Text("首页")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.all_inclusive),
        title: new Text("想法")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.add_alert),
        title: new Text("通知")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.perm_identity),
        title: new Text("我的")
      }),
    ];

    this._pageList = [
      new HomePage(),
      new IdeaPage(),
      new MessagePage(),
      new MyPage()
    ];

    this._currentPage = this._pageList[this._currentIndex];


    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Scafold'),
      }),
      body: new Center({
        child: this._currentPage
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

        }
      }),
      bottomNavigationBar: new BottomNavigationBar({
        items: this._navigationViews.map(navigationIconView => navigationIconView.item),
        currentIndex: this._currentIndex,
        fixedColor: Theme.of(context).primaryColor,
        type: BottomNavigationBarType.fixed,
        onTap: function (index) {
          this.setState(function () {
            this._navigationViews[this._currentIndex].controller.reverse();
            this._currentIndex = index;
            this._navigationViews[this._currentIndex].controller.forward();
            this._currentPage = this._pageList[this._currentIndex];
          }.bind(this))
        }.bind(this)
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleScaffold,
};


/***/ }),

/***/ "./src/app_demo/examples/example_snake_bar.js":
/*!****************************************************!*\
  !*** ./src/app_demo/examples/example_snake_bar.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");



class PageExampleSnakeBar extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleSnackbar");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Idea Test',),
      }),
      body: new ListView({
        children:[
          new ListTile({
            leading:new Icon(Icons.ac_unit),
            title:new Text("Scaffold.of(context) 测试"),
          }),
          new MyScaffoldBody(),
        ],
      })
    });
    return widget;
  }
}

class MyScaffoldBody extends MXJSStatelessWidget {
  constructor(){
    super("MyScaffoldBody");
  }

  build(context){
    let widget =  new RaisedButton({
      child:new Text("测试 Scaffold.of(context)"),
      onPressed: function () {
        let context = {
          widgetID: this.widgetID,
        };
        Scaffold.of(context).showSnackBar(
          new SnackBar({content: new Text('我是通过JS脚本构建的,终于动态化了！！')})
        );
      }.bind(this),
    });
    return widget;
  }
}


module.exports = {
  PageExampleSnakeBar,
};


/***/ }),

/***/ "./src/app_demo/examples/example_text.js":
/*!***********************************************!*\
  !*** ./src/app_demo/examples/example_text.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleText extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleText");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Text',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("普通文本"),
          new ListTile({
            title:new Text("设置文本颜色",{
              style:new TextStyle({
                color:Colors.orange,
              })
            }),
          }),
          new SectionTitle("富文本"),
          new Padding({
            padding:EdgeInsets.all(10),
            child: new RichText({
              text: new TextSpan({
                style: new TextStyle({
                  color: new Color(0xFFFF8C00),
                  fontSize: 18.0,
                  decoration: TextDecoration.underline,
                  decorationColor: Colors.orange,
                  decorationStyle: TextDecorationStyle.dashed,
                }),
                text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                children: [
                  new TextSpan({
                    text: ' style  ',
                    style: new TextStyle({
                      color: Colors.red,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    })
                  }),
                  new TextSpan({
                    text: 'your text',
                    style: new TextStyle({
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    })
                  }),
                ],
              }),
              overflow: TextOverflow.ellipsis,
              maxLines: 99
            }),
          })
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleText,
};


/***/ }),

/***/ "./src/app_demo/examples/index.js":
/*!****************************************!*\
  !*** ./src/app_demo/examples/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title */ "./src/app_demo/component/section_title.js");

let { PageExampleAppBar } = __webpack_require__(/*! ./example_app_bar.js */ "./src/app_demo/examples/example_app_bar.js");
let { PageExampleText } = __webpack_require__(/*! ./example_text.js */ "./src/app_demo/examples/example_text.js");
let { PageExampleButton } = __webpack_require__(/*! ./example_button.js */ "./src/app_demo/examples/example_button.js");

let { PageExampleSnakeBar } = __webpack_require__(/*! ./example_snake_bar.js */ "./src/app_demo/examples/example_snake_bar.js");
let { PageExampleColumn } = __webpack_require__(/*! ./example_column.js */ "./src/app_demo/examples/example_column.js");
let { PageExampleRow } = __webpack_require__(/*! ./example_row.js */ "./src/app_demo/examples/example_row.js");
let { PageExampleContainer } = __webpack_require__(/*! ./example_container.js */ "./src/app_demo/examples/example_container.js");
let { PageExampleFlutterLogo } = __webpack_require__(/*! ./example_flutter_logo.js */ "./src/app_demo/examples/example_flutter_logo.js");
let { PageExampleColor } = __webpack_require__(/*! ./example_flutter_color.js */ "./src/app_demo/examples/example_flutter_color.js");
let { PageExampleIcon } = __webpack_require__(/*! ./example_flutter_icon.js */ "./src/app_demo/examples/example_flutter_icon.js");
let { PageExampleImage } = __webpack_require__(/*! ./example_image.js */ "./src/app_demo/examples/example_image.js");
let { PageExamplePlaceholder } = __webpack_require__(/*! ./example_placeholder.js */ "./src/app_demo/examples/example_placeholder.js");
let { PageExampleScaffold } = __webpack_require__(/*! ./example_scaffold.js */ "./src/app_demo/examples/example_scaffold.js");


//Animated
const { PageExampleAnimatedBuilder } = __webpack_require__(/*! ./animation/example_animated_builder.js */ "./src/app_demo/examples/animation/example_animated_builder.js");
const { PageExampleAnimatedBuilderV2 } = __webpack_require__(/*! ./animation/example_animated_builder_v2.js */ "./src/app_demo/examples/animation/example_animated_builder_v2.js");
const { PageExampleAnimatedContainer } = __webpack_require__(/*! ./animation/example_animated_container.js */ "./src/app_demo/examples/animation/example_animated_container.js");
const { PageExampleAnimatedCrossFade } = __webpack_require__(/*! ./animation/example_animated_cross_fade.js */ "./src/app_demo/examples/animation/example_animated_cross_fade.js");
const { PageExampleAnimatedDefaultTextStyle } = __webpack_require__(/*! ./animation/example_animated_default_text_style.js */ "./src/app_demo/examples/animation/example_animated_default_text_style.js");
const { PageExampleAnimatedListState } = __webpack_require__(/*! ./animation/example_animated_list_state.js */ "./src/app_demo/examples/animation/example_animated_list_state.js");
const { PageExampleAnimatedModalBarrier } = __webpack_require__(/*! ./animation/example_animated_modal_barrier.js */ "./src/app_demo/examples/animation/example_animated_modal_barrier.js");
const { PageExampleAnimatedOpacity } = __webpack_require__(/*! ./animation/example_animated_opacity.js */ "./src/app_demo/examples/animation/example_animated_opacity.js");
const { PageExampleAnimatedPhysicalModel } = __webpack_require__(/*! ./animation/example_animated_physical_model.js */ "./src/app_demo/examples/animation/example_animated_physical_model.js");
const { PageExampleAnimatedPositioned } = __webpack_require__(/*! ./animation/example_animated_positioned.js */ "./src/app_demo/examples/animation/example_animated_positioned.js");
const { PageExampleAnimatedSize } = __webpack_require__(/*! ./animation/example_animated_size.js */ "./src/app_demo/examples/animation/example_animated_size.js");

const { PageExampleAnimatedWidget } = __webpack_require__(/*! ./animation/example_animated_widget.js */ "./src/app_demo/examples/animation/example_animated_widget.js");
const { PageExampleAnimatedWidgetBaseState } = __webpack_require__(/*! ./animation/example_animated_widget_base_state.js */ "./src/app_demo/examples/animation/example_animated_widget_base_state.js");
const { PageExampleDecoratedBoxTransition } = __webpack_require__(/*! ./animation/example_decorated_box_transition.js */ "./src/app_demo/examples/animation/example_decorated_box_transition.js");
const { PageExampleFadeTransition } = __webpack_require__(/*! ./animation/example_fade_transition.js */ "./src/app_demo/examples/animation/example_fade_transition.js");
const { PageExampleHero } = __webpack_require__(/*! ./animation/example_hero.js */ "./src/app_demo/examples/animation/example_hero.js");
const { PageExamplePositionedTransition } = __webpack_require__(/*! ./animation/example_positioned_transition.js */ "./src/app_demo/examples/animation/example_positioned_transition.js");
const { PageExampleRotationTransition } = __webpack_require__(/*! ./animation/example_rotation_transition.js */ "./src/app_demo/examples/animation/example_rotation_transition.js");
const { PageExampleScaleTransition } = __webpack_require__(/*! ./animation/example_scale_transition.js */ "./src/app_demo/examples/animation/example_scale_transition.js");
const { PageExampleSizeTransition } = __webpack_require__(/*! ./animation/example_size_transition.js */ "./src/app_demo/examples/animation/example_size_transition.js");
const { PageExampleSlideTransition } = __webpack_require__(/*! ./animation/example_slide_transition.js */ "./src/app_demo/examples/animation/example_slide_transition.js");

class ExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super("ExamplesPage");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Flutter Examples'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle("基础组件", { key: new Key("1") }),

            new ListTile({
              title: new Text("AppBar"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAppBar;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Text"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleText;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Button"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleButton;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Image"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleImage;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Placeholder"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExamplePlaceholder;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Icon"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleIcon;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Color"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleColor;
                  }
                }))
              }
            }),
            new SectionTitle("布局组件", { key: new Key("2") }),
            // this.genSectionTitle(context,"布局组件"),
            new ListTile({
              title: new Text("Column"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleColumn;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Row"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleRow;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Container"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleContainer;
                  }
                }))
              }
            }),
            new SectionTitle("动画组件", { key: new Key("3") }),
            // this.genSectionTitle(context,"动画组件"),
            new ListTile({
              title: new Text("AnimatedBuilder"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedBuilder;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedBuilder v2"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedBuilderV2;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedContainer"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedContainer;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedCrossFade"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedCrossFade;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedDefaultTextStyle"),
 
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedDefaultTextStyle;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedListState"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedListState;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedModalBarrier"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedModalBarrier;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedOpacity"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedOpacity;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedPhysicalModel"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedPhysicalModel;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedPositioned"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedPositioned;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedSize"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedSize;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedWidget"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedWidget;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("AnimatedWidgetBaseState"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleAnimatedWidgetBaseState;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("DecoratedBoxTransition"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleDecoratedBoxTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("FadeTransition"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleFadeTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Hero"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleHero;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("PositionedTransition"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExamplePositionedTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("RotationTransition"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleRotationTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("ScaleTransition"),

              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleScaleTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("SizeTransition"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleSizeTransition;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("SlideTransition"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleSlideTransition;
                  }
                }))
              }
            }),
            new SectionTitle("其他组件", { key: new Key("4") }),
            // this.genSectionTitle(context,"其他组件"),
            new ListTile({
              title: new Text("FlutterLogo"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleFlutterLogo;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("Scaffold"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleScaffold;
                  }
                }))
              }
            }),
            new ListTile({
              title: new Text("SnackBar"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleSnakeBar;
                  }
                }))
              }
            }),
          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  ExamplesPage,
};


/***/ }),

/***/ "./src/app_demo/listview_example.js":
/*!******************************************!*\
  !*** ./src/app_demo/listview_example.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  FlutterLogo,
  Wrap,
  Scrollbar,
  Card,
  Theme,
  Navigator,
  MaterialPageRoute,
  MethodChannel,
  ClipRRect,
  BoxFit,
  Duration,
  Key,
  BorderDirectional,
  BorderSide,
  Alignment,
  AspectRatio,
  DecorationImage,
  Rect,
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");

let { SmartRefresher, ClassicFooter, RefreshController } = __webpack_require__(/*! @tencent/mxflutter-pull-to-refresh */ "./node_modules/@tencent/mxflutter-pull-to-refresh/index.js");

const { CachedNetworkImage } = __webpack_require__(/*! @tencent/mxflutter-cached-network-image */ "./node_modules/@tencent/mxflutter-cached-network-image/index.js");

const { SectionTitle } = __webpack_require__(/*! ./component/section_title.js */ "./src/app_demo/component/section_title.js");

const packages__dio = __webpack_require__(/*! @tencent/mxflutter-dio */ "./node_modules/@tencent/mxflutter-dio/index.js");

//用于演示网络请求cgi
//let cgi = "https://c.m.163.com/nc/article/headline/T1348649580692/0-10.html";

//data
let g_newsOrder = 0;
//
class ListViewDemo extends MXJSStatefulWidget {
  constructor() {
    super('ListViewDemo');
  }

  createState() {
    return new ListViewDemoState(this);
  }

  testIDE(var1, var2, list, abc) {
    return [];
  }
}

class ListViewDemoState extends MXJSWidgetState {
  constructor() {
    super();

    this.refreshController = new RefreshController();
    this.methodChannel = new MethodChannel('MXFlutter_MethodChannel_Demo');
    this.dio = packages__dio.Dio();

    this.newsArray = [];

    this.pageCount = 10;
    this.pageIndex = 0;
    this.loading = false;
    this.buildCount = 1;
  }

  initState() {
    super.initState();
    this.refresh(true);
  }

  async refresh(isInit) {
    let newsArray = await this.requestHttpData(true);

    if (!isInit) {
      this.endRefreshOrLoadMore(true, newsArray == null || newsArray.length == 0);
    }

    this.setState(
      function () {
        this.newsArray = newsArray.concat(this.newsArray);
      }.bind(this),
    );

    return newsArray;
  }

  async loadMore() {
    let newsArray = await this.requestHttpData(false);
    this.endRefreshOrLoadMore(false, newsArray == null || newsArray.length == 0);

    this.setState(
      function () {
        this.newsArray = this.newsArray.concat(newsArray);
      }.bind(this),
    );
  }

  async requestHttpData(isRefresh) {
    if (this.loading) {
      return [];
    }

    this.loading = true;
    let result = await this.requestNews();
    this.loading = false;

    if (result) {
      if (typeof result == 'String') {
        result = JSON.parse(result);
      }

      let respArray = result['T1348649580692'];
      return respArray;
    } else {
      return [];
    }
  }

  endRefreshOrLoadMore(isRefresh, isNoData) {
    this.refreshController.loadComplete();
    this.refreshController.refreshCompleted();
    return;
    if (isRefresh) {
      this.refreshController.refreshCompleted();
    } else {
      if (isNoData) {
        this.refreshController.loadNoData();
      } else {
        this.refreshController.loadComplete();
      }
    }
  }

  ///dio 示例
  async requestNews() {
    this.pageIndex = this.pageIndex % 4;
    let startIndex = this.pageIndex * this.pageCount;
    let endIndex = startIndex + this.pageCount;
    this.pageIndex++;

    let url = 'https://c.m.163.com/nc/article/headline/T1348649580692/' + startIndex + '-' + endIndex + '.html';
    try {
      // let response = await fetch(url);
      // MXJSLog.log("requestNews:resp: " + response.text);

      let response = await this.dio.get(url);
      MXJSLog.debug('await Dio.get(urlStr):request() :' + response);
      return response.data;
    } catch (e$) {
      // let e = dart.getThrown(e$);
      // MXJSLog.log('requestNews:resp:  error:' + e);
      return null;
    }
  }

  build(context) {
    g_newsOrder = 0;
    this.buildCount++;
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('网易新闻 ListViewExample'),
      }),
      body: new Scrollbar({
        child: new SmartRefresher({
          controller: this.refreshController,
          enablePullUp: true,
          enablePullDown: true,
          footer: new ClassicFooter({
            failedIcon: null,
            canLoadingIcon: null,
            idleIcon: null,
            noMoreIcon: null,
            loadingIcon: null,
            canLoadingText: '',
            failedText: '网络错误，请重试',
            noDataText: '已经没有了',
            loadingText: '加载中...',
            idleText: '上拉加载更多',
          }),
          // 动态创建Item
          child: ListView.builder({
            itemCount: this.newsArray.length,
            itemBuilder: function (context, index) {
              return new ListViewItem(this.newsArray[index]);
            }.bind(this),
          }),
          onRefresh: function () {
            MXJSLog.log('onRefresh');
            this.refresh();
          }.bind(this),
          onLoading: function () {
            MXJSLog.log('onLoading');
            this.loadMore();
          }.bind(this),
        }),
      }),
    });
    return widget;
  }
}

class ListViewItem extends MXJSStatelessWidget {
  constructor(oneNewsMap) {
    super('ListViewItem');

    this.newsModel = NewsModel.fromJSON(oneNewsMap);

    this.index = Math.ceil(Math.random() * 10000);
  }

  hotCard(context, newsModel) {
    g_newsOrder++;

    return new Container({
      decoration: new BoxDecoration({
        color: Colors.white,
        border: new BorderDirectional({
          bottom: new BorderSide({
            color: Colors.black12,
            width: 1.0,
          }),
        }),
      }),
      child: new FlatButton({
        onPressed: function () {},
        child: new Container({
          padding: EdgeInsets.only({ top: 8.0, bottom: 8.0 }),
          child: new Row({
            children: [
              new Expanded({
                flex: 1,
                child: new Column({
                  children: [
                    new Container({
                      child: new Text(String(g_newsOrder), {
                        style: new TextStyle({
                          color: Colors.red,
                          fontSize: 18.0,
                        }),
                      }),
                      alignment: Alignment.topLeft,
                    }),
                    newsModel.rise != null
                      ? new Row({
                          children: [
                            new Icon(new IconData(0xe5d8, { fontFamily: 'MaterialIcons' }), {
                              color: Colors.red,
                              size: 10.0,
                            }),
                            new Text(newsModel.rise, {
                              style: new TextStyle({
                                color: Colors.red,
                                fontSize: 10.0,
                              }),
                            }),
                          ],
                        })
                      : new Container(),
                  ],
                }),
              }),
              new Expanded({
                flex: 6,
                child: new Column({
                  children: [
                    new Container({
                      child: new Text(newsModel.title, {
                        style: new TextStyle({
                          fontWeight: FontWeight.bold,
                          fontSize: 16.0,
                          height: 1.1,
                          color: Colors.black,
                        }),
                      }),
                      padding: EdgeInsets.only({ bottom: 10.0, right: 4.0 }),
                      alignment: Alignment.topLeft,
                    }),
                    newsModel.mark != null
                      ? new Container({
                          child: new Text(newsModel.mark, {
                            style: new TextStyle({ color: Colors.black54 }),
                          }),
                          alignment: Alignment.topLeft,
                          padding: EdgeInsets.only({ bottom: 8.0, right: 4.0 }),
                        })
                      : new Container(),
                    new Container({
                      child: new Text(newsModel.hotNum, {
                        style: new TextStyle({ color: Colors.black54 }),
                      }),
                      alignment: Alignment.topLeft,
                    }),
                  ],
                }),
              }),
              new Expanded({
                flex: 3,
                child: new AspectRatio({
                  aspectRatio: 3.0 / 2.0,
                  child: new ClipRRect({
                    borderRadius: BorderRadius.circular(4.0),
                    child: new CachedNetworkImage({
                      fadeInDuration: new Duration({ milliseconds: 10 }),
                      fadeOutDuration: new Duration({ milliseconds: 10 }),
                      imageUrl: newsModel.imgUrl,
                      width: 124.0,
                      height: 69.0,
                      fit: BoxFit.fill,
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }

  build(context) {
    try {
      return this.hotCard(context, this.newsModel);
    } catch (e$) {
      // let e = dart.getThrown(e$);
      // MXJSLog.log('card:build(context):  error:' + e);
      return null;
    }
  }
}

class NewsModel {
  constructor(order, title, hotNum, imgUrl, { mark, rise } = {}) {
    this.order = order;
    this.title = title;
    this.hotNum = hotNum;
    this.imgUrl = imgUrl;
    this.mark = mark;
    this.rise = rise;
  }

  static fromJSON(jsonMap) {
    let news = new NewsModel();

    news.order = String(jsonMap['order']);
    news.title = jsonMap['title'];
    news.hotNum = String(jsonMap['votecount']) + ' 人点赞';
    news.imgUrl = jsonMap['imgsrc'];
    news.mark = jsonMap['source'];
    news.rise = jsonMap['alias'];

    return news;
  }
}

module.exports = {
  ListViewDemo,
};


/***/ }),

/***/ "./src/app_demo/material.js":
/*!**********************************!*\
  !*** ./src/app_demo/material.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Color,
    AppBar,
    Text,
    ListView,
    ListTile,
    Icon,
    IconData,
    EdgeInsets,
    Padding,
    MaterialPageRoute,
    Navigator
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");


let { JSBottomAPPBarDemo } = __webpack_require__(/*! ./material/bottom_app_bar_demo.js */ "./src/app_demo/material/bottom_app_bar_demo.js");
let { JSBottomNavigationDemo } = __webpack_require__(/*! ./material/bottom_navigation_demo.js */ "./src/app_demo/material/bottom_navigation_demo.js");
let { JSEasyUIDemo } = __webpack_require__(/*! ./material/easy_ui_demo.js */ "./src/app_demo/material/easy_ui_demo.js");
let { JSTabsDemo } = __webpack_require__(/*! ./material/tabs_demo.js */ "./src/app_demo/material/tabs_demo.js");

class JSMaterialPage extends MXJSStatefulWidget {
    constructor() {
        super('JSMaterialPage');
    }

    createState() {
        return new JSMaterialPageState(this);
    }
}

class JSMaterialPageState extends MXJSWidgetState {
    build(context) {
        let w = new Scaffold({
            appBar: new AppBar({
                title: new Text("Material Demo")
            }),
            body: new ListView({
                children: [
                    new Padding({ padding: EdgeInsets.all(1.0) }),

                    new ListTile({
                        leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xFFFF9800) }),
                        trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                        title: new Text('Bottom app bar'),
                        subtitle: new Text('Optional floating action button notch'),
                        onTap: function () {

                            Navigator.push(context, new MaterialPageRoute({
                                builder: function (context) {
                                    return new JSBottomAPPBarDemo;
                                }
                            }))
                        }
                    }),

                    // new ListTile({
                    //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xFFFF9800) }),
                    //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                    //     title: new Text('Bottom navigation——动画需完善才能出现'),
                    //     subtitle: new Text('Bottom navigation with cross-fading views'),
                    //     onTap: function () {

                    //         Navigator.push(context, new MaterialPageRoute({
                    //             builder: function (context) {
                    //                 return new JSBottomNavigationDemo;
                    //             }
                    //         }))

                    //     }
                    // }),

                    new ListTile({
                        leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xFFFF9800) }),
                        trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                        title: new Text('Easy UI'),
                        subtitle: new Text('Easy UI usage'),
                        onTap: function () {

                            Navigator.push(context, new MaterialPageRoute({
                                builder: function (context) {
                                    return new JSEasyUIDemo;
                                }
                            }))
                        }
                    }),

                    new ListTile({
                        leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xFFFF9800) }),
                        trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                        title: new Text('Tabs'),
                        subtitle: new Text('Tabs with independently scrollable views'),
                        onTap: function () {

                            Navigator.push(context, new MaterialPageRoute({
                                builder: function (context) {
                                    return new JSTabsDemo;
                                }
                            }))
                        }
                    })
                ]
            })
        });

        return w;
    }

    navigatorPush(jsWidget) {

    }
}

module.exports = { JSMaterialPage };


/***/ }),

/***/ "./src/app_demo/material/bottom_app_bar_demo.js":
/*!******************************************************!*\
  !*** ./src/app_demo/material/bottom_app_bar_demo.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Container,
  Color,
  AppBar,
  Text,
  ListView,
  Icon,
  IconData,
  FloatingActionButton,
  GestureDetector,
  Expanded,
  Row,
  AlignmentDirectional,
  BottomAppBar,
  IconButton,
  FloatingActionButtonLocation,
  Colors,
  CircularNotchedRectangle,
  EdgeInsetsDirectional,
  TextStyle,
  Radio,
  Semantics,
  MergeSemantics,
  RawMaterialButton,
  BoxConstraints,
  HitTestBehavior,
  MXJSStatelessWidget,
  CircleBorder,
  BorderSide,
  MainAxisAlignment,
  SizedBox

} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class JSChoiceValue{
    constructor({
        value,
        title,
        label
    } = {}) {
        this.value = value;
        this.title = title;
        this.label = label;
    }
}

class JSNamedColor{
    constructor({
        color,
        name
    } = {}) {
        this.color = color;
        this.name = name;
    }
}

// Notch
kShowNotchTrue = new JSChoiceValue({
    title: 'On',
    label: 'show bottom appbar notch',
    value: true
});

kShowNotchFalse = new JSChoiceValue({
    title: 'Off',
    label: 'do not show bottom appbar notch',
    value: false
});

// FAB Position
kFabEndDocked = new JSChoiceValue({
    title: 'Attached - End',
    label: 'floating action button is docked at the end of the bottom app bar',
    value: FloatingActionButtonLocation.endDocked
});

kFabCenterDocked = new JSChoiceValue({
    title: 'Attached - Center',
    label: 'floating action button is docked at the center of the bottom app bar',
    value: FloatingActionButtonLocation.centerDocked
});

kFabEndFloat = new JSChoiceValue({
    title: 'Free - End',
    label: 'floating action button floats above the end of the bottom app bar',
    value: FloatingActionButtonLocation.endFloat
});

kFabCenterFloat = new JSChoiceValue({
    title: 'Free - Center',
    label: 'floating action button is floats above the center of the bottom app bar',
    value: FloatingActionButtonLocation.centerFloat
});        
    

kFabColors = [
    new JSNamedColor({color: new Color(0xFFFFFFFF), name: 'Clear'}),
    new JSNamedColor({color: new Color(0xFFFFC100), name: 'Orange'}),
    new JSNamedColor({color: new Color(0xFF91FAFF), name: 'Light Blue'}),
    new JSNamedColor({color: new Color(0xFF00D1FF), name: 'Cyan'}),
    new JSNamedColor({color: new Color(0xFF00BCFF), name: 'Cerulean'}),
    new JSNamedColor({color: new Color(0xFF009BEE), name: 'Blue'})
];


class _JSHeading extends MXJSStatelessWidget {
    constructor ({
        text
    } = {}) {
        super();
        this.text = text;
    }

    build(context){
        return new Container({
            height: 56.0,
            padding: EdgeInsetsDirectional.only({start: 26.0}),
            alignment: new AlignmentDirectional({start: -1.0, y:0.0}),
            child: new Text(
                this.text,
                {style: new TextStyle({
                    inherit: false,
                    fontSize: 18.0,
                    decorationColor: new Color(0xFF123456),
                    decorationStyle: TextDecorationStyle.wavy,
                    color: new Color(0xFF123456)
                })}
            )
        });
    }
}

class _JSRadioItem extends MXJSStatelessWidget{
    constructor ({
        value,
        groupValue,
        onChanged
    } = {}) {
        super();
        this.value = value;
        this.groupValue = groupValue;
        this.onChanged = onChanged;

        console.log("[JS]-MXJSFlutter:: require..........", value , groupValue);

    }

    build(context){
        return new Container({
            height: 56.0,
            padding: EdgeInsetsDirectional.only({start: 36.0}),
            alignment: new AlignmentDirectional({start: -1.0, y:0.0}),
            child: new MergeSemantics({
                child: new Row({
                    children: [
                        new Radio({
                            value: this.value,
                            groupValue: this.groupValue,
                            onChanged: function () {
                                this.onChanged(this.value);
                            }.bind(this)
                        }),
                        new Expanded({
                            child: new Semantics({
                                container: true,
                                button: true,
                                label: this.value.label,
                                child: new GestureDetector({
                                    behavior: HitTestBehavior.opaque,
                                    onTap: function () {
                                        this.onChanged(this.value);
                                    }.bind(this),
                                    child: new Text(this.value.title)
                                })
                            })
                        })
                    ]
                })
            })
        });
    }
}

class _JSColorsItem extends MXJSStatelessWidget{
    constructor ({
        colors,
        selectedColor,
        onChanged
    } = {}) {
        super();
        this.colors = colors;
        this.selectedColor = selectedColor;
        this.onChanged = onChanged;
    }
    
    build(context){
        let rowContents = [];
        this.colors.forEach(function(namedColor) {
            let widget = new RawMaterialButton({
                onPressed: function () {
                    this.onChanged(namedColor.color);
                }.bind(this),
                constraints: new BoxConstraints({
                    minWidth: 32,
                    maxWidth: 32,
                    minHeight: 32,
                    maxHeight: 32
                }),
                fillColor: namedColor.color,
                shape: new CircleBorder({
                    side: new BorderSide({
                        color: namedColor.color == this.selectedColor ? Colors.black : new Color(0xFFD5D7DA),
                        width: 2.0
                    })
                }),
                child: new Semantics({
                    value: namedColor.name,
                    selected: namedColor.color == this.selectedColor
                })
            });
            rowContents.push(widget);
        }.bind(this))
        return new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: rowContents
        });
    }
}

class JSBottomAPPBarDemo extends MXJSStatefulWidget {
    constructor() {
        super('JSBottomAPPBarDemo');
    }
  
    createState() {
        return new JSBottomAPPBarDemoState(this);
    }
}

class JSBottomAPPBarDemoState extends MXJSWidgetState {
    // _scaffoldKey;//new GlobalKey();
    constructor (widget) {
        super(widget);

        this._showNotch = kShowNotchTrue;
        this._fabLocation = kFabCenterDocked;
        this._babColor = kFabColors[1].color;
    }

    showSnackBar() {
        text =
        "When the Scaffold's floating action button location changes, "
        'the floating action button animates to its new position.'
        'The BottomAppBar adapts its shape appropriately.';

        _scaffoldKey.currentState.showSnackBar(
            new SnackBar({content: Text(text)})
        );
    }

    onShowNotchChanged(value) {
        console.log("[JS]-MXJSFlutter:: require..........");
        this.setState(function() {
            this._showNotch = value;
        }.bind(this));
    }
    
    onFabLocationChanged(value) {
        this.setState(function() {
            this._fabLocation = value;
        }.bind(this));
    }
    
    onBabColorChange(value) {
        this.setState(function() {
            this._babColor = value;
        }.bind(this));
    }

    build(context){
        let floatingButtonLocation = this._fabLocation.value;

        let rowContents = [
            new IconButton({
                icon: new Icon(new IconData(0xe5d2,{fontFamily:'MaterialIcons', semanticLabel: 'Show bottom sheet'})),
                tooltip: 'Show bottom sheet',
                onPressed: function () {
                    Scaffold.of(context).showSnackBar(
                        new SnackBar({content: new Text('This is a dummy sheet action.')})
                    );
                }.bind(this)
            })
        ];

        if (floatingButtonLocation == FloatingActionButtonLocation.centerDocked || floatingButtonLocation == FloatingActionButtonLocation.centerFloat)
        {
            rowContents.push(
                new Expanded({child:new SizedBox()})
            );
        }

        rowContents.push(
            new IconButton({
                icon: new Icon(new IconData(0xe8b6,{fontFamily:'MaterialIcons', semanticLabel: 'show search action'})),
                tooltip: 'show search action',
                onPressed: function () {
                    Scaffold.of(context).showSnackBar(
                    new SnackBar({content: new Text('This is a dummy search action.')})
                    );
                }.bind(this)
            })
        );

        rowContents.push(
            new IconButton({
                icon: new Icon(new IconData(0xe5d3,{fontFamily:'MaterialIcons', semanticLabel: 'Show menu actions'})),
                tooltip: 'Show menu actions',
                onPressed: function () {
                    Scaffold.of(context).showSnackBar(
                        new SnackBar({content: new Text('This is a dummy menu action.')})
                    );
                }.bind(this)
            })
        );

        let widget = new Scaffold({
            // key: _scaffoldKey,
            appBar: new AppBar({
                title: new Text('Bottom app bar')
            }),
            body: new ListView({
                children : [
                    new _JSHeading({text: "Notch"}),
                    new _JSRadioItem({value: kShowNotchTrue, groupValue: this._showNotch, onChanged: this.onShowNotchChanged.bind(this)}),
                    new _JSRadioItem({value: kShowNotchFalse, groupValue: this._showNotch, onChanged: this.onShowNotchChanged.bind(this)}),

                    new _JSHeading({text: "FAB Position"}),
                    new _JSRadioItem({value: kFabEndDocked, groupValue: this._fabLocation, onChanged: this.onFabLocationChanged.bind(this)}),
                    new _JSRadioItem({value: kFabCenterDocked, groupValue: this._fabLocation, onChanged: this.onFabLocationChanged.bind(this)}),
                    new _JSRadioItem({value: kFabEndFloat, groupValue: this._fabLocation, onChanged: this.onFabLocationChanged.bind(this)}),
                    new _JSRadioItem({value: kFabCenterFloat, groupValue: this._fabLocation, onChanged: this.onFabLocationChanged.bind(this)}),

                    new _JSHeading({text: "App bar color"}),
                    new _JSColorsItem({colors: kFabColors, selectedColor: this._babColor, onChanged:this.onBabColorChange.bind(this)})

                ]
            }),
            bottomNavigationBar: new BottomAppBar({
                // color: Colors.red,
                child: new Row({children: rowContents}),
                color: this._babColor,
                shape: this._showNotch.value == true ? new CircularNotchedRectangle() : null
            }),
            floatingActionButton: new FloatingActionButton({
                child: new Icon(new IconData(0xe145,{fontFamily:'MaterialIcons',semanticLabel: 'Action'})),
                onPressed: function () {
        
                },
                backgroundColor: Colors.orange
            }),
            floatingActionButtonLocation: floatingButtonLocation
        });
        return widget;
    }
}

module.exports = { JSBottomAPPBarDemo };



/***/ }),

/***/ "./src/app_demo/material/bottom_navigation_demo.js":
/*!*********************************************************!*\
  !*** ./src/app_demo/material/bottom_navigation_demo.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  Container,
  Center,
  AppBar,
  Stack,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  BottomNavigationBar,
  BottomNavigationBarItem,
  BottomNavigationBarType,
  Colors,
  Semantics,
  AnimationController,
  Duration,
  CurveTween,
  Interval,
  Curves,
  FadeTransition,
  SlideTransition,
  Tween,
  IconTheme,
  IconThemeData,
  Offset,
  BoxDecoration,
  Border
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class NavigationIconView {
    constructor({
        icon,
        activeIcon,
        title,
        color,
        vsync
    } = {}) {
        this._icon = icon;
        this._title = title;
        this._color = color;
        this.item = new BottomNavigationBarItem({
            icon: icon,
            activeIcon: activeIcon,
            title: new Text(title),
            backgroundColor: color
        });
        this.controller = new AnimationController({
            duration: new Duration({milliseconds: 200})
            // vsync: vsync,
        });
        this._animation = this.controller.drive(new CurveTween({
            curve: new Interval(0.5, 1.0, {
                curve: Curves.fastOutSlowIn
            })
        }));
    }
    
    transition(type, context) {
        var iconColor;
        if (type == BottomNavigationBarType.shifting) {
            iconColor = this._color;
        } else {
            let themeData = Theme.of(context);
            iconColor = themeData.brightness == Brightness.light ? themeData.primaryColor : themeData.accentColor;
        }
        
        return new FadeTransition({
            opacity: this._animation,
            child: new SlideTransition({
                position: this._animation.drive(new Tween({
                    begin: new Offset(0.0, 0.2),
                    end: new Offset(0.0, 0.0)
                })),
                child: new IconTheme({
                    data: new IconThemeData({
                        color: iconColor,
                        size: 120.0
                    }),
                    child: new Semantics({
                        label: 'Placeholder for $this._title tab',
                        child: this._icon
                    })
                })
            }) 
        })
    }
}

class CustomIcon extends MXJSStatelessWidget {
    build(context) {
        /// TODO:
        let iconThemeData = IconTheme.of(context);
        return new Container({
            margin: EdgeInsets.all(4.0),
            width: iconThemeData.size - 8.0,
            height: iconThemeData.size - 8.0,
            color: iconThemeData.color
        }); 
    }
}

class CustomInactiveIcon extends MXJSStatelessWidget {
    build(context) {
        /// TODO:
        let iconThemeData = IconTheme.of(context);
        return new Container({
            margin: EdgeInsets.all(4.0),
            width: iconThemeData.size - 8.0,
            height: iconThemeData.size - 8.0,
            decoration: new BoxDecoration({
                border: Border.all({
                    color: iconThemeData.color,
                    width: 2.0
                })
            })
        }); 
    }
}

class JSBottomNavigationDemo extends MXJSStatefulWidget {
    constructor() {
        super('JSBottomNavigationDemo');
    }
  
    createState() {
        return new JSBottomNavigationDemoState(this);
    }
}

class JSBottomNavigationDemoState extends MXJSWidgetState {
    constructor (widget) {
        super(widget);
        this._currentIndex = 0;
        this._type = BottomNavigationBarType.shifting;
        this._navigationViews = [];
    }

    initState() {
        // this._navigationViews = [
        //     new NavigationIconView({
        //         icon: new Icon(new IconData(0xe190, {fontFamily: 'MaterialIcons'})),
        //         title: 'Alarm',
        //         color: Colors.deepPurple,
        //         vsync: this,
        //     }),
        //     new NavigationIconView({
        //         activeIcon: new CustomIcon(),
        //         icon: new CustomInactiveIcon(),
        //         title: 'Box',
        //         color: Colors.deepOrange,
        //         vsync: this,
        //     }),
        //     new NavigationIconView({
        //         activeIcon: new Icon(new IconData(0xe2bd, {fontFamily: 'MaterialIcons'})),
        //         icon: new Icon(new IconData(0xe2c2, {fontFamily: 'MaterialIcons'})),
        //         title: 'Cloud',
        //         color: Colors.teal,
        //         vsync: this,
        //     }),
        //     new NavigationIconView({
        //         activeIcon: new Icon(new IconData(0xe87d, {fontFamily: 'MaterialIcons'})),
        //         icon: new Icon(new IconData(0xe87e, {fontFamily: 'MaterialIcons'})),
        //         title: 'Favorites',
        //         color: Colors.indigo,
        //         vsync: this,
        //     }),
        //     new NavigationIconView({
        //         icon: new Icon(new IconData(0xe614, {fontFamily: 'MaterialIcons'})),
        //         title: 'Event',
        //         color: Colors.pink,
        //         vsync: this,
        //     }),
        // ];
        
        // this._navigationViews[this._currentIndex].controller.value = 1.0;
    }

    dispose(){
        this._navigationViews.map(function(view) {
            view.controller.dispose();
        })
    }

    _buildTransitionsStack(context) {
        var transitions = [];
        for(var i = 0; i < this._navigationViews.length; i++){
            transitions.push(this._navigationViews[i].transition(this._type, context));
        }

        transitions.sort(function (a, b) {
            let aAnimation = a.opacity;
            let bAnimation = b.opacity;
            let aValue = aAnimation.value;
            let bValue = bAnimation.value;
            return aValue < bValue;
        });

        return new Stack({
            children: transitions
        });
    }
    
    build(context){
        this._navigationViews = [
            new NavigationIconView({
                icon: new Icon(new IconData(0xe190, {fontFamily: 'MaterialIcons'})),
                title: 'Alarm',
                color: Colors.deepPurple
                // vsync: this,
            }),
            new NavigationIconView({
                activeIcon: new CustomIcon(),
                icon: new CustomInactiveIcon(),
                title: 'Box',
                color: Colors.deepOrange
                // vsync: this,
            }),
            new NavigationIconView({
                activeIcon: new Icon(new IconData(0xe2bd, {fontFamily: 'MaterialIcons'})),
                icon: new Icon(new IconData(0xe2c2, {fontFamily: 'MaterialIcons'})),
                title: 'Cloud',
                color: Colors.teal
                // vsync: this,
            }),
            new NavigationIconView({
                activeIcon: new Icon(new IconData(0xe87d, {fontFamily: 'MaterialIcons'})),
                icon: new Icon(new IconData(0xe87e, {fontFamily: 'MaterialIcons'})),
                title: 'Favorites',
                color: Colors.indigo
                // vsync: this,
            }),
            new NavigationIconView({
                icon: new Icon(new IconData(0xe614, {fontFamily: 'MaterialIcons'})),
                title: 'Event',
                color: Colors.pink
                // vsync: this,
            })
        ];
        
        this._navigationViews[this._currentIndex].controller.value = 1.0;

        let botNavBar = new BottomNavigationBar({
            items:this._navigationViews.map(function(navigationView) {
                return navigationView.item;
            }),
            currentIndex: this._currentIndex,
            type: this._type,
            onTap: function(args) {
                this.setState(function() {
                    var index = args;
                    this._navigationViews[this._currentIndex].controller.reverse();
                    this._currentIndex = index;
                    this._navigationViews[this._currentIndex].controller.forward();
                });
            }
        });

        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Bottom Navigation'),
            }),
            body: new Center({
                child : this._buildTransitionsStack(context),
            }),
            bottomNavigationBar: botNavBar
        });
        return widget;
    }
}

module.exports = { JSBottomNavigationDemo };


/***/ }),

/***/ "./src/app_demo/material/easy_ui_demo.js":
/*!***********************************************!*\
  !*** ./src/app_demo/material/easy_ui_demo.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Container,
  Color,
  AppBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");


class JSEasyUIDemo extends MXJSStatefulWidget {
    constructor() {
        super('JSEasyUIDemo');
    }
  
    createState() {
        return new JSEasyUIDemoState(this);
    }
}

class JSEasyUIDemoState extends MXJSWidgetState {

    constructor(){
        super();
        this.dropdownValue = 'three';
        this.iconColorIndex = 10;
        this.sliderValue = 25.0;
        this.sliderDiscreteValue = 20.0;
    }

    // Buttons
    _buildButtons() {
        let widget = new Column({
            children:[
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                        new FlatButton({
                            child: new Text(
                                "Flat Button",{
                                    style: new TextStyle({color: new Color(0xFF000000)})
                                }),
                            onPressed: function() {
                                MXJSLog.log('Flat Button Pressed');
                            },
                            onHighlightChanged: function(args) {
                                MXJSLog.log('Flat Button onHighlightChanged');
                            }
                            // color: new Color(0x60000000),
                        }),
                        new RaisedButton({
                            child: new Text("Raised Button"),
                            onPressed: function() {
                                MXJSLog.log('Raised Button Pressed');
                            }
                            // color: new Color(0x60000000),
                        }),
                        new FloatingActionButton({
                            child: new Icon(new IconData(0xe145, {fontFamily: 'MaterialIcons'})),
                            tooltip: 'Floating Action Button',
                            onPressed: function() {
                                MXJSLog.log('Floating Action Button Pressed');
                            }
                        }),
                        new IconButton({
                            icon: new Icon(new IconData(0xe815, {fontFamily: 'MaterialIcons'})),
                            onPressed: function() {
                                MXJSLog.log('Icon Button Pressed');
                            }
                        }),
                    ],
                }),
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                        new DropdownButton({
                            value: this.dropdownValue,
                            items: ['one', 'two', 'three', 'four'].map(function(value) {
                                return new DropdownMenuItem({
                                    value: value,
                                    child: new Text(value)
                                });
                            }),
                            onChanged: function(newValue) {
                                MXJSLog.log('Icon Button Pressed');
                                this.setState(function (){
                                    this.dropdownValue = newValue;
                                })
                            }
                        }),
                        new PopupMenuButton({
                            onSelected: function(args) {
                                MXJSLog.log('more button pressed, index ' + args);
                            },
                            itemBuilder: function(context) {
                                let list = [
                                    new PopupMenuItem({
                                        value: 1,
                                        child: new Text('App bar scrolls away')
                                    }),
                                    new PopupMenuItem({
                                        value: 2,
                                        child: new Text('App bar stays away')
                                    }),
                                    new PopupMenuItem({
                                        value: 3,
                                        child: new Text('App bar floats')
                                    }),
                                    new PopupMenuItem({
                                        value: 4,
                                        child: new Text('App bar snaps')
                                    })
                                ];
                                return list;
                            },
                        }),
                        new ButtonBar({
                            mainAxisSize: MainAxisSize.min,
                            children:[
                                new RaisedButton({
                                    child: new Text('Button Bar 1'),
                                    onPressed: function() {
                                        MXJSLog.log('Button Bar 1 pressed');
                                    }
                                }),
                                new RaisedButton({
                                    child: new Text('Button Bar 2'),
                                    onPressed: function() {
                                        MXJSLog.log('Button Bar 2 pressed');
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });

        return widget;
    }

    // Texts
    _buildTexts() {
        let widget = new Container({
            padding: EdgeInsets.only({top: 10.0}),
            child: new Column({
                children:[
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                            new Container({
                                padding: EdgeInsets.only({right: 15.0}),
                                child: new Text(
                                    '这是一个text', {
                                    style: new TextStyle({
                                      fontWeight: FontWeight.w700,
                                      fontStyle: FontStyle.italic,
                                      color: new Color(0xFFFF00FF),
                                      fontSize: 20.0,
                                      decoration: TextDecoration.underline,
                                      decorationColor: Color.fromRGBO(0, 0, 0, 1),
                                      decorationStyle: TextDecorationStyle.double
                                    }),
                                    overflow: TextOverflow.ellipsis
                                })
                            }),
                            
                            new Expanded({
                                child: new RichText({
                                    text: new TextSpan({
                                        style: new TextStyle({
                                            color: new Color(0xFFFF8C00),
                                            fontSize: 18.0,
                                            decoration: TextDecoration.underline,
                                            decorationColor: Colors.orange,
                                            decorationStyle: TextDecorationStyle.dashed,
                                        }),
                                        text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text'
                                    }),
                                    overflow: TextOverflow.ellipsis,
                                    maxLines: 1
                                })
                            })
                        ]
                    })
                ]
            })
        });

        return widget;
    }

    // Icons
    _buildIcons() {
        let iconColors = [
            Colors.red,
            Colors.pink,
            Colors.purple,
            Colors.deepPurple,
            Colors.indigo,
            Colors.blue,
            Colors.lightBlue,
            Colors.cyan,
            Colors.teal,
            Colors.green,
            Colors.lightGreen,
            Colors.lime,
            Colors.yellow,
            Colors.amber,
            Colors.orange,
            Colors.deepOrange,
            Colors.brown,
            Colors.grey,
            Colors.blueGrey
        ];
        
        let widget = new Container({
            padding: EdgeInsets.only({top: 10.0}),
            child: new Column({
                children:[
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe87c, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {
                                        
                                    })
                                },
                                iconSize: 24.0
                            }),
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe87c, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {

                                    })
                                },
                                iconSize: 36.0
                            }),
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe87c, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {
                                        
                                    })
                                },
                                iconSize: 48.0
                            })
                        ]
                    }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe001, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {
                                        
                                    })
                                },
                                iconSize: 24.0
                            }),
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe001, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {
                                        
                                    })
                                },
                                iconSize: 36.0
                            }),
                            new IconButton({
                                color: iconColors[this.iconColorIndex],
                                icon: new Icon(new IconData(0xe001, {fontFamily: 'MaterialIcons'})),
                                onPressed: function() {
                                    this.iconColorIndex = (this.iconColorIndex + 1) % iconColors.length;
                                    this.setState(function() {
                                        
                                    })
                                },
                                iconSize: 48.0
                            })
                        ]
                    })
                ]
            })
        });

        return widget;
    }

    // TextFields
    _buildTextFields() {
        let widget = new Container({
            padding: EdgeInsets.only({top: 10.0}),
            child: new Column({
                children:[
                    new Container({
                        padding: EdgeInsets.only({right: 15.0}),
                        child: new TextField({
                            keyboardType: TextInputType.number(),
                            onSubmitted: function (args) {
                                MXJSLog.log('number onSubmitted');
                            },
                            decoration: new InputDecoration({
                                labelText: 'placeholder'
                            }),
                            onChanged: function(args) {
                                MXJSLog.log('number onChanged');
                            }
                        })
                    }),
                    new SizedBox({
                        height: 24.0
                    }),
                    new TextField({
                        controller: new TextEditingController({
                            text: 'initial text'
                        }),
                        keyboardType: TextInputType.emailAddress(),
                        onSubmitted: function (args) {
                            MXJSLog.log('email onSubmitted');
                        },
                        onChanged: function(args) {
                            MXJSLog.log('email onChanged');
                        }
                    })
                ]
            })
        });

        return widget;
    }

    // TextFormFields
    _buildTextFormFields() {
        let widget = new Container({
            padding: EdgeInsets.only({top: 10.0}),
            child: new Column({
                children:[
                    new Container({
                        padding: EdgeInsets.only({right: 15.0}),
                        child: new TextFormField({
                            decoration: new InputDecoration({
                                border: new UnderlineInputBorder(),
                                filled: true,
                                icon: new Icon(new IconData(0xe0be, {fontFamily: 'MaterialIcons'})),
                                hintText: 'Your email address',
                                labelText: 'E-mail'
                            }),
                            keyboardType: TextInputType.emailAddress(),
                            onFieldSubmitted: function (args) {
                                MXJSLog.log('email onFieldSubmitted');
                            }
                        })
                    }),
                    new SizedBox({
                        height: 24.0
                    }),
                    new Container({
                        padding: EdgeInsets.only({right: 15.0}),
                        child: new TextFormField({
                            decoration: new InputDecoration({
                                border: new UnderlineInputBorder(),
                                filled: true,
                                icon: new Icon(new IconData(0xe0cd, {fontFamily: 'MaterialIcons'})),
                                hintText: 'Where can we reach you?',
                                labelText: 'Phone Number *',
                                prefixText: '+1'
                            }),
                            keyboardType: TextInputType.phone(),
                            onFieldSubmitted: function (args) {
                                MXJSLog.log('phone onFieldSubmitted');
                            }
                        })
                    })
                ]
            })
        });

        return widget;
    }

    // TextFormFields
    _buildSlider() {
        let widget = new Container({
            padding: EdgeInsets.only({top: 10.0}),
            child: new Column({
                children:[
                    new Container({
                        padding: EdgeInsets.only({right: 15.0}),
                        child: new Slider({
                            value: this.sliderValue,
                            min: 0.0,
                            max: 100.0,
                            onChanged:function (args) {
                                let value = args;
                                this.setState(function(){
                                    this.sliderValue = value;
                                });
                            },
                            semanticFormatterCallback: function(args) {
                                return 'dollars';
                            },
                        }),
                    }),
                    new SizedBox({
                        height: 24.0,
                    }),
                    new Container({
                        padding: EdgeInsets.only({right: 15.0}),
                        child: new Slider({
                            value: this.sliderDiscreteValue,
                            min: 0.0,
                            max: 100.0,
                            divisions: 5,
                            label: this.sliderDiscreteValue.toString(),
                            onChanged:function (args) {
                                let value = args;
                                this.setState(function(){
                                    this.sliderDiscreteValue = value;
                                });
                            }
                        })
                    })
                ]
            })
        });

        return widget;
    }

    build(context){
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Easy UI'),
            }),
            body: new ListView({
                children: [
                    new Container({
                        padding: EdgeInsets.all(10.0),
                        child: new Column({
                            children: [
                                new Text('Button', {
                                    style: new TextStyle({
                                        fontSize: 20.0,
                                        color: Colors.indigo,
                                        fontWeight: FontWeight.bold
                                    })
                                }),
                                this._buildButtons(),
            
                                new Text('Text', {
                                    style: new TextStyle({
                                        fontSize: 20.0,
                                        color: Colors.indigo,
                                        fontWeight: FontWeight.bold
                                    })
                                }),
                                this._buildTexts(),

                                new Container({
                                    padding: EdgeInsets.only({top:15.0}),
                                    child: new Text('Icons', {
                                        style: new TextStyle({
                                            fontSize: 20.0,
                                            color: Colors.indigo,
                                            fontWeight: FontWeight.bold
                                        })
                                    })
                                }),
                                this._buildIcons(),
        
                                new Container({
                                    padding: EdgeInsets.only({top:15.0}),
                                    child: new Text('TextField', {
                                        style: new TextStyle({
                                            fontSize: 20.0,
                                            color: Colors.indigo,
                                            fontWeight: FontWeight.bold
                                        })
                                    })
                                }),
                                this._buildTextFields(),
        
                                new Container({
                                    padding: EdgeInsets.only({top:15.0}),
                                    child: new Text('TextFormField', {
                                        style: new TextStyle({
                                            fontSize: 20.0,
                                            color: Colors.indigo,
                                            fontWeight: FontWeight.bold
                                        })
                                    })
                                }),
                                this._buildTextFormFields(),

                                new Container({
                                    padding: EdgeInsets.only({top:15.0}),
                                    child: new Text('Slider', {
                                        style: new TextStyle({
                                            fontSize: 20.0,
                                            color: Colors.indigo,
                                            fontWeight: FontWeight.bold
                                        })
                                    })
                                }),
                                this._buildSlider()
                            ]
                        })
                    })
                ]
            })
        });
        return widget;
    }
}

module.exports = { JSEasyUIDemo };


/***/ }),

/***/ "./src/app_demo/material/tabs_demo.js":
/*!********************************************!*\
  !*** ./src/app_demo/material/tabs_demo.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//tabs_demo.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MXJSWidgetState,
  Scaffold,
  Text,
  Theme,
  EdgeInsets,
  Column,
  SizedBox,
  Card,
  CrossAxisAlignment,
  MainAxisAlignment,
  Align,
  Center,
  Image,
  Alignment,
  CircleAvatar,
  DefaultTabController,
  NestedScrollView,
  SliverOverlapAbsorber,
  SliverAppBar,
  TabBar,
  Tab,
  TabBarView,
  SafeArea,
  Builder,
  CustomScrollView,
  SliverChildBuilderDelegate,
  SliverOverlapInjector,
  SliverPadding,
  SliverFixedExtentList,
  Padding
  
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

let _kGalleryAssetsPackage = 'flutter_gallery_assets';

class _Page {
    constructor({label}) {
        this.label = label;
    }

    get id() {
        return this.label[0];
    }

    toString() {
        return '$runtimeType("$this.label")';
    }
}

class _CardData {
    constructor({title, imageAsset, imageAssetPackage}) {
        this.title = title,
        this.imageAsset = imageAsset,
        this.imageAssetPackage = imageAssetPackage;
    }
}

// ES6的map写法比较奇怪
var _allPages = new Map();
_allPages.set(new _Page({label: 'HOME'}) , [
    new _CardData({
        title: 'Flatwear',
        imageAsset: 'products/flatwear.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Pine Table',
        imageAsset: 'products/table.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Blue Cup',
        imageAsset: 'products/cup.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
      new _CardData({
        title: 'Tea Set',
        imageAsset: 'products/teaset.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
      new _CardData({
        title: 'Desk Set',
        imageAsset: 'products/deskset.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
      new _CardData({
        title: 'Blue Linen Napkins',
        imageAsset: 'products/napkins.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
      new _CardData({
        title: 'Planters',
        imageAsset: 'products/planters.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Kitchen Quattro',
        imageAsset: 'products/kitchen_quattro.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Platter',
        imageAsset: 'products/platter.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
]).set(new _Page({label: 'APPAREL'}) , [
    new _CardData({
        title: 'Cloud-White Dress',
        imageAsset: 'products/dress.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Ginger Scarf',
        imageAsset: 'products/scarf.png',
        imageAssetPackage: _kGalleryAssetsPackage
    }),
    new _CardData({
        title: 'Blush Sweats',
        imageAsset: 'products/sweats.png',
        imageAssetPackage: _kGalleryAssetsPackage
    })
]);

class _CardDataItem extends MXJSStatelessWidget {
    constructor({page, data}) {
        super('_CardDataItem');
        this.page = page;
        this.data = data;
    }

    static get height() {
        return 272.0;
    }

    build(context) {
        let widget = new Card({
            child: new Padding({
                padding: EdgeInsets.all(16.0),
                child: new Column({
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                        new Align({
                            alignment: this.page.id == 'H' ? Alignment.centerLeft : Alignment.centerRight,
                            child: new CircleAvatar({
                                child: new Text(this.page.id),
                            })
                        }),
                        new SizedBox({
                            width: 144.0,
                            height: 144.0,
                            child: Image.asset(
                                this.data.imageAsset, {
                                    fit: BoxFit.contain,
                                    mxPackage: this.data.imageAssetPackage
                                }
                            )
                        }),
                        new Center({
                            child: new Text(
                                this.data.title, {
                                    style: Theme.of(context).textTheme.title,
                            })
                        })
                    ]
                })
            })
        });
        return widget;
    }
}

class JSTabsDemo extends MXJSStatefulWidget {
    constructor() {
        super('JSTabsDemo');
    }
  
    createState() {
        return new JSTabsDemoState(this);
    }
}

class JSTabsDemoState extends MXJSWidgetState {
    build(context){
        let widget = new DefaultTabController({
            length: _allPages.size,
            child: new Scaffold({
                body: new NestedScrollView({
                    headerSliverBuilder: function(context) {
                        return [
                            new SliverOverlapAbsorber({
                                handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
                                child: new SliverAppBar({
                                    title: new Text('Tabs and scrolling'),
                                    pinned: true,
                                    expandedHeight: 150.0,
                                    forceElevated: false,
                                    bottom: new TabBar({
                                        tabs: [...(_allPages.keys())].map(page => new Tab({text: page.label}))
                                    })
                                })
                            })
                        ];
                    },
                    body: new TabBarView({
                        children: [...(_allPages.keys())].map(function(page) {
                            return new SafeArea({
                                top: false,
                                bottom: false,
                                child: new Builder({
                                    builder: function(context) {
                                        return new CustomScrollView({
                                            slivers: [
                                                new SliverOverlapInjector({
                                                    handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context)
                                                }),
                                                new SliverPadding({
                                                    padding: EdgeInsets.symmetric({
                                                        vertical: 8.0,
                                                        horizontal: 16.0
                                                    }),
                                                    sliver: new SliverFixedExtentList({
                                                        itemExtent: _CardDataItem.height,
                                                        delegate: new SliverChildBuilderDelegate(
                                                            function(context, index) {
                                                                var data = (_allPages.get(page))[index];
                                                                return new Padding({
                                                                    padding: EdgeInsets.symmetric({
                                                                        vertical: 8.0
                                                                    }),
                                                                    child: new _CardDataItem({
                                                                        page: page,
                                                                        data: data
                                                                    })
                                                                });
                                                            },
                                                            {
                                                                childCount: (_allPages.get(page)).length
                                                            }
                                                        )
                                                    })
                                                })
                                            ]
                                        });
                                    }
                                })
                            });
                        })
                    })
                })
            })
        });
        return widget;
    }
}

module.exports = { JSTabsDemo };


/***/ }),

/***/ "./src/app_demo/pesto.js":
/*!*******************************!*\
  !*** ./src/app_demo/pesto.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Center,
  AppBar,
  Text,
  Icon,
  IconData,
  MediaQuery,
  FloatingActionButton,
  CustomScrollView,
  SliverAppBar,
  SliverPadding,
  SliverGrid,
  SliverGridDelegateWithMaxCrossAxisExtent,
  SliverChildBuilderDelegate,
  EdgeInsets,
  GestureDetector,
  Card,
  Expanded,
  Column,
  Hero,
  AspectRatio,
  Image,
  BoxFit,
  Row,
  Padding,
  MXJSStatelessWidget
  
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");


//业务代码

let _kGalleryAssetsPackage = 'flutter_gallery_assets';
let _kAppBarHeight = 128.0;
let _kFabHalfSize = 28.0; // TODO(mpcomplete): needs to adapt to screen size
let _kRecipePageMaxWidth = 500.0;

class JSPestoPage extends MXJSStatefulWidget {
  constructor() {
      super('JSPestoPage');
  }

  createState() {
    return new JSPestoPageState(this);
  }
}

class JSPestoPageState extends MXJSWidgetState {

  build(context) {

    let statusBarHeight = 24;

    let mq = MediaQuery.of(context);
    if (mq) {
      statusBarHeight = mq.padding.top
    }

    let w = new Scaffold({
      appBar: new AppBar({
        title: new Text("Pesto Demo")
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(new IconData(0xe3c9)),
        onPressed: function () {

        }
      }),
      body: new CustomScrollView({
        semanticChildCount: _recipeList.length,
        slivers: [
          //this.buildAppBar(context, statusBarHeight),
          this.buildBody(context, statusBarHeight)
        ]
      })
      //body:this.buildItems()[0]
    });

    return w;
  }

  buildAppBar(context, statusBarHeight) {
    return SliverAppBar({
      pinned: true,
      expandedHeight: _kAppBarHeight,
      actions: [
        IconButton({
          icon: new Icon(new IconData(1)),
          tooltip: 'Search',
          onPressed: function () {

          }
        })
      ],
      flexibleSpace: LayoutBuilder({
        builder: function (context, constraints) {
          size = constraints.biggest;
          appBarHeight = size.height - statusBarHeight;
          t = (appBarHeight - kToolbarHeight) / (_kAppBarHeight - kToolbarHeight);
          extraPadding = new Tween({ begin: 10.0, end: 24.0 }).transform(t);
          logoHeight = appBarHeight - 1.5 * extraPadding;
          return Padding({
            padding: EdgeInsets.only({
              top: statusBarHeight + 0.5 * extraPadding,
              bottom: extraPadding,
            }),
            child: Center({
              child: new Icon(new IconData(1))
            })
          });
        }
      })
    });
  }

  buildBody(context, statusBarHeight) {

    let mediaPadding = EdgeInsets.all(0);
    let mq = MediaQuery.of(context);
    if (mq) {
      mediaPadding = MediaQuery.of(context).padding;
    }
    let padding = EdgeInsets.only({
      top: 8.0,
      left: 8.0 + mediaPadding.left,
      right: 8.0 + mediaPadding.right,
      bottom: 8.0
    });

    return new SliverPadding({
      padding: padding,
      sliver: new SliverGrid({
        gridDelegate: new SliverGridDelegateWithMaxCrossAxisExtent({
          maxCrossAxisExtent: _kRecipePageMaxWidth,
          crossAxisSpacing: 8.0,
          mainAxisSpacing: 8.0,
        }),
        delegate: new SliverChildBuilderDelegate(
          function (context, index) {
            let recipe = _recipeList[index];
            let w = new RecipeCard({
              recipe: recipe,
              onTap: function () { showRecipePage(context, recipe); }
            });

            return w;
          },
          {
            childCount: _recipeList.length
          })
      })
    });
  }

  // buildItems() {
  //   let recipeWidgetList = [];

  //   this.recipes.forEach(element => {
  //     let w = new RecipeCard({
  //       recipe: element,
  //       onTap: function () { showRecipePage(context, element); },
  //     });
  //     recipeWidgetList.push(w);
  //   });

  //   return recipeWidgetList;
  // }
}

// A card with the recipe's image, author, and title.
class RecipeCard extends MXJSStatelessWidget {

  constructor({ recipe, onTap }) {
    super("RecipeCard");
    this.recipe = recipe;
    this.onTap = onTap;

  }

  build(context) {

    //return new Text(this.recipe.name);
    return new GestureDetector({
      onTap: this.onTap,
      child: new Card({
        child: new Column({
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            new Hero({
              tag: 'packages/' + this.recipe.imagePackage + '/' + this.recipe.imagePath,
              child:
                new AspectRatio({
                  aspectRatio: 4.0 / 3.0,
                  child: Image.asset(
                    this.recipe.imagePath,
                    {
                      mxPackage: this.recipe.imagePackage,
                      fit: BoxFit.cover,
                      semanticLabel: this.recipe.name
                    })
                })
            }),
            new Expanded({
              child: new Row({
                children: [
                  new Padding({
                    padding: EdgeInsets.all(16.0),
                    child: Image.asset(
                      this.recipe.ingredientsImagePath,
                      {
                        mxPackage: this.recipe.ingredientsImagePackage,
                        width: 48.0,
                        height: 48.0
                      })
                  }),
                  new Expanded({
                    child: new Column({
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        new Text(this.recipe.name),
                        new Text(this.recipe.author),
                      ]
                    })
                  })
                ]
              })
            })
          ]
        })
      })
    });
  }
}



//ui数据
class Recipe {
  constructor({
    name,
    author,
    description,
    imagePath,
    imagePackage,
    ingredientsImagePath,
    ingredientsImagePackage,
    ingredients,
    steps
  } = {}) {

    this.name = name;
    this.author = author;
    this.description = description;
    this.imagePath = imagePath;
    this.imagePackage = imagePackage;
    this.ingredientsImagePath = ingredientsImagePath;
    this.ingredientsImagePackage = ingredientsImagePackage;
    this.ingredients = ingredients;
    this.steps = steps;
  }
}

class RecipeIngredient {
  constructor({
    amount,
    description
  } = {}) {

    this.amount = amount;
    this.description = description;
  }
}


class RecipeStep {
  constructor({
    duration,
    description
  } = {}) {

    this.duration = duration;
    this.description = description;
  }
}

//const List<Recipe> kPestoRecipes = <Recipe>[

let _recipeList = [
  new Recipe({
    name: 'Roasted Chicken',
    author: 'Peter Carlsson',
    ingredientsImagePath: 'food/icons/main.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'The perfect dish to welcome your family and friends with on a crisp autumn night. Pair with roasted veggies to truly impress them.',
    imagePath: 'food/roasted_chicken.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '1 whole', description: 'Chicken' }),
      new RecipeIngredient({ amount: '1/2 cup', description: 'Butter' }),
      new RecipeIngredient({ amount: '1 tbsp', description: 'Onion powder' }),
      new RecipeIngredient({ amount: '1 tbsp', description: 'Freshly ground pepper' }),
      new RecipeIngredient({ amount: '1 tsp', description: 'Salt' })
    ],
    steps: [
      new RecipeStep({ duration: '1 min', description: 'Put in oven' }),
      new RecipeStep({ duration: '1hr 45 min', description: 'Cook' })
    ],
  }),
  new Recipe({
    name: 'Chopped Beet Leaves',
    author: 'Trevor Hansen',
    ingredientsImagePath: 'food/icons/veggie.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'This vegetable has more to offer than just its root. Beet greens can be tossed into a salad to add some variety or sauteed on its own with some oil and garlic.',
    imagePath: 'food/chopped_beet_leaves.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '3 cups', description: 'Beet greens' })
    ],
    steps: [
      new RecipeStep({ duration: '5 min', description: 'Chop' })
    ]
  }),
  new Recipe({
    name: 'Pesto Pasta',
    author: 'Ali Connors',
    ingredientsImagePath: 'food/icons/main.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'With this pesto recipe, you can quickly whip up a meal to satisfy your savory needs. And if you\'re feeling festive, you can add bacon to taste.',
    imagePath: 'food/pesto_pasta.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '1/4 cup ', description: 'Pasta' }),
      new RecipeIngredient({ amount: '2 cups', description: 'Fresh basil leaves' }),
      new RecipeIngredient({ amount: '1/2 cup', description: 'Parmesan cheese' }),
      new RecipeIngredient({ amount: '1/2 cup', description: 'Extra virgin olive oil' }),
      new RecipeIngredient({ amount: '1/3 cup', description: 'Pine nuts' }),
      new RecipeIngredient({ amount: '1/4 cup', description: 'Lemon juice' }),
      new RecipeIngredient({ amount: '3 cloves', description: 'Garlic' }),
      new RecipeIngredient({ amount: '1/4 tsp', description: 'Salt' }),
      new RecipeIngredient({ amount: '1/8 tsp', description: 'Pepper' }),
      new RecipeIngredient({ amount: '3 lbs', description: 'Bacon' })
    ],
    steps: [
      new RecipeStep({ duration: '15 min', description: 'Blend' })
    ]
  }),
  new Recipe({
    name: 'Cherry Pie',
    author: 'Sandra Adams',
    ingredientsImagePath: 'food/icons/main.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'Sometimes when you\'re craving some cheer in your life you can jumpstart your day with some cherry pie. Dessert for breakfast is perfectly acceptable.',
    imagePath: 'food/cherry_pie.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '1', description: 'Pie crust' }),
      new RecipeIngredient({ amount: '4 cups', description: 'Fresh or frozen cherries' }),
      new RecipeIngredient({ amount: '1 cup', description: 'Granulated sugar' }),
      new RecipeIngredient({ amount: '4 tbsp', description: 'Cornstarch' }),
      new RecipeIngredient({ amount: '1½ tbsp', description: 'Butter' })
    ],
    steps: [
      new RecipeStep({ duration: '15 min', description: 'Mix' }),
      new RecipeStep({ duration: '1hr 30 min', description: 'Bake' })
    ]
  }),
  new Recipe({
    name: 'Spinach Salad',
    author: 'Peter Carlsson',
    ingredientsImagePath: 'food/icons/spicy.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'Everyone\'s favorite leafy green is back. Paired with fresh sliced onion, it\'s ready to tackle any dish, whether it be a salad or an egg scramble.',
    imagePath: 'food/spinach_onion_salad.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '4 cups', description: 'Spinach' }),
      new RecipeIngredient({ amount: '1 cup', description: 'Sliced onion' })
    ],
    steps: [
      new RecipeStep({ duration: '5 min', description: 'Mix' })
    ]
  }),
  new Recipe({
    name: 'Butternut Squash Soup',
    author: 'Ali Connors',
    ingredientsImagePath: 'food/icons/healthy.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'This creamy butternut squash soup will warm you on the chilliest of winter nights and bring a delightful pop of orange to the dinner table.',
    imagePath: 'food/butternut_squash_soup.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '1', description: 'Butternut squash' }),
      new RecipeIngredient({ amount: '4 cups', description: 'Chicken stock' }),
      new RecipeIngredient({ amount: '2', description: 'Potatoes' }),
      new RecipeIngredient({ amount: '1', description: 'Onion' }),
      new RecipeIngredient({ amount: '1', description: 'Carrot' }),
      new RecipeIngredient({ amount: '1', description: 'Celery' }),
      new RecipeIngredient({ amount: '1 tsp', description: 'Salt' }),
      new RecipeIngredient({ amount: '1 tsp', description: 'Pepper' })
    ],
    steps: [
      new RecipeStep({ duration: '10 min', description: 'Prep vegetables' }),
      new RecipeStep({ duration: '5 min', description: 'Stir' }),
      new RecipeStep({ duration: '1 hr 10 min', description: 'Cook' })
    ]
  }),
  new Recipe({
    name: 'Spanakopita',
    author: 'Trevor Hansen',
    ingredientsImagePath: 'food/icons/quick.png',
    ingredientsImagePackage: _kGalleryAssetsPackage,
    description: 'You \'feta\' believe this is a crowd-pleaser! Flaky phyllo pastry surrounds a delicious mixture of spinach and cheeses to create the perfect appetizer.',
    imagePath: 'food/spanakopita.png',
    imagePackage: _kGalleryAssetsPackage,
    ingredients: [
      new RecipeIngredient({ amount: '1 lb', description: 'Spinach' }),
      new RecipeIngredient({ amount: '½ cup', description: 'Feta cheese' }),
      new RecipeIngredient({ amount: '½ cup', description: 'Cottage cheese' }),
      new RecipeIngredient({ amount: '2', description: 'Eggs' }),
      new RecipeIngredient({ amount: '1', description: 'Onion' }),
      new RecipeIngredient({ amount: '½ lb', description: 'Phyllo dough' })
    ],
    steps: [
      new RecipeStep({ duration: '5 min', description: 'Sauté vegetables' }),
      new RecipeStep({ duration: '3 min', description: 'Stir vegetables and other filling ingredients' }),
      new RecipeStep({ duration: '10 min', description: 'Fill phyllo squares half-full with filling and fold.' }),
      new RecipeStep({ duration: '40 min', description: 'Bake' })
    ]
  })
];

module.exports = { JSPestoPage };


/***/ }),

/***/ "./src/app_demo/platform/example_dio.js":
/*!**********************************************!*\
  !*** ./src/app_demo/platform/example_dio.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Icons,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");
const packages__dio = __webpack_require__(/*! @tencent/mxflutter-dio */ "./node_modules/@tencent/mxflutter-dio/index.js");


let cgiDataUrl = "https://c.m.163.com/nc/article/headline/T1348649580692/0-10.html";
let cgiJsonUrl = "https://reactnative.dev/movies.json"

class PageExampleDio extends MXJSStatefulWidget {
  constructor() {
    super("PageExampleDio");

    this.data = "biz data";
    this.count = 0;
  }

  createState() {
    return new PageExampleDioState(this);
  }
}

class PageExampleDioState extends MXJSWidgetState {
  constructor() {
    super("PageExampleNetworkState");
    this.response = "点击小人Run上面的代码";
    this.dio = packages__dio.Dio();
  }

  dioCodeText() {
    return "let resp = await Dio().get(cgi);";
  }
  
  //例子1，最简单的用法 
  async testDio1(url) {
    
    try {
      let response = await this.dio.get(url);
      MXJSLog.log("await Dio.get(urlStr):request() :" + response);
      return response.data;

    } catch (e$) {
      // let e = dart.getThrown(e$);
      // MXJSLog.log("testDio() error:" + e);
      return e;

    }
  }

  //例子2，接口还未完全支持
  async testDio2(url) {
    
    try {
      let response =  await this.dio.get(url, { onReceiveProgress:function (progress,total){
        MXJSLog.log("testDio(): progress: " + progress/total);
      }});

      MXJSLog.log("await Dio.get(urlStr):request() :" + response);
      return response.data;

    } catch (e$) {
      // let e = dart.getThrown(e$);
      // MXJSLog.log("testDio() error:" + e);
      rethrow;
    }
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("Dio Example"),
      }),
      body: new ListView({
        children: [
          new SectionTitle("Code 获取网易新闻text"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.testDio2(cgiDataUrl);

              this.setState(function () {

                this.response = JSON.stringify(response);

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Code 获取Json Map"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.testDio1(cgiJsonUrl);

              this.setState(function () {

                //response.data 为json map obj
                this.response = "json title:" + response["title"]  + " \r\n\r\n\r\njson text:" +  JSON.stringify(response);

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Response"),

          new Padding({
            padding: EdgeInsets.all(10),
            child: new Text(this.response, {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
          })

        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleDio,
};


/***/ }),

/***/ "./src/app_demo/platform/example_message_channel.js":
/*!**********************************************************!*\
  !*** ./src/app_demo/platform/example_message_channel.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Icons,
  MethodChannel
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");

class PageExampleMessageChannel extends MXJSStatefulWidget {
  constructor() {
    super("PageExampleMessageChannel");

  }

  createState() {
    return new PageExampleMessageChannelState(this);
  }
}

class PageExampleMessageChannelState extends MXJSWidgetState {
  constructor() {
    super("PageExampleMessageChannelState");
    this.response = "点击小人Run上面的代码";

    this.methodChannel = new MethodChannel("MXFlutter_MethodChannel_Demo");
  }

  dioCodeText() {
    return "let result = await this.methodChannel.invokeMethod('callNativeIconListRefresh', {});";
  }
  dioCodeText2() {
    return "let result = await this.methodChannel.invokeMethod('callNativeIconListLoadMore', {});";
  }

  async callMethodChannel(method) {

    //MessageChannel 用法示例
    let result = await this.methodChannel.invokeMethod(method, {});

    MXJSLog.log("callNativeIconListRefresh result: " + result);
    return result;

  }



  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("MessageChannel Example"),
      }),
      body: new ListView({
        children: [
          new SectionTitle("Code 调用MessageChannel ListRefresh"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.callMethodChannel("callNativeIconListRefresh");

              this.setState(function () {

                this.response = JSON.stringify(response ? response : "messagechannel return empty");

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Code 调用MessageChannel ListLoadMore"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText2(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.callMethodChannel("callNativeIconListLoadMore");

              this.setState(function () {

                this.response = JSON.stringify(response ? response : "messagechannel return empty");

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("MessageChannel Result"),

          new Padding({
            padding: EdgeInsets.all(10),
            child: new Text(this.response, {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
          })

        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleMessageChannel,
};


/***/ }),

/***/ "./src/app_demo/platform/example_shared_preferences.js":
/*!*************************************************************!*\
  !*** ./src/app_demo/platform/example_shared_preferences.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Icons,
  MethodChannel
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");
//let packages__sp = require("packages/shared_preferences/shared_preferences.js");


async function testPreference() {
  //let packages__sp = require("packages/shared_preferences/shared_preferences.js");

  try {

    let _prefs = (await packages__sp.SharedPreferences.getInstance());
    _prefs.setString("mxflutter", "MXFlutter SharedPreferences: Count : " + this.count++);



    let v = _prefs.getString("soap");
    MXJSLog.log("_prefs.getString('soap'):" + v);

    _prefs.setStringList("soaplist", ["soap", "mxflutter uuuuu"]);

    let vList = _prefs.getStringList("soaplist");
    MXJSLog.log("_prefs.getStringList('soaplist'):" + vList);

  } catch (e$) {
    let e = dart.getThrown(e$);
    MXJSLog.log("testPreference error:" + e);
    return e;

  }


}


class PageExampleSharedPreferences extends MXJSStatefulWidget {
  constructor() {
    super("PageExampleSharedPreferences");

  }

  createState() {
    return new PageExampleSharedPreferencesState(this);
  }
}

class PageExampleSharedPreferencesState extends MXJSWidgetState {
  constructor() {
    super("PageExampleSharedPreferencesState");
    this.response = "点击小人Run上面的代码";
    this.count = 0;

    this.prefs = null;
    this.setup();
  }

  async setup() {
    this.prefs = (await packages__sp.SharedPreferences.getInstance());
  }


  dioCodeText() {
    return "prefs.setString(‘mxflutter’, str)";
  }
  dioCodeText2() {
    return "this.prefs.getString('mxflutter')";
  }


  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("MessageChannel Example"),
      }),
      body: new ListView({
        children: [
          new SectionTitle("Code 调用prefs.setString"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {


              this.setState(function () {

                let str = "MXFlutter SharedPreferences: Count : " + this.count++;

                let v = this.prefs.setString("mxflutter", str);
                this.response = " prefs.setString('mxflutter'," + str + ")";

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Code 调用 prefs.getString"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText2(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {

              this.setState(function () {
                let v = this.prefs.getString("mxflutter");
                this.response = v;

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("prefs Result"),

          new Padding({
            padding: EdgeInsets.all(10),
            child: new Text(this.response, {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
          })

        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSharedPreferences,
};


/***/ }),

/***/ "./src/app_demo/platform/index.js":
/*!****************************************!*\
  !*** ./src/app_demo/platform/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");


class PlatformExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super("PlatformExamplesPage");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Platform Examples'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle("MessageChannel"),

            new ListTile({
              title: new Text("MessageChannel"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                let { PageExampleMessageChannel } = __webpack_require__(/*! ./example_message_channel.js */ "./src/app_demo/platform/example_message_channel.js");
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleMessageChannel();
                  }
                }))
              }
            }),
            new SectionTitle("网络组件", { key: new Key("1") }),

            new ListTile({
              title: new Text("Dio Examples"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                let { PageExampleDio } = __webpack_require__(/*! ./example_dio.js */ "./src/app_demo/platform/example_dio.js");
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleDio;
                  }
                }))
              }
            }),

            new SectionTitle("存储"),

            new ListTile({
              title: new Text("shared_preferences"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                let { PageExampleSharedPreferences } = __webpack_require__(/*! ./example_shared_preferences.js */ "./src/app_demo/platform/example_shared_preferences.js");
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new PageExampleSharedPreferences;
                  }
                }))
              }
            }),

          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  PlatformExamplesPage,
};


/***/ }),

/***/ "./src/app_demo/profile/column_profile.js":
/*!************************************************!*\
  !*** ./src/app_demo/profile/column_profile.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  FlutterLogo,
  Wrap,
  Scrollbar,
  Card,
  Theme,
  Navigator,
  MaterialPageRoute,
  MethodChannel,
  ClipRRect,
  BoxFit,
  Duration,
  Key,
  BorderDirectional,
  BorderSide,
  Alignment,
  AspectRatio,
  DecorationImage,
  Rect,
  SingleChildScrollView,
  Stack,
  Padding,
  MediaQuery,
  UniqueKey,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");
const { CachedNetworkImage } = __webpack_require__(/*! @tencent/mxflutter-cached-network-image */ "./node_modules/@tencent/mxflutter-cached-network-image/index.js");

//
const g_max_count = 200;

//data
let g_newsOrder = 0;

//实现一个简单的event_bus
let g_event_bus_map = {}; //type Map<key:String,function:handelFun>

class PerformanceProfilingWidget extends MXJSStatefulWidget {
  constructor({ title, profileText, rebuildCallback } = {}) {
    super('PerformanceProfilingWidget');
    this.title = title ? title : '性能分析';
    this.profileText = profileText;
    this.rebuildCallback = rebuildCallback;
  }

  createState() {
    return new PerformanceProfilingWidgetState(this);
  }
}

PerformanceProfilingWidget.Event_Refresh_ProfileInfo = 'demo_pref_info_refresh';

class PerformanceProfilingWidgetState extends MXJSWidgetState {
  constructor(widget) {
    super();
    this.buildCount = 0;
  }

  //Override
  initState() {
    //注册局部刷新事件
    g_event_bus_map[PerformanceProfilingWidget.Event_Refresh_ProfileInfo] = function (profileText) {
      this.refreshProfileText(profileText);
    }.bind(this);
  }

  //Override
  dispose() {
    delete g_event_bus_map[PerformanceProfilingWidget.Event_Refresh_ProfileInfo];
  }

  build(context) {
    let widget = new Padding({
      padding: EdgeInsets.only({ top: 0.0, bottom: 0.0, left: 10.0, right: 10 }),
      child: new Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          new Row({
            children: [
              new Text(this.widget.title + '(' + ++this.buildCount + ')', {
                style: new TextStyle({
                  fontWeight: FontWeight.bold,
                  fontSize: 16.0,
                  color: Colors.black,
                }),
              }),
              new FlatButton({
                onPressed: function () {
                  if (this.widget.rebuildCallback) {
                    this.widget.rebuildCallback();
                    return;
                  }

                  //性能分析模式
                  //打开性能分析模式，widget.enableProfile = true
                  //可以State类重载onBuildEnd，使用args.profileText获得这次Rebuild的各个阶段耗时
                  //如果onBuildEnd又触发setState 记得一定this.enableProfile = false; 否则会Rebuild死循环
                  this.widget.enableProfile = true;

                  this.setState();
                  MXJSLog.log('数据量少时，点击...');
                }.bind(this),
                child: new Text('点击查看耗时', {
                  style: new TextStyle({
                    fontWeight: FontWeight.bold,
                    fontSize: 14.0,
                    color: Colors.red,
                  }),
                }),
              }),
            ],
          }),
          new Padding({
            padding: EdgeInsets.only({ top: 0.0, bottom: 10.0, left: 0.0, right: 0 }),
            child: new Text(this.profileText == null ? "耗时信息" : this.profileText),
          }),
        ],
      }),
    });
    return new Card({ child: widget, color: new Color(0xffe1f5fe), margin: EdgeInsets.fromLTRB(8.0, 8.0, 10.0, 0.0) });
  }

  onBuildEnd(args) {
    if (!this.widget.enableProfile) {
      return;
    }

    this.refreshProfileText(args.profileText);
  }

  refreshProfileText(profileText) {
    //如果onBuildEnd又触发setState 记得一定this.enableProfile = false; 否则会Rebuild死循环

    if(!profileText){
      return;
    }

    this.widget.enableProfile = false;
    this.setState(
      function () {
        this.profileText = profileText;
      }.bind(this),
    );
  }
}

class ListViewProfileDemo1 extends MXJSStatefulWidget {
  constructor() {
    super('ListViewDemo');
    this.enableProfile = true;
  }

  createState() {
    return new ListViewProfileDemo1State(this);
  }
}

class ListViewProfileDemo1State extends MXJSWidgetState {
  constructor(widget) {
    super();

    this.newsArray = [];
    this.buildCount = 0;
  }

  initState() {
    super.initState();
    this.newsArray = g_newsList;
  }

  build(context) {
    g_newsOrder = 0;
    ++this.buildCount;

    let items = [];

    items.push(new Container({ child: new PerformanceProfilingWidget({ title: '局部刷新小数据量测试' }) }));
    items.push(
      new Container({
        child: new PerformanceProfilingWidget({
          title: '整个页面刷新大数据量测试',
          profileText: this.profileText,
          rebuildCallback: function () {
            //性能分析模式
            //打开性能分析模式，widget.enableProfile = true
            //可以State类重载onBuildEnd，使用getProfileText获得这次Rebuild的各个阶段耗时
            //如果onBuildEnd又触发setState 记得一定this.enableProfile = false; 否则会Rebuild死循环
            this.widget.enableProfile = true;
            this.setState(function () {}.bind(this));
          }.bind(this),
        }),
      }),
    );

    for (let i = 0; i < g_max_count; ++i) {
      let item = new Container({ child: this.hotCard(this.newsArray[i % this.newsArray.length], this.buildCount) });
      items.push(item);
    }

    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('网易新闻 Column Widget '),
      }),
      body: new SingleChildScrollView({
        child: new Column({
          children: items,
        }),
      }),
    });

    return widget;
  }

  //
  onBuildEnd(args) {
    if (!this.widget.enableProfile || !args.profileText) {
      return;
    }

    //如果onBuildEnd又触发setState 记得一定this.enableProfile = false; 否则会Rebuild死循环
    this.widget.enableProfile = false;

    //1. 给性能Cell 发个通知，局部刷新,把ProfileText显示出来
    let handelFun = g_event_bus_map[PerformanceProfilingWidget.Event_Refresh_ProfileInfo];
    if (handelFun) {
      handelFun(args.profileText);
    }
  }

  hotCard(newsModel, buildCount) {
    g_newsOrder++;

    return new Container({
      decoration: new BoxDecoration({
        color: Colors.white,
        border: new BorderDirectional({
          bottom: new BorderSide({
            color: Colors.black12,
            width: 1.0,
          }),
        }),
      }),
      child: new FlatButton({
        onPressed: function () {},
        child: new Container({
          padding: EdgeInsets.only({ top: 8.0, bottom: 8.0 }),
          child: new Row({
            children: [
              new Expanded({
                flex: 1,
                child: new Column({
                  children: [
                    new Container({
                      child: new Text(String(g_newsOrder), {
                        style: new TextStyle({
                          color: Colors.red,
                          fontSize: 18.0,
                        }),
                      }),
                      alignment: Alignment.topLeft,
                    }),
                    newsModel.rise != null
                      ? new Row({
                          children: [
                            new Icon(new IconData(0xe5d8, { fontFamily: 'MaterialIcons' }), {
                              color: Colors.red,
                              size: 10.0,
                            }),
                            new Text(newsModel.rise, {
                              style: new TextStyle({
                                color: Colors.red,
                                fontSize: 10.0,
                              }),
                            }),
                          ],
                        })
                      : new Container(),
                  ],
                }),
              }),
              new Expanded({
                flex: 6,
                child: new Column({
                  children: [
                    new Container({
                      child: new Text('buildCount: ' + buildCount + ' ' + newsModel.title, {
                        style: new TextStyle({
                          fontWeight: FontWeight.bold,
                          fontSize: 16.0,
                          height: 1.1,
                          color: Colors.black,
                        }),
                      }),
                      padding: EdgeInsets.only({ bottom: 10.0, right: 4.0 }),
                      alignment: Alignment.topLeft,
                    }),
                    newsModel.mark != null
                      ? new Container({
                          child: new Text(newsModel.mark, {
                            style: new TextStyle({ color: Colors.black54 }),
                          }),
                          alignment: Alignment.topLeft,
                          padding: EdgeInsets.only({ bottom: 8.0, right: 4.0 }),
                        })
                      : new Container(),
                    new Container({
                      child: new Text(newsModel.hotNum, {
                        style: new TextStyle({ color: Colors.black54 }),
                      }),
                      alignment: Alignment.topLeft,
                    }),
                  ],
                }),
              }),
              new Expanded({
                flex: 3,
                child: new AspectRatio({
                  aspectRatio: 3.0 / 2.0,
                  child: new ClipRRect({
                    borderRadius: BorderRadius.circular(4.0),
                    child: new CachedNetworkImage({
                      fadeInDuration: new Duration({ milliseconds: 10 }),
                      fadeOutDuration: new Duration({ milliseconds: 10 }),
                      imageUrl: newsModel.imgUrl,
                      width: 124.0,
                      height: 69.0,
                      fit: BoxFit.fill,
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }
}

class NewsModel {
  constructor(order, title, hotNum, imgUrl, { mark, rise } = {}) {
    this.order = order;
    this.title = title;
    this.hotNum = hotNum;
    this.imgUrl = imgUrl;
    this.mark = mark;
    this.rise = rise;
  }

  static fromJSON(jsonMap) {
    let news = new NewsModel();

    news.order = String(jsonMap['order']);
    news.title = jsonMap['title'];
    news.hotNum = String(jsonMap['votecount']) + ' 人点赞';
    news.imgUrl = jsonMap['imgsrc'];
    news.mark = jsonMap['source'];
    news.rise = jsonMap['alias'];

    return news;
  }
}

let g_newsList = [
  new NewsModel('01', '了不起的新时代，世界竞争中的中国制造', '4427 万热度', 'https://pic2.zhimg.com/50/v2-710b7a6fea12a7203945b666790b7181_hd.jpg'),
  new NewsModel('02', '一个女生怎样才算见过世面？', '4157 万热度', 'https://pic3.zhimg.com/50/v2-56dca99cd8718f9303d43b3015342ba7_hd.jpg', {
    rise: '3',
    mark: '所谓世面，就是世界的每一面',
  }),
  new NewsModel('03', '如果朱标没死，削藩的话，朱棣会造反吗？', '4009 万热度', 'https://pic4.zhimg.com/v2-095d2b48970889b108247e6d2dd0fa6b_b.jpg'),
  new NewsModel('04', '如何编译 Linux 内核？', '3110 万热度', 'https://pic3.zhimg.com/80/v2-1ea1b0cf80c85b88893b2b97a94d7e71_hd.jpg', { mark: '内核？呵呵' }),
  new NewsModel('05', '如何看待将神话故事拍成电影这件事？', '2119 万热度', 'https://pic4.zhimg.com/50/v2-267b1dda62f770bd2bd13cb545117b78_hd.jpg', {
    rise: '3',
  }),
];

module.exports = {
  ListViewProfileDemo1,
};


/***/ }),

/***/ "./src/app_demo/profile/column_submxwidget_profile.js":
/*!************************************************************!*\
  !*** ./src/app_demo/profile/column_submxwidget_profile.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    MXJSLog,
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    MaterialApp,
    Scaffold,
    Container,
    BoxDecoration,
    BorderRadius,
    Radius,
    ListTile,
    Center,
    Color,
    AppBar,
    SnackBar,
    Text,
    Icon,
    IconData,
    EdgeInsets,
    Colors,
    IconButton,
    FlatButton,
    RaisedButton,
    FloatingActionButton,
    Column,
    Row,
    DropdownButton,
    DropdownMenuItem,
    MainAxisAlignment,
    CrossAxisAlignment,
    TextStyle,
    PopupMenuButton,
    PopupMenuItem,
    ButtonBar,
    MainAxisSize,
    TextDecoration,
    RichText,
    TextSpan,
    Expanded,
    FontWeight,
    TextFormField,
    InputDecoration,
    UnderlineInputBorder,
    TextInputType,
    SizedBox,
    TextField,
    TextEditingController,
    ListView,
    Slider,
    Icons,
    FlutterLogo,
    Wrap,
    Scrollbar,
    Card,
    Theme,
    Navigator,
    MaterialPageRoute,
    MethodChannel,
    ClipRRect,
    BoxFit,
    Duration,
    Key,
    BorderDirectional,
    BorderSide,
    Alignment,
    AspectRatio,
    DecorationImage,
    Rect,
    SingleChildScrollView
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");



const { CachedNetworkImage } = __webpack_require__(/*! @tencent/mxflutter-cached-network-image */ "./node_modules/@tencent/mxflutter-cached-network-image/index.js");
const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");



//
const g_max_count = 100;

//data
let g_newsOrder = 0;
//
class ListViewProfileDemo1 extends MXJSStatefulWidget {
    constructor() {
        super('ListViewDemo');
    }

    createState() {
        return new ListViewProfileDemo1State(this);
    }

}

class ListViewProfileDemo1State extends MXJSWidgetState {
    constructor() {
        super();

        this.newsArray = [];
        this.buildCount = 1;
    }

    initState() {
        super.initState();
        this.newsArray = g_newsList;
    }



    build(context) {

        g_newsOrder = 0;
        this.buildCount++;


        let items = [];

        for (let i = 0; i < g_max_count; ++i) {

            let item = new Container({ child: new ListViewItem(this.newsArray[i % this.newsArray.length]) });

            items.push(item);
        }

        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('网易新闻 Column Widget '),
            }),
            body: new SingleChildScrollView({
                child: new Column({
                    children: items
                })
            })
        });

        return widget;
    }
}

class ListViewItem extends MXJSStatelessWidget {
    constructor(oneNewsMap) {
        super('ListViewItem');

        this.newsModel = oneNewsMap;

        this.index = Math.ceil(Math.random() * 10000);


    }


    hotCard(context, newsModel) {

        g_newsOrder++;

        return new Container({
            decoration: new BoxDecoration({
                color: Colors.white,
                border: new BorderDirectional({
                    bottom: new BorderSide({
                        color: Colors.black12,
                        width: 1.0
                    })
                })
            }),
            child: new FlatButton({
                onPressed: function () {


                },
                child: new Container({
                    padding: EdgeInsets.only({ top: 8.0, bottom: 8.0 }),
                    child: new Row({
                        children: [
                            new Expanded({
                                flex: 1,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(
                                                String(g_newsOrder), {
                                                style: new TextStyle({
                                                    color: Colors.red,
                                                    fontSize: 18.0
                                                })
                                            }),
                                            alignment: Alignment.topLeft
                                        }),
                                        newsModel.rise != null ?
                                            new Row({
                                                children: [
                                                    new Icon(new IconData(0xe5d8, { fontFamily: 'MaterialIcons' }), {
                                                        color: Colors.red,
                                                        size: 10.0
                                                    }),
                                                    new Text(newsModel.rise, {
                                                        style: new TextStyle({
                                                            color: Colors.red,
                                                            fontSize: 10.0
                                                        })
                                                    })
                                                ]
                                            })
                                            : new Container()
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 6,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(newsModel.title, {
                                                style: new TextStyle({
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 16.0,
                                                    height: 1.1,
                                                    color: Colors.black
                                                })
                                            }),
                                            padding: EdgeInsets.only({ bottom: 10.0, right: 4.0 }),
                                            alignment: Alignment.topLeft
                                        }),
                                        newsModel.mark != null ?
                                            new Container({
                                                child: new Text(newsModel.mark, {
                                                    style: new TextStyle({ color: Colors.black54 })
                                                }),
                                                alignment: Alignment.topLeft,
                                                padding: EdgeInsets.only({ bottom: 8.0, right: 4.0 })
                                            }) :
                                            new Container(),
                                        new Container({
                                            child: new Text(newsModel.hotNum, {
                                                style: new TextStyle({ color: Colors.black54 })
                                            }),
                                            alignment: Alignment.topLeft
                                        })
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 3,
                                child: new AspectRatio({
                                    aspectRatio: 3.0 / 2.0,
                                    child: new ClipRRect({
                                        borderRadius: BorderRadius.circular(4.0),
                                        child: new CachedNetworkImage({
                                            fadeInDuration: new Duration({ milliseconds: 10 }),
                                            fadeOutDuration: new Duration({ milliseconds: 10 }),
                                            imageUrl: newsModel.imgUrl,
                                            width: 124.0,
                                            height: 69.0,
                                            fit: BoxFit.fill
                                        })
                                    }),
                                })
                            })

                        ]
                    })
                })
            })
        })
    }


    build(context) {

        try {
            return this.hotCard(context, this.newsModel);
        } catch (e$) {
            // let e = dart.getThrown(e$);
            // MXJSLog.log("card:build(context):  error:" + e);
            return null;

        }
    }
}


class NewsModel {
    constructor(
        order,
        title,
        hotNum,
        imgUrl,
        { mark,
            rise } = {}
    ) {
        this.order = order;
        this.title = title;
        this.hotNum = hotNum;
        this.imgUrl = imgUrl;
        this.mark = mark;
        this.rise = rise;
    }

    static fromJSON(jsonMap) {
        let news = new NewsModel;

        news.order = String(jsonMap["order"]);
        news.title = jsonMap["title"];
        news.hotNum = String(jsonMap["votecount"]) + " 人点赞";
        news.imgUrl = jsonMap["imgsrc"];
        news.mark = jsonMap["source"];
        news.rise = jsonMap["alias"];

        return news;

    }
}

let g_newsList = [
    new NewsModel("01", "了不起的新时代，世界竞争中的中国制造", "4427 万热度", "https://pic2.zhimg.com/50/v2-710b7a6fea12a7203945b666790b7181_hd.jpg"),
    new NewsModel("02", "一个女生怎样才算见过世面？", "4157 万热度", "https://pic3.zhimg.com/50/v2-56dca99cd8718f9303d43b3015342ba7_hd.jpg", { rise: "3", mark: "所谓世面，就是世界的每一面" }),
    new NewsModel("03", "如果朱标没死，削藩的话，朱棣会造反吗？", "4009 万热度", "https://pic4.zhimg.com/v2-095d2b48970889b108247e6d2dd0fa6b_b.jpg"),
    new NewsModel("04", "如何编译 Linux 内核？", "3110 万热度", "https://pic3.zhimg.com/80/v2-1ea1b0cf80c85b88893b2b97a94d7e71_hd.jpg", { mark: "内核？呵呵" }),
    new NewsModel("05", "如何看待将神话故事拍成电影这件事？", "2119 万热度", "https://pic4.zhimg.com/50/v2-267b1dda62f770bd2bd13cb545117b78_hd.jpg", { rise: "3" })
];


module.exports = {
    ListViewProfileDemo1,
};


/***/ }),

/***/ "./src/app_demo/profile/index.js":
/*!***************************************!*\
  !*** ./src/app_demo/profile/index.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");

// let { PageExampleDio } = require("platform/example_dio.js");
// let { PageExampleFetch } = require("platform/example_fetch.js");
// let { PageExampleNetworkAPI } = require("platform/example_network_native_api.js");
// let { PageExampleMessageChannel } = require("platform/example_message_channel.js");
// let { PageExampleSharedPreferences } = require("platform/example_shared_preferences.js");




class ProfileExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super("ProfileExamplesPage");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Performance Profiling'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle("大页面 column模拟"),

            new ListTile({
              title: new Text("Column"),
              subtitle: new Text('200条Feeds同时渲染，模拟大页面刷新'),
              onTap: function () {

                let list_view = __webpack_require__(/*! ./column_profile.js */ "./src/app_demo/profile/column_profile.js");

                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new list_view.ListViewProfileDemo1;
                  }
                }));
              }
            }),
            new SectionTitle("MXWidget子元素 column模拟"),

            new ListTile({
              title: new Text("Column"),
              subtitle: new Text('100条FeedsMXWidget子元素渲染'),
              onTap: function () {

                let list_view = __webpack_require__(/*! ./column_submxwidget_profile.js */ "./src/app_demo/profile/column_submxwidget_profile.js");

                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new list_view.ListViewProfileDemo1;
                  }
                }));
              }
            }),
            new SectionTitle("ListView"),

            new ListTile({
              title: new Text("ListView"),
              subtitle: new Text('1000条新闻Feeds按需渲染，测试Listview启动和滑动性能'),
              onTap: function () {

                let list_view = __webpack_require__(/*! ./listview_profile.js */ "./src/app_demo/profile/listview_profile.js");

                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new list_view.ListViewProfileDemo1;
                  }
                }));
              }
            }),

            

          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  ProfileExamplesPage,
};


/***/ }),

/***/ "./src/app_demo/profile/listview_profile.js":
/*!**************************************************!*\
  !*** ./src/app_demo/profile/listview_profile.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    MXJSLog,
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    MaterialApp,
    Scaffold,
    Container,
    BoxDecoration,
    BorderRadius,
    Radius,
    ListTile,
    Center,
    Color,
    AppBar,
    SnackBar,
    Text,
    Icon,
    IconData,
    EdgeInsets,
    Colors,
    IconButton,
    FlatButton,
    RaisedButton,
    FloatingActionButton,
    Column,
    Row,
    DropdownButton,
    DropdownMenuItem,
    MainAxisAlignment,
    CrossAxisAlignment,
    TextStyle,
    PopupMenuButton,
    PopupMenuItem,
    ButtonBar,
    MainAxisSize,
    TextDecoration,
    RichText,
    TextSpan,
    Expanded,
    FontWeight,
    TextFormField,
    InputDecoration,
    UnderlineInputBorder,
    TextInputType,
    SizedBox,
    TextField,
    TextEditingController,
    ListView,
    Slider,
    Icons,
    FlutterLogo,
    Wrap,
    Scrollbar,
    Card,
    Theme,
    Navigator,
    MaterialPageRoute,
    MethodChannel,
    ClipRRect,
    BoxFit,
    Duration,
    Key,
    BorderDirectional,
    BorderSide,
    Alignment,
    AspectRatio,
    DecorationImage,
    Rect
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");



const { CachedNetworkImage } = __webpack_require__(/*! @tencent/mxflutter-cached-network-image */ "./node_modules/@tencent/mxflutter-cached-network-image/index.js");
const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");



//
const g_max_count = 1000;

//data
let g_newsOrder = 0;
//
class ListViewProfileDemo1 extends MXJSStatefulWidget {
    constructor() {
        super('ListViewDemo');
    }

    createState() {
        return new ListViewProfileDemo1State(this);
    }

}

class ListViewProfileDemo1State extends MXJSWidgetState {
    constructor() {
        super();

        this.newsArray = [];
        this.buildCount = 1;
    }

    initState() {
        super.initState();
        this.newsArray = g_newsList;
    }



    build(context) {

        g_newsOrder = 0;
        this.buildCount++;
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('网易新闻 ListViewExample'),
            }),
            body: new Scrollbar({
                child: ListView.builder({
                    itemCount: g_max_count,
                    itemBuilder: function (context, index) {
                        return new ListViewItem(this.newsArray[index % this.newsArray.length]);
                    }.bind(this),
                })
            })
        });

        return widget;
    }
}

class ListViewItem extends MXJSStatelessWidget {
    constructor(oneNewsMap) {
        super('ListViewItem');

        this.newsModel = oneNewsMap;

        this.index = Math.ceil(Math.random() * 10000);


    }


    hotCard(context, newsModel) {

        g_newsOrder++;

        return new Container({
            decoration: new BoxDecoration({
                color: Colors.white,
                border: new BorderDirectional({
                    bottom: new BorderSide({
                        color: Colors.black12,
                        width: 1.0
                    })
                })
            }),
            child: new FlatButton({
                onPressed: function () {


                },
                child: new Container({
                    padding: EdgeInsets.only({ top: 8.0, bottom: 8.0 }),
                    child: new Row({
                        children: [
                            new Expanded({
                                flex: 1,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(
                                                String(g_newsOrder), {
                                                style: new TextStyle({
                                                    color: Colors.red,
                                                    fontSize: 18.0
                                                })
                                            }),
                                            alignment: Alignment.topLeft
                                        }),
                                        newsModel.rise != null ?
                                            new Row({
                                                children: [
                                                    new Icon(new IconData(0xe5d8, { fontFamily: 'MaterialIcons' }), {
                                                        color: Colors.red,
                                                        size: 10.0
                                                    }),
                                                    new Text(newsModel.rise, {
                                                        style: new TextStyle({
                                                            color: Colors.red,
                                                            fontSize: 10.0
                                                        })
                                                    })
                                                ]
                                            })
                                            : new Container()
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 6,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(newsModel.title, {
                                                style: new TextStyle({
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 16.0,
                                                    height: 1.1,
                                                    color: Colors.black
                                                })
                                            }),
                                            padding: EdgeInsets.only({ bottom: 10.0, right: 4.0 }),
                                            alignment: Alignment.topLeft
                                        }),
                                        newsModel.mark != null ?
                                            new Container({
                                                child: new Text(newsModel.mark, {
                                                    style: new TextStyle({ color: Colors.black54 })
                                                }),
                                                alignment: Alignment.topLeft,
                                                padding: EdgeInsets.only({ bottom: 8.0, right: 4.0 })
                                            }) :
                                            new Container(),
                                        new Container({
                                            child: new Text(newsModel.hotNum, {
                                                style: new TextStyle({ color: Colors.black54 })
                                            }),
                                            alignment: Alignment.topLeft
                                        })
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 3,
                                child: new AspectRatio({
                                    aspectRatio: 3.0 / 2.0,
                                    child: new ClipRRect({
                                        borderRadius: BorderRadius.circular(4.0),
                                        child: new CachedNetworkImage({
                                            fadeInDuration: new Duration({ milliseconds: 10 }),
                                            fadeOutDuration: new Duration({ milliseconds: 10 }),
                                            imageUrl: newsModel.imgUrl,
                                            width: 124.0,
                                            height: 69.0,
                                            fit: BoxFit.fill
                                        })
                                    }),
                                })
                            })

                        ]
                    })
                })
            })
        })
    }


    build(context) {

        try {
            return this.hotCard(context, this.newsModel);
        } catch (e$) {
            // let e = dart.getThrown(e$);
            // MXJSLog.log("card:build(context):  error:" + e);
            return null;

        }
    }
}


class NewsModel {
    constructor(
        order,
        title,
        hotNum,
        imgUrl,
        { mark,
            rise } = {}
    ) {
        this.order = order;
        this.title = title;
        this.hotNum = hotNum;
        this.imgUrl = imgUrl;
        this.mark = mark;
        this.rise = rise;
    }

    static fromJSON(jsonMap) {
        let news = new NewsModel;

        news.order = String(jsonMap["order"]);
        news.title = jsonMap["title"];
        news.hotNum = String(jsonMap["votecount"]) + " 人点赞";
        news.imgUrl = jsonMap["imgsrc"];
        news.mark = jsonMap["source"];
        news.rise = jsonMap["alias"];

        return news;

    }
}

let g_newsList = [
    new NewsModel("01", "了不起的新时代，世界竞争中的中国制造", "4427 万热度", "https://pic2.zhimg.com/50/v2-710b7a6fea12a7203945b666790b7181_hd.jpg"),
    new NewsModel("02", "一个女生怎样才算见过世面？", "4157 万热度", "https://pic3.zhimg.com/50/v2-56dca99cd8718f9303d43b3015342ba7_hd.jpg", { rise: "3", mark: "所谓世面，就是世界的每一面" }),
    new NewsModel("03", "如果朱标没死，削藩的话，朱棣会造反吗？", "4009 万热度", "https://pic4.zhimg.com/v2-095d2b48970889b108247e6d2dd0fa6b_b.jpg"),
    new NewsModel("04", "如何编译 Linux 内核？", "3110 万热度", "https://pic3.zhimg.com/80/v2-1ea1b0cf80c85b88893b2b97a94d7e71_hd.jpg", { mark: "内核？呵呵" }),
    new NewsModel("05", "如何看待将神话故事拍成电影这件事？", "2119 万热度", "https://pic4.zhimg.com/50/v2-267b1dda62f770bd2bd13cb545117b78_hd.jpg", { rise: "3" })
];


module.exports = {
    ListViewProfileDemo1,
};


/***/ }),

/***/ "./src/app_demo/tabbar.js":
/*!********************************!*\
  !*** ./src/app_demo/tabbar.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 147:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Container,
  ListTile,
  Color,
  Colors,
  AppBar,
  Text,
  EdgeInsets,
  ListView,
  TabBar,
  TabBarView,
  DefaultTabController,
  Tab,
  Align,
  BoxDecoration,
  Border,
  Alignment,
  Column,
  Slider,
  Expanded,
  Center,
  Row,
  SizedBox,
  MainAxisAlignment,
  FloatingActionButton,
  Icon,
  Icons,
  TabController,
  IconData,
  MXSingleTickerAndKeepAliveMixinWidget,
  MXSingleTickerAndKeepAliveMixinWidgetState,
  MXKeepAliveMixinWidget,
  MXKeepAliveMixinWidgetState,
  IconButton
} = __webpack_require__(/*! ../js_flutter.js */ "./src/js_flutter.js");
const { MXJSLog } = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");

class ExampleWidget extends MXSingleTickerAndKeepAliveMixinWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAlign();
  }
}

class PageExampleAlign extends MXSingleTickerAndKeepAliveMixinWidgetState {
  constructor() {
    super();
  }

  initState() {
    super.initState();
    this.tabController = new TabController({ length: 2 });
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAlign'),
        bottom: new TabBar({
          controller: this.tabController,
          tabs: [new Tab({ text: 'A' }), new Tab({ text: 'B' })],
        }),
        actions: [
          new IconButton({
              icon: new Icon(new IconData(0xe150, {fontFamily:'MaterialIcons'})),
              tooltip: 'Edit',
              onPressed:  ()=> {
                this.setState(() => {
                  MXJSLog.log('edit button pressed');
                });
      
              }
          })]
      }),
      body: new TabBarView({
        controller: this.tabController,
        children: [new CounterPage('A'), new CounterPage('B')],
      }),
    });
  }
}

class CounterPage extends MXKeepAliveMixinWidget {
  constructor(title) {
    super('ExampleWidget');
    this.title = title;
  }

  createState() {
    return new CounterPageState();
  }
}

class CounterPageState extends MXKeepAliveMixinWidgetState {
  constructor(title) {
    super();
    this._counter = 0;
  }

  initState() {
    super.initState();
    MXJSLog.log('CounterPageState initState begin');
    setTimeout(() => {
      MXJSLog.log('CounterPageState setTimeout');
      this.setState(() => {
        MXJSLog.log('CounterPageState setTimeout this._counter: ' + this._counter);
        this._counter++;
        MXJSLog.log('CounterPageState setTimeout this._counter: ' + this._counter);
      });
    }, 2000);
    MXJSLog.log('CounterPageState initState end');
  }

  _incrementCounter() {
    this.setState(() => {
      this._counter++;
    });
  }

  build(context) {
    return new Scaffold({
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Text(this.widget.title),
            new Text('You have pushed the button this many times:'),
            new Text('' + this._counter),
          ],
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        onPressed: this._incrementCounter.bind(this),
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      }), // This trailing comma makes auto-formatting nicer for build methods.
    });
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/A/Align.js":
/*!*************************************************!*\
  !*** ./src/app_demo/widget_examples/A/Align.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    ListTile,
    Color,
    Colors,
    AppBar,
    Text,
    EdgeInsets,
    ListView,
    TabBar,
    TabBarView,
    DefaultTabController,
    Tab,
    Align,
    BoxDecoration,
    Border,
    Alignment,
    Column,
    Slider,
    Expanded,
    Center,
    Row,
    SizedBox,
    MainAxisAlignment,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleAlign();
    }
}

class PageExampleAlign extends MXJSWidgetState {
    constructor() {
        super();
        this._widthFactor = 12.0;
        this._heightFactor = 12.0;
        this._xOffset = 0.0;
        this._yOffset = 0.0;
    }

    _changeWidthFactor(value) {
        this.setState(function () {
            this._widthFactor = value;
        }.bind(this));
    }

    _changeHeightFactor(value) {
        this.setState(function () {
            this._heightFactor = value;
        }.bind(this));
    }

    _changeXOffset(value) {
        this.setState(function () {
            this._xOffset = value;
        }.bind(this));
    }

    _changeYOffset(value) {
        this.setState(function () {
            this._yOffset = value;
        }.bind(this));
    }

    _oneAlignInBoard({ costumAlign = false, alignment } = {}) {
        return new Container({
            height: costumAlign ? null : 135.0,
            margin: costumAlign ? null : EdgeInsets.symmetric({ horizontal: 120.0, }),
            decoration: new BoxDecoration({
                border: Border.all({ color: new Color(0xFF000000) }),
            }),
            child: new Align({
                alignment: costumAlign ? new Alignment(this._xOffset, this._yOffset) : alignment,
                widthFactor: this._widthFactor,
                heightFactor: this._heightFactor,
                child: new Container({
                    width: 12.0,
                    height: 12.0,
                    color: Colors.blue,
                }),
            }),
        });
    }

    _alignAlignment() {
        return new ListView({
            children: [
                new ListTile({ title: new Text("Alignment: topLeft") }),
                this._oneAlignInBoard({ alignment: Alignment.topLeft }),
                new ListTile({ title: new Text("Alignment: topCenter") }),
                this._oneAlignInBoard({ alignment: Alignment.topCenter }),
                new ListTile({ title: new Text("Alignment: topRight") }),
                this._oneAlignInBoard({ alignment: Alignment.topRight }),
                new ListTile({ title: new Text("Alignment: centerLeft") }),
                this._oneAlignInBoard({ alignment: Alignment.centerLeft }),
                new ListTile({ title: new Text("Alignment: center") }),
                this._oneAlignInBoard({ alignment: Alignment.center }),
                new ListTile({ title: new Text("Alignment: centerRight") }),
                this._oneAlignInBoard({ alignment: Alignment.centerRight }),
                new ListTile({ title: new Text("Alignment: bottomLeft") }),
                this._oneAlignInBoard({ alignment: Alignment.bottomLeft }),
                new ListTile({ title: new Text("Alignment: bottomCenter") }),
                this._oneAlignInBoard({ alignment: Alignment.bottomCenter }),
                new ListTile({ title: new Text("Alignment: bottomRight") }),
                this._oneAlignInBoard({ alignment: Alignment.bottomRight }),
            ],
        });
    }

    _sizedSlider({ width, min, max, value, onChanged }) {
        return new SizedBox({
            width: width,
            child: new Slider({ min: min, max: max, value: value, onChanged: onChanged }),
        });
    }

    _alignFactor() {
        return new Column({
            children: [
                new ListTile({ title: new Text("Align") }),
                new Expanded({
                    child: new Center({
                        child: this._oneAlignInBoard({ costumAlign: true }),
                    })
                }),
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                        new Text('Width Factor'),
                        new Text('Height Factor'),
                    ]
                }),
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                        this._sizedSlider({
                            width: 180.0, min: 4.0, max: 20.0,
                            value: this._widthFactor, onChanged: this._changeWidthFactor.bind(this),
                        }),
                        this._sizedSlider({
                            width: 180.0, min: 4.0, max: 20.0,
                            value: this._heightFactor, onChanged: this._changeHeightFactor.bind(this),
                        }),
                    ]
                }),
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                        new Text('X Offset'),
                        new Text('Y Offset'),
                    ]
                }),
                new Row({
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                        this._sizedSlider({
                            width: 180.0, min: -1.0, max: 1.0,
                            value: this._xOffset, onChanged: this._changeXOffset.bind(this),
                        }),
                        this._sizedSlider({
                            width: 180.0, min: -1.0, max: 1.0,
                            value: this._yOffset, onChanged: this._changeYOffset.bind(this),
                        }),
                    ]
                })
            ],
        });
    }

    build(context) {
        return new DefaultTabController({
            length: 2,
            child: new Scaffold({
                appBar: new AppBar({
                    title: new Text('PageExampleAlign'),
                    bottom: new TabBar({
                        tabs: [
                            new Tab({ text: '9 Alignments' }),
                            new Tab({ text: 'Custom Factor & offset' }),
                        ]
                    }),
                }),
                body: new TabBarView({
                    children: [
                        this._alignAlignment(),
                        this._alignFactor(),
                    ],
                }),
            }),
        });
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedBuilder.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedBuilder.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Animation,
  AnimatedBuilder,
  AnimationController,
  Duration,
  Interval,
  CurveTween,
  Curves,
  Tween,
  Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedBuilderV2State();
  }
}

class PageExampleAnimatedBuilderV2State extends MXJSWidgetState {

  constructor(){
    super();

    this.count = 0;
    this._controller = new AnimationController({
      duration: new Duration({seconds: 1}),
      // upperBound: 100,
      // vsync: this,
    });

    this._controller.forward();
  }

  beginAnimation(){
    this._controller.repeat();
  }

  build(context){
    const widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilderV2',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed:function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new AnimatedBuilder({
        animation: this._controller,
        widget: new Center({
          child: new Container({
            height:"100+$value*100",   //动态计算$value
            width:"200+$value*200",    //动态计算$value
            color: Colors.orange,
            child: new Center({
              child: new Text("点击 ( + ) 号，重复播放",{
                style:new TextStyle({
                  color:Colors.white
                })
              }),
            }),
          })
        }),
        // builder 由于异步频繁调用JS，会导致JS线程性能问题，没有实现，async在builder中调用也存在技术问题
        // builder: function(context,child){
        //   console.log("call builder in js....aaaa");
        //   MXJSLog.log("call builder in js....bbbb");
        //   return child;
        // },
      })
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedContainer.js":
/*!*************************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedContainer.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedContainer,
  Duration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedContainerState();
  }
}

class PageExampleAnimatedContainerState extends MXJSWidgetState {

  constructor(){
    super();
    this.selected = false;
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedContainer',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

          this.setState(function() {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedContainer"),
          new AnimatedContainer({
            height:this.selected ? 300.0 : 100,
            color:this.selected ? Colors.blue:Colors.orange,
            duration:new Duration({milliseconds:200}),
            child:new Center({
              child:new Text("动画容器",{
                style:new TextStyle({
                  color:Colors.white,
                  fontSize:20,
                })
              }),
            })
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedCrossFade.js":
/*!*************************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedCrossFade.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedCrossFade,
  CrossFadeState,
  Duration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedCrossFadeState();
  }
}

class PageExampleAnimatedCrossFadeState extends MXJSWidgetState {

  constructor() {
    super();
    this.selected = true;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedCrossFade'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.setState(function () {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new AnimatedCrossFade({
        crossFadeState: this.selected ? CrossFadeState.showFirst : CrossFadeState.showSecond,
        duration: new Duration({ milliseconds: 200 }),
        firstChild: new Container({
          width: 500,
          height: 300,
          color: Colors.orange,
          child: new Center({
            child: new Text("第一页", {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              })
            })
          }),
        }),
        secondChild: new Container({
          width: 500,
          height: 300,
          color: Colors.blue,
          child: new Center({
            child: new Text("第二页", {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              })
            })
          }),
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedDefaultTextStyle.js":
/*!********************************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedDefaultTextStyle.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    AppBar,
    Text,
    Icon,
    IconData,
    FloatingActionButton,
    Colors,
    TextStyle,
    Alignment,
    AnimatedDefaultTextStyle,
    Column,
    Duration,
    FontWeight,
    Expanded,
    Icons,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 动画-字体动画
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageAnimatedDefaultTextStyleState();
    }
}

class PageAnimatedDefaultTextStyleState extends MXJSWidgetState {
    constructor() {
        super();
        this.textSize = 10;
        this.color = Colors.orange;
    }

    build() {
        let widgets = new Scaffold({
            appBar: new AppBar({
                title: new Text('AnimatedDefaultTextStyle'),
            }),
            body: new Column({
                children: [
                    new Expanded({
                        child: new Container({
                            alignment: Alignment.center,
                            child: new AnimatedDefaultTextStyle({
                                child: new Text('AnimatedDefaultTextStyle'),
                                style: new TextStyle({
                                    color: this.color,
                                    fontSize: this.textSize,
                                    fontWeight: FontWeight.bold,
                                }),
                                duration: new Duration({
                                    seconds: 1,
                                }),
                            }),
                        }),
                    }),

                ],
            }),
            floatingActionButton: new FloatingActionButton({
                child: new Icon(Icons.add),
                onPressed: function () {
                    this.setState(function () {
                        this.textSize = (this.textSize == 10) ? 30 : 10;
                        this.color = (this.color == Colors.orange) ? Colors.black : Colors.orange;
                    }.bind(this));
                }.bind(this)
            })
        });
        return widgets;
    }
}

module.exports = {
    ExampleWidget
};

/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedOpacity.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedOpacity.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    AppBar,
    Text,
    AnimatedOpacity,
    Curves,
    Duration,
    Colors,
    Center,
    Row,
    Column,
    MainAxisAlignment,
    CupertinoSwitch,
    EdgeInsets,
    FlatButton,
    Expanded,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleAnimatedOpacity();
    }
}
class PageExampleAnimatedOpacity extends MXJSWidgetState {
    constructor() {
        super();
        this.settingTable = {
            "isQuick": true,
            "isLinear": true,
            "isRepeat": false,
        };
        this._selected = false;
        this._repeatAnimationRunning = false;
    }

    _singleOption(selectedText, unselectedText, varName) {
        return new Container({
            padding: EdgeInsets.all(12.0),
            child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                    new Text(this.settingTable[varName] ? selectedText : unselectedText),
                    new CupertinoSwitch({
                        value: this.settingTable[varName],
                        activeColor: Colors.orange,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.settingTable[varName] = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                ],
            }),
        });
    }

    _changeSelected() {
        this.setState(function () {
            this._selected = !this._selected;
        }.bind(this));
    }

    _playOrEnd() {
        if (this.settingTable["isRepeat"] == true) {
            this._repeatAnimationRunning = !this._repeatAnimationRunning;
            if (this._repeatAnimationRunning == false) {
                this.settingTable["isRepeat"] = false;
            }
        }
        this.setState(function () {
            this._selected = !this._selected;
        }.bind(this));
    }

    build(context) {
        return new Scaffold({
            appBar: new AppBar({ title: new Text("AnimatedOpacity"), }),
            body: new Column({
                children: [
                    new AnimatedOpacity({
                        opacity: this._selected ? 0.2 : 1.0,
                        curve: this.settingTable["isLinear"] ? Curves.linear : Curves.easeInOutCirc,
                        duration: new Duration({ milliseconds: this.settingTable["isQuick"] ? 300 : 1000 }),
                        onEnd: this.settingTable["isRepeat"] ? this._changeSelected.bind(this) : null,
                        child: new Container({
                            color: Colors.orange,
                            height: 300,
                            child: new Center({ child: new Text("动画容器") }),
                        }),
                    }),
                    this._singleOption("动画速度：快", "动画速度：慢", "isQuick"),
                    this._singleOption("线性动画：是", "线性动画：否", "isLinear"),
                    this._singleOption("循环播放：是", "循环播放：否", "isRepeat"),
                    new Expanded({ child: new Container() }),
                    new Center({
                        child: new FlatButton({
                            child: new Text(
                                this.settingTable["isRepeat"] ? this._repeatAnimationRunning
                                ? "停止循环" : "循环播放" : "播放一次"),
                            onPressed: this._playOrEnd.bind(this),
                        })
                    }),
                    new Expanded({ child: new Container() }),
                ],
            }),
        });
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedPhysicalModel.js":
/*!*****************************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedPhysicalModel.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    AppBar,
    Text,
    AnimatedPhysicalModel,
    Duration,
    Colors,
    Center,
    Row,
    Column,
    MainAxisAlignment,
    CupertinoSwitch,
    EdgeInsets,
    BorderRadius,
    BoxShape,
    SizedBox,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleAnimatedPhysicalModel();
    }
}

class PageExampleAnimatedPhysicalModel extends MXJSWidgetState {
    constructor() {
        super();
        this.settingTable = {
            "hasBorderRadius": false,
            "ColorPink": false,
            "Elevation": false,
            "ShadowColor": false,
        };
    }

    _singleOption(selectedText, unselectedText, varName) {
        return new Container({
            padding: EdgeInsets.all(12.0),
            child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                    new Text(this.settingTable[varName] ? selectedText : unselectedText),
                    new CupertinoSwitch({
                        value: this.settingTable[varName],
                        activeColor: Colors.orange,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.settingTable[varName] = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                ],
            }),
        });
    }

    build(context) {
        return new Scaffold({
            appBar: new AppBar({ title: new Text("AnimatedPhysicalModel"), }),
            body: new Column({
                children: [
                    new SizedBox({ height: 20.0 }),
                    new Center({
                        child: new AnimatedPhysicalModel({
                            borderRadius: this.settingTable["hasBorderRadius"] ? BorderRadius.circular(20.0) : null,
                            shape: BoxShape.rectangle,
                            color: this.settingTable["ColorPink"] ? Colors.pink/*[300]*/ : Colors.cyan/*[300]*/,
                            elevation: this.settingTable["Elevation"] ? 18 : 8,
                            shadowColor: this.settingTable["ShadowColor"] ?  Colors.yellow : Colors.black,
                            child: new Container({ height: 120, width: 120 }),
                            duration: new Duration({ milliseconds: 500 }),
                        }),
                    }),
                    new SizedBox({ height: 20.0 }),
                    this._singleOption("矩形圆角：有", "矩形圆角：无", "hasBorderRadius"),
                    this._singleOption("矩形颜色：粉色", "矩形颜色：蓝色", "ColorPink"),
                    this._singleOption("矩形高度：高", "矩形高度：低", "Elevation"),
                    this._singleOption("阴影颜色：黄色", "阴影颜色：黑色", "ShadowColor"),
                ],
            }),
        });
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedPositioned.js":
/*!**************************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedPositioned.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    ListTile,
    AppBar,
    Text,
    Colors,
    RaisedButton,
    Column,
    Stack,
    AnimatedPositioned,
    Duration,
    CupertinoSwitch,
    Alignment,
    Curves,
    Expanded,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleAnimatedPositionedState();
    }
}

/// 让子组件进行定位动画，可指定时长和曲线，只能用于Stack中
class PageExampleAnimatedPositionedState extends MXJSWidgetState {
    constructor() {
        super();
        this._selected = false;
        this._left = 100;
        this._top = 100;
        this._onShow = false;
        this._curve = false;
    }

    _changeSwitch() {
        this.setState(function () {
            this._selected = !this._selected;
        }.bind(this));
    };

    _changeButton() {
        this.setState(function () {
            this._left = (this._left == 100) ? this._left + 200 : 100;
            this._top = (this._top == 100) ? this._top + 200 : 100;
        }.bind(this));
    };

    _changeCurve() {
        this.setState(function () {
            this._curve = !this._curve;
        }.bind(this));
    }

    build() {
        let widgets = new Scaffold({
            appBar: new AppBar({
                title: new Text('AnimatedPositioned'),
            }),
            body: new Column({
                children: [
                    new SectionTitle('AnimatedPositioned事例'),
                    new Expanded({
                        child: new Container({
                            height: 500,
                            alignment: Alignment.center,
                            child: new Stack({
                                children: [
                                    new AnimatedPositioned({
                                        top: this._top,
                                        left: this._left,
                                        child: new Container({
                                            color: Colors.green,
                                            width: 50,
                                            height: 50,
                                        }),
                                        curve: this._curve ? Curves.elasticIn : null,
                                        duration: new Duration({ seconds: 1 }),
                                        onEnd: this._selected ? this._changeButton.bind(this) : null,
                                    }),
                                ],
                            }),
                        }),
                    }),


                    new ListTile({
                        title: new Text('循环播放'),
                        trailing: new CupertinoSwitch({
                            value: this._selected,
                            onChanged: this._changeSwitch.bind(this),
                        }),
                    }),

                    new ListTile({
                        title: new Text('开启动画'),
                        trailing: new CupertinoSwitch({
                            value: this._curve,
                            onChanged: this._changeCurve.bind(this),
                        }),
                    }),

                    new RaisedButton({
                        child: new Text('播放'),
                        onPressed: this._changeButton.bind(this),
                    })
                ]
            }),

        });

        return widgets;
    }
}

module.exports = {
    ExampleWidget
};

/***/ }),

/***/ "./src/app_demo/widget_examples/A/AnimatedSize.js":
/*!********************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AnimatedSize.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    ListTile,
    AppBar,
    Text,
    Colors,
    RaisedButton,
    Column,
    AnimatedSize,
    Duration,
    CupertinoSwitch,
    Alignment,
    Curves,
    Expanded,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleAnimatedSizeState(); }
}

/// 子组件大小发生变化时进行动画渐变，可指定时长、对齐方式、曲线、vsync等属性
class PageExampleAnimatedSizeState extends MXJSWidgetState {
    constructor() {
        super();
        this._left = 100;
        this._top = 100;
        this._curve = false;
    }

    _changeCurve() {
        this.setState(function () {
            this._curve = !this._curve;
        }.bind(this));
    }

    _changeButton() {
        this.setState(function () {
            this._left = (this._left == 100) ? this._left + 200 : 100;
            this._top = (this._top == 100) ? this._top + 200 : 100;
        }.bind(this));
    };

    build() {
        let widgets = new Scaffold({
            appBar: new AppBar({
                title: new Text('AnimatedSize'),
            }),
            body: new Column({
                children: [
                    new SectionTitle('AnimatedSize事例'),
                    new Expanded({
                        child: new Container({
                            alignment: Alignment.center,
                            child: new AnimatedSize({
                                curve: this._curve ? Curves.bounceOut : null,
                                duration: new Duration({ seconds: 1 }),
                                child: new Container({
                                    height: this._top,
                                    width: this._left,
                                    alignment: Alignment.center,
                                    color: Colors.blue,
                                    child: new Text('AnimatedSize'),
                                })
                            }),
                        }),
                    }),


                    new ListTile({
                        title: new Text('开启动画'),
                        trailing: new CupertinoSwitch({
                            value: this._curve,
                            onChanged: this._changeCurve.bind(this),
                        }),
                    }),

                    new RaisedButton({
                        child: new Text('播放'),
                        onPressed: this._changeButton.bind(this),
                    })
                ]
            }),
        });

        return widgets;
    }
}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/A/Appbar.js":
/*!**************************************************!*\
  !*** ./src/app_demo/widget_examples/A/Appbar.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    ListTile,
    AppBar,
    Text,
    Icon,
    Colors,
    IconButton,
    TextStyle,
    ListView,
    Icons,
    Size,
    PreferredSize,
    Container,
    Center,
    RoundedRectangleBorder,
    BorderRadius,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleAppBar(); }
}

class PageExampleAppBar extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('带有底部栏的AppBar',),
                bottom: new PreferredSize({
                    preferredSize: new Size(0.0, 24.0),
                    child: new Container({
                        color: Colors.orange/*[300]*/,
                        child: new Center({ child: new Text("底部栏") }),
                    }),
                }),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('最简单的AppBar') }),
                    new AppBar({ title: new Text('NormalAppBar') }),

                    new ListTile({ title: new Text('标题换色') }),
                    new AppBar({
                        title: new Text('NormalAppBar', {
                            style: new TextStyle({ color: Colors.white }),
                        }),
                    }),

                    new ListTile({ title: new Text('背景换色') }),
                    new AppBar({
                        backgroundColor: Colors.blue,
                        title: new Text('NormalAppBar', {
                            style: new TextStyle({ color: Colors.white }),
                        }),
                    }),

                    new ListTile({ title: new Text('设置leading') }),
                    new AppBar({
                        leading: new IconButton({ icon: new Icon(Icons.add) }),
                        title: new Text('AppBar'),
                    }),

                    new ListTile({ title: new Text('隐藏leading') }),
                    new AppBar({
                        automaticallyImplyLeading: false,
                        title: new Text('AppBar'),
                    }),

                    new ListTile({ title: new Text('设置action') }),
                    new AppBar({
                        actions: [new IconButton({ icon: new Icon(Icons.camera) })],
                        title: new Text('AppBar'),
                    }),

                    new ListTile({ title: new Text('设置多个action') }),
                    new AppBar({
                        actions: [
                            new IconButton({ icon: new Icon(Icons.camera) }),
                            new IconButton({ icon: new Icon(Icons.print) }),
                        ],
                        title: new Text('AppBar'),
                    }),

                    new ListTile({ title: new Text('更改AppBar内容的透明度') }),
                    new AppBar({
                        title: new Text('AppBar'),
                        toolbarOpacity: 0.5,
                    }),

                    new ListTile({ title: new Text('个性化AppBar形状') }),
                    new AppBar({
                        title: new Text('AppBar'),
                        shape: new RoundedRectangleBorder({ borderRadius: BorderRadius.circular(20.0) }),
                    })
                ],
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/A/AspectRatio.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/widget_examples/A/AspectRatio.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    ListTile,
    AppBar,
    Text,
    Colors,
    RaisedButton,
    Column,
    AnimatedSize,
    Duration,
    CupertinoSwitch,
    Alignment,
    Curves,
    AspectRatio,
    Row,
    Expanded,
    Slider,
    Padding,
    EdgeInsets,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleAspectRatioState();
    }
}

/// 比例盒 容纳一个子组件 通过指定宽高比限定子组件的大小
class PageExampleAspectRatioState extends MXJSWidgetState {
    constructor() {
        super();
        this._ratio = 1 / 2;
    }

    _changeRatio(value) {
        this.setState(function () {
            this._ratio = value;
        }.bind(this));
    }

    build() {
        let widgets = new Scaffold({
            appBar: new AppBar({
                title: new Text('AspectRatio'),
            }),
            body: new Column({
                children: [
                    new SectionTitle('比例盒组件'),
                    new Padding({
                        padding: EdgeInsets.all(10),
                    }),
                    new Container({
                        height: 100,
                        width: 300,
                        color: Colors.blueGrey50,
                        alignment: Alignment.center,
                        child: new Row({
                            children: [
                                new Container({
                                    alignment: Alignment.center,
                                    color: Colors.blue,
                                    width: 50,
                                    height: 50,
                                    child: new Text('static'),
                                }),
                                new AspectRatio({
                                    aspectRatio: this._ratio,
                                    child: new Container({
                                        alignment: Alignment.center,
                                        color: Colors.green,
                                    }),
                                }),
                                new Container({
                                    alignment: Alignment.center,
                                    color: Colors.blue,
                                    width: 50,
                                    height: 50,
                                    child: new Text('static'),
                                }),
                            ]
                        }),
                    }),
                    new Padding({
                        padding: EdgeInsets.all(10),
                    }),
                    new Slider({
                        value: this._ratio,
                        onChanged: this._changeRatio.bind(this),
                        min: 0.1,
                        max: 2,
                    }),
                ]
            }),

        });

        return widgets;
    }
}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/B/Baseline.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/B/Baseline.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Column,
    Row,
    Baseline,
    TextBaseline,
    TextStyle,
    Center,
    Container,
    Colors,
    MainAxisAlignment,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleBaseLine(); }
}

class PageExampleBaseLine extends MXJSWidgetState {
    constructor() {
        super();
    }

    _text(text, size) {
        return new Center({
            child: new Text(text, {
                style: new TextStyle({ fontSize: size })
            })
        });
    }

    _baselineWithText(text, size) {
        return new Baseline({
            baseline: 50.0,
            baselineType: TextBaseline.alphabetic,
            child: this._text(text, size),
        });
    }

    _divider() { return new Container({ height: 1.0, color: Colors.grey }); }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('Baseline') }),
            body: new Column({
                children: [
                    this._baselineWithText('AaBbCcDdEeFfGgHhIiJjKkLlMmNn', 20.0),
                    this._divider(),
                    this._baselineWithText('OoPpQqRrSsTtUuVvWwXxYyZz', 24.0),
                    this._divider(),
                    this._baselineWithText('1234567890!@#$%^&*()', 28.0),
                    this._divider(),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            this._baselineWithText('15,0', 15.0),
                            this._baselineWithText('20,0', 20.0),
                            this._baselineWithText('25,0', 25.0),
                            this._baselineWithText('30,0', 30.0),
                            this._baselineWithText('35,0', 35.0),
                        ]
                    }),
                    this._divider(),
                ]
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/B/BottomNavigationBar.js":
/*!***************************************************************!*\
  !*** ./src/app_demo/widget_examples/B/BottomNavigationBar.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    ListTile,
    AppBar,
    Text,
    Colors,
    Column,
    CupertinoSwitch,
    Padding,
    EdgeInsets,
    BottomNavigationBar,
    Icon,
    Icons,
    BottomNavigationBarItem,
    BottomNavigationBarType,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleBottomNavigationBarState();
    }
}

class PageExampleBottomNavigationBarState extends MXJSWidgetState {
    constructor() {
        super();
        this._position = 1;
        this._type = false;
        this._colors = [
            Colors.red,
            Colors.green,
            Colors.blue,
        ]
    }



    _changeBottomBar(value) {
        this.setState(function () {
            this._position = value;
        }.bind(this));
    }

    _changeType() {
        this.setState(function () {
            this._type = !this._type;
        }.bind(this));
    }

    build() {
        let widgets = new Scaffold({
            appBar: new AppBar({
                title: new Text('BottomNavigationBar'),
            }),
            body: new Column({
                children: [
                    new SectionTitle('底部导航栏组件'),
                    new ListTile({
                        title: new Text('更改显示类别'),
                        trailing: new CupertinoSwitch({
                            value: this._type,
                            onChanged: this._changeType.bind(this),
                        }),
                    }),
                    new Padding({
                        padding: EdgeInsets.all(10),
                    }),
                    new BottomNavigationBar({
                        backgroundColor: Colors.grey,
                        onTap: this._changeBottomBar.bind(this),
                        currentIndex: this._position,
                        fixedColor: this._type ? Colors.white : Colors.pink,
                        iconSize: 25,
                        showUnselectedLabels: false,
                        showSelectedLabels: true,
                        type: (this._type)
                            ? BottomNavigationBarType.shifting
                            : BottomNavigationBarType.fixed,
                        items: [
                            new BottomNavigationBarItem({
                                icon: new Icon(Icons.home),
                                title: new Text('Home'),
                                backgroundColor: this._colors[this._position],
                            }),
                            new BottomNavigationBarItem({
                                icon: new Icon(Icons.business),
                                title: new Text('Business'),
                                backgroundColor: this._colors[this._position],
                            }),
                            new BottomNavigationBarItem({
                                icon: new Icon(Icons.school),
                                title: new Text('School'),
                                backgroundColor: this._colors[this._position],
                            }),
                        ]
                    }),
                    new Padding({
                        padding: EdgeInsets.all(10),
                    }),
                ]
            }),

        });

        return widgets;
    }
}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/B/ButtonBar.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/B/ButtonBar.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    ButtonBar,
    MainAxisAlignment,
    MainAxisSize,
    RaisedButton,
    EdgeInsets,
    VerticalDirection,
    ButtonTextTheme,
    ButtonBarLayoutBehavior,
    TextStyle,
    Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleButtonBar(); }
}

class PageExampleButtonBar extends MXJSWidgetState {
    constructor() {
        super();
    }

    _buttonList() {
        return [
            new RaisedButton({
                child: new Text("Button1"),
                onPressed: function() {},
            }),
            new RaisedButton({
                child: new Text("Button2"),
                onPressed: function() {},
            }),
            new RaisedButton({
                child: new Text("Button3"),
                onPressed: function() {},
            }),
        ]
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('ButtonBar') }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('ButtonBar.alignment') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.spaceAround,
                        children: this._buttonList(),
                    }),

                    // 这个不知道怎么演示= =
                    // new ListTile({ title: new Text('ButtonBar.mainAxisSize') }),
                    // new ButtonBar({
                    //     mainAxisSize: MainAxisSize.min,
                    //     children: this._buttonList()
                    // }),

                    new ListTile({ title: new Text('ButtonBar.bottonHeight') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonHeight: 20.0,
                        children: this._buttonList(),
                    }),

                    new ListTile({ title: new Text('ButtonBar.bottonMinWidth') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonMinWidth: 100.0,
                        children: this._buttonList(),
                    }),

                    new ListTile({ title: new Text('ButtonBar.buttonPadding') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonPadding: EdgeInsets.symmetric({ horizontal: 2.0 }),
                        children: this._buttonList(),
                    }),

                    // 这个也不知道怎么演示=。=
                    // new ListTile({ title: new Text('ButtonBar.layoutBehavior') }),
                    // new ButtonBar({
                    //     alignment: MainAxisAlignment.center,
                    //     layoutBehavior: ButtonBarLayoutBehavior.constrained,
                    //     children: this._buttonList(),
                    // }),

                    new ListTile({ title: new Text('ButtonBar.buttonTextTheme') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonTextTheme: ButtonTextTheme.accent,
                        children: this._buttonList(),
                    }),

                    new ListTile({ title: new Text('ButtonBar.overflowButtonSpacing') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonHeight: 20.0,
                        buttonMinWidth: 180.0,
                        overflowButtonSpacing: 20.0,
                        children: this._buttonList(),
                    }),

                    new ListTile({ title: new Text('ButtonBar.overflowButtonDirection') }),
                    new ButtonBar({
                        alignment: MainAxisAlignment.center,
                        buttonHeight: 20.0,
                        buttonMinWidth: 180.0,
                        overflowDirection: VerticalDirection.up,
                        children: this._buttonList(),
                    }),
                ]
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/Card.js":
/*!************************************************!*\
  !*** ./src/app_demo/widget_examples/C/Card.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    Card,
    Column,
    Icon,
    Icons,
    ButtonBar,
    FlatButton,
    MainAxisSize,
    EdgeInsets,
    InkWell,
    Container,
    Center,
    Image,
    Colors,
    RoundedRectangleBorder,
    BorderRadius,
    Clip,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCard(); }
}

class PageExampleCard extends MXJSWidgetState {
    constructor() {
        super();
    }

    _cardContent(title, description, showButtonBar = true) {
        return new Column({
            mainAxisSize: MainAxisSize.min,
            children: [
                new ListTile({
                    leading: new Icon(Icons.album),
                    title: new Text(title),
                    subtitle: new Text(description),
                }),
                showButtonBar ? new ButtonBar({
                    children: [
                        new FlatButton({
                            child: new Text('分享'),
                            onPressed: function() {},
                        }),
                        new FlatButton({ 
                            child: new Text('关闭'),
                            onPressed: function() {},
                        }),
                    ],
                }) : new Container(),
            ],
        });
    }

    _cardTappable() {
        return new Card({
            child: new InkWell({
                onTap: function() {},
                child: new Container({
                    height: 120.0,
                    widget: 350.0,
                    child: new Center({ child: new Text('可点击的卡片') }),
                }),
            }),
        });
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('Card') }),
            body: new ListView({
                padding: EdgeInsets.all(12.5),
                children: [
                    new ListTile({ title: new Text('使用ListTile制作的、带有按钮的卡片') }),
                    new Card({ child: this._cardContent('卡片', '这里是描述') }),
                    new ListTile({ title: new Text('使用InkWell制作的、可点击的卡片') }),
                    this._cardTappable(),
                    new ListTile({ title: new Text('带有颜色、不同高度、不同阴影的卡片') }),
                    new Card({
                        child: this._cardContent('彩色卡片和彩色阴影', 'evevation设为12.0 阴影面积变大了'),
                        color: Colors.blue/*[100]*/,
                        shadowColor: Colors.purple/*[800]*/,
                        elevation: 15.0,
                    }),
                    new ListTile({ title: new Text('改变margin') }),
                    new Card({
                        margin: EdgeInsets.all(40.0),
                        child: this._cardContent('margin:40.0', '让卡片和其他元素保持距离', false),
                    }),
                    new ListTile({ title: new Text('个性化Card形状并剪切子元素') }),
                    new Card({
                        shape: new RoundedRectangleBorder({ borderRadius: BorderRadius.circular(25.0) }),
                        child: Image.asset( 'people/ali_landscape.png', {
                            mxPackage: 'flutter_gallery_assets',
                            fit: BoxFit.cover,
                        }),
                        clipBehavior: Clip.antiAlias,
                    })
                ],
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/Chip.js":
/*!************************************************!*\
  !*** ./src/app_demo/widget_examples/C/Chip.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    Chip,
    Icon,
    Icons,
    EdgeInsets,
    Colors,
    RoundedRectangleBorder,
    BorderRadius,
    Row,
    CircleAvatar,
    TextStyle,
    MainAxisAlignment,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleChip(); }
}

class PageExampleChip extends MXJSWidgetState {
    constructor() {
        super();
        this.selected = false;
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('Chip') }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('Chip, 带有图标的Chip和自定义label样式的Chip') }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                            new Chip({ label: new Text('Chip') }),
                            new Chip({
                                avatar: new CircleAvatar({ child: new Text('C') }),
                                label: new Text('Chip'),
                            }),
                            new Chip({
                                label: new Text('Chip'),
                                labelStyle: new TextStyle({ color: Colors.blue }),
                                labelPadding: EdgeInsets.symmetric({ horizontal: 30.0 }),
                            }),
                        ]
                    }),
                    new ListTile({ title: new Text('带有删除按钮的Chip, 自定义多种样式的Chip') }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                            new Chip({
                                label: new Text('Chip'),
                                deleteIcon: new Icon(Icons.delete),
                                deleteIconColor: Colors.red/*[400]*/,
                                onDeleted: function () { },
                                deleteButtonTooltipMessage: '删除',
                            }),
                            new Chip({
                                label: new Text('Chip'),
                                shape: new RoundedRectangleBorder({
                                    borderRadius: BorderRadius.circular(5.0),
                                }),
                                backgroundColor: Colors.blue/*[200]*/,
                            }),
                            new Chip({
                                label: new Text('Chip'),
                                elevation: 5.0,
                                shadowColor: Colors.red,
                            })
                        ]
                    }),
                ],
            })
        })
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/Column.js":
/*!**************************************************!*\
  !*** ./src/app_demo/widget_examples/C/Column.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    DefaultTabController,
    Tab,
    TabBar,
    TabBarView,
    Scaffold,
    AppBar,
    Text,
    ListView,
    Column,
    Container,
    Colors,
    ListTile,
    Center,
    MainAxisAlignment,
    MainAxisSize,
    CrossAxisAlignment,
    VerticalDirection,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleColumn(); }
}

class PageExampleColumn extends MXJSWidgetState {
    constructor() {
        super();
        this.selected = false;
    }

    _equalContainersList() {
        return [
            new Container({
                height: 30,
                width: 100,
                color: Colors.red/*[300]*/,
                child: new Center({ child: new Text("1") }),
            }),
            new Container({
                height: 30,
                width: 100,
                color: Colors.blue/*[300]*/,
                child: new Center({ child: new Text("2") }),
            }),
            new Container({
                height: 30,
                width: 100,
                color: Colors.green/*[300]*/,
                child: new Center({ child: new Text("3") }),
            }),
        ];
    }

    _unequalContainersList() {
        return [
            new Container({
                height: 30,
                width: 100,
                color: Colors.red/*[300]*/,
                child: new Center({ child: new Text("1") }),
            }),
            new Container({
                height: 30,
                width: 90,
                color: Colors.blue/*[300]*/,
                child: new Center({ child: new Text("2") }),
            }),
            new Container({
                height: 30,
                width: 80,
                color: Colors.green/*[300]*/,
                child: new Center({ child: new Text("3") }),
            }),
        ];
    }

    _mainAxisAlignmentView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text("MainAxisAlignment.start") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisAlignment.end") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisAlignment.center") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisAlignment.spaceAround") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisAlignment.spaceBetween") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisAlignment.spaceEvenly") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: this._equalContainersList(),
                    }),
                }),
            ],
        });
    }

    _crossAxisAlignmentView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text("CrossAxisAlignment.start") }),
                new Container({
                    height: 90.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: this._unequalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("CrossAxisAlignment.end") }),
                new Container({
                    height: 90.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: this._unequalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("CrossAxisAlignment.center") }),
                new Container({
                    height: 90.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: this._unequalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("CrossAxisAlignment.stretch") }),
                new Container({
                    height: 90.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: this._unequalContainersList(),
                    }),
                }),
            ],
        });
    }

    _mainAxisSizeView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text("MainAxisSize.min") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisSize: MainAxisSize.min,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("MainAxisSize.max") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        mainAxisSize: MainAxisSize.max,
                        children: this._equalContainersList(),
                    }),
                }),
            ]
        });
    }

    _verticalDirectionView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text("VerticalDirection.down") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        verticalDirection: VerticalDirection.down,
                        children: this._equalContainersList(),
                    }),
                }),
                new ListTile({ title: new Text("VerticalDirection.up") }),
                new Container({
                    height: 240.0,
                    color: Colors.grey/*[300]*/,
                    child: new Column({
                        verticalDirection: VerticalDirection.up,
                        children: this._equalContainersList(),
                    }),
                }),
            ]
        });
    }

    build(context) {
        let widget = new DefaultTabController({
            length: 4,
            child: new Scaffold({
                appBar: new AppBar({
                    title: new Text('Column'),
                    bottom: new TabBar({
                        isScrollable: true,
                        tabs: [
                            new Tab({ text: 'MainAxisAlignment' }),
                            new Tab({ text: 'CrossAxisAlignment' }),
                            new Tab({ text: 'MainAxisSize' }),
                            new Tab({ text: 'VerticalDirection' }),
                        ]
                    }),
                }),
                body: new TabBarView({
                    children: [
                        this._mainAxisAlignmentView(),
                        this._crossAxisAlignmentView(),
                        this._mainAxisSizeView(),
                        this._verticalDirectionView(),
                    ],
                }),
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/Container.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/C/Container.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    DefaultTabController,
    Tab,
    TabBar,
    TabBarView,
    Scaffold,
    AppBar,
    Text,
    ListView,
    Alignment,
    Container,
    Colors,
    ListTile,
    EdgeInsets,
    BoxDecoration,
    BoxShape,
    BorderRadius,
    Radius,
    Border,
    BoxShadow,
    Offset,
    Matrix4,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleContainer(); }
}

class PageExampleContainer extends MXJSWidgetState {
    constructor() {
        super();
        this.selected = false;
    }

    _alignmentView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text('Alignment.center') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    alignment: Alignment.center,
                    child: new Text('Container'),
                }),
                new ListTile({ title: new Text('Alignment.topLeft') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    alignment: Alignment.topLeft,
                    child: new Text('Container'),
                }),
                new ListTile({ title: new Text('Alignment(0.2, -0.7)') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    alignment: new Alignment(0.2, -0.7),
                    child: new Text('Container'),
                }),
            ],
        });
    }

    _paddingAndMargin() {
        return new ListView({
            children: [
                new ListTile({ title: new Text('Red Container: (padding: 50.0, margin: 20.0)') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    child: new Container({
                        color: Colors.red/*[200]*/,
                        padding: EdgeInsets.all(50.0),
                        margin: EdgeInsets.all(20.0),
                        child: new Container({ color: Colors.yellow/*[200]*/ }),
                    }),
                }),
                new ListTile({ title: new Text('margin: EdgeInsets.fromLTRB(10, 20, 30, 40)') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    child: new Container({
                        color: Colors.green/*[200]*/,
                        margin: EdgeInsets.fromLTRB(10.0, 20.0, 30.0, 40.0),
                    }),
                }),
                new ListTile({ title: new Text('margin: EdgeInsets.symmetric({vertical: 10, horizontal: 40})') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    child: new Container({
                        color: Colors.orange/*[200]*/,
                        margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 40.0 }),
                    }),
                }),
                new ListTile({ title: new Text('margin: EdgeInsets.only({bottom: 20})') }),
                new Container({
                    height: 240.0,
                    color: Colors.blue/*[200]*/,
                    child: new Container({
                        color: Colors.purple/*[200]*/,
                        margin: EdgeInsets.only({ bottom: 20.0 }),
                    }),
                }),
            ],
        });
    }

    _decorationView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text('decoration.shape') }),
                new Container({
                    child: new Text('Container'),
                    decoration: new BoxDecoration({
                        shape: BoxShape.circle,
                        color: Colors.red/*[200]*/,
                    }),
                    alignment: Alignment.center,
                    margin: EdgeInsets.all(10.0),
                    height: 80.0,
                }),
                new ListTile({ title: new Text('decoration.borderRadius') }),
                new Container({
                    child: new Text('Container'),
                    decoration: new BoxDecoration({
                        borderRadius: BorderRadius.all(Radius.circular(16.0)),
                        color: Colors.green/*[200]*/,
                    }),
                    alignment: Alignment.center,
                    margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 80.0 }),
                    height: 80.0,
                }),
                new ListTile({ title: new Text('decoration.border') }),
                new Container({
                    child: new Text('Container'),
                    decoration: new BoxDecoration({
                        borderRadius: BorderRadius.all(Radius.circular(16.0)),
                        border: Border.all({
                            color: Colors.orange/*[600]*/,
                            width: 2.0,
                        }),
                    }),
                    alignment: Alignment.center,
                    margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 120.0 }),
                    height: 40.0,
                }),
                new ListTile({ title: new Text('decoration.boxShadow') }),
                new Container({
                    child: new Text('Container'),
                    decoration: new BoxDecoration({
                        shape: BoxShape.circle,
                        color: Colors.blue/*[300]*/,
                        boxShadow: [
                            new BoxShadow({
                                color: Colors.black54,
                                offset: new Offset(5.0, 5.0),
                                blurRadius: 5.0,
                            }),
                        ],
                    }),
                    alignment: Alignment.center,
                    margin: EdgeInsets.all(10.0),
                    height: 80.0,
                }),
            ],
        });
    }

    _transformView() {
        return new ListView({
            children: [
                new ListTile({ title: new Text('Matrix4.rotationX(0.25)') }),
                new Container({
                    color: Colors.blue/*[200]*/,
                    child: new Text('Container'),
                    alignment: Alignment.center,
                    margin: EdgeInsets.symmetric({ horizontal: 120.0 }),
                    height: 60.0,
                    transform: Matrix4.rotationZ(0.25),
                }),
                new Container({ height: 120 }),
                new ListTile({ title: new Text('Matrix4.skewY(0.25)') }),
                new Container({
                    color: Colors.blue/*[200]*/,
                    child: new Text('Container'),
                    alignment: Alignment.center,
                    margin: EdgeInsets.symmetric({ horizontal: 120.0 }),
                    height: 60.0,
                    transform: Matrix4.skewY(0.25),
                }),
            ]
        });
    }

    build(context) {
        let widgets = new DefaultTabController({
            length: 3,
            child: new Scaffold({
                appBar: new AppBar({
                    title: new Text("Container"),
                    bottom: new TabBar({
                        scrollable: true,
                        tabs: [
                            new Tab({ text: "alignment" }),
                            new Tab({ text: "padding & margin" }),
                            new Tab({ text: "Decoration" }),
                            // new Tab({ text: "transform" }),
                        ],
                    }),
                }),
                body: new TabBarView({
                    children: [
                        this._alignmentView(),
                        this._paddingAndMargin(),
                        this._decorationView(),
                        // this._transformView(),
                    ],
                }),
            }),
        });
        return widgets;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoActivityIndicator.js":
/*!**********************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoActivityIndicator.js ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Column,
    Row,
    Alignment,
    Container,
    CupertinoActivityIndicator,
    CupertinoSwitch,
    Expanded,
    EdgeInsets,
    Colors,
    BoxDecoration,
    Border,
    BorderRadius,
    Radius,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoActivityIndicator(); }
}

class PageExampleCupertinoActivityIndicator extends MXJSWidgetState {
    constructor() {
        super();
        this.settingTable = {
            "showAnimation": true,
            "bigIcon": false,
        };
    }

    _singleOption(selectedText, unselectedText, varName) {
        return new Container({
            padding: EdgeInsets.all(12.0),
            child: new Row({
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                    new Text(this.settingTable[varName] ? selectedText : unselectedText),
                    new CupertinoSwitch({
                        value: this.settingTable[varName],
                        activeColor: Colors.orange,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.settingTable[varName] = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                ],
            }),
        });
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('CupertinoActivityIndicator') }),
            body: new Column({
                children: [
                    new Container({
                        margin: EdgeInsets.all(12.0),
                        decoration: new BoxDecoration({
                            borderRadius: BorderRadius.all(Radius.circular(4.0)),
                            border: Border.all({
                                color: Colors.black,
                                width: 2.0,
                            }),
                        }),
                        height: 240,
                        alignment: Alignment.center,
                        child: new CupertinoActivityIndicator({
                            animating: this.settingTable["showAnimation"],
                            radius: this.settingTable["bigIcon"] ? 32.0 : 16.0,
                        })
                    }),
                    new Expanded({ child: new Container() }),
                    this._singleOption("显示动画：是", "显示动画：否", "showAnimation"),
                    this._singleOption("大图标：是", "大图标：否", "bigIcon"),
                ]
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoAlertDialog.js":
/*!****************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoAlertDialog.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    CupertinoButton,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoAlertDialog(); }
}

class PageExampleCupertinoAlertDialog extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('CupertinoAlertDialog') }),
            // body: new ListView({
            //     children: [
            //         new CupertinoButton({
            //             child: new Text('Dialog'),
            //             // Harold: 似乎没有showDialog的方法
            //             // onPressed: ,
            //         })
            //     ]
            // }) ,
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoButton.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoButton.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    CupertinoButton,
    Row,
    MainAxisAlignment,
    Colors,
    BorderRadius,
    Radius,
    EdgeInsets,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoButton(); }
}

class PageExampleCupertinoButton extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('CupertinoButton') }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("CupertinoTappableButton") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoButton({
                                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                                color: Colors.orange/*[300]*/,
                                disabledColor: Colors.grey/*[300]*/,
                                child: new Text('Untappable Button'),
                            }),
                            new CupertinoButton({
                                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                                color: Colors.orange/*[300]*/,
                                child: new Text('Tappable Button'),
                                onPressed: function() {},
                            }),
                        ],
                    }),
                    new ListTile({ title: new Text("CupertinoButton.borderRadius") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoButton({
                                color: Colors.orange/*[300]*/,
                                child: new Text('Button'),
                                onPressed: function() {},
                            }),
                            new CupertinoButton({
                                color: Colors.orange/*[300]*/,
                                borderRadius: BorderRadius.all(Radius.circular(24.0)),
                                child: new Text('Button'),
                                onPressed: function() {},
                            }),
                        ],
                    }),
                    new ListTile({ title: new Text("padding and opactiry") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoButton({
                                color: Colors.orange/*[300]*/,
                                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                                child: new Text('Button'),
                                onPressed: function() {},
                            }),
                            new CupertinoButton({
                                color: Colors.orange/*[300]*/,
                                pressedOpacity: 0.75,
                                child: new Text('Button'),
                                onPressed: function() {},
                            }),
                        ],
                    }),
                ],
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoNavigationBar.js":
/*!******************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoNavigationBar.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    ListView,
    ListTile,
    Text,
    CupertinoPageScaffold,
    CupertinoNavigationBar,
    CupertinoButton,
    EdgeInsets,
    Border,
    Colors,
    EdgeInsetsDirectional,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoNavigationBar(); }
}

class PageExampleCupertinoNavigationBar extends MXJSWidgetState {
    constructor() {
        super();
    }

    _normalCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            middle: new Text("CupertinoNavigationBar"),
            transitionBetweenRoutes: false,
        });
    }

    _changeLeadingCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            previousPageTitle: "返回",
            middle: new Text("CupertinoNavigationBar"),
            transitionBetweenRoutes: false,
        });
    }

    _trailingCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            middle: new Text("CupertinoNavigationBar"),
            trailing: new CupertinoButton({
                padding: EdgeInsets.all(0.0),
                child: new Text('设置'),
                onPressed: function () { },
            }),
            transitionBetweenRoutes: false,
        });
    }

    _borderCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            middle: new Text("CupertinoNavigationBar"),
            border: Border.all({
                color: Colors.orange/*[600]*/,
                width: 2.0,
            }),
            transitionBetweenRoutes: false,
        });
    }

    _backgroundCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            middle: new Text("CupertinoNavigationBar"),
            color: Colors.yellow/*[200]*/,
            transitionBetweenRoutes: false,
        });
    }

    _paddingCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            middle: new Text("CupertinoNavigationBar"),
            padding: EdgeInsetsDirectional.only({ bottom: 20.0 }),
            transitionBetweenRoutes: false,
        });
    }

    _actionsColorCupertinoNavigationBar() {
        return new CupertinoNavigationBar({
            previousPageTitle: "返回",
            middle: new Text("CupertinoNavigationBar"),
            trailing: new CupertinoButton({
                padding: EdgeInsets.all(0.0),
                child: new Text('设置'),
                onPressed: function () { },
            }),
            actionsForegroundColor: Colors.blue,
            transitionBetweenRoutes: false,
        });
    }

    build(context) {
        let widget = new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({
                middle: new Text("CupertinoNavigationBar"),
            }),
            child: new Scaffold({
                backgroundColor: Colors.green/*[100]*/,
                body: new ListView({
                    children: [
                        new ListTile({
                            title: new Text("最简单的CupertinoNavigationBar"),
                        }),
                        this._normalCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("leading带有说明的CupertinoNavigationBar"),
                        }),
                        this._changeLeadingCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("带有右侧按钮的CupertinoNavigationBar"),
                        }),
                        this._trailingCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("带有边框的CupertinoNavigationBar"),
                        }),
                        this._borderCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("带有背景色的CupertinoNavigationBar"),
                        }),
                        this._backgroundCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("带有padding的CupertinoNavigationBar"),
                        }),
                        this._paddingCupertinoNavigationBar(),
                        new ListTile({
                            title: new Text("修改按钮颜色的的CupertinoNavigationBar"),
                        }),
                        this._actionsColorCupertinoNavigationBar(),
                    ],
                }),
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoPageScaffold.js":
/*!*****************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoPageScaffold.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    CupertinoPageScaffold,
    CupertinoNavigationBar,
    Scaffold,
    Text,
    ListView,
    ListTile,
    Color,
    Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoPageScaffole(); }
}

class PageExampleCupertinoPageScaffole extends MXJSWidgetState {
    constructor() {
        super();
        this._backgroundColor = Colors.white;
    }

    _changeColorListTile(text, color) {
        return new ListTile({
            title: new Text(text),
            onTap: function () {
                this.setState(function () {
                    this._backgroundColor = color;
                }.bind(this))
            }.bind(this),
        });
    }

    build(context) {
        let widget = new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({
                middle: new Text("CupertinoPageScaffold"),
            }),
            child: new Scaffold({
                backgroundColor: new Color(0x00000000),
                body: new ListView({
                    children: [
                        this._changeColorListTile("背景颜色：白", Colors.white),
                        this._changeColorListTile("背景颜色：黄", Colors.yellow/*[200]*/),
                        this._changeColorListTile("背景颜色：绿", Colors.green/*[200]*/),
                        this._changeColorListTile("背景颜色：蓝", Colors.blue/*[200]*/),
                        this._changeColorListTile("背景颜色：粉", Colors.pink/*[200]*/),
                    ]
                })
            }),
            backgroundColor: this._backgroundColor,
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoSlider.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoSlider.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    CupertinoSlider,
    TextStyle,
    Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoSlider(); }
}

class PageExampleCupertinoSlider extends MXJSWidgetState {
    constructor() {
        super();
        this.currentValue = 50.0;
        this.fontSize = 16.0;
        this.coloredValue = 50.0
        this.fontSizeMap = {
            12: "小",
            16: "中",
            20: "大",
            24: "特大",
        }
    }

    build(context) {
        let currentStyle = new TextStyle({ fontSize: this.fontSize });
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('CupertinoSlider') }),
            body: new ListView({
                children: [
                    new ListTile({
                        title: new Text("连续滑块, 当前值为: " + this.currentValue.toFixed(1), {
                            style: currentStyle
                        }),
                    }),
                    new CupertinoSlider({
                        min: 0.0,
                        max: 100.0,
                        value: this.currentValue,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.currentValue = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                    new ListTile({
                        title: new Text(
                            "离散滑块, 字体大小: " + this.fontSizeMap[this.fontSize], {
                            style: currentStyle
                        }),
                    }),
                    new CupertinoSlider({
                        min: 12.0,
                        max: 24.0,
                        divisions: 3,
                        value: this.fontSize,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.fontSize = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                    new ListTile({ title: new Text("带颜色滑块", { style: currentStyle }) }),
                    new CupertinoSlider({
                        min: 0.0,
                        max: 100.0,
                        value: this.coloredValue,
                        activeColor: Colors.blue/*[300]*/,
                        thumbColor: Colors.blue/*[800]*/,
                        onChanged: function (value) {
                            this.setState(function () {
                                this.coloredValue = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                ],
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoSwitch.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoSwitch.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    Row,
    MainAxisAlignment,
    CupertinoSwitch,
    Colors,
    DragStartBehavior,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() { super('ExampleWidget'); }

    createState() { return new PageExampleCupertinoSwitch(); }
}

class PageExampleCupertinoSwitch extends MXJSWidgetState {
    constructor() {
        super();
        this.choose = [false, false, false];
    }

    _onChanged(index) {
        return function (value) {
            this.setState(function () {
                this.choose[index] = value;
            }.bind(this))
        }.bind(this);
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('CupertinoSwitch') }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("CupertionSwitch基本使用") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoSwitch({
                                activeColor: Colors.green,
                                value: this.choose[0],
                                onChanged: this._onChanged(0),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.blue,
                                value: this.choose[0],
                                onChanged: this._onChanged(0),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.red,
                                value: this.choose[0],
                                onChanged: this._onChanged(0),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.yellow,
                                value: this.choose[0],
                                onChanged: this._onChanged(0),
                            }),
                        ],
                    }),
                    new ListTile({ title: new Text("CupertionSwitch自定义未选中颜色") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoSwitch({
                                activeColor: Colors.green,
                                trackColor: Colors.green/*[100]*/,
                                value: this.choose[1],
                                onChanged: this._onChanged(1),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.blue,
                                trackColor: Colors.blue/*[100]*/,
                                value: this.choose[1],
                                onChanged: this._onChanged(1),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.red,
                                trackColor: Colors.red/*[100]*/,
                                value: this.choose[1],
                                onChanged: this._onChanged(1),
                            }),
                            new CupertinoSwitch({
                                activeColor: Colors.yellow,
                                trackColor: Colors.yellow/*[100]*/,
                                value: this.choose[1],
                                onChanged: this._onChanged(1),
                            }),
                        ],
                    }),
                    new ListTile({ title: new Text("CupertionSwitch拖动方式") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new CupertinoSwitch({
                                value: this.choose[2],
                                onChanged: this._onChanged(2),
                            }),
                            new CupertinoSwitch({
                                value: this.choose[2],
                                onChanged: this._onChanged(2),
                                dragStartBehavior: DragStartBehavior.start,
                            }),
                        ],
                    }),
                ],
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoTabBar.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoTabBar.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSStatelessWidget,
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Colors,
    CupertinoTabBar,
    BottomNavigationBarItem,
    Icon,
    Icons,
    Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class HomePage extends MXJSStatelessWidget {
    constructor() {
        super("HomePage");
    }
    build(context) {
        return new Center({
            child: new Text("HomePage"),
        })
    }
}


class IdeaPage extends MXJSStatelessWidget {
    constructor() {
        super("IdeaPage");
    }
    build(context) {
        return new Center({
            child: new Text("IdeaPage"),
        })
    }
}


class MessagePage extends MXJSStatelessWidget {
    constructor() {
        super("MessagePage");
    }
    build(context) {
        return new Center({
            child: new Text("MessagePage"),
        })
    }
}


class MyPage extends MXJSStatelessWidget {
    constructor() {
        super("MyPage");
    }
    build(context) {
        return new Center({
            child: new Text("MyPage"),
        })
    }
}
// IOS风格的TabBar
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super("ExampleWidget");
    }
    createState() {
        return new PageExampleCupertinoTabBar();
    }
}

class PageExampleCupertinoTabBar extends MXJSWidgetState {
    constructor() {
        super();
        this._position = 1;
        this._pageList = [];
        this._currentPage = null;
    }

    _changeIndex(value) {
        this.setState(function () {
            this._position = value;
        }.bind(this));
    }

    build() {
        this._pageList = [
            new HomePage(),
            new IdeaPage(),
            new MessagePage(),
            new MyPage()
        ]

        this._currentPage = this._pageList[this._position];

        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('CupertinoTabBar'),
            }),
            body: new Center({
                child: this._currentPage,
            }),
            bottomNavigationBar: new CupertinoTabBar({
                items: [
                    new BottomNavigationBarItem({
                        icon: new Icon(Icons.assignment),
                        title: new Text("首页")
                    }),
                    new BottomNavigationBarItem({
                        icon: new Icon(Icons.all_inclusive),
                        title: new Text("想法")
                    }),
                    new BottomNavigationBarItem({
                        icon: new Icon(Icons.add_alert),
                        title: new Text("通知")
                    }),
                    new BottomNavigationBarItem({
                        icon: new Icon(Icons.perm_identity),
                        title: new Text("我的")
                    }),
                ],
                onTap: this._changeIndex.bind(this),
                currentIndex: this._position,
                backgroundColor: Colors.orange,
                activeColor: Colors.red,
                inactiveColor: Colors.white,
            }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/C/CupertinoTabScaffold.js":
/*!****************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CupertinoTabScaffold.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  CupertinoTabScaffold,
  BottomNavigationBarItem,
  CupertinoTabBar,
  CupertinoPageScaffold,
  CupertinoNavigationBar,
  Text,
  Icon,
  Icons,
  Scaffold,
  Colors,
  Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoTabScaffold();
  }
}

class PageExampleCupertinoTabScaffold extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new CupertinoTabScaffold({
      tabBar: new CupertinoTabBar({
        items: [
          new BottomNavigationBarItem({
            icon: new Icon(Icons.home),
            title: new Text('主页'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.favorite),
            title: new Text('关注'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.book),
            title: new Text('我的'),
          }),
        ],
      }),
      tabBuilder: function (context, index) {
        return [
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('主页') }),
            child: new Scaffold({
              backgroundColor: Colors.blue /*[200]*/,
              body: new Center({ child: new Text('主页') }),
            }),
          }),
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('关注') }),
            child: new Scaffold({
              backgroundColor: Colors.red /*[200]*/,
              body: new Center({ child: new Text('关注') }),
            }),
          }),
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('我的') }),
            child: new Scaffold({
              backgroundColor: Colors.green /*[200]*/,
              body: new Center({ child: new Text('我的') }),
            }),
          }),
        ];
      }.bind(this),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/C/CustomMultiChildLayout.js":
/*!******************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CustomMultiChildLayout.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleCustomMultiChildLayout();
    }
}
class PageExampleCustomMultiChildLayout extends MXJSWidgetState {
    constructor() {
        super();
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('CustomMultiChildLayout')
            }),
            body: new Center({
                child: new Text("MXFlutter中delegate未实现！")
            })
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget
}

/***/ }),

/***/ "./src/app_demo/widget_examples/C/CustomScrollView.js":
/*!************************************************************!*\
  !*** ./src/app_demo/widget_examples/C/CustomScrollView.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    CustomScrollView,
    Container,
    SliverList,
    SliverGrid,
    SliverGridDelegateWithMaxCrossAxisExtent,
    Alignment,
    SliverChildBuilderDelegate,
    Color,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 通用的滑动结构
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleCustomScrollView();
    }
}

class PageExampleCustomScrollView extends MXJSWidgetState {
    constructor() {
        super();
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('CustomScrollView'),
            }),
            body: new CustomScrollView({
                slivers: [
                    new SliverGrid({
                        gridDelegate: new SliverGridDelegateWithMaxCrossAxisExtent({
                            maxCrossAxisExtent: 120.0,
                            childAspectRatio: 2.0,
                        }),
                        delegate: new SliverChildBuilderDelegate(
                            function (context, index) {
                                return new Container({
                                    color: Color.fromRGBO(index * 8, 63, 255 - index * 8, 1.0),
                                    alignment: Alignment.center,
                                    child: new Text(index.toString()),
                                })
                            },
                            {
                                childCount: 8,
                            }
                        )
                    }),
                    new SliverList({
                        delegate: new SliverChildBuilderDelegate(
                            function (context, index) {
                                index += 9;
                                return new Container({
                                    height: 80,
                                    color: Color.fromRGBO(index * 8, 63, 255 - index * 8, 1.0),
                                    alignment: Alignment.center,
                                    child: new Text(index.toString()),
                                });
                            },
                            { childCount: 20 }
                        ),
                    })
                ]
            }),
        });
        return widget;
    }
}
module.exports = {
    ExampleWidget
}

/***/ }),

/***/ "./src/app_demo/widget_examples/D/DecoratedBox.js":
/*!********************************************************!*\
  !*** ./src/app_demo/widget_examples/D/DecoratedBox.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    Colors,
    ListView,
    DecoratedBox,
    BoxDecoration,
    BoxShape,
    BoxShadow,
    Radius,
    BorderRadius,
    ListTile,
    EdgeInsets,
    Offset,
    Border,
    TextStyle,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 装饰类组件
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleDecoratedBox();
    }
}

class PageExampleDecoratedBox extends MXJSWidgetState {
    constructor() {
        super();
    }
    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('DecoratedBox'),
            }),
            body: new ListView({
                children: [
                    new ListTile({
                        title: new Text('基本类型DecoratedBox'),
                    }),
                    new Container({
                        child: new DecoratedBox({
                            decoration: new BoxDecoration({
                                shape: BoxShape.circle,
                                color: Colors.blue,
                            }),
                            child: new Container({
                                width: 100,
                                height: 100,
                            }),
                        }),
                        alignment: Alignment.center,
                        margin: EdgeInsets.all(10),
                    }),
                    new ListTile({
                        title: new Text('圆角矩形DecoratedBox'),
                    }),
                    new Container({
                        child: new DecoratedBox({
                            decoration: new BoxDecoration({
                                borderRadius: BorderRadius.all(Radius.circular(16.0)),
                                color: Colors.green,
                            }),
                            child: new Text('DecoratedBox',{style: new TextStyle({fontSize: 30})}),
                        }),
                        alignment: Alignment.center,
                        margin: EdgeInsets.all(10),
                    }),
                    new ListTile({
                        title: new Text('带有边框的DecoratedBox'),
                    }),
                    new Container({
                        child: new DecoratedBox({
                            decoration: new BoxDecoration({
                                color: Colors.green,
                                border: Border.all({
                                    color: Colors.red,
                                    width: 2.0,
                                }),
                            }),
                            child: new Text('DecoratedBox',{style: new TextStyle({fontSize: 30})}),
                        }),
                        alignment: Alignment.center,
                        margin: EdgeInsets.all(10),
                    }),
                    new ListTile({
                        title: new Text('带有阴影的DecoratedBox'),
                    }),
                    new Container({
                        child: new DecoratedBox({
                            decoration: new BoxDecoration({
                                shape: BoxShape.circle,
                                color: Colors.blue,
                                boxShadow: [
                                    new BoxShadow({
                                        color: Colors.black54,
                                        offset: new Offset(5.0, 5.0),
                                        blurRadius: 5.0,
                                    }),
                                ],
                            }),
                            child: new Container({
                                width: 100,
                                height: 100,
                            }),
                        }),
                        alignment: Alignment.center,
                        margin: EdgeInsets.all(10),
                    }),
                ]
            }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/D/DecoratedBoxTransition.js":
/*!******************************************************************!*\
  !*** ./src/app_demo/widget_examples/D/DecoratedBoxTransition.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    Colors,
    BoxDecoration,
    Radius,
    BorderRadius,
    Expanded,
    Column,
    AnimationController,
    DecoratedBoxTransition,
    DecorationTween,
    Duration,
    BoxShadow,
    RaisedButton,
    Animation,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleDecoratedBoxTransition();
    }
}

class PageExampleDecoratedBoxTransition extends MXJSWidgetState {
    constructor() {
        super();
        this._controller = new AnimationController({
            duration: new Duration({ seconds: 1 }),
        });
        this._shadow = true;
        this._tween = new DecorationTween({
            begin: new BoxDecoration({
                color: Colors.grey,
                borderRadius: BorderRadius.all(Radius.circular(0)),
                boxShadow:
                    [
                        new BoxShadow({
                            color: Colors.black,
                            blurRadius: 3,
                            spreadRadius: 3,
                        })
                    ],
            }),
            end: new BoxDecoration({
                color: Colors.orange,
                borderRadius: BorderRadius.all(Radius.circular(30)),
                boxShadow:
                    [
                        new BoxShadow({
                            color: Colors.yellow,
                            blurRadius: 3,
                            spreadRadius: 1,
                        })
                    ],

            })
        });
        this._animation = new Animation({
            controller: this._controller,
            tween: this._tween,
        });
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('DecoratedBoxTransition'),
            }),
            body: new Column({
                children: [
                    new Expanded({
                        child: new Container({
                            alignment: Alignment.center,
                            child: new DecoratedBoxTransition({
                                decoration: this._animation,
                                child: new Container({
                                    height: 200,
                                    width: 200,
                                }),
                            }),
                        }),
                    }),
                    new RaisedButton({
                        child: new Text('播放'),
                        onPressed: function () {
                            this._controller.forward();
                        }.bind(this),
                    }),
                ]
            }),
        });
        return widget;
    }

}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/D/DefaultTextStyle.js":
/*!************************************************************!*\
  !*** ./src/app_demo/widget_examples/D/DefaultTextStyle.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    TextStyle,
    Container,
    Alignment,
    Colors,
    ListView,
    ListTile,
    DefaultTextStyle,
    TextDecoration,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleDefaultTextStyle();
    }
}

class PageExampleDefaultTextStyle extends MXJSWidgetState {
    constructor() {
        super();
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('DefaultTextStyle'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('默认文本'), }),
                    new Container({
                        alignment: Alignment.center,
                        child: new DefaultTextStyle({
                            style: new TextStyle({
                                color: Colors.black,
                            }),
                            child: new Text('Text'),
                        }),
                    }),

                    new ListTile({ title: new Text('自定义style文本'), }),
                    new Container({
                        alignment: Alignment.center,
                        child: new DefaultTextStyle({
                            style: new TextStyle({
                                color: Colors.red,
                                fontSize: 20,
                                decoration: TextDecoration.underline,
                            }),
                            child: new Text('Text'),
                        }),
                    }),

                    new ListTile({ title: new Text('softWrap: false'), }),
                    new Container({
                        width: 20,
                        alignment: Alignment.center,
                        child: new DefaultTextStyle({
                            style: new TextStyle({
                                fontSize: 18,
                                color: Colors.orange,
                            }),
                            softWrap: false,
                            child: new Text('Very Very Very Very Very Very Very Very Long Text'),
                        }),
                    }),

                    new ListTile({ title: new Text('softWrap: true'), }),
                    new Container({
                        width: 80,
                        alignment: Alignment.center,
                        child: new DefaultTextStyle({
                            style: new TextStyle({
                                fontSize: 18,
                                color: Colors.orange,
                            }),
                            softWrap: true,
                            child: new Text('Very Very Very Very Very Very Very Very Long Text'),
                        }),
                    }),
                ]
            })
        });
        return widget;
    }

}

module.exports = {
    ExampleWidget
}

/***/ }),

/***/ "./src/app_demo/widget_examples/D/DropdownButton.js":
/*!**********************************************************!*\
  !*** ./src/app_demo/widget_examples/D/DropdownButton.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    TextStyle,
    Container,
    Alignment,
    Colors,
    ListView,
    ListTile,
    DefaultTextStyle,
    TextDecoration,
    DropdownMenuItem,
    DropdownButton,
    Icon,
    Icons,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleDropdownButton();
    }
}

class PageExampleDropdownButton extends MXJSWidgetState {
    constructor() {
        super();
        this._dropValue = 'Math';
        this._dropSelectValue = 'Math';
        this._dropHintValue = null;
        this._dropIconValue = 'Math';
    }

    _buildItem() {
        return [
            new DropdownMenuItem({ child: new Text('Math'), value: 'Math' }),
            new DropdownMenuItem({ child: new Text('English'), value: 'English' }),
            new DropdownMenuItem({ child: new Text('Chinese'), value: 'Chinese' }),
        ]
    }

    _buildCommonButton() {
        return new Container({
            alignment: Alignment.center,
            child: new DropdownButton({
                value: this._dropValue,
                items: this._buildItem(),
                onChanged: function (value) {
                    this.setState(function () {
                        this._dropValue = value;
                        console.log(value);
                    }.bind(this));
                }.bind(this),
            }),
        });
    }

    _buildSelectItemButton() {
        return new Container({
            alignment: Alignment.center,
            child: new DropdownButton({
                value: this._dropSelectValue,
                items: this._buildItem(),
                selectedItemBuilder: (context) => {
                    return [
                        new Text('Math', { style: new TextStyle({ color: Colors.red }) }),
                        new Text('English', { style: new TextStyle({ color: Colors.red }) }),
                        new Text('Chinese', { style: new TextStyle({ color: Colors.red }) }),
                    ]
                },
                onChanged: function (value) {
                    this.setState(function () {
                        this._dropSelectValue = value;
                        console.log(value);
                    }.bind(this));
                }.bind(this),
            }),
        });
    }

    _buildHintButton() {
        return new Container({
            alignment: Alignment.center,
            child: new DropdownButton({
                hint: new Text('请选择'),
                value: this._dropHintValue,
                items: this._buildItem(),
                onChanged: function (value) {
                    this.setState(function () {
                        this._dropHintValue = value;
                        console.log(value);
                    }.bind(this));
                }.bind(this),
            }),
        });
    }
    _buildIconButton() {
        return new Container({
            alignment: Alignment.center,
            child: new DropdownButton({
                icon: new Icon(Icons.add),
                iconSize: 24,
                iconDisabledColor: Colors.grey,
                iconEnabledColor: Colors.red,
                value: this._dropIconValue,
                items: this._buildItem(),
                onChanged: function (value) {
                    this.setState(function () {
                        this._dropIconValue = value;
                        console.log(value);
                    }.bind(this));
                }.bind(this),
            }),
        });
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('DropdownButton'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('DropDownButton') }),
                    this._buildCommonButton(),
                    new ListTile({ title: new Text('DropdownButton.selectedItemBuilder(MXFlutter中暂不支持)') }),
                    this._buildSelectItemButton(),
                    new ListTile({ title: new Text('DropdownButton.hint') }),
                    this._buildHintButton(),
                    new ListTile({ title: new Text('DropdownButton.icon') }),
                    this._buildIconButton(),
                ]
            }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/E/Expanded.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/E/Expanded.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    Color,
    Column,
    Row,
    Expanded,
    ListTile,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleExpanded();
    }
}

class PageExampleExpanded extends MXJSWidgetState {
    constructor() {
        super();
        this._flex = 0;
    }

    _randomValue() {
        return Math.ceil(Math.random() * 128) + 128;
    }

    _buildFlexContainer(flexNum) {
        return new Expanded({
            flex: flexNum,
            child: new Container({
                alignment: Alignment.center,
                width: 50,
                height: 50,
                color: Color.fromRGBO(
                    this._randomValue(),
                    this._randomValue(),
                    this._randomValue(),
                    1.0
                ),
                child: new Text('flex=' + flexNum),
            }),
        });
    }

    _buildContent(num1,num2,num3) {
        return new Row({
            children: [
                this._buildFlexContainer(num1),
                this._buildFlexContainer(num2),
                this._buildFlexContainer(num3),
            ]
        });
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Expanded'),
            }),
            body: new Column({
                children: [
                    new ListTile({title: new Text('Expanded.flex[0,0,0]'),}),
                    this._buildContent(0,0,0),
                    new ListTile({title: new Text('Expanded.flex[0,0,1]'),}),
                    this._buildContent(0,0,1),
                    new ListTile({title: new Text('Expanded.flex[1,1,1]'),}),
                    this._buildContent(1,1,1),
                    new ListTile({title: new Text('Expanded.flex[2,3,3]'),}),
                    this._buildContent(2,3,3),
                ]
            })
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/F/FittedBox.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/F/FittedBox.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    FittedBox,
    Container,
    BoxFit,
    Image,
    Colors,
    Alignment,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFittedBox(); }
}

class PageExampleFittedBox extends MXJSWidgetState {
    constructor() {
        super();
    }

    _picture() {
        return Image.asset('people/ali_landscape.png', {
            mxPackage: 'flutter_gallery_assets',
        });
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FittedBox'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("fit: BoxFit.contain") }),
                    new Container({
                        color: Colors.blue/*[200]*/,
                        height: 200,
                        child: new FittedBox({
                            fit: BoxFit.contain,
                            child: this._picture(),
                        })
                    }),
                    new ListTile({ title: new Text("fit: BoxFit.cover") }),
                    new Container({
                        color: Colors.blue/*[200]*/,
                        height: 200,
                        child: new FittedBox({
                            fit: BoxFit.cover,
                            child: this._picture(),
                        })
                    }),
                    new ListTile({ title: new Text("fit: BoxFit.fill") }),
                    new Container({
                        color: Colors.blue/*[200]*/,
                        height: 200,
                        child: new FittedBox({
                            fit: BoxFit.fill,
                            child: this._picture(),
                        })
                    }),
                    new ListTile({ title: new Text("fit: BoxFit.none") }),
                    new Container({
                        color: Colors.blue/*[200]*/,
                        height: 200,
                        child: new FittedBox({
                            fit: BoxFit.none,
                            child: this._picture(),
                        })
                    }),
                    new ListTile({ title: new Text("alignment: Alignment.centerLeft") }),
                    new Container({
                        color: Colors.blue/*[200]*/,
                        height: 200,
                        child: new FittedBox({
                            fit: BoxFit.contain,
                            alignment: Alignment.centerLeft,
                            child: this._picture(),
                        })
                    }),
                ],
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/F/FlatButton.js":
/*!******************************************************!*\
  !*** ./src/app_demo/widget_examples/F/FlatButton.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    ButtonBar,
    FlatButton,
    EdgeInsets,
    Colors,
    CircleBorder,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFlatButton(); }
}

class PageExampleFlatButton extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FlatButton'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("FlatButton的样式") }),
                    new ButtonBar({ 
                        alignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FlatButton({
                                child: new Text("build"),
                                onPressed: function() {},
                            }),
                            new FlatButton({
                                child: new Text("build"),
                                color: Colors.yellow/*[100]*/,
                                onPressed: function() {},
                            }),
                            new FlatButton({ 
                                child: new Text("build"),
                                color: Colors.red/*[100]*/,
                                onPressed: function() {},
                            }),
                            new FlatButton({
                                child: new Text("build"),
                                disabledColor: Colors.grey/*[300]*/,
                                disabledTextColor: Colors.white,
                            }),
                        ]
                    }),
                    new ButtonBar({ 
                        alignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FlatButton({
                                child: new Text("build"),
                                onPressed: function() {},
                                color: Colors.white,
                                textColor: Colors.blue,
                                splashColor: Colors.blue,
                            }),
                            new FlatButton({
                                child: new Text("build"),
                                color: Colors.yellow/*[100]*/,
                                padding: EdgeInsets.symmetric({ horizontal: 40.0 }),
                                onPressed: function() {},
                            }),
                            new FlatButton({
                                child: new Text("build"),
                                color: Colors.yellow/*[100]*/,
                                shape: new CircleBorder(),
                                onPressed: function() {},
                            }),
                        ]
                    }),
                ],
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/F/FloatingActionButton.js":
/*!****************************************************************!*\
  !*** ./src/app_demo/widget_examples/F/FloatingActionButton.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    ButtonBar,
    FloatingActionButton,
    Icon,
    Icons,
    Colors,
    RoundedRectangleBorder,
    BorderRadius,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFloatingActionButton(); }
}

class PageExampleFloatingActionButton extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FloatingActionButton'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("基本的FloatingActionButton样式") }),
                    new ButtonBar({ 
                        alignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                heroTag: 1,
                            }),
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                foregroundColor: Colors.white,
                                backgroundColor: Colors.blue,
                                heroTag: 2,
                            }),
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                foregroundColor: Colors.white,
                                backgroundColor: Colors.green,
                                splashColor: Colors.white,
                                heroTag: 3,
                            }),
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                foregroundColor: Colors.white,
                                backgroundColor: Colors.pink/*[300]*/,
                                elevation: 2.0,
                                highlightElevation: 6.0,
                                heroTag: 4,
                            }),
                        ]
                    }),
                    new ListTile({ title: new Text("mini, 长按提示和其他形状的FloatingActionButton") }),
                    new ButtonBar({ 
                        alignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                mini: true,
                                heroTag: 5,
                            }),
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                tooltip: "FloatingActionButton",
                                heroTag: 6,
                            }),
                            new FloatingActionButton({
                                child: new Icon(Icons.add),
                                shape: new RoundedRectangleBorder({
                                    borderRadius: BorderRadius.circular(12.0)
                                }),
                                heroTag: 7,
                            }),
                        ]
                    }),
                ],
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/F/FlutterLogo.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/widget_examples/F/FlutterLogo.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    ListTile,
    MainAxisAlignment,
    FlutterLogo,
    Row,
    Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFlutterLogo(); }
}

class PageExampleFlutterLogo extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FlutterLogo'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text("FlutterLogo.size") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FlutterLogo(),
                            new FlutterLogo({ size: 48 }),
                            new FlutterLogo({ size: 72 }),
                        ]
                    }),
                    new ListTile({ title: new Text("FlutterLogo.colors") }),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                            new FlutterLogo({ size: 48, colors: Colors.amber }),
                            new FlutterLogo({ size: 48, colors: Colors.pink }),
                            new FlutterLogo({ size: 48, colors: Colors.green }),
                        ]
                    }),
                ],
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/F/FractionallySizedBox.js":
/*!****************************************************************!*\
  !*** ./src/app_demo/widget_examples/F/FractionallySizedBox.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Expanded,
    Container,
    EdgeInsets,
    Colors,
    Column,
    FractionallySizedBox,
    Alignment,
    ListTile,
    Slider,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFlutterLogo(); }
}

class PageExampleFlutterLogo extends MXJSWidgetState {
    constructor() {
        super();
        this._widthFactor = 0.5;
        this._heightFactor = 0.2;
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FlutterLogo'),
            }),
            body: new Column({
                children: [
                    new Expanded({
                        child: new FractionallySizedBox({
                            alignment: Alignment.center,
                            widthFactor: this._widthFactor,
                            heightFactor: this._heightFactor,
                            child: new Container({ color: Colors.blue }),
                        }),
                    }),
                    new ListTile({
                        title: new Text(
                            "水平方向占比: " + (this._widthFactor * 100).toFixed(1) + "%"
                        )
                    }),
                    new Slider({
                        min: 0.0, max: 1.0, value: this._widthFactor,
                        onChanged: function (value) {
                            this.setState(function () {
                                this._widthFactor = value;
                            }.bind(this));
                        }.bind(this),
                    }),
                    new ListTile({
                        title: new Text(
                            "垂直方向占比: " + (this._heightFactor * 100).toFixed(1) + "%"
                        )
                    }),
                    new Slider({
                        min: 0.0, max: 1.0, value: this._heightFactor,
                        onChanged: function (value) {
                            this.setState(function () {
                                this._heightFactor = value;
                            }.bind(this))
                        }.bind(this),
                    }),
                ],
            }),
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/G/GestureDetector.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/G/GestureDetector.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    Colors,
    Column,
    Row,
    Expanded,
    ListTile,
    GestureDetector,
    Center,
    ListView,
    TextStyle,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 手势识别组件
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleGestureDetector();
    }
}

class PageExampleGestureDetector extends MXJSWidgetState {
    constructor() {
        super();
        this._infoCommon = 'idle';
        this._infoOffset = 'idle';
    }

    _buildCommon() {
        return new GestureDetector({
            onTap: function () {
                this.setState(function () {
                    this._infoCommon = 'onTap';
                }.bind(this));
                console.log(this._infoCommon);
            }.bind(this),
            onLongPress: function () {
                this.setState(function () {
                    this._infoCommon = 'onLongPress';
                }.bind(this));
                console.log(this._infoCommon);
            }.bind(this),
            child: new Container({
                alignment: Alignment.center,
                height: 200,
                color: Colors.orange,
                child: new Text(this._infoCommon, {
                    style: new TextStyle({ fontSize: 20, color: Colors.white }),
                }),
            })
        });
    }

    _onTapUp(details) {
        console.log(details);
        console.log(details.localPosition);
        console.log(details.globalPosition);
        this.setState(function() {
            this._infoOffset = 'onTapUp\n'+details.localPosition+'\n'+details.globalPosition;
        }.bind(this));
    }

    _buildOffset() {
        return new GestureDetector({
            onTapUp: this._onTapUp.bind(this),
            // onTapDown: function(details) {
            //     this.setState(function() {
            //         this._infoOffset = 'onTapDown\n'+details.localPosition+'\n'+details.globalPosition;
            //     })
            //     console.log(details.localPosition);
            // }.bind(this),
            child: new Container({
                alignment: Alignment.center,
                height: 200,
                color: Colors.orange,
                child: new Text(this._infoOffset, {
                    style: new TextStyle({fontSize: 20, color: Colors.white}),
                }),
            }),
        });
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('GestureDetector'),
            }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('点击长按试试？') }),
                    this._buildCommon(),
                    new ListTile({ title: new Text('换个位置试试？') }),
                    this._buildOffset(),
                ]
            }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/G/GridView.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/G/GridView.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 可滚动的2D数组组件
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleGridView();
    }
}

class PageExampleGridView extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('GridView'),
            }),
            body: new Center({
                child: new Text('写到半路发现MXFlutter中暂未实现该组件～'),
            })
        });
        return widget;
    }

}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/H/Hero.js":
/*!************************************************!*\
  !*** ./src/app_demo/widget_examples/H/Hero.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    ListTile,
    GestureDetector,
    ListView,
    Hero,
    Image,
    Navigator,
    MaterialPageRoute,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 动画页面切换组件
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleHero();
    }
}

class PageExampleHero extends MXJSWidgetState {
    constructor() {
        super();
    }
    build(context) {
        var hero = new Hero({
            tag: 'hero',
            child: new Container({
                child: Image.asset('people/ali_landscape.png', {
                    mxPackage: 'flutter_gallery_assets',
                    fit: BoxFit.cover,
                    height: 250
                }),
            })
        })
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Hero'),
            }),
            body: new ListView({
                children: [
                    new ListTile({title: new Text('点击下方图片试试～')}),
                    new GestureDetector({
                        onTap: function() {
                            Navigator.push(context, new MaterialPageRoute({
                                builder: function () {
                                    return new _HeroDemo();
                                }
                            }))
                        }.bind(this),
                        child: hero,
                    })
                ]
            }),
        });
        return widget;
    }
}

class _HeroDemo extends MXJSStatelessWidget {
    build() {
        return new Scaffold({
            appBar: new AppBar({ title: new Text('Hero New Page') }),
            body: new Container({
                alignment: Alignment.center,
                child: new Hero({
                    tag: 'hero',
                    child: Image.asset('people/ali_landscape.png', {
                        mxPackage: 'flutter_gallery_assets',
                        fit: BoxFit.cover,
                        height: 250
                    }),
                }),
            }),
        });

    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/I/IconButton.js":
/*!******************************************************!*\
  !*** ./src/app_demo/widget_examples/I/IconButton.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Container,
    Alignment,
    ListTile,
    GestureDetector,
    ListView,
    Hero,
    Image,
    Navigator,
    MaterialPageRoute,
    IconButton,
    Icon,
    Icons,
    Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 按钮组件
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleIconButton();
    }
}

class PageExampleIconButton extends MXJSWidgetState {
    constructor() {
        super();
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('IconButton') }),
            body: new ListView({
                children: [
                    new ListTile({ title: new Text('普通图标按钮') }),
                    new IconButton({
                        icon: new Icon(Icons.person),
                        iconSize: 30,
                        color: Colors.red,
                        onPressed: function() {},
                    }),
                    new ListTile({ title: new Text('长按显示提示 且有颜色变化') }),
                    new IconButton({
                        tooltip: '这是一个图标按钮',
                        icon: new Icon(Icons.person),
                        iconSize: 30,
                        color: Colors.green,
                        highlightColor: Colors.red,
                        splashColor: Colors.orange,
                        disableColor: Colors.grey,
                        onPressed: function() {},
                    }),
                ]
            }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/I/Image.js":
/*!*************************************************!*\
  !*** ./src/app_demo/widget_examples/I/Image.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    ListTile,
    AppBar,
    Text,
    Colors,
    ListView,
    Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleImage();
    }
}
class PageExampleImage extends MXJSWidgetState {
    constructor() {
        super("PageExampleImage");
    }

    genImageUI(boxFitName) {
        return [
            new ListTile({
                title: new Text('BoxFit.' + boxFitName,),
            }),
            new Container({
                height: 150,
                width: 300,
                color: Colors.orange,
                child: Image.asset('people/ali_landscape.png', {
                    mxPackage: 'flutter_gallery_assets',
                    fit: BoxFit[boxFitName],
                    height: 100
                }),
            }),
        ];
    }


    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Image'),
            }),
            body: new ListView({
                children: [
                    new ListTile({
                        title: new Text('加载网络图片',),
                    }),
                    Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg', {
                        fit: BoxFit.cover,
                        height: 250
                    }),
                    new ListTile({
                        title: new Text('加载本地图片',),
                    }),
                    Image.asset('people/ali_landscape.png', {
                        mxPackage: 'flutter_gallery_assets',
                        fit: BoxFit.cover,
                        height: 250
                    }),
                    ...this.genImageUI("contain"),
                    ...this.genImageUI("fill"),
                    ...this.genImageUI("fitHeight"),
                    ...this.genImageUI("fitWidth"),
                    ...this.genImageUI("scaleDown"),
                    ...this.genImageUI("none"),
                ],
            })
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/I/IndexedStack.js":
/*!********************************************************!*\
  !*** ./src/app_demo/widget_examples/I/IndexedStack.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    AppBar,
    Text,
    Colors,
    IndexedStack,
    Center,
    Icon,
    Icons,
    Alignment,
    Row,
    IconButton,
    MainAxisAlignment,
    Column,
    Wrap,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleIndexedStack();
    }
}

class PageExampleIndexedStack extends MXJSWidgetState {
    constructor() {
        super('IndexedStack');
        this._index = 1;
    }

    genIndexedStack(containerColor, iconName, index) {
        return new Center({
            child: new Container({
                height: 300,
                width: 300,
                color: Colors[containerColor],
                alignment: Alignment.center,
                child: new Wrap({
                    children: [
                        new Text('NO.' + index),
                        new Icon(Icons[iconName]),
                    ]
                })

            })
        });
    }

    genIndexedIcon(iconName, index) {
        return new IconButton({
            icon: new Icon(Icons[iconName]),
            onPressed: function () {
                this.setState(function () {
                    this._index = index;
                }.bind(this));
            }.bind(this),
        })
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({ title: new Text('IndexedStack') }),
            body: new Column({
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                        new IndexedStack({
                            index: this._index,
                            children: [
                                this.genIndexedStack("red", "school", 0),
                                this.genIndexedStack("green", "person", 1),
                                this.genIndexedStack("yellow", "home", 2),
                            ]
                        }),
                        new Row({
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                                this.genIndexedIcon("school", 0),
                                this.genIndexedIcon("person", 1),
                                this.genIndexedIcon("home", 2),
                            ]
                        })
                    ]
                }),
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/I/IntrinsicHeight.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/I/IntrinsicHeight.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    Container,
    AppBar,
    Text,
    Colors,
    Row,
    IntrinsicHeight,
    ListView,
    ListTile,
    MainAxisAlignment,
    TabBar,
    Tab,
    TabBarView,
    DefaultTabController,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 根据内部子控件高度调整高度
// 性能损耗较大 不推荐使用
class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }
    createState() {
        return new PageExampleIntrinsicHeight();
    }
}

class PageExampleIntrinsicHeight extends MXJSWidgetState {
    constructor() {
        super('IntrinsicHeight');
    }

    _withoutIntrinsicHeight() {
        return new Row({
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
                new Container({ color: Colors.blue, width: 100 }),
                new Container({ color: Colors.red, width: 50, height: 100 }),
                new Container({ color: Colors.green, width: 100 }),
            ],
        });
    }

    _withIntrinsicHeight() {
        return new ListView({
            children: [
                new ListTile({ title: new Text('只有中间的Container设置了Height属性~') }),
                new IntrinsicHeight({
                    child: new Row({
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                            new Container({ color: Colors.blue, width: 100 }),
                            new Container({ color: Colors.red, width: 50, height: 100 }),
                            new Container({ color: Colors.green, width: 100 }),
                        ],
                    }),
                }),
            ]
        });
    }

    build() {
        let widget = new DefaultTabController({
            length: 2,
            child: new Scaffold({
                appBar: new AppBar({
                    title: new Text('IntrinsicHeight'),
                    bottom: new TabBar({
                        scrollable: true,
                        tabs: [
                            new Tab({ text: "未使用IntrinsicHeight" }),
                            new Tab({ text: "使用IntrinsicHeight" }),
                        ],
                    }),
                }),
                body: new TabBarView({
                    children: [
                        this._withoutIntrinsicHeight(),
                        this._withIntrinsicHeight(),
                    ]
                }),
            })
        });
        return widget;
    }
}

module.exports = {
    ExampleWidget,
}

/***/ }),

/***/ "./src/app_demo/widget_examples/I/IntrinsicWidth.js":
/*!**********************************************************!*\
  !*** ./src/app_demo/widget_examples/I/IntrinsicWidth.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Container,
  AppBar,
  Text,
  Colors,
  Row,
  IntrinsicHeight,
  ListView,
  ListTile,
  MainAxisAlignment,
  TabBar,
  Tab,
  TabBarView,
  DefaultTabController,
  IntrinsicWidth,
  Column,
  Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 相比IntrinsicHeight多了两参数stepHeight、stepWidth
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }
  createState() {
    return new PageExampleIntrinsicWidth();
  }
}

class PageExampleIntrinsicWidth extends MXJSWidgetState {
  constructor() {
    super("IntrinsicWidth");
  }

  _withWidthHeight(_stepHeight,_stepWidth) {
      return new Column({
        children: [
          new Center({ child: new Text("stepWidth:"+_stepWidth+"\nstepHeight:"+_stepHeight) }),
          new IntrinsicWidth({
            stepHeight: _stepHeight,
            stepWidth: _stepWidth,
            child: new Column({
              children: [
                new Container({ color: Colors.blue, height: 100 }),
                new Container({ color: Colors.red, height: 100, width: 150 }),
                new Container({ color: Colors.yellow, height: 250 }),
              ],
            }),
          }),
        ],
      });
  }

  build(context) {
    let widget = new DefaultTabController({
        length: 2,
        child: new Scaffold({
            appBar: new AppBar({
                title: new Text("Container"),
                bottom: new TabBar({
                    scrollable: true,
                    tabs: [
                        new Tab({ text: "NotNull" }),
                        new Tab({ text: "Null" }),
                    ],
                }),
            }),
            body: new TabBarView({
                children: [
                    this._withWidthHeight(450,300),
                    this._withWidthHeight(null,null),
                ],
            }),
        }),
    });
    return widget;
}
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/L/LimitedBox.js":
/*!******************************************************!*\
  !*** ./src/app_demo/widget_examples/L/LimitedBox.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Text,
    ListView,
    LimitedBox,
    Container,
    Colors,
    Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() { return new PageExampleFloatingActionButton(); }
}

class PageExampleFloatingActionButton extends MXJSWidgetState {
    constructor() {
        super();
    }

    _colorfulContainers() {
        let colors = [
            Colors.blue/*[300]*/,
            Colors.pink/*[300]*/,
            Colors.orange/*[300]*/,
            Colors.green/*[300]*/,
            Colors.purple/*[300]*/,
            Colors.grey/*[300]*/,
        ];
        let list = [];
        for(var i = 0; i < 11; i ++) {
            var maxHeight = 100 + i * 10;
            list.push(
                new LimitedBox({
                    maxHeight: maxHeight,
                    child: new Container({
                        color: colors[i % 6],
                        child: new Center({
                            child: new Text("maxHeight: " + maxHeight.toString()),
                        }),
                    }),
                }),
            );
        }
        return list;
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('FloatingActionButton'),
            }),
            body: new ListView({
                children: this._colorfulContainers(),
            })
        });
        return widget;
    }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/L/ListBody.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/L/ListBody.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListBody,
  Container,
  Center,
  Axis,
  Colors,
  SingleChildScrollView,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleListBody();
  }
}

class PageExampleListBody extends MXJSWidgetState {
  constructor() {
    super();
  }

  _theContainer(color, text) {
    return new Container({
      height: 60.0,
      width: 60.0,
      color: color,
      child: new Center({
        child: new Text(text),
      }),
    });
  }

  _containerList() {
    let colors = [
        Colors.blue/*[300]*/,
        Colors.pink/*[300]*/,
        Colors.orange/*[300]*/,
        Colors.green/*[300]*/,
        Colors.purple/*[300]*/,
        Colors.grey/*[300]*/,
    ];
    let lists = [];
    for (let i = 1; i <= 30; i++) {
      lists.push(this._theContainer(colors[i % 6], i.toString()));
    }
    return lists;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 2,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text("ListBody"),
          bottom: new TabBar({
            tabs: [
              new Tab({ text: "Axis.vertical" }),
              new Tab({ text: "Axis.horizontal" }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new SingleChildScrollView({
              scrollDirection: Axis.vertical,
              child: new ListBody({
                mainAxis: Axis.vertical,
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              scrollDirection: Axis.horizontal,
              child: new ListBody({
                mainAxis: Axis.horizontal,
                children: this._containerList(),
              }),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/L/ListTile.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/L/ListTile.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Container,
  Colors,
  CircleAvatar,
  Icon,
  Icons,
  IconButton,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleListTile();
  }
}

class PageExampleListTile extends MXJSWidgetState {
  constructor() {
    super();
    this._selected = false;
  }

  _divider() {
    return new Container({
      height: 1.0,
      color: Colors.grey/*[400]*/,
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("ListTile"),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text("基本的ListTile"),
          }),
          this._divider(),
          new ListTile({
            title: new Text("带有描述的ListTile"),
            subtitle: new Text("这个一条短描述"),
          }),
          this._divider(),
          new ListTile({
            title: new Text("三行带有描述的ListTile"),
            subtitle: new Text(
              "这个一条长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长描述"
            ),
            isThreeLine: true,
          }),
          this._divider(),
          new ListTile({
            title: new Text("三行紧凑的的ListTile"),
            subtitle: new Text(
              "这个一条长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长描述"
            ),
            isThreeLine: true,
            dense: true,
          }),
          this._divider(),
          new ListTile({
            title: new Text("带有图标的ListTile"),
            subtitle: new Text("000-0000-0000"),
            leading: new CircleAvatar({
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
              child: new Text("头"),
            }),
            trailing: new IconButton({
                icon: new Icon(Icons.call),
            }),
          }),
          this._divider(),
          new ListTile({
            title: new Text("可点击的ListTile"),
            onTap: function () {
              console.log("ListTile was Tapped.");
            },
          }),
          this._divider(),
          new ListTile({
            title: new Text(this._selected
              ? "点击左侧按钮取消选中"
              : "可长按选中的ListTile"),
            onLongPress: function () {
              if (this._selected == false)
                this.setState(
                  function () {
                    this._selected = !this._selected;
                  }.bind(this)
                );
            }.bind(this),
            selected: this._selected,
            leading: this._selected
              ? new IconButton({
                  icon: new Icon(Icons.check_box),
                  onPressed: function () {
                    this.setState(
                      function () {
                        this._selected = !this._selected;
                      }.bind(this)
                    );
                  }.bind(this),
                })
              : null,
          }),
          this._divider(),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/L/ListView.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/L/ListView.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
  Container,
  Center,
  Axis,
  Colors,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");


let colors = [
  Colors.blue/*[300]*/,
  Colors.pink/*[300]*/,
  Colors.orange/*[300]*/,
  Colors.green/*[300]*/,
  Colors.purple/*[300]*/,
  Colors.grey/*[300]*/,
  Colors.yellow/*[300]*/,
  Colors.red/*[300]*/,
  Colors.cyan/*[300]*/,
];

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleListBody();
  }
}

class PageExampleListBody extends MXJSWidgetState {
  constructor() {
    super();
  }

  _theContainer(color, text) {
    return new Container({
      height: 60.0,
      width: 60.0,
      color: color,
      child: new Center({
        child: new Text(text),
      }),
    });
  }

  _containerBuilder(context, index) {
    return new Container({
      height: 60.0,
      width: 60.0,
      color: colors[index % 9],
      child: new Center({
        child: new Text(index.toString()),
      }),
    });
  }

  _sparatedBuilder(context, index) {
    return new Container({
      widget: 2.0,
      height: 2.0,
      color: index % 2 == 0 ? Colors.black54 : Colors.black,
    });
  }

  _containerList() {
    let lists = [];
    for (let i = 0; i < 31; i++) {
      lists.push(this._theContainer(colors[i % 9], i.toString()));
    }
    return lists;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 3,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text("ListBody"),
          bottom: new TabBar({
            tabs: [
              new Tab({ text: "垂直方向" }),
              new Tab({ text: "水平方向" }),
              new Tab({ text: "builder" }),
              // new Tab({ text: "separated" }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new ListView({
              children: this._containerList(),
            }),
            new ListView({
              scrollDirection: Axis.horizontal,
              children: this._containerList(),
            }),
            ListView.builder({
              itemCount: 31,
              itemBuilder: this._containerBuilder,
            }),
            // ListView.separated({
            //   itemCount: 31,
            //   itemBuilder: this._containerBuilder,
            //   separatorBuilder: this._sparatedBuilder,
            // }),
          ],
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/M/MaterialApp.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/widget_examples/M/MaterialApp.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Center,
  MaterialApp,
  ThemeData,
  ListTile,
  ListView,
  Container,
  Column,
  CrossAxisAlignment,
  Color,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// Material应用的顶级组件 包含路由生成器、主题语言主页等属性
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleMaterialApp();
  }
}

class PageExampleMaterialApp extends MXJSWidgetState {
  constructor() {
    super('MaterialApp');
  }
  build() {
    let widget = new Scaffold({
        appBar: new AppBar({ title: new Text('MaterialApp') }),
        body: new Column({
          children: [
            new Container({
              height: 100,
              color: new Color(0xFFC5CAE9),
            }),
            new Container({
              height: 100,
              color: new Color(0xFF7986CB),
            }),
            new Container({
              height: 100,
              color: new Color(0xFF3949AB),
            }),
            new Container({
              height: 100,
              color: new Color(0xFF1A237E),
            }),
          ],
        }),
      // 主题相关
      // theme: new ThemeData({
      //   primaryColor: Colors.orange,
      // }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/M/MediaQuery.js":
/*!******************************************************!*\
  !*** ./src/app_demo/widget_examples/M/MediaQuery.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// MediaQuery获取屏幕尺寸 设备密度 文字缩放比例 边距等信息
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }
  createState() {
    return new PageExampleMediaQuery();
  }
}

class PageExampleMediaQuery extends MXJSWidgetState {
  constructor() {
    super("MediaQuery");
  }

  _buildQueryData(name, value) {
    return new Row({
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        new Text(name, {
          style: new TextStyle({ fontSize: 20, color: Colors.black }),
        }),
        new Text(value.toString(), {
          style: new TextStyle({ fontSize: 20, color: Colors.orange }),
        }),
      ],
    });
  }
  
  build(context) {
    let queryData = MediaQuery.of(context);
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text("MediaQuery") }),
      body: new ListView({
        itemExtent: 60,
        children: [
          this._buildQueryData("size", queryData.size),
          this._buildQueryData("padding.top", queryData.padding.top),
          this._buildQueryData("padding.left", queryData.padding.left),
          this._buildQueryData("padding.right", queryData.padding.right),
          this._buildQueryData("padding.bottom", queryData.padding.bottom),
          this._buildQueryData("viewInsets", queryData.viewInsets),
          new Text("还有很多其他属性不便展示 可以继续探索～", {
            style: new TextStyle({ fontSize: 15, color: Colors.black }),
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/N/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/N/Navigator.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
  Center,
  Container,
  Navigator,
  ListTile,
  MaterialPageRoute,
  RaisedButton,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  IconButton,
  Icon,
  Icons,
  TextField,
  InputDecoration
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 路由管理控件: 通常使用于局部页面跳转的情况
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }
  createState() {
    return new PageExampleNavigator();
  }
}

class PageExampleNavigator extends MXJSWidgetState {
  constructor() {
    super("Navigator");
  }

  _buildSearchBar(context) {
    return new Container({
      child: new Row({
        children: [
          new Expanded({
            child: new FlatButton({
              onPressed: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new SearchPage();
                    },
                  })
                );
              },
              child: new Text("搜索框"),
            }),
          }),
        ],
      }),
      decoration: new BoxDecoration({
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
        color: Colors.blue,
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: this._buildSearchBar(context)}),
      body: new Center({
        child: new Text("点击上方搜索框\n调用Navigator.push()"),
      }),
    });
    return widget;
  }
}
class SearchPage extends MXJSStatefulWidget {
    constructor() {
        super('SearchPage');
    }
    createState() {
        return new SearchPageState();
    }
}

class SearchPageState extends MXJSWidgetState {

    _buildSearch(context) {
        return new Container({
            child: new Row({
                children: [
                    new Expanded({
                        child: new TextField({
                            autofocus: true,
                            decoration: new InputDecoration({
                                hintText: "输入框",
                                prefixIcon: new Icon(Icons.person)
                            }),
                        })
                    }),
                ]
            })
        })
    }
    build(context) {
        return new Scaffold({
            appBar: new AppBar({title: this._buildSearch()}),
            body: new Center({
                child: new Text('SearchDetails'),
            }),
        });
    }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/N/NestedScrollView.js":
/*!************************************************************!*\
  !*** ./src/app_demo/widget_examples/N/NestedScrollView.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
  Center,
  Container,
  Navigator,
  ListTile,
  MaterialPageRoute,
  RaisedButton,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  IconButton,
  Icon,
  Icons,
  TextField,
  InputDecoration,
  SliverAppBar,
  NestedScrollView,
  FlexibleSpaceBar,
  Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 内部嵌套其他滚动视图的滚动视图
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampeNestedScrollView();
  }
}

class PageExampeNestedScrollView extends MXJSWidgetState {
  constructor() {
    super();
  }

  _listContainerBuilder(context, index) {
    return new Container({
      height: 60,
      child: new Center({
        child: new Text(index.toString()),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      body: new NestedScrollView({
        headerSliverBuilder: function (context) {
          return [
            new SliverAppBar({
              expandedHeight: 230,
              pinned: true,
              flexibleSpace: new FlexibleSpaceBar({
                title: new Text('NestedScrollView'),
                background: Image.asset('products/teaset.png', {
                  mxPackage: 'flutter_gallery_assets',
                  fit: BoxFit.cover,
                }),
              }),
            }),
          ];
        },
        body: ListView.builder({
          itemCount: 20,
          itemBuilder: this._listContainerBuilder,
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/N/NotificationListener.js":
/*!****************************************************************!*\
  !*** ./src/app_demo/widget_examples/N/NotificationListener.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Colors,
    Row,
    ListView,
    MediaQuery,
    MainAxisAlignment,
    TextStyle,
    Center,
    Container,
    Navigator,
    ListTile,
    MaterialPageRoute,
    RaisedButton,
    BoxDecoration,
    BorderRadius,
    Radius,
    FlatButton,
    Expanded,
    IconButton,
    Icon,
    Icons,
    TextField,
    InputDecoration,
    SliverAppBar,
    NestedScrollView,
    FlexibleSpaceBar,
    Image,
    NotificationListener,
    ScrollNotification,
  } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
  
  // 以冒泡的方式监听Notification的组件
  class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
      super('ExampleWidget');
    }
    createState() {
      return new PageExampleNotificationListener();
    }
  }
  
  class PageExampleNotificationListener extends MXJSWidgetState {
    constructor() {
      super();
    }

    build(context) {
      let widget = new Scaffold({
        body: new NotificationListener<ScrollNotification>({
            
        })
      });
      return widget;
    }
  }
  
  module.exports = {
    ExampleWidget,
  };

/***/ }),

/***/ "./src/app_demo/widget_examples/O/Offstage.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/O/Offstage.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
  Center,
  Container,
  Navigator,
  ListTile,
  MaterialPageRoute,
  RaisedButton,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  IconButton,
  Icon,
  Icons,
  TextField,
  InputDecoration,
  SliverAppBar,
  NestedScrollView,
  FlexibleSpaceBar,
  Image,
  NotificationListener,
  ScrollNotification,
  Column,
  Offstage,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 控制是否显示组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOffstage();
  }
}

class PageExampleOffstage extends MXJSWidgetState {
  constructor() {
    super();
    this._isOff = true;
  }

  _changeState() {
    this.setState(
      function () {
        this._isOff = !this._isOff;
      }.bind(this),
    );
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Offstage') }),
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Offstage({
              offstage: this._isOff,
              child: new Text('Offset组件'),
            }),
            new RaisedButton({
              child: this._isOff ? new Text('隐藏') : new Text('显示'),
              onPressed: this._changeState.bind(this),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/O/Opacity.js":
/*!***************************************************!*\
  !*** ./src/app_demo/widget_examples/O/Opacity.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
  Center,
  Container,
  Navigator,
  ListTile,
  MaterialPageRoute,
  RaisedButton,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  IconButton,
  Icon,
  Icons,
  TextField,
  InputDecoration,
  SliverAppBar,
  NestedScrollView,
  FlexibleSpaceBar,
  Image,
  NotificationListener,
  ScrollNotification,
  Column,
  Offstage,
  Alignment,
  Opacity,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 透明度0~1
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOpacity();
  }
}

class PageExampleOpacity extends MXJSWidgetState {
  constructor() {
    super();
    this._isOff = true;
    this._colorTable = {
        "red": Colors.red,
        "green": Colors.green,
        "blue": Colors.blue,
    };
  }

  _buildContainer(colorName, index) {
    return new Container({
      height: 80,
      width: 80,
      color: this._colorTable[colorName],
      alignment: Alignment.center,
      child: new Text(index),
    });
  }

  _buildOpacityContainer(colorName, index, opacity) {
    return new Opacity({
      opacity: opacity,
      child: this._buildContainer(colorName, index),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Offstage') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('没有使用Opacity') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              this._buildContainer('red', '1'),
              this._buildContainer('green', '2'),
              this._buildContainer('blue', '3'),
            ],
          }),
          new ListTile({ title: new Text('使用Opacity[0.5 0.0 0.8]') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              this._buildOpacityContainer('red', '1', 0.5),
              this._buildOpacityContainer('green', '2', 0.0),
              this._buildOpacityContainer('blue', '3', 0.8),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/O/OutlineButton.js":
/*!*********************************************************!*\
  !*** ./src/app_demo/widget_examples/O/OutlineButton.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Colors,
    Row,
    ListView,
    MediaQuery,
    MainAxisAlignment,
    TextStyle,
    Center,
    Container,
    Navigator,
    ListTile,
    MaterialPageRoute,
    RaisedButton,
    BoxDecoration,
    BorderRadius,
    Radius,
    FlatButton,
    Expanded,
    IconButton,
    Icon,
    Icons,
    TextField,
    InputDecoration,
    SliverAppBar,
    NestedScrollView,
    FlexibleSpaceBar,
    Image,
    NotificationListener,
    ScrollNotification,
    Column,
    Offstage,
    Alignment,
    Opacity,
    OutlineButton,
    BorderSide,
  } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
  
  // 带边框的按钮
  class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
      super('ExampleWidget');
    }
    createState() {
      return new PageExampleOutlineButton();
    }
  }
  
  class PageExampleOutlineButton extends MXJSWidgetState {
    constructor() {
      super();
    }

    build(context) {
      let widget = new Scaffold({
        appBar: new AppBar({ title: new Text('OutlineButton') }),
        body: new ListView({
            children: [
                new ListTile({ title: new Text('OutlineButton用法与RaisedButton相同')}),
                new ListTile({ title: new Text('普通的Button')}),
                new Container({
                    child: new OutlineButton({
                    child: new Text("Button"),
                    onPressed: function() {

                    },
                }),
                }),
                
                new ListTile({ title: new Text('设置边框样式的Button')}),
                new Container({
                    width: 40,
                    child: new OutlineButton({
                    borderSide: new BorderSide({color: Colors.blue, width: 2}),
                    disabledBorderColor: Colors.black,
                    highlightedBorderColor: Colors.red,
                    child: new Text("Button"),
                    onPressed: function() {

                    },
                })
                })
                
            ]
        })
      });
      return widget;
    }
  }
  
  module.exports = {
    ExampleWidget,
  };
  

/***/ }),

/***/ "./src/app_demo/widget_examples/O/OverflowBox.js":
/*!*******************************************************!*\
  !*** ./src/app_demo/widget_examples/O/OverflowBox.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
  Center,
  Container,
  Navigator,
  ListTile,
  MaterialPageRoute,
  RaisedButton,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  IconButton,
  Icon,
  Icons,
  TextField,
  InputDecoration,
  SliverAppBar,
  NestedScrollView,
  FlexibleSpaceBar,
  Image,
  NotificationListener,
  ScrollNotification,
  Column,
  Offstage,
  Alignment,
  Opacity,
  OutlineButton,
  BorderSide,
  EdgeInsets,
  OverflowBox,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

// 溢出父容器显示
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOverflowBox();
  }
}

class PageExampleOverflowBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('OverflowBox') }),
      body: new Column({
        children: [
          new ListTile({ title: new Text('maxHeight:500') }),
          new ListTile({ title: new Text('Height:400') }),
          new Container({
            color: Colors.green,
            width: 200,
            height: 200,
            padding: EdgeInsets.all(5.0),
            child: new OverflowBox({
              alignment: Alignment.topLeft,
              maxHeight: 500,
              maxWidth: 300,
              child: new Container({
                color: Colors.pink,
                width: 400,
                height: 400,
              }),
            }),
          }),
          
        ],
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/P/Padding.js":
/*!***************************************************!*\
  !*** ./src/app_demo/widget_examples/P/Padding.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Colors,
    Row,
    ListView,
    MediaQuery,
    MainAxisAlignment,
    TextStyle,
    Center,
    Container,
    Navigator,
    ListTile,
    MaterialPageRoute,
    RaisedButton,
    BoxDecoration,
    BorderRadius,
    Radius,
    FlatButton,
    Expanded,
    IconButton,
    Icon,
    Icons,
    TextField,
    InputDecoration,
    SliverAppBar,
    NestedScrollView,
    FlexibleSpaceBar,
    Image,
    NotificationListener,
    ScrollNotification,
    Column,
    Offstage,
    Alignment,
    Opacity,
    OutlineButton,
    BorderSide,
    EdgeInsets,
    OverflowBox,
  } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
  
  // Padding提供设置内边距的组件，用法非常简单
  class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
      super('ExampleWidget');
    }
    createState() {
      return new PageExamplePadding();
    }
  }
  
  class PageExamplePadding extends MXJSWidgetState {
    constructor() {
      super();
    }
  
    build(context) {
      let widget = new Scaffold({
        appBar: new AppBar({ title: new Text('Padding') }),
        body: new Column({
          children: [
            new ListTile({ title: new Text('Padding四面等边距') }),
            
          ],
        }),
      });
      return widget;
    }
  }
  
  module.exports = {
    ExampleWidget,
  };

/***/ }),

/***/ "./src/app_demo/widget_examples/S/Scrollbar.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/S/Scrollbar.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, AppBar, Text, ListBody, Container, Center, SingleChildScrollView } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { Color, EdgeInsets, BoxDecoration, BorderRadius, Radius, Scrollbar, BoxShadow, Offset } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleSingleChildScrollView();
  }
}

class PageExampleSingleChildScrollView extends MXJSWidgetState {
  constructor() {
    super();
    this._tileSize = 24;
    this._tileSize1of3 = this._tileSize / 3;
    this._tileSize2of3 = (this._tileSize * 2) / 3;
    this._colorMin = 100;
    this._colorRange = 255 - this._colorMin;
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, this._tileSize - value) / this._tileSize1of3, 1.0);
    r = Math.floor((1.0 - r) * this._colorRange) + this._colorMin;
    var g = Math.min(Math.abs((value - this._tileSize1of3) / this._tileSize1of3), 1.0);
    g = Math.floor((1.0 - g) * this._colorRange) + this._colorMin;
    var b = Math.min(Math.abs((value - this._tileSize2of3) / this._tileSize1of3), 1.0);
    b = Math.floor((1.0 - b) * this._colorRange) + this._colorMin;
    var result = (0xFF << 24) | (r << 16) | (g << 8) | (b << 0);
    return new Color(result);
  }

  _containerList() {
    let list = [];
    list.push(
      new Center({
        child: new Container({
          margin: EdgeInsets.all(40.0),
          child: new Text('使用Scrollbar包裹滚动组件即可展示滚动条'),
        }),
      }),
    );
    for (let i = 0; i < this._tileSize; i++) {
      let c = new Container({
        margin: EdgeInsets.all(8.0),
        height: 64.0,
        width: 64.0,
        child: new Center({
          child: new Text((i + 1).toString()),
        }),
        decoration: new BoxDecoration({
          color: this._getColor(i),
          borderRadius: BorderRadius.all(Radius.circular(8.0)),
          boxShadow: [
            new BoxShadow({
                color: new Color(0x80000000),
                offset: new Offset(5.0, 5.0),
                blurRadius: 6.0,
            }),
        ],
        }),
      });
      list.push(c);
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Scrollbar'),
      }),
      body: new Scrollbar({
        isAlwaysShown: true,
        child: new SingleChildScrollView({
          child: new ListBody({
            children: this._containerList(),
          }),
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SingleChildScrollView.js":
/*!*****************************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SingleChildScrollView.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListBody,
  Container,
  Center,
  Axis,
  SingleChildScrollView,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { Color, EdgeInsets, BoxDecoration, BorderRadius, Radius, SizedBox, ClampingScrollPhysics } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleSingleChildScrollView();
  }
}

class PageExampleSingleChildScrollView extends MXJSWidgetState {
  constructor() {
    super();
    this._tileSize = 60;
    this._tileSize1of3 = this._tileSize / 3;
    this._tileSize2of3 = (this._tileSize * 2) / 3;
    this._colorMin = 85;
    this._colorRange = 255 - this._colorMin;
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, this._tileSize - value) / this._tileSize1of3, 1.0);
    r = Math.floor((1.0 - r) * this._colorRange) + this._colorMin;
    var g = Math.min(Math.abs((value - this._tileSize1of3) / this._tileSize1of3), 1.0);
    g = Math.floor((1.0 - g) * this._colorRange) + this._colorMin;
    var b = Math.min(Math.abs((value - this._tileSize2of3) / this._tileSize1of3), 1.0);
    b = Math.floor((1.0 - b) * this._colorRange) + this._colorMin;
    var result = (0xb0 << 24) | (r << 16) | (g << 8) | (b << 0);
    return new Color(result);
  }

  _containerList(rd = false) {
    let list = [];
    for (let i = 0; i < this._tileSize; i++) {
      let c = new Container({
        height: 64.0,
        width: 64.0,
        child: new Center({
          child: new Text((i + 1).toString()),
        }),
        decoration: new BoxDecoration({
          color: this._getColor(i),
          borderRadius: rd ? BorderRadius.all(Radius.circular(8.0)) : null,
        }),
      });
      list.push(c);
      if (rd == true) {
        list.push(new SizedBox({ height: 8.0 }));
      }
    }
    return list;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 4,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('SingleChildScrollView'),
          bottom: new TabBar({
            tabs: [
              new Tab({ text: '垂直方向' }),
              new Tab({ text: '物理效果' }),
              new Tab({ text: '项目间隔' }),
              new Tab({ text: '水平方向' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new SingleChildScrollView({
              child: new ListBody({
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              physics: new ClampingScrollPhysics(),
              child: new ListBody({
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              padding: EdgeInsets.all(8.0),
              child: new ListBody({
                children: this._containerList(true),
              }),
            }),
            new SingleChildScrollView({
              scrollDirection: Axis.horizontal,
              child: new ListBody({
                mainAxis: Axis.horizontal,
                children: this._containerList(),
              }),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SizeTransition.js":
/*!**********************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SizeTransition.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, Text, Animation } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { AppBar, ListView, ListTile, AnimationController, Duration, Tween, Offset, Container, SlideTransition, Colors, Center } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizeTransition();
  }
}

class PageExampleSizeTransition extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizeTransition') }),
      body: new Center({
        child: new Text("Tween()会默认生成Tween的类型,\n" +
        "而动画中需要Tween的指定类型\n" +
        "例如slideTransition中需要Tween<offset>,\n" +
        "scaleTransition中需要Tween<double>,\n" +
        "将生成的Tween直接传入\n" +
        "将会导致Tween并非Tween子类的错误"),
      }),
    });
    return widget;
  }
}


// module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SizedBox.js":
/*!****************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SizedBox.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, Text } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { AppBar, Center, Container, Colors, Size, SizedBox, BoxDecoration, ListView, Expanded, ListTile, Border } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizedBox();
  }
}

class PageExampleSizedBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizedBox') }),
      body: new ListView({
        children: [
          new SizedBox({ height: 20.0 }),
          new Center({
            child: new SizedBox({
              size: new Size(160.0, 160.0),
              child: new Container({
                decoration: new BoxDecoration({
                  border: Border.all({
                    color: Colors.black,
                    width: 2.0,
                  }),
                }),
                child: new Container({
                  color: Colors.green,
                  height: 80.0,
                  width: 240.0,
                }),
              }),
            }),
          }),
          new SizedBox({ height: 10.0 }),
          new ListTile({ title: new Text('SizedBox: 160x160, Container: 80x240') }),
        ],
      }),
    });
    return widget;
  }
}
module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SizedOverflowBox.js":
/*!************************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SizedOverflowBox.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, Text } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { AppBar, Center, Container, Colors, SizedOverflowBox, Size, AlignmentDirectional } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizedOverflowBox();
  }
}

class PageExampleSizedOverflowBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizedOverflowBox') }),
      body: new Center({
        child: new Container({
          color: Colors.blue,
          child: new SizedOverflowBox({
            alignment: AlignmentDirectional.bottomStart,
            size: new Size(160.0, 160.0),
            child: new Container({
              color: Colors.green,
              height: 80.0,
              width: 240.0,
            }),
          }),
        }),
      }),
    });
    return widget;
  }
}
module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SlideTransition.js":
/*!***********************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SlideTransition.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, Text, Animation } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { AppBar, ListView, ListTile, AnimationController, Duration, Tween, Offset, Container, SlideTransition, Colors, Center } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSlideTransition();
  }
}

class PageExampleSlideTransition extends MXJSWidgetState {
  constructor() {
    super();
  }

  // _normalSlideTransition() {
  //   var _controller = new AnimationController({
  //     duration: new Duration({ seconds: 1 }),
  //   });
  //   var _tween = new Tween({
  //     begin: new Offset(0.0, 0.0),
  //     end: new Offset(1.0, 0.0),
  //   });
  //   var _animation = new Animation({
  //     tween: _tween,
  //     controller: _controller,
  //   });
  //   return new SlideTransition({
  //     position: _animation,
  //     child: new Container({
  //       color: Colors.blue,
  //       height: 100.0,
  //       width: 100.0,
  //     }),
  //   });
  // }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SlideTransition') }),
      body: new Center({
        child: new Text("Tween()会默认生成Tween的类型,\n" +
        "而动画中需要Tween的指定类型\n" +
        "例如slideTransition中需要Tween<offset>,\n" +
        "scaleTransition中需要Tween<double>,\n" +
        "将生成的Tween直接传入\n" +
        "将会导致Tween并非Tween子类的错误"),
      }), 
      // body: new ListView({
      //   children: [
      //     new ListTile({ title: new Text('SlideTransition的基本使用') }),
      //     new Container({
      //       height: 100.0,
      //       child: this._normalSlideTransition(),
      //     }),
      //   ],
      // }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/Slider.js":
/*!**************************************************!*\
  !*** ./src/app_demo/widget_examples/S/Slider.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSWidgetState, MXJSStatefulWidget, Scaffold, Text } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { AppBar, ListView, ListTile, Slider, TextStyle, Color } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSlider();
  }
}

class PageExampleSlider extends MXJSWidgetState {
  constructor() {
    super();
    this._fontSizeMap = {
      12: '小',
      16: '中',
      20: '大',
      24: '特大',
    };
    this._currentValue = 50.0;
    this._fontSize = 16.0;
    this._colorfulValue = 50.0;
  }

  _text(text) {
    return new Text(text.toString(), {
      style: new TextStyle({ fontSize: this._fontSize }),
    });
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, 100.0 - value) / 33.3, 1.0);
    r = Math.floor((1.0 - r) * 205) + 50;
    var g = Math.min(Math.abs((value - 33.3) / 33.3), 1.0);
    g = Math.floor((1.0 - g) * 205) + 50;
    var b = Math.min(Math.abs((value - 66.7) / 33.3), 1.0);
    b = Math.floor((1.0 - b) * 205) + 50;
    var result = (r << 16) | (g << 8) | (b << 0);
    return result;
  }

  _valueChangeSlider() {
    return new Slider({
      min: 0.0,
      max: 100.0,
      value: this._currentValue,
      onChanged: function (value) {
        this.setState(
          function () {
            this._currentValue = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _fontChangedSlider() {
    return new Slider({
      min: 12.0,
      max: 24.0,
      divisions: 3,
      value: this._fontSize,
      onChanged: function (value) {
        this.setState(
          function () {
            this._fontSize = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _colorfulSlider() {
    return new Slider({
      min: 0.0,
      max: 100.0,
      divisions: 1000,
      activeColor: new Color(this._getColor(this._colorfulValue) | 0xb0000000),
      inactiveColor: new Color(this._getColor(this._colorfulValue) | 0x40000000),
      value: this._colorfulValue,
      label: this._colorfulValue.toFixed(1),
      onChanged: function (value) {
        this.setState(
          function () {
            this._colorfulValue = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Slider') }),
      body: new ListView({
        children: [
          new ListTile({
            title: this._text('连续滑块, 当前值为: ' + this._currentValue.toFixed(1)),
          }),
          this._valueChangeSlider(),
          new ListTile({
            title: this._text('离散滑块, 字体大小: ' + this._fontSizeMap[this._fontSize]),
          }),
          this._fontChangedSlider(),
          new ListTile({
            title: this._text('带颜色和标签的滑块'),
          }),
          this._colorfulSlider(),
        ],
      }),
    });
    return widget;
  }
}
module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/S/SliverAppBar.js":
/*!********************************************************!*\
  !*** ./src/app_demo/widget_examples/S/SliverAppBar.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  Text,
  CustomScrollView,
  Container,
  SliverList,
  Alignment,
  SliverChildBuilderDelegate,
  Color,
  Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { SliverAppBar, FlexibleSpaceBar, IconButton, Icon, Icons, BoxFit } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

// 通用的滑动结构
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSliverAppBar();
  }
}

class PageExampleSliverAppBar extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      body: new CustomScrollView({
        slivers: [
          new SliverAppBar({
            title: new Text('SliverAppBar'),
            expandedHeight: 200.0,
            flexibleSpace: new FlexibleSpaceBar({
              background: Image.asset('products/teaset.png', {
                mxPackage: 'flutter_gallery_assets',
                fit: BoxFit.cover,
              }),
            }),
            floating: false,
            pinned: true,
            snap: false,
            actions: [
              new IconButton({
                icon: new Icon(Icons.add_circle),
                onPressed: function () {},
              }),
            ],
          }),
          new SliverList({
            delegate: new SliverChildBuilderDelegate(
              function (context, index) {
                return new Container({
                  height: 80,
                  color: Color.fromRGBO(index * 16, index * 16, 255 - index * 16, 1.0),
                  alignment: Alignment.center,
                  child: new Text(index.toString()),
                });
              },
              { childCount: 15 },
            ),
          }),
        ],
      }),
    });
    return widget;
  }
}
module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/S/Stack.js":
/*!*************************************************!*\
  !*** ./src/app_demo/widget_examples/S/Stack.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { MXJSLog, runApp, MXJSFlutterApp, MXJSWidgetState, MXJSStatefulWidget, MXJSStatelessWidget, Scaffold, AppBar, Text } = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { Container, Stack, Positioned, Color, Alignment, BoxShadow, BoxDecoration, Offset, Colors } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  constructor() {
    super();
    this._currentStep = 0;
  }

  _randomColor() {
    do {
      var r = Math.ceil(Math.random() * 128) + 128;
      var g = Math.ceil(Math.random() * 128) + 128;
      var b = Math.ceil(Math.random() * 128) + 128;
    } while (r + g + b > 640);
    return Color.fromRGBO(r, g, b, 1.0);
  }

  _positionedBlock({ left, top, right, bottom, height, width, br = false }) {
    var text = '';
    if (left != null) text += 'left: ' + left + '\n';
    if (top != null) text += 'top: ' + top + '\n';
    if (right != null) text += 'right: ' + right + '\n';
    if (bottom != null) text += 'bottom: ' + bottom + '\n';
    if (height != null) text += 'height: ' + height + '\n';
    if (width != null) text += 'width: ' + width + '\n';
    return new Positioned({
      left: left,
      top: top,
      right: right,
      bottom: bottom,
      child: new Container({
        height: height,
        width: width,
        child: new Text(text),
        alignment: br ? Alignment.bottomRight : null,
        decoration: new BoxDecoration({
          color: this._randomColor(),
          boxShadow: [
            new BoxShadow({
              color: Colors.black54,
              offset: new Offset(5.0, 5.0),
              blurRadius: 5.0,
            }),
          ],
        }),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Stepper'),
      }),
      body: new Stack({
        children: [
          this._positionedBlock({ left: 30, top: 260, right: 30, bottom: 60 }),
          this._positionedBlock({ left: 30, top: 20, height: 150, width: 150 }),
          this._positionedBlock({ left: 90, top: 100, height: 150, width: 150 }),
          this._positionedBlock({ left: 120, top: 300, height: 150, width: 150, br: true }),
          this._positionedBlock({ left: 150, top: 180, height: 150, width: 150 }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/Stepper.js":
/*!***************************************************!*\
  !*** ./src/app_demo/widget_examples/S/Stepper.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  AppBar,
  ListView,
  Stepper,
  Step,
  StepState,
  Text,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");
const { Container } = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  constructor() {
    super();
    this._currentStep = 0;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Stepper'),
      }),
      body: new ListView({
        children: [
          new Stepper({
            currentStep: this._currentStep,
            onStepTapped: function (value) {
                this.setState(function () {
                    this._currentStep = value;
                }.bind(this))
            }.bind(this),
            onStepCancel: function() {},
            onStepContinue: function() {},
            steps: [
                new Step({
                    title: new Text("待办事项1"),
                    content: new Text("待办事项1的内容"),
                }),
                new Step({
                    title: new Text("待办事项2"),
                    subtitle: new Text("概述"),
                    content: new Text("待办事项2的详细内容"),
                }),
                new Step({
                    title: new Text("已完成的待办事项"),
                    content: new Text("这条待办事项已被完成"),
                    state: StepState.complete,
                }),
                new Step({
                    title: new Text("有错误的待办事项"),
                    content: new Text("这条待办事项貌似存在一些错误"),
                    state: StepState.error,
                }),
                new Step({
                    title: new Text("不可用的待办事项"),
                    subtitle: new Text("这条待办事项已经过期或无法完成"),
                    content: new Container(),
                    state: StepState.disabled,
                }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/S/Switch.js":
/*!**************************************************!*\
  !*** ./src/app_demo/widget_examples/S/Switch.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
    MXJSLog,
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MXJSStatelessWidget,
    MaterialApp,
    Scaffold,
    Container,
    ListTile,
    Center,
    Color,
    AppBar,
    SnackBar,
    Text,
    Icon,
    IconData,
    EdgeInsets,
    Colors,
    IconButton,
    FlatButton,
    RaisedButton,
    FloatingActionButton,
    Column,
    Row,
    DropdownButton,
    DropdownMenuItem,
    MainAxisAlignment,
    TextStyle,
    PopupMenuButton,
    PopupMenuItem,
    ButtonBar,
    MainAxisSize,
    TextDecoration,
    RichText,
    TextSpan,
    Expanded,
    FontWeight,
    TextFormField,
    InputDecoration,
    UnderlineInputBorder,
    TextInputType,
    SizedBox,
    TextField,
    TextEditingController,
    ListView,
    Slider,
    Icons,
    TextDecorationStyle,
    TextOverflow,
    Padding,
    AnimatedContainer,
    Duration,
    Switch,
    Image,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");

class ExampleWidget extends MXJSStatefulWidget {
    constructor() {
        super('ExampleWidget');
    }

    createState() {
        return new PageExampleSwitchState();
    }
}

class PageExampleSwitchState extends MXJSWidgetState {

    constructor() {
        super();
        this._selected1 = false;
        this._selected2 = false;
    }

    _changeState1() {
        this.setState(function () {
            this._selected1 = !this._selected1;
        }.bind(this));
    }

    _changeState2() {
        this.setState(function() {
            this._selected2 = !this._selected2;
        }.bind(this));
    }

    _getTextStyle() {
        return new TextStyle({
            color: Colors.blue,
            fontSize: 18,
            height: 1.2,
        });
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('PageExampleAbsorbPointer'),
            }),
            body: new Column({
                children: [
                    new SectionTitle('Switch基础用法'),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                            new Switch({
                                value: this._selected1,
                                onChanged: this._changeState1.bind(this),
                            }),
                            new Switch({
                                value: this._selected1,
                                onChanged: this._changeState1.bind(this),
                            }),
                            new Switch({
                                value: this._selected1,
                                onChanged: this._changeState1.bind(this),
                            }),
                            new Switch({
                                value: this._selected1,
                                onChanged: this._changeState1.bind(this),
                            }),
                            this._selected1 
                                ? new Text('true')
                                : new Text('false'),
                        ]
                    }),
                    new SectionTitle('Switch图片用法'),
                    new Row({
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                            new Text('TODO : ImageProvider'),
                            new Switch({
                                value: this._selected2,
                                onChanged: this._changeState2.bind(this),
                                activeColor: Colors.red,
                                // inactiveThumbImage: Colors.green,
                                // activeThumbImage: Image.network('https://picsum.photos/200'),
                            }),
                            this._selected2 
                                ? new Text('true') 
                                : new Text('false'),
                        ]
                    })
                ]
            })
        });
        return widget;
    }

}

module.exports = {
    ExampleWidget,
};

/***/ }),

/***/ "./src/app_demo/widget_examples/W/Wrap.js":
/*!************************************************!*\
  !*** ./src/app_demo/widget_examples/W/Wrap.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Chip,
  CircleAvatar,
  Card,
  Wrap,
  ListView,
  ListTile,
  EdgeInsets,
  Container,
  Axis,
  WrapAlignment,
  Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleWrap();
  }
}

class PageExampleWrap extends MXJSWidgetState {
  constructor() {
    super();
  }

  _chipList() {
    let colorList = [
      Colors.orange/*[400]*/,
      Colors.blue/*[400]*/,
      Colors.green/*[400]*/,
      Colors.pink/*[400]*/,
      Colors.purple/*[400]*/,
    ];
    let firstAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let chipText = ["Alpha", "Beta", "Chip", "Default", "Element", "Format", "Great", "Hero", "Index", "Javascript"];
    let list = [];
    for (var i = 0; i < 10; i++) {
      let w = new Chip({
        avatar: new CircleAvatar({
          backgroundColor: colorList[i % 5],
          foregroundColor: Colors.white,
          child: new Text(firstAlpha[i]),
        }),
        label: new Text(chipText[i]),
      });
      list.push(w);
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text("Wrap") }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new ListTile({ title: new Text("普通的Wrap") }),
          new Card({
            child: new Wrap({
              children: this._chipList(),
            })
          }),
          new ListTile({ title: new Text("增加了项边距的Wrap") }),
          new Card({
            child: new Wrap({
              spacing: 4.0,
              children: this._chipList(),
            })
          }),
          new ListTile({ title: new Text("垂直方向排列的Wrap") }),
          new Container({
            height: 220.0,
            child: new Card({
              child: new Wrap({
                direction: Axis.vertical,
                children: this._chipList(),
              })
            }),
          }),
          new ListTile({ title: new Text("每行都居中显示的Wrap") }),
          new Card({
            child: new Wrap({
              alignment: WrapAlignment.spaceAround,
              spacing: 4.0,
              children: this._chipList(),
            })
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/index.js":
/*!***********************************************!*\
  !*** ./src/app_demo/widget_examples/index.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
  Align,
  Stack,
  Alignment,
  GestureDetector,
  ScrollController
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../component/section_title.js */ "./src/app_demo/component/section_title.js");

let widgetExamples = [
  "Text",
]

class WidgetExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super("WidgetExamplesPage");
    this.widgetsArray = widgetsName.split(',');
    this.indexArray = this.calcIndexArray(this.widgetsArray);

    this.scrollController = new ScrollController();

  }

  calcIndexArray(widgetsArray) {

    let tempSet = new Set();
    for (let i = 1; i < widgetsArray.length; ++i) {
      let wName = widgetsArray[i];
      tempSet.add(wName.substring(0, 1));
    }

    return Array.from(tempSet);
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Widget Examples'),
      }),
      body: new Stack({
        children: [new Scrollbar({
          child: ListView.builder({
            controller: this.scrollController,
            itemCount: this.widgetsArray.length,
            itemBuilder: function (context, index) {
              return new ListViewItem(this.widgetsArray[index]);
            }.bind(this)
          })
        }),
        new Align({
          alignment: Alignment.centerRight,//new FractionalOffset(1.0, 0.5),
          child: new SizedBox({
            width: 25,
            child: new Padding({
              padding: EdgeInsets.only({ top: 20 }),
              child: ListView.builder({
                itemCount: this.indexArray.length,
                itemBuilder: function (context, index) {
                  let t = this.indexArray[index];
                  return new GestureDetector({
                    onTap: function () {
                      this.onIndexTap(index)
                    }.bind(this),
                    child: new Text(t)
                  });
                }.bind(this)
              })
            })
          })
        })
        ]
      })
    });
    return widget;
  }

  onIndexTap(index) {

    let prefix = this.indexArray[index];
    let count = 0;
    for (; count < this.widgetsArray.length; ++count) {

      if (this.widgetsArray[count].substring(0, 1) == prefix) {
        break;
      }
    }

    let h = count * 45;
    this.scrollController.jumpTo(h);
  }
}

class ListViewItem extends MXJSStatelessWidget {
  constructor(title) {
    super('ListViewItem');
    this.title = title;
    this.subtitle = "";

  }

  build(context) {

    let title = this.title;
    let prefix = title.substring(0, 1);
    let example = null;
    
    try {
      example = __webpack_require__("./src/app_demo/widget_examples sync recursive ^\\.\\/.*\\.js$")("./" + prefix + "/" + title + ".js");
    } catch (error) {
      
    }
   
    let c = Theme.of(context).primaryColor;

    if(!example){
      c = Colors.gray;
      title = this.title + " (未完成示例)"; 
    }

    return new Container({
      height: 45,
      child: new ListTile({
        title: new Text(title),
        //subtitle: new Text(this.subtitle),
        leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), { color: c}),
        //trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        onTap: function () {
          Navigator.push(context, new MaterialPageRoute({
            builder: function (context) {
              return new example.ExampleWidget ;
            }
          }))
        }.bind(this)
      })
    });
  }
}

let widgetsName = "AbsorbPointer,AlertDialog,Align,AnimatedBuilder,AnimatedContainer,AnimatedCrossFade,AnimatedDefaultTextStyle,AnimatedListState,AnimatedModalBarrier,AnimatedOpacity,AnimatedPhysicalModel,AnimatedPositioned,AnimatedSize,AnimatedWidget,AnimatedWidgetBaseState,Appbar,AspectRatio,AssetBundle,BackdropFilter,Baseline,BottomNavigationBar,BottomSheet,ButtonBar,Card,Center,Checkbox,Chip,CircularProgressIndicator,ClipOval,ClipPath,ClipRect,Column,ConstrainedBox,Container,CupertinoActionSheet,CupertinoActivityIndicator,CupertinoAlertDialog,CupertinoButton,CupertinoContextMenu,CupertinoDatePicker,CupertinoDialog,CupertinoDialogAction,CupertinoFullscreenDialogTransition,CupertinoNavigationBar,CupertinoPageScaffold,CupertinoPageTransition,CupertinoPicker,CupertinoPopupSurface,CupertinoScrollbar,CupertinoSegmentedControl,CupertinoSlider,CupertinoSlidingSegmentedControl,CupertinoSwitch,CupertinoTabBar,CupertinoTabScaffold,CupertinoTabView,CupertinoTextField,CupertinoTimerPicker,CustomMultiChildLayout,CustomPaint,CustomScrollView,CustomSingleChildLayout,DataTable,Date & Time Pickers,DecoratedBox,DecoratedBoxTransition,DefaultTextStyle,Dismissible,Divider,DragTarget,Draggable,Drawer,DropdownButton,ExcludeSemantics,Expanded,ExpansionPanel,FadeTransition,FittedBox,FlatButton,FloatingActionButton,Flow,FlutterLogo,Form,FormField,FractionalTranslation,FractionallySizedBox,FutureBuilder,GestureDetector,GridView,Hero,Icon,IconButton,IgnorePointer,Image,IndexedStack,IntrinsicHeight,IntrinsicWidth,LayoutBuilder,LimitedBox,LinearProgressIndicator,ListBody,ListTile,ListView,LongPressDraggable,MaterialApp,MediaQuery,MergeSemantics,Navigator,NestedScrollView,NotificationListener,Offstage,Opacity,OutlineButton,OverflowBox,Padding,PageView,Placeholder,PopupMenuButton,PositionedTransition,Radio,RaisedButton,RawImage,RawKeyboardListener,RefreshIndicator,RichText,RotatedBox,RotationTransition,Row,Scaffold,ScaleTransition,ScrollConfiguration,Scrollable,Scrollbar,Semantics,SimpleDialog,SingleChildScrollView,SizeTransition,SizedBox,SizedOverflowBox,SlideTransition,Slider,SliverAppBar,SnackBar,Stack,Stepper,StreamBuilder,Switch,TabBar,TabBarView,Table,Text,TextField,Theme,Tooltip,Transform,WidgetsApp,Wrap";

module.exports = {
  WidgetExamplesPage,
};


/***/ }),

/***/ "./src/app_demo/widget_examples/t/TabBar.js":
/*!**************************************************!*\
  !*** ./src/app_demo/widget_examples/t/TabBar.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  DefaultTabController,
  Scaffold,
  AppBar,
  Text,
  TabBar,
  Tab,
  TabBarView,
  Container,
  Center,
  EdgeInsets,
  Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 5,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Tabbar'),
          bottom: new TabBar({
            isScrollable: true,
            labelColor: Colors.purple,
            unselectedLabelColor: Colors.grey,
            labelPadding: EdgeInsets.symmetric({ horizontal: 48.0 }),
            tabs: [
              new Tab({ text: 'Tab 1' }),
              new Tab({ text: 'Tab 2' }),
              new Tab({ text: 'Tab 3' }),
              new Tab({ text: 'Tab 4' }),
              new Tab({ text: 'Tab 5' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              child: new Center({
                  child: new Text("Tab 1"),
              }),
            }),
            new Container({
              child: new Center({
                  child: new Text("Tab 2"),
              }),
            }),
            new Container({
              child: new Center({
                  child: new Text("Tab 3"),
              }),
            }),
            new Container({
              child: new Center({
                  child: new Text("Tab 4"),
              }),
            }),
            new Container({
              child: new Center({
                  child: new Text("Tab 5"),
              }),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/t/Table.js":
/*!*************************************************!*\
  !*** ./src/app_demo/widget_examples/t/Table.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Table,
  TableRow,
  TableCell,
  TableBorder,
  BorderSide,
  Colors,
  BoxDecoration,
  ListView,
  EdgeInsets,
  Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleTable();
  }
}

class PageExampleTable extends MXJSWidgetState {
  constructor() {
    super();
  }

  _randomName() {
    let name = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let length = Math.floor(Math.random() * 5) + 2;
    for (var i = 0; i < length; i++)
      name += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return name;
  }

  _randomPerson(index) {
    let numYear = (Math.floor(Math.random() * 10) + 2010).toString();
    let numRand = ("0000" + Math.floor(Math.random() * 1000)).slice(-4);
    let num = numYear + numRand;
    let name = this._randomName();
    let age = Math.floor(Math.random() * 30) + 21;
    let sex = Math.floor(Math.random() * 2) == 0 ? "男" : "女";
    let tableRow = new TableRow({
      decoration: new BoxDecoration({
        color: index % 2 == 0 ? Colors.white : Colors.grey/*[200]*/,
      }),
      children: [
        new TableCell({
          child: new Center({ child: new Text(num.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(name.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(sex.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(age.toString()) }),
        }),
      ],
    });
    return tableRow;
  }

  _createTable() {
    let list = [];
    let tableTitle = new TableRow({
      decoration: new BoxDecoration({
        color: Colors.blue/*[600]*/,
      }),
      children: [
        new TableCell({ child: new Center({ child: new Text("工号") }) }),
        new TableCell({ child: new Center({ child: new Text("姓名") }) }),
        new TableCell({ child: new Center({ child: new Text("性别") }) }),
        new TableCell({ child: new Center({ child: new Text("年龄") }) }),
      ],
    });
    list.push(tableTitle);
    for (let i = 0; i < 70; i++) {
      list.push(this._randomPerson(i));
    }
    console.log(list);
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text("Table") }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new Table({
            border: new TableBorder({
              top: new BorderSide({ width: 2.0, color: Colors.black }),
              bottom: new BorderSide({ width: 2.0, color: Colors.black }),
              left: new BorderSide({ width: 2.0, color: Colors.black }),
              right: new BorderSide({ width: 2.0, color: Colors.black }),
              horizontalInside: new BorderSide({
                width: 1.0,
                color: Colors.black54,
              }),
              verticalInside: new BorderSide({
                width: 1.0,
                color: Colors.black54,
              }),
            }),
            children: this._createTable(),
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/t/TextField.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/t/TextField.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  EdgeInsets,
  TextField,
  InputDecoration,
  Icon,
  Icons,
  OutlineInputBorder,
  BorderSide,
  BorderRadius,
  Radius,
  Color,
  Colors,
  Container,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleTextField();
  }
}

class PageExampleTextField extends MXJSWidgetState {
  constructor() {
    super();
    this._textFieldValue = "";
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text("TextField") }),
      body: new ListView({
        padding: EdgeInsets.symmetric({ horizontal: 25.0 }),
        children: [
          new ListTile({ title: new Text("基础的文本输入组件") }),
          new TextField(),
          new ListTile({ title: new Text("带有简单装饰的文本输入组件") }),
          new TextField({
            decoration: new InputDecoration({
              labelText: "用户名",
              icon: new Icon(Icons.person),
            }),
          }),
          new ListTile({ title: new Text("带有提示的文本输入组件") }),
          new TextField({
            decoration: new InputDecoration({
              hintText: "请输入用户名",
              helperText: "用户名长度为6-14个字母",
              icon: new Icon(Icons.person),
            }),
          }),
          new ListTile({ title: new Text("文本输入组件的错误提示") }),
          new TextField({
            decoration: new InputDecoration({
              errorText: "用户名输入错误",
              errorBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.red }),
              }),
            }),
          }),
          new ListTile({ title: new Text("文本输入组件的字数统计") }),
          new TextField({
            maxLength: 20,
            onChanged: function (value) {
              this.setState(
                function () {
                  this._textFieldValue = value;
                }.bind(this)
              );
            }.bind(this),
            decoration: new InputDecoration({
              counterText: this._textFieldValue.length + "/20",
            }),
          }),
          new ListTile({ title: new Text("自定义形状与选中的文本输入组件") }),
          new TextField({
            decoration: new InputDecoration({
              fillColor: new Color(0x40404040),
              filled: true,
              enabledBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.grey }),
                borderRadius: BorderRadius.all(Radius.circular(100.0)),
              }),
              focusedBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.blue }),
                borderRadius: BorderRadius.all(Radius.circular(12.0)),
              }),
            }),
          }),
          new ListTile({ title: new Text("密码输入组件") }),
          new TextField({
            obscureText: true,
            obscuringCharacter: "*",
            decoration: new InputDecoration({
              hintText: "请输入密码",
              icon: new Icon(Icons.lock),
            }),
          }),
          new ListTile({ title: new Text("自定义光标的文本输入组件") }),
          new TextField({
            cursorColor: Colors.green,
            cursorWidth: 1.0,
            decoration: new InputDecoration({
              hintText: "自定义光标",
            }),
          }),
          new Container({ height: 240.0 }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/t/Theme.js":
/*!*************************************************!*\
  !*** ./src/app_demo/widget_examples/t/Theme.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
  Card,
  EdgeInsets,
  ListTile,
  DefaultTabController,
  Tab,
  TabBar,
  TabBarView,
  Column,
  Icon,
  Icons,
  ButtonBar,
  FlatButton,
  FloatingActionButton,
  Theme,
  ThemeData,
  BottomNavigationBar,
  BottomNavigationBarItem,
  Colors,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleTheme();
  }
}

class PageExampleTheme extends MXJSWidgetState {
  constructor() {
    super();
    this._index = 0;
    this._themeList = [
      ThemeData.light(),
      ThemeData.dark(),
      new ThemeData({ primarySwatch: Colors.green }),
      new ThemeData({ primarySwatch: Colors.pink }),
      new ThemeData({ primarySwatch: Colors.orange }),
      new ThemeData({ primarySwatch: Colors.deepPurple }),
      new ThemeData({ primarySwatch: Colors.cyan }),
    ];
    this._themeNameList = [
      "蓝色",
      "夜晚",
      "绿色",
      "粉色",
      "橙色",
      "紫色",
      "天蓝",
    ];
    this._themeData = this._themeList[4];
  }

  _cardView() {
    return new ListView({
      padding: EdgeInsets.all(12.0),
      children: [
        new Card({
          child: new Column({
            mainAxisSize: MainAxisSize.min,
            children: [
              new ListTile({
                leading: new Icon(Icons.album),
                title: new Text("标题"),
                subtitle: new Text("描述描述描述描述"),
              }),
              new ButtonBar({
                children: [
                  new FlatButton({ child: new Text("分享") }),
                  new FlatButton({
                    child: new Text("关闭"),
                    onPressed: function () {},
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }

  _themeChangeTile(index) {
    return new ListTile({
      onTap: function () {
        this.setState(
          function () {
            this._themeData = this._themeList[index];
          }.bind(this)
        );
      }.bind(this),
      title: new Text(this._themeNameList[index]),
      leading:
        this._themeData == this._themeList[index]
          ? new Icon(Icons.check_box)
          : null,
    });
  }

  _themeChange() {
    let tiles = [];
    for (var i = 0; i < 7; i++) tiles.push(this._themeChangeTile(i));
    return new ListView({
      children: tiles,
    });
  }

  build(context) {
    let widget = new Theme({
      data: this._themeData,
      child: new DefaultTabController({
        length: 2,
        child: new Scaffold({
          appBar: new AppBar({
            title: new Text("Theme"),
            bottom: new TabBar({
              tabs: [new Tab({ text: "示例" }), new Tab({ text: "主题" })],
            }),
          }),
          body: new TabBarView({
            children: [this._cardView(), this._themeChange()],
          }),
          floatingActionButton: new FloatingActionButton({
            child: new Icon(Icons.add),
          }),
          bottomNavigationBar: new BottomNavigationBar({
            currentIndex: this._index,
            onTap: function (value) {
              this.setState(
                function () {
                  this._index = value;
                }.bind(this)
              );
            }.bind(this),
            items: [
              new BottomNavigationBarItem({
                title: new Text("首页"),
                icon: new Icon(Icons.home),
              }),
              new BottomNavigationBarItem({
                title: new Text("书籍"),
                icon: new Icon(Icons.book),
              }),
              new BottomNavigationBarItem({
                title: new Text("我的"),
                icon: new Icon(Icons.perm_identity),
              }),
            ],
          }),
        }),
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/t/Transform.js":
/*!*****************************************************!*\
  !*** ./src/app_demo/widget_examples/t/Transform.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSWidgetState,
  MXJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
  EdgeInsets,
  Container,
  Colors,
  Transform,
  Matrix4,
  Center,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super("ExampleWidget");
  }

  createState() {
    return new PageExampleTransform();
  }
}

class PageExampleTransform extends MXJSWidgetState {
  constructor() {
    super();
  }

  _dividerContainer(value = 120.0) {
    return new Container({ height: value });
  }

  _defaultContainer(text) {
    return new Container({
      child: new Container({
        height: 120.0,
        margin: EdgeInsets.symmetric({ horizontal: 80.0 }),
        color: Colors.blue,
        child: new Center({ child: new Text(text) }),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text("Transform") }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new Transform({
            transform: Matrix4.rotationX(0.8),
            child: this._defaultContainer("Matrix4.rotationX(0.8)"),
          }),
          this._dividerContainer(40.0),
          new Transform({
            transform: Matrix4.rotationY(0.8),
            child: this._defaultContainer("Matrix4.rotationY(0.8)"),
          }),
          this._dividerContainer(40.0),
          new Transform({
            transform: Matrix4.rotationZ(0.2),
            child: this._defaultContainer("Matrix4.rotationZ(0.2)"),
          }),
          this._dividerContainer(80.0),
          new Transform({
            transform: Matrix4.skew(0.2, 0.1),
            child: this._defaultContainer("Matrix4.skew(0.2, 0.1)"),
          }),
          this._dividerContainer(40.0),
        ],
      }),
    });
    return widget;
  }
}

module.exports = { ExampleWidget };


/***/ }),

/***/ "./src/app_demo/widget_examples/t/text.js":
/*!************************************************!*\
  !*** ./src/app_demo/widget_examples/t/text.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
  MXJSLog,
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MXJSStatelessWidget,
  Scaffold,
  ListTile,
  Color,
  AppBar,
  Text,
  EdgeInsets,
  Colors,
  TextStyle,
  TextDecoration,
  RichText,
  TextSpan,
  FontWeight,
  ListView,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

const { SectionTitle } = __webpack_require__(/*! ../../component/section_title.js */ "./src/app_demo/component/section_title.js");


class ExampleWidget extends MXJSStatelessWidget {
  constructor() {
    super("ExampleWidget");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("Text"),
      }),
      body: new ListView({
        children: [
          // new SectionTitle("普通文本"),
          new ListTile({
            title: new Text("设置文本颜色", {
              style: new TextStyle({
                color: Colors.orange,
              }),
            }),
          }),
          new SectionTitle("富文本"),
          new Padding({
            padding: EdgeInsets.all(10),
            child: new RichText({
              text: new TextSpan({
                style: new TextStyle({
                  color: new Color(0xffff8c00),
                  fontSize: 18.0,
                  decoration: TextDecoration.underline,
                  decorationColor: Colors.orange,
                  decorationStyle: TextDecorationStyle.dashed,
                }),
                text:
                  "超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text",
                children: [
                  new TextSpan({
                    text: " style  ",
                    style: new TextStyle({
                      color: Colors.red,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    }),
                  }),
                  new TextSpan({
                    text: "your text",
                    style: new TextStyle({
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    }),
                  }),
                ],
              }),
              overflow: TextOverflow.ellipsis,
              maxLines: 99,
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

module.exports = {
  ExampleWidget,
};


/***/ }),

/***/ "./src/app_demo/widget_examples sync recursive ^\\.\\/.*\\.js$":
/*!********************************************************!*\
  !*** ./src/app_demo/widget_examples sync ^\.\/.*\.js$ ***!
  \********************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./A/Align.js": "./src/app_demo/widget_examples/A/Align.js",
	"./A/AnimatedBuilder.js": "./src/app_demo/widget_examples/A/AnimatedBuilder.js",
	"./A/AnimatedContainer.js": "./src/app_demo/widget_examples/A/AnimatedContainer.js",
	"./A/AnimatedCrossFade.js": "./src/app_demo/widget_examples/A/AnimatedCrossFade.js",
	"./A/AnimatedDefaultTextStyle.js": "./src/app_demo/widget_examples/A/AnimatedDefaultTextStyle.js",
	"./A/AnimatedOpacity.js": "./src/app_demo/widget_examples/A/AnimatedOpacity.js",
	"./A/AnimatedPhysicalModel.js": "./src/app_demo/widget_examples/A/AnimatedPhysicalModel.js",
	"./A/AnimatedPositioned.js": "./src/app_demo/widget_examples/A/AnimatedPositioned.js",
	"./A/AnimatedSize.js": "./src/app_demo/widget_examples/A/AnimatedSize.js",
	"./A/Appbar.js": "./src/app_demo/widget_examples/A/Appbar.js",
	"./A/AspectRatio.js": "./src/app_demo/widget_examples/A/AspectRatio.js",
	"./B/Baseline.js": "./src/app_demo/widget_examples/B/Baseline.js",
	"./B/BottomNavigationBar.js": "./src/app_demo/widget_examples/B/BottomNavigationBar.js",
	"./B/ButtonBar.js": "./src/app_demo/widget_examples/B/ButtonBar.js",
	"./C/Card.js": "./src/app_demo/widget_examples/C/Card.js",
	"./C/Chip.js": "./src/app_demo/widget_examples/C/Chip.js",
	"./C/Column.js": "./src/app_demo/widget_examples/C/Column.js",
	"./C/Container.js": "./src/app_demo/widget_examples/C/Container.js",
	"./C/CupertinoActivityIndicator.js": "./src/app_demo/widget_examples/C/CupertinoActivityIndicator.js",
	"./C/CupertinoAlertDialog.js": "./src/app_demo/widget_examples/C/CupertinoAlertDialog.js",
	"./C/CupertinoButton.js": "./src/app_demo/widget_examples/C/CupertinoButton.js",
	"./C/CupertinoNavigationBar.js": "./src/app_demo/widget_examples/C/CupertinoNavigationBar.js",
	"./C/CupertinoPageScaffold.js": "./src/app_demo/widget_examples/C/CupertinoPageScaffold.js",
	"./C/CupertinoSlider.js": "./src/app_demo/widget_examples/C/CupertinoSlider.js",
	"./C/CupertinoSwitch.js": "./src/app_demo/widget_examples/C/CupertinoSwitch.js",
	"./C/CupertinoTabBar.js": "./src/app_demo/widget_examples/C/CupertinoTabBar.js",
	"./C/CupertinoTabScaffold.js": "./src/app_demo/widget_examples/C/CupertinoTabScaffold.js",
	"./C/CustomMultiChildLayout.js": "./src/app_demo/widget_examples/C/CustomMultiChildLayout.js",
	"./C/CustomScrollView.js": "./src/app_demo/widget_examples/C/CustomScrollView.js",
	"./D/DecoratedBox.js": "./src/app_demo/widget_examples/D/DecoratedBox.js",
	"./D/DecoratedBoxTransition.js": "./src/app_demo/widget_examples/D/DecoratedBoxTransition.js",
	"./D/DefaultTextStyle.js": "./src/app_demo/widget_examples/D/DefaultTextStyle.js",
	"./D/DropdownButton.js": "./src/app_demo/widget_examples/D/DropdownButton.js",
	"./E/Expanded.js": "./src/app_demo/widget_examples/E/Expanded.js",
	"./F/FittedBox.js": "./src/app_demo/widget_examples/F/FittedBox.js",
	"./F/FlatButton.js": "./src/app_demo/widget_examples/F/FlatButton.js",
	"./F/FloatingActionButton.js": "./src/app_demo/widget_examples/F/FloatingActionButton.js",
	"./F/FlutterLogo.js": "./src/app_demo/widget_examples/F/FlutterLogo.js",
	"./F/FractionallySizedBox.js": "./src/app_demo/widget_examples/F/FractionallySizedBox.js",
	"./G/GestureDetector.js": "./src/app_demo/widget_examples/G/GestureDetector.js",
	"./G/GridView.js": "./src/app_demo/widget_examples/G/GridView.js",
	"./H/Hero.js": "./src/app_demo/widget_examples/H/Hero.js",
	"./I/IconButton.js": "./src/app_demo/widget_examples/I/IconButton.js",
	"./I/Image.js": "./src/app_demo/widget_examples/I/Image.js",
	"./I/IndexedStack.js": "./src/app_demo/widget_examples/I/IndexedStack.js",
	"./I/IntrinsicHeight.js": "./src/app_demo/widget_examples/I/IntrinsicHeight.js",
	"./I/IntrinsicWidth.js": "./src/app_demo/widget_examples/I/IntrinsicWidth.js",
	"./L/LimitedBox.js": "./src/app_demo/widget_examples/L/LimitedBox.js",
	"./L/ListBody.js": "./src/app_demo/widget_examples/L/ListBody.js",
	"./L/ListTile.js": "./src/app_demo/widget_examples/L/ListTile.js",
	"./L/ListView.js": "./src/app_demo/widget_examples/L/ListView.js",
	"./M/MaterialApp.js": "./src/app_demo/widget_examples/M/MaterialApp.js",
	"./M/MediaQuery.js": "./src/app_demo/widget_examples/M/MediaQuery.js",
	"./N/Navigator.js": "./src/app_demo/widget_examples/N/Navigator.js",
	"./N/NestedScrollView.js": "./src/app_demo/widget_examples/N/NestedScrollView.js",
	"./N/NotificationListener.js": "./src/app_demo/widget_examples/N/NotificationListener.js",
	"./O/Offstage.js": "./src/app_demo/widget_examples/O/Offstage.js",
	"./O/Opacity.js": "./src/app_demo/widget_examples/O/Opacity.js",
	"./O/OutlineButton.js": "./src/app_demo/widget_examples/O/OutlineButton.js",
	"./O/OverflowBox.js": "./src/app_demo/widget_examples/O/OverflowBox.js",
	"./P/Padding.js": "./src/app_demo/widget_examples/P/Padding.js",
	"./S/Scrollbar.js": "./src/app_demo/widget_examples/S/Scrollbar.js",
	"./S/SingleChildScrollView.js": "./src/app_demo/widget_examples/S/SingleChildScrollView.js",
	"./S/SizeTransition.js": "./src/app_demo/widget_examples/S/SizeTransition.js",
	"./S/SizedBox.js": "./src/app_demo/widget_examples/S/SizedBox.js",
	"./S/SizedOverflowBox.js": "./src/app_demo/widget_examples/S/SizedOverflowBox.js",
	"./S/SlideTransition.js": "./src/app_demo/widget_examples/S/SlideTransition.js",
	"./S/Slider.js": "./src/app_demo/widget_examples/S/Slider.js",
	"./S/SliverAppBar.js": "./src/app_demo/widget_examples/S/SliverAppBar.js",
	"./S/Stack.js": "./src/app_demo/widget_examples/S/Stack.js",
	"./S/Stepper.js": "./src/app_demo/widget_examples/S/Stepper.js",
	"./S/Switch.js": "./src/app_demo/widget_examples/S/Switch.js",
	"./W/Wrap.js": "./src/app_demo/widget_examples/W/Wrap.js",
	"./index.js": "./src/app_demo/widget_examples/index.js",
	"./t/TabBar.js": "./src/app_demo/widget_examples/t/TabBar.js",
	"./t/Table.js": "./src/app_demo/widget_examples/t/Table.js",
	"./t/TextField.js": "./src/app_demo/widget_examples/t/TextField.js",
	"./t/Theme.js": "./src/app_demo/widget_examples/t/Theme.js",
	"./t/Transform.js": "./src/app_demo/widget_examples/t/Transform.js",
	"./t/text.js": "./src/app_demo/widget_examples/t/text.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app_demo/widget_examples sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/app_demo/zhihu/global_config.js":
/*!*********************************************!*\
  !*** ./src/app_demo/zhihu/global_config.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//global_config.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp,
  ThemeData,
  Color,
  Colors
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

class GlobalConfig {
    static get themeData() {
      return new ThemeData({brightness: Brightness.light});
    } 

    static get searchBackgroundColor() {
      return new Color(0xFFEEEEEE);
    }
    
    static get cardBackgroundColor() {
      return Colors.white;
    }

    static get fontColor() {
      return new Color(0xFF444444);
    }
}

module.exports = { GlobalConfig };


/***/ }),

/***/ "./src/app_demo/zhihu/home/article.js":
/*!********************************************!*\
  !*** ./src/app_demo/zhihu/home/article.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//article.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class Article {
    constructor(
        headUrl,
        user,
        action,
        time,
        title,
        mark,
        agreeNum,
        commentNum, 
        {
        imgUrl
        } = {}) {
        this.headUrl = headUrl;
        this.user = user;
        this.action = action;
        this.time = time;
        this.title = title;
        this.mark = mark;
        this.agreeNum = agreeNum;
        this.commentNum = commentNum;
        this.imgUrl = imgUrl;
    }
}

let articleList = [
    new Article(
        "https://pic3.zhimg.com/50/2b8be8010409012e7cdd764e1befc4d1_s.jpg",
        "learner",
        "赞同了回答",
        "2小时前",
        "在三体中，罗辑为什么会把控制权交给程心，难道他没有推测过后果吗？",
        "因为罗辑遵守了人类伦理。这个伦理大概就叫民主。 大刘其实是个典型的精英主义者，在他笔下...",
        32, 
        10,
        {imgUrl: "https://pic2.zhimg.com/50/v2-710b7a6fea12a7203945b666790b7181_hd.jpg"}
    ),
    new Article(
      "https://pic4.zhimg.com/50/v2-9a3cb5d5ee4339b8cf4470ece18d404f_s.jpg",
      "learner",
      "回答了问题",
      "5小时前",
      "我的手机系统是安卓。无意间发现自己的屏幕被人监控，请问怎样才能彻底摆脱被监控的处境呢？",
      "检查一下你手机里是不是被人装了什么软件，把你不认识的非系统软件删掉。不会删就去找手机店里的小哥，为什么这么多人...",
      38, 
      13
    ),
    new Article(
        "https://pic3.zhimg.com/50/v2-8943c20cecab028e19644cccf0f3a38b_s.jpg",
        "learner",
        "回答了问题",
        "7小时前",
        "如何评价2018年安徽省程序设计竞赛？",
        "带着政治任务和压力去打了比赛，所幸最后被高中生抬了一手。榜可以见另外某回答。大概经历就是前...",
        38, 
        13,
        {imgUrl: "https://pic4.zhimg.com/v2-a7493d69f0d8f849c6345f8f693454f3_200x112.jpg"}
    ),
    new Article(
        "https://pic3.zhimg.com/50/v2-8943c20cecab028e19644cccf0f3a38b_s.jpg",
        "learner",
        "回答了问题",
        "7小时前",
        "极致的文明是什么样的？会真的像黑暗森林法则一样对其他低等生物进行屠杀吗？",
        "最喜欢的人物是章北海和维德但最喜欢的情节却是这一段，地球上的人承诺给他们鲜花和荣誉...",
        38,
        13,
        {imgUrl: "https://pic3.zhimg.com/v2-b67be50be51e2e6d6112a64528683b09_b.jpg"}
    )
  ];

module.exports = { Article, articleList };



/***/ }),

/***/ "./src/app_demo/zhihu/home/ask_page.js":
/*!*********************************************!*\
  !*** ./src/app_demo/zhihu/home/ask_page.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//ask_page.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MaterialApp,
  Scaffold,
  AppBar,
  Container,
  Row,
  FlatButton,
  Text,
  Expanded,
  TextStyle,
  Colors,
  TextField,
  Icon,
  IconData,
  EdgeInsets,
  Column,
  SingleChildScrollView,
  InputDecoration,
  Navigator
  
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../../zhihu/global_config.js */ "./src/app_demo/zhihu/global_config.js");


class AskPage extends MXJSStatefulWidget {
    constructor() {
        super('AskPage');
    }
  
    createState() {
        return new AskPageState(this);
    }
}

class AskPageState extends MXJSWidgetState {

    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: new Container({
                        child: new Row({
                            children: [
                                FlatButton.icon({
                                    onPressed:function(){
                                        Navigator.pop(context);
                                    },
                                    icon: new Icon(new IconData(0xe14c, {fontFamily: 'MaterialIcons'})),
                                    label: new Text("")
                                }),
                                new Expanded({
                                    child: new Container({
                                        child: new Text("提问")
                                    }),
                                }),
                                new FlatButton({
                                    onPressed:function(){

                                    },
                                    child: new Text("下一步", {style: new TextStyle({
                                        color: Colors.black
                                    })})
                                })
                            ]
                        })
                    })
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new TextField({
                                    decoration: new InputDecoration({
                                        hintText: "请输入标题",
                                        hintStyle: new TextStyle({
                                            color: Colors.black,
                                        })
                                    })
                                }),
                                margin: EdgeInsets.all(16.0)
                            })
                        ]
                    })
                })
            })
        })
        return widget;
    }
}

module.exports = { AskPage };



/***/ }),

/***/ "./src/app_demo/zhihu/home/follow.js":
/*!*******************************************!*\
  !*** ./src/app_demo/zhihu/home/follow.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//follow.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  Container,
  Row,
  FlatButton,
  Text,
  Expanded,
  TextStyle,
  Colors,
  AspectRatio,
  BoxDecoration,
  DecorationImage,
  NetworkImage,
  Rect,
  Border,
  BorderRadius,
  Radius,
  Color,
  Icon,
  IconData,
  EdgeInsets,
  Column,
  FontWeight,
  PopupMenuButton,
  PopupMenuItem,
  SingleChildScrollView,
  Alignment,
  CircleAvatar,
  MaterialPageRoute,
  Navigator
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {articleList} = __webpack_require__(/*! ./article.js */ "./src/app_demo/zhihu/home/article.js");
let {ReplyPage} = __webpack_require__(/*! ./reply_page.js */ "./src/app_demo/zhihu/home/reply_page.js");

class Follow extends MXJSStatefulWidget {
    constructor(){
        super("Follow");
    }
  
    createState() {
        return new FollowState(this);
    }
}

class FollowState extends MXJSWidgetState {

    wordsCard(context,article){
        let markWidget;
        if (article.imgUrl == null) {
            markWidget = new Text(article.mark, {
                style: new TextStyle({
                    height: 1.3,
                    color: GlobalConfig.fontColor
                })
            });
        } else {
            markWidget = new Row({
                children: [
                    new Expanded({
                        flex: 2,
                        child: new Container({
                            child: new Text(article.mark, {
                                style: new TextStyle({
                                    height: 1.3,
                                    color: GlobalConfig.fontColor
                                })
                            })
                        })
                    }),
                    new Expanded({
                        flex: 1,
                        child: new AspectRatio({
                            aspectRatio: 3.0 / 2.0,
                            child: new Container({
                                foregroundDecoration: new BoxDecoration({
                                    image: new DecorationImage({
                                        image: new NetworkImage(article.imgUrl),
                                        centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                    }),
                                    borderRadius: BorderRadius.all(Radius.circular(6.0))
                                })
                            })
                        })
                    })
                ]
            });
        }
        return new Container({
            color: new Color(0xFFFFFFFF),
            margin: EdgeInsets.only({
                top: 5.0,
                bottom: 5.0
            }),
            child: new FlatButton({
                onPressed:function(){
             
                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new ReplyPage;
                        }
                    }))
                    
                },
                child: new Column({
                    children: [
                        new Container({
                            child: new Row({
                                children: [
                                    new Container({
                                        child: new CircleAvatar({
                                            backgroundImage: new NetworkImage(article.headUrl),
                                            radius: 11.0
                                        })
                                    }),
                                    new Text(" " + article.user + " " + article.action + " . " + article.time, {
                                        style: new TextStyle({
                                            color: GlobalConfig.fontColor
                                        })
                                    })
                                ]
                            }),
                            padding: EdgeInsets.only({top: 10.0})
                        }),
                        new Container({
                            child: new Text(article.title, {
                                style: new TextStyle({
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16.0, 
                                    height: 1.3,
                                    color: Colors.black
                                })
                            }),
                            margin: EdgeInsets.only({top: 6.0, bottom: 2.0}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: markWidget,
                            margin: EdgeInsets.only({top: 6.}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: new Row({
                                children: [
                                    new Expanded({
                                        child: new Text(article.agreeNum.toString() + " 赞同 · " + article.commentNum.toString() + "评论", {
                                            style: new TextStyle({
                                                color: GlobalConfig.fontColor
                                            })
                                        })
                                    }),
                                    new PopupMenuButton({
                                        icon: new Icon(new IconData(0xe260, {fontFamily: 'MaterialIcons'}), {
                                            color: GlobalConfig.fontColor
                                        }),
                                        itemBuilder: function(context){
                                            let list = [
                                                new PopupMenuItem({
                                                    value: '选项一的值',
                                                    child: new Text('屏蔽这个问题')
                                                }),
                                                new PopupMenuItem({
                                                    value: '选项二的值',
                                                    child: new Text('取消关注 learner')
                                                }),
                                                new PopupMenuItem({
                                                    value: '选项三的值',
                                                    child: new Text("举报")
                                                })
                                            ];
                                            return list;
                                        }
                                    })
                                ]
                            }),
                            padding: EdgeInsets.only()
                        })
                    ]
                })
            })
        });
    }

    billboard(context){
        return new Container({
            margin: EdgeInsets.only({
                top: 5.0, 
                bottom: 5.0
            }),
            color: GlobalConfig.cardBackgroundColor,
            child: new FlatButton({
                onPressed: function(){

                },
                child: new Column({
                    children:[
                        new Container({
                            child: new Row({
                                children: [
                                    new Container({
                                        child: new CircleAvatar({
                                            backgroundImage: new NetworkImage("https://pic1.zhimg.com/50/v2-0c9de2012cc4c5e8b01657d96da35534_s.jpg"),
                                            radius: 11.0
                                        })
                                    }),
                                    new Text("  对啊网", {
                                        style: new TextStyle({
                                            color: GlobalConfig.fontColor
                                        })
                                    })
                                ]
                            }),
                            padding: EdgeInsets.only({top: 10.0})
                        }),
                        new Container({
                            child: new Text("考过CPA，非名牌大学也能进名企", {
                                style: new TextStyle({
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16.0, 
                                    height: 1.3,
                                    color: GlobalConfig.fontColor
                                })
                            }),
                            margin: EdgeInsets.only({top: 6.0, bottom: 2.0}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: new AspectRatio({
                                aspectRatio: 3.0 / 1.0,
                                child: new Container({
                                    foregroundDecoration: new BoxDecoration({
                                        image: new DecorationImage({
                                            image: new NetworkImage("https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg"),
                                            centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0),
                                        }),
                                        borderRadius: BorderRadius.all(Radius.circular(6.0))
                                    })
                                })
                            }),
                            margin: EdgeInsets.only({top: 6.0, bottom: 14.0}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: new Text("还在羡慕别人的好工作？免费领取价值1980元的注册会计师课程，为自己充电！", {
                                style: new TextStyle({
                                    height: 1.3,
                                    color: GlobalConfig.fontColor
                                })
                            }),
                            padding: EdgeInsets.only({bottom: 8.0})
                        }),
                        new Container({
                            child: new Row({
                                children: [
                                    new Container({
                                        child: new Text("广告", {
                                            style: new TextStyle({
                                                fontSize: 10.0,
                                                color: GlobalConfig.fontColor
                                            })
                                        }),
                                        decoration: new BoxDecoration({
                                            border: Border.all({
                                                color: GlobalConfig.fontColor
                                            }),
                                            borderRadius: BorderRadius.all(Radius.circular(2.0))
                                        }),
                                        padding: EdgeInsets.only({top: 2.0, bottom: 2.0, left: 3.0, right: 3.0})
                                    }),
                                    new Expanded({
                                        child: new Text("  查看详情", {
                                            style: new TextStyle({
                                                color: GlobalConfig.fontColor
                                            })
                                        })
                                    }),
                                    new Icon(new IconData(0xe14c, {fontFamily: 'MaterialIcons'}), {
                                        color: GlobalConfig.fontColor
                                    })
                                ]
                            }),
                            padding: EdgeInsets.only({bottom: 10.0}),
                        })
                    ]
                })
            })
        });
    }

    build(context){
        let widget = new SingleChildScrollView({
            child: new Container({
                margin: EdgeInsets.only({top: 5.0}),
                child: new Column({
                    children: [
                        this.wordsCard(context,articleList[0]),
                        this.wordsCard(context,articleList[1]),
                        this.wordsCard(context,articleList[2]),
                        this.billboard(context),
                        this.wordsCard(context,articleList[3])
                    ]
                })
            })
        });
        return widget;
    }
}

module.exports = { Follow };



/***/ }),

/***/ "./src/app_demo/zhihu/home/home_page.js":
/*!**********************************************!*\
  !*** ./src/app_demo/zhihu/home/home_page.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//HomePage.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    BoxDecoration,
    BorderSide,
    BorderRadius,
    Radius,
    Icon,
    IconData,
    BorderDirectional,
    DefaultTabController,
    TabBar,
    Tab,
    TabBarView,
    Key,
    MaterialPageRoute,
    Navigator
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let { GlobalConfig } = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let { Follow } = __webpack_require__(/*! ./follow.js */ "./src/app_demo/zhihu/home/follow.js");
let { Recommend } = __webpack_require__(/*! ./recommend.js */ "./src/app_demo/zhihu/home/recommend.js");
let { Hot } = __webpack_require__(/*! ./hot.js */ "./src/app_demo/zhihu/home/hot.js");
let { SearchPage } = __webpack_require__(/*! ./search_page.js */ "./src/app_demo/zhihu/home/search_page.js");
let { AskPage } = __webpack_require__(/*! ./ask_page.js */ "./src/app_demo/zhihu/home/ask_page.js");

class HomePage extends MXJSStatefulWidget {
    constructor() {
        super("HomePage", { key: new Key("HomePage") });
    }

    createState() {
        return new HomePageState(this);
    }
}

class HomePageState extends MXJSWidgetState {

    barSearch(context) {
        return new Container({
            child: new Row({
                children: [
                    new Expanded({
                        child: FlatButton.icon({
                            onPressed: function () {
                       
                                Navigator.push(context, new MaterialPageRoute({
                                    builder: function (context) {
                                        return new SearchPage;
                                    }
                                }))
                            },
                            icon: new Icon(new IconData(0xe8b6, { fontFamily: 'MaterialIcons' }), {
                                color: GlobalConfig.fontColor,
                                size: 16.0
                            }),
                            label: new Text("坚果R1摄像头损坏", {
                                style: new TextStyle({
                                    color: GlobalConfig.fontColor
                                })
                            })
                        })
                    }),
                    new Container({
                        decoration: new BoxDecoration({
                            border: new BorderDirectional({
                                start: new BorderSide({
                                    color: GlobalConfig.fontColor,
                                    width: 1.0
                                })
                            })
                        }),
                        height: 14.0,
                        width: 1.0
                    }),
                    new Container({
                        child: FlatButton.icon({
                            onPressed: function () {
         
                                Navigator.push(context, new MaterialPageRoute({
                                    builder: function (context) {
                                        return new AskPage;
                                    }
                                }))
                            },
                            icon: new Icon(new IconData(0xe22b, { fontFamily: 'MaterialIcons' }), {
                                color: GlobalConfig.fontColor,
                                size: 16.0
                            }),
                            label: new Text("提问", {
                                style: new TextStyle({
                                    color: GlobalConfig.fontColor
                                })
                            })
                        })
                    })
                ]
            }),
            decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                color: GlobalConfig.searchBackgroundColor
            })
        })
    }

    build(context) {
        let widget = new DefaultTabController({
            length: 3,
            child: new Scaffold({
                appBar: new AppBar({
                    title: this.barSearch(context),
                    bottom: new TabBar({
                        labelColor: Colors.blue,
                        indicatorColor: Colors.blue,
                        unselectedLabelColor: Colors.black,
                        tabs: [
                            new Tab({ text: "关注" }),
                            new Tab({ text: "推荐" }),
                            new Tab({ text: "热榜" })
                        ]
                    }),
                    backgroundColor: Colors.white
                }),
                body: new TabBarView({
                    children: [
                        new Follow(),
                        new Recommend(),
                        new Hot()
                    ]
                })
            })
        });
        return widget;
    }
}

module.exports = { HomePage };



/***/ }),

/***/ "./src/app_demo/zhihu/home/hot.js":
/*!****************************************!*\
  !*** ./src/app_demo/zhihu/home/hot.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//hot.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    AspectRatio,
    BoxDecoration,
    BorderSide,
    DecorationImage,
    NetworkImage,
    Rect,
    BorderRadius,
    Radius,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    FontWeight,
    SingleChildScrollView,
    Alignment,
    MaterialPageRoute,
    Navigator
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {questionList} = __webpack_require__(/*! ./question.js */ "./src/app_demo/zhihu/home/question.js");
let {QuestionPage} = __webpack_require__(/*! ./question_page.js */ "./src/app_demo/zhihu/home/question_page.js");

class Hot extends MXJSStatefulWidget {
    constructor(){
        super("Hot");
    }
  
    createState() {
        return new HotState(this);
    }
}

class HotState extends MXJSWidgetState {
    
    hotCard(context,question){
        return new Container({
            decoration: new BoxDecoration({
                color: GlobalConfig.cardBackgroundColor,
                border: new BorderDirectional({
                    bottom: new BorderSide({
                        color: Colors.black12,
                        width: 1.0
                    })
                })
            }),
            child: new FlatButton({
                onPressed:function(){
     
                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new QuestionPage;
                        }
                    }))
                },
                child: new Container({
                    padding: EdgeInsets.only({top: 8.0, bottom: 8.0}),
                    child: new Row({
                        children: [
                            new Expanded({
                                flex: 1,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(
                                                question.order,{
                                                style: new TextStyle({
                                                    color: question.order <= "03" ? Colors.red : Colors.yellow,
                                                    fontSize: 18.0
                                                })
                                            }),
                                            alignment: Alignment.topLeft
                                        }),
                                        question.rise != null ? 
                                        new Row({
                                            children: [
                                                new Icon(new IconData(0xe5d8, {fontFamily: 'MaterialIcons'}),{
                                                    color: Colors.red, 
                                                    size: 10.0
                                                }),
                                                new Text(question.rise, {
                                                    style: new TextStyle({
                                                        color: Colors.red, 
                                                        fontSize: 10.0
                                                    })
                                                })
                                            ]
                                        })
                                        : new Container() 
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 6,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(question.title,{
                                                style: new TextStyle({
                                                    fontWeight: FontWeight.bold, 
                                                    fontSize: 16.0, 
                                                    height: 1.1, 
                                                    color: Colors.black
                                                })
                                            }),
                                            padding: EdgeInsets.only({bottom: 10.0,right: 4.0}),
                                            alignment: Alignment.topLeft
                                        }),
                                        question.mark != null ?
                                        new Container({
                                            child: new Text(question.mark, {
                                                style: new TextStyle({color: GlobalConfig.fontColor})
                                            }),
                                            alignment: Alignment.topLeft,
                                            padding: EdgeInsets.only({bottom: 8.0,right: 4.0})
                                        }) : 
                                        new Container(),
                                        new Container({
                                            child: new Text(question.hotNum, {
                                                style: new TextStyle({color: GlobalConfig.fontColor})
                                            }),
                                            alignment: Alignment.topLeft
                                        })
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 3,
                                child: new AspectRatio({
                                    aspectRatio: 3.0 / 2.0,
                                    child: new Container({
                                        foregroundDecoration:new BoxDecoration({
                                            image: new DecorationImage({
                                                image: new NetworkImage(question.imgUrl),
                                                centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                            }),
                                            borderRadius: BorderRadius.all(Radius.circular(6.0))
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    }

    build(context){
        let widget = new SingleChildScrollView({
            child: new Container({
                margin: EdgeInsets.only({top: 5.0}),
                child: new Column({
                    children: [
                        this.hotCard(context,questionList[0]),
                        this.hotCard(context,questionList[1]),
                        this.hotCard(context,questionList[2]),
                        this.hotCard(context,questionList[3]),
                        this.hotCard(context,questionList[4])
                    ]
                })
            })
        });
        return widget;
    }
}

module.exports = { Hot };



/***/ }),

/***/ "./src/app_demo/zhihu/home/question.js":
/*!*********************************************!*\
  !*** ./src/app_demo/zhihu/home/question.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//question.js 正式开始，😝

let {
  runApp,
  MXJSFlutterApp
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

class Question {
    constructor(
        order,
        title,
        hotNum,
        imgUrl,
        {mark,
        rise}= {}
    ) {
        this.order = order;
        this.title = title;
        this.hotNum = hotNum;
        this.imgUrl = imgUrl;
        this.mark = mark;
        this.rise = rise;
    }
}

let questionList = [
    new Question("01", "了不起的新时代，世界竞争中的中国制造", "4427 万热度", "https://pic2.zhimg.com/50/v2-710b7a6fea12a7203945b666790b7181_hd.jpg"),
    new Question("02", "一个女生怎样才算见过世面？", "4157 万热度", "https://pic3.zhimg.com/50/v2-56dca99cd8718f9303d43b3015342ba7_hd.jpg", {rise: "3", mark: "所谓世面，就是世界的每一面"}),
    new Question("03", "如果朱标没死，削藩的话，朱棣会造反吗？", "4009 万热度", "https://pic4.zhimg.com/v2-095d2b48970889b108247e6d2dd0fa6b_b.jpg"),
    new Question("04", "如何编译 Linux 内核？", "3110 万热度", "https://pic3.zhimg.com/80/v2-1ea1b0cf80c85b88893b2b97a94d7e71_hd.jpg", {mark: "内核？呵呵"}),
    new Question("05", "如何看待将神话故事拍成电影这件事？", "2119 万热度", "https://pic4.zhimg.com/50/v2-267b1dda62f770bd2bd13cb545117b78_hd.jpg", {rise: "3"})
];

module.exports = { Question, questionList };


/***/ }),

/***/ "./src/app_demo/zhihu/home/question_page.js":
/*!**************************************************!*\
  !*** ./src/app_demo/zhihu/home/question_page.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//question_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    BoxDecoration,
    BorderSide,
    NetworkImage,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    FontWeight,
    PopupMenuButton,
    PopupMenuItem,
    SingleChildScrollView,
    MainAxisAlignment,
    Alignment,
    CircleAvatar,
    ButtonTextTheme,
    MaterialPageRoute,
    Navigator

} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {ReplyPage, Common} = __webpack_require__(/*! ./reply_page.js */ "./src/app_demo/zhihu/home/reply_page.js");

class QuestionPage extends MXJSStatefulWidget {
    constructor(){
        super("QuestionPage");
    }
  
    createState() {
        return new QuestionPageState(this);
    }
}

class QuestionPageState extends MXJSWidgetState {
    
    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: Common.searchInput(context)
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new Row({
                                    children: [
                                        new Container({
                                            child: new FlatButton({onPressed: function(){}, child: new Text("物理学"), color: GlobalConfig.searchBackgroundColor}),
                                            height: 30.0,
                                            margin: EdgeInsets.only({right: 8.0})
                                        }),
                                        new Container({
                                            child: new FlatButton({onPressed: function(){}, child: new Text("三体(书籍)"), color: GlobalConfig.searchBackgroundColor}),
                                            height: 30.0,
                                            margin: EdgeInsets.only({right: 8.0})
                                        }),
                                        new Container({
                                            child: new FlatButton({onPressed: function(){}, child: new Text("脑洞(网络用语)"), color: GlobalConfig.searchBackgroundColor}),
                                            height: 30.0
                                        })
                                    ]
                                }),
                                padding: EdgeInsets.only({left: 16.0, top: 8.0, bottom: 8.0, right: 16.0}),
                                color: GlobalConfig.cardBackgroundColor
                            }),
                            new Container({
                                child: new Text("《三体》里的水滴有可能被制造出来吗?", {
                                    style: new TextStyle({fontWeight: FontWeight.bold, fontSize: 18.0, height: 1.3, color: Colors.black})
                                }),
                                padding: EdgeInsets.only({left: 16.0, bottom: 8.0, right: 16.0}),
                                alignment: Alignment.topLeft,
                                color: GlobalConfig.cardBackgroundColor
                            }),
                            new Container({
                                child: new Text(
                                    "如果，仅考虑其延长强相互作用力的特性，而不考虑其直角转弯的特性，那么水滴能被制造出来吗？换句话说，强相互作用力能够以影响微观物理量的方式延长吗？",{
                                    style: new TextStyle({height: 1.4, fontSize: 16.0, color: GlobalConfig.fontColor}), 
                                    textAlign: TextAlign.start
                                }),
                                padding: EdgeInsets.only({left: 16.0, right: 16.0, bottom: 8.0}),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({
                                        bottom: new BorderSide({
                                            color:  Colors.black
                                        })
                                    }),
                                    color: GlobalConfig.cardBackgroundColor
                                })
                            }),
                            new Container({
                                child: new Row({
                                    children: [
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: FlatButton.icon({
                                                    onPressed: function(){},
                                                    icon: new Icon(new IconData(0xe7f0, {fontFamily: 'MaterialIcons'})),
                                                    label: new Text("邀请回答"),
                                                    textTheme: ButtonTextTheme.accent
                                                }),
                                                decoration: new BoxDecoration({
                                                    border: new BorderDirectional({end: new BorderSide({color: Colors.black})})
                                                })
                                            })
                                        }),
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: FlatButton.icon({
                                                    onPressed: function(){},
                                                    icon: new Icon(new IconData(0xe3ae, {fontFamily: 'MaterialIcons'})),
                                                    label: new Text("写回答"),
                                                    textTheme: ButtonTextTheme.accent
                                                }),
                                                decoration: new BoxDecoration({
                                                    border: new BorderDirectional({end: new BorderSide({color: Colors.black})})
                                                })
                                            })
                                        })
                                    ]
                                }),
                                decoration: new BoxDecoration({
                                  color: GlobalConfig.cardBackgroundColor
                                })
                            }),
                            new Container({
                                margin: EdgeInsets.only({top: 4.0, bottom: 4.0}),
                                child: new Row({
                                    children: [
                                        new Expanded({
                                        child: new Container({
                                            child: new Text("173个回答", {style: new TextStyle({color: GlobalConfig.fontColor})}),
                                            margin: EdgeInsets.only({left: 16.0})
                                        })
                                        }),
                                        new Expanded({
                                            child: new Container({
                                                child: new PopupMenuButton({
                                                    itemBuilder: function(context) {
                                                        let list = [
                                                            new PopupMenuItem({
                                                                value: '质量',
                                                                child: new Container({
                                                                    child: new Row({
                                                                        children: [
                                                                            new Text('按质量排序'),
                                                                            new Icon(new IconData(0xe5ca, {fontFamily: 'MaterialIcons'}), {color: Colors.blue})
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            new PopupMenuItem({
                                                                value: '时间',
                                                                child: new Text('按时间排序')
                                                            })
                                                        ];
                                                        return list;
                                                    }, 
                                                    child: new Container({
                                                        child: new Row({
                                                            mainAxisAlignment: MainAxisAlignment.end,
                                                            children: [
                                                                new Text("按质量排序", {
                                                                    style: new TextStyle({color: GlobalConfig.fontColor})}),
                                                                new Icon(new IconData(0xe313, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor})
                                                            ]
                                                        })
                                                    })
                                                }),
                                                alignment: Alignment.centerRight
                                            })
                                        })
                                    ]
                                })
                            }),
                            new Container({
                                color: GlobalConfig.cardBackgroundColor,
                                margin: EdgeInsets.only({bottom: 5.0}),
                                child: new FlatButton({
                                    onPressed: function(){
                         
                                        Navigator.push(context, new MaterialPageRoute({
                                            builder: function (context) {
                                                return new ReplyPage;
                                            }
                                        }))
                                    },
                                    child: new Column({
                                        children: [
                                            new Container({
                                                child: new Row({
                                                    children: [
                                                        new Container({
                                                            child: new CircleAvatar({
                                                                backgroundImage: new NetworkImage("https://pic3.zhimg.com/fc4c1cb34c2901a1a8c05488bbd76fa2_xs.jpg"),
                                                                radius: 11.0
                                                            })
                                                        }),
                                                        new Text(" 游牧由", {style: new TextStyle({color: GlobalConfig.fontColor})})
                                                    ]
                                                }),
                                                padding: EdgeInsets.only({top: 10.0})
                                            }),
                                            new Container({
                                                child: new Text(
                                                    "第一，几年前我跟一个985211级别大学的物理类学科教授聊过这个问题。他很严肃的表示，使用强互作用力为工具在原子角度加工出这种水平的材料，对人类目前的物理...",{
                                                    style: new TextStyle({height: 1.3, color: GlobalConfig.fontColor})
                                                    }),
                                                margin: EdgeInsets.only({top: 6.0, bottom: 14.0}),
                                                alignment: Alignment.topLeft
                                            }),
                                            new Container({
                                                child: new Row({
                                                    children: [
                                                        new Expanded({
                                                            child: new Text("1K 赞同 · 262 评论 · 10 天前", {style: new TextStyle({color: GlobalConfig.fontColor})})
                                                        })
                                                    ]
                                                }),
                                                padding: EdgeInsets.only({bottom: 10.0})
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
        });
        return widget;
    }
}

module.exports = { QuestionPage };


/***/ }),

/***/ "./src/app_demo/zhihu/home/recommend.js":
/*!**********************************************!*\
  !*** ./src/app_demo/zhihu/home/recommend.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//recommend.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    AspectRatio,
    BoxDecoration,
    DecorationImage,
    NetworkImage,
    Rect,
    BorderRadius,
    Radius,
    Icon,
    IconData,
    EdgeInsets,
    Column,
    FontWeight,
    SingleChildScrollView,
    Alignment,
    MaterialPageRoute,
    Navigator
  
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {articleList} = __webpack_require__(/*! ./article.js */ "./src/app_demo/zhihu/home/article.js");
let {ReplyPage} = __webpack_require__(/*! ./reply_page.js */ "./src/app_demo/zhihu/home/reply_page.js");

class Recommend extends MXJSStatefulWidget {
    constructor(){
        super("Recommend");
    }
  
    createState() {
        return new RecommendState(this);
    }
}

class RecommendState extends MXJSWidgetState {
    
    commonCard(context,article){
        let markWidget;
        if (article.imgUrl == null) {
            markWidget = new Text(
                article.user + " :  " + article.mark,{
                style: new TextStyle({
                    height: 1.3, 
                    color: GlobalConfig.fontColor
                })
            });
        } else {
            markWidget = new Row({
                children: [
                    new Expanded({
                        flex: 2,
                        child: new Container({
                            child: new Text(
                                article.user + " :  " + article.mark,{
                                style: new TextStyle({height: 1.3, color: GlobalConfig.fontColor})
                            })
                        })
                    }),
                    new Expanded({
                        flex: 1,
                        child: new AspectRatio({
                            aspectRatio: 3.0 / 2.0,
                            child:new Container({
                                foregroundDecoration:new BoxDecoration({
                                    image: new DecorationImage({
                                        image: new NetworkImage(article.imgUrl),
                                        centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                    }),
                                    borderRadius: BorderRadius.all(Radius.circular(6.0))
                                })
                            })
                        })
                    })
                ]
            });
        }
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 5.0, bottom: 5.0}),
            child: new FlatButton({
                onPressed:function(){
                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new ReplyPage;
                        }
                    }))
                },
                child: new Column({
                    children: [
                        new Container({
                            child: new Text(
                                article.title,{
                                style: new TextStyle({fontWeight: FontWeight.bold, fontSize: 16.0, height: 1.3, color: Colors.black})
                            }),
                            margin: EdgeInsets.only({top: 6.0, bottom: 2.0}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: markWidget,
                            margin: EdgeInsets.only({top: 6.0, bottom: 14.0}),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: new Row({
                                children: [
                                    new Expanded({
                                            child: new Text(article.agreeNum.toString() + " 赞同 · " + article.commentNum.toString() + "评论",{
                                            style: new TextStyle({color: GlobalConfig.fontColor})
                                            })
                                    }),
                                    new Icon(new IconData(0xe260, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor})
                                ]
                            }),
                            padding: EdgeInsets.only({bottom: 10.0})
                        })
                    ]
                })
            })
        });
    }

    build(context){
        let widget = new SingleChildScrollView({
            child: new Container({
                margin: EdgeInsets.only({top: 5.0}),
                child: new Column({
                    children: [
                        this.commonCard(context,articleList[0]),
                        this.commonCard(context,articleList[1])
                    ]
                })
            })
        });
        return widget;
    }
}

module.exports = { Recommend };



/***/ }),

/***/ "./src/app_demo/zhihu/home/reply_page.js":
/*!***********************************************!*\
  !*** ./src/app_demo/zhihu/home/reply_page.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//replay_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    BoxDecoration,
    BorderSide,
    NetworkImage,
    BorderRadius,
    Radius,
    TextField,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    FontWeight,
    SingleChildScrollView,
    InputDecoration,
    MainAxisAlignment,
    Alignment,
    CircleAvatar,
    ButtonTextTheme,
    ListTile,
    IconButton,
    RaisedButton,
    BottomAppBar,
    InputBorder,
    MaterialPageRoute,
    Navigator
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
// let {QuestionPage} = require("./zhihu/home/question_page.js");

class Common {
    static searchInput(context) {
        return new Container({
            child: new Row({
                children: [
                    new Container({
                        child: FlatButton.icon({
                            onPressed: function(){
                    
                                Navigator.pop(context);
                            },
                            icon: new Icon(new IconData(0xe5c4, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}),
                            label: new Text("")
                        }),
                        width: 60.0
                    }),
                    new Expanded({
                        child: new TextField({
                            decoration: InputDecoration.collapsed({
                                hintText: "搜索比乎内容",
                                border: InputBorder.none,
                                hintStyle: new TextStyle({color: GlobalConfig.fontColor})
                            })
                        })
                    }),
                    new Container({
                        child: new IconButton({icon: new Icon(new IconData(0xe80d, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}), 
                            onPressed: function(){}, 
                            padding: EdgeInsets.all(0.0),
                            iconSize: 18.0
                        })
                    }),
                    new Container({
                        child: new IconButton({icon: new Icon(new IconData(0xe896, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}), 
                            onPressed: function(){}, 
                            padding: EdgeInsets.all(0.0), 
                            iconSize: 18.0
                        })
                    })
                ]
            }),
            decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                color: GlobalConfig.searchBackgroundColor
            }),
            height: 36.0
        });
    }
}

class ReplyPage extends MXJSStatefulWidget {
    constructor(){
        super("ReplyPage");
    }

    createState() {
        return new ReplyPageState(this);
    }
}

class ReplyPageState extends MXJSWidgetState {
    
    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: Common.searchInput(context)
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new FlatButton({
                                    onPressed: function(){
                             
                                      Navigator.push(context, new MaterialPageRoute({
                                        builder: function (context) {
                                            return new QuestionPage;
                                        }
                                    }))
                                    },
                                    child: new Container({
                                        child: new Text("你认为《三体》中最牛的文明是？", {
                                            style: new TextStyle({
                                                fontWeight: FontWeight.bold, 
                                                fontSize: 18.0, 
                                                height: 1.3, 
                                                color: Colors.black
                                            })
                                        }),
                                        padding: EdgeInsets.all(16.0),
                                        alignment: Alignment.topLeft
                                    }),
                                    color: GlobalConfig.cardBackgroundColor
                                }),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.white10})})
                                })
                            }),
                            new Container({
                                child: new Row({
                                    children: [
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: FlatButton.icon({
                                                    onPressed: function(){},
                                                    icon: new Icon(new IconData(0xe3ae, {fontFamily: 'MaterialIcons'})),
                                                    label: new Text("写回答"),
                                                    textTheme: ButtonTextTheme.accent
                                                }),
                                                decoration: new BoxDecoration({
                                                    border: new BorderDirectional({end: new BorderSide({color: Colors.white10})})
                                                })
                                            })
                                        }),
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: new FlatButton({
                                                    onPressed: function(){
                                      
                                                        Navigator.push(context, new MaterialPageRoute({
                                                            builder: function (context) {
                                                                return new QuestionPage;
                                                            }
                                                        }))
                                                    },
                                                    child: new Text("查看全部10000个回答 > ")
                                                })
                                            })
                                        })
                                    ],
                                }),
                                decoration: new BoxDecoration({
                                  color: GlobalConfig.cardBackgroundColor
                                }),
                                margin: EdgeInsets.only({bottom: 10.0})
                            }),
                            new Container({
                                child: new ListTile({
                                    leading: new CircleAvatar({
                                        backgroundImage: new NetworkImage("https://pic3.zhimg.com/v2-cd467bb9bb31d0384f065cf0bd677930_xl.jpg"),
                                        radius: 20.0
                                    }),
                                    title: new Text("Flutter"),
                                    subtitle: new Text("人生如逆旅，我亦是行人"),
                                    trailing: RaisedButton.icon({
                                        onPressed: function(){}, 
                                        icon: new Icon(new IconData(0xe145, {fontFamily: 'MaterialIcons'}), {color: Colors.black}), 
                                        label: new Text("关注", {style: new TextStyle({color: Colors.black})}), 
                                        color: Colors.blue
                                    })
                                }),
                                decoration: new BoxDecoration({
                                    color: GlobalConfig.cardBackgroundColor,
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.black})})
                                })
                            }),
                            new Container({
                                child: new Text(
                                    "回归运动\n\n三体定义的黑暗森林的宇宙格局，就是文明相互攻击和毁灭，越高级的，越明白藏好自己做好清理，绝不做探测对方文明的愚蠢行为。\n\n然而归还运动跳出了这个黑暗森林法则，不玩黑暗森林打击，不但探测别的宇宙文明，而且还深入了解对方文明，而且是全宇宙的所有文明。\n\n这是一种多么自信的科技实力呀，才能跳出黑暗森林的生存法则呀",{
                                    style: new TextStyle({
                                        height: 1.4, 
                                        fontSize: 16.0,
                                        color: GlobalConfig.fontColor
                                    }), 
                                    textAlign: TextAlign.start
                                }),
                                margin: EdgeInsets.all(16.0)
                            })
                        ]
                    })
                }),
                bottomNavigationBar: new BottomAppBar({
                    child: new Container({
                        height: 50.0,
                        child: new Row({
                            children: [
                                new Container({
                                    child: FlatButton.icon({
                                        onPressed: function(){},
                                        label: new Text("赞同 10 K"), 
                                        color: GlobalConfig.searchBackgroundColor, 
                                        icon: new Icon(new IconData(0xe5c7, {fontFamily: 'MaterialIcons'}))
                                    }),
                                    margin: EdgeInsets.only({left: 16.0}),
                                    height: 30.0
                                }),
                                new Container({
                                    child: new IconButton({
                                        onPressed: function(){}, 
                                        icon: new Icon(new IconData(0xe5c5, {fontFamily: 'MaterialIcons'})),
                                        padding: EdgeInsets.all(0.0)
                                    }),
                                    margin: EdgeInsets.only({left: 8.0}),
                                    height: 30.0,
                                    decoration: new BoxDecoration({
                                      borderRadius: BorderRadius.all(Radius.circular(2.0)),
                                      color: GlobalConfig.searchBackgroundColor
                                    })
                                }),
                                new Expanded({
                                    child: new Row({
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                        new Icon(new IconData(0xe87d, {fontFamily: 'MaterialIcons'}), {
                                                            size: 18.0,
                                                            color: GlobalConfig.fontColor
                                                        }),
                                                        new Text("感谢", {
                                                            style: new TextStyle({
                                                                fontSize: 10.0, 
                                                                color: GlobalConfig.fontColor
                                                            })
                                                        })
                                                        ]
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0
                                                })
                                            }),
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                            new Icon(new IconData(0xe838, {fontFamily: 'MaterialIcons'}), {
                                                                size: 18.0, 
                                                                color: GlobalConfig.fontColor
                                                            }),
                                                            new Text("收藏", {
                                                                style: new TextStyle({
                                                                    fontSize: 10.0,
                                                                    color: GlobalConfig.fontColor
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0
                                                })
                                            }),
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                            new Icon(new IconData(0xe253, {fontFamily: 'MaterialIcons'}), {
                                                                size: 18.0, 
                                                                color: GlobalConfig.fontColor
                                                            }),
                                                            new Text("345", {
                                                                style: new TextStyle({
                                                                    fontSize: 10.0,
                                                                    color: GlobalConfig.fontColor
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        color: GlobalConfig.cardBackgroundColor
                    })
                })
            })
        })
        return widget;
    }
}

module.exports = { ReplyPage, Common };



/***/ }),

/***/ "./src/app_demo/zhihu/home/search_page.js":
/*!************************************************!*\
  !*** ./src/app_demo/zhihu/home/search_page.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//search_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    BoxDecoration,
    BorderSide,
    BorderRadius,
    Radius,
    TextField,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    FontWeight,
    SingleChildScrollView,
    InputDecoration,
    Alignment,
    Chip,
    InputBorder,
    Navigator
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");

class SearchPage extends MXJSStatefulWidget {
    constructor(){
        super("SearchPage");
    }

    createState() {
        return new SearchPageState(this);
    }
}

class SearchPageState extends MXJSWidgetState {

    searchInput(context) {
        return new Container({
            child: new Row({
                children: [
                    new Container({
                            child: FlatButton.icon({
                                onPressed: function(){
                                    Navigator.pop(context);
                                    
                                },
                                icon: new Icon(new IconData(0xe5c4, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}),
                                label: new Text("")
                            }),
                            width: 60.0
                    }),
                    new Expanded({
                        child: new TextField({
                            autofocus: true,
                            decoration: InputDecoration.collapsed({
                                hintText: "搜索比乎内容",
                                border: InputBorder.none,
                                hintStyle: new TextStyle({color: GlobalConfig.fontColor})
                            })
                        })
                    })
                ]
            }),
            decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                color: GlobalConfig.searchBackgroundColor
            })
        });
    }

    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: this.searchInput(context)
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new Text("比乎热搜", {
                                    style: new TextStyle({
                                        fontWeight: FontWeight.bold, 
                                        fontSize: 16.0
                                    })
                                }),
                                margin: EdgeInsets.only({
                                    top: 16.0,
                                    left: 16.0, 
                                    bottom: 16.0
                                }),
                                alignment: Alignment.topLeft
                            }),
                            new Row({
                                children: [
                                    new Container({
                                        child: new Chip({
                                            label: new FlatButton({
                                                onPressed: function(){}, 
                                                child: new Text("汽车关税下调", {
                                                    style: new TextStyle({color: GlobalConfig.fontColor})
                                                })
                                            }),
                                            backgroundColor: Colors.black12,
                                        }),
                                        margin: EdgeInsets.only({left: 16.0, bottom: 16.0}),
                                        alignment: Alignment.topLeft
                                    }),
                                    new Container({
                                        child: new Chip({
                                            label: new FlatButton({
                                                onPressed: function(){}, 
                                                child: new Text("李彦宏传闻辟谣", {
                                                    style: new TextStyle({color: GlobalConfig.fontColor})
                                                })
                                            }),
                                            backgroundColor: Colors.black12
                                        }),
                                        margin: EdgeInsets.only({left: 16.0, bottom: 16.0}),
                                        alignment: Alignment.topLeft
                                    })
                                ]
                            }),
                            new Row({
                                children: [
                                    new Container({
                                        child: new Chip({
                                            label: new FlatButton({
                                                onPressed: function(){}, 
                                                child: new Text("小米8", {
                                                    style: new TextStyle({color: GlobalConfig.fontColor})
                                                })
                                            }),
                                            backgroundColor: Colors.black12
                                        }),
                                        margin: EdgeInsets.only({left: 16.0, bottom: 16.0}),
                                        alignment: Alignment.topLeft
                                    }),
                                    new Container({
                                        child: new Chip({
                                            label: new FlatButton({
                                                onPressed: function(){}, 
                                                child: new Text("超时空同居", {
                                                    style: new TextStyle({color: GlobalConfig.fontColor})
                                                })
                                            }),
                                            backgroundColor: Colors.black12
                                        }),
                                        margin: EdgeInsets.only({left: 16.0, bottom: 16.0}),
                                        alignment: Alignment.topLeft
                                    })
                                ]
                            }),
                            new Container({
                                child: new Text("搜索历史", {
                                    style: new TextStyle({
                                        fontWeight: FontWeight.bold, 
                                        fontSize: 16.0
                                    })
                                }),
                                margin: EdgeInsets.only({left: 16.0, bottom: 16.0}),
                                alignment: Alignment.topLeft
                            }),
                            new Container({
                                child: new Row({
                                    children: [
                                        new Container({
                                        child: new Icon(new IconData(0xe192, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0}),
                                        margin: EdgeInsets.only({right: 12.0})
                                        }),
                                        new Expanded({
                                        child: new Container({
                                                child: new Text("业余兴趣", {
                                                    style: new TextStyle({color: GlobalConfig.fontColor, fontSize: 14.0})
                                                })
                                            })
                                        }),
                                        new Container({
                                            child: new Icon(new IconData(0xe14c, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0})
                                        })
                                    ]
                                }),
                                margin: EdgeInsets.only({left: 16.0, right: 16.0, bottom: 10.0}),
                                padding: EdgeInsets.only({bottom: 10.0}),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.black12})})
                                })
                            }),
                            new Container({
                                child: new Row({
                                  children: [
                                        new Container({
                                            child: new Icon(new IconData(0xe192, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0}),
                                            margin: EdgeInsets.only({right: 12.0})
                                        }),
                                        new Expanded({
                                            child: new Container({
                                                child: new Text("三体", {style: new TextStyle({color: GlobalConfig.fontColor, fontSize: 14.0})})
                                            })
                                        }),
                                        new Container({
                                            child: new Icon(new IconData(0xe14c, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0})
                                        })
                                    ]
                                }),
                                margin: EdgeInsets.only({left: 16.0, right: 16.0, bottom: 10.0}),
                                padding: EdgeInsets.only({bottom: 10.0}),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.black12})})
                                })
                            }),
                            new Container({
                                child: new Row({
                                    children: [
                                        new Container({
                                            child: new Icon(new IconData(0xe192, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0}),
                                            margin: EdgeInsets.only({right: 12.0})
                                        }),
                                        new Expanded({
                                            child: new Container({
                                                child: new Text("人类未来", {style: new TextStyle({color: GlobalConfig.fontColor, fontSize: 14.0})})
                                            })
                                        }),
                                        new Container({
                                            child: new Icon(new IconData(0xe14c, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor, size: 16.0})
                                        })
                                     ],
                                }),
                                margin: EdgeInsets.only({left: 16.0, right: 16.0, bottom: 10.0}),
                                padding: EdgeInsets.only({bottom: 10.0}),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.black12})})
                                })
                            })
                        ]
                    })
                })
            })
        });
        return widget;
    }
}

module.exports = { SearchPage };


/***/ }),

/***/ "./src/app_demo/zhihu/idea/idea_page.js":
/*!**********************************************!*\
  !*** ./src/app_demo/zhihu/idea/idea_page.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//idea_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Text,
    Center,
    Key
  
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");

class IdeaPage extends MXJSStatefulWidget {
    constructor(){
        super("IdeaPage", {key: new Key("IdeaPage")});
    }

    createState() {
        return new IdeaPageState(this);
    }
}

class IdeaPageState extends MXJSWidgetState {
    
    build(context){
        let widget = new MaterialApp({
            home: new Scaffold({
                appBar: new AppBar({
                    title: new Center({
                        child: new Text('想法')
                    })
                }),
                body: new Center({
                    child: new Text("努力开发中~")
                })
            })
            // theme: GlobalConfig.themeData
        });
        return widget;
    }
}

module.exports = { IdeaPage };



/***/ }),

/***/ "./src/app_demo/zhihu/index.js":
/*!*************************************!*\
  !*** ./src/app_demo/zhihu/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  runApp,
  MXJSFlutterApp,
  MXJSStatefulWidget,
  MXJSWidgetState,
  MaterialApp,
  Scaffold,
  Text,
  Icon,
  IconData,
  Center,
  BottomNavigationBarItem,
  AnimationController,
  Duration,
  BottomNavigationBar,
  BottomNavigationBarType,
  Colors
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ./global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {HomePage} = __webpack_require__(/*! ./home/home_page.js */ "./src/app_demo/zhihu/home/home_page.js");
let {MyPage} = __webpack_require__(/*! ./my/my_page.js */ "./src/app_demo/zhihu/my/my_page.js");
let {IdeaPage} = __webpack_require__(/*! ./idea/idea_page.js */ "./src/app_demo/zhihu/idea/idea_page.js");
let {MessagePage} = __webpack_require__(/*! ./message/message_page.js */ "./src/app_demo/zhihu/message/message_page.js");

class _NavigationIconView {
    constructor({
        icon, title, vsync
    }) {
        this.item = new BottomNavigationBarItem({
            icon: icon,
            title: title
        });
        this.controller = new AnimationController({
            duration: new Duration({
                milliseconds: 200
            })
        });
    }
}

class Index extends MXJSStatefulWidget {
    constructor() {
        super('Index');
    }
  
    createState() {
        return new IndexState(this);
    }
}

class IndexState extends MXJSWidgetState {
    constructor(){
        super();

        this._currentIndex = 0;
        this._navigationViews = [];
        this._pageList = [];
        this._currentPage = null;
    }

    build(context){
        this._navigationViews = [
            new _NavigationIconView({
              icon: new Icon(new IconData(0xe85d, {fontFamily: 'MaterialIcons'})),
              title: new Text("首页")
            }),
            new _NavigationIconView({
              icon: new Icon(new IconData(0xeb3d, {fontFamily: 'MaterialIcons'})),
              title: new Text("想法")
            }),
            new _NavigationIconView({
              icon: new Icon(new IconData(0xe003, {fontFamily: 'MaterialIcons'})),
              title: new Text("通知")
            }),
            new _NavigationIconView({
              icon: new Icon(new IconData(0xe8a6, {fontFamily: 'MaterialIcons'})),
              title: new Text("我的")
            }),
        ];

        this._pageList = [
            new HomePage(),
            new IdeaPage(),
            new MessagePage(),
            new MyPage()
        ];

        this._currentPage = this._pageList[this._currentIndex];

        let widget = new MaterialApp({
            home: new Scaffold({
                body: new Center({
                    child: this._currentPage
                }),
                bottomNavigationBar: new BottomNavigationBar({
                    items: this._navigationViews.map(navigationIconView => navigationIconView.item),
                    currentIndex: this._currentIndex,
                    fixedColor: Colors.blue,
                    type: BottomNavigationBarType.fixed,
                    onTap: function(index) {
                        this.setState(function() {
                            this._navigationViews[this._currentIndex].controller.reverse();
                            this._currentIndex = index;
                            this._navigationViews[this._currentIndex].controller.forward();
                            this._currentPage = this._pageList[this._currentIndex];
                        }.bind(this))
                    }.bind(this)
                })
                // theme: GlobalConfig.themeData,
            })
        });
        return widget;
    }
}

module.exports = {Index};



/***/ }),

/***/ "./src/app_demo/zhihu/message/message_page.js":
/*!****************************************************!*\
  !*** ./src/app_demo/zhihu/message/message_page.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//message_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Text,
    Center,
    Key
  
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js")
class MessagePage extends MXJSStatefulWidget {
    constructor(){
        super("MessagePage", {key: new Key("MessagePage")});
    }

    createState() {
        return new MessagePageState(this);
    }
}

class MessagePageState extends MXJSWidgetState {
 
    build(context){
        let widget = new MaterialApp({
            home: new Scaffold({
                appBar: new AppBar({
                    title: new Center({
                        child: new Text('消息')
                    })
                }),
                body: new Center({
                    child: new Text("努力开发中~")
                })
            })
            // theme: GlobalConfig.themeData
        });
        return widget;
    }
}

module.exports = { MessagePage };


/***/ }),

/***/ "./src/app_demo/zhihu/my/my_page.js":
/*!******************************************!*\
  !*** ./src/app_demo/zhihu/my/my_page.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



//my_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidgetState,
    MXJSStatefulWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    AspectRatio,
    BoxDecoration,
    BorderSide,
    DecorationImage,
    NetworkImage,
    Rect,
    BorderRadius,
    Radius,
    Color,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    SingleChildScrollView,
    MainAxisAlignment,
    Align,
    Alignment,
    CircleAvatar,
    ListTile,
    MediaQuery,
    Axis,
    Key,
    MaterialPageRoute,
    Navigator
  
} = __webpack_require__(/*! ../../../js_flutter.js */ "./src/js_flutter.js");

let {GlobalConfig} = __webpack_require__(/*! ../global_config.js */ "./src/app_demo/zhihu/global_config.js");
let {SearchPage} = __webpack_require__(/*! ../home/search_page.js */ "./src/app_demo/zhihu/home/search_page.js");

class MyPage extends MXJSStatefulWidget {
    constructor(){
        super("MyPage", {key: new Key("MyPage")});
    }
    createState() {
        return new MyPageState(this);
    }
}

class MyPageState extends MXJSWidgetState {
    
    barSearch(){
        return new Container({
            child: new FlatButton({
                onPressed: function(){
      
                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new SearchPage;
                        }
                    }))
                },
                child: new Row({
                    children: [
                        new Container({
                            child: new Icon(new IconData(0xe8b6, {fontFamily: 'MaterialIcons'}), {
                                size: 18.0,
                                color: GlobalConfig.fontColor
                            }),
                            margin: EdgeInsets.only({right: 26.0})
                        }),
                        new Expanded({
                            child: new Container({
                                child: new Text("搜索知乎内容", {
                                    style: new TextStyle({
                                        color: GlobalConfig.fontColor
                                    })
                                })
                            })
                        }),
                        new Container({
                            child: new FlatButton({
                                onPressed: function(){},
                                child: new Icon(new IconData(0xe8c4, {fontFamily: 'MaterialIcons'}),{
                                    color: GlobalConfig.fontColor,
                                    size: 18.0
                                })
                            }),
                            width: 40.0
                        })
                    ]
                })
            }),
            decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                color: GlobalConfig.searchBackgroundColor
            })
        });
    }

    infoCardDescItem(context, count, desc, showSeparator){
        return new Row({
            children: [
                new Container({
                    width: (MediaQuery.of(context).size.width - 6.0) / 4,
                    child: new FlatButton ({
                        onPressed: function(){},
                        child: new Container({
                          height: 50.0,
                          child: new Column({
                                children: [
                                    new Container({
                                        child: new Text(count, {style:new TextStyle({fontSize: 16.0, color: GlobalConfig.fontColor})})
                                    }),
                                    new Container({
                                        child: new Text(desc, {style: new TextStyle({fontSize: 12.0, color: GlobalConfig.fontColor})})
                                    })
                                ]
                            })
                        })
                    })
                }),
                showSeparator ? new Container({
                    height: 14.0,
                    width: 1.0,
                    decoration: new BoxDecoration({
                        border: new BorderDirectional({
                            start: new BorderSide({color: Colors.black12, width: 1.0})
                        })
                    })
                })  : new Container(),
            ] 
        })
    }

    infoCard(context){
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 10.0, bottom: 6.0}),
            padding: EdgeInsets.only({top: 12.0, bottom: 8.0}),
            child: new Column({
                children: [
                    new Container({
                        margin: EdgeInsets.only({left: 16.0, right: 16.0, bottom: 16.0}),
                        decoration: new BoxDecoration({
                            color: new Color(0xFFF5F5F5),
                            borderRadius: BorderRadius.all(Radius.circular(6.0))
                        }),
                        child: new FlatButton({
                            onPressed: function(){},
                            child: new Container({
                                child: new ListTile({
                                    leading: new Container({
                                        child: new CircleAvatar({
                                            backgroundImage: new NetworkImage("https://pic1.zhimg.com/v2-ec7ed574da66e1b495fcad2cc3d71cb9_xl.jpg"),
                                            radius: 20.0
                                        })
                                    }),
                                    title: new Container({
                                        margin: EdgeInsets.only({bottom: 2.0}),
                                        child: new Text("learner")
                                    }),
                                    subtitle: new Container({
                                        margin: EdgeInsets.only({top: 2.0}),
                                        child: new Text("查看或编辑个人主页")
                                    })
                                })
                            })
                        })
                    }),
                    new Container({
                        child: new Row({
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                                this.infoCardDescItem(context, "57", "我的创作", true),
                                this.infoCardDescItem(context, "210", "关注", true),
                                this.infoCardDescItem(context, "18", "我的收藏", true),
                                this.infoCardDescItem(context, "33", "最近浏览", false)
                            ]
                        })
                    })
                ]
            })
        })
    }

    serviceCardDescItem(context, iconDataValue, desc, bgColor){
        return new Container({
            width: MediaQuery.of(context).size.width / 4,
            child: new FlatButton({
                onPressed: function(){},
                child: new Container({
                    child: new Column({
                        children: [
                            new Container({
                                margin: EdgeInsets.only({bottom: 6.0}),
                                child: new CircleAvatar({
                                    radius: 20.0,
                                    child: new Icon(new IconData(iconDataValue, {fontFamily: 'MaterialIcons'}), {color: Colors.white}),
                                    backgroundColor: bgColor
                                })
                            }),
                            new Container({
                                child: new Text(desc, {style: new TextStyle({color: GlobalConfig.fontColor, fontSize: 14.0})})
                            })
                        ]
                    })
                })
            })
        });
    }

    serviceCard(context){
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 6.0, bottom: 6.0}),
            padding: EdgeInsets.only({top: 12.0, bottom: 8.0}),
            child: new Column({
                children: [
                    new Container({
                        child: new Row({
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                                this.serviceCardDescItem(context, 0xe865, "我的书架", Colors.green),
                                this.serviceCardDescItem(context, 0xe3e7, "我的Live", Colors.blue),
                                this.serviceCardDescItem(context, 0xeb44, "私家课", new Color(0xFFA68F52)),
                                this.serviceCardDescItem(context, 0xe227, "付费咨询", new Color(0xFF355A9B))
                            ]
                        })
                    }),
                    new Container({
                        margin: EdgeInsets.only({top: 16.0}),
                        child: new Row({
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                                this.serviceCardDescItem(context, 0xe8c9, "已购", new Color(0xFF088DB4)),
                                this.serviceCardDescItem(context, 0xe03e, "余额礼卷", Colors.blue),
                                this.serviceCardDescItem(context, 0xe1e2, "服务", new Color(0xFF029A3F))
                            ]
                        })
                    })
                ]
            })
        })
    }

    settingCard(context){
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 6.0, bottom: 6.0}),
            padding: EdgeInsets.only({top: 12.0, bottom: 8.0}),
            child: new Row({
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                    this.serviceCardDescItem(context, 0xe891, "社区建设", new Color(0xFFB88800)),
                    this.serviceCardDescItem(context, 0xeb45, "反馈", new Color(0xFF63616D)),
                    this.serviceCardDescItem(context, 0xe3a7, "夜间模式", new Color(0xFFB86A0D)),
                    this.serviceCardDescItem(context, 0xe8a4, "设置", new Color(0xFF636269))
                ]
            })
        })
    }

    videoCardHeader(context, title, iconDataValue, colorValue, nextActionTitle){
        return new Container({
            margin: EdgeInsets.only({left: 16.0, bottom: 20.0}),
            child: new Row({
                children: [
                    new Container({
                        child: new CircleAvatar({
                            radius: 20.0,
                            child: new Icon(new IconData(iconDataValue, {fontFamily: 'MaterialIcons'}), {color: Colors.white}),
                            backgroundColor: new Color(colorValue)
                        })
                    }),
                    new Expanded({
                        child: new Container({
                            margin: EdgeInsets.only({left: 8.0}),
                            child: new Text(title, {style: new TextStyle({fontSize: 18.0})})
                        })
                    }),
                    new Container({
                        child: new FlatButton({
                            onPressed: function(){},
                            child: new Text(nextActionTitle, {style: new TextStyle({color: Colors.blue})})
                        })
                    })
                ]
            })
        });
    }

    videoCardItem(context, imgUrl){
        return new Container({
            width: MediaQuery.of(context).size.width / 2.5,
            margin: EdgeInsets.only({right: 6.0}),
            child: new AspectRatio({
                aspectRatio: 4.0 / 2.0,
                child: new Container({
                    foregroundDecoration:new BoxDecoration({
                        image: new DecorationImage({
                            image: new NetworkImage(imgUrl),
                            centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                        }),
                        borderRadius: BorderRadius.all(Radius.circular(6.0))
                    })
                })
            })
        });
    }

    videoCard(context){
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 6.0, bottom: 6.0}),
            padding: EdgeInsets.only({top: 12.0, bottom: 8.0}),
            child: new Column({
                children: [
                    this.videoCardHeader(context, "视频创作", 0xe04b, 0xFFB36905, "拍一个"),
                    new Container({
                        margin: EdgeInsets.only({left: 16.0}),
                        child: new SingleChildScrollView({
                            scrollDirection: Axis.horizontal,
                            child: new Row({
                                children: [
                                    this.videoCardItem(context, "https://pic2.zhimg.com/50/v2-5942a51e6b834f10074f8d50be5bbd4d_400x224.jpg"),
                                    this.videoCardItem(context, "https://pic1.zhimg.com/50/v2-0008057d1ad2bd813aea4fc247959e63_400x224.jpg"),
                                    this.videoCardItem(context, "https://pic2.zhimg.com/50/v2-5942a51e6b834f10074f8d50be5bbd4d_400x224.jpg"),
                                    this.videoCardItem(context, "https://pic1.zhimg.com/50/v2-0008057d1ad2bd813aea4fc247959e63_400x224.jpg")
                                ]
                            })
                        })
                    })
                ]
            })
        });
    }

    ideaCardItem(context, title, subTitle, imgUrl){
        return new Container({
            margin: EdgeInsets.only({right: 6.0}),
            decoration: new BoxDecoration({
                color: GlobalConfig.searchBackgroundColor,
                borderRadius: BorderRadius.all(Radius.circular(6.0))
            }),
            child: new Row({
              children: [
                    new Container({
                        padding: EdgeInsets.only({left: 10.0}),
                        child: new Column({
                            children: [
                                new Align({
                                    alignment: Alignment.centerLeft,
                                    child: new Container({
                                        child: new Text(title, {style: new TextStyle({color: Colors.black, fontSize: 16.0})})
                                    })
                                }),
                                new Align({
                                    alignment: Alignment.centerLeft,
                                    child: new Container({
                                        margin: EdgeInsets.only({top: 6.0}),
                                        child: new Text(subTitle, {style: new TextStyle({color: GlobalConfig.fontColor})})
                                    })
                                })
                            ]
                        })
                    }),
                    new Container({
                        margin: EdgeInsets.all(10.0),
                        width: MediaQuery.of(context).size.width / 5,
                        child: new AspectRatio({
                            aspectRatio: 1.0 / 1.0,
                            child: new Container({
                                foregroundDecoration:new BoxDecoration({
                                    image: new DecorationImage({
                                        image: new NetworkImage(imgUrl),
                                        centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                    }),
                                    borderRadius: BorderRadius.all(Radius.circular(6.0))
                                })
                            })
                        })
                    })
                ]
            })
        });
    }

    ideaCard(context){
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({top: 6.0, bottom: 6.0}),
            padding: EdgeInsets.only({top: 12.0, bottom: 8.0}),
            child: new Column({
                children: [
                    this.videoCardHeader(context, "想法", 0xeb3d, 0xFFB36905, "去往想法首页"),
                    new Container({
                        margin: EdgeInsets.only({left: 16.0}),
                        child: new SingleChildScrollView({
                            scrollDirection: Axis.horizontal,
                            child: new Row({
                                children: [
                                    this.ideaCardItem(context, "苹果 WWDC 2018 正在举行", "软件更新意料之中，硬件之谜...", "https://pic2.zhimg.com/50/v2-55039fa535f3fe06365c0fcdaa9e3847_400x224.jpg"),
                                    this.ideaCardItem(context, "此刻你的桌子是什么样子？", "晒一晒你的书桌/办公桌", "https://pic2.zhimg.com/50/v2-ce2e01a047e4aba9bfabf8469cfd3e75_400x224.jpg"),
                                    this.ideaCardItem(context, "关于高考你印象最深的是...", "聊聊你的高三生活", "https://pic2.zhimg.com/50/v2-55039fa535f3fe06365c0fcdaa9e3847_400x224.jpg"),
                                    this.ideaCardItem(context, "夏天一定要吃的食物有哪些", "最适合夏天吃的那种", "https://pic2.zhimg.com/50/v2-ce2e01a047e4aba9bfabf8469cfd3e75_400x224.jpg")
                                ]
                            })
                        })
                    })
                ]
            })
        });
    }

    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: this.barSearch()
                }),
                body: new SingleChildScrollView({
                    child: new Container({
                        child: new Column({
                            children: [
                                this.infoCard(context),
                                this.serviceCard(context),
                                this.settingCard(context),
                                this.videoCard(context),
                                this.ideaCard(context)
                            ]
                        })
                    })
                })
            })
        });
        return widget;
    }
}

module.exports = { MyPage };



/***/ }),

/***/ "./src/app_demo/zhihu/zhihu.js":
/*!*************************************!*\
  !*** ./src/app_demo/zhihu/zhihu.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let {
  runApp,
  MXJSFlutterApp,
  MXJSWidgetState,
  MXJSStatefulWidget,
  MaterialApp
} = __webpack_require__(/*! ../../js_flutter.js */ "./src/js_flutter.js");

let {Index} = __webpack_require__(/*! ./index.js */ "./src/app_demo/zhihu/index.js");

class JSZhiHuPage extends MXJSStatefulWidget {
    constructor() {
        super('JSZhiHuPage');
    }
  
    createState() {
        return new JSZhiHuPageState(this);
    }
}

  
class JSZhiHuPageState extends MXJSWidgetState {
    build(context){
        let widget = new MaterialApp({
            title: "知乎-高仿版",
            home: new Index()
        });
        return widget;
    }
}

module.exports = { JSZhiHuPage };



/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  runApp,
  MXJSFlutterApp,
  MXJSStatelessWidget,
  MXJSStatefulWidget,
  MXJSWidgetState,
  Scaffold,
  Container,
  Color,
  Colors,
  AppBar,
  Text,
  ListView,
  ListTile,
  Icon,
  IconData,
  EdgeInsets,
  TextAlign,
  TextStyle,
  Row,
  Padding,
  Theme,
  Navigator,
  MaterialPageRoute,
  Scrollbar,
  MXJSLog,
  AppLifecycleState,
  WidgetsBinding,
  WidgetsFlutterBinding,
} = __webpack_require__(/*! ./js_flutter.js */ "./src/js_flutter.js");

//业务代码
class MXJSWidgetHomePage extends MXJSStatefulWidget {
  constructor() {
    super('MXJSWidgetHomePage');

    this.data = 'biz data';
    this.count = 0;
  }

  createState() {
    return new MXJSWidgetHomePageState(this);
  }
}

class MXJSWidgetHomePageState extends MXJSWidgetState {
  initState() {
    super.initState();
    // WidgetsBinding.instance.addObserver(this);
    WidgetsFlutterBinding.ensureInitialized().addObserver(this);
  }

  didChangeAppLifecycleState(state) {
    MXJSLog.log('didChangeAppLifecycleState' + state);
  }

  dispose() {
    super.dispose();
    // WidgetsBinding.instance.removeObserver(this);
    WidgetsFlutterBinding.ensureInitialized().removeObserver(this);
  }

  build(context) {
    let demoList = new ListView({
      children: [
        this.sectionTitle(context, 'App Demo'),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Examples'),
          subtitle: new Text('Common Examples'),
          onTap: function () {
            //点击时懒加载页面
            let { ExamplesPage } = __webpack_require__(/*! ./app_demo/examples/index.js */ "./src/app_demo/examples/index.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new ExamplesPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Widget Examples'),
          subtitle: new Text('All Widget Examples'),
          onTap: function () {
            //点击时懒加载页面
            let { WidgetExamplesPage } = __webpack_require__(/*! ./app_demo/widget_examples/index.js */ "./src/app_demo/widget_examples/index.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new WidgetExamplesPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Material'),
          subtitle: new Text('Material UI Demo'),
          onTap: function () {
            let { JSMaterialPage } = __webpack_require__(/*! ./app_demo/material.js */ "./src/app_demo/material.js");
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new JSMaterialPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('ZhiHu'),
          subtitle: new Text('ZhiHu high copy'),
          onTap: function () {
            let { JSZhiHuPage } = __webpack_require__(/*! ./app_demo/zhihu/zhihu.js */ "./src/app_demo/zhihu/zhihu.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new JSZhiHuPage();
                },
              }),
            );
          },
        }),

        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('网易新闻 ListViewDemo'),
          subtitle: new Text('ListView ,Message Channel, Pull to refresh'),

          onTap: function () {
            let list_view = __webpack_require__(/*! ./app_demo/listview_example.js */ "./src/app_demo/listview_example.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new list_view.ListViewDemo();
                },
              }),
            );
          },
        }),

        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('PlatformAPIExamples'),
          subtitle: new Text('Network/Dio/MessageChannel'),

          onTap: function () {
            let { PlatformExamplesPage } = __webpack_require__(/*! ./app_demo/platform/index.js */ "./src/app_demo/platform/index.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new PlatformExamplesPage();
                },
              }),
            );
          },
        }),

        new ListTile({
          leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Pesto'),
          subtitle: new Text('Simple recipe browser'),

          onTap: function () {
            let pesto = __webpack_require__(/*! ./app_demo/pesto.js */ "./src/app_demo/pesto.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new pesto.JSPestoPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe0d0, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Contact profile'),
          subtitle: new Text('Address book entry with a flexible appbar'),

          onTap: function () {
            let { JSContactPage } = __webpack_require__(/*! ./app_demo/contact.js */ "./src/app_demo/contact.js");
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new JSContactPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Animation'),
          subtitle: new Text('Section organizer'),
          onTap: function () {
            let { JSAnimationPage } = __webpack_require__(/*! ./app_demo/animation.js */ "./src/app_demo/animation.js");
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new JSAnimationPage();
                },
              }),
            );
          },
        }),
        new ListTile({
            leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), {
              color: Theme.of(context).primaryColor,
            }),
            trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
            title: new Text('Tabbar'),
            subtitle: new Text('Tabbar'),
            onTap: function () {
              let { ExampleWidget } = __webpack_require__(/*! ./app_demo/tabbar.js */ "./src/app_demo/tabbar.js");
              Navigator.push(
                context,
                new MaterialPageRoute({
                  builder: function (context) {
                    return new ExampleWidget();
                  },
                }),
              );
            },
          }),
        this.sectionTitle(context, '性能测试'),
        new ListTile({
          leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' })),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Profile'),
          subtitle: new Text('性能测试 performance profiling'),
          onTap: function () {
            let { ProfileExamplesPage } = __webpack_require__(/*! ./app_demo/profile/index.js */ "./src/app_demo/profile/index.js");

            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new ProfileExamplesPage();
                },
              }),
            );
          },
        }),

        // this.sectionTitle(context, "mxjsbuilder build app"),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('FlutterDemo'),
        //     subtitle: new Text('简单样例'),
        //     onTap: function () {

        //         let flutter_demo_ddc = require("./mxjsbuilder_demo/flutter_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new flutter_demo_ddc.main.MyHomePage.new({ title: "Flutter Demo Home Page" });
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('ContactDemo'),
        //     subtitle: new Text('联系人'),

        //     onTap: function () {

        //         let contact_demo_ddc = require("./mxjsbuilder_demo/contacts_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new contact_demo_ddc.contacts_demo.ContactsDemo.new;
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('PestoDemo'),
        //     subtitle: new Text('菜谱'),
        //     onTap: function () {

        //         let pesto_demo_ddc = require("./mxjsbuilder_demo/pesto_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new pesto_demo_ddc.pesto_demo.PestoDemo.new;
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('ZhiHu'),
        //     subtitle: new Text('知乎-高仿版'),

        //     onTap: function () {

        //         const packages__zhihu__index = require('./mxjsbuilder_demo/packages/zhihu/index/index.dart.lib.js');
        //         const index_page = packages__zhihu__index.index__index;

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new index_page.Index.new;
        //             }
        //         }))
        //     }
        // }),
        this.sectionTitle(context, 'Dart JS Api'),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Dart JS Api'),
          subtitle: new Text('JS Call Dart Function'),
          onTap: function () {
            let { PageExampleJSApi } = __webpack_require__(/*! ./app_demo/custom_js_api.js */ "./src/app_demo/custom_js_api.js");
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder: function (context) {
                  return new PageExampleJSApi();
                },
              }),
            );
          },
        }),
      ],
    });

    let w = new Scaffold({
      appBar: new AppBar({
        title: new Text('MXFlutter Examples'),
      }),
      body: demoList,
    });

    return w;
  }

  sectionTitle(context, title) {
    return new HomeSectionTitle(title);
  }
}

class HomeSectionTitle extends MXJSStatelessWidget {
  constructor(title, { key } = {}) {
    super('HomeSectionTitle', { key: key });
    this.title = title;
  }

  build(context) {
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xffffffff) }),
          new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
          new Text(this.title, {
            textAlign: TextAlign.start,
            style: new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.title.fontWeight,
              color: Colors.white,
            }),
          }),
        ],
      }),
    });
  }
}

module.exports = { MXJSWidgetHomePage };


/***/ }),

/***/ "./src/js_flutter.js":
/*!***************************!*\
  !*** ./src/js_flutter.js ***!
  \***************************/
/*! namespace exports */
/*! export MXBaseKey [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXBaseKey */
/*! export MXDartClass [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXDartClass */
/*! export MXJSBaseWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSBaseWidget */
/*! export MXJSBuildContext [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSBuildContext */
/*! export MXJSFlutterApp [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSFlutterApp */
/*! export MXJSLazyStatefulWapperWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSLazyStatefulWapperWidget */
/*! export MXJSLog [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSLog */
/*! export MXJSStatefulWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSStatefulWidget */
/*! export MXJSStatelessWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSStatelessWidget */
/*! export MXJSWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXJSWidgetState */
/*! export MXKDebugMode [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXKDebugMode */
/*! export MXKProfileMode [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXKProfileMode */
/*! export MXKReleaseMode [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXKReleaseMode */
/*! export MXKeepAliveMixinWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXKeepAliveMixinWidget */
/*! export MXKeepAliveMixinWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXKeepAliveMixinWidgetState */
/*! export MXLifecycleDartClass [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXLifecycleDartClass */
/*! export MXLifecycleWidgetControllerBase [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXLifecycleWidgetControllerBase */
/*! export MXMirror [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXMirror */
/*! export MXMirrorObjMethodCall [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXMirrorObjMethodCall */
/*! export MXMirrorWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXMirrorWidget */
/*! export MXSingleTickerAndKeepAliveMixinWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXSingleTickerAndKeepAliveMixinWidget */
/*! export MXSingleTickerAndKeepAliveMixinWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXSingleTickerAndKeepAliveMixinWidgetState */
/*! export MXSingleTickerMixinWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXSingleTickerMixinWidget */
/*! export MXSingleTickerMixinWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXSingleTickerMixinWidgetState */
/*! export MXTickerAndKeepAliveMixinWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXTickerAndKeepAliveMixinWidget */
/*! export MXTickerAndKeepAliveMixinWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXTickerAndKeepAliveMixinWidgetState */
/*! export MXTickerMixinWidget [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXTickerMixinWidget */
/*! export MXTickerMixinWidgetState [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MXTickerMixinWidgetState */
/*! export MethodCall [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MethodCall */
/*! export MethodChannel [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .MethodChannel */
/*! export WidgetsBinding [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .WidgetsBinding */
/*! export WidgetsBindingObserver [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .WidgetsBindingObserver */
/*! export WidgetsFlutterBinding [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .WidgetsFlutterBinding */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .__esModule */
/*! export bridgeMXNativeJSFlutterApp [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .bridgeMXNativeJSFlutterApp */
/*! export createMirrorObj [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .createMirrorObj */
/*! export default [not provided] [no usage info] [missing usage info prevents renaming] */
/*! export invokeFlutterCommonChannel [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .invokeFlutterCommonChannel */
/*! export invokeMirrorObjMethod [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .invokeMirrorObjMethod */
/*! export releaseMirrorObj [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .releaseMirrorObj */
/*! export runApp [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tencent/mxflutter/lib/index.js .runApp */
/*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./node_modules/@tencent/mxflutter-widgets/index.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MXBaseKey": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXBaseKey,
/* harmony export */   "MXDartClass": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXDartClass,
/* harmony export */   "MXJSBaseWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSBaseWidget,
/* harmony export */   "MXJSBuildContext": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSBuildContext,
/* harmony export */   "MXJSFlutterApp": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSFlutterApp,
/* harmony export */   "MXJSLazyStatefulWapperWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSLazyStatefulWapperWidget,
/* harmony export */   "MXJSLog": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSLog,
/* harmony export */   "MXJSStatefulWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSStatefulWidget,
/* harmony export */   "MXJSStatelessWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSStatelessWidget,
/* harmony export */   "MXJSWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXJSWidgetState,
/* harmony export */   "MXKDebugMode": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXKDebugMode,
/* harmony export */   "MXKProfileMode": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXKProfileMode,
/* harmony export */   "MXKReleaseMode": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXKReleaseMode,
/* harmony export */   "MXKeepAliveMixinWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXKeepAliveMixinWidget,
/* harmony export */   "MXKeepAliveMixinWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXKeepAliveMixinWidgetState,
/* harmony export */   "MXLifecycleDartClass": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXLifecycleDartClass,
/* harmony export */   "MXLifecycleWidgetControllerBase": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXLifecycleWidgetControllerBase,
/* harmony export */   "MXMirror": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXMirror,
/* harmony export */   "MXMirrorObjMethodCall": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXMirrorObjMethodCall,
/* harmony export */   "MXMirrorWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXMirrorWidget,
/* harmony export */   "MXSingleTickerAndKeepAliveMixinWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXSingleTickerAndKeepAliveMixinWidget,
/* harmony export */   "MXSingleTickerAndKeepAliveMixinWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXSingleTickerAndKeepAliveMixinWidgetState,
/* harmony export */   "MXSingleTickerMixinWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXSingleTickerMixinWidget,
/* harmony export */   "MXSingleTickerMixinWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXSingleTickerMixinWidgetState,
/* harmony export */   "MXTickerAndKeepAliveMixinWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXTickerAndKeepAliveMixinWidget,
/* harmony export */   "MXTickerAndKeepAliveMixinWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXTickerAndKeepAliveMixinWidgetState,
/* harmony export */   "MXTickerMixinWidget": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXTickerMixinWidget,
/* harmony export */   "MXTickerMixinWidgetState": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MXTickerMixinWidgetState,
/* harmony export */   "MethodCall": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MethodCall,
/* harmony export */   "MethodChannel": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.MethodChannel,
/* harmony export */   "WidgetsBinding": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.WidgetsBinding,
/* harmony export */   "WidgetsBindingObserver": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.WidgetsBindingObserver,
/* harmony export */   "WidgetsFlutterBinding": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.WidgetsFlutterBinding,
/* harmony export */   "__esModule": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.__esModule,
/* harmony export */   "bridgeMXNativeJSFlutterApp": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.bridgeMXNativeJSFlutterApp,
/* harmony export */   "createMirrorObj": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.createMirrorObj,
/* harmony export */   "invokeFlutterCommonChannel": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.invokeFlutterCommonChannel,
/* harmony export */   "invokeMirrorObjMethod": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.invokeMirrorObjMethod,
/* harmony export */   "releaseMirrorObj": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.releaseMirrorObj,
/* harmony export */   "runApp": () => /* reexport safe */ _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__.runApp
/* harmony export */ });
/* harmony import */ var _tencent_mxflutter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tencent/mxflutter */ "./node_modules/@tencent/mxflutter/lib/index.js");
/* harmony import */ var _tencent_mxflutter_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tencent/mxflutter-widgets */ "./node_modules/@tencent/mxflutter-widgets/index.js");
/* harmony import */ var _tencent_mxflutter_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tencent_mxflutter_widgets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _tencent_mxflutter_widgets__WEBPACK_IMPORTED_MODULE_1__) if(["default","MXBaseKey","MXDartClass","MXJSBaseWidget","MXJSBuildContext","MXJSFlutterApp","MXJSLazyStatefulWapperWidget","MXJSLog","MXJSStatefulWidget","MXJSStatelessWidget","MXJSWidgetState","MXKDebugMode","MXKProfileMode","MXKReleaseMode","MXKeepAliveMixinWidget","MXKeepAliveMixinWidgetState","MXLifecycleDartClass","MXLifecycleWidgetControllerBase","MXMirror","MXMirrorObjMethodCall","MXMirrorWidget","MXSingleTickerAndKeepAliveMixinWidget","MXSingleTickerAndKeepAliveMixinWidgetState","MXSingleTickerMixinWidget","MXSingleTickerMixinWidgetState","MXTickerAndKeepAliveMixinWidget","MXTickerAndKeepAliveMixinWidgetState","MXTickerMixinWidget","MXTickerMixinWidgetState","MethodCall","MethodChannel","WidgetsBinding","WidgetsBindingObserver","WidgetsFlutterBinding","__esModule","bridgeMXNativeJSFlutterApp","createMirrorObj","invokeFlutterCommonChannel","invokeMirrorObjMethod","releaseMirrorObj","runApp"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _tencent_mxflutter_widgets__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module
/******/ 		__webpack_require__("./index.js");
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("mxflutter-sdk");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"bundle-mxflutter-js-demo": 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;