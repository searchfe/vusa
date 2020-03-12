(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue-template-compiler");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file San 主文件
 */
(function (root) {
  // 人工调整打包代码顺序，通过注释手工写一些依赖
  //     // require('./util/guid');
  //     // require('./util/empty');
  //     // require('./util/extend');
  //     // require('./util/inherits');
  //     // require('./util/each');
  //     // require('./util/contains');
  //     // require('./util/bind');
  //     // require('./browser/on');
  //     // require('./browser/un');
  //     // require('./browser/svg-tags');
  //     // require('./browser/create-el');
  //     // require('./browser/remove-el');
  //     // require('./util/next-tick');
  //     // require('./browser/ie');
  //     // require('./browser/ie-old-than-9');
  //     // require('./browser/input-event-compatible');
  //     // require('./browser/auto-close-tags');
  //     // require('./util/data-types.js');
  //     // require('./util/create-data-types-checker.js');
  //     // require('./parser/walker');
  //     // require('./parser/parse-template');
  //     // require('./runtime/change-expr-compare');
  //     // require('./runtime/data-change-type');
  //     // require('./runtime/default-filters');
  //     // require('./view/life-cycle');
  //     // require('./view/node-type');
  //     // require('./view/get-prop-handler');
  //     // require('./view/is-data-change-by-element');
  //     // require('./view/get-event-listener');
  //     // require('./view/create-node');

  /**
  * Copyright (c) Baidu Inc. All rights reserved.
  *
  * This source code is licensed under the MIT license.
  * See LICENSE file in the project root for license information.
  *
  * @file 唯一id
  */

  /**
   * 获取唯一id
   *
   * @type {number} 唯一id
   */
  var guid = 1; // exports = module.exports = guid;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 空函数
   */

  /**
   * 啥都不干
   */

  function empty() {} // exports = module.exports = empty;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 属性拷贝
   */

  /**
   * 对象属性拷贝
   *
   * @param {Object} target 目标对象
   * @param {Object} source 源对象
   * @return {Object} 返回目标对象
   */


  function extend(target, source) {
    for (var key in source) {
      /* istanbul ignore else  */
      if (source.hasOwnProperty(key)) {
        var value = source[key];

        if (typeof value !== 'undefined') {
          target[key] = value;
        }
      }
    }

    return target;
  } // exports = module.exports = extend;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 构建类之间的继承关系
   */
  // var extend = require('./extend');

  /**
   * 构建类之间的继承关系
   *
   * @param {Function} subClass 子类函数
   * @param {Function} superClass 父类函数
   */


  function inherits(subClass, superClass) {
    /* jshint -W054 */
    var subClassProto = subClass.prototype;
    var F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    extend(subClass.prototype, subClassProto);
    /* jshint +W054 */
  } // exports = module.exports = inherits;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 遍历数组
   */

  /**
   * 遍历数组集合
   *
   * @param {Array} array 数组源
   * @param {function(Any,number):boolean} iterator 遍历函数
   */


  function each(array, iterator) {
    if (array && array.length > 0) {
      for (var i = 0, l = array.length; i < l; i++) {
        if (iterator(array[i], i) === false) {
          break;
        }
      }
    }
  } // exports = module.exports = each;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 判断数组中是否包含某项
   */
  // var each = require('./each');

  /**
   * 判断数组中是否包含某项
   *
   * @param {Array} array 数组
   * @param {*} value 包含的项
   * @return {boolean}
   */


  function contains(array, value) {
    var result = false;
    each(array, function (item) {
      result = item === value;
      return !result;
    });
    return result;
  } // exports = module.exports = contains;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file bind函数
   */

  /**
   * Function.prototype.bind 方法的兼容性封装
   *
   * @param {Function} func 要bind的函数
   * @param {Object} thisArg this指向对象
   * @param {...*} args 预设的初始参数
   * @return {Function}
   */


  function bind(func, thisArg) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice; // #[begin] allua

    if (nativeBind && func.bind === nativeBind) {
      // #[end]
      return nativeBind.apply(func, slice.call(arguments, 1)); // #[begin] allua
    }
    /* istanbul ignore next */


    var args = slice.call(arguments, 2);
    /* istanbul ignore next */

    return function () {
      return func.apply(thisArg, args.concat(slice.call(arguments)));
    }; // #[end]
  } // exports = module.exports = bind;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file DOM 事件挂载
   */

  /**
   * DOM 事件挂载
   *
   * @inner
   * @param {HTMLElement} el DOM元素
   * @param {string} eventName 事件名
   * @param {Function} listener 监听函数
   * @param {boolean} capture 是否是捕获阶段
   */


  function on(el, eventName, listener, capture) {
    // #[begin] allua

    /* istanbul ignore else */
    if (el.addEventListener) {
      // #[end]
      el.addEventListener(eventName, listener, capture); // #[begin] allua
    } else {
      el.attachEvent('on' + eventName, listener);
    } // #[end]

  } // exports = module.exports = on;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file DOM 事件卸载
   */

  /**
   * DOM 事件卸载
   *
   * @inner
   * @param {HTMLElement} el DOM元素
   * @param {string} eventName 事件名
   * @param {Function} listener 监听函数
   * @param {boolean} capture 是否是捕获阶段
   */


  function un(el, eventName, listener, capture) {
    // #[begin] allua

    /* istanbul ignore else */
    if (el.addEventListener) {
      // #[end]
      el.removeEventListener(eventName, listener, capture); // #[begin] allua
    } else {
      el.detachEvent('on' + eventName, listener);
    } // #[end]

  } // exports = module.exports = un;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 将字符串逗号切分返回对象
   */
  // var each = require('../util/each');

  /**
   * 将字符串逗号切分返回对象
   *
   * @param {string} source 源字符串
   * @return {Object}
   */


  function splitStr2Obj(source) {
    var result = {};
    each(source.split(','), function (key) {
      result[key] = key;
    });
    return result;
  } // exports = module.exports = splitStr2Obj;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file SVG标签表
   */
  // var splitStr2Obj = require('../util/split-str-2-obj');

  /**
   * svgTags
   *
   * @see https://www.w3.org/TR/SVG/svgdtd.html 只取常用
   * @type {Object}
   */


  var svgTags = splitStr2Obj('' // structure
  + 'svg,g,defs,desc,metadata,symbol,use,' // image & shape
  + 'image,path,rect,circle,line,ellipse,polyline,polygon,' // text
  + 'text,tspan,tref,textpath,' // other
  + 'marker,pattern,clippath,mask,filter,cursor,view,animate,' // font
  + 'font,font-face,glyph,missing-glyph,' // camel
  + 'animateColor,animateMotion,animateTransform,textPath,foreignObject'); // exports = module.exports = svgTags;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file DOM创建
   */
  // var svgTags = require('./svg-tags');

  /**
   * 创建 DOM 元素
   *
   * @param  {string} tagName tagName
   * @return {HTMLElement}
   */

  function createEl(tagName) {
    if (svgTags[tagName] && document.createElementNS) {
      return document.createElementNS('http://www.w3.org/2000/svg', tagName);
    }

    return document.createElement(tagName);
  } // exports = module.exports = createEl;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 移除DOM
   */

  /**
   * 将 DOM 从页面中移除
   *
   * @param {HTMLElement} el DOM元素
   */


  function removeEl(el) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  } // exports = module.exports = removeEl;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 在下一个时间周期运行任务
   */
  // 该方法参照了vue2.5.0的实现，感谢vue团队
  // SEE: https://github.com/vuejs/vue/blob/0948d999f2fddf9f90991956493f976273c5da1f/src/core/util/env.js#L68
  // var bind = require('./bind');

  /**
   * 下一个周期要执行的任务列表
   *
   * @inner
   * @type {Array}
   */


  var nextTasks = [];
  /**
   * 执行下一个周期任务的函数
   *
   * @inner
   * @type {Function}
   */

  var nextHandler;
  /**
   * 浏览器是否支持原生Promise
   * 对Promise做判断，是为了禁用一些不严谨的Promise的polyfill
   *
   * @inner
   * @type {boolean}
   */

  var isNativePromise = typeof Promise === 'function' && /native code/.test(Promise);
  /**
   * 在下一个时间周期运行任务
   *
   * @inner
   * @param {Function} fn 要运行的任务函数
   * @param {Object=} thisArg this指向对象
   */

  function nextTick(fn, thisArg) {
    if (thisArg) {
      fn = bind(fn, thisArg);
    }

    nextTasks.push(fn);

    if (nextHandler) {
      return;
    }

    nextHandler = function () {
      var tasks = nextTasks.slice(0);
      nextTasks = [];
      nextHandler = null;

      for (var i = 0, l = tasks.length; i < l; i++) {
        tasks[i]();
      }
    }; // 非标准方法，但是此方法非常吻合要求。

    /* istanbul ignore next */


    if (typeof setImmediate === 'function') {
      setImmediate(nextHandler);
    } // 用MessageChannel去做setImmediate的polyfill
    // 原理是将新的message事件加入到原有的dom events之后
    else if (typeof MessageChannel === 'function') {
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = nextHandler;
        port.postMessage(1);
      } // for native app
      else if (isNativePromise) {
          Promise.resolve().then(nextHandler);
        } else {
          setTimeout(nextHandler, 0);
        }
  } // exports = module.exports = nextTick;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file ie版本号
   */
  // #[begin] allua

  /**
   * 从userAgent中ie版本号的匹配信息
   *
   * @type {Array}
   */


  var ieVersionMatch = typeof navigator !== 'undefined' && navigator.userAgent.match(/msie\s*([0-9]+)/i);
  /**
   * ie版本号，非ie时为0
   *
   * @type {number}
   */

  var ie = ieVersionMatch ?
  /* istanbul ignore next */
  ieVersionMatch[1] - 0 : 0; // #[end]
  // exports = module.exports = ie;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 是否 IE 并且小于 9
   */
  // var ie = require('./ie');
  // HACK:
  // 1. IE8下，设置innerHTML时如果以html comment开头，comment会被自动滤掉
  //    为了保证stump存在，需要设置完html后，createComment并appendChild/insertBefore
  // 2. IE8下，innerHTML还不支持custom element，所以需要用div替代，不用createElement
  // 3. 虽然IE8已经优化了字符串+连接，碎片化连接性能不再退化
  //    但是由于上面多个兼容场景都用 < 9 判断，所以字符串连接也沿用
  //    所以结果是IE8下字符串连接用的是数组join的方式
  // #[begin] allua

  /**
   * 是否 IE 并且小于 9
   */

  var ieOldThan9 = ie &&
  /* istanbul ignore next */
  ie < 9; // #[end]
  // exports = module.exports = ieOldThan9;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 触发元素事件
   */

  /**
   * 触发元素事件
   *
   * @inner
   * @param {HTMLElement} el DOM元素
   * @param {string} eventName 事件名
   */

  function trigger(el, eventName) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    el.dispatchEvent(event);
  } // exports = module.exports = trigger;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解决 IE9 在表单元素中删除字符时不触发事件的问题
   */
  // var ie = require('./ie');
  // var on = require('./on');
  // var trigger = require('./trigger');
  // #[begin] allua

  /* istanbul ignore if */


  if (ie === 9) {
    on(document, 'selectionchange', function () {
      var el = document.activeElement;

      if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
        trigger(el, 'input');
      }
    });
  } // #[end]

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 自闭合标签表
   */
  // var splitStr2Obj = require('../util/split-str-2-obj');

  /**
   * 自闭合标签列表
   *
   * @type {Object}
   */


  var autoCloseTags = splitStr2Obj('area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'); // exports = module.exports = autoCloseTags;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file data types
   */
  // var bind = require('./bind');
  // var empty = require('./empty');
  // var extend = require('./extend');
  // #[begin] error

  var ANONYMOUS_CLASS_NAME = '<<anonymous>>';
  /**
   * 获取精确的类型
   *
   * @NOTE 如果 obj 是一个 DOMElement，我们会返回 `element`；
   *
   * @param  {*} obj 目标
   * @return {string}
   */

  function getDataType(obj) {
    // 不支持element了。data应该是纯数据
    // if (obj && obj.nodeType === 1) {
    //     return 'element';
    // }
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } // #[end]

  /**
   * 创建链式的数据类型校验器
   *
   * @param  {Function} validate 真正的校验器
   * @return {Function}
   */


  function createChainableChecker(validate) {
    /* istanbul ignore next */
    var chainedChecker = function () {};

    chainedChecker.isRequired = empty; // 只在 error 功能启用时才有实际上的 dataTypes 检测
    // #[begin] error

    validate = validate || empty;

    var checkType = function (isRequired, data, dataName, componentName, fullDataName) {
      var dataValue = data[dataName];
      var dataType = getDataType(dataValue);
      /* istanbul ignore next */

      componentName = componentName || ANONYMOUS_CLASS_NAME; // 如果是 null 或 undefined，那么要提前返回啦

      if (dataValue == null) {
        // 是 required 就报错
        if (isRequired) {
          throw new Error('[SAN ERROR] ' + 'The `' + dataName + '` ' + 'is marked as required in `' + componentName + '`, ' + 'but its value is ' + dataType);
        } // 不是 required，那就是 ok 的


        return;
      }

      validate(data, dataName, componentName, fullDataName);
    };

    chainedChecker = bind(checkType, null, false);
    chainedChecker.isRequired = bind(checkType, null, true); // #[end]

    return chainedChecker;
  } // #[begin] error

  /**
   * 生成主要类型数据校验器
   *
   * @param  {string} type 主类型
   * @return {Function}
   */


  function createPrimaryTypeChecker(type) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      var dataValue = data[dataName];
      var dataType = getDataType(dataValue);

      if (dataType !== type) {
        throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type' + '(' + dataType + ' supplied to ' + componentName + ', ' + 'expected ' + type + ')');
      }
    });
  }
  /**
   * 生成 arrayOf 校验器
   *
   * @param  {Function} arrayItemChecker 数组中每项数据的校验器
   * @return {Function}
   */


  function createArrayOfChecker(arrayItemChecker) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      if (typeof arrayItemChecker !== 'function') {
        throw new Error('[SAN ERROR] ' + 'Data `' + dataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `arrayOf`, expected `function`');
      }

      var dataValue = data[dataName];
      var dataType = getDataType(dataValue);

      if (dataType !== 'array') {
        throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type' + '(' + dataType + ' supplied to ' + componentName + ', ' + 'expected array)');
      }

      for (var i = 0, len = dataValue.length; i < len; i++) {
        arrayItemChecker(dataValue, i, componentName, fullDataName + '[' + i + ']');
      }
    });
  }
  /**
   * 生成 instanceOf 检测器
   *
   * @param  {Function|Class} expectedClass 期待的类
   * @return {Function}
   */


  function createInstanceOfChecker(expectedClass) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      var dataValue = data[dataName];

      if (dataValue instanceof expectedClass) {
        return;
      }

      var dataValueClassName = dataValue.constructor && dataValue.constructor.name ? dataValue.constructor.name :
      /* istanbul ignore next */
      ANONYMOUS_CLASS_NAME;
      /* istanbul ignore next */

      var expectedClassName = expectedClass.name || ANONYMOUS_CLASS_NAME;
      throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type' + '(' + dataValueClassName + ' supplied to ' + componentName + ', ' + 'expected instance of ' + expectedClassName + ')');
    });
  }
  /**
   * 生成 shape 校验器
   *
   * @param  {Object} shapeTypes shape 校验规则
   * @return {Function}
   */


  function createShapeChecker(shapeTypes) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      if (getDataType(shapeTypes) !== 'object') {
        throw new Error('[SAN ERROR] ' + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `shape`, expected `object`');
      }

      var dataValue = data[dataName];
      var dataType = getDataType(dataValue);

      if (dataType !== 'object') {
        throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type' + '(' + dataType + ' supplied to ' + componentName + ', ' + 'expected object)');
      }

      for (var shapeKeyName in shapeTypes) {
        /* istanbul ignore else  */
        if (shapeTypes.hasOwnProperty(shapeKeyName)) {
          var checker = shapeTypes[shapeKeyName];

          if (typeof checker === 'function') {
            checker(dataValue, shapeKeyName, componentName, fullDataName + '.' + shapeKeyName);
          }
        }
      }
    });
  }
  /**
   * 生成 oneOf 校验器
   *
   * @param  {Array} expectedEnumValues 期待的枚举值
   * @return {Function}
   */


  function createOneOfChecker(expectedEnumValues) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      if (getDataType(expectedEnumValues) !== 'array') {
        throw new Error('[SAN ERROR] ' + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `oneOf`, array is expected.');
      }

      var dataValue = data[dataName];

      for (var i = 0, len = expectedEnumValues.length; i < len; i++) {
        if (dataValue === expectedEnumValues[i]) {
          return;
        }
      }

      throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + fullDataName + '` of value' + '(`' + dataValue + '` supplied to ' + componentName + ', ' + 'expected one of ' + expectedEnumValues.join(',') + ')');
    });
  }
  /**
   * 生成 oneOfType 校验器
   *
   * @param  {Array<Function>} expectedEnumOfTypeValues 期待的枚举类型
   * @return {Function}
   */


  function createOneOfTypeChecker(expectedEnumOfTypeValues) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      if (getDataType(expectedEnumOfTypeValues) !== 'array') {
        throw new Error('[SAN ERROR] ' + 'Data `' + dataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `oneOf`, array is expected.');
      }

      var dataValue = data[dataName];

      for (var i = 0, len = expectedEnumOfTypeValues.length; i < len; i++) {
        var checker = expectedEnumOfTypeValues[i];

        if (typeof checker !== 'function') {
          continue;
        }

        try {
          checker(data, dataName, componentName, fullDataName); // 如果 checker 完成校验没报错，那就返回了

          return;
        } catch (e) {// 如果有错误，那么应该把错误吞掉
        }
      } // 所有的可接受 type 都失败了，才丢一个异常


      throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + dataName + '` of value' + '(`' + dataValue + '` supplied to ' + componentName + ')');
    });
  }
  /**
   * 生成 objectOf 校验器
   *
   * @param  {Function} typeChecker 对象属性值校验器
   * @return {Function}
   */


  function createObjectOfChecker(typeChecker) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName) {
      if (typeof typeChecker !== 'function') {
        throw new Error('[SAN ERROR] ' + 'Data `' + dataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `objectOf`, expected function');
      }

      var dataValue = data[dataName];
      var dataType = getDataType(dataValue);

      if (dataType !== 'object') {
        throw new Error('[SAN ERROR] ' + 'Invalid ' + componentName + ' data `' + dataName + '` of type' + '(' + dataType + ' supplied to ' + componentName + ', ' + 'expected object)');
      }

      for (var dataKeyName in dataValue) {
        /* istanbul ignore else  */
        if (dataValue.hasOwnProperty(dataKeyName)) {
          typeChecker(dataValue, dataKeyName, componentName, fullDataName + '.' + dataKeyName);
        }
      }
    });
  }
  /**
   * 生成 exact 校验器
   *
   * @param  {Object} shapeTypes object 形态定义
   * @return {Function}
   */


  function createExactChecker(shapeTypes) {
    return createChainableChecker(function (data, dataName, componentName, fullDataName, secret) {
      if (getDataType(shapeTypes) !== 'object') {
        throw new Error('[SAN ERROR] ' + 'Data `' + dataName + '` of `' + componentName + '` has invalid ' + 'DataType notation inside `exact`');
      }

      var dataValue = data[dataName];
      var dataValueType = getDataType(dataValue);

      if (dataValueType !== 'object') {
        throw new Error('[SAN ERROR] ' + 'Invalid data `' + fullDataName + '` of type `' + dataValueType + '`' + '(supplied to ' + componentName + ', expected `object`)');
      }

      var allKeys = {}; // 先合入 shapeTypes

      extend(allKeys, shapeTypes); // 再合入 dataValue

      extend(allKeys, dataValue); // 保证 allKeys 的类型正确

      for (var key in allKeys) {
        /* istanbul ignore else  */
        if (allKeys.hasOwnProperty(key)) {
          var checker = shapeTypes[key]; // dataValue 中有一个多余的数据项

          if (!checker) {
            throw new Error('[SAN ERROR] ' + 'Invalid data `' + fullDataName + '` key `' + key + '` ' + 'supplied to `' + componentName + '`. ' + '(`' + key + '` is not defined in `DataTypes.exact`)');
          }

          if (!(key in dataValue)) {
            throw new Error('[SAN ERROR] ' + 'Invalid data `' + fullDataName + '` key `' + key + '` ' + 'supplied to `' + componentName + '`. ' + '(`' + key + '` is marked `required` in `DataTypes.exact`)');
          }

          checker(dataValue, key, componentName, fullDataName + '.' + key, secret);
        }
      }
    });
  } // #[end]

  /* eslint-disable fecs-valid-var-jsdoc */


  var DataTypes = {
    array: createChainableChecker(),
    object: createChainableChecker(),
    func: createChainableChecker(),
    string: createChainableChecker(),
    number: createChainableChecker(),
    bool: createChainableChecker(),
    symbol: createChainableChecker(),
    any: createChainableChecker,
    arrayOf: createChainableChecker,
    instanceOf: createChainableChecker,
    shape: createChainableChecker,
    oneOf: createChainableChecker,
    oneOfType: createChainableChecker,
    objectOf: createChainableChecker,
    exact: createChainableChecker
  }; // #[begin] error

  DataTypes = {
    any: createChainableChecker(),
    // 类型检测
    array: createPrimaryTypeChecker('array'),
    object: createPrimaryTypeChecker('object'),
    func: createPrimaryTypeChecker('function'),
    string: createPrimaryTypeChecker('string'),
    number: createPrimaryTypeChecker('number'),
    bool: createPrimaryTypeChecker('boolean'),
    symbol: createPrimaryTypeChecker('symbol'),
    // 复合类型检测
    arrayOf: createArrayOfChecker,
    instanceOf: createInstanceOfChecker,
    shape: createShapeChecker,
    oneOf: createOneOfChecker,
    oneOfType: createOneOfTypeChecker,
    objectOf: createObjectOfChecker,
    exact: createExactChecker
  };
  /* eslint-enable fecs-valid-var-jsdoc */
  // #[end]
  // module.exports = DataTypes;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建数据检测函数
   */
  // #[begin] error

  /**
   * 创建数据检测函数
   *
   * @param  {Object} dataTypes     数据格式
   * @param  {string} componentName 组件名
   * @return {Function}
   */

  function createDataTypesChecker(dataTypes, componentName) {
    /**
     * 校验 data 是否满足 data types 的格式
     *
     * @param  {*} data 数据
     */
    return function (data) {
      for (var dataTypeName in dataTypes) {
        /* istanbul ignore else  */
        if (dataTypes.hasOwnProperty(dataTypeName)) {
          var dataTypeChecker = dataTypes[dataTypeName];

          if (typeof dataTypeChecker !== 'function') {
            throw new Error('[SAN ERROR] ' + componentName + ':' + dataTypeName + ' is invalid; ' + 'it must be a function, usually from san.DataTypes');
          }

          dataTypeChecker(data, dataTypeName, componentName, dataTypeName);
        }
      }
    };
  } // #[end]
  // module.exports = createDataTypesChecker;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 字符串源码读取类
   */

  /**
   * 字符串源码读取类，用于模板字符串解析过程
   *
   * @class
   * @param {string} source 要读取的字符串
   */


  function Walker(source) {
    this.source = source;
    this.len = this.source.length;
    this.index = 0;
  }
  /**
   * 获取当前字符码
   *
   * @return {number}
   */


  Walker.prototype.currentCode = function () {
    return this.source.charCodeAt(this.index);
  };
  /**
   * 截取字符串片段
   *
   * @param {number} start 起始位置
   * @param {number} end 结束位置
   * @return {string}
   */


  Walker.prototype.cut = function (start, end) {
    return this.source.slice(start, end);
  };
  /**
   * 向前读取字符
   *
   * @param {number} distance 读取字符数
   */


  Walker.prototype.go = function (distance) {
    this.index += distance;
  };
  /**
   * 读取下一个字符，返回下一个字符的 code
   *
   * @return {number}
   */


  Walker.prototype.nextCode = function () {
    this.go(1);
    return this.currentCode();
  };
  /**
   * 获取相应位置字符的 code
   *
   * @param {number} index 字符位置
   * @return {number}
   */


  Walker.prototype.charCode = function (index) {
    return this.source.charCodeAt(index);
  };
  /**
   * 向前读取字符，直到遇到指定字符再停止
   * 未指定字符时，当遇到第一个非空格、制表符的字符停止
   *
   * @param {number=} charCode 指定字符的code
   * @return {boolean} 当指定字符时，返回是否碰到指定的字符
   */


  Walker.prototype.goUntil = function (charCode) {
    var code;

    while (this.index < this.len && (code = this.currentCode())) {
      switch (code) {
        case 32: // 空格 space

        case 9: // 制表符 tab

        case 13: // \r

        case 10:
          // \n
          this.index++;
          break;

        default:
          if (code === charCode) {
            this.index++;
            return 1;
          }

          return;
      }
    }
  };
  /**
   * 向前读取符合规则的字符片段，并返回规则匹配结果
   *
   * @param {RegExp} reg 字符片段的正则表达式
   * @param {boolean} isMatchStart 是否必须匹配当前位置
   * @return {Array?}
   */


  Walker.prototype.match = function (reg, isMatchStart) {
    reg.lastIndex = this.index;
    var match = reg.exec(this.source);

    if (match && (!isMatchStart || this.index === match.index)) {
      this.index = reg.lastIndex;
      return match;
    }
  }; // exports = module.exports = Walker;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 把 kebab case 字符串转换成 camel case
   */

  /**
   * 把 kebab case 字符串转换成 camel case
   *
   * @param {string} source 源字符串
   * @return {string}
   */


  function kebab2camel(source) {
    return source.replace(/-+(.)/ig, function (match, alpha) {
      return alpha.toUpperCase();
    });
  } // exports = module.exports = kebab2camel;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file bool属性表
   */
  // var splitStr2Obj = require('../util/split-str-2-obj');

  /**
   * bool属性表
   *
   * @type {Object}
   */


  var boolAttrs = splitStr2Obj('allowpaymentrequest,async,autofocus,autoplay,' + 'checked,controls,default,defer,disabled,formnovalidate,' + 'hidden,ismap,itemscope,loop,multiple,muted,nomodule,novalidate,' + 'open,readonly,required,reversed,selected,typemustmatch'); // exports = module.exports = boolAttrs;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 表达式类型
   */

  /**
   * 表达式类型
   *
   * @const
   * @type {Object}
   */

  var ExprType = {
    STRING: 1,
    NUMBER: 2,
    BOOL: 3,
    ACCESSOR: 4,
    INTERP: 5,
    CALL: 6,
    TEXT: 7,
    BINARY: 8,
    UNARY: 9,
    TERTIARY: 10,
    OBJECT: 11,
    ARRAY: 12,
    NULL: 13
  }; // exports = module.exports = ExprType;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建访问表达式对象
   */
  // var ExprType = require('./expr-type');

  /**
   * 创建访问表达式对象
   *
   * @param {Array} paths 访问路径
   * @return {Object}
   */

  function createAccessor(paths) {
    return {
      type: 4,
      paths: paths
    };
  } // exports = module.exports = createAccessor;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取字符串
   */
  // var ExprType = require('./expr-type');

  /**
   * 读取字符串
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readString(walker) {
    var startCode = walker.currentCode();
    var startIndex = walker.index;
    var charCode;

    walkLoop: while (charCode = walker.nextCode()) {
      switch (charCode) {
        case 92:
          // \
          walker.go(1);
          break;

        case startCode:
          walker.go(1);
          break walkLoop;
      }
    }

    var literal = walker.cut(startIndex, walker.index);
    return {
      type: 1,
      // 处理字符转义
      value: new Function('return ' + literal)()
    };
  } // exports = module.exports = readString;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取一元表达式
   */
  // var ExprType = require('./expr-type');
  // var readString = require('./read-string');
  // var readNumber = require('./read-number');
  // var readCall = require('./read-call');
  // var readParenthesizedExpr = require('./read-parenthesized-expr');
  // var readTertiaryExpr = require('./read-tertiary-expr');

  /**
   * 读取一元表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readUnaryExpr(walker) {
    walker.goUntil();

    switch (walker.currentCode()) {
      case 33:
        // !
        walker.go(1);
        return {
          type: 9,
          expr: readUnaryExpr(walker),
          operator: 33
        };

      case 34: // "

      case 39:
        // '
        return readString(walker);

      case 45: // -

      case 48: // number

      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return readNumber(walker);

      case 40:
        // (
        return readParenthesizedExpr(walker);
      // array literal

      case 91:
        // [
        walker.go(1);
        var arrItems = [];

        while (!walker.goUntil(93)) {
          // ]
          var item = {};
          arrItems.push(item);

          if (walker.currentCode() === 46 && walker.match(/\.\.\.\s*/g)) {
            item.spread = true;
          }

          item.expr = readTertiaryExpr(walker);
          walker.goUntil(44); // ,
        }

        return {
          type: 12,
          items: arrItems
        };
      // object literal

      case 123:
        // {
        walker.go(1);
        var objItems = [];

        while (!walker.goUntil(125)) {
          // }
          var item = {};
          objItems.push(item);

          if (walker.currentCode() === 46 && walker.match(/\.\.\.\s*/g)) {
            item.spread = true;
            item.expr = readTertiaryExpr(walker);
          } else {
            // #[begin] error
            var walkerIndexBeforeName = walker.index; // #[end]

            item.name = readUnaryExpr(walker); // #[begin] error

            if (item.name.type > 4) {
              throw new Error('[SAN FATAL] unexpect object name: ' + walker.cut(walkerIndexBeforeName, walker.index));
            } // #[end]


            if (walker.goUntil(58)) {
              // :
              item.expr = readTertiaryExpr(walker);
            } else {
              item.expr = item.name;
            }

            if (item.name.type === 4) {
              item.name = item.name.paths[0];
            }
          }

          walker.goUntil(44); // ,
        }

        return {
          type: 11,
          items: objItems
        };
    }

    return readCall(walker);
  } // exports = module.exports = readUnaryExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取数字
   */
  // var ExprType = require('./expr-type');
  // var readUnaryExpr = require('./read-unary-expr');

  /**
   * 读取数字
   *
   * @inner
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readNumber(walker) {
    var match = walker.match(/\s*(-?[0-9]+(\.[0-9]+)?)/g, 1);

    if (match) {
      return {
        type: 2,
        value: +match[1]
      };
    } else if (walker.currentCode() === 45) {
      walker.go(1);
      return {
        type: 9,
        expr: readUnaryExpr(walker),
        operator: 45
      };
    }
  } // exports = module.exports = readNumber;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取ident
   */

  /**
   * 读取ident
   * 这里的 ident 指标识符(identifier)，也就是通常意义上的变量名
   * 这里默认的变量名规则为：由美元符号($)、数字、字母或者下划线(_)构成的字符串
   *
   * @inner
   * @param {Walker} walker 源码读取对象
   * @return {string}
   */


  function readIdent(walker) {
    var match = walker.match(/\s*([\$0-9a-z_]+)/ig, 1); // #[begin] error

    if (!match) {
      throw new Error('[SAN FATAL] expect an ident: ' + walker.cut(walker.index));
    } // #[end]


    return match[1];
  } // exports = module.exports = readIdent;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取三元表达式
   */
  // var ExprType = require('./expr-type');
  // var readLogicalORExpr = require('./read-logical-or-expr');

  /**
   * 读取三元表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readTertiaryExpr(walker) {
    var conditional = readLogicalORExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 63) {
      // ?
      walker.go(1);
      var yesExpr = readTertiaryExpr(walker);
      walker.goUntil();

      if (walker.currentCode() === 58) {
        // :
        walker.go(1);
        return {
          type: 10,
          segs: [conditional, yesExpr, readTertiaryExpr(walker)]
        };
      }
    }

    return conditional;
  } // exports = module.exports = readTertiaryExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取访问表达式
   */
  // var ExprType = require('./expr-type');
  // var createAccessor = require('./create-accessor');
  // var readIdent = require('./read-ident');
  // var readTertiaryExpr = require('./read-tertiary-expr');

  /**
   * 读取访问表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readAccessor(walker) {
    var firstSeg = readIdent(walker);

    switch (firstSeg) {
      case 'true':
      case 'false':
        return {
          type: 3,
          value: firstSeg === 'true'
        };

      case 'null':
        return {
          type: 13
        };
    }

    var result = createAccessor([{
      type: 1,
      value: firstSeg
    }]);
    /* eslint-disable no-constant-condition */

    accessorLoop: while (1) {
      /* eslint-enable no-constant-condition */
      switch (walker.currentCode()) {
        case 46:
          // .
          walker.go(1); // ident as string

          result.paths.push({
            type: 1,
            value: readIdent(walker)
          });
          break;

        case 91:
          // [
          walker.go(1);
          result.paths.push(readTertiaryExpr(walker));
          walker.goUntil(93); // ]

          break;

        default:
          break accessorLoop;
      }
    }

    return result;
  } // exports = module.exports = readAccessor;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取调用
   */
  // var ExprType = require('./expr-type');
  // var readAccessor = require('./read-accessor');
  // var readTertiaryExpr = require('./read-tertiary-expr');

  /**
   * 读取调用
   *
   * @param {Walker} walker 源码读取对象
   * @param {Array=} defaultArgs 默认参数
   * @return {Object}
   */


  function readCall(walker, defaultArgs) {
    walker.goUntil();
    var result = readAccessor(walker);
    var args;

    if (walker.goUntil(40)) {
      // (
      args = [];

      while (!walker.goUntil(41)) {
        // )
        args.push(readTertiaryExpr(walker));
        walker.goUntil(44); // ,
      }
    } else if (defaultArgs) {
      args = defaultArgs;
    }

    if (args) {
      result = {
        type: 6,
        name: result,
        args: args
      };
    }

    return result;
  } // exports = module.exports = readCall;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取括号表达式
   */
  // var readTertiaryExpr = require('./read-tertiary-expr');

  /**
   * 读取括号表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readParenthesizedExpr(walker) {
    walker.go(1);
    var expr = readTertiaryExpr(walker);
    walker.goUntil(41); // )

    expr.parenthesized = true;
    return expr;
  } // exports = module.exports = readParenthesizedExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取乘法表达式
   */
  // var ExprType = require('./expr-type');
  // var readUnaryExpr = require('./read-unary-expr');

  /**
   * 读取乘法表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readMultiplicativeExpr(walker) {
    var expr = readUnaryExpr(walker);

    while (1) {
      walker.goUntil();
      var code = walker.currentCode();

      switch (code) {
        case 37: // %

        case 42: // *

        case 47:
          // /
          walker.go(1);
          expr = {
            type: 8,
            operator: code,
            segs: [expr, readUnaryExpr(walker)]
          };
          continue;
      }

      break;
    }

    return expr;
  } // exports = module.exports = readMultiplicativeExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取加法表达式
   */
  // var ExprType = require('./expr-type');
  // var readMultiplicativeExpr = require('./read-multiplicative-expr');

  /**
   * 读取加法表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readAdditiveExpr(walker) {
    var expr = readMultiplicativeExpr(walker);

    while (1) {
      walker.goUntil();
      var code = walker.currentCode();

      switch (code) {
        case 43: // +

        case 45:
          // -
          walker.go(1);
          expr = {
            type: 8,
            operator: code,
            segs: [expr, readMultiplicativeExpr(walker)]
          };
          continue;
      }

      break;
    }

    return expr;
  } // exports = module.exports = readAdditiveExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取关系判断表达式
   */
  // var ExprType = require('./expr-type');
  // var readAdditiveExpr = require('./read-additive-expr');

  /**
   * 读取关系判断表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readRelationalExpr(walker) {
    var expr = readAdditiveExpr(walker);
    walker.goUntil();
    var code = walker.currentCode();

    switch (code) {
      case 60: // <

      case 62:
        // >
        if (walker.nextCode() === 61) {
          code += 61;
          walker.go(1);
        }

        return {
          type: 8,
          operator: code,
          segs: [expr, readAdditiveExpr(walker)]
        };
    }

    return expr;
  } // exports = module.exports = readRelationalExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取相等比对表达式
   */
  // var ExprType = require('./expr-type');
  // var readRelationalExpr = require('./read-relational-expr');

  /**
   * 读取相等比对表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readEqualityExpr(walker) {
    var expr = readRelationalExpr(walker);
    walker.goUntil();
    var code = walker.currentCode();

    switch (code) {
      case 61: // =

      case 33:
        // !
        if (walker.nextCode() === 61) {
          code += 61;

          if (walker.nextCode() === 61) {
            code += 61;
            walker.go(1);
          }

          return {
            type: 8,
            operator: code,
            segs: [expr, readRelationalExpr(walker)]
          };
        }

        walker.go(-1);
    }

    return expr;
  } // exports = module.exports = readEqualityExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取逻辑与表达式
   */
  // var ExprType = require('./expr-type');
  // var readEqualityExpr = require('./read-equality-expr');

  /**
   * 读取逻辑与表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readLogicalANDExpr(walker) {
    var expr = readEqualityExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 38) {
      // &
      if (walker.nextCode() === 38) {
        walker.go(1);
        return {
          type: 8,
          operator: 76,
          segs: [expr, readLogicalANDExpr(walker)]
        };
      }

      walker.go(-1);
    }

    return expr;
  } // exports = module.exports = readLogicalANDExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 读取逻辑或表达式
   */
  // var ExprType = require('./expr-type');
  // var readLogicalANDExpr = require('./read-logical-and-expr');

  /**
   * 读取逻辑或表达式
   *
   * @param {Walker} walker 源码读取对象
   * @return {Object}
   */


  function readLogicalORExpr(walker) {
    var expr = readLogicalANDExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 124) {
      // |
      if (walker.nextCode() === 124) {
        walker.go(1);
        return {
          type: 8,
          operator: 248,
          segs: [expr, readLogicalORExpr(walker)]
        };
      }

      walker.go(-1);
    }

    return expr;
  } // exports = module.exports = readLogicalORExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析表达式
   */
  // var Walker = require('./walker');
  // var readTertiaryExpr = require('./read-tertiary-expr');

  /**
   * 解析表达式
   *
   * @param {string} source 源码
   * @return {Object}
   */


  function parseExpr(source) {
    if (!source) {
      return;
    }

    if (typeof source === 'object' && source.type) {
      return source;
    }

    var expr = readTertiaryExpr(new Walker(source));
    expr.raw = source;
    return expr;
  } // exports = module.exports = parseExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析调用
   */
  // var Walker = require('./walker');
  // var ExprType = require('./expr-type');
  // var readCall = require('./read-call');

  /**
   * 解析调用
   *
   * @param {string} source 源码
   * @param {Array=} defaultArgs 默认参数
   * @return {Object}
   */


  function parseCall(source, defaultArgs) {
    var expr = readCall(new Walker(source), defaultArgs);

    if (expr.type !== 6) {
      expr = {
        type: 6,
        name: expr,
        args: defaultArgs || []
      };
    }

    expr.raw = source;
    return expr;
  } // exports = module.exports = parseCall;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析插值替换
   */
  // var Walker = require('./walker');
  // var readTertiaryExpr = require('./read-tertiary-expr');
  // var ExprType = require('./expr-type');
  // var readCall = require('./read-call');

  /**
   * 解析插值替换
   *
   * @param {string} source 源码
   * @return {Object}
   */


  function parseInterp(source) {
    var walker = new Walker(source);
    var interp = {
      type: 5,
      expr: readTertiaryExpr(walker),
      filters: [],
      raw: source
    };

    while (walker.goUntil(124)) {
      // |
      var callExpr = readCall(walker, []);

      switch (callExpr.name.paths[0].value) {
        case 'html':
          break;

        case 'raw':
          interp.original = 1;
          break;

        default:
          interp.filters.push(callExpr);
      }
    }

    return interp;
  } // exports = module.exports = parseInterp;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解码 HTML 字符实体
   */


  var ENTITY_DECODE_MAP = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    quot: '\"',
    emsp: '\u2003',
    ensp: '\u2002',
    thinsp: '\u2009',
    copy: '\xa9',
    reg: '\xae',
    zwnj: '\u200c',
    zwj: '\u200d',
    amp: '&'
  };
  /**
   * 解码 HTML 字符实体
   *
   * @param {string} source 要解码的字符串
   * @return {string}
   */

  function decodeHTMLEntity(source) {
    return source.replace(/&#([0-9]+);/g, function (match, code) {
      return String.fromCharCode(+code);
    }).replace(/&#x([0-9a-f]+);/ig, function (match, code) {
      return String.fromCharCode(parseInt(code, 16));
    }).replace(/&([a-z]+);/ig, function (match, code) {
      return ENTITY_DECODE_MAP[code] || match;
    });
  } // exports = module.exports = decodeHTMLEntity;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析文本
   */
  // var Walker = require('./walker');
  // var ExprType = require('./expr-type');
  // var parseInterp = require('./parse-interp');
  // var decodeHTMLEntity = require('../util/decode-html-entity');

  /**
   * 对字符串进行可用于new RegExp的字面化
   *
   * @inner
   * @param {string} source 需要字面化的字符串
   * @return {string} 字符串字面化结果
   */


  function regexpLiteral(source) {
    return source.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+\\]/g, function (c) {
      return '\\' + c;
    });
  }

  var delimRegCache = {};
  /**
   * 解析文本
   *
   * @param {string} source 源码
   * @param {Array?} delimiters 分隔符。默认为 ['{{', '}}']
   * @return {Object}
   */

  function parseText(source, delimiters) {
    delimiters = delimiters || ['{{', '}}'];
    var regCacheKey = delimiters[0] + '>..<' + delimiters[1];
    var exprStartReg = delimRegCache[regCacheKey];

    if (!exprStartReg) {
      exprStartReg = new RegExp(regexpLiteral(delimiters[0]) + '\\s*([\\s\\S]+?)\\s*' + regexpLiteral(delimiters[1]), 'g');
      delimRegCache[regCacheKey] = exprStartReg;
    }

    var exprMatch;
    var walker = new Walker(source);
    var beforeIndex = 0;
    var expr = {
      type: 7,
      segs: []
    };

    function pushStringToSeg(text) {
      text && expr.segs.push({
        type: 1,
        literal: text,
        value: decodeHTMLEntity(text)
      });
    }

    var delimEndLen = delimiters[1].length;

    while ((exprMatch = walker.match(exprStartReg)) != null) {
      var interpSource = exprMatch[1];
      var interpLen = exprMatch[0].length;

      if (walker.cut(walker.index + 1 - delimEndLen, walker.index + 1) === delimiters[1]) {
        interpSource += walker.cut(walker.index, walker.index + 1);
        walker.go(1);
        interpLen++;
      }

      pushStringToSeg(walker.cut(beforeIndex, walker.index - interpLen));
      var interp = parseInterp(interpSource);
      expr.original = expr.original || interp.original;
      expr.segs.push(interp);
      beforeIndex = walker.index;
    }

    pushStringToSeg(walker.cut(beforeIndex));

    if (expr.segs.length === 1 && expr.segs[0].type === 1) {
      expr.value = expr.segs[0].value;
    }

    return expr;
  } // exports = module.exports = parseText;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析指令
   */
  // var Walker = require('./walker');
  // var parseExpr = require('./parse-expr');
  // var parseCall = require('./parse-call');
  // var parseText = require('./parse-text');
  // var readAccessor = require('./read-accessor');
  // var readUnaryExpr = require('./read-unary-expr');

  /**
   * 指令解析器
   *
   * @inner
   * @type {Object}
   */


  var directiveParsers = {
    'for': function (value) {
      var walker = new Walker(value);
      var match = walker.match(/^\s*([$0-9a-z_]+)(\s*,\s*([$0-9a-z_]+))?\s+in\s+/ig, 1);

      if (match) {
        var directive = {
          item: match[1],
          value: readUnaryExpr(walker)
        };

        if (match[3]) {
          directive.index = match[3];
        }

        if (walker.match(/\s*trackby\s+/ig, 1)) {
          var start = walker.index;
          directive.trackBy = readAccessor(walker);
          directive.trackBy.raw = walker.cut(start, walker.index);
        }

        return directive;
      } // #[begin] error


      throw new Error('[SAN FATAL] for syntax error: ' + value); // #[end]
    },
    'ref': function (value, options) {
      return {
        value: parseText(value, options.delimiters)
      };
    },
    'if': function (value) {
      return {
        value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
      };
    },
    'elif': function (value) {
      return {
        value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
      };
    },
    'else': function () {
      return {
        value: {}
      };
    },
    'bind': function (value) {
      return {
        value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
      };
    },
    'html': function (value) {
      return {
        value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
      };
    },
    'transition': function (value) {
      return {
        value: parseCall(value)
      };
    }
  };
  /**
   * 解析指令
   *
   * @param {ANode} aNode 抽象节点
   * @param {string} name 指令名称
   * @param {string} value 指令值
   * @param {Object} options 解析参数
   * @param {Array?} options.delimiters 插值分隔符列表
   */

  function parseDirective(aNode, name, value, options) {
    if (name === 'else-if') {
      name = 'elif';
    }

    var parser = directiveParsers[name];

    if (parser) {
      (aNode.directives[name] = parser(value, options)).raw = value;
    }
  } // exports = module.exports = parseDirective;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析抽象节点属性
   */
  // var each = require('../util/each');
  // var kebab2camel = require('../util/kebab2camel');
  // var boolAttrs = require('../browser/bool-attrs');
  // var ExprType = require('./expr-type');
  // var createAccessor = require('./create-accessor');
  // var parseExpr = require('./parse-expr');
  // var parseCall = require('./parse-call');
  // var parseText = require('./parse-text');
  // var parseDirective = require('./parse-directive');

  /**
   * 解析抽象节点属性
   *
   * @param {ANode} aNode 抽象节点
   * @param {string} name 属性名称
   * @param {string} value 属性值
   * @param {Object} options 解析参数
   * @param {Array?} options.delimiters 插值分隔符列表
   */


  function integrateAttr(aNode, name, value, options) {
    var prefixIndex = name.indexOf('-');
    var realName;
    var prefix;

    if (prefixIndex > 0) {
      prefix = name.slice(0, prefixIndex);
      realName = name.slice(prefixIndex + 1);
    }

    switch (prefix) {
      case 'on':
        var event = {
          name: realName,
          modifier: {}
        };
        aNode.events.push(event);
        var colonIndex;

        while ((colonIndex = value.indexOf(':')) > 0) {
          var modifier = value.slice(0, colonIndex); // eventHandler("dd:aa") 这种情况不能算modifier，需要辨识

          if (!/^[a-z]+$/i.test(modifier)) {
            break;
          }

          event.modifier[modifier] = true;
          value = value.slice(colonIndex + 1);
        }

        event.expr = parseCall(value, [createAccessor([{
          type: 1,
          value: '$event'
        }])]);
        break;

      case 'san':
      case 's':
        parseDirective(aNode, realName, value, options);
        break;

      case 'prop':
        integrateProp(aNode, realName, value, options);
        break;

      case 'var':
        if (!aNode.vars) {
          aNode.vars = [];
        }

        realName = kebab2camel(realName);
        aNode.vars.push({
          name: realName,
          expr: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        });
        break;

      default:
        integrateProp(aNode, name, value, options);
    }
  }
  /**
   * 解析抽象节点绑定属性
   *
   * @inner
   * @param {ANode} aNode 抽象节点
   * @param {string} name 属性名称
   * @param {string} rawValue 属性值
   * @param {Object} options 解析参数
   * @param {Array?} options.delimiters 插值分隔符列表
   */


  function integrateProp(aNode, name, rawValue, options) {
    // parse two way binding, e.g. value="{=ident=}"
    var value = rawValue || '';
    var xMatch = value.match(/^\{=\s*(.*?)\s*=\}$/);

    if (xMatch) {
      aNode.props.push({
        name: name,
        expr: parseExpr(xMatch[1]),
        x: 1,
        raw: value
      });
      return;
    }

    var expr = parseText(value, options.delimiters); // 这里不能把只有一个插值的属性抽取
    // 因为插值里的值可能是html片段，容易被注入
    // 组件的数据绑定在组件init时做抽取

    switch (name) {
      case 'class':
      case 'style':
        each(expr.segs, function (seg) {
          if (seg.type === 5) {
            seg.filters.push({
              type: 6,
              name: createAccessor([{
                type: 1,
                value: '_' + name
              }]),
              args: []
            });
          }
        });
        break;
    }

    if (expr.type === 7) {
      switch (expr.segs.length) {
        case 0:
          if (boolAttrs[name]) {
            expr = {
              type: 3,
              value: true
            };
          }

          break;

        case 1:
          expr = expr.segs[0];

          if (expr.type === 5 && expr.filters.length === 0) {
            expr = expr.expr;
          }

      }
    }

    aNode.props.push({
      name: name,
      expr: expr,
      raw: rawValue
    });
  } // exports = module.exports = integrateAttr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 解析模板
   */
  // var Walker = require('./walker');
  // var integrateAttr = require('./integrate-attr');
  // var parseText = require('./parse-text');
  // var svgTags = require('../browser/svg-tags');
  // var autoCloseTags = require('../browser/auto-close-tags');
  // #[begin] error


  function getXPath(stack, currentTagName) {
    var path = ['ROOT'];

    for (var i = 1, len = stack.length; i < len; i++) {
      path.push(stack[i].tagName);
    }

    if (currentTagName) {
      path.push(currentTagName);
    }

    return path.join('>');
  } // #[end]

  /* eslint-disable fecs-max-statements */

  /**
   * 解析 template
   *
   * @param {string} source template源码
   * @param {Object?} options 解析参数
   * @param {string?} options.trimWhitespace 空白文本的处理策略。none|blank|all
   * @param {Array?} options.delimiters 插值分隔符列表
   * @return {ANode}
   */


  function parseTemplate(source, options) {
    options = options || {};
    options.trimWhitespace = options.trimWhitespace || 'none';
    var rootNode = {
      directives: {},
      props: [],
      events: [],
      children: []
    };

    if (typeof source !== 'string') {
      return rootNode;
    }

    source = source.replace(/<!--([\s\S]*?)-->/mg, '').replace(/(^\s+|\s+$)/g, '');
    var walker = new Walker(source);
    var tagReg = /<(\/)?([a-z][a-z0-9-]*)\s*/ig;
    var attrReg = /([-:0-9a-z\[\]_]+)(\s*=\s*(['"])([^\3]*?)\3)?\s*/ig;
    var tagMatch;
    var currentNode = rootNode;
    var stack = [rootNode];
    var stackIndex = 0;
    var beforeLastIndex = 0;

    while ((tagMatch = walker.match(tagReg)) != null) {
      var tagMatchStart = walker.index - tagMatch[0].length;
      var tagEnd = tagMatch[1];
      var tagName = tagMatch[2];

      if (!svgTags[tagName]) {
        tagName = tagName.toLowerCase();
      } // 62: >
      // 47: /
      // 处理 </xxxx >


      if (tagEnd) {
        if (walker.currentCode() === 62) {
          // 满足关闭标签的条件时，关闭标签
          // 向上查找到对应标签，找不到时忽略关闭
          var closeIndex = stackIndex; // #[begin] error
          // 如果正在闭合一个自闭合的标签，例如 </input>，报错

          if (autoCloseTags[tagName]) {
            throw new Error('' + '[SAN ERROR] ' + getXPath(stack, tagName) + ' is a `auto closed` tag, ' + 'so it cannot be closed with </' + tagName + '>');
          } // 如果关闭的 tag 和当前打开的不一致，报错


          if (stack[closeIndex].tagName !== tagName // 这里要把 table 自动添加 tbody 的情况给去掉
          && !(tagName === 'table' && stack[closeIndex].tagName === 'tbody')) {
            throw new Error('[SAN ERROR] ' + getXPath(stack) + ' is closed with ' + tagName);
          } // #[end]


          pushTextNode(source.slice(beforeLastIndex, tagMatchStart));

          while (closeIndex > 0 && stack[closeIndex].tagName !== tagName) {
            closeIndex--;
          }

          if (closeIndex > 0) {
            stackIndex = closeIndex - 1;
            currentNode = stack[stackIndex];
          }

          walker.go(1);
        } // #[begin] error
        else {
            // 处理 </xxx 非正常闭合标签
            // 如果闭合标签时，匹配后的下一个字符是 <，即下一个标签的开始，那么当前闭合标签未闭合
            if (walker.currentCode() === 60) {
              throw new Error('' + '[SAN ERROR] ' + getXPath(stack) + '\'s close tag not closed');
            } // 闭合标签有属性


            throw new Error('' + '[SAN ERROR] ' + getXPath(stack) + '\'s close tag has attributes');
          } // #[end]

      } else {
        var aElement = {
          directives: {},
          props: [],
          events: [],
          children: [],
          tagName: tagName
        };
        var tagClose = autoCloseTags[tagName]; // 解析 attributes

        /* eslint-disable no-constant-condition */

        while (1) {
          /* eslint-enable no-constant-condition */
          var nextCharCode = walker.currentCode(); // 标签结束时跳出 attributes 读取
          // 标签可能直接结束或闭合结束

          if (nextCharCode === 62) {
            walker.go(1);
            break;
          } // 遇到 /> 按闭合处理


          if (nextCharCode === 47 && walker.charCode(walker.index + 1) === 62) {
            walker.go(2);
            tagClose = 1;
            break;
          } // template 串结束了
          // 这时候，说明这个读取周期的所有内容，都是text


          if (!nextCharCode) {
            pushTextNode(walker.cut(beforeLastIndex));
            aElement = null;
            break;
          } // #[begin] error
          // 在处理一个 open 标签时，如果遇到了 <， 即下一个标签的开始，则当前标签未能正常闭合，报错


          if (nextCharCode === 60) {
            throw new Error('[SAN ERROR] ' + getXPath(stack, tagName) + ' is not closed');
          } // #[end]
          // 读取 attribute


          var attrMatch = walker.match(attrReg);

          if (attrMatch) {
            // #[begin] error
            // 如果属性有 =，但没取到 value，报错
            if (walker.charCode(attrMatch.index + attrMatch[1].length) === 61 && !attrMatch[2]) {
              throw new Error('' + '[SAN ERROR] ' + getXPath(stack, tagName) + ' attribute `' + attrMatch[1] + '` is not wrapped with ""');
            } // #[end]


            integrateAttr(aElement, attrMatch[1], attrMatch[3] ? attrMatch[4] : void 0, options);
          }
        }

        if (aElement) {
          pushTextNode(source.slice(beforeLastIndex, tagMatchStart)); // match if directive for else/elif directive

          var elseDirective = aElement.directives['else'] // eslint-disable-line dot-notation
          || aElement.directives.elif;

          if (elseDirective) {
            var parentChildrenLen = currentNode.children.length;
            var ifANode = null;

            while (parentChildrenLen--) {
              var parentChild = currentNode.children[parentChildrenLen];

              if (parentChild.textExpr) {
                currentNode.children.splice(parentChildrenLen, 1);
                continue;
              }

              ifANode = parentChild;
              break;
            } // #[begin] error


            if (!ifANode || !parentChild.directives['if']) {
              // eslint-disable-line dot-notation
              throw new Error('[SAN FATEL] else not match if.');
            } // #[end]


            if (ifANode) {
              ifANode.elses = ifANode.elses || [];
              ifANode.elses.push(aElement);
            }
          } else {
            if (aElement.tagName === 'tr' && currentNode.tagName === 'table') {
              var tbodyNode = {
                directives: {},
                props: [],
                events: [],
                children: [],
                tagName: 'tbody'
              };
              currentNode.children.push(tbodyNode);
              currentNode = tbodyNode;
              stack[++stackIndex] = tbodyNode;
            }

            currentNode.children.push(aElement);
          }

          if (!tagClose) {
            currentNode = aElement;
            stack[++stackIndex] = aElement;
          }
        }
      }

      beforeLastIndex = walker.index;
    }

    pushTextNode(walker.cut(beforeLastIndex));
    return rootNode;
    /**
     * 在读取栈中添加文本节点
     *
     * @inner
     * @param {string} text 文本内容
     */

    function pushTextNode(text) {
      switch (options.trimWhitespace) {
        case 'blank':
          if (/^\s+$/.test(text)) {
            text = null;
          }

          break;

        case 'all':
          text = text.replace(/(^\s+|\s+$)/g, '');
          break;
      }

      if (text) {
        currentNode.children.push({
          textExpr: parseText(text, options.delimiters)
        });
      }
    }
  }
  /* eslint-enable fecs-max-statements */
  // exports = module.exports = parseTemplate;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 默认filter
   */

  /* eslint-disable fecs-camelcase */


  function defaultStyleFilter(source) {
    if (typeof source === 'object') {
      var result = '';

      for (var key in source) {
        /* istanbul ignore else  */
        if (source.hasOwnProperty(key)) {
          result += key + ':' + source[key] + ';';
        }
      }

      return result;
    }

    return source;
  }
  /**
   * 默认filter
   *
   * @const
   * @type {Object}
   */


  var DEFAULT_FILTERS = {
    /**
     * URL编码filter
     *
     * @param {string} source 源串
     * @return {string} 替换结果串
     */
    url: encodeURIComponent,
    _class: function (source) {
      if (source instanceof Array) {
        return source.join(' ');
      }

      return source;
    },
    _style: defaultStyleFilter,
    _xclass: function (outer, inner) {
      if (outer instanceof Array) {
        outer = outer.join(' ');
      }

      if (outer) {
        if (inner) {
          return inner + ' ' + outer;
        }

        return outer;
      }

      return inner;
    },
    _xstyle: function (outer, inner) {
      outer = outer && defaultStyleFilter(outer);

      if (outer) {
        if (inner) {
          return inner + ';' + outer;
        }

        return outer;
      }

      return inner;
    }
  };
  /* eslint-enable fecs-camelcase */
  // exports = module.exports = DEFAULT_FILTERS;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 表达式计算
   */
  // var ExprType = require('../parser/expr-type');
  // var extend = require('../util/extend');
  // var DEFAULT_FILTERS = require('./default-filters');
  // var evalArgs = require('./eval-args');

  /**
   * 计算表达式的值
   *
   * @param {Object} expr 表达式对象
   * @param {Data} data 数据容器对象
   * @param {Component=} owner 所属组件环境
   * @return {*}
   */

  function evalExpr(expr, data, owner) {
    if (expr.value != null) {
      return expr.value;
    }

    var value;

    switch (expr.type) {
      case 13:
        return null;

      case 9:
        value = evalExpr(expr.expr, data, owner);

        switch (expr.operator) {
          case 33:
            value = !value;
            break;

          case 45:
            value = 0 - value;
            break;
        }

        return value;

      case 8:
        value = evalExpr(expr.segs[0], data, owner);
        var rightValue = evalExpr(expr.segs[1], data, owner);
        /* eslint-disable eqeqeq */

        switch (expr.operator) {
          case 37:
            value = value % rightValue;
            break;

          case 43:
            value = value + rightValue;
            break;

          case 45:
            value = value - rightValue;
            break;

          case 42:
            value = value * rightValue;
            break;

          case 47:
            value = value / rightValue;
            break;

          case 60:
            value = value < rightValue;
            break;

          case 62:
            value = value > rightValue;
            break;

          case 76:
            value = value && rightValue;
            break;

          case 94:
            value = value != rightValue;
            break;

          case 121:
            value = value <= rightValue;
            break;

          case 122:
            value = value == rightValue;
            break;

          case 123:
            value = value >= rightValue;
            break;

          case 155:
            value = value !== rightValue;
            break;

          case 183:
            value = value === rightValue;
            break;

          case 248:
            value = value || rightValue;
            break;
        }
        /* eslint-enable eqeqeq */


        return value;

      case 10:
        return evalExpr(expr.segs[evalExpr(expr.segs[0], data, owner) ? 1 : 2], data, owner);

      case 12:
        value = [];

        for (var i = 0, l = expr.items.length; i < l; i++) {
          var item = expr.items[i];
          var itemValue = evalExpr(item.expr, data, owner);

          if (item.spread) {
            itemValue && (value = value.concat(itemValue));
          } else {
            value.push(itemValue);
          }
        }

        return value;

      case 11:
        value = {};

        for (var i = 0, l = expr.items.length; i < l; i++) {
          var item = expr.items[i];
          var itemValue = evalExpr(item.expr, data, owner);

          if (item.spread) {
            itemValue && extend(value, itemValue);
          } else {
            value[evalExpr(item.name, data, owner)] = itemValue;
          }
        }

        return value;

      case 4:
        return data.get(expr);

      case 5:
        value = evalExpr(expr.expr, data, owner);

        if (owner) {
          for (var i = 0, l = expr.filters.length; i < l; i++) {
            var filter = expr.filters[i];
            var filterName = filter.name.paths[0].value;

            switch (filterName) {
              case 'url':
              case '_class':
              case '_style':
                value = DEFAULT_FILTERS[filterName](value);
                break;

              case '_xclass':
              case '_xstyle':
                value = value = DEFAULT_FILTERS[filterName](value, evalExpr(filter.args[0], data, owner));
                break;

              default:
                value = owner.filters[filterName] && owner.filters[filterName].apply(owner, [value].concat(evalArgs(filter.args, data, owner)));
            }
          }
        }

        if (value == null) {
          value = '';
        }

        return value;

      case 6:
        if (owner && expr.name.type === 4) {
          var method = owner;
          var pathsLen = expr.name.paths.length;

          for (var i = 0; method && i < pathsLen; i++) {
            method = method[evalExpr(expr.name.paths[i], data, owner)];
          }

          if (method) {
            value = method.apply(owner, evalArgs(expr.args, data, owner));
          }
        }

        break;

      /* eslint-disable no-redeclare */

      case 7:
        var buf = '';

        for (var i = 0, l = expr.segs.length; i < l; i++) {
          var seg = expr.segs[i];
          buf += seg.value || evalExpr(seg, data, owner);
        }

        return buf;
    }

    return value;
  } // exports = module.exports = evalExpr;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 为函数调用计算参数数组的值
   */
  // var evalExpr = require('./eval-expr');

  /**
   * 为函数调用计算参数数组的值
   *
   * @param {Array} args 参数表达式列表
   * @param {Data} data 数据环境
   * @param {Component} owner 组件环境
   * @return {Array}
   */


  function evalArgs(args, data, owner) {
    var result = [];

    for (var i = 0; i < args.length; i++) {
      result.push(evalExpr(args[i], data, owner));
    }

    return result;
  } // exports = module.exports = evalArgs;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 比较变更表达式与目标表达式之间的关系
   */
  // var ExprType = require('../parser/expr-type');
  // var evalExpr = require('./eval-expr');

  /**
   * 判断变更表达式与多个表达式之间的关系，0为完全没关系，1为有关系
   *
   * @inner
   * @param {Object} changeExpr 目标表达式
   * @param {Array} exprs 多个源表达式
   * @param {Data} data 表达式所属数据环境
   * @return {number}
   */


  function changeExprCompareExprs(changeExpr, exprs, data) {
    for (var i = 0, l = exprs.length; i < l; i++) {
      if (changeExprCompare(changeExpr, exprs[i], data)) {
        return 1;
      }
    }

    return 0;
  }
  /**
   * 比较变更表达式与目标表达式之间的关系，用于视图更新判断
   * 视图更新需要根据其关系，做出相应的更新行为
   *
   * 0: 完全没关系
   * 1: 变更表达式是目标表达式的母项(如a与a.b) 或 表示需要完全变化
   * 2: 变更表达式是目标表达式相等
   * >2: 变更表达式是目标表达式的子项，如a.b.c与a.b
   *
   * @param {Object} changeExpr 变更表达式
   * @param {Object} expr 要比较的目标表达式
   * @param {Data} data 表达式所属数据环境
   * @return {number}
   */


  function changeExprCompare(changeExpr, expr, data) {
    var result = 0;

    if (!expr.changeCache) {
      expr.changeCache = {};
    }

    if (changeExpr.raw && !expr.dynamic) {
      if (expr.changeCache[changeExpr.raw] != null) {
        return expr.changeCache[changeExpr.raw];
      }
    }

    switch (expr.type) {
      case 4:
        var paths = expr.paths;
        var pathsLen = paths.length;
        var changePaths = changeExpr.paths;
        var changeLen = changePaths.length;
        result = 1;

        for (var i = 0; i < pathsLen; i++) {
          var pathExpr = paths[i];
          var pathExprValue = pathExpr.value;

          if (pathExprValue == null && changeExprCompare(changeExpr, pathExpr, data)) {
            result = 1;
            break;
          }

          if (result && i < changeLen
          /* eslint-disable eqeqeq */
          && (pathExprValue || evalExpr(pathExpr, data)) != changePaths[i].value
          /* eslint-enable eqeqeq */
          ) {
              result = 0;
            }
        }

        if (result) {
          result = Math.max(1, changeLen - pathsLen + 2);
        }

        break;

      case 9:
        result = changeExprCompare(changeExpr, expr.expr, data) ? 1 : 0;
        break;

      case 7:
      case 8:
      case 10:
        result = changeExprCompareExprs(changeExpr, expr.segs, data);
        break;

      case 12:
      case 11:
        for (var i = 0; i < expr.items.length; i++) {
          if (changeExprCompare(changeExpr, expr.items[i].expr, data)) {
            result = 1;
            break;
          }
        }

        break;

      case 5:
        if (changeExprCompare(changeExpr, expr.expr, data)) {
          result = 1;
        } else {
          for (var i = 0; i < expr.filters.length; i++) {
            if (changeExprCompareExprs(changeExpr, expr.filters[i].args, data)) {
              result = 1;
              break;
            }
          }
        }

        break;

      case 6:
        if (changeExprCompareExprs(changeExpr, expr.name.paths, data) || changeExprCompareExprs(changeExpr, expr.args, data)) {
          result = 1;
        }

        break;
    }

    if (changeExpr.raw && !expr.dynamic) {
      expr.changeCache[changeExpr.raw] = result;
    }

    return result;
  } // exports = module.exports = changeExprCompare;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 数据变更类型枚举
   */

  /**
   * 数据变更类型枚举
   *
   * @const
   * @type {Object}
   */


  var DataChangeType = {
    SET: 1,
    SPLICE: 2
  }; // exports = module.exports = DataChangeType;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 生命周期类
   */

  function lifeCycleOwnIs(name) {
    return this[name];
  }
  /* eslint-disable fecs-valid-var-jsdoc */

  /**
   * 节点生命周期信息
   *
   * @inner
   * @type {Object}
   */


  var LifeCycle = {
    start: {},
    compiled: {
      is: lifeCycleOwnIs,
      compiled: true
    },
    inited: {
      is: lifeCycleOwnIs,
      compiled: true,
      inited: true
    },
    created: {
      is: lifeCycleOwnIs,
      compiled: true,
      inited: true,
      created: true
    },
    attached: {
      is: lifeCycleOwnIs,
      compiled: true,
      inited: true,
      created: true,
      attached: true
    },
    leaving: {
      is: lifeCycleOwnIs,
      compiled: true,
      inited: true,
      created: true,
      attached: true,
      leaving: true
    },
    detached: {
      is: lifeCycleOwnIs,
      compiled: true,
      inited: true,
      created: true,
      detached: true
    },
    disposed: {
      is: lifeCycleOwnIs,
      disposed: true
    }
  };
  /* eslint-enable fecs-valid-var-jsdoc */
  // exports = module.exports = LifeCycle;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 节点类型
   */

  /**
   * 节点类型
   *
   * @const
   * @type {Object}
   */

  var NodeType = {
    TEXT: 1,
    IF: 2,
    FOR: 3,
    ELEM: 4,
    CMPT: 5,
    SLOT: 6,
    TPL: 7,
    LOADER: 8
  }; // exports = module.exports = NodeType;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 获取 ANode props 数组中相应 name 的项
   */

  /**
   * 获取 ANode props 数组中相应 name 的项
   *
   * @param {Object} aNode ANode对象
   * @param {string} name name属性匹配串
   * @return {Object}
   */

  function getANodeProp(aNode, name) {
    var index = aNode.hotspot.props[name];

    if (index != null) {
      return aNode.props[index];
    }
  } // exports = module.exports = getANodeProp;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 获取属性处理对象
   */
  // var contains = require('../util/contains');
  // var empty = require('../util/empty');
  // var svgTags = require('../browser/svg-tags');
  // var ie = require('../browser/ie');
  // var evalExpr = require('../runtime/eval-expr');
  // var getANodeProp = require('./get-a-node-prop');
  // var NodeType = require('./node-type');

  /**
   * HTML 属性和 DOM 操作属性的对照表
   *
   * @inner
   * @const
   * @type {Object}
   */


  var HTML_ATTR_PROP_MAP = {
    'readonly': 'readOnly',
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'colspan': 'colSpan',
    'rowspan': 'rowSpan',
    'valign': 'vAlign',
    'usemap': 'useMap',
    'frameborder': 'frameBorder',
    'for': 'htmlFor'
  };
  /**
   * 默认的元素的属性设置的变换方法
   *
   * @inner
   * @type {Object}
   */

  function defaultElementPropHandler(el, value, name) {
    var propName = HTML_ATTR_PROP_MAP[name] || name;
    var valueNotNull = value != null; // input 的 type 是个特殊属性，其实也应该用 setAttribute
    // 但是 type 不应该运行时动态改变，否则会有兼容性问题
    // 所以这里直接就不管了

    if (propName in el) {
      el[propName] = valueNotNull ? value : '';
    } else if (valueNotNull) {
      el.setAttribute(name, value);
    }

    if (!valueNotNull) {
      el.removeAttribute(name);
    }
  }

  function svgPropHandler(el, value, name) {
    el.setAttribute(name, value);
  }

  function boolPropHandler(el, value, name) {
    var propName = HTML_ATTR_PROP_MAP[name] || name;
    el[propName] = !!value;
  }
  /* eslint-disable fecs-properties-quote */

  /**
   * 默认的属性设置变换方法
   *
   * @inner
   * @type {Object}
   */


  var defaultElementPropHandlers = {
    style: function (el, value) {
      el.style.cssText = value;
    },
    'class': function (el, value) {
      // eslint-disable-line
      if ( // #[begin] allua
      ie || // #[end]
      el.className !== value) {
        el.className = value;
      }
    },
    slot: empty,
    draggable: boolPropHandler
  };
  /* eslint-enable fecs-properties-quote */

  var analInputChecker = {
    checkbox: contains,
    radio: function (a, b) {
      return a === b;
    }
  };

  function analInputCheckedState(element, value) {
    var bindValue = getANodeProp(element.aNode, 'value');
    var bindType = getANodeProp(element.aNode, 'type');

    if (bindValue && bindType) {
      var type = evalExpr(bindType.expr, element.scope, element.owner);

      if (analInputChecker[type]) {
        var bindChecked = getANodeProp(element.aNode, 'checked');

        if (bindChecked != null && !bindChecked.hintExpr) {
          bindChecked.hintExpr = bindValue.expr;
        }

        return !!analInputChecker[type](value, element.data ? evalExpr(bindValue.expr, element.data, element) : evalExpr(bindValue.expr, element.scope, element.owner));
      }
    }
  }

  var elementPropHandlers = {
    input: {
      multiple: boolPropHandler,
      checked: function (el, value, name, element) {
        var state = analInputCheckedState(element, value);
        boolPropHandler(el, state != null ? state : value, 'checked', element); // #[begin] allua
        // 代码不用抽出来防重复，allua内的代码在现代浏览器版本会被编译时干掉，gzip也会处理重复问题
        // see: #378

        /* istanbul ignore if */

        if (ie && ie < 8 && !element.lifeCycle.attached) {
          boolPropHandler(el, state != null ? state : value, 'defaultChecked', element);
        } // #[end]

      },
      readonly: boolPropHandler,
      disabled: boolPropHandler,
      autofocus: boolPropHandler,
      required: boolPropHandler
    },
    option: {
      value: function (el, value, name, element) {
        defaultElementPropHandler(el, value, name, element);

        if (isOptionSelected(element, value)) {
          el.selected = true;
        }
      }
    },
    select: {
      readonly: boolPropHandler,
      disabled: boolPropHandler,
      autofocus: boolPropHandler,
      required: boolPropHandler
    },
    textarea: {
      readonly: boolPropHandler,
      disabled: boolPropHandler,
      autofocus: boolPropHandler,
      required: boolPropHandler
    },
    button: {
      disabled: boolPropHandler,
      autofocus: boolPropHandler,
      type: function (el, value) {
        el.setAttribute('type', value);
      }
    }
  };

  function isOptionSelected(element, value) {
    var parentSelect = element.parent;

    while (parentSelect) {
      if (parentSelect.tagName === 'select') {
        break;
      }

      parentSelect = parentSelect.parent;
    }

    if (parentSelect) {
      var selectValue = null;
      var prop;
      var expr;

      if ((prop = getANodeProp(parentSelect.aNode, 'value')) && (expr = prop.expr)) {
        selectValue = parentSelect.nodeType === 5 ? evalExpr(expr, parentSelect.data, parentSelect) : evalExpr(expr, parentSelect.scope, parentSelect.owner) || '';
      }

      if (selectValue === value) {
        return 1;
      }
    }
  }
  /**
   * 获取属性处理对象
   *
   * @param {string} tagName 元素tag
   * @param {string} attrName 属性名
   * @return {Object}
   */


  function getPropHandler(tagName, attrName) {
    if (svgTags[tagName]) {
      return svgPropHandler;
    }

    var tagPropHandlers = elementPropHandlers[tagName];

    if (!tagPropHandlers) {
      tagPropHandlers = elementPropHandlers[tagName] = {};
    }

    var propHandler = tagPropHandlers[attrName];

    if (!propHandler) {
      propHandler = defaultElementPropHandlers[attrName] || defaultElementPropHandler;
      tagPropHandlers[attrName] = propHandler;
    }

    return propHandler;
  } // exports = module.exports = getPropHandler;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 判断变更是否来源于元素
   */

  /**
   * 判断变更是否来源于元素，来源于元素时，视图更新需要阻断
   *
   * @param {Object} change 变更对象
   * @param {Element} element 元素
   * @param {string?} propName 属性名，可选。需要精确判断是否来源于此属性时传入
   * @return {boolean}
   */


  function isDataChangeByElement(change, element, propName) {
    var changeTarget = change.option.target;
    return changeTarget && changeTarget.node === element && (!propName || changeTarget.prop === propName);
  } // exports = module.exports = isDataChangeByElement;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 在对象上使用accessor表达式查找方法
   */
  // var evalExpr = require('../runtime/eval-expr');

  /**
   * 在对象上使用accessor表达式查找方法
   *
   * @param {Object} source 源对象
   * @param {Object} nameExpr 表达式
   * @param {Data} data 所属数据环境
   * @return {Function}
   */


  function findMethod(source, nameExpr, data) {
    var method = source;

    for (var i = 0; method != null && i < nameExpr.paths.length; i++) {
      method = method[evalExpr(nameExpr.paths[i], data)];
    }

    return method;
  } // exports = module.exports = findMethod;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 数据类
   */
  // var ExprType = require('../parser/expr-type');
  // var evalExpr = require('./eval-expr');
  // var DataChangeType = require('./data-change-type');
  // var createAccessor = require('../parser/create-accessor');
  // var parseExpr = require('../parser/parse-expr');

  /**
   * 数据类
   *
   * @class
   * @param {Object?} data 初始数据
   * @param {Model?} parent 父级数据容器
   */


  function Data(data, parent) {
    this.parent = parent;
    this.raw = data || {};
    this.listeners = [];
  } // #[begin] error
  // 以下两个函数只在开发模式下可用，在生产模式下不存在

  /**
   * DataTypes 检测
   */


  Data.prototype.checkDataTypes = function () {
    if (this.typeChecker) {
      this.typeChecker(this.raw);
    }
  };
  /**
   * 设置 type checker
   *
   * @param  {Function} typeChecker 类型校验器
   */


  Data.prototype.setTypeChecker = function (typeChecker) {
    this.typeChecker = typeChecker;
  }; // #[end]

  /**
   * 添加数据变更的事件监听器
   *
   * @param {Function} listener 监听函数
   */


  Data.prototype.listen = function (listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    }
  };
  /**
   * 移除数据变更的事件监听器
   *
   * @param {Function} listener 监听函数
   */


  Data.prototype.unlisten = function (listener) {
    var len = this.listeners.length;

    while (len--) {
      if (!listener || this.listeners[len] === listener) {
        this.listeners.splice(len, 1);
      }
    }
  };
  /**
   * 触发数据变更
   *
   * @param {Object} change 变更信息对象
   */


  Data.prototype.fire = function (change) {
    if (change.option.silent || change.option.silence || change.option.quiet) {
      return;
    }

    for (var i = 0; i < this.listeners.length; i++) {
      this.listeners[i].call(this, change);
    }
  };
  /**
   * 获取数据项
   *
   * @param {string|Object?} expr 数据项路径
   * @param {Data?} callee 当前数据获取的调用环境
   * @return {*}
   */


  Data.prototype.get = function (expr, callee) {
    var value = this.raw;

    if (!expr) {
      return value;
    }

    if (typeof expr !== 'object') {
      expr = parseExpr(expr);
    }

    var paths = expr.paths;
    callee = callee || this;
    value = value[paths[0].value];

    if (value == null && this.parent) {
      value = this.parent.get(expr, callee);
    } else {
      for (var i = 1, l = paths.length; value != null && i < l; i++) {
        value = value[paths[i].value || evalExpr(paths[i], callee)];
      }
    }

    return value;
  };
  /**
   * 数据对象变更操作
   *
   * @inner
   * @param {Object|Array} source 要变更的源数据
   * @param {Array} exprPaths 属性路径
   * @param {number} pathsStart 当前处理的属性路径指针位置
   * @param {number} pathsLen 属性路径长度
   * @param {*} value 变更属性值
   * @param {Data} data 对应的Data对象
   * @return {*} 变更后的新数据
   */


  function immutableSet(source, exprPaths, pathsStart, pathsLen, value, data) {
    if (pathsStart >= pathsLen) {
      return value;
    }

    if (source == null) {
      source = {};
    }

    var pathExpr = exprPaths[pathsStart];
    var prop = evalExpr(pathExpr, data);
    var result = source;

    if (source instanceof Array) {
      var index = +prop;
      prop = isNaN(index) ? prop : index;
      result = source.slice(0);
      result[prop] = immutableSet(source[prop], exprPaths, pathsStart + 1, pathsLen, value, data);
    } else if (typeof source === 'object') {
      result = {};

      for (var key in source) {
        /* istanbul ignore else  */
        if (key !== prop && source.hasOwnProperty(key)) {
          result[key] = source[key];
        }
      }

      result[prop] = immutableSet(source[prop], exprPaths, pathsStart + 1, pathsLen, value, data);
    }

    if (pathExpr.value == null) {
      exprPaths[pathsStart] = {
        type: typeof prop === 'string' ? 1 : 2,
        value: prop
      };
    }

    return result;
  }
  /**
   * 设置数据项
   *
   * @param {string|Object} expr 数据项路径
   * @param {*} value 数据值
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   */


  Data.prototype.set = function (expr, value, option) {
    option = option || {}; // #[begin] error

    var exprRaw = expr; // #[end]

    expr = parseExpr(expr); // #[begin] error

    if (expr.type !== 4) {
      throw new Error('[SAN ERROR] Invalid Expression in Data set: ' + exprRaw);
    } // #[end]


    if (this.get(expr) === value && !option.force) {
      return;
    }

    expr = {
      type: 4,
      paths: expr.paths.slice(0),
      raw: expr.raw
    };
    var prop = expr.paths[0].value;
    this.raw[prop] = immutableSet(this.raw[prop], expr.paths, 1, expr.paths.length, value, this);
    this.fire({
      type: 1,
      expr: expr,
      value: value,
      option: option
    }); // #[begin] error

    this.checkDataTypes(); // #[end]
  };
  /**
   * 合并更新数据项
   *
   * @param {string|Object} expr 数据项路径
   * @param {Object} source 待合并的数据值
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   */


  Data.prototype.merge = function (expr, source, option) {
    option = option || {}; // #[begin] error

    var exprRaw = expr; // #[end]

    expr = parseExpr(expr); // #[begin] error

    if (expr.type !== 4) {
      throw new Error('[SAN ERROR] Invalid Expression in Data merge: ' + exprRaw);
    }

    if (typeof this.get(expr) !== 'object') {
      throw new Error('[SAN ERROR] Merge Expects a Target of Type \'object\'; got ' + typeof oldValue);
    }

    if (typeof source !== 'object') {
      throw new Error('[SAN ERROR] Merge Expects a Source of Type \'object\'; got ' + typeof source);
    } // #[end]


    for (var key in source) {
      // eslint-disable-line
      this.set(createAccessor(expr.paths.concat([{
        type: 1,
        value: key
      }])), source[key], option);
    }
  };
  /**
   * 基于更新函数更新数据项
   *
   * @param {string|Object} expr 数据项路径
   * @param {Function} fn 数据处理函数
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   */


  Data.prototype.apply = function (expr, fn, option) {
    // #[begin] error
    var exprRaw = expr; // #[end]

    expr = parseExpr(expr); // #[begin] error

    if (expr.type !== 4) {
      throw new Error('[SAN ERROR] Invalid Expression in Data apply: ' + exprRaw);
    } // #[end]


    var oldValue = this.get(expr); // #[begin] error

    if (typeof fn !== 'function') {
      throw new Error('[SAN ERROR] Invalid Argument\'s Type in Data apply: ' + 'Expected Function but got ' + typeof fn);
    } // #[end]


    this.set(expr, fn(oldValue), option);
  };
  /**
   * 数组数据项splice操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {Array} args splice 接受的参数列表，数组项与Array.prototype.splice的参数一致
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   * @return {Array} 新数组
   */


  Data.prototype.splice = function (expr, args, option) {
    option = option || {}; // #[begin] error

    var exprRaw = expr; // #[end]

    expr = parseExpr(expr); // #[begin] error

    if (expr.type !== 4) {
      throw new Error('[SAN ERROR] Invalid Expression in Data splice: ' + exprRaw);
    } // #[end]


    expr = {
      type: 4,
      paths: expr.paths.slice(0),
      raw: expr.raw
    };
    var target = this.get(expr);
    var returnValue = [];

    if (target instanceof Array) {
      var index = args[0];
      var len = target.length;

      if (index > len) {
        index = len;
      } else if (index < 0) {
        index = len + index;

        if (index < 0) {
          index = 0;
        }
      }

      var newArray = target.slice(0);
      returnValue = newArray.splice.apply(newArray, args);
      this.raw = immutableSet(this.raw, expr.paths, 0, expr.paths.length, newArray, this);
      this.fire({
        expr: expr,
        type: 2,
        index: index,
        deleteCount: returnValue.length,
        value: returnValue,
        insertions: args.slice(2),
        option: option
      });
    } // #[begin] error


    this.checkDataTypes(); // #[end]

    return returnValue;
  };
  /**
   * 数组数据项push操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {*} item 要push的值
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   * @return {number} 新数组的length属性
   */


  Data.prototype.push = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
      this.splice(expr, [target.length, 0, item], option);
      return target.length + 1;
    }
  };
  /**
   * 数组数据项pop操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   * @return {*}
   */


  Data.prototype.pop = function (expr, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
      var len = target.length;

      if (len) {
        return this.splice(expr, [len - 1, 1], option)[0];
      }
    }
  };
  /**
   * 数组数据项shift操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   * @return {*}
   */


  Data.prototype.shift = function (expr, option) {
    return this.splice(expr, [0, 1], option)[0];
  };
  /**
   * 数组数据项unshift操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {*} item 要unshift的值
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   * @return {number} 新数组的length属性
   */


  Data.prototype.unshift = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
      this.splice(expr, [0, 0, item], option);
      return target.length + 1;
    }
  };
  /**
   * 数组数据项移除操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {number} index 要移除项的索引
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   */


  Data.prototype.removeAt = function (expr, index, option) {
    this.splice(expr, [index, 1], option);
  };
  /**
   * 数组数据项移除操作
   *
   * @param {string|Object} expr 数据项路径
   * @param {*} value 要移除的项
   * @param {Object=} option 设置参数
   * @param {boolean} option.silent 静默设置，不触发变更事件
   */


  Data.prototype.remove = function (expr, value, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
      var len = target.length;

      while (len--) {
        if (target[len] === value) {
          this.splice(expr, [len, 1], option);
          break;
        }
      }
    }
  }; // exports = module.exports = Data;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 获取声明式事件的监听函数
   */
  // var evalArgs = require('../runtime/eval-args');
  // var findMethod = require('../runtime/find-method');
  // var Data = require('../runtime/data');

  /**
   * 获取声明式事件的监听函数
   *
   * @param {Object} eventBind 绑定信息对象
   * @param {Component} owner 所属组件环境
   * @param {Data} data 数据环境
   * @param {boolean} isComponentEvent 是否组件自定义事件
   * @return {Function}
   */


  function getEventListener(eventBind, owner, data, isComponentEvent) {
    var args = eventBind.expr.args;
    return function (e) {
      e = isComponentEvent ? e : e || window.event;
      var method = findMethod(owner, eventBind.expr.name, data);

      if (typeof method === 'function') {
        method.apply(owner, args.length ? evalArgs(args, new Data({
          $event: e
        }, data), owner) : []);
      }

      if (eventBind.modifier.prevent) {
        e.preventDefault && e.preventDefault();
        return false;
      }

      if (eventBind.modifier.stop) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }
      }
    };
  } // exports = module.exports = getEventListener;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 判断变更数组是否影响到数据引用摘要
   */

  /**
   * 判断变更数组是否影响到数据引用摘要
   *
   * @param {Array} changes 变更数组
   * @param {Object} dataRef 数据引用摘要
   * @return {boolean}
   */


  function changesIsInDataRef(changes, dataRef) {
    if (dataRef) {
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];

        if (!change.overview) {
          var paths = change.expr.paths;
          change.overview = paths[0].value;

          if (paths.length > 1) {
            change.extOverview = paths[0].value + '.' + paths[1].value;
            change.wildOverview = paths[0].value + '.*';
          }
        }

        if (dataRef[change.overview] || change.wildOverview && dataRef[change.wildOverview] || change.extOverview && dataRef[change.extOverview]) {
          return true;
        }
      }
    }
  } // exports = module.exports = changesIsInDataRef;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file insertBefore 方法的兼容性封装
   */

  /**
   * insertBefore 方法的兼容性封装
   *
   * @param {HTMLNode} targetEl 要插入的节点
   * @param {HTMLElement} parentEl 父元素
   * @param {HTMLElement?} beforeEl 在此元素之前插入
   */


  function insertBefore(targetEl, parentEl, beforeEl) {
    if (parentEl) {
      if (beforeEl) {
        parentEl.insertBefore(targetEl, beforeEl);
      } else {
        parentEl.appendChild(targetEl);
      }
    }
  } // exports = module.exports = insertBefore;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 元素的基本属性
   */


  var baseProps = {
    'class': 1,
    'style': 1,
    'id': 1
  }; // exports = module.exports = baseProps;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 元素子节点遍历操作类
   */
  // var removeEl = require('../browser/remove-el');
  // #[begin] reverse

  /**
   * 元素子节点遍历操作类
   *
   * @inner
   * @class
   * @param {HTMLElement} el 要遍历的元素
   */

  function DOMChildrenWalker(el) {
    this.raw = [];
    this.index = 0;
    this.target = el;
    var child = el.firstChild;
    var next;

    while (child) {
      next = child.nextSibling;

      switch (child.nodeType) {
        case 3:
          if (/^\s*$/.test(child.data || child.textContent)) {
            removeEl(child);
          } else {
            this.raw.push(child);
          }

          break;

        case 1:
        case 8:
          this.raw.push(child);
      }

      child = next;
    }

    this.current = this.raw[this.index];
    this.next = this.raw[this.index + 1];
  }
  /**
   * 往下走一个元素
   */


  DOMChildrenWalker.prototype.goNext = function () {
    this.current = this.raw[++this.index];
    this.next = this.raw[this.index + 1];
  }; // #[end]
  // exports = module.exports = DOMChildrenWalker;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 元素节点类
   */
  // var changeExprCompare = require('../runtime/change-expr-compare');
  // var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
  // var evalExpr = require('../runtime/eval-expr');
  // var insertBefore = require('../browser/insert-before');
  // var LifeCycle = require('./life-cycle');
  // var NodeType = require('./node-type');
  // var baseProps = require('./base-props');
  // var reverseElementChildren = require('./reverse-element-children');
  // var isDataChangeByElement = require('./is-data-change-by-element');
  // var getPropHandler = require('./get-prop-handler');
  // var createNode = require('./create-node');
  // var elementOwnDetach = require('./element-own-detach');
  // var elementOwnDispose = require('./element-own-dispose');
  // var elementOwnOnEl = require('./element-own-on-el');
  // var elementOwnAttached = require('./element-own-attached');
  // var nodeSBindInit = require('./node-s-bind-init');
  // var nodeSBindUpdate = require('./node-s-bind-update');
  // var warnSetHTML = require('./warn-set-html');
  // var getNodePath = require('./get-node-path');

  /**
   * 元素节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */


  function Element(aNode, parent, scope, owner, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.parentComponent = parent.nodeType === 5 ? parent : parent.parentComponent;
    this.tagName = aNode.tagName; // #[begin] allua
    // ie8- 不支持innerHTML输出自定义标签

    /* istanbul ignore if */

    if (ieOldThan9 && this.tagName.indexOf('-') > 0) {
      this.tagName = 'div';
    } // #[end]


    this._sbindData = nodeSBindInit(aNode.directives.bind, this.scope, this.owner);
    this.lifeCycle = LifeCycle.inited; // #[begin] reverse

    if (reverseWalker) {
      var currentNode = reverseWalker.current;
      /* istanbul ignore if */

      if (!currentNode) {
        throw new Error('[SAN REVERSE ERROR] Element not found. \nPaths: ' + getNodePath(this).join(' > '));
      }
      /* istanbul ignore if */


      if (currentNode.nodeType !== 1) {
        throw new Error('[SAN REVERSE ERROR] Element type not match, expect 1 but ' + currentNode.nodeType + '.\nPaths: ' + getNodePath(this).join(' > '));
      }
      /* istanbul ignore if */


      if (currentNode.tagName.toLowerCase() !== this.tagName) {
        throw new Error('[SAN REVERSE ERROR] Element tagName not match, expect ' + this.tagName + ' but meat ' + currentNode.tagName.toLowerCase() + '.\nPaths: ' + getNodePath(this).join(' > '));
      }

      this.el = currentNode;
      reverseWalker.goNext();
      reverseElementChildren(this, this.scope, this.owner);
      this.lifeCycle = LifeCycle.created;

      this._attached();

      this.lifeCycle = LifeCycle.attached;
    } // #[end]

  }

  Element.prototype.nodeType = 4;
  /**
   * 将元素attach到页面
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */

  Element.prototype.attach = function (parentEl, beforeEl) {
    if (!this.lifeCycle.attached) {
      if (!this.el) {
        var sourceNode = this.aNode.hotspot.sourceNode;
        var props = this.aNode.props;

        if (sourceNode) {
          this.el = sourceNode.cloneNode(false);
          props = this.aNode.hotspot.dynamicProps;
        } else {
          this.el = createEl(this.tagName);
        }

        if (this._sbindData) {
          for (var key in this._sbindData) {
            if (this._sbindData.hasOwnProperty(key)) {
              getPropHandler(this.tagName, key)(this.el, this._sbindData[key], key, this);
            }
          }
        }

        for (var i = 0, l = props.length; i < l; i++) {
          var prop = props[i];
          var value = evalExpr(prop.expr, this.scope, this.owner);

          if (value || !baseProps[prop.name]) {
            prop.handler(this.el, value, prop.name, this);
          }
        }

        this.lifeCycle = LifeCycle.created;
      }

      insertBefore(this.el, parentEl, beforeEl);

      if (!this._contentReady) {
        var htmlDirective = this.aNode.directives.html;

        if (htmlDirective) {
          // #[begin] error
          warnSetHTML(this.el); // #[end]

          this.el.innerHTML = evalExpr(htmlDirective.value, this.scope, this.owner);
        } else {
          for (var i = 0, l = this.aNode.children.length; i < l; i++) {
            var childANode = this.aNode.children[i];
            var child = childANode.Clazz ? new childANode.Clazz(childANode, this, this.scope, this.owner) : createNode(childANode, this, this.scope, this.owner);
            this.children.push(child);
            child.attach(this.el);
          }
        }

        this._contentReady = 1;
      }

      this._attached();

      this.lifeCycle = LifeCycle.attached;
    }
  };

  Element.prototype.detach = elementOwnDetach;
  Element.prototype.dispose = elementOwnDispose;
  Element.prototype._onEl = elementOwnOnEl;

  Element.prototype._leave = function () {
    if (this.leaveDispose) {
      if (!this.lifeCycle.disposed) {
        var len = this.children.length;

        while (len--) {
          this.children[len].dispose(1, 1);
        }

        len = this._elFns.length;

        while (len--) {
          var fn = this._elFns[len];
          un(this.el, fn[0], fn[1], fn[2]);
        }

        this._elFns = null; // #[begin] allua

        /* istanbul ignore if */

        if (this._inputTimer) {
          clearInterval(this._inputTimer);
          this._inputTimer = null;
        } // #[end]
        // 如果没有parent，说明是一个root component，一定要从dom树中remove


        if (!this.disposeNoDetach || !this.parent) {
          removeEl(this.el);
        }

        this.lifeCycle = LifeCycle.detached;
        this.el = null;
        this.owner = null;
        this.scope = null;
        this.children = null;
        this.lifeCycle = LifeCycle.disposed;

        if (this._ondisposed) {
          this._ondisposed();
        }
      }
    }
  };
  /**
   * 视图更新
   *
   * @param {Array} changes 数据变化信息
   */


  Element.prototype._update = function (changes) {
    var dataHotspot = this.aNode.hotspot.data;

    if (dataHotspot && changesIsInDataRef(changes, dataHotspot)) {
      // update s-bind
      var me = this;
      this._sbindData = nodeSBindUpdate(this.aNode.directives.bind, this._sbindData, this.scope, this.owner, changes, function (name, value) {
        if (name in me.aNode.hotspot.props) {
          return;
        }

        getPropHandler(me.tagName, name)(me.el, value, name, me);
      }); // update prop

      var dynamicProps = this.aNode.hotspot.dynamicProps;

      for (var i = 0, l = dynamicProps.length; i < l; i++) {
        var prop = dynamicProps[i];
        var propName = prop.name;

        for (var j = 0, changeLen = changes.length; j < changeLen; j++) {
          var change = changes[j];

          if (!isDataChangeByElement(change, this, propName) && (changeExprCompare(change.expr, prop.expr, this.scope) || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, this.scope))) {
            prop.handler(this.el, evalExpr(prop.expr, this.scope, this.owner), propName, this);
            break;
          }
        }
      } // update content


      var htmlDirective = this.aNode.directives.html;

      if (htmlDirective) {
        var len = changes.length;

        while (len--) {
          if (changeExprCompare(changes[len].expr, htmlDirective.value, this.scope)) {
            // #[begin] error
            warnSetHTML(this.el); // #[end]

            this.el.innerHTML = evalExpr(htmlDirective.value, this.scope, this.owner);
            break;
          }
        }
      } else {
        for (var i = 0, l = this.children.length; i < l; i++) {
          this.children[i]._update(changes);
        }
      }
    }
  };
  /**
   * 执行完成attached状态的行为
   */


  Element.prototype._attached = elementOwnAttached; // exports = module.exports = Element;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建节点对应的 stump comment 元素
   */

  /**
   * 创建节点对应的 stump comment 主元素
   */

  function nodeOwnCreateStump() {
    this.el = this.el || document.createComment(this.id);
  } // exports = module.exports = nodeOwnCreateStump;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 销毁释放元素的子元素
   */

  /**
   * 销毁释放元素的子元素
   *
   * @param {Array=} children 子元素数组
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   * @param {boolean=} noTransition 是否不显示过渡动画效果
   */


  function elementDisposeChildren(children, noDetach, noTransition) {
    var len = children && children.length;

    while (len--) {
      children[len].dispose(noDetach, noTransition);
    }
  } // exports = module.exports = elementDisposeChildren;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 简单执行销毁节点的行为
   */
  // var removeEl = require('../browser/remove-el');
  // var LifeCycle = require('./life-cycle');
  // var elementDisposeChildren = require('./element-dispose-children');

  /**
   * 简单执行销毁节点的行为
   *
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   */


  function nodeOwnSimpleDispose(noDetach) {
    elementDisposeChildren(this.children, noDetach, 1);

    if (!noDetach) {
      removeEl(this.el);
    }

    this.el = null;
    this.owner = null;
    this.scope = null;
    this.children = null;
    this.lifeCycle = LifeCycle.disposed;

    if (this._ondisposed) {
      this._ondisposed();
    }
  } // exports = module.exports = nodeOwnSimpleDispose;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 异步组件类
   */
  // var guid = require('../util/guid');
  // var each = require('../util/each');
  // var insertBefore = require('../browser/insert-before');
  // var nodeOwnCreateStump = require('./node-own-create-stump');
  // var nodeOwnSimpleDispose = require('./node-own-simple-dispose');

  /**
   * 异步组件类
   *
   * @class
   * @param {Object} options 初始化参数
   * @param {Object} loader 组件加载器
   */


  function AsyncComponent(options, loader) {
    this.options = options;
    this.loader = loader;
    this.id = guid++;
    this.children = []; // #[begin] reverse

    var reverseWalker = options.reverseWalker;

    if (reverseWalker) {
      var PlaceholderComponent = this.loader.placeholder;

      if (PlaceholderComponent) {
        this.children[0] = new PlaceholderComponent(options);
      }

      this._create();

      insertBefore(this.el, reverseWalker.target, reverseWalker.current);
      var me = this;
      this.loader.start(function (ComponentClass) {
        me.onload(ComponentClass);
      });
    }

    options.reverseWalker = null; // #[end]
  }

  AsyncComponent.prototype._create = nodeOwnCreateStump;
  AsyncComponent.prototype.dispose = nodeOwnSimpleDispose;
  /**
   * attach到页面
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */

  AsyncComponent.prototype.attach = function (parentEl, beforeEl) {
    var PlaceholderComponent = this.loader.placeholder;

    if (PlaceholderComponent) {
      var component = new PlaceholderComponent(this.options);
      this.children[0] = component;
      component.attach(parentEl, beforeEl);
    }

    this._create();

    insertBefore(this.el, parentEl, beforeEl);
    var me = this;
    this.loader.start(function (ComponentClass) {
      me.onload(ComponentClass);
    });
  };
  /**
   * loader加载完成，渲染组件
   *
   * @param {Function=} ComponentClass 组件类
   */


  AsyncComponent.prototype.onload = function (ComponentClass) {
    if (this.el && ComponentClass) {
      var component = new ComponentClass(this.options);
      component.attach(this.el.parentNode, this.el);
      var parentChildren = this.options.parent.children;

      if (this.parentIndex == null || parentChildren[this.parentIndex] !== this) {
        each(parentChildren, function (child, index) {
          if (child instanceof AsyncComponent) {
            child.parentIndex = index;
          }
        });
      }

      parentChildren[this.parentIndex] = component;
    }

    this.dispose();
  };
  /**
   * 视图更新函数
   *
   * @param {Array} changes 数据变化信息
   */


  AsyncComponent.prototype._update = function (changes) {
    this.children[0] && this.children[0]._update(changes);
  }; // exports = module.exports = AsyncComponent;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 通过组件反解创建节点的工厂方法
   */
  // var Element = require('./element');
  // var AsyncComponent = require('./async-component');
  // #[begin] reverse

  /**
   * 通过组件反解创建节点
   *
   * @param {ANode} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker} reverseWalker 子元素遍历对象
   * @return {Node}
   */


  function createReverseNode(aNode, parent, scope, owner, reverseWalker) {
    if (aNode.Clazz) {
      return new aNode.Clazz(aNode, parent, scope, owner, reverseWalker);
    }

    var ComponentOrLoader = owner.getComponentType ? owner.getComponentType(aNode, scope) : owner.components[aNode.tagName];

    if (ComponentOrLoader) {
      return typeof ComponentOrLoader === 'function' ? new ComponentOrLoader({
        source: aNode,
        owner: owner,
        scope: scope,
        parent: parent,
        subTag: aNode.tagName,
        reverseWalker: reverseWalker
      }) : new AsyncComponent({
        source: aNode,
        owner: owner,
        scope: scope,
        parent: parent,
        subTag: aNode.tagName,
        reverseWalker: reverseWalker
      }, ComponentOrLoader);
    }

    return new Element(aNode, parent, scope, owner, reverseWalker);
  } // #[end]
  // exports = module.exports = createReverseNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 对元素的子节点进行反解
   */
  // var each = require('../util/each');
  // var DOMChildrenWalker = require('./dom-children-walker');
  // var createReverseNode = require('./create-reverse-node');
  // #[begin] reverse

  /**
   * 对元素的子节点进行反解
   *
   * @param {Object} element 元素
   */


  function reverseElementChildren(element, scope, owner) {
    var htmlDirective = element.aNode.directives.html;

    if (!htmlDirective) {
      var reverseWalker = new DOMChildrenWalker(element.el);
      var aNodeChildren = element.aNode.children;

      for (var i = 0, l = aNodeChildren.length; i < l; i++) {
        element.children.push(createReverseNode(aNodeChildren[i], element, scope, owner, reverseWalker));
      }
    }
  } // #[end]
  // exports = module.exports = reverseElementChildren;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建节点的工厂方法
   */
  // var Element = require('./element');
  // var AsyncComponent = require('./async-component');

  /**
   * 创建节点
   *
   * @param {ANode} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @return {Node}
   */


  function createNode(aNode, parent, scope, owner) {
    if (aNode.Clazz) {
      return new aNode.Clazz(aNode, parent, scope, owner);
    }

    var ComponentOrLoader = owner.getComponentType ? owner.getComponentType(aNode, scope) : owner.components[aNode.tagName];

    if (ComponentOrLoader) {
      return typeof ComponentOrLoader === 'function' ? new ComponentOrLoader({
        source: aNode,
        owner: owner,
        scope: scope,
        parent: parent,
        subTag: aNode.tagName
      }) : new AsyncComponent({
        source: aNode,
        owner: owner,
        scope: scope,
        parent: parent,
        subTag: aNode.tagName
      }, ComponentOrLoader);
    }

    aNode.Clazz = Element;
    return new Element(aNode, parent, scope, owner);
  } // exports = module.exports = createNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 获取 element 的 transition 控制对象
   */
  // var evalArgs = require('../runtime/eval-args');
  // var findMethod = require('../runtime/find-method');
  // var NodeType = require('./node-type');

  /**
   * 获取 element 的 transition 控制对象
   *
   * @param {Object} element 元素
   * @return {Object?}
   */


  function elementGetTransition(element) {
    var directive = element.aNode.directives.transition;
    var owner = element.owner;

    if (element.nodeType === 5) {
      var cmptGivenTransition = element.source && element.source.directives.transition;

      if (cmptGivenTransition) {
        directive = cmptGivenTransition;
      } else {
        owner = element;
      }
    }

    var transition;

    if (directive && owner) {
      transition = findMethod(owner, directive.value.name);

      if (typeof transition === 'function') {
        transition = transition.apply(owner, evalArgs(directive.value.args, element.scope, owner));
      }
    }

    return transition || element.transition;
  } // exports = module.exports = elementGetTransition;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 将元素从页面上移除
   */
  // var elementGetTransition = require('./element-get-transition');

  /**
   * 将元素从页面上移除
   */


  function elementOwnDetach() {
    var lifeCycle = this.lifeCycle;

    if (lifeCycle.leaving) {
      return;
    }

    if (!this.disposeNoTransition) {
      var transition = elementGetTransition(this);

      if (transition && transition.leave) {
        if (this._toPhase) {
          this._toPhase('leaving');
        } else {
          this.lifeCycle = LifeCycle.leaving;
        }

        var me = this;
        transition.leave(this.el, function () {
          me._leave();
        });
        return;
      }
    }

    this._leave();
  } // exports = module.exports = elementOwnDetach;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 销毁释放元素
   */

  /**
   * 销毁释放元素
   *
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   * @param {boolean=} noTransition 是否不显示过渡动画效果
   */


  function elementOwnDispose(noDetach, noTransition) {
    this.leaveDispose = 1;
    this.disposeNoDetach = noDetach;
    this.disposeNoTransition = noTransition;
    this.detach();
  } // exports = module.exports = elementOwnDispose;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 为元素的 el 绑定事件
   */
  // var on = require('../browser/on');

  /**
   * 为元素的 el 绑定事件
   *
   * @param {string} name 事件名
   * @param {Function} listener 监听器
   * @param {boolean} capture 是否是捕获阶段触发
   */


  function elementOwnOnEl(name, listener, capture) {
    capture = !!capture;

    this._elFns.push([name, listener, capture]);

    on(this.el, name, listener, capture);
  } // exports = module.exports = elementOwnOnEl;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 是否浏览器环境
   */


  var isBrowser = typeof window !== 'undefined'; // exports = module.exports = isBrowser;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 开发时的警告提示
   */
  // #[begin] error

  /**
   * 开发时的警告提示
   *
   * @param {string} message 警告信息
   */

  function warn(message) {
    message = '[SAN WARNING] ' + message;
    /* eslint-disable no-console */

    /* istanbul ignore next */

    if (typeof console === 'object' && console.warn) {
      console.warn(message);
    } else {
      // 防止警告中断调用堆栈
      setTimeout(function () {
        throw new Error(message);
      }, 0);
    }
    /* eslint-enable no-console */

  } // #[end]
  // exports = module.exports = warn;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file  事件绑定不存在的 warning
   */
  // var each = require('../util/each');
  // var warn = require('../util/warn');
  // #[begin] error

  /**
   * 事件绑定不存在的 warning
   *
   * @param {Object} eventBind 事件绑定对象
   * @param {Component} owner 所属的组件对象
   */


  function warnEventListenMethod(eventBind, owner) {
    var valid = true;
    var method = owner;
    each(eventBind.expr.name.paths, function (path) {
      method = method[path.value];
      valid = !!method;
      return valid;
    });

    if (!valid) {
      var paths = [];
      each(eventBind.expr.name.paths, function (path) {
        paths.push(path.value);
      });
      warn(eventBind.name + ' listen fail,"' + paths.join('.') + '" not exist');
    }
  } // #[end]
  // exports = module.exports = warnEventListenMethod;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 完成元素 attached 后的行为
   */
  // var empty = require('../util/empty');
  // var isBrowser = require('../browser/is-browser');
  // var trigger = require('../browser/trigger');
  // var NodeType = require('./node-type');
  // var elementGetTransition = require('./element-get-transition');
  // var getEventListener = require('./get-event-listener');
  // var warnEventListenMethod = require('./warn-event-listen-method');

  /**
   * 双绑输入框CompositionEnd事件监听函数
   *
   * @inner
   */


  function inputOnCompositionEnd() {
    if (!this.composing) {
      return;
    }

    this.composing = 0;
    trigger(this, 'input');
  }
  /**
   * 双绑输入框CompositionStart事件监听函数
   *
   * @inner
   */


  function inputOnCompositionStart() {
    this.composing = 1;
  }

  function getXPropOutputer(element, xProp, data) {
    return function () {
      xPropOutput(element, xProp, data);
    };
  }

  function getInputXPropOutputer(element, xProp, data) {
    return function () {
      if (!this.composing) {
        xPropOutput(element, xProp, data);
      }
    };
  } // #[begin] allua

  /* istanbul ignore next */


  function getInputFocusXPropHandler(element, xProp, data) {
    return function () {
      element._inputTimer = setInterval(function () {
        xPropOutput(element, xProp, data);
      }, 16);
    };
  }
  /* istanbul ignore next */


  function getInputBlurXPropHandler(element) {
    return function () {
      clearInterval(element._inputTimer);
      element._inputTimer = null;
    };
  } // #[end]


  function xPropOutput(element, bindInfo, data) {
    /* istanbul ignore if */
    if (!element.lifeCycle.created) {
      return;
    }

    var el = element.el;

    if (element.tagName === 'input' && bindInfo.name === 'checked') {
      var bindValue = getANodeProp(element.aNode, 'value');
      var bindType = getANodeProp(element.aNode, 'type');

      if (bindValue && bindType) {
        switch (el.type.toLowerCase()) {
          case 'checkbox':
            data[el.checked ? 'push' : 'remove'](bindInfo.expr, el.value);
            return;

          case 'radio':
            el.checked && data.set(bindInfo.expr, el.value, {
              target: {
                node: element,
                prop: bindInfo.name
              }
            });
            return;
        }
      }
    }

    data.set(bindInfo.expr, el[bindInfo.name], {
      target: {
        node: element,
        prop: bindInfo.name
      }
    });
  }
  /**
   * 完成元素 attached 后的行为
   *
   * @param {Object} element 元素节点
   */


  function elementOwnAttached() {
    if (this.el.nodeType === 1) {
      var isComponent = this.nodeType === 5;
      var data = isComponent ? this.data : this.scope;
      /* eslint-disable no-redeclare */
      // 处理自身变化时双向绑定的逻辑

      var xProps = this.aNode.hotspot.xProps;

      for (var i = 0, l = xProps.length; i < l; i++) {
        var xProp = xProps[i];

        switch (xProp.name) {
          case 'value':
            switch (this.tagName) {
              case 'input':
              case 'textarea':
                if (isBrowser && window.CompositionEvent) {
                  this._onEl('change', inputOnCompositionEnd);

                  this._onEl('compositionstart', inputOnCompositionStart);

                  this._onEl('compositionend', inputOnCompositionEnd);
                } // #[begin] allua

                /* istanbul ignore else */


                if ('oninput' in this.el) {
                  // #[end]
                  this._onEl('input', getInputXPropOutputer(this, xProp, data)); // #[begin] allua

                } else {
                  this._onEl('focusin', getInputFocusXPropHandler(this, xProp, data));

                  this._onEl('focusout', getInputBlurXPropHandler(this));
                } // #[end]


                break;

              case 'select':
                this._onEl('change', getXPropOutputer(this, xProp, data));

                break;
            }

            break;

          case 'checked':
            switch (this.tagName) {
              case 'input':
                switch (this.el.type) {
                  case 'checkbox':
                  case 'radio':
                    this._onEl('click', getXPropOutputer(this, xProp, data));

                }

            }

            break;
        }
      }

      var owner = isComponent ? this : this.owner;

      for (var i = 0, l = this.aNode.events.length; i < l; i++) {
        var eventBind = this.aNode.events[i]; // #[begin] error

        warnEventListenMethod(eventBind, owner); // #[end]

        this._onEl(eventBind.name, getEventListener(eventBind, owner, data, eventBind.modifier), eventBind.modifier.capture);
      }

      if (isComponent) {
        for (var i = 0, l = this.nativeEvents.length; i < l; i++) {
          var eventBind = this.nativeEvents[i]; // #[begin] error

          warnEventListenMethod(eventBind, this.owner); // #[end]

          this._onEl(eventBind.name, getEventListener(eventBind, this.owner, this.scope), eventBind.modifier.capture);
        }
      }
    }

    if (this.el.nodeType === 1) {
      var transition = elementGetTransition(this);

      if (transition && transition.enter) {
        transition.enter(this.el, empty);
      }
    }
  } // exports = module.exports = elementOwnAttached;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 初始化节点的 s-bind 数据
   */
  // var evalExpr = require('../runtime/eval-expr');

  /**
   * 初始化节点的 s-bind 数据
   *
   * @param {Object} sBind bind指令对象
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @return {boolean}
   */


  function nodeSBindInit(sBind, scope, owner) {
    if (sBind && scope) {
      return evalExpr(sBind.value, scope, owner);
    }
  } // exports = module.exports = nodeSBindInit;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 计算两个对象 key 的并集
   */

  /**
   * 计算两个对象 key 的并集
   *
   * @param {Object} obj1 目标对象
   * @param {Object} obj2 源对象
   * @return {Array}
   */


  function unionKeys(obj1, obj2) {
    var result = [];
    var key;

    for (key in obj1) {
      /* istanbul ignore else  */
      if (obj1.hasOwnProperty(key)) {
        result.push(key);
      }
    }

    for (key in obj2) {
      /* istanbul ignore else  */
      if (obj2.hasOwnProperty(key)) {
        !obj1[key] && result.push(key);
      }
    }

    return result;
  } // exports = module.exports = unionKeys;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 更新节点的 s-bind 数据
   */
  // var unionKeys = require('../util/union-keys');
  // var evalExpr = require('../runtime/eval-expr');
  // var changeExprCompare = require('../runtime/change-expr-compare');

  /**
   * 更新节点的 s-bind 数据
   *
   * @param {Object} sBind bind指令对象
   * @param {Object} oldBindData 当前s-bind数据
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {Array} changes 变更数组
   * @param {Function} updater 绑定对象子项变更的更新函数
   */


  function nodeSBindUpdate(sBind, oldBindData, scope, owner, changes, updater) {
    if (sBind) {
      var len = changes.length;

      while (len--) {
        if (changeExprCompare(changes[len].expr, sBind.value, scope)) {
          var newBindData = evalExpr(sBind.value, scope, owner);
          var keys = unionKeys(newBindData, oldBindData);

          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            var value = newBindData[key];

            if (value !== oldBindData[key]) {
              updater(key, value);
            }
          }

          return newBindData;
        }
      }
    }
  } // exports = module.exports = nodeSBindUpdate;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 判断元素是否不允许设置HTML
   */
  // some html elements cannot set innerHTML in old ie
  // see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx

  /**
   * 判断元素是否不允许设置HTML
   *
   * @param {HTMLElement} el 要判断的元素
   * @return {boolean}
   */


  function noSetHTML(el) {
    return /^(col|colgroup|frameset|style|table|tbody|tfoot|thead|tr|select)$/i.test(el.tagName);
  } // exports = module.exports = noSetHTML;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file  获取节点 stump 的 comment
   */
  // var noSetHTML = require('../browser/no-set-html');
  // var warn = require('../util/warn');
  // #[begin] error

  /**
   * 获取节点 stump 的 comment
   *
   * @param {HTMLElement} el HTML元素
   */


  function warnSetHTML(el) {
    // dont warn if not in browser runtime

    /* istanbul ignore if */
    if (!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)) {
      return;
    } // some html elements cannot set innerHTML in old ie
    // see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx


    if (noSetHTML(el)) {
      warn('set html for element "' + el.tagName + '" may cause an error in old IE');
    }
  } // #[end]
  // exports = module.exports = warnSetHTML;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 获取节点在组件树中的路径
   */
  // var NodeType = require('./node-type');
  // #[begin] reverse

  /**
   * 获取节点在组件树中的路径
   *
   * @param {Node} node 节点对象
   * @return {Array}
   */

  /* istanbul ignore next */


  function getNodePath(node) {
    var nodePaths = [];
    var nodeParent = node;

    while (nodeParent) {
      switch (nodeParent.nodeType) {
        case 4:
          nodePaths.unshift(nodeParent.tagName);
          break;

        case 2:
          nodePaths.unshift('if');
          break;

        case 3:
          nodePaths.unshift('for[' + nodeParent.anode.directives['for'].raw + ']'); // eslint-disable-line dot-notation

          break;

        case 6:
          nodePaths.unshift('slot[' + (nodeParent.name || 'default') + ']');
          break;

        case 7:
          nodePaths.unshift('template');
          break;

        case 5:
          nodePaths.unshift('component[' + (nodeParent.subTag || 'root') + ']');
          break;

        case 1:
          nodePaths.unshift('text');
          break;
      }

      nodeParent = nodeParent.parent;
    }

    return nodePaths;
  } // #[end]
  // exports = module.exports = getNodePath;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 给 devtool 发通知消息
   */
  // var isBrowser = require('../browser/is-browser');
  // #[begin] devtool


  var san4devtool;
  /**
   * 给 devtool 发通知消息
   *
   * @param {string} name 消息名称
   * @param {*} arg 消息参数
   */

  function emitDevtool(name, arg) {
    /* istanbul ignore if */
    if (isBrowser && san4devtool && san4devtool.debug && window.__san_devtool__) {
      window.__san_devtool__.emit(name, arg);
    }
  }

  emitDevtool.start = function (main) {
    san4devtool = main;
    emitDevtool('san', main);
  }; // #[end]
  // exports = module.exports = emitDevtool;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 组件类
   */
  // var bind = require('../util/bind');
  // var each = require('../util/each');
  // var guid = require('../util/guid');
  // var extend = require('../util/extend');
  // var nextTick = require('../util/next-tick');
  // var emitDevtool = require('../util/emit-devtool');
  // var ExprType = require('../parser/expr-type');
  // var parseExpr = require('../parser/parse-expr');
  // var parseTemplate = require('../parser/parse-template');
  // var createAccessor = require('../parser/create-accessor');
  // var removeEl = require('../browser/remove-el');
  // var Data = require('../runtime/data');
  // var evalExpr = require('../runtime/eval-expr');
  // var changeExprCompare = require('../runtime/change-expr-compare');
  // var DataChangeType = require('../runtime/data-change-type');
  // var insertBefore = require('../browser/insert-before');
  // var un = require('../browser/un');
  // var createNode = require('./create-node');
  // var compileComponent = require('./compile-component');
  // var preheatANode = require('./preheat-a-node');
  // var LifeCycle = require('./life-cycle');
  // var getANodeProp = require('./get-a-node-prop');
  // var isDataChangeByElement = require('./is-data-change-by-element');
  // var getEventListener = require('./get-event-listener');
  // var reverseElementChildren = require('./reverse-element-children');
  // var NodeType = require('./node-type');
  // var nodeSBindInit = require('./node-s-bind-init');
  // var nodeSBindUpdate = require('./node-s-bind-update');
  // var elementOwnAttached = require('./element-own-attached');
  // var elementOwnOnEl = require('./element-own-on-el');
  // var elementOwnDetach = require('./element-own-detach');
  // var elementOwnDispose = require('./element-own-dispose');
  // var warnEventListenMethod = require('./warn-event-listen-method');
  // var elementDisposeChildren = require('./element-dispose-children');
  // var createDataTypesChecker = require('../util/create-data-types-checker');
  // var warn = require('../util/warn');

  /**
   * 组件类
   *
   * @class
   * @param {Object} options 初始化参数
   */


  function Component(options) {
    // eslint-disable-line
    // #[begin] error
    for (var key in Component.prototype) {
      if (this[key] !== Component.prototype[key]) {
        /* eslint-disable max-len */
        warn('\`' + key + '\` is a reserved key of san components. Overriding this property may cause unknown exceptions.');
        /* eslint-enable max-len */
      }
    } // #[end]


    options = options || {};
    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.listeners = {};
    this.slotChildren = [];
    this.implicitChildren = [];
    var clazz = this.constructor;
    this.filters = this.filters || clazz.filters || {};
    this.computed = this.computed || clazz.computed || {};
    this.messages = this.messages || clazz.messages || {};

    if (options.transition) {
      this.transition = options.transition;
    }

    this.subTag = options.subTag; // compile

    compileComponent(clazz);
    var protoANode = clazz.prototype.aNode;
    preheatANode(protoANode);
    this.tagName = protoANode.tagName;
    this.source = typeof options.source === 'string' ? parseTemplate(options.source).children[0] : options.source;
    preheatANode(this.source);
    this.sourceSlotNameProps = [];
    this.sourceSlots = {
      named: {}
    };
    this.owner = options.owner;
    this.scope = options.scope;
    this.el = options.el;
    var parent = options.parent;

    if (parent) {
      this.parent = parent;
      this.parentComponent = parent.nodeType === 5 ? parent : parent && parent.parentComponent;
    } else if (this.owner) {
      this.parentComponent = this.owner;
      this.scope = this.owner.data;
    }

    this.id = guid++; // #[begin] reverse

    if (this.el) {
      var firstCommentNode = this.el.firstChild;

      if (firstCommentNode && firstCommentNode.nodeType === 3) {
        firstCommentNode = firstCommentNode.nextSibling;
      }

      if (firstCommentNode && firstCommentNode.nodeType === 8) {
        var stumpMatch = firstCommentNode.data.match(/^\s*s-data:([\s\S]+)?$/);

        if (stumpMatch) {
          var stumpText = stumpMatch[1]; // fill component data

          options.data = new Function('return ' + stumpText.replace(/^[\s\n]*/, '').replace(/"(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d+Z"/g, function (match, y, mon, d, h, m, s) {
            return 'new Date(' + +y + ',' + +mon + ',' + +d + ',' + +h + ',' + +m + ',' + +s + ')';
          }))();

          if (firstCommentNode.previousSibling) {
            removeEl(firstCommentNode.previousSibling);
          }

          removeEl(firstCommentNode);
        }
      }
    } // #[end]
    // native事件数组


    this.nativeEvents = [];

    if (this.source) {
      // 组件运行时传入的结构，做slot解析
      this._initSourceSlots(1);

      for (var i = 0, l = this.source.events.length; i < l; i++) {
        var eventBind = this.source.events[i]; // 保存当前实例的native事件，下面创建aNode时候做合并

        if (eventBind.modifier.native) {
          this.nativeEvents.push(eventBind);
        } else {
          // #[begin] error
          warnEventListenMethod(eventBind, options.owner); // #[end]

          this.on(eventBind.name, getEventListener(eventBind, options.owner, this.scope, 1), eventBind);
        }
      }

      this.tagName = this.tagName || this.source.tagName;
      this.binds = this.source.hotspot.binds; // init s-bind data

      this._srcSbindData = nodeSBindInit(this.source.directives.bind, this.scope, this.owner);
    }

    this._toPhase('compiled'); // init data


    var initData = extend(typeof this.initData === 'function' && this.initData() || {}, options.data || this._srcSbindData);

    if (this.binds && this.scope) {
      for (var i = 0, l = this.binds.length; i < l; i++) {
        var bindInfo = this.binds[i];
        var value = evalExpr(bindInfo.expr, this.scope, this.owner);

        if (typeof value !== 'undefined') {
          // See: https://github.com/ecomfe/san/issues/191
          initData[bindInfo.name] = value;
        }
      }
    }

    this.data = new Data(initData);
    this.tagName = this.tagName || 'div'; // #[begin] allua
    // ie8- 不支持innerHTML输出自定义标签

    /* istanbul ignore if */

    if (ieOldThan9 && this.tagName.indexOf('-') > 0) {
      this.tagName = 'div';
    } // #[end]
    // #[begin] error
    // 在初始化 + 数据绑定后，开始数据校验
    // NOTE: 只在开发版本中进行属性校验


    var dataTypes = this.dataTypes || clazz.dataTypes;

    if (dataTypes) {
      var dataTypeChecker = createDataTypesChecker(dataTypes, this.subTag || this.name || clazz.name);
      this.data.setTypeChecker(dataTypeChecker);
      this.data.checkDataTypes();
    } // #[end]


    this.computedDeps = {};

    for (var expr in this.computed) {
      if (this.computed.hasOwnProperty(expr) && !this.computedDeps[expr]) {
        this._calcComputed(expr);
      }
    }

    this._initDataChanger();

    this._sbindData = nodeSBindInit(this.aNode.directives.bind, this.data, this);

    this._toPhase('inited'); // #[begin] reverse


    if (this.el) {
      reverseElementChildren(this, this.data, this);

      this._toPhase('created');

      this._attached();

      this._toPhase('attached');
    } else {
      var walker = options.reverseWalker;

      if (walker) {
        var ifDirective = this.aNode.directives['if']; // eslint-disable-line dot-notation

        if (!ifDirective || evalExpr(ifDirective.value, this.data, this)) {
          var currentNode = walker.current;

          if (currentNode && currentNode.nodeType === 1) {
            this.el = currentNode;
            walker.goNext();
          }

          reverseElementChildren(this, this.data, this);
        } else {
          this.el = document.createComment(this.id);
          insertBefore(this.el, walker.target, walker.current);
        }

        this._toPhase('created');

        this._attached();

        this._toPhase('attached');
      }
    } // #[end]

  }
  /**
   * 初始化创建组件外部传入的插槽对象
   *
   * @protected
   * @param {boolean} isFirstTime 是否初次对sourceSlots进行计算
   */


  Component.prototype._initSourceSlots = function (isFirstTime) {
    this.sourceSlots.named = {}; // 组件运行时传入的结构，做slot解析

    if (this.source && this.scope) {
      var sourceChildren = this.source.children;

      for (var i = 0, l = sourceChildren.length; i < l; i++) {
        var child = sourceChildren[i];
        var target;
        var slotBind = !child.textExpr && getANodeProp(child, 'slot');

        if (slotBind) {
          isFirstTime && this.sourceSlotNameProps.push(slotBind);
          var slotName = evalExpr(slotBind.expr, this.scope, this.owner);
          target = this.sourceSlots.named[slotName];

          if (!target) {
            target = this.sourceSlots.named[slotName] = [];
          }

          target.push(child);
        } else if (isFirstTime) {
          target = this.sourceSlots.noname;

          if (!target) {
            target = this.sourceSlots.noname = [];
          }

          target.push(child);
        }
      }
    }
  };
  /**
   * 类型标识
   *
   * @type {string}
   */


  Component.prototype.nodeType = 5;
  /**
   * 在下一个更新周期运行函数
   *
   * @param {Function} fn 要运行的函数
   */

  Component.prototype.nextTick = nextTick;
  Component.prototype._ctx = new Date().getTime().toString(16);
  /* eslint-disable operator-linebreak */

  /**
   * 使节点到达相应的生命周期
   *
   * @protected
   * @param {string} name 生命周期名称
   */

  Component.prototype._callHook = Component.prototype._toPhase = function (name) {
    if (!this.lifeCycle[name]) {
      this.lifeCycle = LifeCycle[name] || this.lifeCycle;

      if (typeof this[name] === 'function') {
        this[name]();
      }

      this._afterLife = this.lifeCycle; // 通知devtool
      // #[begin] devtool

      emitDevtool('comp-' + name, this); // #[end]
    }
  };
  /* eslint-enable operator-linebreak */

  /**
   * 添加事件监听器
   *
   * @param {string} name 事件名
   * @param {Function} listener 监听器
   * @param {string?} declaration 声明式
   */


  Component.prototype.on = function (name, listener, declaration) {
    if (typeof listener === 'function') {
      if (!this.listeners[name]) {
        this.listeners[name] = [];
      }

      this.listeners[name].push({
        fn: listener,
        declaration: declaration
      });
    }
  };
  /**
   * 移除事件监听器
   *
   * @param {string} name 事件名
   * @param {Function=} listener 监听器
   */


  Component.prototype.un = function (name, listener) {
    var nameListeners = this.listeners[name];
    var len = nameListeners && nameListeners.length;

    while (len--) {
      if (!listener || listener === nameListeners[len].fn) {
        nameListeners.splice(len, 1);
      }
    }
  };
  /**
   * 派发事件
   *
   * @param {string} name 事件名
   * @param {Object} event 事件对象
   */


  Component.prototype.fire = function (name, event) {
    var me = this;
    each(this.listeners[name], function (listener) {
      listener.fn.call(me, event);
    });
  };
  /**
   * 计算 computed 属性的值
   *
   * @private
   * @param {string} computedExpr computed表达式串
   */


  Component.prototype._calcComputed = function (computedExpr) {
    var computedDeps = this.computedDeps[computedExpr];

    if (!computedDeps) {
      computedDeps = this.computedDeps[computedExpr] = {};
    }

    var me = this;
    this.data.set(computedExpr, this.computed[computedExpr].call({
      data: {
        get: function (expr) {
          // #[begin] error
          if (!expr) {
            throw new Error('[SAN ERROR] call get method in computed need argument');
          } // #[end]


          if (!computedDeps[expr]) {
            computedDeps[expr] = 1;

            if (me.computed[expr] && !me.computedDeps[expr]) {
              me._calcComputed(expr);
            }

            me.watch(expr, function () {
              me._calcComputed(computedExpr);
            });
          }

          return me.data.get(expr);
        }
      }
    }));
  };
  /**
   * 派发消息
   * 组件可以派发消息，消息将沿着组件树向上传递，直到遇上第一个处理消息的组件
   *
   * @param {string} name 消息名称
   * @param {*?} value 消息值
   */


  Component.prototype.dispatch = function (name, value) {
    var parentComponent = this.parentComponent;

    while (parentComponent) {
      var receiver = parentComponent.messages[name] || parentComponent.messages['*'];

      if (typeof receiver === 'function') {
        receiver.call(parentComponent, {
          target: this,
          value: value,
          name: name
        });
        break;
      }

      parentComponent = parentComponent.parentComponent;
    }
  };
  /**
   * 获取组件内部的 slot
   *
   * @param {string=} name slot名称，空为default slot
   * @return {Array}
   */


  Component.prototype.slot = function (name) {
    var result = [];
    var me = this;

    function childrenTraversal(children) {
      each(children, function (child) {
        if (child.nodeType === 6 && child.owner === me) {
          if (child.isNamed && child.name === name || !child.isNamed && !name) {
            result.push(child);
          }
        } else {
          childrenTraversal(child.children);
        }
      });
    }

    childrenTraversal(this.children);
    return result;
  };
  /**
   * 获取带有 san-ref 指令的子组件引用
   *
   * @param {string} name 子组件的引用名
   * @return {Component}
   */


  Component.prototype.ref = function (name) {
    var refTarget;
    var owner = this;

    function childrenTraversal(children) {
      each(children, function (child) {
        elementTraversal(child);
        return !refTarget;
      });
    }

    function elementTraversal(element) {
      var nodeType = element.nodeType;

      if (nodeType === 1) {
        return;
      }

      if (element.owner === owner) {
        var ref;

        switch (element.nodeType) {
          case 4:
            ref = element.aNode.directives.ref;

            if (ref && evalExpr(ref.value, element.scope, owner) === name) {
              refTarget = element.el;
            }

            break;

          case 5:
            ref = element.source.directives.ref;

            if (ref && evalExpr(ref.value, element.scope, owner) === name) {
              refTarget = element;
            }

        }

        !refTarget && childrenTraversal(element.slotChildren);
      }

      !refTarget && childrenTraversal(element.children);
    }

    childrenTraversal(this.children);
    return refTarget;
  };
  /**
   * 视图更新函数
   *
   * @param {Array?} changes 数据变化信息
   */


  Component.prototype._update = function (changes) {
    if (this.lifeCycle.disposed) {
      return;
    }

    var me = this;
    var needReloadForSlot = false;

    this._notifyNeedReload = function () {
      needReloadForSlot = true;
    };

    if (changes) {
      if (this.source) {
        this._srcSbindData = nodeSBindUpdate(this.source.directives.bind, this._srcSbindData, this.scope, this.owner, changes, function (name, value) {
          if (name in me.source.hotspot.props) {
            return;
          }

          me.data.set(name, value, {
            target: {
              node: me.owner
            }
          });
        });
      }

      each(changes, function (change) {
        var changeExpr = change.expr;
        each(me.binds, function (bindItem) {
          var relation;
          var setExpr = bindItem.name;
          var updateExpr = bindItem.expr;

          if (!isDataChangeByElement(change, me, setExpr) && (relation = changeExprCompare(changeExpr, updateExpr, me.scope))) {
            if (relation > 2) {
              setExpr = createAccessor([{
                type: 1,
                value: setExpr
              }].concat(changeExpr.paths.slice(updateExpr.paths.length)));
              updateExpr = changeExpr;
            }

            if (relation >= 2 && change.type === 2) {
              me.data.splice(setExpr, [change.index, change.deleteCount].concat(change.insertions), {
                target: {
                  node: me.owner
                }
              });
            } else {
              me.data.set(setExpr, evalExpr(updateExpr, me.scope, me.owner), {
                target: {
                  node: me.owner
                }
              });
            }
          }
        });
        each(me.sourceSlotNameProps, function (bindItem) {
          needReloadForSlot = needReloadForSlot || changeExprCompare(changeExpr, bindItem.expr, me.scope);
          return !needReloadForSlot;
        });
      });

      if (needReloadForSlot) {
        this._initSourceSlots();

        this._repaintChildren();
      } else {
        var slotChildrenLen = this.slotChildren.length;

        while (slotChildrenLen--) {
          var slotChild = this.slotChildren[slotChildrenLen];

          if (slotChild.lifeCycle.disposed) {
            this.slotChildren.splice(slotChildrenLen, 1);
          } else if (slotChild.isInserted) {
            slotChild._update(changes, 1);
          }
        }
      }
    }

    var dataChanges = this._dataChanges;

    if (dataChanges) {
      this._dataChanges = null;
      var ifDirective = this.aNode.directives['if']; // eslint-disable-line dot-notation

      var expectNodeType = !ifDirective || evalExpr(ifDirective.value, this.data, this) ? 1 : 8;
      this._sbindData = nodeSBindUpdate(this.aNode.directives.bind, this._sbindData, this.data, this, dataChanges, function (name, value) {
        if (me.el.nodeType !== 1 || name in me.aNode.hotspot.props) {
          return;
        }

        getPropHandler(me.tagName, name)(me.el, value, name, me);
      });

      if (this.el.nodeType === expectNodeType) {
        if (expectNodeType === 1) {
          var dynamicProps = this.aNode.hotspot.dynamicProps;

          for (var i = 0; i < dynamicProps.length; i++) {
            var prop = dynamicProps[i];

            for (var j = 0; j < dataChanges.length; j++) {
              var change = dataChanges[j];

              if (changeExprCompare(change.expr, prop.expr, this.data) || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, this.data)) {
                prop.handler(this.el, evalExpr(prop.expr, this.data, this), prop.name, this);
                break;
              }
            }
          }

          for (var i = 0; i < this.children.length; i++) {
            this.children[i]._update(dataChanges);
          }

          if (needReloadForSlot) {
            this._initSourceSlots();

            this._repaintChildren();
          }
        }
      } else {
        this._repaint(expectNodeType);
      }

      for (var i = 0; i < this.implicitChildren.length; i++) {
        this.implicitChildren[i]._update(dataChanges);
      }

      this._toPhase('updated');

      if (this.owner && this._updateBindxOwner(dataChanges)) {
        this.owner._update();
      }
    }

    this._notifyNeedReload = null;
  };

  Component.prototype._updateBindxOwner = function (dataChanges) {
    var me = this;
    var xbindUped;
    each(dataChanges, function (change) {
      each(me.binds, function (bindItem) {
        var changeExpr = change.expr;

        if (bindItem.x && !isDataChangeByElement(change, me.owner) && changeExprCompare(changeExpr, parseExpr(bindItem.name), me.data)) {
          var updateScopeExpr = bindItem.expr;

          if (changeExpr.paths.length > 1) {
            updateScopeExpr = createAccessor(bindItem.expr.paths.concat(changeExpr.paths.slice(1)));
          }

          xbindUped = 1;
          me.scope.set(updateScopeExpr, evalExpr(changeExpr, me.data, me), {
            target: {
              node: me,
              prop: bindItem.name
            }
          });
        }
      });
    });
    return xbindUped;
  };
  /**
   * 重新绘制组件的内容
   * 当 dynamic slot name 发生变更或 slot 匹配发生变化时，重新绘制
   * 在组件级别重绘有点粗暴，但是能保证视图结果正确性
   */


  Component.prototype._repaintChildren = function () {
    if (this.el.nodeType === 1) {
      elementDisposeChildren(this.children, 0, 1);
      this.children = [];
      this.slotChildren = [];

      for (var i = 0, l = this.aNode.children.length; i < l; i++) {
        var child = createNode(this.aNode.children[i], this, this.data, this);
        this.children.push(child);
        child.attach(this.el);
      }
    }
  };
  /**
   * 初始化组件内部监听数据变化
   *
   * @private
   * @param {Object} change 数据变化信息
   */


  Component.prototype._initDataChanger = function (change) {
    var me = this;

    this._dataChanger = function (change) {
      if (me._afterLife.created) {
        if (!me._dataChanges) {
          nextTick(me._update, me);
          me._dataChanges = [];
        }

        me._dataChanges.push(change);
      } else if (me.lifeCycle.inited && me.owner) {
        me._updateBindxOwner([change]);
      }
    };

    this.data.listen(this._dataChanger);
  };
  /**
   * 监听组件的数据变化
   *
   * @param {string} dataName 变化的数据项
   * @param {Function} listener 监听函数
   */


  Component.prototype.watch = function (dataName, listener) {
    var dataExpr = parseExpr(dataName);
    this.data.listen(bind(function (change) {
      if (changeExprCompare(change.expr, dataExpr, this.data)) {
        listener.call(this, evalExpr(dataExpr, this.data, this), change);
      }
    }, this));
  };
  /**
   * 将组件attach到页面
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */


  Component.prototype.attach = function (parentEl, beforeEl) {
    if (!this.lifeCycle.attached) {
      this._attach(parentEl, beforeEl); // element 都是内部创建的，只有动态创建的 component 才会进入这个分支


      if (this.owner && !this.parent) {
        this.owner.implicitChildren.push(this);
      }
    }
  };

  Component.prototype._attach = function (parentEl, beforeEl) {
    var ifDirective = this.aNode.directives['if']; // eslint-disable-line dot-notation

    if (!ifDirective || evalExpr(ifDirective.value, this.data, this)) {
      if (!this.el) {
        var sourceNode = this.aNode.hotspot.sourceNode;
        var props = this.aNode.props;

        if (sourceNode) {
          this.el = sourceNode.cloneNode(false);
          props = this.aNode.hotspot.dynamicProps;
        } else {
          this.el = createEl(this.tagName);
        }

        if (this._sbindData) {
          for (var key in this._sbindData) {
            if (this._sbindData.hasOwnProperty(key)) {
              getPropHandler(this.tagName, key)(this.el, this._sbindData[key], key, this);
            }
          }
        }

        for (var i = 0, l = props.length; i < l; i++) {
          var prop = props[i];
          var value = evalExpr(prop.expr, this.data, this);

          if (value || !baseProps[prop.name]) {
            prop.handler(this.el, value, prop.name, this);
          }
        }

        this._toPhase('created');
      }

      insertBefore(this.el, parentEl, beforeEl);

      if (!this._contentReady) {
        for (var i = 0, l = this.aNode.children.length; i < l; i++) {
          var childANode = this.aNode.children[i];
          var child = childANode.Clazz ? new childANode.Clazz(childANode, this, this.data, this) : createNode(childANode, this, this.data, this);
          this.children.push(child);
          child.attach(this.el);
        }

        this._contentReady = 1;
      }

      this._attached();
    } else {
      this.el = document.createComment(this.id);

      this._toPhase('created');

      insertBefore(this.el, parentEl, beforeEl);
    }

    this._toPhase('attached');
  };
  /**
   * 重新刷新组件视图
   */


  Component.prototype._repaint = function () {
    elementDisposeChildren(this.children, 1, 1);
    this.children = [];
    this.slotChildren = [];
    this._contentReady = 0;
    var len = this._elFns.length;

    while (len--) {
      var fn = this._elFns[len];
      un(this.el, fn[0], fn[1], fn[2]);
    }

    this._elFns = [];
    var beforeEl = this.el;
    this.el = null;

    this._attach(beforeEl.parentNode, beforeEl);

    removeEl(beforeEl);
  };

  Component.prototype.detach = elementOwnDetach;
  Component.prototype.dispose = elementOwnDispose;
  Component.prototype._onEl = elementOwnOnEl;
  Component.prototype._attached = elementOwnAttached;

  Component.prototype._leave = function () {
    if (this.leaveDispose) {
      if (!this.lifeCycle.disposed) {
        this.data.unlisten();
        this.dataChanger = null;
        this._dataChanges = null;
        var len = this.implicitChildren.length;

        while (len--) {
          this.implicitChildren[len].dispose(0, 1);
        }

        this.implicitChildren = null;
        this.source = null;
        this.sourceSlots = null;
        this.sourceSlotNameProps = null; // 这里不用挨个调用 dispose 了，因为 children 释放链会调用的

        this.slotChildren = null;
        var len = this.children.length;

        while (len--) {
          this.children[len].dispose(1, 1);
        }

        len = this._elFns.length;

        while (len--) {
          var fn = this._elFns[len];
          un(this.el, fn[0], fn[1], fn[2]);
        }

        this._elFns = null; // #[begin] allua

        /* istanbul ignore if */

        if (this._inputTimer) {
          clearInterval(this._inputTimer);
          this._inputTimer = null;
        } // #[end]
        // 如果没有parent，说明是一个root component，一定要从dom树中remove


        if (!this.disposeNoDetach || !this.parent) {
          removeEl(this.el);
        }

        this._toPhase('detached');

        this.el = null;
        this.owner = null;
        this.scope = null;
        this.children = null;

        this._toPhase('disposed');

        if (this._ondisposed) {
          this._ondisposed();
        }
      }
    } else if (this.lifeCycle.attached) {
      removeEl(this.el);

      this._toPhase('detached');
    }
  }; // exports = module.exports = Component;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建组件类
   */
  // var Component = require('./component');
  // var inherits = require('../util/inherits');

  /**
   * 创建组件类
   *
   * @param {Object} proto 组件类的方法表
   * @param {Function=} SuperComponent 父组件类
   * @return {Function}
   */


  function defineComponent(proto, SuperComponent) {
    // 如果传入一个不是 san component 的 constructor，直接返回不是组件构造函数
    // 这种场景导致的错误 san 不予考虑
    if (typeof proto === 'function') {
      return proto;
    } // #[begin] error


    if (typeof proto !== 'object') {
      throw new Error('[SAN FATAL] defineComponent need a plain object.');
    } // #[end]


    function ComponentClass(option) {
      // eslint-disable-line
      Component.call(this, option);
    }

    ComponentClass.prototype = proto;
    inherits(ComponentClass, SuperComponent || Component);
    return ComponentClass;
  } // exports = module.exports = defineComponent;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 组件Loader类
   */
  // var nextTick = require('../util/next-tick');
  // var each = require('../util/each');

  /**
   * 组件Loader类
   *
   * @class
   *
   * @param {Function} load load方法
   * @param {Function=} placeholder loading过程中渲染的组件
   * @param {Function=} fallback load失败时渲染的组件
   */


  function ComponentLoader(load, placeholder, fallback) {
    this.load = load;
    this.placeholder = placeholder;
    this.fallback = fallback;
    this.listeners = [];
  }
  /**
   * 开始加载组件
   *
   * @param {Function} onload 组件加载完成监听函数
   */


  ComponentLoader.prototype.start = function (onload) {
    var me = this;

    switch (this.state) {
      case 2:
        nextTick(function () {
          onload(me.Component);
        });
        break;

      case 1:
        this.listeners.push(onload);
        break;

      default:
        this.listeners.push(onload);
        this.state = 1;
        var startLoad = this.load();

        var done = function (RealComponent) {
          me.done(RealComponent);
        };

        if (startLoad && typeof startLoad.then === 'function') {
          startLoad.then(done, done);
        }

    }
  };
  /**
   * 完成组件加载
   *
   * @param {Function=} ComponentClass 组件类
   */


  ComponentLoader.prototype.done = function (ComponentClass) {
    this.state = 2;
    ComponentClass = ComponentClass || this.fallback;
    this.Component = ComponentClass;
    each(this.listeners, function (listener) {
      listener(ComponentClass);
    });
  }; // exports = module.exports = ComponentLoader;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 编译组件类
   */
  // var warn = require('../util/warn');
  // var parseTemplate = require('../parser/parse-template');
  // var parseText = require('../parser/parse-text');
  // var defineComponent = require('./define-component');
  // var ComponentLoader = require('./component-loader');

  /**
   * 编译组件类。预解析template和components
   *
   * @param {Function} ComponentClass 组件类
   */


  function compileComponent(ComponentClass) {
    var proto = ComponentClass.prototype; // pre define components class

    /* istanbul ignore else  */

    if (!proto.hasOwnProperty('_cmptReady')) {
      proto.components = ComponentClass.components || proto.components || {};
      var components = proto.components;

      for (var key in components) {
        // eslint-disable-line
        var componentClass = components[key];

        if (typeof componentClass === 'object' && !(componentClass instanceof ComponentLoader)) {
          components[key] = defineComponent(componentClass);
        } else if (componentClass === 'self') {
          components[key] = ComponentClass;
        }
      }

      proto._cmptReady = 1;
    } // pre compile template

    /* istanbul ignore else  */


    if (!proto.hasOwnProperty('aNode')) {
      var aNode = parseTemplate(ComponentClass.template || proto.template, {
        trimWhitespace: proto.trimWhitespace || ComponentClass.trimWhitespace,
        delimiters: proto.delimiters || ComponentClass.delimiters
      });
      var firstChild = aNode.children[0];

      if (firstChild && firstChild.textExpr) {
        firstChild = null;
      } // #[begin] error


      if (aNode.children.length !== 1 || !firstChild) {
        warn('Component template must have a root element.');
      } // #[end]


      proto.aNode = firstChild = firstChild || {
        directives: {},
        props: [],
        events: [],
        children: []
      };

      if (firstChild.tagName === 'template') {
        firstChild.tagName = null;
      }

      if (proto.autoFillStyleAndId !== false && ComponentClass.autoFillStyleAndId !== false) {
        var toExtraProp = {
          'class': 0,
          style: 0,
          id: 0
        };
        var len = firstChild.props.length;

        while (len--) {
          var prop = firstChild.props[len];

          if (toExtraProp[prop.name] != null) {
            toExtraProp[prop.name] = prop;
            firstChild.props.splice(len, 1);
          }
        }

        toExtraProp.id = toExtraProp.id || {
          name: 'id',
          expr: parseExpr('id')
        };

        if (toExtraProp['class']) {
          var classExpr = parseText('{{class | _xclass}}').segs[0];
          classExpr.filters[0].args.push(toExtraProp['class'].expr);
          toExtraProp['class'].expr = classExpr;
        } else {
          toExtraProp['class'] = {
            name: 'class',
            expr: parseText('{{class | _class}}')
          };
        }

        if (toExtraProp.style) {
          var styleExpr = parseText('{{style | _xstyle}}').segs[0];
          styleExpr.filters[0].args.push(toExtraProp.style.expr);
          toExtraProp.style.expr = styleExpr;
        } else {
          toExtraProp.style = {
            name: 'style',
            expr: parseText('{{style | _style}}')
          };
        }

        firstChild.props.push(toExtraProp['class'], // eslint-disable-line dot-notation
        toExtraProp.style, toExtraProp.id);
      }
    }
  } // exports = module.exports = compileComponent;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 判断是否结束桩
   */
  // #[begin] reverse

  /**
   * 判断是否结束桩
   *
   * @param {HTMLElement|HTMLComment} target 要判断的元素
   * @param {string} type 桩类型
   * @return {boolean}
   */


  function isEndStump(target, type) {
    return target.nodeType === 8 && target.data === '/s-' + type;
  } // #[end]
  // exports = module.exports = isEndStump;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file text 节点类
   */
  // var isBrowser = require('../browser/is-browser');
  // var removeEl = require('../browser/remove-el');
  // var insertBefore = require('../browser/insert-before');
  // var changeExprCompare = require('../runtime/change-expr-compare');
  // var evalExpr = require('../runtime/eval-expr');
  // var NodeType = require('./node-type');
  // var warnSetHTML = require('./warn-set-html');
  // var isEndStump = require('./is-end-stump');
  // var getNodePath = require('./get-node-path');

  /**
   * text 节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */


  function TextNode(aNode, parent, scope, owner, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent; // #[begin] reverse

    if (reverseWalker) {
      var currentNode = reverseWalker.current;

      if (currentNode) {
        switch (currentNode.nodeType) {
          case 8:
            if (currentNode.data === 's-text') {
              this.sel = currentNode;
              currentNode.data = this.id;
              reverseWalker.goNext();

              while (1) {
                // eslint-disable-line
                currentNode = reverseWalker.current;
                /* istanbul ignore if */

                if (!currentNode) {
                  throw new Error('[SAN REVERSE ERROR] Text end flag not found. \nPaths: ' + getNodePath(this).join(' > '));
                }

                if (isEndStump(currentNode, 'text')) {
                  this.el = currentNode;
                  reverseWalker.goNext();
                  currentNode.data = this.id;
                  break;
                }

                reverseWalker.goNext();
              }
            }

            break;

          case 3:
            reverseWalker.goNext();

            if (!this.aNode.textExpr.original) {
              this.el = currentNode;
            }

            break;
        }
      } else {
        this.el = document.createTextNode('');
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);
      }
    } // #[end]

  }

  TextNode.prototype.nodeType = 1;
  /**
   * 将text attach到页面
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */

  TextNode.prototype.attach = function (parentEl, beforeEl) {
    this.content = evalExpr(this.aNode.textExpr, this.scope, this.owner);

    if (this.aNode.textExpr.original) {
      this.sel = document.createComment(this.id);
      insertBefore(this.sel, parentEl, beforeEl);
      this.el = document.createComment(this.id);
      insertBefore(this.el, parentEl, beforeEl);
      var tempFlag = document.createElement('script');
      parentEl.insertBefore(tempFlag, this.el);
      tempFlag.insertAdjacentHTML('beforebegin', this.content);
      parentEl.removeChild(tempFlag);
    } else {
      this.el = document.createTextNode(this.content);
      insertBefore(this.el, parentEl, beforeEl);
    }
  };
  /**
   * 销毁 text 节点
   *
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   */


  TextNode.prototype.dispose = function (noDetach) {
    if (!noDetach) {
      removeEl(this.el);
      removeEl(this.sel);
    }

    this.el = null;
    this.sel = null;
  };

  var textUpdateProp = isBrowser && (typeof document.createTextNode('').textContent === 'string' ? 'textContent' : 'data');
  /**
   * 更新 text 节点的视图
   *
   * @param {Array} changes 数据变化信息
   */

  TextNode.prototype._update = function (changes) {
    if (this.aNode.textExpr.value) {
      return;
    }

    var len = changes.length;

    while (len--) {
      if (changeExprCompare(changes[len].expr, this.aNode.textExpr, this.scope)) {
        var text = evalExpr(this.aNode.textExpr, this.scope, this.owner);

        if (text !== this.content) {
          this.content = text;

          if (this.aNode.textExpr.original) {
            var startRemoveEl = this.sel.nextSibling;
            var parentEl = this.el.parentNode;

            while (startRemoveEl !== this.el) {
              var removeTarget = startRemoveEl;
              startRemoveEl = startRemoveEl.nextSibling;
              removeEl(removeTarget);
            } // #[begin] error


            warnSetHTML(parentEl); // #[end]

            var tempFlag = document.createElement('script');
            parentEl.insertBefore(tempFlag, this.el);
            tempFlag.insertAdjacentHTML('beforebegin', text);
            parentEl.removeChild(tempFlag);
          } else {
            this.el[textUpdateProp] = text;
          }
        }

        return;
      }
    }
  }; // exports = module.exports = TextNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 将没有 root 只有 children 的元素 attach 到页面
   */
  // var insertBefore = require('../browser/insert-before');
  // var LifeCycle = require('./life-cycle');
  // var createNode = require('./create-node');

  /**
   * 将没有 root 只有 children 的元素 attach 到页面
   * 主要用于 slot 和 template
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */


  function nodeOwnOnlyChildrenAttach(parentEl, beforeEl) {
    this.sel = document.createComment(this.id);
    insertBefore(this.sel, parentEl, beforeEl);

    for (var i = 0; i < this.aNode.children.length; i++) {
      var child = createNode(this.aNode.children[i], this, this.childScope || this.scope, this.childOwner || this.owner);
      this.children.push(child);
      child.attach(parentEl, beforeEl);
    }

    this.el = document.createComment(this.id);
    insertBefore(this.el, parentEl, beforeEl);
    this.lifeCycle = LifeCycle.attached;
  } // exports = module.exports = nodeOwnOnlyChildrenAttach;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file slot 节点类
   */
  // var each = require('../util/each');
  // var guid = require('../util/guid');
  // var extend = require('../util/extend');
  // var ExprType = require('../parser/expr-type');
  // var createAccessor = require('../parser/create-accessor');
  // var evalExpr = require('../runtime/eval-expr');
  // var Data = require('../runtime/data');
  // var DataChangeType = require('../runtime/data-change-type');
  // var changeExprCompare = require('../runtime/change-expr-compare');
  // var insertBefore = require('../browser/insert-before');
  // var removeEl = require('../browser/remove-el');
  // var NodeType = require('./node-type');
  // var LifeCycle = require('./life-cycle');
  // var getANodeProp = require('./get-a-node-prop');
  // var nodeSBindInit = require('./node-s-bind-init');
  // var nodeSBindUpdate = require('./node-s-bind-update');
  // var createReverseNode = require('./create-reverse-node');
  // var elementDisposeChildren = require('./element-dispose-children');
  // var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');

  /**
   * slot 节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */


  function SlotNode(aNode, parent, scope, owner, reverseWalker) {
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === 5 ? parent : parent.parentComponent;
    this.id = guid++;
    this.lifeCycle = LifeCycle.start;
    this.children = []; // calc slot name

    this.nameBind = getANodeProp(aNode, 'name');

    if (this.nameBind) {
      this.isNamed = true;
      this.name = evalExpr(this.nameBind.expr, this.scope, this.owner);
    } // calc aNode children


    var sourceSlots = owner.sourceSlots;
    var matchedSlots;

    if (sourceSlots) {
      matchedSlots = this.isNamed ? sourceSlots.named[this.name] : sourceSlots.noname;
    }

    if (matchedSlots) {
      this.isInserted = true;
    }

    this.aNode = {
      directives: aNode.directives,
      props: [],
      events: [],
      children: matchedSlots || aNode.children.slice(0),
      vars: aNode.vars
    };
    this._sbindData = nodeSBindInit(aNode.directives.bind, this.scope, this.owner); // calc scoped slot vars

    var initData;

    if (this._sbindData) {
      initData = extend({}, this._sbindData);
    }

    if (aNode.vars) {
      initData = initData || {};
      each(aNode.vars, function (varItem) {
        initData[varItem.name] = evalExpr(varItem.expr, scope, owner);
      });
    } // child owner & child scope


    if (this.isInserted) {
      this.childOwner = owner.owner;
      this.childScope = owner.scope;
    }

    if (initData) {
      this.isScoped = true;
      this.childScope = new Data(initData, this.childScope || this.scope);
    }

    owner.slotChildren.push(this); // #[begin] reverse

    if (reverseWalker) {
      this.sel = document.createComment(this.id);
      reverseWalker.current ? reverseWalker.target.insertBefore(this.sel, reverseWalker.current) : reverseWalker.target.appendChild(this.sel);
      var aNodeChildren = this.aNode.children;

      for (var i = 0, l = aNodeChildren.length; i < l; i++) {
        this.children.push(createReverseNode(aNodeChildren[i], this, this.childScope || this.scope, this.childOwner || this.owner, reverseWalker));
      }

      this.el = document.createComment(this.id);
      reverseWalker.current ? reverseWalker.target.insertBefore(this.el, reverseWalker.current) : reverseWalker.target.appendChild(this.el);
      this.lifeCycle = LifeCycle.attached;
    } // #[end]

  }

  SlotNode.prototype.nodeType = 6;
  /**
   * 销毁释放 slot
   *
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   * @param {boolean=} noTransition 是否不显示过渡动画效果
   */

  SlotNode.prototype.dispose = function (noDetach, noTransition) {
    this.childOwner = null;
    this.childScope = null;
    elementDisposeChildren(this.children, noDetach, noTransition);

    if (!noDetach) {
      removeEl(this.el);
      removeEl(this.sel);
    }

    this.sel = null;
    this.el = null;
    this.owner = null;
    this.scope = null;
    this.children = null;
    this.lifeCycle = LifeCycle.disposed;

    if (this._ondisposed) {
      this._ondisposed();
    }
  };

  SlotNode.prototype.attach = nodeOwnOnlyChildrenAttach;
  /**
   * 视图更新函数
   *
   * @param {Array} changes 数据变化信息
   * @param {boolean=} isFromOuter 变化信息是否来源于父组件之外的组件
   * @return {boolean}
   */

  SlotNode.prototype._update = function (changes, isFromOuter) {
    var me = this;

    if (this.nameBind && evalExpr(this.nameBind.expr, this.scope, this.owner) !== this.name) {
      this.owner._notifyNeedReload();

      return false;
    }

    if (isFromOuter) {
      if (this.isInserted) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i]._update(changes);
        }
      }
    } else {
      if (this.isScoped) {
        var varKeys = {};
        each(this.aNode.vars, function (varItem) {
          varKeys[varItem.name] = 1;
          me.childScope.set(varItem.name, evalExpr(varItem.expr, me.scope, me.owner));
        });
        var scopedChanges = [];
        this._sbindData = nodeSBindUpdate(this.aNode.directives.bind, this._sbindData, this.scope, this.owner, changes, function (name, value) {
          if (varKeys[name]) {
            return;
          }

          me.childScope.set(name, value);
          scopedChanges.push({
            type: 1,
            expr: createAccessor([{
              type: 1,
              value: name
            }]),
            value: value,
            option: {}
          });
        });
        each(changes, function (change) {
          if (!me.isInserted) {
            scopedChanges.push(change);
          }

          each(me.aNode.vars, function (varItem) {
            var name = varItem.name;
            var relation = changeExprCompare(change.expr, varItem.expr, me.scope);

            if (relation < 1) {
              return;
            }

            if (change.type !== 2) {
              scopedChanges.push({
                type: 1,
                expr: createAccessor([{
                  type: 1,
                  value: name
                }]),
                value: me.childScope.get(name),
                option: change.option
              });
            } else if (relation === 2) {
              scopedChanges.push({
                expr: createAccessor([{
                  type: 1,
                  value: name
                }]),
                type: 2,
                index: change.index,
                deleteCount: change.deleteCount,
                value: change.value,
                insertions: change.insertions,
                option: change.option
              });
            }
          });
        });

        for (var i = 0; i < this.children.length; i++) {
          this.children[i]._update(scopedChanges);
        }
      } else if (!this.isInserted) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i]._update(changes);
        }
      }
    }
  }; // exports = module.exports = SlotNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file for 指令节点类
   */
  // var inherits = require('../util/inherits');
  // var each = require('../util/each');
  // var guid = require('../util/guid');
  // var ExprType = require('../parser/expr-type');
  // var parseExpr = require('../parser/parse-expr');
  // var createAccessor = require('../parser/create-accessor');
  // var Data = require('../runtime/data');
  // var DataChangeType = require('../runtime/data-change-type');
  // var changeExprCompare = require('../runtime/change-expr-compare');
  // var evalExpr = require('../runtime/eval-expr');
  // var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
  // var insertBefore = require('../browser/insert-before');
  // var NodeType = require('./node-type');
  // var createNode = require('./create-node');
  // var createReverseNode = require('./create-reverse-node');
  // var nodeOwnSimpleDispose = require('./node-own-simple-dispose');
  // var nodeOwnCreateStump = require('./node-own-create-stump');

  /**
   * 循环项的数据容器类
   *
   * @inner
   * @class
   * @param {Object} forElement for元素对象
   * @param {*} item 当前项的数据
   * @param {number} index 当前项的索引
   */


  function ForItemData(forElement, item, index) {
    this.parent = forElement.scope;
    this.raw = {};
    this.listeners = [];
    this.directive = forElement.aNode.directives['for']; // eslint-disable-line dot-notation

    this.indexName = this.directive.index || '$index';
    this.raw[this.directive.item] = item;
    this.raw[this.indexName] = index;
  }
  /**
   * 将数据操作的表达式，转换成为对parent数据操作的表达式
   * 主要是对item和index进行处理
   *
   * @param {Object} expr 表达式
   * @return {Object}
   */


  ForItemData.prototype.exprResolve = function (expr) {
    var me = this;
    var directive = this.directive;

    function resolveItem(expr) {
      if (expr.type === 4 && expr.paths[0].value === directive.item) {
        return createAccessor(directive.value.paths.concat({
          type: 2,
          value: me.raw[me.indexName]
        }, expr.paths.slice(1)));
      }

      return expr;
    }

    expr = resolveItem(expr);
    var resolvedPaths = [];
    each(expr.paths, function (item) {
      resolvedPaths.push(item.type === 4 && item.paths[0].value === me.indexName ? {
        type: 2,
        value: me.raw[me.indexName]
      } : resolveItem(item));
    });
    return createAccessor(resolvedPaths);
  }; // 代理数据操作方法


  inherits(ForItemData, Data);
  each(['set', 'remove', 'unshift', 'shift', 'push', 'pop', 'splice'], function (method) {
    ForItemData.prototype['_' + method] = Data.prototype[method];

    ForItemData.prototype[method] = function (expr) {
      expr = this.exprResolve(parseExpr(expr));
      this.parent[method].apply(this.parent, [expr].concat(Array.prototype.slice.call(arguments, 1)));
    };
  });
  /**
   * for 指令节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */

  function ForNode(aNode, parent, scope, owner, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === 5 ? parent : parent.parentComponent;
    this.id = guid++;
    this.children = [];
    this.param = aNode.directives['for']; // eslint-disable-line dot-notation

    this.itemPaths = [{
      type: 1,
      value: this.param.item
    }];
    this.itemExpr = {
      type: 4,
      paths: this.itemPaths,
      raw: this.param.item
    };

    if (this.param.index) {
      this.indexExpr = createAccessor([{
        type: 1,
        value: '' + this.param.index
      }]);
    } // #[begin] reverse


    if (reverseWalker) {
      this.listData = evalExpr(this.param.value, this.scope, this.owner);

      if (this.listData instanceof Array) {
        for (var i = 0; i < this.listData.length; i++) {
          this.children.push(createReverseNode(this.aNode.forRinsed, this, new ForItemData(this, this.listData[i], i), this.owner, reverseWalker));
        }
      } else if (this.listData && typeof this.listData === 'object') {
        for (var i in this.listData) {
          if (this.listData.hasOwnProperty(i) && this.listData[i] != null) {
            this.children.push(createReverseNode(this.aNode.forRinsed, this, new ForItemData(this, this.listData[i], i), this.owner, reverseWalker));
          }
        }
      }

      this._create();

      insertBefore(this.el, reverseWalker.target, reverseWalker.current);
    } // #[end]

  }

  ForNode.prototype.nodeType = 3;
  ForNode.prototype._create = nodeOwnCreateStump;
  ForNode.prototype.dispose = nodeOwnSimpleDispose;
  /**
   * 将元素attach到页面的行为
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */

  ForNode.prototype.attach = function (parentEl, beforeEl) {
    this._create();

    insertBefore(this.el, parentEl, beforeEl);
    this.listData = evalExpr(this.param.value, this.scope, this.owner);

    this._createChildren();
  };
  /**
   * 创建子元素
   */


  ForNode.prototype._createChildren = function () {
    var parentEl = this.el.parentNode;
    var listData = this.listData;

    if (listData instanceof Array) {
      for (var i = 0; i < listData.length; i++) {
        var child = createNode(this.aNode.forRinsed, this, new ForItemData(this, listData[i], i), this.owner);
        this.children.push(child);
        child.attach(parentEl, this.el);
      }
    } else if (listData && typeof listData === 'object') {
      for (var i in listData) {
        if (listData.hasOwnProperty(i) && listData[i] != null) {
          var child = createNode(this.aNode.forRinsed, this, new ForItemData(this, listData[i], i), this.owner);
          this.children.push(child);
          child.attach(parentEl, this.el);
        }
      }
    }
  };
  /* eslint-disable fecs-max-statements */

  /**
   * 视图更新函数
   *
   * @param {Array} changes 数据变化信息
   */


  ForNode.prototype._update = function (changes) {
    var listData = evalExpr(this.param.value, this.scope, this.owner);
    var oldIsArr = this.listData instanceof Array;
    var newIsArr = listData instanceof Array;

    if (this.children.length) {
      if (!listData || newIsArr && listData.length === 0) {
        this._disposeChildren();

        this.listData = listData;
      } else if (oldIsArr !== newIsArr || !newIsArr) {
        // 就是这么暴力
        // 不推荐使用for遍历object，用的话自己负责
        this.listData = listData;
        var isListChanged;

        for (var cIndex = 0; !isListChanged && cIndex < changes.length; cIndex++) {
          isListChanged = changeExprCompare(changes[cIndex].expr, this.param.value, this.scope);
        }

        var dataHotspot = this.aNode.hotspot.data;

        if (isListChanged || dataHotspot && changesIsInDataRef(changes, dataHotspot)) {
          var me = this;

          this._disposeChildren(null, function () {
            me._createChildren();
          });
        }
      } else {
        this._updateArray(changes, listData);

        this.listData = listData;
      }
    } else {
      this.listData = listData;

      this._createChildren();
    }
  };
  /**
   * 销毁释放子元素
   *
   * @param {Array?} children 要销毁的子元素，默认为自身的children
   * @param {Function} callback 释放完成的回调函数
   */


  ForNode.prototype._disposeChildren = function (children, callback) {
    var parentEl = this.el.parentNode;
    var parentFirstChild = parentEl.firstChild;
    var parentLastChild = parentEl.lastChild;
    var len = this.children.length;
    var violentClear = !this.aNode.directives.transition && !children // 是否 parent 的唯一 child
    && len && parentFirstChild === this.children[0].el && parentLastChild === this.el;

    if (!children) {
      children = this.children;
      this.children = [];
    }

    var disposedChildCount = 0;
    len = children.length; // 调用入口处已保证此处必有需要被删除的 child

    for (var i = 0; i < len; i++) {
      var disposeChild = children[i];

      if (violentClear) {
        disposeChild && disposeChild.dispose(violentClear, violentClear);
      } else if (disposeChild) {
        disposeChild._ondisposed = childDisposed;
        disposeChild.dispose();
      } else {
        childDisposed();
      }
    }

    if (violentClear) {
      // #[begin] allua

      /* istanbul ignore next */
      if (ie) {
        parentEl.innerHTML = '';
      } else {
        // #[end]
        parentEl.textContent = ''; // #[begin] allua
      } // #[end]


      this.el = document.createComment(this.id);
      parentEl.appendChild(this.el);
      callback && callback();
    }

    function childDisposed() {
      disposedChildCount++;

      if (disposedChildCount >= len) {
        callback && callback();
      }
    }
  };

  ForNode.prototype.opti = typeof navigator !== 'undefined' && /chrome\/[0-9]+/i.test(navigator.userAgent);
  /**
   * 数组类型的视图更新
   *
   * @param {Array} changes 数据变化信息
   * @param {Array} newList 新数组数据
   */

  ForNode.prototype._updateArray = function (changes, newList) {
    var oldChildrenLen = this.children.length;
    var childrenChanges = new Array(oldChildrenLen);

    function pushToChildrenChanges(change) {
      for (var i = 0, l = childrenChanges.length; i < l; i++) {
        (childrenChanges[i] = childrenChanges[i] || []).push(change);
      }

      childrenNeedUpdate = null;
      isOnlyDispose = false;
    }

    var disposeChildren = []; // 控制列表是否整体更新的变量

    var isChildrenRebuild; //

    var isOnlyDispose = true;
    var childrenNeedUpdate = {};
    var newLen = newList.length;
    var getItemKey = this.aNode.hotspot.getForKey;
    /* eslint-disable no-redeclare */

    for (var cIndex = 0; cIndex < changes.length; cIndex++) {
      var change = changes[cIndex];
      var relation = changeExprCompare(change.expr, this.param.value, this.scope);

      if (!relation) {
        // 无关时，直接传递给子元素更新，列表本身不需要动
        pushToChildrenChanges(change);
      } else {
        if (relation > 2) {
          // 变更表达式是list绑定表达式的子项
          // 只需要对相应的子项进行更新
          var changePaths = change.expr.paths;
          var forLen = this.param.value.paths.length;
          var changeIndex = +evalExpr(changePaths[forLen], this.scope, this.owner);

          if (isNaN(changeIndex)) {
            pushToChildrenChanges(change);
          } else if (!isChildrenRebuild) {
            isOnlyDispose = false;
            childrenNeedUpdate && (childrenNeedUpdate[changeIndex] = 1);
            childrenChanges[changeIndex] = childrenChanges[changeIndex] || [];

            if (this.param.index) {
              childrenChanges[changeIndex].push(change);
            }

            change = change.type === 1 ? {
              type: change.type,
              expr: createAccessor(this.itemPaths.concat(changePaths.slice(forLen + 1))),
              value: change.value,
              option: change.option
            } : {
              index: change.index,
              deleteCount: change.deleteCount,
              insertions: change.insertions,
              type: change.type,
              expr: createAccessor(this.itemPaths.concat(changePaths.slice(forLen + 1))),
              value: change.value,
              option: change.option
            };
            childrenChanges[changeIndex].push(change);

            if (change.type === 1) {
              if (this.children[changeIndex]) {
                this.children[changeIndex].scope._set(change.expr, change.value, {
                  silent: 1
                });
              } else {
                // 设置数组项的索引可能超出数组长度，此时需要新增
                // 比如当前数组只有2项，但是set list[4]
                this.children[changeIndex] = 0;
              }
            } else if (this.children[changeIndex]) {
              this.children[changeIndex].scope._splice(change.expr, [].concat(change.index, change.deleteCount, change.insertions), {
                silent: 1
              });
            }
          }
        } else if (isChildrenRebuild) {
          continue;
        } else if (relation === 2 && change.type === 2 && (this.owner.updateMode !== 'optimized' || !this.opti || this.aNode.directives.transition)) {
          childrenNeedUpdate = null; // 变更表达式是list绑定表达式本身数组的splice操作
          // 此时需要删除部分项，创建部分项

          var changeStart = change.index;
          var deleteCount = change.deleteCount;
          var insertionsLen = change.insertions.length;
          var newCount = insertionsLen - deleteCount;

          if (newCount) {
            var indexChange = this.param.index ? {
              type: 1,
              option: change.option,
              expr: this.indexExpr
            } : null;

            for (var i = changeStart + deleteCount; i < this.children.length; i++) {
              if (indexChange) {
                isOnlyDispose = false;
                (childrenChanges[i] = childrenChanges[i] || []).push(indexChange);
              }

              var child = this.children[i];

              if (child) {
                child.scope.raw[child.scope.indexName] = i - deleteCount + insertionsLen;
              }
            }
          }

          var deleteLen = deleteCount;

          while (deleteLen--) {
            if (deleteLen < insertionsLen) {
              isOnlyDispose = false;
              var i = changeStart + deleteLen; // update

              (childrenChanges[i] = childrenChanges[i] || []).push({
                type: 1,
                option: change.option,
                expr: this.itemExpr,
                value: change.insertions[deleteLen]
              });

              if (this.children[i]) {
                this.children[i].scope.raw[this.param.item] = change.insertions[deleteLen];
              }
            }
          }

          if (newCount < 0) {
            disposeChildren = disposeChildren.concat(this.children.splice(changeStart + insertionsLen, -newCount));
            childrenChanges.splice(changeStart + insertionsLen, -newCount);
          } else if (newCount > 0) {
            isOnlyDispose = false;
            var spliceArgs = [changeStart + deleteCount, 0].concat(new Array(newCount));
            this.children.splice.apply(this.children, spliceArgs);
            childrenChanges.splice.apply(childrenChanges, spliceArgs);
          }
        } else {
          childrenNeedUpdate = null;
          isOnlyDispose = false;
          isChildrenRebuild = 1; // 变更表达式是list绑定表达式本身或母项的重新设值
          // 此时需要更新整个列表

          if (getItemKey && newLen && oldChildrenLen) {
            // 如果设置了trackBy，用lis更新。开始 ====
            var newListKeys = [];
            var oldListKeys = [];
            var newListKeysMap = {};
            var oldListInNew = [];
            var oldListKeyIndex = {};

            for (var i = 0; i < newList.length; i++) {
              var itemKey = getItemKey(newList[i]);
              newListKeys.push(itemKey);
              newListKeysMap[itemKey] = i;
            }

            ;

            for (var i = 0; i < this.listData.length; i++) {
              var itemKey = getItemKey(this.listData[i]);
              oldListKeys.push(itemKey);
              oldListKeyIndex[itemKey] = i;

              if (newListKeysMap[itemKey] != null) {
                oldListInNew[i] = newListKeysMap[itemKey];
              } else {
                oldListInNew[i] = -1;
                disposeChildren.push(this.children[i]);
              }
            }

            ;
            var newIndexStart = 0;
            var newIndexEnd = newLen;
            var oldIndexStart = 0;
            var oldIndexEnd = oldChildrenLen; // 优化：从头开始比对新旧 list 项是否相同

            while (newIndexStart < newLen && oldIndexStart < oldChildrenLen && newListKeys[newIndexStart] === oldListKeys[oldIndexStart]) {
              if (this.listData[oldIndexStart] !== newList[newIndexStart]) {
                this.children[oldIndexStart].scope.raw[this.param.item] = newList[newIndexStart];
                (childrenChanges[oldIndexStart] = childrenChanges[oldIndexStart] || []).push({
                  type: 1,
                  option: change.option,
                  expr: this.itemExpr,
                  value: newList[newIndexStart]
                });
              } // 对list更上级数据的直接设置


              if (relation < 2) {
                (childrenChanges[oldIndexStart] = childrenChanges[oldIndexStart] || []).push(change);
              }

              newIndexStart++;
              oldIndexStart++;
            }

            var indexChange = this.param.index ? {
              type: 1,
              option: change.option,
              expr: this.indexExpr
            } : null; // 优化：从尾开始比对新旧 list 项是否相同

            while (newIndexEnd > newIndexStart && oldIndexEnd > oldIndexStart && newListKeys[newIndexEnd - 1] === oldListKeys[oldIndexEnd - 1]) {
              newIndexEnd--;
              oldIndexEnd--;

              if (this.listData[oldIndexEnd] !== newList[newIndexEnd]) {
                // refresh item
                this.children[oldIndexEnd].scope.raw[this.param.item] = newList[newIndexEnd];
                (childrenChanges[oldIndexEnd] = childrenChanges[oldIndexEnd] || []).push({
                  type: 1,
                  option: change.option,
                  expr: this.itemExpr,
                  value: newList[newIndexEnd]
                });
              } // refresh index


              if (newIndexEnd !== oldIndexEnd) {
                this.children[oldIndexEnd].scope.raw[this.children[oldIndexEnd].scope.indexName] = newIndexEnd;

                if (indexChange) {
                  (childrenChanges[oldIndexEnd] = childrenChanges[oldIndexEnd] || []).push(indexChange);
                }
              } // 对list更上级数据的直接设置


              if (relation < 2) {
                (childrenChanges[oldIndexEnd] = childrenChanges[oldIndexEnd] || []).push(change);
              }
            }

            var oldListLIS = [];
            var lisIdx = [];
            var lisPos = -1;
            var lisSource = oldListInNew.slice(oldIndexStart, oldIndexEnd);
            var len = oldIndexEnd - oldIndexStart;
            var preIdx = new Array(len);

            for (var i = 0; i < len; i++) {
              var oldItemInNew = lisSource[i];

              if (oldItemInNew === -1) {
                continue;
              }

              var rePos = -1;
              var rePosEnd = oldListLIS.length;

              if (rePosEnd > 0 && oldListLIS[rePosEnd - 1] <= oldItemInNew) {
                rePos = rePosEnd - 1;
              } else {
                while (rePosEnd - rePos > 1) {
                  var mid = Math.floor((rePos + rePosEnd) / 2);

                  if (oldListLIS[mid] > oldItemInNew) {
                    rePosEnd = mid;
                  } else {
                    rePos = mid;
                  }
                }
              }

              if (rePos !== -1) {
                preIdx[i] = lisIdx[rePos];
              }

              if (rePos === lisPos) {
                lisPos++;
                oldListLIS[lisPos] = oldItemInNew;
                lisIdx[lisPos] = i;
              } else if (oldItemInNew < oldListLIS[rePos + 1]) {
                oldListLIS[rePos + 1] = oldItemInNew;
                lisIdx[rePos + 1] = i;
              }
            }

            for (var i = lisIdx[lisPos]; lisPos >= 0; i = preIdx[i], lisPos--) {
              oldListLIS[lisPos] = i;
            }

            var oldListLISPos = oldListLIS.length;
            var staticPos = oldListLISPos ? oldListInNew[oldListLIS[--oldListLISPos] + oldIndexStart] : -1;
            var newChildren = [];
            var newChildrenChanges = [];

            for (var i = newLen - 1; i >= 0; i--) {
              if (i >= newIndexEnd) {
                newChildren[i] = this.children[oldChildrenLen - newLen + i];
                newChildrenChanges[i] = childrenChanges[oldChildrenLen - newLen + i];
              } else if (i < newIndexStart) {
                newChildren[i] = this.children[i];
                newChildrenChanges[i] = childrenChanges[i];
              } else {
                var oldListIndex = oldListKeyIndex[newListKeys[i]];

                if (i === staticPos) {
                  var oldScope = this.children[oldListIndex].scope; // 如果数据本身引用发生变化，设置变更

                  if (this.listData[oldListIndex] !== newList[i]) {
                    oldScope.raw[this.param.item] = newList[i];
                    (childrenChanges[oldListIndex] = childrenChanges[oldListIndex] || []).push({
                      type: 1,
                      option: change.option,
                      expr: this.itemExpr,
                      value: newList[i]
                    });
                  } // refresh index


                  if (indexChange && i !== oldListIndex) {
                    oldScope.raw[oldScope.indexName] = i;

                    if (indexChange) {
                      (childrenChanges[oldListIndex] = childrenChanges[oldListIndex] || []).push(indexChange);
                    }
                  } // 对list更上级数据的直接设置


                  if (relation < 2) {
                    (childrenChanges[oldListIndex] = childrenChanges[oldListIndex] || []).push(change);
                  }

                  newChildren[i] = this.children[oldListIndex];
                  newChildrenChanges[i] = childrenChanges[oldListIndex];
                  staticPos = oldListLISPos ? oldListInNew[oldListLIS[--oldListLISPos] + oldIndexStart] : -1;
                } else {
                  if (oldListIndex != null) {
                    disposeChildren.push(this.children[oldListIndex]);
                  }

                  newChildren[i] = 0;
                  newChildrenChanges[i] = 0;
                }
              }
            }

            this.children = newChildren;
            childrenChanges = newChildrenChanges; // 如果设置了trackBy，用lis更新。结束 ====
          } else {
            // 老的比新的多的部分，标记需要dispose
            if (oldChildrenLen > newLen) {
              disposeChildren = disposeChildren.concat(this.children.slice(newLen));
              childrenChanges = childrenChanges.slice(0, newLen);
              this.children = this.children.slice(0, newLen);
            } // 剩下的部分整项变更


            for (var i = 0; i < newLen; i++) {
              // 对list更上级数据的直接设置
              if (relation < 2) {
                (childrenChanges[i] = childrenChanges[i] || []).push(change);
              }

              if (this.children[i]) {
                if (this.children[i].scope.raw[this.param.item] !== newList[i]) {
                  this.children[i].scope.raw[this.param.item] = newList[i];
                  (childrenChanges[i] = childrenChanges[i] || []).push({
                    type: 1,
                    option: change.option,
                    expr: this.itemExpr,
                    value: newList[i]
                  });
                }
              } else {
                this.children[i] = 0;
              }
            }
          }
        }
      }
    } // 标记 length 是否发生变化


    if (newLen !== oldChildrenLen && this.param.value.paths) {
      var lengthChange = {
        type: 1,
        option: {},
        expr: createAccessor(this.param.value.paths.concat({
          type: 1,
          value: 'length'
        }))
      };

      if (changesIsInDataRef([lengthChange], this.aNode.hotspot.data)) {
        pushToChildrenChanges(lengthChange);
      }
    } // 执行视图更新，先删再刷新


    this._doCreateAndUpdate = doCreateAndUpdate;
    var me = this;

    if (disposeChildren.length === 0) {
      doCreateAndUpdate();
    } else {
      this._disposeChildren(disposeChildren, function () {
        if (doCreateAndUpdate === me._doCreateAndUpdate) {
          doCreateAndUpdate();
        }
      });
    }

    function doCreateAndUpdate() {
      me._doCreateAndUpdate = null;

      if (isOnlyDispose) {
        return;
      }

      var beforeEl = me.el;
      var parentEl = beforeEl.parentNode; // 对相应的项进行更新
      // 如果不attached则直接创建，如果存在则调用更新函数

      var j = -1;

      for (var i = 0; i < newLen; i++) {
        var child = me.children[i];

        if (child) {
          if (childrenChanges[i] && (!childrenNeedUpdate || childrenNeedUpdate[i])) {
            child._update(childrenChanges[i]);
          }
        } else {
          if (j < i) {
            j = i + 1;
            beforeEl = null;

            while (j < newLen) {
              var nextChild = me.children[j];

              if (nextChild) {
                beforeEl = nextChild.sel || nextChild.el;
                break;
              }

              j++;
            }
          }

          me.children[i] = createNode(me.aNode.forRinsed, me, new ForItemData(me, newList[i], i), me.owner);
          me.children[i].attach(parentEl, beforeEl || me.el);
        }
      }
    }
  }; // exports = module.exports = ForNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file if 指令节点类
   */
  // var each = require('../util/each');
  // var guid = require('../util/guid');
  // var insertBefore = require('../browser/insert-before');
  // var evalExpr = require('../runtime/eval-expr');
  // var NodeType = require('./node-type');
  // var createNode = require('./create-node');
  // var createReverseNode = require('./create-reverse-node');
  // var nodeOwnCreateStump = require('./node-own-create-stump');
  // var nodeOwnSimpleDispose = require('./node-own-simple-dispose');

  /**
   * if 指令节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */


  function IfNode(aNode, parent, scope, owner, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === 5 ? parent : parent.parentComponent;
    this.id = guid++;
    this.children = []; // #[begin] reverse

    if (reverseWalker) {
      if (evalExpr(this.aNode.directives['if'].value, this.scope, this.owner)) {
        // eslint-disable-line dot-notation
        this.elseIndex = -1;
        this.children[0] = createReverseNode(this.aNode.ifRinsed, this, this.scope, this.owner, reverseWalker);
      } else {
        var me = this;
        each(aNode.elses, function (elseANode, index) {
          var elif = elseANode.directives.elif;

          if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
            me.elseIndex = index;
            me.children[0] = createReverseNode(elseANode, me, me.scope, me.owner, reverseWalker);
            return false;
          }
        });
      }

      this._create();

      insertBefore(this.el, reverseWalker.target, reverseWalker.current);
    } // #[end]

  }

  IfNode.prototype.nodeType = 2;
  IfNode.prototype._create = nodeOwnCreateStump;
  IfNode.prototype.dispose = nodeOwnSimpleDispose;
  /**
   * attach到页面
   *
   * @param {HTMLElement} parentEl 要添加到的父元素
   * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
   */

  IfNode.prototype.attach = function (parentEl, beforeEl) {
    var me = this;
    var elseIndex;
    var child;

    if (evalExpr(this.aNode.directives['if'].value, this.scope, this.owner)) {
      // eslint-disable-line dot-notation
      child = createNode(this.aNode.ifRinsed, this, this.scope, this.owner);
      elseIndex = -1;
    } else {
      each(this.aNode.elses, function (elseANode, index) {
        var elif = elseANode.directives.elif;

        if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
          child = createNode(elseANode, me, me.scope, me.owner);
          elseIndex = index;
          return false;
        }
      });
    }

    if (child) {
      this.children[0] = child;
      child.attach(parentEl, beforeEl);
      this.elseIndex = elseIndex;
    }

    this._create();

    insertBefore(this.el, parentEl, beforeEl);
  };
  /**
   * 视图更新函数
   *
   * @param {Array} changes 数据变化信息
   */


  IfNode.prototype._update = function (changes) {
    var me = this;
    var childANode = this.aNode.ifRinsed;
    var elseIndex;

    if (evalExpr(this.aNode.directives['if'].value, this.scope, this.owner)) {
      // eslint-disable-line dot-notation
      elseIndex = -1;
    } else {
      each(this.aNode.elses, function (elseANode, index) {
        var elif = elseANode.directives.elif;

        if (elif && evalExpr(elif.value, me.scope, me.owner) || !elif) {
          elseIndex = index;
          childANode = elseANode;
          return false;
        }
      });
    }

    var child = this.children[0];

    if (elseIndex === this.elseIndex) {
      child && child._update(changes);
    } else {
      this.children = [];

      if (child) {
        child._ondisposed = newChild;
        child.dispose();
      } else {
        newChild();
      }

      this.elseIndex = elseIndex;
    }

    function newChild() {
      if (typeof elseIndex !== 'undefined') {
        (me.children[0] = createNode(childANode, me, me.scope, me.owner)).attach(me.el.parentNode, me.el);
      }
    }
  }; // exports = module.exports = IfNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file template 节点类
   */
  // var each = require('../util/each');
  // var guid = require('../util/guid');
  // var insertBefore = require('../browser/insert-before');
  // var removeEl = require('../browser/remove-el');
  // var NodeType = require('./node-type');
  // var LifeCycle = require('./life-cycle');
  // var createReverseNode = require('./create-reverse-node');
  // var elementDisposeChildren = require('./element-dispose-children');
  // var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');

  /**
   * template 节点类
   *
   * @class
   * @param {Object} aNode 抽象节点
   * @param {Node} parent 父亲节点
   * @param {Model} scope 所属数据环境
   * @param {Component} owner 所属组件环境
   * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
   */


  function TemplateNode(aNode, parent, scope, owner, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === 5 ? parent : parent.parentComponent;
    this.id = guid++;
    this.lifeCycle = LifeCycle.start;
    this.children = []; // #[begin] reverse

    if (reverseWalker) {
      this.sel = document.createComment(this.id);
      insertBefore(this.sel, reverseWalker.target, reverseWalker.current);
      var me = this;
      each(this.aNode.children, function (aNodeChild) {
        me.children.push(createReverseNode(aNodeChild, me, me.scope, me.owner, reverseWalker));
      });
      this.el = document.createComment(this.id);
      insertBefore(this.el, reverseWalker.target, reverseWalker.current);
      this.lifeCycle = LifeCycle.attached;
    } // #[end]

  }

  TemplateNode.prototype.nodeType = 7;
  TemplateNode.prototype.attach = nodeOwnOnlyChildrenAttach;
  /**
   * 销毁释放
   *
   * @param {boolean=} noDetach 是否不要把节点从dom移除
   * @param {boolean=} noTransition 是否不显示过渡动画效果
   */

  TemplateNode.prototype.dispose = function (noDetach, noTransition) {
    elementDisposeChildren(this.children, noDetach, noTransition);

    if (!noDetach) {
      removeEl(this.el);
      removeEl(this.sel);
    }

    this.sel = null;
    this.el = null;
    this.owner = null;
    this.scope = null;
    this.children = null;
    this.lifeCycle = LifeCycle.disposed;

    if (this._ondisposed) {
      this._ondisposed();
    }
  };
  /**
   * 视图更新函数
   *
   * @param {Array} changes 数据变化信息
   */


  TemplateNode.prototype._update = function (changes) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i]._update(changes);
    }
  }; // exports = module.exports = TemplateNode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file ANode预热
   */
  // var ExprType = require('../parser/expr-type');
  // var each = require('../util/each');
  // var extend = require('../util/extend');
  // var kebab2camel = require('../util/kebab2camel');
  // var createEl = require('../browser/create-el');
  // var getPropHandler = require('./get-prop-handler');
  // var getANodeProp = require('./get-a-node-prop');
  // var isBrowser = require('../browser/is-browser');
  // var TextNode = require('./text-node');
  // var SlotNode = require('./slot-node');
  // var ForNode = require('./for-node');
  // var IfNode = require('./if-node');
  // var TemplateNode = require('./template-node');

  /**
   * ANode预热，分析的数据引用等信息
   *
   * @param {Object} aNode 要预热的ANode
   */


  function preheatANode(aNode) {
    var stack = [];

    function recordHotspotData(expr, notContentData) {
      var refs = analyseExprDataHotspot(expr);

      if (refs.length) {
        for (var i = 0, len = stack.length; i < len; i++) {
          if (!notContentData || i !== len - 1) {
            var data = stack[i].hotspot.data;

            if (!data) {
              data = stack[i].hotspot.data = {};
            }

            each(refs, function (ref) {
              data[ref] = 1;
            });
          }
        }
      }
    }

    function analyseANodeHotspot(aNode) {
      if (!aNode.hotspot) {
        stack.push(aNode);

        if (aNode.textExpr) {
          aNode.hotspot = {};
          aNode.Clazz = TextNode;
          recordHotspotData(aNode.textExpr);
        } else {
          var sourceNode;

          if (isBrowser && aNode.tagName && aNode.tagName.indexOf('-') < 0 && !/^(template|slot|select|input|option|button|video|audio|canvas|img|embed|object|iframe)$/i.test(aNode.tagName)) {
            sourceNode = createEl(aNode.tagName);
          }

          aNode.hotspot = {
            dynamicProps: [],
            xProps: [],
            props: {},
            binds: [],
            sourceNode: sourceNode
          }; // === analyse hotspot data: start

          each(aNode.vars, function (varItem) {
            recordHotspotData(varItem.expr);
          });
          each(aNode.props, function (prop) {
            aNode.hotspot.binds.push({
              name: kebab2camel(prop.name),
              expr: prop.raw != null ? prop.expr : {
                type: 3,
                value: true
              },
              x: prop.x,
              raw: prop.raw
            });
            recordHotspotData(prop.expr);
          });

          for (var key in aNode.directives) {
            /* istanbul ignore else  */
            if (aNode.directives.hasOwnProperty(key)) {
              var directive = aNode.directives[key];
              recordHotspotData(directive.value, !/^(html|bind)$/.test(key)); // init trackBy getKey function

              if (key === 'for') {
                var trackBy = directive.trackBy;

                if (trackBy && trackBy.type === 4 && trackBy.paths[0].value === directive.item) {
                  aNode.hotspot.getForKey = new Function(directive.item, 'return ' + trackBy.raw);
                }
              }
            }
          }

          each(aNode.elses, function (child) {
            analyseANodeHotspot(child);
          });
          each(aNode.children, function (child) {
            analyseANodeHotspot(child);
          }); // === analyse hotspot data: end
          // === analyse hotspot props: start

          each(aNode.props, function (prop, index) {
            aNode.hotspot.props[prop.name] = index;
            prop.handler = getPropHandler(aNode.tagName, prop.name);

            if (prop.name === 'id') {
              prop.id = true;
              aNode.hotspot.idProp = prop;
              aNode.hotspot.dynamicProps.push(prop);
            } else if (prop.expr.value != null) {
              if (sourceNode) {
                prop.handler(sourceNode, prop.expr.value, prop.name, aNode);
              }
            } else {
              if (prop.x) {
                aNode.hotspot.xProps.push(prop);
              }

              aNode.hotspot.dynamicProps.push(prop);
            }
          }); // ie 下，如果 option 没有 value 属性，select.value = xx 操作不会选中 option
          // 所以没有设置 value 时，默认把 option 的内容作为 value

          if (aNode.tagName === 'option' && !getANodeProp(aNode, 'value') && aNode.children[0]) {
            var valueProp = {
              name: 'value',
              expr: aNode.children[0].textExpr,
              handler: getPropHandler(aNode.tagName, 'value')
            };
            aNode.props.push(valueProp);
            aNode.hotspot.dynamicProps.push(valueProp);
            aNode.hotspot.props.value = aNode.props.length - 1;
          }

          if (aNode.directives['if']) {
            // eslint-disable-line dot-notation
            aNode.ifRinsed = {
              children: aNode.children,
              props: aNode.props,
              events: aNode.events,
              tagName: aNode.tagName,
              vars: aNode.vars,
              hotspot: aNode.hotspot,
              directives: extend({}, aNode.directives)
            };
            aNode.Clazz = IfNode;
            aNode = aNode.ifRinsed;
            aNode.directives['if'] = null; // eslint-disable-line dot-notation
          }

          if (aNode.directives['for']) {
            // eslint-disable-line dot-notation
            aNode.forRinsed = {
              children: aNode.children,
              props: aNode.props,
              events: aNode.events,
              tagName: aNode.tagName,
              vars: aNode.vars,
              hotspot: aNode.hotspot,
              directives: extend({}, aNode.directives)
            };
            aNode.Clazz = ForNode;
            aNode.forRinsed.directives['for'] = null; // eslint-disable-line dot-notation

            aNode = aNode.forRinsed;
          }

          switch (aNode.tagName) {
            case 'slot':
              aNode.Clazz = SlotNode;
              break;

            case 'template':
              aNode.Clazz = TemplateNode;
          } // === analyse hotspot props: end

        }

        stack.pop();
      }
    }

    if (aNode) {
      analyseANodeHotspot(aNode);
    }
  }
  /**
   * 分析表达式的数据引用
   *
   * @param {Object} expr 要分析的表达式
   * @return {Array}
   */


  function analyseExprDataHotspot(expr, accessorMeanDynamic) {
    var refs = [];
    var isDynamic;

    function analyseExprs(exprs, accessorMeanDynamic) {
      for (var i = 0, l = exprs.length; i < l; i++) {
        refs = refs.concat(analyseExprDataHotspot(exprs[i], accessorMeanDynamic));
        isDynamic = isDynamic || exprs[i].dynamic;
      }
    }

    switch (expr.type) {
      case 4:
        isDynamic = accessorMeanDynamic;
        var paths = expr.paths;
        refs.push(paths[0].value);

        if (paths.length > 1) {
          refs.push(paths[0].value + '.' + (paths[1].value || '*'));
        }

        analyseExprs(paths.slice(1), 1);
        break;

      case 9:
        refs = analyseExprDataHotspot(expr.expr, accessorMeanDynamic);
        isDynamic = expr.expr.dynamic;
        break;

      case 7:
      case 8:
      case 10:
        analyseExprs(expr.segs, accessorMeanDynamic);
        break;

      case 5:
        refs = analyseExprDataHotspot(expr.expr);
        isDynamic = expr.expr.dynamic;
        each(expr.filters, function (filter) {
          analyseExprs(filter.name.paths);
          analyseExprs(filter.args);
        });
        break;

      case 6:
        analyseExprs(expr.name.paths);
        analyseExprs(expr.args);
        break;

      case 12:
      case 11:
        for (var i = 0; i < expr.items.length; i++) {
          refs = refs.concat(analyseExprDataHotspot(expr.items[i].expr));
          isDynamic = isDynamic || expr.items[i].expr.dynamic;
        }

        break;
    }

    isDynamic && (expr.dynamic = true);
    return refs;
  } // exports = module.exports = preheatANode;

  /**
   * Copyright (c) Baidu Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license.
   * See LICENSE file in the project root for license information.
   *
   * @file 创建组件Loader
   */
  // var ComponentLoader = require('./component-loader');

  /**
   * 创建组件Loader
   *
   * @param {Object|Function} options 创建组件Loader的参数。为Object时参考下方描述，为Function时代表load方法。
   * @param {Function} options.load load方法
   * @param {Function=} options.placeholder loading过程中渲染的占位组件
   * @param {Function=} options.fallback load失败时渲染的组件
   * @return {ComponentLoader}
   */


  function createComponentLoader(options) {
    var placeholder = options.placeholder;
    var fallback = options.fallback;
    var load = typeof options === 'function' ? options : options.load;
    return new ComponentLoader(load, placeholder, fallback);
  } // exports = module.exports = createComponentLoader;

  /* eslint-disable no-unused-vars */
  //     var nextTick = require('./util/next-tick');
  //     var inherits = require('./util/inherits');
  //     var parseTemplate = require('./parser/parse-template');
  //     var parseExpr = require('./parser/parse-expr');
  //     var ExprType = require('./parser/expr-type');
  //     var LifeCycle = require('./view/life-cycle');
  //     var NodeType = require('./view/node-type');
  //     var Component = require('./view/component');
  //     var compileComponent = require('./view/compile-component');
  //     var defineComponent = require('./view/define-component');
  //     var createComponentLoader = require('./view/create-component-loader');
  //     var emitDevtool = require('./util/emit-devtool');
  //     var Data = require('./runtime/data');
  //     var evalExpr = require('./runtime/eval-expr');
  //     var DataTypes = require('./util/data-types');


  var san = {
    /**
     * san版本号
     *
     * @type {string}
     */
    version: '3.8.1',
    // #[begin] devtool

    /**
     * 是否开启调试。开启调试时 devtool 会工作
     *
     * @type {boolean}
     */
    debug: true,
    // #[end]

    /**
     * 组件基类
     *
     * @type {Function}
     */
    Component: Component,

    /**
     * 创建组件类
     *
     * @param {Object} proto 组件类的方法表
     * @return {Function}
     */
    defineComponent: defineComponent,

    /**
     * 创建组件Loader
     *
     * @param {Object|Function} options 创建组件Loader的参数。为Object时参考下方描述，为Function时代表load方法。
     * @param {Function} options.load load方法
     * @param {Function=} options.placeholder loading过程中渲染的占位组件
     * @param {Function=} options.fallback load失败时渲染的组件
     * @return {ComponentLoader}
     */
    createComponentLoader: createComponentLoader,

    /**
     * 编译组件类。预解析template和components
     *
     * @param {Function} ComponentClass 组件类
     */
    compileComponent: compileComponent,

    /**
     * 解析 template
     *
     * @inner
     * @param {string} source template 源码
     * @return {ANode}
     */
    parseTemplate: parseTemplate,

    /**
     * 解析表达式
     *
     * @param {string} source 源码
     * @return {Object}
     */
    parseExpr: parseExpr,

    /**
     * 表达式类型枚举
     *
     * @const
     * @type {Object}
     */
    ExprType: ExprType,

    /**
     * 生命周期
     */
    LifeCycle: LifeCycle,

    /**
     * 节点类型
     *
     * @const
     * @type {Object}
     */
    NodeType: NodeType,

    /**
     * 在下一个更新周期运行函数
     *
     * @param {Function} fn 要运行的函数
     */
    nextTick: nextTick,

    /**
     * 数据类
     *
     * @class
     * @param {Object?} data 初始数据
     * @param {Data?} parent 父级数据对象
     */
    Data: Data,

    /**
     * 计算表达式的值
     *
     * @param {Object} expr 表达式对象
     * @param {Data} data 数据对象
     * @param {Component=} owner 组件对象，用于表达式中filter的执行
     * @return {*}
     */
    evalExpr: evalExpr,

    /**
     * 构建类之间的继承关系
     *
     * @param {Function} subClass 子类函数
     * @param {Function} superClass 父类函数
     */
    inherits: inherits,

    /**
     * DataTypes
     *
     * @type {Object}
     */
    DataTypes: DataTypes
  }; // export

  if (true) {
    // For CommonJS
    exports = module.exports = san;
  } else {} // #[begin] devtool


  emitDevtool.start(san); // #[end]
})(this);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/compiler/modules/class.js
/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */
const bindKeys = [':class', 'v-bind:class'];

function postTransformNode(node) {
  if (node.type === 1 && node.classBinding) {
    const staticClass = node.attrsMap.class || '';
    node.attrsMap.class = `{{ _mc('${staticClass}', ${node.classBinding.replace(/\s+/g, ' ')}) }}`;
    bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

/* harmony default export */ var modules_class = ({
  postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/style.js
/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */
const style_bindKeys = [':style', 'v-bind:style', 'v-show'];

function style_postTransformNode(node) {
  const vShow = node.attrsMap['v-show'];

  if (node.type === 1 && (node.styleBinding || vShow)) {
    const staticStyle = node.staticStyle || '\'\''; // eslint-disable-next-line max-len

    node.attrsMap.style = `{{ _ms(${staticStyle.replace(/"/g, '\'')}, ${node.styleBinding ? node.styleBinding.replace(/\s+/g, ' ') : '{}'}${vShow ? `, ${vShow}` : ''}) }}`;
    style_bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

/* harmony default export */ var style = ({
  postTransformNode: style_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/bind.js
/**
 * @file bind
 * @author cxtom(cxtom2008@gmail.com)
 */
const reBind = /^(v-bind)?\:/;

function bind_postTransformNode(node) {
  if (node.type !== 1) {
    return;
  }

  const keys = Object.keys(node.attrsMap).filter(n => reBind.test(n));

  for (const key of keys) {
    const value = node.attrsMap[key];
    delete node.attrsMap[key];
    node.attrsMap[key.replace(reBind, '')] = `{{ ${value.replace(/\s+/g, ' ')} }}`;
  }

  if (node.attrsMap['v-bind']) {
    const vBind = node.attrsMap['v-bind'];
    node.attrsMap['s-bind'] = `{{ ${vBind} }}`;
    delete node.attrsMap['v-bind'];
  }
}

/* harmony default export */ var bind = ({
  postTransformNode: bind_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/if.js
/**
 * @file if
 * @author cxtom(cxtom2008@gmail.com)
 */
function if_postTransformNode(node) {
  if (node.type !== 1) {
    return;
  }

  if (node.if) {
    node.attrsMap['s-if'] = node.if;
    delete node.attrsMap['v-if'];
  }

  if (node.elseif) {
    node.attrsMap['s-else-if'] = node.elseif;
    delete node.attrsMap['v-else-if'];
  }

  if (node.else) {
    node.attrsMap['s-else'] = node.else;
    delete node.attrsMap['v-else'];
  }
}

/* harmony default export */ var modules_if = ({
  postTransformNode: if_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/for.js
/**
 * @file for
 * @author cxtom(cxtom2008@gmail.com)
 */
function for_postTransformNode(node) {
  if (node.type !== 1 || !node.for) {
    return;
  }

  let fr = node.alias;

  if (node.iterator1) {
    fr += `,${node.iterator1}`;
  }

  fr += ` in _l(${node.for})`;

  if (node.key) {
    fr += ` trackBy ${node.key}`;
  }

  node.attrsMap['s-for'] = fr;
  delete node.attrsMap['v-for'];
  delete node.attrsMap['key'];
  delete node.attrsMap[':key'];
  delete node.attrsMap['v-bind:key'];
}

/* harmony default export */ var modules_for = ({
  postTransformNode: for_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/event.js
/**
 * @file event
 * @author cxtom(cxtom2008@gmail.com)
 */
const prefixers = ['@', 'v-on:'];
const reEvent = /^(@|v-on:)/;

function event_postTransformNode(node) {
  const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));

  for (const attr of eventAttrs) {
    delete node.attrsMap[attr.name];
    const [name, ...modifiers] = attr.name.split('.');
    node.attrsMap[`on-${name.replace(reEvent, '')}`] = `${modifiers.map(m => `${m}:`).join('')}${attr.value}`;
  }
}

/* harmony default export */ var modules_event = ({
  postTransformNode: event_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/html.js
/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */
function html_postTransformNode(node) {
  if (node.type === 1 && node.attrsMap['v-html']) {
    const value = node.directives.find(d => d.name === 'html').value;
    delete node.attrsMap['v-html'];
    node.attrsMap['s-html'] = `{{ ${value} }}`;
    node.children = [];
  }

  if (node.type === 1 && node.attrsMap['v-text']) {
    const value = node.directives.find(d => d.name === 'text').value;
    delete node.attrsMap['v-text'];
    node.children = [{
      type: 2,
      text: `{{ ${value} }}`
    }];
  }
}

/* harmony default export */ var html = ({
  postTransformNode: html_postTransformNode
});
// CONCATENATED MODULE: ./src/shared/util.js
/**
 * @file 一些工具函数
 * @author cxtom(cxtom2008@gmail.com)
 */

/**
 * Mix properties into target object.
 */
function extend(to, from) {
  for (const key in from) {
    to[key] = from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */

function toObject(arr) {
  const res = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Hyphenate a camelCase string.
 */

const hyphenateRE = /([^-])([A-Z])/g;
const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});
const camelize = str => str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
// CONCATENATED MODULE: ./src/compiler/modules/ref.js
/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */


function ref_postTransformNode(node, options) {
  if (node.type !== 1 || !node.attrsMap.ref) {
    return;
  }

  const ref = node.attrsMap['s-ref'] = node.attrsMap.ref;
  delete node.attrsMap.ref;
  const info = {
    name: ref,
    root: node.parent ? undefined : 1,
    for: node.for ? 1 : undefined
  };
  options.refs.push(info);
  const camelName = camelize(ref);

  if (camelName !== ref) {
    options.refs.push({ ...info,
      name: camelName
    });
  }
}

/* harmony default export */ var modules_ref = ({
  postTransformNode: ref_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/index.js
/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */








/* harmony default export */ var compiler_modules = ([modules_if, modules_for, modules_event, html, modules_ref, modules_class, style, // bind 放在 class 和 style 处理完之后
bind]);
// EXTERNAL MODULE: external "vue-template-compiler"
var external_vue_template_compiler_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/compiler/stringify.js
/**
 * @file get html from ast
 * @author cxtom(cxtom2008@gmail.com)
 */

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
const singleTag = {
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
const noValueAttr = {
  's-else': true
};

function stringifyAttr(key, value) {
  if (noValueAttr[key]) {
    return key;
  }

  return `${key}=${JSON.stringify(value)}`;
}

function stringify(ast, scopeId) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let html = '';

  for (const node of ast) {
    if (node.type === 3 || node.type === 2) {
      html += node.text;
    } else if (node.type === 1) {
      const attrs = Object.keys(node.attrsMap).map(key => stringifyAttr(key, node.attrsMap[key]));

      if (scopeId) {
        attrs.push(scopeId);
      }

      const hasChildren = node.children && node.children.length > 0;
      const hasAttr = attrs.length > 0;
      html += `<${node.tag}${hasAttr ? ' ' : ''}${attrs.join(' ')}>`;
      html += hasChildren ? stringify(node.children, scopeId) : '';
      html += !hasChildren && singleTag[node.tag] ? '' : `</${node.tag}>`;

      if (node.ifConditions && node.ifConditions.length > 1) {
        html += stringify(node.ifConditions.slice(1).map(n => n.block), scopeId);
      }
    }
  }

  return html;
}
// CONCATENATED MODULE: ./src/compiler/modules/cssmodules.js
/**
 * @file css modules module
 * @author cxtom(cxtom2008@gmail.com)
 */

/* harmony default export */ var cssmodules = (function (cssModules) {
  function preTransformNode(el) {
    if (cssModules && cssModules.$style && el.attrsMap.class) {
      const staticClass = el.attrsMap.class.replace(/(^"|"$)/g, '').split(' ');
      el.attrsMap.class = staticClass.map(c => cssModules.$style[camelize(c)] || c).join(' ');
      el.attrsList = el.attrsList.map(({
        name,
        value
      }) => ({
        name,
        value: name === 'class' ? el.attrsMap.class : value
      }));
    }
  }

  return {
    preTransformNode
  };
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(0);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/compiler/modules/strip.js
/**
 * @file strip
 * @author cxtom(cxtom2008@gmail.com)
 */


function strip_postTransformNode(el) {
  el.children = el.children.map(child => {
    if (child.type === 3) {
      child.text = external_lodash_default.a.trim(child.text, ' \n');
    }

    if (child.type === 2 && child.expression) {
      const expression = child.expression;
      const parts = expression.split('+');
      let first = parts[0];
      let last = parts[parts.length - 1];

      if (/^".*"$/.test(first)) {
        first = JSON.parse(first);
        first = external_lodash_default.a.trimStart(first, ' \n');

        if (first) {
          child.tokens[0] = first;
          parts[0] = JSON.stringify(first);
        } else {
          child.tokens.shift();
          parts.shift();
        }
      }

      if (/^".*"$/.test(last)) {
        last = JSON.parse(last);
        last = external_lodash_default.a.trimEnd(last, ' \n');

        if (last) {
          child.tokens[parts.length - 1] = last;
          parts[parts.length - 1] = JSON.stringify(last);
        } else {
          child.tokens.pop();
          parts.pop();
        }
      }

      child.expression = parts.join('+');
      child.text = external_lodash_default.a.trim(child.text, ' \n');
    }

    return child;
  });
}

/* harmony default export */ var modules_strip = ({
  postTransformNode: strip_postTransformNode
});
// CONCATENATED MODULE: ./src/compiler/modules/atom.js
/**
 * @file atom module
 * @author cxtom(cxtom2008@gmail.com)
 */
function atom_preTransformNode(el) {
  el.attrsList = el.attrsList.map(({
    name,
    value
  }) => {
    delete el.attrsMap[name];
    name = name.replace(/^a-/, 'v-');
    el.attrsMap[name] = value;
    return {
      value,
      name
    };
  });
}

/* harmony default export */ var atom = ({
  preTransformNode: atom_preTransformNode
});
// EXTERNAL MODULE: ./node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(2);

// CONCATENATED MODULE: ./src/compiler/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */








function compile(source, options = {}) {
  const {
    modules = [],
    cssModules = null,
    scopeId = '',
    strip = true,
    atom: isAtom = false
  } = options;

  if (!Object(external_lodash_["isEmpty"])(cssModules)) {
    modules.unshift(cssmodules(cssModules));
  }

  if (strip) {
    modules.unshift(strip);
  }

  if (isAtom) {
    modules.unshift(atom);
  }

  const compilerOptions = {
    modules: [...compiler_modules, ...modules],
    preserveWhitespace: false,
    useDynamicComponent: false,
    refs: []
  };
  const {
    ast
  } = Object(external_vue_template_compiler_["compile"])(source.trim(), compilerOptions);
  const template = stringify(ast, scopeId);
  const aNode = Object(san_dev["parseTemplate"])(template).children[0];
  return {
    ast,
    aNode,
    template,
    refs: compilerOptions.refs
  };
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9lYWNoLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3VuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9zcGxpdC1zdHItMi1vYmouanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3N2Zy10YWdzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9jcmVhdGUtZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3JlbW92ZS1lbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvbmV4dC10aWNrLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9pZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvdHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvaW5wdXQtZXZlbnQtY29tcGF0aWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9kYXRhLXR5cGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9jcmVhdGUtZGF0YS10eXBlcy1jaGVja2VyLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3dhbGtlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwva2ViYWIyY2FtZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL2Jvb2wtYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvZXhwci10eXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL2NyZWF0ZS1hY2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXVuYXJ5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1pZGVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXRlcnRpYXJ5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1hY2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1wYXJlbnRoZXNpemVkLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1tdWx0aXBsaWNhdGl2ZS1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3JlYWQtYWRkaXRpdmUtZXhwci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXJlbGF0aW9uYWwtZXhwci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLWVxdWFsaXR5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1sb2dpY2FsLWFuZC1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3JlYWQtbG9naWNhbC1vci1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3BhcnNlLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcGFyc2UtY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS1pbnRlcnAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2RlY29kZS1odG1sLWVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS10ZXh0LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3BhcnNlLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9pbnRlZ3JhdGUtYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvZGVmYXVsdC1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcnVudGltZS9ldmFsLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2V2YWwtYXJncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvbGlmZS1jeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvbm9kZS10eXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtYS1ub2RlLXByb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2dldC1wcm9wLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2ZpbmQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9zcmMvcnVudGltZS9kYXRhLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtZXZlbnQtbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL2luc2VydC1iZWZvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2Jhc2UtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2RvbS1jaGlsZHJlbi13YWxrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L25vZGUtb3duLWNyZWF0ZS1zdHVtcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLW93bi1zaW1wbGUtZGlzcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvYXN5bmMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9jcmVhdGUtcmV2ZXJzZS1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NyZWF0ZS1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9lbGVtZW50LWdldC10cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9lbGVtZW50LW93bi1kZXRhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLWRpc3Bvc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLW9uLWVsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9pcy1icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC93YXJuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLWF0dGFjaGVkLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLXMtYmluZC1pbml0LmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC91bmlvbi1rZXlzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLXMtYmluZC11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL25vLXNldC1odG1sLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy93YXJuLXNldC1odG1sLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtbm9kZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9lbWl0LWRldnRvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvZGVmaW5lLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvY29tcG9uZW50LWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvY29tcGlsZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2lzLWVuZC1zdHVtcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvdGV4dC1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvc2xvdC1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9mb3Itbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvaWYtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvdGVtcGxhdGUtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvcHJlaGVhdC1hLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NyZWF0ZS1jb21wb25lbnQtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvc3RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvaW5kZXguanMiXSwibmFtZXMiOlsiYmluZEtleXMiLCJwb3N0VHJhbnNmb3JtTm9kZSIsIm5vZGUiLCJ0eXBlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwicmVwbGFjZSIsImZvckVhY2giLCJrZXkiLCJ2U2hvdyIsInN0eWxlQmluZGluZyIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJyZUJpbmQiLCJrZXlzIiwiT2JqZWN0IiwiZmlsdGVyIiwibiIsInRlc3QiLCJ2YWx1ZSIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInByZWZpeGVycyIsInJlRXZlbnQiLCJldmVudEF0dHJzIiwiYXR0cnNMaXN0IiwibmFtZSIsImF0dHIiLCJtb2RpZmllcnMiLCJzcGxpdCIsIm1hcCIsIm0iLCJqb2luIiwiZGlyZWN0aXZlcyIsImZpbmQiLCJkIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZXh0ZW5kIiwidG8iLCJmcm9tIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsIm9wdGlvbnMiLCJyZWYiLCJpbmZvIiwicm9vdCIsInBhcmVudCIsInVuZGVmaW5lZCIsInJlZnMiLCJwdXNoIiwiY2FtZWxOYW1lIiwieWYiLCJldmVudCIsImh0bWwiLCJjbGF6eiIsImJpbmQiLCJzaW5nbGVUYWciLCJhcmVhIiwiYmFzZSIsImJhc2Vmb250IiwiYnIiLCJjb2wiLCJjb21tYW5kIiwiZW1iZWQiLCJmcmFtZSIsImhyIiwiaW1nIiwiaW5wdXQiLCJpc2luZGV4Iiwia2V5Z2VuIiwibGluayIsIm1ldGEiLCJwYXJhbSIsInNvdXJjZSIsInRyYWNrIiwid2JyIiwibm9WYWx1ZUF0dHIiLCJzdHJpbmdpZnlBdHRyIiwiSlNPTiIsInN0cmluZ2lmeSIsImFzdCIsInNjb3BlSWQiLCJBcnJheSIsImlzQXJyYXkiLCJhdHRycyIsImhhc0NoaWxkcmVuIiwiaGFzQXR0ciIsInRhZyIsImlmQ29uZGl0aW9ucyIsInNsaWNlIiwiYmxvY2siLCJjc3NNb2R1bGVzIiwicHJlVHJhbnNmb3JtTm9kZSIsImVsIiwiJHN0eWxlIiwiY2hpbGQiLCJ0cmltIiwiZXhwcmVzc2lvbiIsInBhcnRzIiwiZmlyc3QiLCJsYXN0IiwicGFyc2UiLCJ0cmltU3RhcnQiLCJ0b2tlbnMiLCJzaGlmdCIsInRyaW1FbmQiLCJwb3AiLCJjb21waWxlIiwibW9kdWxlcyIsInN0cmlwIiwiYXRvbSIsImlzQXRvbSIsImlzRW1wdHkiLCJ1bnNoaWZ0IiwiZ2V0Q3NzTW9kdWxlcyIsImNvbXBpbGVyT3B0aW9ucyIsImJ1aWxkSW5Nb2R1bGVzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwidXNlRHluYW1pY0NvbXBvbmVudCIsInZ1ZUNvbXBpbGUiLCJ0ZW1wbGF0ZSIsImFOb2RlIiwicGFyc2VUZW1wbGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxtQzs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7OztBQVVBOzs7OztBQUtBLGUsQ0FFQTs7QUNqQkE7Ozs7Ozs7OztBQVVBOzs7O0FBR0EscUIsQ0FFQTs7QUNmQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEcsQ0FFQTs7QUM5QkE7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBOztBQzVCQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsQ0FFQTs7QUMxQkE7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0E7QUFDQSxHLENBRUE7O0FDNUJBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxzQ0FGQSxDQUdBOztBQUNBO0FBQ0E7QUFDQSw4REFGQSxDQUdBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxDQWJBLENBZ0JBO0FBQ0EsRyxDQUVBOztBQ3BDQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFGQSxDQUdBO0FBQ0EsS0FKQSxNQUtBO0FBQ0E7QUFDQSxLQVZBLENBV0E7O0FBQ0EsRyxDQUVBOztBQ2hDQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFGQSxDQUdBO0FBQ0EsS0FKQSxNQUtBO0FBQ0E7QUFDQSxLQVZBLENBV0E7O0FBQ0EsRyxDQUVBOztBQ2hDQTs7Ozs7Ozs7QUFTQTs7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0EsU0FDQSxpQkFEQSxFQUVBO0FBQ0E7QUFDQSxLQUpBO0FBTUE7QUFDQSxHLENBRUE7O0FDNUJBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7OztBQU1BLGdDQUNBO0FBREEsSUFFQSxzQ0FGQSxDQUdBO0FBSEEsSUFJQSx1REFKQSxDQUtBO0FBTEEsSUFNQSwyQkFOQSxDQU9BO0FBUEEsSUFRQSwwREFSQSxDQVNBO0FBVEEsSUFVQSxxQ0FWQSxDQVdBO0FBWEEsSUFZQSxvRUFaQSxFLENBZUE7O0FDaENBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHLENBRUE7O0FDekJBOzs7Ozs7Ozs7QUFTQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBOztBQ3BCQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBR0E7O0FBRUE7Ozs7Ozs7O0FBTUE7QUFFQTs7Ozs7OztBQU1BO0FBRUE7Ozs7Ozs7O0FBT0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQSxDQVZBLENBb0JBOztBQUNBOzs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxDQUdBO0FBQ0E7QUFKQSxTQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLENBTUE7QUFOQSxXQU9BO0FBQ0E7QUFDQSxTQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBOztBQ3pGQTs7Ozs7Ozs7QUFTQTs7QUFDQTs7Ozs7OztBQUtBLDJEQUNBLDZDQURBO0FBR0E7Ozs7OztBQUtBO0FBQUE7QUFBQSw0QixDQUNBO0FBRUE7O0FDMUJBOzs7Ozs7OztBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7OztBQUdBO0FBQUE7QUFBQSxTLENBQ0E7QUFFQTs7QUMxQkE7Ozs7Ozs7OztBQVNBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBOztBQ3RCQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxHLENBQ0E7O0FDdkJBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7O0FBS0EsMkcsQ0FFQTs7QUNsQkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHFDQUNBLElBREEsQ0FDQSxHQURBLEVBRUEsS0FGQSxDQUVBLENBRkEsRUFFQSxFQUZBLEVBR0EsV0FIQTtBQUlBLEcsQ0FDQTs7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBQ0Esc0NBSEEsQ0FLQTtBQUNBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBLDREQU5BLENBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQ0EsT0FEQSxHQUNBLFFBREEsR0FDQSxJQURBLEdBRUEsNEJBRkEsR0FFQSxhQUZBLEdBRUEsS0FGQSxHQUdBLG1CQUhBLEdBR0EsUUFIQTtBQUtBLFNBUkEsQ0FTQTs7O0FBQ0E7QUFDQTs7QUFFQTtBQUVBLEtBeEJBOztBQTBCQTtBQUNBLDREQW5DQSxDQW9DQTs7QUFFQTtBQUVBLEcsQ0FFQTs7QUFDQTs7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUNBLFVBREEsR0FDQSxhQURBLEdBQ0EsU0FEQSxHQUNBLFlBREEsR0FDQSxXQURBLEdBRUEsR0FGQSxHQUVBLFFBRkEsR0FFQSxlQUZBLEdBRUEsYUFGQSxHQUVBLElBRkEsR0FHQSxXQUhBLEdBR0EsSUFIQSxHQUdBLEdBSEE7QUFLQTtBQUVBLEtBYkE7QUFlQTtBQUlBOzs7Ozs7OztBQU1BO0FBRUE7QUFFQTtBQUNBLHlDQUNBLFFBREEsR0FDQSxRQURBLEdBQ0EsUUFEQSxHQUNBLGFBREEsR0FDQSxnQkFEQSxHQUVBLHlEQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUNBLFVBREEsR0FDQSxhQURBLEdBQ0EsU0FEQSxHQUNBLFlBREEsR0FDQSxXQURBLEdBRUEsR0FGQSxHQUVBLFFBRkEsR0FFQSxlQUZBLEdBRUEsYUFGQSxH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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBakNBO0FBbUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBOUNBO0FBZ0RBO0FBRUE7O0FDckZBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFQQTs7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBM0RBO0FBOERBOzs7QUFDQTs7QUFFQTtBQUNBLHdCQUNBLHNEQURBLEVBRUEsSUFGQSxFQUdBLEtBSEE7O0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFDQSxLQURBLEVBRUEsa0RBRkE7QUFiQTtBQWtCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQTNMQTs7QUE4TEE7QUFDQSxHLENBRUE7O0FDOU5BOzs7Ozs7OztBQVVBOztBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHLENBRUE7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQSxhQUVBO0FBQ0E7QUFIQSxZQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQ0EsbURBREEsRUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUF6RUE7O0FBNEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEcsQ0FFQTs7QUM1SUE7Ozs7Ozs7OztBQVNBOzs7Ozs7OztBQU1BO0FBQ0EsVUFEQTtBQUVBO0FBRkEsSSxDQUtBOztBQ3BCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBTUE7QUFDQSxhQURBO0FBR0E7QUFDQSx3QkFEQTtBQUVBO0FBRkEsS0FIQTtBQVFBO0FBQ0Esd0JBREE7QUFFQSxvQkFGQTtBQUdBO0FBSEEsS0FSQTtBQWNBO0FBQ0Esd0JBREE7QUFFQSxvQkFGQTtBQUdBLGtCQUhBO0FBSUE7QUFKQSxLQWRBO0FBcUJBO0FBQ0Esd0JBREE7QUFFQSxvQkFGQTtBQUdBLGtCQUhBO0FBSUEsbUJBSkE7QUFLQTtBQUxBLEtBckJBO0FBNkJBO0FBQ0Esd0JBREE7QUFFQSxvQkFGQTtBQUdBLGtCQUhBO0FBSUEsbUJBSkE7QUFLQSxvQkFMQTtBQU1BO0FBTkEsS0E3QkE7QUFzQ0E7QUFDQSx3QkFEQTtBQUVBLG9CQUZBO0FBR0Esa0JBSEE7QUFJQSxtQkFKQTtBQUtBO0FBTEEsS0F0Q0E7QUE4Q0E7QUFDQSx3QkFEQTtBQUVBO0FBRkE7QUE5Q0E7QUFtREE7QUFHQTs7QUMxRUE7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBTUE7QUFDQSxXQURBO0FBRUEsU0FGQTtBQUdBLFVBSEE7QUFJQSxXQUpBO0FBS0EsV0FMQTtBQU1BLFdBTkE7QUFPQSxVQVBBO0FBUUE7QUFSQSxJLENBV0E7O0FDMUJBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFPQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsQ0FFQTs7QUN2QkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7Ozs7OztBQU9BO0FBQ0EsMEJBREE7QUFFQSxnQ0FGQTtBQUdBLGdDQUhBO0FBSUEsd0JBSkE7QUFLQSx3QkFMQTtBQU1BLHNCQU5BO0FBT0Esc0JBUEE7QUFRQSxnQ0FSQTtBQVNBO0FBVEE7QUFZQTs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxxQ0FGQSxDQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0E7QUFBQTtBQUNBLFdBQ0E7QUFDQSxZQUVBO0FBQ0EsNEJBTEEsRUFNQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBaUJBLGVBakJBO0FBbUJBO0FBbkJBO0FBcUJBOztBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FDQSxLQURBLEVBRUEsZUFDQSwrQ0FEQSxHQUVBLHNEQUpBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBQ0E7QUFFQSx3QkFDQSxFQURBLEVBRUEsNkJBRkEsRUFHQSxTQUhBLEVBSUEsT0FKQSxFQUhBLENBVUE7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsMEJBQ0EsRUFEQSxFQUVBLDZCQUZBLEVBR0EsZ0JBSEEsRUFJQSxPQUpBO0FBTUEsU0FyQkEsQ0FzQkE7O0FBQ0EsT0F6QkE7QUEwQkEsK0JBMUJBO0FBMkJBLCtCQTNCQTtBQTRCQSxnQ0E1QkE7QUE2QkE7QUE3QkEsS0FEQTtBQWlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFQQSxLQWpDQTtBQTJDQTtBQUNBLCtCQURBO0FBRUEsK0JBRkE7QUFHQSxnQ0FIQTtBQUlBO0FBSkEsS0EzQ0E7QUFrREE7QUFDQSwrQkFEQTtBQUVBLCtCQUZBO0FBR0EsZ0NBSEE7QUFJQTtBQUpBLEtBbERBO0FBeURBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBekRBOztBQWtFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQ0EsZ0JBREEsR0FFQTtBQUNBLG9EQUNBLCtDQURBLEdBRUEsMERBQ0EsRUFIQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRyxDQUVBOztBQ2pRQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EsNkRBQ0EsMkNBREE7QUFFQSxHLENBRUE7O0FDdkJBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHLENBRUE7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBO0FBQ0E7O0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUpBO0FBTUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0EsR0FGQSxDLENBSUE7O0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBSkE7QUFNQTs7Ozs7OztBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7QUFTQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBUkE7QUFVQTs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQXpCQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxLQU5BLE1BT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBREE7QUFFQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQSwwQkFEQSxDQUdBOztBQUNBLHVCQUpBLENBS0E7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QTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHLENBQ0E7QUFFQTs7QUNqQ0E7Ozs7Ozs7O0FBVUE7QUFFQTs7QUFDQTs7Ozs7OztBQU1BOzs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFEQSxDQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTNCQTs7QUE4QkE7QUFDQTs7QUFFQTtBQUNBLEcsQ0FDQTtBQUVBOztBQzdEQTs7Ozs7Ozs7QUFTQTtBQUVBOzs7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBSEEsQyxDQUlBO0FBRUE7O0FDakNBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLENBVUE7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQWhDQSxDQWtDQTs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBLHVEQUNBLHlDQURBLEdBRUEsY0FGQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0EscURBQ0EsTUFEQSxHQUVBLGdDQUZBO0FBR0EsS0FMQSxNQU1BO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUNBLHVCQURBLEVBRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxNQU9BO0FBQ0E7QUFDQTtBQUNBLE9BWEE7QUFZQTs7QUFFQTtBQUNBO0FBQ0EsR0FyQkE7QUF1QkE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFaQTs7QUFlQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBLEdBM0NBO0FBOENBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQTtBQUNBO0FBQ0EsNkNBQ0EsMkJBREEsRUFFQSxrQkFGQSxFQUdBLFVBSEEsRUFJQSxVQUpBLEVBS0EsT0FMQSxFQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxTQWhCQTtBQWtCQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQ0EsOERBREEsR0FFQTtBQUNBO0FBQ0EsdUNBQ0EsQ0FDQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxlQURBLEVBS0EsTUFMQSxDQUtBLCtDQUxBLENBREE7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLGFBTkEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0EsU0FuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBLE9BNUNBOztBQThDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBRUEsb0RBSEEsQ0FHQTs7QUFDQTtBQUVBLHdDQUNBLDBCQURBLEVBRUEsZUFGQSxFQUdBLFNBSEEsRUFJQSxJQUpBLEVBS0EsV0FMQSxFQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FaQTs7QUFlQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBLDBFQUNBLHlFQURBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BM0JBLE1BNEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQXRLQTs7QUF3S0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLDBCQUNBLHdDQURBLElBRUEsZ0VBRkEsRUFHQTtBQUNBOztBQUNBO0FBQ0EsNkNBQ0EscURBREE7QUFHQTs7QUFFQTtBQUNBLHVCQUNBLGVBREEsRUFFQSxpQ0FGQSxFQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBRkE7QUFEQSxXQUhBO0FBVUE7QUFDQSxPQXpCQTtBQTBCQSxLQTNCQTtBQTZCQTtBQUNBLEdBbENBO0FBb0NBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWJBO0FBZ0JBOzs7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FQQSxNQVFBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7O0FBY0E7QUFDQSxHQWxCQTtBQXFCQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLEVBSUEsSUFKQTtBQUtBLEdBUkE7QUFXQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0EsdUNBREEsQ0FHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVRBOztBQVdBO0FBQ0Esa0RBREEsQ0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUNBLE9BREEsRUFFQSxvQkFGQSxFQUdBLEdBSEEsRUFJQSxJQUpBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUNBLHVEQURBLEdBRUEsNkNBRkE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBdERBLE1BdURBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBakVBO0FBbUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxHQW5CQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBLHdDQWRBLENBZ0JBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLDJCQTdCQSxDQStCQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXBDQSxDQXFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFEQSxNQTJEQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxHQWhFQSxDLENBbUVBOztBQ3QvQkE7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsQ0FPQTs7O0FBQ0E7QUFDQTtBQUNBLEtBVkEsQ0FXQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsRyxDQUVBOztBQzFDQTs7Ozs7Ozs7QUFTQTtBQUNBOztBQUdBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBOztBQXRCQTtBQXdCQSxHQTNCQTtBQTZCQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQVJBLEMsQ0FVQTs7QUNoRkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7Ozs7OztBQUtBO0FBQ0EseUNBREEsQ0FHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQXJCQSxDQXdCQTs7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBLDZFQURBO0FBRUE7QUFGQTtBQUtBOztBQUNBO0FBQ0E7QUFDQSxPQVRBLENBV0E7OztBQUNBO0FBQ0E7QUFDQSxPQWRBLENBZUE7OztBQUVBO0FBQ0Esc0JBREE7QUFFQSxpQkFGQTtBQUdBLGtCQUhBO0FBSUE7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQURBO0FBQ0Esa0JBREE7QUFDQTtBQURBO0FBSUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxNQUtBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBSUE7O0FBRUEsOEJBQ0Esb0JBREEsRUFDQTtBQUNBLHlCQUZBLEVBR0EsY0FIQTtBQUtBO0FBQ0E7QUFDQSxHLENBRUE7O0FDNUhBOzs7Ozs7OztBQVNBOztBQUNBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0EsRyxDQUNBO0FBRUE7O0FDdEJBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFKQSxDQU1BOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSw2RkFDQSw2QkFEQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFoQ0E7QUFrQ0EsT0FuQ0EsTUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpEQSxDQWtEQTs7QUFDQTs7QUFFQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVhBLE1BWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQW5CQTtBQXFCQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBUkE7O0FBVUEscUNBQ0EsOERBQ0EsYUFEQSxHQUVBLE1BSEE7QUFLQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFSQSxDQVVBOzs7QUFDQSxrQ0FYQSxDQVlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FsQkEsTUFtQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0F4Q0EsQyxDQTBDQTs7QUNuTEE7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFDQSxzQkFEQSxFQUVBLElBRkEsRUFHQSw2QkFIQSxFQUlBLDZCQUpBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBLEcsQ0FFQTs7QUMxQ0E7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQ0EsTUFEQSxHQUVBLHNCQUZBO0FBSUE7QUFFQTtBQUNBLHVCQVhBLENBYUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsQkEsQ0FvQkE7OztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQURBO0FBRUEsZUFGQTtBQUdBLGdCQUhBO0FBSUEsdURBSkE7QUFLQTtBQUxBO0FBUUEsbUZBdkNBLENBeUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXBEQSxDQXNEQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0Esa0NBbEVBLENBb0VBOztBQUNBO0FBRUE7QUFDQSw4QkFDQSxrRUFEQSxHQUVBLDBDQUZBO0FBSUE7O0FBQ0E7QUFDQSw2Q0FDQSxnQkFEQSxFQUVBLElBRkEsRUFHQSw2QkFIQSxFQUlBLDZCQUpBLEVBS0EsYUFMQTtBQU9BOztBQUVBO0FBQ0EsOEJBQ0EsaUVBREEsR0FFQSx5Q0FGQTtBQUlBO0FBQ0EsS0E3RkEsQ0E4RkE7O0FBQ0E7O0FBRUE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQXRCQTs7QUF3QkE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUtBO0FBRUEsMENBQ0EsMEJBREEsRUFFQSxlQUZBLEVBR0EsVUFIQSxFQUlBLFVBSkEsRUFLQSxPQUxBLEVBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0NBQ0E7QUFBQTtBQUFBO0FBQUEsYUFEQSxFQUZBO0FBS0Esd0JBTEE7QUFNQTtBQU5BO0FBUUEsU0FwQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQ0FDQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxFQUZBO0FBS0EsOENBTEE7QUFNQTtBQU5BO0FBUUEsYUFUQSxNQVVBO0FBQ0E7QUFDQSxzQ0FDQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxFQURBO0FBSUEsdUJBSkE7QUFLQSxtQ0FMQTtBQU1BLCtDQU5BO0FBT0EsbUNBUEE7QUFRQSw2Q0FSQTtBQVNBO0FBVEE7QUFXQTtBQUNBLFdBL0JBO0FBZ0NBLFNBckNBOztBQXVDQTtBQUNBO0FBQ0E7QUFDQSxPQTFFQSxNQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWpHQSxDLENBbUdBOztBQ3JSQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsd0RBTEEsQ0FLQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUNBLDZCQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBLFNBREEsRUFLQSxtQkFMQSxDQURBO0FBU0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQSx5QkFDQSwwREFDQTtBQUNBLGVBREE7QUFFQTtBQUZBLE9BREEsR0FLQSxpQkFOQTtBQVFBLEtBVEE7QUFXQTtBQUNBLEdBcENBLEMsQ0FzQ0E7OztBQUNBO0FBQ0EsT0FDQSw4REFEQSxFQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUNBLFdBREEsRUFFQSx1REFGQTtBQUlBLEtBTkE7QUFPQSxHQVpBO0FBZUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUNBLE1BREEsR0FFQSxzQkFGQTtBQUlBO0FBQ0E7QUFFQSx5Q0FaQSxDQVlBOztBQUVBLHNCQUNBO0FBQ0EsYUFEQTtBQUVBO0FBRkEsS0FEQTtBQU9BO0FBQ0EsYUFEQTtBQUVBLDJCQUZBO0FBR0E7QUFIQTs7QUFNQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBRkE7QUFJQSxLQWhDQSxDQW1DQTs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsK0NBQ0Esb0JBREEsRUFFQSxJQUZBLEVBR0EsMENBSEEsRUFJQSxVQUpBLEVBS0EsYUFMQTtBQU9BO0FBQ0EsT0FWQSxNQVdBO0FBQ0E7QUFDQTtBQUNBLGlEQUNBLG9CQURBLEVBRUEsSUFGQSxFQUdBLDBDQUhBLEVBSUEsVUFKQSxFQUtBLGFBTEE7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQSxLQWpFQSxDQWtFQTs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBTkE7QUFRQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBcEJBO0FBc0JBOztBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBLE9BaEJBLE1BaUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBMUJBLE1BMkJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEdBcENBO0FBc0NBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSw0REFDQSxTQURBLENBRUE7QUFGQSxPQUdBLEdBSEEsSUFHQSx3Q0FIQSxJQUdBLDJCQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0EsMEJBcEJBLENBc0JBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BR0E7QUFDQTtBQUNBLGtDQUZBLENBR0E7QUFDQSxPQVZBLENBV0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTlEQTs7QUFnRUEsK0RBQ0EsMkNBREE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBWkEsQ0FjQTs7QUFDQSwwQkFmQSxDQWlCQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQ0E7QUFDQSwrQkFEQTtBQUVBLG1DQUNBLG9EQURBLENBRkE7QUFLQSxpQ0FMQTtBQU1BO0FBTkEsYUFEQSxHQVNBO0FBQ0EsaUNBREE7QUFFQSw2Q0FGQTtBQUdBLDJDQUhBO0FBSUEsK0JBSkE7QUFLQSxtQ0FDQSxvREFEQSxDQUxBO0FBUUEsaUNBUkE7QUFTQTtBQVRBLGFBVEE7QUFzQkE7O0FBRUE7QUFDQTtBQUNBLHNEQUNBLFdBREEsRUFFQSxZQUZBLEVBR0E7QUFDQTtBQURBLGlCQUhBO0FBT0EsZUFSQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQWZBLE1BZ0JBO0FBQ0EsdURBQ0EsV0FEQSxFQUVBLDhEQUZBLEVBR0E7QUFDQTtBQURBLGVBSEE7QUFPQTtBQUNBO0FBQ0EsU0FyRUEsTUFzRUE7QUFDQTtBQUNBLFNBRkEsTUFHQSw0Q0FDQSx1RkFEQSxHQUVBO0FBQ0Esb0NBREEsQ0FHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQ0E7QUFDQSxxQkFEQTtBQUVBLG1DQUZBO0FBR0E7QUFIQSxhQURBLEdBTUEsSUFOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBRkEsQ0FHQTs7QUFDQTtBQUNBLHVCQURBO0FBRUEscUNBRkE7QUFHQSxtQ0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUNBLDREQURBO0FBR0E7QUFDQSxXQUxBLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoRUEsTUFpRUE7QUFDQTtBQUNBO0FBRUEsZ0NBSkEsQ0FNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBaENBLENBa0NBOztBQUNBLDZDQUNBLDhCQURBLElBRUEseURBRkEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsdUNBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBSkE7QUFNQSxlQVRBLENBV0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaURBQ0E7QUFDQSxxQkFEQTtBQUVBLG1DQUZBO0FBR0E7QUFIQSxhQURBLEdBTUEsSUFOQSxDQTFEQSxDQWtFQTs7QUFDQSxpRkFDQSw2REFEQSxFQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsdUNBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBSkE7QUFRQSxlQWZBLENBaUJBOzs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBeEJBLENBMEJBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFGQSxNQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSEEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxlQUhBLE1BSUE7QUFDQTs7QUFFQTtBQUNBLG1FQURBLENBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSwyQ0FGQTtBQUdBLHlDQUhBO0FBSUE7QUFKQTtBQU1BLG1CQVpBLENBY0E7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBckJBLENBdUJBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsaUJBaENBLE1BaUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpREFyTkEsQ0FzTkE7QUFDQSxXQXZOQSxNQXdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQU5BLENBUUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHlDQUZBO0FBR0EsdUNBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQSxlQVZBLE1BV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxLQWhiQSxDQWtiQTs7O0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQSxrQkFGQTtBQUdBLDZCQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBLFVBREE7QUFIQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxLQWxjQSxDQW9jQTs7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FSQSxDQVVBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0EzZkEsQyxDQTZmQTs7QUNsMkJBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUNBLE1BREEsR0FFQSxzQkFGQTtBQUlBO0FBQ0EsdUJBVkEsQ0FZQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBLDZDQUNBLG1CQURBLEVBRUEsSUFGQSxFQUdBLFVBSEEsRUFJQSxVQUpBLEVBS0EsYUFMQTtBQU9BLE9BVEEsTUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQ0EsU0FEQSxFQUVBLEVBRkEsRUFHQSxRQUhBLEVBSUEsUUFKQSxFQUtBLGFBTEE7QUFPQTtBQUNBO0FBQ0EsU0FkQTtBQWVBOztBQUVBOztBQUNBO0FBQ0EsS0E3Q0EsQ0E4Q0E7O0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUNBO0FBQ0EsR0E5QkE7QUFpQ0E7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQSxLQUZBLE1BR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQ0EsTUFEQSxDQUNBLGdCQURBLEVBQ0EsS0FEQTtBQUVBO0FBQ0E7QUFDQSxHQTNDQSxDLENBNkNBOztBQzVLQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFDQSxNQURBLEdBRUEsc0JBRkE7QUFJQTtBQUNBO0FBQ0EsdUJBWEEsQ0FhQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0EsS0EzQkEsQ0E0QkE7O0FBQ0E7O0FBSUE7QUFFQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FuQkE7QUFxQkE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBSkEsQyxDQU1BOztBQ3hHQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BS0E7QUFDQTs7QUFDQSw0Q0FDQSw4QkFEQSxJQUVBLCtHQUZBLEVBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBO0FBSUEscUJBSkE7QUFLQTtBQUxBLFlBVEEsQ0FrQkE7O0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFJQTtBQUNBO0FBQ0EsMENBREE7QUFFQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxlQUZBO0FBTUEsdUJBTkE7QUFPQTtBQVBBO0FBU0E7QUFDQSxXQVhBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQ0EsZUFEQSxFQUVBLDBCQUZBLEVBRkEsQ0FPQTs7QUFDQTtBQUNBOztBQUNBLCtCQUNBLGtCQURBLElBRUEseUNBRkEsRUFHQTtBQUNBLHlEQUNBLGNBREEsRUFFQSx1QkFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUZBO0FBSUE7QUFDQTtBQUNBLFdBRkEsRUFqRUEsQ0FvRUE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFdBcEJBLEVBeEVBLENBOEZBO0FBQ0E7O0FBQ0EsNENBQ0EsNkJBREEsSUFFQSxpQkFGQSxFQUdBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDhDQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBLHNDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLG9DQUpBO0FBS0EsOEJBTEE7QUFNQSxvQ0FOQTtBQU9BO0FBUEE7QUFTQTtBQUNBO0FBQ0EsMENBWkEsQ0FZQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBLHNDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLG9DQUpBO0FBS0EsOEJBTEE7QUFNQSxvQ0FOQTtBQU9BO0FBUEE7QUFTQTtBQUNBLHFEQVhBLENBV0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBTkEsV0E1SUEsQ0FvSkE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQS9DQTs7QUFrREE7QUFDQTtBQUNBLEcsQ0FFQTs7QUNwU0E7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLEcsQ0FFQTs7Ozs7Ozs7Ozs7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TyxDQUFDckIsVUFBRCxDQUFaLEVBQTBCO0FBQ3RCaUIsV0FBTyxDQUFDSyxPQUFSLENBQWdCQyxVQUFhLENBQUN2QixVQUFELENBQTdCO0FBQ0g7O0FBRUQsTUFBSWtCLEtBQUosRUFBVztBQUNQRCxXQUFPLENBQUNLLE9BQVIsQ0FBZ0JKLEtBQWhCO0FBQ0g7O0FBRUQsTUFBSUUsTUFBSixFQUFZO0FBQ1JILFdBQU8sQ0FBQ0ssT0FBUixDQUFnQkgsSUFBaEI7QUFDSDs7QUFFRCxRQUFNSyxlQUFlLEdBQUc7QUFDcEJQLFdBQU8sRUFBRSxDQUNMLEdBQUdRLGdCQURFLEVBRUwsR0FBR1IsT0FGRSxDQURXO0FBS3BCUyxzQkFBa0IsRUFBRSxLQUxBO0FBTXBCQyx1QkFBbUIsRUFBRSxLQU5EO0FBT3BCdEUsUUFBSSxFQUFFO0FBUGMsR0FBeEI7QUFVQSxRQUFNO0FBQUNnQztBQUFELE1BQVF1QyxrREFBVSxDQUFDOUMsTUFBTSxDQUFDdUIsSUFBUCxFQUFELEVBQWdCbUIsZUFBaEIsQ0FBeEI7QUFFQSxRQUFNSyxRQUFRLEdBQUd6QyxTQUFTLENBQUNDLEdBQUQsRUFBTUMsT0FBTixDQUExQjtBQUNBLFFBQU13QyxLQUFLLEdBQUdDLGdDQUFhLENBQUNGLFFBQUQsQ0FBYixDQUF3QnRHLFFBQXhCLENBQWlDLENBQWpDLENBQWQ7QUFFQSxTQUFPO0FBQ0g4RCxPQURHO0FBRUh5QyxTQUZHO0FBR0hELFlBSEc7QUFJSHhFLFFBQUksRUFBRW1FLGVBQWUsQ0FBQ25FO0FBSm5CLEdBQVA7QUFNSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS10ZW1wbGF0ZS1jb21waWxlclwiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIFNhbiDkuLvmlofku7ZcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAvLyDkurrlt6XosIPmlbTmiZPljIXku6PnoIHpobrluo/vvIzpgJrov4fms6jph4rmiYvlt6XlhpnkuIDkupvkvp3otZZcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZ3VpZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9lbXB0eScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9leHRlbmQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvaW5oZXJpdHMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZWFjaCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9jb250YWlucycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9iaW5kJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL29uJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3VuJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3N2Zy10YWdzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2NyZWF0ZS1lbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvbmV4dC10aWNrJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2llJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2llLW9sZC10aGFuLTknKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaW5wdXQtZXZlbnQtY29tcGF0aWJsZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZGF0YS10eXBlcy5qcycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUtZGF0YS10eXBlcy1jaGVja2VyLmpzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvd2Fsa2VyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2RlZmF1bHQtZmlsdGVycycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9saWZlLWN5Y2xlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L25vZGUtdHlwZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvZ2V0LWV2ZW50LWxpc3RlbmVyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2NyZWF0ZS1ub2RlJyk7XG5cblxuICAgIC8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5ZSv5LiAaWRcbiAqL1xuXG5cbi8qKlxuICog6I635Y+W5ZSv5LiAaWRcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfSDllK/kuIBpZFxuICovXG52YXIgZ3VpZCA9IDE7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGd1aWQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDnqbrlh73mlbBcbiAqL1xuXG5cbi8qKlxuICog5ZWl6YO95LiN5bmyXG4gKi9cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZW1wdHk7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlsZ7mgKfmi7fotJ1cbiAqL1xuXG4vKipcbiAqIOWvueixoeWxnuaAp+aLt+i0nVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOa6kOWvueixoVxuICogQHJldHVybiB7T2JqZWN0fSDov5Tlm57nm67moIflr7nosaFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICovXG5cbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG4vKipcbiAqIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YkNsYXNzIOWtkOexu+WHveaVsFxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJDbGFzcyDniLbnsbvlh73mlbBcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICB2YXIgc3ViQ2xhc3NQcm90byA9IHN1YkNsYXNzLnByb3RvdHlwZTtcbiAgICB2YXIgRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIEYucHJvdG90eXBlID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBleHRlbmQoc3ViQ2xhc3MucHJvdG90eXBlLCBzdWJDbGFzc1Byb3RvKTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDpgY3ljobmlbDnu4RcbiAqL1xuXG5cbi8qKlxuICog6YGN5Y6G5pWw57uE6ZuG5ZCIXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkg5pWw57uE5rqQXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKEFueSxudW1iZXIpOmJvb2xlYW59IGl0ZXJhdG9yIOmBjeWOhuWHveaVsFxuICovXG5mdW5jdGlvbiBlYWNoKGFycmF5LCBpdGVyYXRvcikge1xuICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IoYXJyYXlbaV0sIGkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlYWNoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yik5pat5pWw57uE5Lit5piv5ZCm5YyF5ZCr5p+Q6aG5XG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuL2VhY2gnKTtcblxuLyoqXG4gKiDliKTmlq3mlbDnu4TkuK3mmK/lkKbljIXlkKvmn5DpoblcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSDmlbDnu4RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5YyF5ZCr55qE6aG5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnJheSwgdmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmVzdWx0ID0gaXRlbSA9PT0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29udGFpbnM7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBiaW5k5Ye95pWwXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOimgWJpbmTnmoTlh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqIEBwYXJhbSB7Li4uKn0gYXJncyDpooTorr7nmoTliJ3lp4vlj4LmlbBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIHRoaXNBcmcpIHtcbiAgICB2YXIgbmF0aXZlQmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkge1xuICAgIC8vICNbZW5kXVxuICAgICAgICByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gICAgLy8gI1tlbmRdXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGJpbmQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBET00g5LqL5Lu25oyC6L29XG4gKi9cblxuLyoqXG4gKiBET00g5LqL5Lu25oyC6L29XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrVcbiAqL1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAvLyAjW2VuZF1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gb247XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBET00g5LqL5Lu25Y246L29XG4gKi9cblxuLyoqXG4gKiBET00g5LqL5Lu25Y246L29XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrVcbiAqL1xuZnVuY3Rpb24gdW4oZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAvLyAjW2VuZF1cbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdW47XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlsIblrZfnrKbkuLLpgJflj7fliIfliIbov5Tlm57lr7nosaFcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vKipcbiAqIOWwhuWtl+espuS4sumAl+WPt+WIh+WIhui/lOWbnuWvueixoVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHNwbGl0U3RyMk9iaihzb3VyY2UpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZWFjaChcbiAgICAgICAgc291cmNlLnNwbGl0KCcsJyksXG4gICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0ga2V5O1xuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzcGxpdFN0cjJPYmo7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBTVkfmoIfnrb7ooahcbiAqL1xuXG4vLyB2YXIgc3BsaXRTdHIyT2JqID0gcmVxdWlyZSgnLi4vdXRpbC9zcGxpdC1zdHItMi1vYmonKTtcblxuLyoqXG4gKiBzdmdUYWdzXG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL3N2Z2R0ZC5odG1sIOWPquWPluW4uOeUqFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN2Z1RhZ3MgPSBzcGxpdFN0cjJPYmooJydcbiAgICAvLyBzdHJ1Y3R1cmVcbiAgICArICdzdmcsZyxkZWZzLGRlc2MsbWV0YWRhdGEsc3ltYm9sLHVzZSwnXG4gICAgLy8gaW1hZ2UgJiBzaGFwZVxuICAgICsgJ2ltYWdlLHBhdGgscmVjdCxjaXJjbGUsbGluZSxlbGxpcHNlLHBvbHlsaW5lLHBvbHlnb24sJ1xuICAgIC8vIHRleHRcbiAgICArICd0ZXh0LHRzcGFuLHRyZWYsdGV4dHBhdGgsJ1xuICAgIC8vIG90aGVyXG4gICAgKyAnbWFya2VyLHBhdHRlcm4sY2xpcHBhdGgsbWFzayxmaWx0ZXIsY3Vyc29yLHZpZXcsYW5pbWF0ZSwnXG4gICAgLy8gZm9udFxuICAgICsgJ2ZvbnQsZm9udC1mYWNlLGdseXBoLG1pc3NpbmctZ2x5cGgsJ1xuICAgIC8vIGNhbWVsXG4gICAgKyAnYW5pbWF0ZUNvbG9yLGFuaW1hdGVNb3Rpb24sYW5pbWF0ZVRyYW5zZm9ybSx0ZXh0UGF0aCxmb3JlaWduT2JqZWN0J1xuKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3ZnVGFncztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIERPTeWIm+W7ulxuICovXG5cbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi9zdmctdGFncycpO1xuXG4vKipcbiAqIOWIm+W7uiBET00g5YWD57SgXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWdOYW1lIHRhZ05hbWVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lKSB7XG4gICAgaWYgKHN2Z1RhZ3NbdGFnTmFtZV0gJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg56e76ZmkRE9NXG4gKi9cblxuLyoqXG4gKiDlsIYgRE9NIOS7jumhtemdouS4reenu+mZpFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICovXG5mdW5jdGlvbiByZW1vdmVFbChlbCkge1xuICAgIGlmIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVtb3ZlRWw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlnKjkuIvkuIDkuKrml7bpl7TlkajmnJ/ov5DooYzku7vliqFcbiAqL1xuXG4vLyDor6Xmlrnms5Xlj4LnhafkuoZ2dWUyLjUuMOeahOWunueOsO+8jOaEn+iwonZ1ZeWboumYn1xuLy8gU0VFOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2Jsb2IvMDk0OGQ5OTlmMmZkZGY5ZjkwOTkxOTU2NDkzZjk3NjI3M2M1ZGExZi9zcmMvY29yZS91dGlsL2Vudi5qcyNMNjhcblxuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpO1xuXG4vKipcbiAqIOS4i+S4gOS4quWRqOacn+imgeaJp+ihjOeahOS7u+WKoeWIl+ihqFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgbmV4dFRhc2tzID0gW107XG5cbi8qKlxuICog5omn6KGM5LiL5LiA5Liq5ZGo5pyf5Lu75Yqh55qE5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbnZhciBuZXh0SGFuZGxlcjtcblxuLyoqXG4gKiDmtY/op4jlmajmmK/lkKbmlK/mjIHljp/nlJ9Qcm9taXNlXG4gKiDlr7lQcm9taXNl5YGa5Yik5pat77yM5piv5Li65LqG56aB55So5LiA5Lqb5LiN5Lil6LCo55qEUHJvbWlzZeeahHBvbHlmaWxsXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzTmF0aXZlUHJvbWlzZSA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlKTtcblxuLyoqXG4gKiDlnKjkuIvkuIDkuKrml7bpl7TlkajmnJ/ov5DooYzku7vliqFcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOS7u+WKoeWHveaVsFxuICogQHBhcmFtIHtPYmplY3Q9fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqL1xuZnVuY3Rpb24gbmV4dFRpY2soZm4sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZykge1xuICAgICAgICBmbiA9IGJpbmQoZm4sIHRoaXNBcmcpO1xuICAgIH1cbiAgICBuZXh0VGFza3MucHVzaChmbik7XG5cbiAgICBpZiAobmV4dEhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFza3MgPSBuZXh0VGFza3Muc2xpY2UoMCk7XG4gICAgICAgIG5leHRUYXNrcyA9IFtdO1xuICAgICAgICBuZXh0SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YXNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g6Z2e5qCH5YeG5pa55rOV77yM5L2G5piv5q2k5pa55rOV6Z2e5bi45ZC75ZCI6KaB5rGC44CCXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzZXRJbW1lZGlhdGUobmV4dEhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyDnlKhNZXNzYWdlQ2hhbm5lbOWOu+WBmnNldEltbWVkaWF0ZeeahHBvbHlmaWxsXG4gICAgLy8g5Y6f55CG5piv5bCG5paw55qEbWVzc2FnZeS6i+S7tuWKoOWFpeWIsOWOn+acieeahGRvbSBldmVudHPkuYvlkI5cbiAgICBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRIYW5kbGVyO1xuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKDEpO1xuICAgIH1cbiAgICAvLyBmb3IgbmF0aXZlIGFwcFxuICAgIGVsc2UgaWYgKGlzTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHRIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQobmV4dEhhbmRsZXIsIDApO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbmV4dFRpY2s7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBpZeeJiOacrOWPt1xuICovXG5cbi8vICNbYmVnaW5dIGFsbHVhXG4vKipcbiAqIOS7jnVzZXJBZ2VudOS4rWll54mI5pys5Y+355qE5Yy56YWN5L+h5oGvXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgaWVWZXJzaW9uTWF0Y2ggPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21zaWVcXHMqKFswLTldKykvaSk7XG5cbi8qKlxuICogaWXniYjmnKzlj7fvvIzpnZ5pZeaXtuS4ujBcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG52YXIgaWUgPSBpZVZlcnNpb25NYXRjaCA/IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGllVmVyc2lvbk1hdGNoWzFdIC0gMCA6IDA7XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaWU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDmmK/lkKYgSUUg5bm25LiU5bCP5LqOIDlcbiAqL1xuXG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuL2llJyk7XG5cbi8vIEhBQ0s6XG4vLyAxLiBJRTjkuIvvvIzorr7nva5pbm5lckhUTUzml7blpoLmnpzku6VodG1sIGNvbW1lbnTlvIDlpLTvvIxjb21tZW505Lya6KKr6Ieq5Yqo5ruk5o6JXG4vLyAgICDkuLrkuobkv53or4FzdHVtcOWtmOWcqO+8jOmcgOimgeiuvue9ruWujGh0bWzlkI7vvIxjcmVhdGVDb21tZW505bm2YXBwZW5kQ2hpbGQvaW5zZXJ0QmVmb3JlXG4vLyAyLiBJRTjkuIvvvIxpbm5lckhUTUzov5jkuI3mlK/mjIFjdXN0b20gZWxlbWVudO+8jOaJgOS7pemcgOimgeeUqGRpduabv+S7o++8jOS4jeeUqGNyZWF0ZUVsZW1lbnRcbi8vIDMuIOiZveeEtklFOOW3sue7j+S8mOWMluS6huWtl+espuS4sivov57mjqXvvIznoo7niYfljJbov57mjqXmgKfog73kuI3lho3pgIDljJZcbi8vICAgIOS9huaYr+eUseS6juS4iumdouWkmuS4quWFvOWuueWcuuaZr+mDveeUqCA8IDkg5Yik5pat77yM5omA5Lul5a2X56ym5Liy6L+e5o6l5Lmf5rK/55SoXG4vLyAgICDmiYDku6Xnu5PmnpzmmK9JRTjkuIvlrZfnrKbkuLLov57mjqXnlKjnmoTmmK/mlbDnu4Rqb2lu55qE5pa55byPXG5cbi8vICNbYmVnaW5dIGFsbHVhXG4vKipcbiAqIOaYr+WQpiBJRSDlubbkuJTlsI/kuo4gOVxuICovXG52YXIgaWVPbGRUaGFuOSA9IGllICYmIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGllIDwgOTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpZU9sZFRoYW45O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kem5Y+R5YWD57Sg5LqL5Lu2XG4gKi9cblxuLyoqXG4gKiDop6blj5HlhYPntKDkuovku7ZcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihlbCwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpZ2dlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+WGsyBJRTkg5Zyo6KGo5Y2V5YWD57Sg5Lit5Yig6Zmk5a2X56ym5pe25LiN6Kem5Y+R5LqL5Lu255qE6Zeu6aKYXG4gKi9cblxuLy8gdmFyIGllID0gcmVxdWlyZSgnLi9pZScpO1xuLy8gdmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xuLy8gdmFyIHRyaWdnZXIgPSByZXF1aXJlKCcuL3RyaWdnZXInKTtcblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKGllID09PSA5KSB7XG4gICAgb24oZG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IGVsLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyAjW2VuZF1cblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiHqumXreWQiOagh+etvuihqFxuICovXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIOiHqumXreWQiOagh+etvuWIl+ihqFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBhdXRvQ2xvc2VUYWdzID0gc3BsaXRTdHIyT2JqKCdhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdicicpO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBhdXRvQ2xvc2VUYWdzO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgZGF0YSB0eXBlc1xuICovXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi9iaW5kJyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuL2VtcHR5Jyk7XG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi9leHRlbmQnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbnZhciBBTk9OWU1PVVNfQ0xBU1NfTkFNRSA9ICc8PGFub255bW91cz4+JztcblxuLyoqXG4gKiDojrflj5bnsr7noa7nmoTnsbvlnotcbiAqXG4gKiBATk9URSDlpoLmnpwgb2JqIOaYr+S4gOS4qiBET01FbGVtZW5077yM5oiR5Lus5Lya6L+U5ZueIGBlbGVtZW50YO+8m1xuICpcbiAqIEBwYXJhbSAgeyp9IG9iaiDnm67moIdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YVR5cGUob2JqKSB7XG4gICAgLy8g5LiN5pSv5oyBZWxlbWVudOS6huOAgmRhdGHlupTor6XmmK/nuq/mlbDmja5cbiAgICAvLyBpZiAob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSkge1xuICAgIC8vICAgICByZXR1cm4gJ2VsZW1lbnQnO1xuICAgIC8vIH1cblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgICAgIC5jYWxsKG9iailcbiAgICAgICAgLnNsaWNlKDgsIC0xKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cbi8vICNbZW5kXVxuXG4vKipcbiAqIOWIm+W7uumTvuW8j+eahOaVsOaNruexu+Wei+agoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB2YWxpZGF0ZSDnnJ/mraPnmoTmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB2YXIgY2hhaW5lZENoZWNrZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjaGFpbmVkQ2hlY2tlci5pc1JlcXVpcmVkID0gZW1wdHk7XG5cbiAgICAvLyDlj6rlnKggZXJyb3Ig5Yqf6IO95ZCv55So5pe25omN5pyJ5a6e6ZmF5LiK55qEIGRhdGFUeXBlcyDmo4DmtYtcbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhbGlkYXRlID0gdmFsaWRhdGUgfHwgZW1wdHk7XG4gICAgdmFyIGNoZWNrVHlwZSA9IGZ1bmN0aW9uIChpc1JlcXVpcmVkLCBkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIC8vIOWmguaenOaYryBudWxsIOaIliB1bmRlZmluZWTvvIzpgqPkuYjopoHmj5DliY3ov5Tlm57llaZcbiAgICAgICAgaWYgKGRhdGFWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyDmmK8gcmVxdWlyZWQg5bCx5oql6ZSZXG4gICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICArICdUaGUgYCcgKyBkYXRhTmFtZSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgKyAnaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIGAnICsgY29tcG9uZW50TmFtZSArICdgLCAnXG4gICAgICAgICAgICAgICAgICAgICsgJ2J1dCBpdHMgdmFsdWUgaXMgJyArIGRhdGFUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS4jeaYryByZXF1aXJlZO+8jOmCo+WwseaYryBvayDnmoRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpO1xuXG4gICAgfTtcblxuICAgIGNoYWluZWRDaGVja2VyID0gYmluZChjaGVja1R5cGUsIG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tlci5pc1JlcXVpcmVkID0gYmluZChjaGVja1R5cGUsIG51bGwsIHRydWUpO1xuICAgIC8vICNbZW5kXVxuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja2VyO1xuXG59XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOeUn+aIkOS4u+imgeexu+Wei+aVsOaNruagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZSDkuLvnsbvlnotcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIodHlwZSkge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCAnICsgdHlwZSArICcpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuXG5cbi8qKlxuICog55Sf5oiQIGFycmF5T2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGFycmF5SXRlbUNoZWNrZXIg5pWw57uE5Lit5q+P6aG55pWw5o2u55qE5qCh6aqM5ZmoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlPZkNoZWNrZXIoYXJyYXlJdGVtQ2hlY2tlcikge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGFycmF5SXRlbUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYGFycmF5T2ZgLCBleHBlY3RlZCBgZnVuY3Rpb25gJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIGFycmF5KSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YVZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheUl0ZW1DaGVja2VyKGRhdGFWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lICsgJ1snICsgaSArICddJyk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIGluc3RhbmNlT2Yg5qOA5rWL5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb258Q2xhc3N9IGV4cGVjdGVkQ2xhc3Mg5pyf5b6F55qE57G7XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VPZkNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG5cbiAgICAgICAgaWYgKGRhdGFWYWx1ZSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWVDbGFzc05hbWUgPSBkYXRhVmFsdWUuY29uc3RydWN0b3IgJiYgZGF0YVZhbHVlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgID8gZGF0YVZhbHVlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICArICcoJyArIGRhdGFWYWx1ZUNsYXNzTmFtZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICArICdleHBlY3RlZCBpbnN0YW5jZSBvZiAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnKSdcbiAgICAgICAgKTtcblxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgc2hhcGUg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzaGFwZVR5cGVzIHNoYXBlIOagoemqjOinhOWImVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShzaGFwZVR5cGVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBzaGFwZWAsIGV4cGVjdGVkIGBvYmplY3RgJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBvYmplY3QpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHNoYXBlS2V5TmFtZSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChzaGFwZVR5cGVzLmhhc093blByb3BlcnR5KHNoYXBlS2V5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNbc2hhcGVLZXlOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlcihkYXRhVmFsdWUsIHNoYXBlS2V5TmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lICsgJy4nICsgc2hhcGVLZXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9uZU9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBleHBlY3RlZEVudW1WYWx1ZXMg5pyf5b6F55qE5p6a5Li+5YC8XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT25lT2ZDaGVja2VyKGV4cGVjdGVkRW51bVZhbHVlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoZXhwZWN0ZWRFbnVtVmFsdWVzKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYG9uZU9mYCwgYXJyYXkgaXMgZXhwZWN0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRFbnVtVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlID09PSBleHBlY3RlZEVudW1WYWx1ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB2YWx1ZSdcbiAgICAgICAgICAgICsgJyhgJyArIGRhdGFWYWx1ZSArICdgIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgKyAnZXhwZWN0ZWQgb25lIG9mICcgKyBleHBlY3RlZEVudW1WYWx1ZXMuam9pbignLCcpICsgJyknXG4gICAgICAgICk7XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBvbmVPZlR5cGUg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7QXJyYXk8RnVuY3Rpb24+fSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMg5pyf5b6F55qE5p6a5Li+57G75Z6LXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT25lT2ZUeXBlQ2hlY2tlcihleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcykgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYG9uZU9mYCwgYXJyYXkgaXMgZXhwZWN0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBjaGVja2VyID0gZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjaGVja2VyKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenCBjaGVja2VyIOWujOaIkOagoemqjOayoeaKpemUme+8jOmCo+Wwsei/lOWbnuS6hlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6ZSZ6K+v77yM6YKj5LmI5bqU6K+l5oqK6ZSZ6K+v5ZCe5o6JXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaJgOacieeahOWPr+aOpeWPlyB0eXBlIOmDveWksei0peS6hu+8jOaJjeS4ouS4gOS4quW8guW4uFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIHZhbHVlJ1xuICAgICAgICAgICAgKyAnKGAnICsgZGF0YVZhbHVlICsgJ2Agc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnKSdcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9iamVjdE9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB0eXBlQ2hlY2tlciDlr7nosaHlsZ7mgKflgLzmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RPZkNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb2JqZWN0T2ZgLCBleHBlY3RlZCBmdW5jdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBvYmplY3QpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGRhdGFLZXlOYW1lIGluIGRhdGFWYWx1ZSkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlLmhhc093blByb3BlcnR5KGRhdGFLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdWxsRGF0YU5hbWUgKyAnLicgKyBkYXRhS2V5TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgZXhhY3Qg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzaGFwZVR5cGVzIG9iamVjdCDlvaLmgIHlrprkuYlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVFeGFjdENoZWNrZXIoc2hhcGVUeXBlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUsIHNlY3JldCkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShzaGFwZVR5cGVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYGV4YWN0YCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVmFsdWVUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVZhbHVlVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUgYCcgKyBkYXRhVmFsdWVUeXBlICsgJ2AnXG4gICAgICAgICAgICAgICAgKyAnKHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgZXhwZWN0ZWQgYG9iamVjdGApJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbGxLZXlzID0ge307XG5cbiAgICAgICAgLy8g5YWI5ZCI5YWlIHNoYXBlVHlwZXNcbiAgICAgICAgZXh0ZW5kKGFsbEtleXMsIHNoYXBlVHlwZXMpO1xuICAgICAgICAvLyDlho3lkIjlhaUgZGF0YVZhbHVlXG4gICAgICAgIGV4dGVuZChhbGxLZXlzLCBkYXRhVmFsdWUpO1xuICAgICAgICAvLyDkv53or4EgYWxsS2V5cyDnmoTnsbvlnovmraPnoa5cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgICBpZiAoYWxsS2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhVmFsdWUg5Lit5pyJ5LiA5Liq5aSa5L2Z55qE5pWw5o2u6aG5XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJyhgJyArIGtleSArICdgIGlzIG5vdCBkZWZpbmVkIGluIGBEYXRhVHlwZXMuZXhhY3RgKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gZGF0YVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIGtleSBgJyArIGtleSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICcoYCcgKyBrZXkgKyAnYCBpcyBtYXJrZWQgYHJlcXVpcmVkYCBpbiBgRGF0YVR5cGVzLmV4YWN0YCknXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2hlY2tlcihcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxEYXRhTmFtZSArICcuJyArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuLy8gI1tlbmRdXG5cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xudmFyIERhdGFUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuICAgIG9iamVjdDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuICAgIGZ1bmM6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcbiAgICBzdHJpbmc6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcbiAgICBudW1iZXI6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcbiAgICBib29sOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKCksXG4gICAgc3ltYm9sOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKCksXG4gICAgYW55OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXJcbn07XG5cbi8vICNbYmVnaW5dIGVycm9yXG5EYXRhVHlwZXMgPSB7XG5cbiAgICBhbnk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcblxuICAgIC8vIOexu+Wei+ajgOa1i1xuICAgIGFycmF5OiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIC8vIOWkjeWQiOexu+Wei+ajgOa1i1xuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZDaGVja2VyLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlT2ZDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZU9uZU9mQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZU9uZU9mVHlwZUNoZWNrZXIsXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlRXhhY3RDaGVja2VyXG5cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG4vLyAjW2VuZF1cblxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IERhdGFUeXBlcztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIm+W7uuaVsOaNruajgOa1i+WHveaVsFxuICovXG5cblxuLy8gI1tiZWdpbl0gZXJyb3JcblxuLyoqXG4gKiDliJvlu7rmlbDmja7mo4DmtYvlh73mlbBcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFUeXBlcyAgICAg5pWw5o2u5qC85byPXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUg57uE5Lu25ZCNXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcihkYXRhVHlwZXMsIGNvbXBvbmVudE5hbWUpIHtcblxuICAgIC8qKlxuICAgICAqIOagoemqjCBkYXRhIOaYr+WQpua7oei2syBkYXRhIHR5cGVzIOeahOagvOW8j1xuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gZGF0YSDmlbDmja5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICBmb3IgKHZhciBkYXRhVHlwZU5hbWUgaW4gZGF0YVR5cGVzKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChkYXRhVHlwZXMuaGFzT3duUHJvcGVydHkoZGF0YVR5cGVOYW1lKSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlQ2hlY2tlciA9IGRhdGFUeXBlc1tkYXRhVHlwZU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBvbmVudE5hbWUgKyAnOicgKyBkYXRhVHlwZU5hbWUgKyAnIGlzIGludmFsaWQ7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHNhbi5EYXRhVHlwZXMnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG59XG5cbi8vICNbZW5kXVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURhdGFUeXBlc0NoZWNrZXI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbtcbiAqL1xuXG5cbi8qKlxuICog5a2X56ym5Liy5rqQ56CB6K+75Y+W57G777yM55So5LqO5qih5p2/5a2X56ym5Liy6Kej5p6Q6L+H56iLXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOimgeivu+WPlueahOWtl+espuS4slxuICovXG5mdW5jdGlvbiBXYWxrZXIoc291cmNlKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7XG4gICAgdGhpcy5pbmRleCA9IDA7XG59XG5cbi8qKlxuICog6I635Y+W5b2T5YmN5a2X56ym56CBXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmN1cnJlbnRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQ29kZUF0KHRoaXMuaW5kZXgpO1xufTtcblxuLyoqXG4gKiDmiKrlj5blrZfnrKbkuLLniYfmrrVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQg6LW35aeL5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIOe7k+adn+S9jee9rlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmN1dCA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxuLyoqXG4gKiDlkJHliY3or7vlj5blrZfnrKZcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2Ug6K+75Y+W5a2X56ym5pWwXG4gKi9cbldhbGtlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiAoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmluZGV4ICs9IGRpc3RhbmNlO1xufTtcblxuLyoqXG4gKiDor7vlj5bkuIvkuIDkuKrlrZfnrKbvvIzov5Tlm57kuIvkuIDkuKrlrZfnrKbnmoQgY29kZVxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5uZXh0Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvKDEpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb2RlKCk7XG59O1xuXG4vKipcbiAqIOiOt+WPluebuOW6lOS9jee9ruWtl+espueahCBjb2RlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOWtl+espuS9jee9rlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmNoYXJDb2RlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJDb2RlQXQoaW5kZXgpO1xufTtcblxuLyoqXG4gKiDlkJHliY3or7vlj5blrZfnrKbvvIznm7TliLDpgYfliLDmjIflrprlrZfnrKblho3lgZzmraJcbiAqIOacquaMh+WumuWtl+espuaXtu+8jOW9k+mBh+WIsOesrOS4gOS4qumdnuepuuagvOOAgeWItuihqOespueahOWtl+espuWBnOatolxuICpcbiAqIEBwYXJhbSB7bnVtYmVyPX0gY2hhckNvZGUg5oyH5a6a5a2X56ym55qEY29kZVxuICogQHJldHVybiB7Ym9vbGVhbn0g5b2T5oyH5a6a5a2X56ym5pe277yM6L+U5Zue5piv5ZCm56Kw5Yiw5oyH5a6a55qE5a2X56ymXG4gKi9cbldhbGtlci5wcm90b3R5cGUuZ29VbnRpbCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgIHZhciBjb2RlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy5sZW4gJiYgKGNvZGUgPSB0aGlzLmN1cnJlbnRDb2RlKCkpKSB7XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjogLy8g56m65qC8IHNwYWNlXG4gICAgICAgICAgICBjYXNlIDk6IC8vIOWItuihqOespiB0YWJcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vIFxcclxuICAgICAgICAgICAgY2FzZSAxMDogLy8gXFxuXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluespuWQiOinhOWImeeahOWtl+espueJh+aute+8jOW5tui/lOWbnuinhOWImeWMuemFjee7k+aenFxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZWcg5a2X56ym54mH5q6155qE5q2j5YiZ6KGo6L6+5byPXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzTWF0Y2hTdGFydCDmmK/lkKblv4XpobvljLnphY3lvZPliY3kvY3nva5cbiAqIEByZXR1cm4ge0FycmF5P31cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChyZWcsIGlzTWF0Y2hTdGFydCkge1xuICAgIHJlZy5sYXN0SW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgdmFyIG1hdGNoID0gcmVnLmV4ZWModGhpcy5zb3VyY2UpO1xuICAgIGlmIChtYXRjaCAmJiAoIWlzTWF0Y2hTdGFydCB8fCB0aGlzLmluZGV4ID09PSBtYXRjaC5pbmRleCkpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBXYWxrZXI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDmiooga2ViYWIgY2FzZSDlrZfnrKbkuLLovazmjaLmiJAgY2FtZWwgY2FzZVxuICovXG5cbi8qKlxuICog5oqKIGtlYmFiIGNhc2Ug5a2X56ym5Liy6L2s5o2i5oiQIGNhbWVsIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBrZWJhYjJjYW1lbChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoLy0rKC4pL2lnLCBmdW5jdGlvbiAobWF0Y2gsIGFscGhhKSB7XG4gICAgICAgIHJldHVybiBhbHBoYS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBrZWJhYjJjYW1lbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIGJvb2zlsZ7mgKfooahcbiAqL1xuXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIGJvb2zlsZ7mgKfooahcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgYm9vbEF0dHJzID0gc3BsaXRTdHIyT2JqKFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0LGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSwnXG4gICAgKyAnY2hlY2tlZCxjb250cm9scyxkZWZhdWx0LGRlZmVyLGRpc2FibGVkLGZvcm1ub3ZhbGlkYXRlLCdcbiAgICArICdoaWRkZW4saXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9tb2R1bGUsbm92YWxpZGF0ZSwnXG4gICAgKyAnb3BlbixyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzZWxlY3RlZCx0eXBlbXVzdG1hdGNoJ1xuKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYm9vbEF0dHJzO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6KGo6L6+5byP57G75Z6LXG4gKi9cblxuLyoqXG4gKiDooajovr7lvI/nsbvlnotcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBFeHByVHlwZSA9IHtcbiAgICBTVFJJTkc6IDEsXG4gICAgTlVNQkVSOiAyLFxuICAgIEJPT0w6IDMsXG4gICAgQUNDRVNTT1I6IDQsXG4gICAgSU5URVJQOiA1LFxuICAgIENBTEw6IDYsXG4gICAgVEVYVDogNyxcbiAgICBCSU5BUlk6IDgsXG4gICAgVU5BUlk6IDksXG4gICAgVEVSVElBUlk6IDEwLFxuICAgIE9CSkVDVDogMTEsXG4gICAgQVJSQVk6IDEyLFxuICAgIE5VTEw6IDEzXG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBFeHByVHlwZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIm+W7uuiuv+mXruihqOi+vuW8j+WvueixoVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG5cbi8qKlxuICog5Yib5bu66K6/6Zeu6KGo6L6+5byP5a+56LGhXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGF0aHMg6K6/6Zeu6Lev5b6EXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yKHBhdGhzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgcGF0aHM6IHBhdGhzXG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlQWNjZXNzb3I7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5blrZfnrKbkuLJcbiAqL1xuXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG5cbi8qKlxuICog6K+75Y+W5a2X56ym5LiyXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFN0cmluZyh3YWxrZXIpIHtcbiAgICB2YXIgc3RhcnRDb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB3YWxrZXIuaW5kZXg7XG4gICAgdmFyIGNoYXJDb2RlO1xuXG4gICAgd2Fsa0xvb3A6IHdoaWxlICgoY2hhckNvZGUgPSB3YWxrZXIubmV4dENvZGUoKSkpIHtcbiAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgY2FzZSA5MjogLy8gXFxcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHN0YXJ0Q29kZTpcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWsgd2Fsa0xvb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGl0ZXJhbCA9IHdhbGtlci5jdXQoc3RhcnRJbmRleCwgd2Fsa2VyLmluZGV4KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAxLFxuICAgICAgICAvLyDlpITnkIblrZfnrKbovazkuYlcbiAgICAgICAgdmFsdWU6IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgbGl0ZXJhbCkpKClcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkU3RyaW5nO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5LiA5YWD6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkU3RyaW5nID0gcmVxdWlyZSgnLi9yZWFkLXN0cmluZycpO1xuLy8gdmFyIHJlYWROdW1iZXIgPSByZXF1aXJlKCcuL3JlYWQtbnVtYmVyJyk7XG4vLyB2YXIgcmVhZENhbGwgPSByZXF1aXJlKCcuL3JlYWQtY2FsbCcpO1xuLy8gdmFyIHJlYWRQYXJlbnRoZXNpemVkRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1wYXJlbnRoZXNpemVkLWV4cHInKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuXG4vKipcbiAqIOivu+WPluS4gOWFg+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRVbmFyeUV4cHIod2Fsa2VyKSB7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHN3aXRjaCAod2Fsa2VyLmN1cnJlbnRDb2RlKCkpIHtcbiAgICAgICAgY2FzZSAzMzogLy8gIVxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiA5LFxuICAgICAgICAgICAgICAgIGV4cHI6IHJlYWRVbmFyeUV4cHIod2Fsa2VyKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogMzNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcod2Fsa2VyKTtcblxuICAgICAgICBjYXNlIDQ1OiAvLyAtXG4gICAgICAgIGNhc2UgNDg6IC8vIG51bWJlclxuICAgICAgICBjYXNlIDQ5OlxuICAgICAgICBjYXNlIDUwOlxuICAgICAgICBjYXNlIDUxOlxuICAgICAgICBjYXNlIDUyOlxuICAgICAgICBjYXNlIDUzOlxuICAgICAgICBjYXNlIDU0OlxuICAgICAgICBjYXNlIDU1OlxuICAgICAgICBjYXNlIDU2OlxuICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgcmV0dXJuIHJlYWROdW1iZXIod2Fsa2VyKTtcblxuICAgICAgICBjYXNlIDQwOiAvLyAoXG4gICAgICAgICAgICByZXR1cm4gcmVhZFBhcmVudGhlc2l6ZWRFeHByKHdhbGtlcik7XG5cbiAgICAgICAgLy8gYXJyYXkgbGl0ZXJhbFxuICAgICAgICBjYXNlIDkxOiAvLyBbXG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICB2YXIgYXJySXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlICghd2Fsa2VyLmdvVW50aWwoOTMpKSB7IC8vIF1cbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xuICAgICAgICAgICAgICAgIGFyckl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDQ2ICYmIHdhbGtlci5tYXRjaCgvXFwuXFwuXFwuXFxzKi9nKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5leHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDQ0KTsgLy8gLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhcnJJdGVtc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBvYmplY3QgbGl0ZXJhbFxuICAgICAgICBjYXNlIDEyMzogLy8ge1xuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgdmFyIG9iakl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlICghd2Fsa2VyLmdvVW50aWwoMTI1KSkgeyAvLyB9XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBvYmpJdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA0NiAmJiB3YWxrZXIubWF0Y2goL1xcLlxcLlxcLlxccyovZykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcHJlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmV4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2Fsa2VySW5kZXhCZWZvcmVOYW1lID0gd2Fsa2VyLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSByZWFkVW5hcnlFeHByKHdhbGtlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZS50eXBlID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdbU0FOIEZBVEFMXSB1bmV4cGVjdCBvYmplY3QgbmFtZTogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgd2Fsa2VyLmN1dCh3YWxrZXJJbmRleEJlZm9yZU5hbWUsIHdhbGtlci5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhbGtlci5nb1VudGlsKDU4KSkgeyAvLyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmV4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmV4cHIgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lLnR5cGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IGl0ZW0ubmFtZS5wYXRoc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDQ0KTsgLy8gLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDExLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBvYmpJdGVtc1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZENhbGwod2Fsa2VyKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFVuYXJ5RXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluaVsOWtl1xuICovXG5cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkVW5hcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXVuYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bmlbDlrZdcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWROdW1iZXIod2Fsa2VyKSB7XG4gICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9cXHMqKC0/WzAtOV0rKFxcLlswLTldKyk/KS9nLCAxKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIHZhbHVlOiArbWF0Y2hbMV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDQ1KSB7XG4gICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IDksXG4gICAgICAgICAgICBleHByOiByZWFkVW5hcnlFeHByKHdhbGtlciksXG4gICAgICAgICAgICBvcGVyYXRvcjogNDVcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWROdW1iZXI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5ZpZGVudFxuICovXG5cbi8qKlxuICog6K+75Y+WaWRlbnRcbiAqIOi/memHjOeahCBpZGVudCDmjIfmoIfor4bnrKYoaWRlbnRpZmllcinvvIzkuZ/lsLHmmK/pgJrluLjmhI/kuYnkuIrnmoTlj5jph4/lkI1cbiAqIOi/memHjOm7mOiupOeahOWPmOmHj+WQjeinhOWImeS4uu+8mueUsee+juWFg+espuWPtygkKeOAgeaVsOWtl+OAgeWtl+avjeaIluiAheS4i+WIkue6vyhfKeaehOaIkOeahOWtl+espuS4slxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVhZElkZW50KHdhbGtlcikge1xuICAgIHZhciBtYXRjaCA9IHdhbGtlci5tYXRjaCgvXFxzKihbXFwkMC05YS16X10rKS9pZywgMSk7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEFMXSBleHBlY3QgYW4gaWRlbnQ6ICcgKyB3YWxrZXIuY3V0KHdhbGtlci5pbmRleCkpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHJldHVybiBtYXRjaFsxXTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZElkZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5LiJ5YWD6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkTG9naWNhbE9SRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1sb2dpY2FsLW9yLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bkuInlhYPooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkVGVydGlhcnlFeHByKHdhbGtlcikge1xuICAgIHZhciBjb25kaXRpb25hbCA9IHJlYWRMb2dpY2FsT1JFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjMpIHsgLy8gP1xuICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgIHZhciB5ZXNFeHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgICAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNTgpIHsgLy8gOlxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxMCxcbiAgICAgICAgICAgICAgICBzZWdzOiBbXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsLFxuICAgICAgICAgICAgICAgICAgICB5ZXNFeHByLFxuICAgICAgICAgICAgICAgICAgICByZWFkVGVydGlhcnlFeHByKHdhbGtlcilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkVGVydGlhcnlFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W6K6/6Zeu6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4vY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZElkZW50ID0gcmVxdWlyZSgnLi9yZWFkLWlkZW50Jyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6K6/6Zeu6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZEFjY2Vzc29yKHdhbGtlcikge1xuICAgIHZhciBmaXJzdFNlZyA9IHJlYWRJZGVudCh3YWxrZXIpO1xuICAgIHN3aXRjaCAoZmlyc3RTZWcpIHtcbiAgICAgICAgY2FzZSAndHJ1ZSc6XG4gICAgICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlyc3RTZWcgPT09ICd0cnVlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEzXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICB2YWx1ZTogZmlyc3RTZWdcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG4gICAgYWNjZXNzb3JMb29wOiB3aGlsZSAoMSkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG5cbiAgICAgICAgc3dpdGNoICh3YWxrZXIuY3VycmVudENvZGUoKSkge1xuICAgICAgICAgICAgY2FzZSA0NjogLy8gLlxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcblxuICAgICAgICAgICAgICAgIC8vIGlkZW50IGFzIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXRocy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRJZGVudCh3YWxrZXIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6IC8vIFtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhdGhzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ29VbnRpbCg5Myk7IC8vIF1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhayBhY2Nlc3Nvckxvb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQWNjZXNzb3I7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bosIPnlKhcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vcmVhZC1hY2Nlc3NvcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluiwg+eUqFxuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcGFyYW0ge0FycmF5PX0gZGVmYXVsdEFyZ3Mg6buY6K6k5Y+C5pWwXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRDYWxsKHdhbGtlciwgZGVmYXVsdEFyZ3MpIHtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuICAgIHZhciByZXN1bHQgPSByZWFkQWNjZXNzb3Iod2Fsa2VyKTtcblxuICAgIHZhciBhcmdzO1xuICAgIGlmICh3YWxrZXIuZ29VbnRpbCg0MCkpIHsgLy8gKFxuICAgICAgICBhcmdzID0gW107XG5cbiAgICAgICAgd2hpbGUgKCF3YWxrZXIuZ29VbnRpbCg0MSkpIHsgLy8gKVxuICAgICAgICAgICAgYXJncy5wdXNoKHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSk7XG4gICAgICAgICAgICB3YWxrZXIuZ29VbnRpbCg0NCk7IC8vICxcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkZWZhdWx0QXJncykge1xuICAgICAgICBhcmdzID0gZGVmYXVsdEFyZ3M7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgdHlwZTogNixcbiAgICAgICAgICAgIG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQ2FsbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluaLrOWPt+ihqOi+vuW8j1xuICovXG5cbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bmi6zlj7fooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkUGFyZW50aGVzaXplZEV4cHIod2Fsa2VyKSB7XG4gICAgd2Fsa2VyLmdvKDEpO1xuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKDQxKTsgLy8gKVxuXG4gICAgZXhwci5wYXJlbnRoZXNpemVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFBhcmVudGhlc2l6ZWRFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5LmY5rOV6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkVW5hcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXVuYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bkuZjms5Xooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZFVuYXJ5RXhwcih3YWxrZXIpO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgICAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vICVcbiAgICAgICAgICAgIGNhc2UgNDI6IC8vICpcbiAgICAgICAgICAgIGNhc2UgNDc6IC8vIC9cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgZXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogOCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkVW5hcnlFeHByKHdhbGtlcildXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bliqDms5Xooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtbXVsdGlwbGljYXRpdmUtZXhwcicpO1xuXG5cbi8qKlxuICog6K+75Y+W5Yqg5rOV6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKTtcblxuICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG4gICAgICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDQzOiAvLyArXG4gICAgICAgICAgICBjYXNlIDQ1OiAvLyAtXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDgsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZEFkZGl0aXZlRXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluWFs+ezu+WIpOaWreihqOi+vuW8j1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFkZGl0aXZlRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1hZGRpdGl2ZS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5YWz57O75Yik5pat6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gNjEpIHtcbiAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiA4LFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkQWRkaXRpdmVFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkUmVsYXRpb25hbEV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bnm7jnrYnmr5Tlr7nooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRSZWxhdGlvbmFsRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1yZWxhdGlvbmFsLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bnm7jnrYnmr5Tlr7nooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkRXF1YWxpdHlFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNjE6IC8vID1cbiAgICAgICAgY2FzZSAzMzogLy8gIVxuICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogOCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkRXF1YWxpdHlFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W6YC76L6R5LiO6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkRXF1YWxpdHlFeHByID0gcmVxdWlyZSgnLi9yZWFkLWVxdWFsaXR5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bpgLvovpHkuI7ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkRXF1YWxpdHlFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gMzgpIHsgLy8gJlxuICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDM4KSB7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDgsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IDc2LFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTG9naWNhbEFOREV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bpgLvovpHmiJbooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsQU5ERXhwciA9IHJlcXVpcmUoJy4vcmVhZC1sb2dpY2FsLWFuZC1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6YC76L6R5oiW6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAxMjQpIHsgLy8gfFxuICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDEyNCkge1xuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiA4LFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAyNDgsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRMb2dpY2FsT1JFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fsa2VyLmdvKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZExvZ2ljYWxPUkV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PmnpDooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDop6PmnpDooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUV4cHIoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyAmJiBzb3VyY2UudHlwZSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcihuZXcgV2Fsa2VyKHNvdXJjZSkpO1xuICAgIGV4cHIucmF3ID0gc291cmNlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PmnpDosIPnlKhcbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQ2FsbCA9IHJlcXVpcmUoJy4vcmVhZC1jYWxsJyk7XG5cbi8qKlxuICog6Kej5p6Q6LCD55SoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEBwYXJhbSB7QXJyYXk9fSBkZWZhdWx0QXJncyDpu5jorqTlj4LmlbBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VDYWxsKHNvdXJjZSwgZGVmYXVsdEFyZ3MpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRDYWxsKG5ldyBXYWxrZXIoc291cmNlKSwgZGVmYXVsdEFyZ3MpO1xuXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gNikge1xuICAgICAgICBleHByID0ge1xuICAgICAgICAgICAgdHlwZTogNixcbiAgICAgICAgICAgIG5hbWU6IGV4cHIsXG4gICAgICAgICAgICBhcmdzOiBkZWZhdWx0QXJncyB8fCBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV4cHIucmF3ID0gc291cmNlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUNhbGw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PmnpDmj5LlgLzmm7/mjaJcbiAqL1xuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZENhbGwgPSByZXF1aXJlKCcuL3JlYWQtY2FsbCcpO1xuXG4vKipcbiAqIOino+aekOaPkuWAvOabv+aNolxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlSW50ZXJwKHNvdXJjZSkge1xuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG5cbiAgICB2YXIgaW50ZXJwID0ge1xuICAgICAgICB0eXBlOiA1LFxuICAgICAgICBleHByOiByZWFkVGVydGlhcnlFeHByKHdhbGtlciksXG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICByYXc6IHNvdXJjZVxuICAgIH07XG5cbiAgICB3aGlsZSAod2Fsa2VyLmdvVW50aWwoMTI0KSkgeyAvLyB8XG4gICAgICAgIHZhciBjYWxsRXhwciA9IHJlYWRDYWxsKHdhbGtlciwgW10pO1xuICAgICAgICBzd2l0Y2ggKGNhbGxFeHByLm5hbWUucGF0aHNbMF0udmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmF3JzpcbiAgICAgICAgICAgICAgICBpbnRlcnAub3JpZ2luYWwgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpbnRlcnAuZmlsdGVycy5wdXNoKGNhbGxFeHByKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnA7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlSW50ZXJwO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kej56CBIEhUTUwg5a2X56ym5a6e5L2TXG4gKi9cblxudmFyIEVOVElUWV9ERUNPREVfTUFQID0ge1xuICAgIGx0OiAnPCcsXG4gICAgZ3Q6ICc+JyxcbiAgICBuYnNwOiAnICcsXG4gICAgcXVvdDogJ1xcXCInLFxuICAgIGVtc3A6ICdcXHUyMDAzJyxcbiAgICBlbnNwOiAnXFx1MjAwMicsXG4gICAgdGhpbnNwOiAnXFx1MjAwOScsXG4gICAgY29weTogJ1xceGE5JyxcbiAgICByZWc6ICdcXHhhZScsXG4gICAgenduajogJ1xcdTIwMGMnLFxuICAgIHp3ajogJ1xcdTIwMGQnLFxuICAgIGFtcDogJyYnXG59O1xuXG4vKipcbiAqIOino+eggSBIVE1MIOWtl+espuWunuS9k1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB6Kej56CB55qE5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZUhUTUxFbnRpdHkoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZVxuICAgICAgICAucmVwbGFjZSgvJiMoWzAtOV0rKTsvZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgrY29kZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZXBsYWNlKC8mI3goWzAtOWEtZl0rKTsvaWcsIGZ1bmN0aW9uIChtYXRjaCwgY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoY29kZSwgMTYpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlcGxhY2UoLyYoW2Etel0rKTsvaWcsIGZ1bmN0aW9uIChtYXRjaCwgY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIEVOVElUWV9ERUNPREVfTUFQW2NvZGVdIHx8IG1hdGNoO1xuICAgICAgICB9KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVjb2RlSFRNTEVudGl0eTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOaWh+acrFxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUludGVycCA9IHJlcXVpcmUoJy4vcGFyc2UtaW50ZXJwJyk7XG4vLyB2YXIgZGVjb2RlSFRNTEVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZGVjb2RlLWh0bWwtZW50aXR5Jyk7XG5cbi8qKlxuICog5a+55a2X56ym5Liy6L+b6KGM5Y+v55So5LqObmV3IFJlZ0V4cOeahOWtl+mdouWMllxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDpnIDopoHlrZfpnaLljJbnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ30g5a2X56ym5Liy5a2X6Z2i5YyW57uT5p6cXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cExpdGVyYWwoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKC9bXFxeXFxbXFxdXFwkXFwoXFwpXFx7XFx9XFw/XFwqXFwuXFwrXFxcXF0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIGM7XG4gICAgfSk7XG59XG5cbnZhciBkZWxpbVJlZ0NhY2hlID0ge307XG5cbi8qKlxuICog6Kej5p6Q5paH5pysXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEBwYXJhbSB7QXJyYXk/fSBkZWxpbWl0ZXJzIOWIhumalOespuOAgum7mOiupOS4uiBbJ3t7JywgJ319J11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUZXh0KHNvdXJjZSwgZGVsaW1pdGVycykge1xuICAgIGRlbGltaXRlcnMgPSBkZWxpbWl0ZXJzIHx8IFsne3snLCAnfX0nXTtcblxuICAgIHZhciByZWdDYWNoZUtleSA9IGRlbGltaXRlcnNbMF0gKyAnPi4uPCcgKyBkZWxpbWl0ZXJzWzFdO1xuICAgIHZhciBleHByU3RhcnRSZWcgPSBkZWxpbVJlZ0NhY2hlW3JlZ0NhY2hlS2V5XTtcbiAgICBpZiAoIWV4cHJTdGFydFJlZykge1xuICAgICAgICBleHByU3RhcnRSZWcgPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgcmVnZXhwTGl0ZXJhbChkZWxpbWl0ZXJzWzBdKVxuICAgICAgICAgICAgICAgICsgJ1xcXFxzKihbXFxcXHNcXFxcU10rPylcXFxccyonXG4gICAgICAgICAgICAgICAgKyByZWdleHBMaXRlcmFsKGRlbGltaXRlcnNbMV0pLFxuICAgICAgICAgICAgJ2cnXG4gICAgICAgICk7XG4gICAgICAgIGRlbGltUmVnQ2FjaGVbcmVnQ2FjaGVLZXldID0gZXhwclN0YXJ0UmVnO1xuICAgIH1cblxuICAgIHZhciBleHByTWF0Y2g7XG5cbiAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihzb3VyY2UpO1xuICAgIHZhciBiZWZvcmVJbmRleCA9IDA7XG5cbiAgICB2YXIgZXhwciA9IHtcbiAgICAgICAgdHlwZTogNyxcbiAgICAgICAgc2VnczogW11cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHVzaFN0cmluZ1RvU2VnKHRleHQpIHtcbiAgICAgICAgdGV4dCAmJiBleHByLnNlZ3MucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgbGl0ZXJhbDogdGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiBkZWNvZGVIVE1MRW50aXR5KHRleHQpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBkZWxpbUVuZExlbiA9IGRlbGltaXRlcnNbMV0ubGVuZ3RoO1xuICAgIHdoaWxlICgoZXhwck1hdGNoID0gd2Fsa2VyLm1hdGNoKGV4cHJTdGFydFJlZykpICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGludGVycFNvdXJjZSA9IGV4cHJNYXRjaFsxXTtcbiAgICAgICAgdmFyIGludGVycExlbiA9IGV4cHJNYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIGlmICh3YWxrZXIuY3V0KHdhbGtlci5pbmRleCArIDEgLSBkZWxpbUVuZExlbiwgd2Fsa2VyLmluZGV4ICsgMSkgPT09IGRlbGltaXRlcnNbMV0pIHtcbiAgICAgICAgICAgIGludGVycFNvdXJjZSArPSB3YWxrZXIuY3V0KHdhbGtlci5pbmRleCwgd2Fsa2VyLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICBpbnRlcnBMZW4rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHB1c2hTdHJpbmdUb1NlZyh3YWxrZXIuY3V0KFxuICAgICAgICAgICAgYmVmb3JlSW5kZXgsXG4gICAgICAgICAgICB3YWxrZXIuaW5kZXggLSBpbnRlcnBMZW5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgdmFyIGludGVycCA9IHBhcnNlSW50ZXJwKGludGVycFNvdXJjZSk7XG4gICAgICAgIGV4cHIub3JpZ2luYWwgPSBleHByLm9yaWdpbmFsIHx8IGludGVycC5vcmlnaW5hbDtcbiAgICAgICAgZXhwci5zZWdzLnB1c2goaW50ZXJwKTtcblxuICAgICAgICBiZWZvcmVJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB9XG5cbiAgICBwdXNoU3RyaW5nVG9TZWcod2Fsa2VyLmN1dChiZWZvcmVJbmRleCkpO1xuXG5cblxuICAgIGlmIChleHByLnNlZ3MubGVuZ3RoID09PSAxICYmIGV4cHIuc2Vnc1swXS50eXBlID09PSAxKSB7XG4gICAgICAgIGV4cHIudmFsdWUgPSBleHByLnNlZ3NbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlVGV4dDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOaMh+S7pFxuICovXG5cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZS1leHByJyk7XG4vLyB2YXIgcGFyc2VDYWxsID0gcmVxdWlyZSgnLi9wYXJzZS1jYWxsJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFVuYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC11bmFyeS1leHByJyk7XG5cbi8qKlxuICog5oyH5Luk6Kej5p6Q5ZmoXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGlyZWN0aXZlUGFyc2VycyA9IHtcbiAgICAnZm9yJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHZhbHVlKTtcbiAgICAgICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9eXFxzKihbJDAtOWEtel9dKykoXFxzKixcXHMqKFskMC05YS16X10rKSk/XFxzK2luXFxzKy9pZywgMSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgICAgICAgICAgIGl0ZW06IG1hdGNoWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWFkVW5hcnlFeHByKHdhbGtlcilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5pbmRleCA9IG1hdGNoWzNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2Fsa2VyLm1hdGNoKC9cXHMqdHJhY2tieVxccysvaWcsIDEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gd2Fsa2VyLmluZGV4O1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS50cmFja0J5ID0gcmVhZEFjY2Vzc29yKHdhbGtlcik7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLnRyYWNrQnkucmF3ID0gd2Fsa2VyLmN1dChzdGFydCwgd2Fsa2VyLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIGZvciBzeW50YXggZXJyb3I6ICcgKyB2YWx1ZSk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH0sXG5cbiAgICAncmVmJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VUZXh0KHZhbHVlLCBvcHRpb25zLmRlbGltaXRlcnMpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdpZic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdlbGlmJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2Vsc2UnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge31cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2JpbmQnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnaHRtbCc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICd0cmFuc2l0aW9uJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VDYWxsKHZhbHVlKVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8qKlxuICog6Kej5p6Q5oyH5LukXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmjIfku6TlkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDmjIfku6TlgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5hbWUgPT09ICdlbHNlLWlmJykge1xuICAgICAgICBuYW1lID0gJ2VsaWYnO1xuICAgIH1cblxuICAgIHZhciBwYXJzZXIgPSBkaXJlY3RpdmVQYXJzZXJzW25hbWVdO1xuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgICAgKGFOb2RlLmRpcmVjdGl2ZXNbbmFtZV0gPSBwYXJzZXIodmFsdWUsIG9wdGlvbnMpKS5yYXcgPSB2YWx1ZTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlRGlyZWN0aXZlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kej5p6Q5oq96LGh6IqC54K55bGe5oCnXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBrZWJhYjJjYW1lbCA9IHJlcXVpcmUoJy4uL3V0aWwva2ViYWIyY2FtZWwnKTtcbi8vIHZhciBib29sQXR0cnMgPSByZXF1aXJlKCcuLi9icm93c2VyL2Jvb2wtYXR0cnMnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlQ2FsbCA9IHJlcXVpcmUoJy4vcGFyc2UtY2FsbCcpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4vcGFyc2UtdGV4dCcpO1xuLy8gdmFyIHBhcnNlRGlyZWN0aXZlID0gcmVxdWlyZSgnLi9wYXJzZS1kaXJlY3RpdmUnKTtcblxuXG4vKipcbiAqIOino+aekOaKveixoeiKgueCueWxnuaAp1xuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5bGe5oCn5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5bGe5oCn5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKi9cbmZ1bmN0aW9uIGludGVncmF0ZUF0dHIoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHByZWZpeEluZGV4ID0gbmFtZS5pbmRleE9mKCctJyk7XG4gICAgdmFyIHJlYWxOYW1lO1xuICAgIHZhciBwcmVmaXg7XG5cbiAgICBpZiAocHJlZml4SW5kZXggPiAwKSB7XG4gICAgICAgIHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgcHJlZml4SW5kZXgpO1xuICAgICAgICByZWFsTmFtZSA9IG5hbWUuc2xpY2UocHJlZml4SW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYU5vZGUuZXZlbnRzLnB1c2goZXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgY29sb25JbmRleDtcbiAgICAgICAgICAgIHdoaWxlICgoY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzonKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gdmFsdWUuc2xpY2UoMCwgY29sb25JbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBldmVudEhhbmRsZXIoXCJkZDphYVwiKSDov5nnp43mg4XlhrXkuI3og73nrpdtb2RpZmllcu+8jOmcgOimgei+qOivhlxuICAgICAgICAgICAgICAgIGlmICghL15bYS16XSskL2kudGVzdChtb2RpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQubW9kaWZpZXJbbW9kaWZpZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGNvbG9uSW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQuZXhwciA9IHBhcnNlQ2FsbCh2YWx1ZSwgW1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IDEsIHZhbHVlOiAnJGV2ZW50J31cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzYW4nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHBhcnNlRGlyZWN0aXZlKGFOb2RlLCByZWFsTmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncHJvcCc6XG4gICAgICAgICAgICBpbnRlZ3JhdGVQcm9wKGFOb2RlLCByZWFsTmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndmFyJzpcbiAgICAgICAgICAgIGlmICghYU5vZGUudmFycykge1xuICAgICAgICAgICAgICAgIGFOb2RlLnZhcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhbE5hbWUgPSBrZWJhYjJjYW1lbChyZWFsTmFtZSk7XG4gICAgICAgICAgICBhTm9kZS52YXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlYWxOYW1lLFxuICAgICAgICAgICAgICAgIGV4cHI6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpbnRlZ3JhdGVQcm9wKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG4vKipcbiAqIOino+aekOaKveixoeiKgueCuee7keWumuWxnuaAp1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlsZ7mgKflkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSByYXdWYWx1ZSDlsZ7mgKflgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gaW50ZWdyYXRlUHJvcChhTm9kZSwgbmFtZSwgcmF3VmFsdWUsIG9wdGlvbnMpIHtcbiAgICAvLyBwYXJzZSB0d28gd2F5IGJpbmRpbmcsIGUuZy4gdmFsdWU9XCJ7PWlkZW50PX1cIlxuICAgIHZhciB2YWx1ZSA9IHJhd1ZhbHVlIHx8ICcnO1xuICAgIHZhciB4TWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXlxcez1cXHMqKC4qPylcXHMqPVxcfSQvKTtcblxuICAgIGlmICh4TWF0Y2gpIHtcbiAgICAgICAgYU5vZGUucHJvcHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZXhwcjogcGFyc2VFeHByKHhNYXRjaFsxXSksXG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgcmF3OiB2YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGV4cHIgPSBwYXJzZVRleHQodmFsdWUsIG9wdGlvbnMuZGVsaW1pdGVycyk7XG5cbiAgICAvLyDov5nph4zkuI3og73miorlj6rmnInkuIDkuKrmj5LlgLznmoTlsZ7mgKfmir3lj5ZcbiAgICAvLyDlm6DkuLrmj5LlgLzph4znmoTlgLzlj6/og73mmK9odG1s54mH5q6177yM5a655piT6KKr5rOo5YWlXG4gICAgLy8g57uE5Lu255qE5pWw5o2u57uR5a6a5Zyo57uE5Lu2aW5pdOaXtuWBmuaKveWPllxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgIGVhY2goZXhwci5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy50eXBlID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZy5maWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnXycgKyBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChleHByLnR5cGUgPT09IDcpIHtcbiAgICAgICAgc3dpdGNoIChleHByLnNlZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKGJvb2xBdHRyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBleHByID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZXhwciA9IGV4cHIuc2Vnc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZXhwci50eXBlID09PSA1ICYmIGV4cHIuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwciA9IGV4cHIuZXhwcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhTm9kZS5wcm9wcy5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgcmF3OiByYXdWYWx1ZVxuICAgIH0pO1xufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGludGVncmF0ZUF0dHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PmnpDmqKHmnb9cbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIGludGVncmF0ZUF0dHIgPSByZXF1aXJlKCcuL2ludGVncmF0ZS1hdHRyJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgc3ZnVGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvc3ZnLXRhZ3MnKTtcbi8vIHZhciBhdXRvQ2xvc2VUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbmZ1bmN0aW9uIGdldFhQYXRoKHN0YWNrLCBjdXJyZW50VGFnTmFtZSkge1xuICAgIHZhciBwYXRoID0gWydST09UJ107XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHBhdGgucHVzaChzdGFja1tpXS50YWdOYW1lKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUYWdOYW1lKSB7XG4gICAgICAgIHBhdGgucHVzaChjdXJyZW50VGFnTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJz4nKTtcbn1cbi8vICNbZW5kXVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICog6Kej5p6QIHRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSB0ZW1wbGF0Zea6kOeggVxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtzdHJpbmc/fSBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlIOepuueZveaWh+acrOeahOWkhOeQhuetlueVpeOAgm5vbmV8Ymxhbmt8YWxsXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICogQHJldHVybiB7QU5vZGV9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUoc291cmNlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy50cmltV2hpdGVzcGFjZSA9IG9wdGlvbnMudHJpbVdoaXRlc3BhY2UgfHwgJ25vbmUnO1xuXG4gICAgdmFyIHJvb3ROb2RlID0ge1xuICAgICAgICBkaXJlY3RpdmVzOiB7fSxcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG5cbiAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9tZywgJycpLnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpO1xuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG5cbiAgICB2YXIgdGFnUmVnID0gLzwoXFwvKT8oW2Etel1bYS16MC05LV0qKVxccyovaWc7XG4gICAgdmFyIGF0dHJSZWcgPSAvKFstOjAtOWEtelxcW1xcXV9dKykoXFxzKj1cXHMqKFsnXCJdKShbXlxcM10qPylcXDMpP1xccyovaWc7XG5cbiAgICB2YXIgdGFnTWF0Y2g7XG4gICAgdmFyIGN1cnJlbnROb2RlID0gcm9vdE5vZGU7XG4gICAgdmFyIHN0YWNrID0gW3Jvb3ROb2RlXTtcbiAgICB2YXIgc3RhY2tJbmRleCA9IDA7XG4gICAgdmFyIGJlZm9yZUxhc3RJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoKHRhZ01hdGNoID0gd2Fsa2VyLm1hdGNoKHRhZ1JlZykpICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHRhZ01hdGNoU3RhcnQgPSB3YWxrZXIuaW5kZXggLSB0YWdNYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHZhciB0YWdFbmQgPSB0YWdNYXRjaFsxXTtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSB0YWdNYXRjaFsyXTtcbiAgICAgICAgaWYgKCFzdmdUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gNjI6ID5cbiAgICAgICAgLy8gNDc6IC9cbiAgICAgICAgLy8g5aSE55CGIDwveHh4eCA+XG4gICAgICAgIGlmICh0YWdFbmQpIHtcbiAgICAgICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjIpIHtcbiAgICAgICAgICAgICAgICAvLyDmu6HotrPlhbPpl63moIfnrb7nmoTmnaHku7bml7bvvIzlhbPpl63moIfnrb5cbiAgICAgICAgICAgICAgICAvLyDlkJHkuIrmn6Xmib7liLDlr7nlupTmoIfnrb7vvIzmib7kuI3liLDml7blv73nlaXlhbPpl61cbiAgICAgICAgICAgICAgICB2YXIgY2xvc2VJbmRleCA9IHN0YWNrSW5kZXg7XG5cbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOato+WcqOmXreWQiOS4gOS4quiHqumXreWQiOeahOagh+etvu+8jOS+i+WmgiA8L2lucHV0Pu+8jOaKpemUmVxuICAgICAgICAgICAgICAgIGlmIChhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrLCB0YWdOYW1lKSArICcgaXMgYSBgYXV0byBjbG9zZWRgIHRhZywgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnc28gaXQgY2Fubm90IGJlIGNsb3NlZCB3aXRoIDwvJyArIHRhZ05hbWUgKyAnPidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlhbPpl63nmoQgdGFnIOWSjOW9k+WJjeaJk+W8gOeahOS4jeS4gOiHtO+8jOaKpemUmVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSAhPT0gdGFnTmFtZVxuICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zopoHmioogdGFibGUg6Ieq5Yqo5re75YqgIHRib2R5IOeahOaDheWGtee7meWOu+aOiVxuICAgICAgICAgICAgICAgICAgICAmJiAhKHRhZ05hbWUgPT09ICd0YWJsZScgJiYgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSA9PT0gJ3Rib2R5JylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spICsgJyBpcyBjbG9zZWQgd2l0aCAnICsgdGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG5cbiAgICAgICAgICAgICAgICBwdXNoVGV4dE5vZGUoc291cmNlLnNsaWNlKGJlZm9yZUxhc3RJbmRleCwgdGFnTWF0Y2hTdGFydCkpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjbG9zZUluZGV4ID4gMCAmJiBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lICE9PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlSW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tJbmRleCA9IGNsb3NlSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aSE55CGIDwveHh4IOmdnuato+W4uOmXreWQiOagh+etvlxuXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c6Zet5ZCI5qCH562+5pe277yM5Yy56YWN5ZCO55qE5LiL5LiA5Liq5a2X56ym5pivIDzvvIzljbPkuIvkuIDkuKrmoIfnrb7nmoTlvIDlp4vvvIzpgqPkuYjlvZPliY3pl63lkIjmoIfnrb7mnKrpl63lkIhcbiAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnXFwncyBjbG9zZSB0YWcgbm90IGNsb3NlZCdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDpl63lkIjmoIfnrb7mnInlsZ7mgKdcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrKVxuICAgICAgICAgICAgICAgICAgICArICdcXCdzIGNsb3NlIHRhZyBoYXMgYXR0cmlidXRlcydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgYUVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczoge30sXG4gICAgICAgICAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdGFnQ2xvc2UgPSBhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdO1xuXG4gICAgICAgICAgICAvLyDop6PmnpAgYXR0cmlidXRlc1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g5qCH562+57uT5p2f5pe26Lez5Ye6IGF0dHJpYnV0ZXMg6K+75Y+WXG4gICAgICAgICAgICAgICAgLy8g5qCH562+5Y+v6IO955u05o6l57uT5p2f5oiW6Zet5ZCI57uT5p2fXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNjIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDpgYfliLAgLz4g5oyJ6Zet5ZCI5aSE55CGXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNDdcbiAgICAgICAgICAgICAgICAgICAgJiYgd2Fsa2VyLmNoYXJDb2RlKHdhbGtlci5pbmRleCArIDEpID09PSA2MlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMik7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0Nsb3NlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGVtcGxhdGUg5Liy57uT5p2f5LqGXG4gICAgICAgICAgICAgICAgLy8g6L+Z5pe25YCZ77yM6K+05piO6L+Z5Liq6K+75Y+W5ZGo5pyf55qE5omA5pyJ5YaF5a6577yM6YO95pivdGV4dFxuICAgICAgICAgICAgICAgIGlmICghbmV4dENoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hUZXh0Tm9kZSh3YWxrZXIuY3V0KGJlZm9yZUxhc3RJbmRleCkpO1xuICAgICAgICAgICAgICAgICAgICBhRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgLy8g5Zyo5aSE55CG5LiA5LiqIG9wZW4g5qCH562+5pe277yM5aaC5p6c6YGH5Yiw5LqGIDzvvIwg5Y2z5LiL5LiA5Liq5qCH562+55qE5byA5aeL77yM5YiZ5b2T5YmN5qCH562+5pyq6IO95q2j5bi46Zet5ZCI77yM5oql6ZSZXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBpcyBub3QgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgLy8g6K+75Y+WIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIHZhciBhdHRyTWF0Y2ggPSB3YWxrZXIubWF0Y2goYXR0clJlZyk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWxnuaAp+aciSA977yM5L2G5rKh5Y+W5YiwIHZhbHVl77yM5oql6ZSZXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5jaGFyQ29kZShhdHRyTWF0Y2guaW5kZXggKyBhdHRyTWF0Y2hbMV0ubGVuZ3RoKSA9PT0gNjFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICFhdHRyTWF0Y2hbMl1cbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBhdHRyaWJ1dGUgYCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGF0dHJNYXRjaFsxXSArICdgIGlzIG5vdCB3cmFwcGVkIHdpdGggXCJcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyYXRlQXR0cihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoWzNdID8gYXR0ck1hdGNoWzRdIDogdm9pZCgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcHVzaFRleHROb2RlKHNvdXJjZS5zbGljZShiZWZvcmVMYXN0SW5kZXgsIHRhZ01hdGNoU3RhcnQpKTtcblxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIGlmIGRpcmVjdGl2ZSBmb3IgZWxzZS9lbGlmIGRpcmVjdGl2ZVxuICAgICAgICAgICAgICAgIHZhciBlbHNlRGlyZWN0aXZlID0gYUVsZW1lbnQuZGlyZWN0aXZlc1snZWxzZSddIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHx8IGFFbGVtZW50LmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgICAgIGlmIChlbHNlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbkxlbiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlmQU5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRDaGlsZHJlbkxlbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Q2hpbGQgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltwYXJlbnRDaGlsZHJlbkxlbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q2hpbGQudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5zcGxpY2UocGFyZW50Q2hpbGRyZW5MZW4sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZkFOb2RlID0gcGFyZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGlmICghaWZBTm9kZSB8fCAhcGFyZW50Q2hpbGQuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEVMXSBlbHNlIG5vdCBtYXRjaCBpZi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZBTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZBTm9kZS5lbHNlcyA9IGlmQU5vZGUuZWxzZXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZkFOb2RlLmVsc2VzLnB1c2goYUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYUVsZW1lbnQudGFnTmFtZSA9PT0gJ3RyJyAmJiBjdXJyZW50Tm9kZS50YWdOYW1lID09PSAndGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGJvZHlOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAndGJvZHknXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaCh0Ym9keU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSB0Ym9keU5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja1srK3N0YWNrSW5kZXhdID0gdGJvZHlOb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChhRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0YWdDbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGFFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzdGFja1srK3N0YWNrSW5kZXhdID0gYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBiZWZvcmVMYXN0SW5kZXggPSB3YWxrZXIuaW5kZXg7XG4gICAgfVxuXG4gICAgcHVzaFRleHROb2RlKHdhbGtlci5jdXQoYmVmb3JlTGFzdEluZGV4KSk7XG5cbiAgICByZXR1cm4gcm9vdE5vZGU7XG5cbiAgICAvKipcbiAgICAgKiDlnKjor7vlj5bmoIjkuK3mt7vliqDmlofmnKzoioLngrlcbiAgICAgKlxuICAgICAqIEBpbm5lclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaWh+acrOWGheWuuVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHB1c2hUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy50cmltV2hpdGVzcGFjZSkge1xuICAgICAgICAgICAgY2FzZSAnYmxhbmsnOlxuICAgICAgICAgICAgICAgIGlmICgvXlxccyskLy50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXlxccyt8XFxzKyQpL2csICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0RXhwcjogcGFyc2VUZXh0KHRleHQsIG9wdGlvbnMuZGVsaW1pdGVycylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtbWF4LXN0YXRlbWVudHMgKi9cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VUZW1wbGF0ZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOm7mOiupGZpbHRlclxuICovXG5cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0U3R5bGVGaWx0ZXIoc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5ICsgJzonICsgc291cmNlW2tleV0gKyAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG59XG5cbi8qKlxuICog6buY6K6kZmlsdGVyXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgREVGQVVMVF9GSUxURVJTID0ge1xuXG4gICAgLyoqXG4gICAgICogVVJM57yW56CBZmlsdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOS4slxuICAgICAqIEByZXR1cm4ge3N0cmluZ30g5pu/5o2i57uT5p6c5LiyXG4gICAgICovXG4gICAgdXJsOiBlbmNvZGVVUklDb21wb25lbnQsXG5cbiAgICBfY2xhc3M6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSxcbiAgICBfc3R5bGU6IGRlZmF1bHRTdHlsZUZpbHRlcixcblxuICAgIF94Y2xhc3M6IGZ1bmN0aW9uIChvdXRlciwgaW5uZXIpIHtcbiAgICAgICAgaWYgKG91dGVyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIG91dGVyID0gb3V0ZXIuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dGVyKSB7XG4gICAgICAgICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXIgKyAnICcgKyBvdXRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubmVyO1xuICAgIH0sXG5cbiAgICBfeHN0eWxlOiBmdW5jdGlvbiAob3V0ZXIsIGlubmVyKSB7XG4gICAgICAgIG91dGVyID0gb3V0ZXIgJiYgZGVmYXVsdFN0eWxlRmlsdGVyKG91dGVyKTtcbiAgICAgICAgaWYgKG91dGVyKSB7XG4gICAgICAgICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXIgKyAnOycgKyBvdXRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubmVyO1xuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERFRkFVTFRfRklMVEVSUztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOihqOi+vuW8j+iuoeeul1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuLy8gdmFyIERFRkFVTFRfRklMVEVSUyA9IHJlcXVpcmUoJy4vZGVmYXVsdC1maWx0ZXJzJyk7XG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuL2V2YWwtYXJncycpO1xuXG4vKipcbiAqIOiuoeeul+ihqOi+vuW8j+eahOWAvFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNruWuueWZqOWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnQ9fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGV2YWxFeHByKGV4cHIsIGRhdGEsIG93bmVyKSB7XG4gICAgaWYgKGV4cHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZXhwci52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWU7XG5cbiAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gIXZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMCAtIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB2YWx1ZSA9IGV2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSBldmFsRXhwcihleHByLnNlZ3NbMV0sIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5NDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTU1OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTgzOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjQ4OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gZXZhbEV4cHIoXG4gICAgICAgICAgICAgICAgZXhwci5zZWdzW2V2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpID8gMSA6IDJdLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgb3duZXJcbiAgICAgICAgICAgICk7XG5cblxuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXhwci5pdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGV4cHIuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGV2YWxFeHByKGl0ZW0uZXhwciwgZGF0YSwgb3duZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZSAmJiAodmFsdWUgPSB2YWx1ZS5jb25jYXQoaXRlbVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLml0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZXhwci5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gZXZhbEV4cHIoaXRlbS5leHByLCBkYXRhLCBvd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlICYmIGV4dGVuZCh2YWx1ZSwgaXRlbVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2V2YWxFeHByKGl0ZW0ubmFtZSwgZGF0YSwgb3duZXIpXSA9IGl0ZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KGV4cHIpO1xuXG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLmZpbHRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBleHByLmZpbHRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJOYW1lID0gZmlsdGVyLm5hbWUucGF0aHNbMF0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWx0ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnX2NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ19zdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBERUZBVUxUX0ZJTFRFUlNbZmlsdGVyTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdfeGNsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ194c3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPSBERUZBVUxUX0ZJTFRFUlNbZmlsdGVyTmFtZV0odmFsdWUsIGV2YWxFeHByKGZpbHRlci5hcmdzWzBdLCBkYXRhLCBvd25lcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3duZXIuZmlsdGVyc1tmaWx0ZXJOYW1lXSAmJiBvd25lci5maWx0ZXJzW2ZpbHRlck5hbWVdLmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXS5jb25jYXQoZXZhbEFyZ3MoZmlsdGVyLmFyZ3MsIGRhdGEsIG93bmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpZiAob3duZXIgJiYgZXhwci5uYW1lLnR5cGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gb3duZXI7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhzTGVuID0gZXhwci5uYW1lLnBhdGhzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBtZXRob2QgJiYgaSA8IHBhdGhzTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kW2V2YWxFeHByKGV4cHIubmFtZS5wYXRoc1tpXSwgZGF0YSwgb3duZXIpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWV0aG9kLmFwcGx5KG93bmVyLCBldmFsQXJncyhleHByLmFyZ3MsIGRhdGEsIG93bmVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdmFyIGJ1ZiA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLnNlZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IGV4cHIuc2Vnc1tpXTtcbiAgICAgICAgICAgICAgICBidWYgKz0gc2VnLnZhbHVlIHx8IGV2YWxFeHByKHNlZywgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV2YWxFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Li65Ye95pWw6LCD55So6K6h566X5Y+C5pWw5pWw57uE55qE5YC8XG4gKi9cblxuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOS4uuWHveaVsOiwg+eUqOiuoeeul+WPguaVsOaVsOe7hOeahOWAvFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+C5pWw6KGo6L6+5byP5YiX6KGoXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXZhbEFyZ3MoYXJncywgZGF0YSwgb3duZXIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGV2YWxFeHByKGFyZ3NbaV0sIGRhdGEsIG93bmVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZhbEFyZ3M7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDmr5TovoPlj5jmm7Tooajovr7lvI/kuI7nm67moIfooajovr7lvI/kuYvpl7TnmoTlhbPns7tcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOWIpOaWreWPmOabtOihqOi+vuW8j+S4juWkmuS4quihqOi+vuW8j+S5i+mXtOeahOWFs+ezu++8jDDkuLrlrozlhajmsqHlhbPns7vvvIwx5Li65pyJ5YWz57O7XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlRXhwciDnm67moIfooajovr7lvI9cbiAqIEBwYXJhbSB7QXJyYXl9IGV4cHJzIOWkmuS4qua6kOihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOihqOi+vuW8j+aJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGV4cHJzLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHBycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHJzW2ldLCBkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuLyoqXG4gKiDmr5TovoPlj5jmm7Tooajovr7lvI/kuI7nm67moIfooajovr7lvI/kuYvpl7TnmoTlhbPns7vvvIznlKjkuo7op4blm77mm7TmlrDliKTmlq1cbiAqIOinhuWbvuabtOaWsOmcgOimgeagueaNruWFtuWFs+ezu++8jOWBmuWHuuebuOW6lOeahOabtOaWsOihjOS4ulxuICpcbiAqIDA6IOWujOWFqOayoeWFs+ezu1xuICogMTog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55qE5q+N6aG5KOWmgmHkuI5hLmIpIOaIliDooajnpLrpnIDopoHlrozlhajlj5jljJZcbiAqIDI6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+ebuOetiVxuICogPjI6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+eahOWtkOmhue+8jOWmgmEuYi5j5LiOYS5iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZUV4cHIg5Y+Y5pu06KGo6L6+5byPXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDopoHmr5TovoPnmoTnm67moIfooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDooajovr7lvI/miYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwciwgZGF0YSkge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGlmICghZXhwci5jaGFuZ2VDYWNoZSkge1xuICAgICAgICBleHByLmNoYW5nZUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZUV4cHIucmF3ICYmICFleHByLmR5bmFtaWMpIHtcbiAgICAgICAgaWYgKGV4cHIuY2hhbmdlQ2FjaGVbY2hhbmdlRXhwci5yYXddICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBleHByLmNoYW5nZUNhY2hlW2NoYW5nZUV4cHIucmF3XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgcGF0aHNMZW4gPSBwYXRocy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hhbmdlUGF0aHMgPSBjaGFuZ2VFeHByLnBhdGhzO1xuICAgICAgICAgICAgdmFyIGNoYW5nZUxlbiA9IGNoYW5nZVBhdGhzLmxlbmd0aDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHNMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRoRXhwciA9IHBhdGhzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBwYXRoRXhwclZhbHVlID0gcGF0aEV4cHIudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF0aEV4cHJWYWx1ZSA9PSBudWxsICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHBhdGhFeHByLCBkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIGkgPCBjaGFuZ2VMZW5cbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgICAgICYmIChwYXRoRXhwclZhbHVlIHx8IGV2YWxFeHByKHBhdGhFeHByLCBkYXRhKSkgIT0gY2hhbmdlUGF0aHNbaV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBNYXRoLm1heCgxLCBjaGFuZ2VMZW4gLSBwYXRoc0xlbiArIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmVzdWx0ID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwci5leHByLCBkYXRhKSA/IDEgOiAwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICBjYXNlIDg6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXN1bHQgPSBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGV4cHIuc2VncywgZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDEyOlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHByLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIuaXRlbXNbaV0uZXhwciwgZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwci5leHByLCBkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cHIuZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHByLmZpbHRlcnNbaV0uYXJncywgZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwci5uYW1lLnBhdGhzLCBkYXRhKVxuICAgICAgICAgICAgICAgIHx8IGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwci5hcmdzLCBkYXRhKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VFeHByLnJhdyAmJiAhZXhwci5keW5hbWljKSB7XG4gICAgICAgIGV4cHIuY2hhbmdlQ2FjaGVbY2hhbmdlRXhwci5yYXddID0gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNoYW5nZUV4cHJDb21wYXJlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5pWw5o2u5Y+Y5pu057G75Z6L5p6a5Li+XG4gKi9cblxuLyoqXG4gKiDmlbDmja7lj5jmm7TnsbvlnovmnprkuL5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBEYXRhQ2hhbmdlVHlwZSA9IHtcbiAgICBTRVQ6IDEsXG4gICAgU1BMSUNFOiAyXG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBEYXRhQ2hhbmdlVHlwZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOeUn+WRveWRqOacn+exu1xuICovXG5cbmZ1bmN0aW9uIGxpZmVDeWNsZU93bklzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbi8qKlxuICog6IqC54K555Sf5ZG95ZGo5pyf5L+h5oGvXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgTGlmZUN5Y2xlID0ge1xuICAgIHN0YXJ0OiB7fSxcblxuICAgIGNvbXBpbGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgaW5pdGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBjcmVhdGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBhdHRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGF0dGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGxlYXZpbmc6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlLFxuICAgICAgICBhdHRhY2hlZDogdHJ1ZSxcbiAgICAgICAgbGVhdmluZzogdHJ1ZVxuICAgIH0sXG5cbiAgICBkZXRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGRldGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGRpc3Bvc2VkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgZGlzcG9zZWQ6IHRydWVcbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IExpZmVDeWNsZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiKgueCueexu+Wei1xuICovXG5cbi8qKlxuICog6IqC54K557G75Z6LXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgTm9kZVR5cGUgPSB7XG4gICAgVEVYVDogMSxcbiAgICBJRjogMixcbiAgICBGT1I6IDMsXG4gICAgRUxFTTogNCxcbiAgICBDTVBUOiA1LFxuICAgIFNMT1Q6IDYsXG4gICAgVFBMOiA3LFxuICAgIExPQURFUjogOFxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTm9kZVR5cGU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDojrflj5YgQU5vZGUgcHJvcHMg5pWw57uE5Lit55u45bqUIG5hbWUg55qE6aG5XG4gKi9cblxuLyoqXG4gKiDojrflj5YgQU5vZGUgcHJvcHMg5pWw57uE5Lit55u45bqUIG5hbWUg55qE6aG5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIEFOb2Rl5a+56LGhXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1l5bGe5oCn5Yy56YWN5LiyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldEFOb2RlUHJvcChhTm9kZSwgbmFtZSkge1xuICAgIHZhciBpbmRleCA9IGFOb2RlLmhvdHNwb3QucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFOb2RlLnByb3BzW2luZGV4XTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldEFOb2RlUHJvcDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICovXG5cbi8vIHZhciBjb250YWlucyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbnMnKTtcbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZW1wdHknKTtcbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9zdmctdGFncycpO1xuLy8gdmFyIGllID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxuXG4vKipcbiAqIEhUTUwg5bGe5oCn5ZKMIERPTSDmk43kvZzlsZ7mgKfnmoTlr7nnhafooahcbiAqXG4gKiBAaW5uZXJcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEhUTUxfQVRUUl9QUk9QX01BUCA9IHtcbiAgICAncmVhZG9ubHknOiAncmVhZE9ubHknLFxuICAgICdjZWxscGFkZGluZyc6ICdjZWxsUGFkZGluZycsXG4gICAgJ2NlbGxzcGFjaW5nJzogJ2NlbGxTcGFjaW5nJyxcbiAgICAnY29sc3Bhbic6ICdjb2xTcGFuJyxcbiAgICAncm93c3Bhbic6ICdyb3dTcGFuJyxcbiAgICAndmFsaWduJzogJ3ZBbGlnbicsXG4gICAgJ3VzZW1hcCc6ICd1c2VNYXAnLFxuICAgICdmcmFtZWJvcmRlcic6ICdmcmFtZUJvcmRlcicsXG4gICAgJ2Zvcic6ICdodG1sRm9yJ1xufTtcblxuLyoqXG4gKiDpu5jorqTnmoTlhYPntKDnmoTlsZ7mgKforr7nva7nmoTlj5jmjaLmlrnms5VcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyKGVsLCB2YWx1ZSwgbmFtZSkge1xuICAgIHZhciBwcm9wTmFtZSA9IEhUTUxfQVRUUl9QUk9QX01BUFtuYW1lXSB8fCBuYW1lO1xuICAgIHZhciB2YWx1ZU5vdE51bGwgPSB2YWx1ZSAhPSBudWxsO1xuXG4gICAgLy8gaW5wdXQg55qEIHR5cGUg5piv5Liq54m55q6K5bGe5oCn77yM5YW25a6e5Lmf5bqU6K+l55SoIHNldEF0dHJpYnV0ZVxuICAgIC8vIOS9huaYryB0eXBlIOS4jeW6lOivpei/kOihjOaXtuWKqOaAgeaUueWPmO+8jOWQpuWImeS8muacieWFvOWuueaAp+mXrumimFxuICAgIC8vIOaJgOS7pei/memHjOebtOaOpeWwseS4jeeuoeS6hlxuICAgIGlmIChwcm9wTmFtZSBpbiBlbCkge1xuICAgICAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZU5vdE51bGwgPyB2YWx1ZSA6ICcnO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZU5vdE51bGwpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlTm90TnVsbCkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdmdQcm9wSGFuZGxlcihlbCwgdmFsdWUsIG5hbWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBib29sUHJvcEhhbmRsZXIoZWwsIHZhbHVlLCBuYW1lKSB7XG4gICAgdmFyIHByb3BOYW1lID0gSFRNTF9BVFRSX1BST1BfTUFQW25hbWVdIHx8IG5hbWU7XG4gICAgZWxbcHJvcE5hbWVdID0gISF2YWx1ZTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1wcm9wZXJ0aWVzLXF1b3RlICovXG4vKipcbiAqIOm7mOiupOeahOWxnuaAp+iuvue9ruWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzID0ge1xuICAgIHN0eWxlOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgJ2NsYXNzJzogZnVuY3Rpb24gKGVsLCB2YWx1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICBpZVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIC8vICNbZW5kXVxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICE9PSB2YWx1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNsb3Q6IGVtcHR5LFxuXG4gICAgZHJhZ2dhYmxlOiBib29sUHJvcEhhbmRsZXJcbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtcHJvcGVydGllcy1xdW90ZSAqL1xuXG52YXIgYW5hbElucHV0Q2hlY2tlciA9IHtcbiAgICBjaGVja2JveDogY29udGFpbnMsXG4gICAgcmFkaW86IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFuYWxJbnB1dENoZWNrZWRTdGF0ZShlbGVtZW50LCB2YWx1ZSkge1xuICAgIHZhciBiaW5kVmFsdWUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3ZhbHVlJyk7XG4gICAgdmFyIGJpbmRUeXBlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd0eXBlJyk7XG5cbiAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZXZhbEV4cHIoYmluZFR5cGUuZXhwciwgZWxlbWVudC5zY29wZSwgZWxlbWVudC5vd25lcik7XG5cbiAgICAgICAgaWYgKGFuYWxJbnB1dENoZWNrZXJbdHlwZV0pIHtcbiAgICAgICAgICAgIHZhciBiaW5kQ2hlY2tlZCA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgaWYgKGJpbmRDaGVja2VkICE9IG51bGwgJiYgIWJpbmRDaGVja2VkLmhpbnRFeHByKSB7XG4gICAgICAgICAgICAgICAgYmluZENoZWNrZWQuaGludEV4cHIgPSBiaW5kVmFsdWUuZXhwcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICEhYW5hbElucHV0Q2hlY2tlclt0eXBlXShcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgPyBldmFsRXhwcihiaW5kVmFsdWUuZXhwciwgZWxlbWVudC5kYXRhLCBlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICA6IGV2YWxFeHByKGJpbmRWYWx1ZS5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGVsZW1lbnRQcm9wSGFuZGxlcnMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgbXVsdGlwbGU6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgY2hlY2tlZDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlKTtcblxuICAgICAgICAgICAgYm9vbFByb3BIYW5kbGVyKFxuICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgIHN0YXRlICE9IG51bGwgPyBzdGF0ZSA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgLy8g5Luj56CB5LiN55So5oq95Ye65p2l6Ziy6YeN5aSN77yMYWxsdWHlhoXnmoTku6PnoIHlnKjnjrDku6PmtY/op4jlmajniYjmnKzkvJrooqvnvJbor5Hml7blubLmjonvvIxnemlw5Lmf5Lya5aSE55CG6YeN5aSN6Zeu6aKYXG4gICAgICAgICAgICAvLyBzZWU6ICMzNzhcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgaWYgKGllICYmIGllIDwgOCAmJiAhZWxlbWVudC5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgICAgICAgICBib29sUHJvcEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSAhPSBudWxsID8gc3RhdGUgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHRDaGVja2VkJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgfSxcbiAgICAgICAgcmVhZG9ubHk6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgYXV0b2ZvY3VzOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIHJlcXVpcmVkOiBib29sUHJvcEhhbmRsZXJcbiAgICB9LFxuXG4gICAgb3B0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChpc09wdGlvblNlbGVjdGVkKGVsZW1lbnQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgcmVhZG9ubHk6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgYXV0b2ZvY3VzOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIHJlcXVpcmVkOiBib29sUHJvcEhhbmRsZXJcbiAgICB9LFxuXG4gICAgdGV4dGFyZWE6IHtcbiAgICAgICAgcmVhZG9ubHk6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgYXV0b2ZvY3VzOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIHJlcXVpcmVkOiBib29sUHJvcEhhbmRsZXJcbiAgICB9LFxuXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGRpc2FibGVkOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIGF1dG9mb2N1czogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICB0eXBlOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgdmFyIHBhcmVudFNlbGVjdCA9IGVsZW1lbnQucGFyZW50O1xuICAgIHdoaWxlIChwYXJlbnRTZWxlY3QpIHtcbiAgICAgICAgaWYgKHBhcmVudFNlbGVjdC50YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRTZWxlY3QgPSBwYXJlbnRTZWxlY3QucGFyZW50O1xuICAgIH1cblxuXG4gICAgaWYgKHBhcmVudFNlbGVjdCkge1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBudWxsO1xuICAgICAgICB2YXIgcHJvcDtcbiAgICAgICAgdmFyIGV4cHI7XG5cbiAgICAgICAgaWYgKChwcm9wID0gZ2V0QU5vZGVQcm9wKHBhcmVudFNlbGVjdC5hTm9kZSwgJ3ZhbHVlJykpXG4gICAgICAgICAgICAmJiAoZXhwciA9IHByb3AuZXhwcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IHBhcmVudFNlbGVjdC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICAgICAgICAgID8gZXZhbEV4cHIoZXhwciwgcGFyZW50U2VsZWN0LmRhdGEsIHBhcmVudFNlbGVjdClcbiAgICAgICAgICAgICAgICA6IGV2YWxFeHByKGV4cHIsIHBhcmVudFNlbGVjdC5zY29wZSwgcGFyZW50U2VsZWN0Lm93bmVyKVxuICAgICAgICAgICAgICAgIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiDojrflj5blsZ7mgKflpITnkIblr7nosaFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSDlhYPntKB0YWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSDlsZ7mgKflkI1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcEhhbmRsZXIodGFnTmFtZSwgYXR0ck5hbWUpIHtcbiAgICBpZiAoc3ZnVGFnc1t0YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gc3ZnUHJvcEhhbmRsZXI7XG4gICAgfVxuXG4gICAgdmFyIHRhZ1Byb3BIYW5kbGVycyA9IGVsZW1lbnRQcm9wSGFuZGxlcnNbdGFnTmFtZV07XG4gICAgaWYgKCF0YWdQcm9wSGFuZGxlcnMpIHtcbiAgICAgICAgdGFnUHJvcEhhbmRsZXJzID0gZWxlbWVudFByb3BIYW5kbGVyc1t0YWdOYW1lXSA9IHt9O1xuICAgIH1cblxuICAgIHZhciBwcm9wSGFuZGxlciA9IHRhZ1Byb3BIYW5kbGVyc1thdHRyTmFtZV07XG4gICAgaWYgKCFwcm9wSGFuZGxlcikge1xuICAgICAgICBwcm9wSGFuZGxlciA9IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzW2F0dHJOYW1lXSB8fCBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyO1xuICAgICAgICB0YWdQcm9wSGFuZGxlcnNbYXR0ck5hbWVdID0gcHJvcEhhbmRsZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BIYW5kbGVyO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRQcm9wSGFuZGxlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIpOaWreWPmOabtOaYr+WQpuadpea6kOS6juWFg+e0oFxuICovXG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05piv5ZCm5p2l5rqQ5LqO5YWD57Sg77yM5p2l5rqQ5LqO5YWD57Sg5pe277yM6KeG5Zu+5pu05paw6ZyA6KaB6Zi75patXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDlj5jmm7Tlr7nosaFcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nP30gcHJvcE5hbWUg5bGe5oCn5ZCN77yM5Y+v6YCJ44CC6ZyA6KaB57K+56Gu5Yik5pat5piv5ZCm5p2l5rqQ5LqO5q2k5bGe5oCn5pe25Lyg5YWlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBlbGVtZW50LCBwcm9wTmFtZSkge1xuICAgIHZhciBjaGFuZ2VUYXJnZXQgPSBjaGFuZ2Uub3B0aW9uLnRhcmdldDtcbiAgICByZXR1cm4gY2hhbmdlVGFyZ2V0ICYmIGNoYW5nZVRhcmdldC5ub2RlID09PSBlbGVtZW50XG4gICAgICAgICYmICghcHJvcE5hbWUgfHwgY2hhbmdlVGFyZ2V0LnByb3AgPT09IHByb3BOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNEYXRhQ2hhbmdlQnlFbGVtZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Zyo5a+56LGh5LiK5L2/55SoYWNjZXNzb3Looajovr7lvI/mn6Xmib7mlrnms5VcbiAqL1xuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOWcqOWvueixoeS4iuS9v+eUqGFjY2Vzc29y6KGo6L6+5byP5p+l5om+5pa55rOVXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDmupDlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lRXhwciDooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBmaW5kTWV0aG9kKHNvdXJjZSwgbmFtZUV4cHIsIGRhdGEpIHtcbiAgICB2YXIgbWV0aG9kID0gc291cmNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IG1ldGhvZCAhPSBudWxsICYmIGkgPCBuYW1lRXhwci5wYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBtZXRob2RbZXZhbEV4cHIobmFtZUV4cHIucGF0aHNbaV0sIGRhdGEpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmaW5kTWV0aG9kO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5pWw5o2u57G7XG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ldmFsLWV4cHInKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4vZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG5cbi8qKlxuICog5pWw5o2u57G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdD99IGRhdGEg5Yid5aeL5pWw5o2uXG4gKiBAcGFyYW0ge01vZGVsP30gcGFyZW50IOeItue6p+aVsOaNruWuueWZqFxuICovXG5mdW5jdGlvbiBEYXRhKGRhdGEsIHBhcmVudCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucmF3ID0gZGF0YSB8fCB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG4vLyAjW2JlZ2luXSBlcnJvclxuLy8g5Lul5LiL5Lik5Liq5Ye95pWw5Y+q5Zyo5byA5Y+R5qih5byP5LiL5Y+v55So77yM5Zyo55Sf5Lqn5qih5byP5LiL5LiN5a2Y5ZyoXG4vKipcbiAqIERhdGFUeXBlcyDmo4DmtYtcbiAqL1xuRGF0YS5wcm90b3R5cGUuY2hlY2tEYXRhVHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHlwZUNoZWNrZXIpIHtcbiAgICAgICAgdGhpcy50eXBlQ2hlY2tlcih0aGlzLnJhdyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDorr7nva4gdHlwZSBjaGVja2VyXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOexu+Wei+agoemqjOWZqFxuICovXG5EYXRhLnByb3RvdHlwZS5zZXRUeXBlQ2hlY2tlciA9IGZ1bmN0aW9uICh0eXBlQ2hlY2tlcikge1xuICAgIHRoaXMudHlwZUNoZWNrZXIgPSB0eXBlQ2hlY2tlcjtcbn07XG5cbi8vICNbZW5kXVxuXG4vKipcbiAqIOa3u+WKoOaVsOaNruWPmOabtOeahOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICovXG5EYXRhLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbn07XG5cbi8qKlxuICog56e76Zmk5pWw5o2u5Y+Y5pu055qE5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkRhdGEucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCB0aGlzLmxpc3RlbmVyc1tsZW5dID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOinpuWPkeaVsOaNruWPmOabtFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5Y+Y5pu05L+h5oGv5a+56LGhXG4gKi9cbkRhdGEucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5vcHRpb24uc2lsZW50IHx8IGNoYW5nZS5vcHRpb24uc2lsZW5jZSB8fCBjaGFuZ2Uub3B0aW9uLnF1aWV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldLmNhbGwodGhpcywgY2hhbmdlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiOt+WPluaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdD99IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0RhdGE/fSBjYWxsZWUg5b2T5YmN5pWw5o2u6I635Y+W55qE6LCD55So546v5aKDXG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yYXc7XG4gICAgaWYgKCFleHByKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGV4cHIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG4gICAgfVxuXG4gICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjYWxsZWUgPSBjYWxsZWUgfHwgdGhpcztcblxuICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbMF0udmFsdWVdO1xuXG4gICAgaWYgKHZhbHVlID09IG51bGwgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnBhcmVudC5nZXQoZXhwciwgY2FsbGVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIOaVsOaNruWvueixoeWPmOabtOaTjeS9nFxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHNvdXJjZSDopoHlj5jmm7TnmoTmupDmlbDmja5cbiAqIEBwYXJhbSB7QXJyYXl9IGV4cHJQYXRocyDlsZ7mgKfot6/lvoRcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXRoc1N0YXJ0IOW9k+WJjeWkhOeQhueahOWxnuaAp+i3r+W+hOaMh+mSiOS9jee9rlxuICogQHBhcmFtIHtudW1iZXJ9IHBhdGhzTGVuIOWxnuaAp+i3r+W+hOmVv+W6plxuICogQHBhcmFtIHsqfSB2YWx1ZSDlj5jmm7TlsZ7mgKflgLxcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDlr7nlupTnmoREYXRh5a+56LGhXG4gKiBAcmV0dXJuIHsqfSDlj5jmm7TlkI7nmoTmlrDmlbDmja5cbiAqL1xuZnVuY3Rpb24gaW1tdXRhYmxlU2V0KHNvdXJjZSwgZXhwclBhdGhzLCBwYXRoc1N0YXJ0LCBwYXRoc0xlbiwgdmFsdWUsIGRhdGEpIHtcbiAgICBpZiAocGF0aHNTdGFydCA+PSBwYXRoc0xlbikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgIHNvdXJjZSA9IHt9O1xuICAgIH1cblxuICAgIHZhciBwYXRoRXhwciA9IGV4cHJQYXRoc1twYXRoc1N0YXJ0XTtcbiAgICB2YXIgcHJvcCA9IGV2YWxFeHByKHBhdGhFeHByLCBkYXRhKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlO1xuXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBpbmRleCA9ICtwcm9wO1xuICAgICAgICBwcm9wID0gaXNOYU4oaW5kZXgpID8gcHJvcCA6IGluZGV4O1xuXG4gICAgICAgIHJlc3VsdCA9IHNvdXJjZS5zbGljZSgwKTtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gaW1tdXRhYmxlU2V0KHNvdXJjZVtwcm9wXSwgZXhwclBhdGhzLCBwYXRoc1N0YXJ0ICsgMSwgcGF0aHNMZW4sIHZhbHVlLCBkYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBwcm9wICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFtwcm9wXSA9IGltbXV0YWJsZVNldChzb3VyY2VbcHJvcF0sIGV4cHJQYXRocywgcGF0aHNTdGFydCArIDEsIHBhdGhzTGVuLCB2YWx1ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhFeHByLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZXhwclBhdGhzW3BhdGhzU3RhcnRdID0ge1xuICAgICAgICAgICAgdHlwZTogdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnID8gMSA6IDIsXG4gICAgICAgICAgICB2YWx1ZTogcHJvcFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICog6K6+572u5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDmlbDmja7lgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZXhwciwgdmFsdWUsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIHNldDogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGlmICh0aGlzLmdldChleHByKSA9PT0gdmFsdWUgJiYgIW9wdGlvbi5mb3JjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwciA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgcGF0aHM6IGV4cHIucGF0aHMuc2xpY2UoMCksXG4gICAgICAgIHJhdzogZXhwci5yYXdcbiAgICB9O1xuXG4gICAgdmFyIHByb3AgPSBleHByLnBhdGhzWzBdLnZhbHVlO1xuICAgIHRoaXMucmF3W3Byb3BdID0gaW1tdXRhYmxlU2V0KHRoaXMucmF3W3Byb3BdLCBleHByLnBhdGhzLCAxLCBleHByLnBhdGhzLmxlbmd0aCwgdmFsdWUsIHRoaXMpO1xuXG4gICAgdGhpcy5maXJlKHtcbiAgICAgICAgdHlwZTogMSxcbiAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBvcHRpb246IG9wdGlvblxuICAgIH0pO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB0aGlzLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgLy8gI1tlbmRdXG5cbn07XG5cbi8qKlxuICog5ZCI5bm25pu05paw5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDlvoXlkIjlubbnmoTmlbDmja7lgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChleHByLCBzb3VyY2UsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIG1lcmdlOiAnICsgZXhwclJhdyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldChleHByKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBNZXJnZSBFeHBlY3RzIGEgVGFyZ2V0IG9mIFR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJyArIHR5cGVvZiBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gTWVyZ2UgRXhwZWN0cyBhIFNvdXJjZSBvZiBUeXBlIFxcJ29iamVjdFxcJzsgZ290ICcgKyB0eXBlb2Ygc291cmNlKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgdGhpcy5zZXQoXG4gICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICBleHByLnBhdGhzLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNvdXJjZVtrZXldLFxuICAgICAgICAgICAgb3B0aW9uXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDln7rkuo7mm7TmlrDlh73mlbDmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDmlbDmja7lpITnkIblh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChleHByLCBmbiwgb3B0aW9uKSB7XG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgYXBwbHk6ICcgKyBleHByUmF3KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmdldChleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnW1NBTiBFUlJPUl0gSW52YWxpZCBBcmd1bWVudFxcJ3MgVHlwZSBpbiBEYXRhIGFwcGx5OiAnXG4gICAgICAgICAgICArICdFeHBlY3RlZCBGdW5jdGlvbiBidXQgZ290ICcgKyB0eXBlb2YgZm5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB0aGlzLnNldChleHByLCBmbihvbGRWYWx1ZSksIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXNwbGljZeaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mgc3BsaWNlIOaOpeWPl+eahOWPguaVsOWIl+ihqO+8jOaVsOe7hOmhueS4jkFycmF5LnByb3RvdHlwZS5zcGxpY2XnmoTlj4LmlbDkuIDoh7RcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7QXJyYXl9IOaWsOaVsOe7hFxuICovXG5EYXRhLnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoZXhwciwgYXJncywgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIHNwbGljZTogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSB7XG4gICAgICAgIHR5cGU6IDQsXG4gICAgICAgIHBhdGhzOiBleHByLnBhdGhzLnNsaWNlKDApLFxuICAgICAgICByYXc6IGV4cHIucmF3XG4gICAgfTtcblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSBbXTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID4gbGVuKSB7XG4gICAgICAgICAgICBpbmRleCA9IGxlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gbGVuICsgaW5kZXg7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0FycmF5ID0gdGFyZ2V0LnNsaWNlKDApO1xuICAgICAgICByZXR1cm5WYWx1ZSA9IG5ld0FycmF5LnNwbGljZS5hcHBseShuZXdBcnJheSwgYXJncyk7XG5cbiAgICAgICAgdGhpcy5yYXcgPSBpbW11dGFibGVTZXQodGhpcy5yYXcsIGV4cHIucGF0aHMsIDAsIGV4cHIucGF0aHMubGVuZ3RoLCBuZXdBcnJheSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5maXJlKHtcbiAgICAgICAgICAgIGV4cHI6IGV4cHIsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgZGVsZXRlQ291bnQ6IHJldHVyblZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbHVlOiByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IGFyZ3Muc2xpY2UoMiksXG4gICAgICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHRoaXMuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICAvLyAjW2VuZF1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5cHVzaOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gaXRlbSDopoFwdXNo55qE5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4ge251bWJlcn0g5paw5pWw57uE55qEbGVuZ3Ro5bGe5oCnXG4gKi9cbkRhdGEucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZXhwciwgaXRlbSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFt0YXJnZXQubGVuZ3RoLCAwLCBpdGVtXSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggKyAxO1xuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5cG9w5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoZXhwciwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoZXhwciwgW2xlbiAtIDEsIDFdLCBvcHRpb24pWzBdO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblzaGlmdOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7Kn1cbiAqL1xuRGF0YS5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoZXhwciwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGV4cHIsIFswLCAxXSwgb3B0aW9uKVswXTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5dW5zaGlmdOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gaXRlbSDopoF1bnNoaWZ055qE5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4ge251bWJlcn0g5paw5pWw57uE55qEbGVuZ3Ro5bGe5oCnXG4gKi9cbkRhdGEucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoZXhwciwgaXRlbSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFswLCAwLCBpdGVtXSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggKyAxO1xuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG556e76Zmk5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOimgeenu+mZpOmhueeahOe0ouW8lVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKGV4cHIsIGluZGV4LCBvcHRpb24pIHtcbiAgICB0aGlzLnNwbGljZShleHByLCBbaW5kZXgsIDFdLCBvcHRpb24pO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobnnp7vpmaTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOimgeenu+mZpOeahOmhuVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChleHByLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRbbGVuXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShleHByLCBbbGVuLCAxXSwgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERhdGE7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDojrflj5blo7DmmI7lvI/kuovku7bnmoTnm5HlkKzlh73mlbBcbiAqL1xuXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG5cbi8qKlxuICog6I635Y+W5aOw5piO5byP5LqL5Lu255qE55uR5ZCs5Ye95pWwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QmluZCDnu5Hlrprkv6Hmga/lr7nosaFcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7njq/looNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wb25lbnRFdmVudCDmmK/lkKbnu4Tku7boh6rlrprkuYnkuovku7ZcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBnZXRFdmVudExpc3RlbmVyKGV2ZW50QmluZCwgb3duZXIsIGRhdGEsIGlzQ29tcG9uZW50RXZlbnQpIHtcbiAgICB2YXIgYXJncyA9IGV2ZW50QmluZC5leHByLmFyZ3M7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGlzQ29tcG9uZW50RXZlbnQgPyBlIDogZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgICAgdmFyIG1ldGhvZCA9IGZpbmRNZXRob2Qob3duZXIsIGV2ZW50QmluZC5leHByLm5hbWUsIGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWV0aG9kLmFwcGx5KFxuICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID8gZXZhbEFyZ3MoYXJncywgbmV3IERhdGEoeyAkZXZlbnQ6IGUgfSwgZGF0YSksIG93bmVyKSA6IFtdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50QmluZC5tb2RpZmllci5wcmV2ZW50KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudEJpbmQubW9kaWZpZXIuc3RvcCkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldEV2ZW50TGlzdGVuZXI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliKTmlq3lj5jmm7TmlbDnu4TmmK/lkKblvbHlk43liLDmlbDmja7lvJXnlKjmkZjopoFcbiAqL1xuXG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05pWw57uE5piv5ZCm5b2x5ZON5Yiw5pWw5o2u5byV55So5pGY6KaBXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDlj5jmm7TmlbDnu4RcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhUmVmIOaVsOaNruW8leeUqOaRmOimgVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIGRhdGFSZWYpIHtcbiAgICBpZiAoZGF0YVJlZikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWNoYW5nZS5vdmVydmlldykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IGNoYW5nZS5leHByLnBhdGhzO1xuICAgICAgICAgICAgICAgIGNoYW5nZS5vdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmV4dE92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWUgKyAnLicgKyBwYXRoc1sxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLndpbGRPdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlICsgJy4qJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhUmVmW2NoYW5nZS5vdmVydmlld11cbiAgICAgICAgICAgICAgICB8fCBjaGFuZ2Uud2lsZE92ZXJ2aWV3ICYmIGRhdGFSZWZbY2hhbmdlLndpbGRPdmVydmlld11cbiAgICAgICAgICAgICAgICB8fCBjaGFuZ2UuZXh0T3ZlcnZpZXcgJiYgZGF0YVJlZltjaGFuZ2UuZXh0T3ZlcnZpZXddXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2hhbmdlc0lzSW5EYXRhUmVmO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgaW5zZXJ0QmVmb3JlIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICovXG5cbi8qKlxuICogaW5zZXJ0QmVmb3JlIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICpcbiAqIEBwYXJhbSB7SFRNTE5vZGV9IHRhcmdldEVsIOimgeaPkuWFpeeahOiKgueCuVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gYmVmb3JlRWwg5Zyo5q2k5YWD57Sg5LmL5YmN5o+S5YWlXG4gKi9cbmZ1bmN0aW9uIGluc2VydEJlZm9yZSh0YXJnZXRFbCwgcGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgaWYgKHBhcmVudEVsKSB7XG4gICAgICAgIGlmIChiZWZvcmVFbCkge1xuICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRhcmdldEVsLCBiZWZvcmVFbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0YXJnZXRFbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGluc2VydEJlZm9yZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWFg+e0oOeahOWfuuacrOWxnuaAp1xuICovXG5cbnZhciBiYXNlUHJvcHMgPSB7XG4gICAgJ2NsYXNzJzogMSxcbiAgICAnc3R5bGUnOiAxLFxuICAgICdpZCc6IDFcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wcztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWFg+e0oOWtkOiKgueCuemBjeWOhuaTjeS9nOexu1xuICovXG5cbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog5YWD57Sg5a2Q6IqC54K56YGN5Y6G5pON5L2c57G7XG4gKlxuICogQGlubmVyXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIOimgemBjeWOhueahOWFg+e0oFxuICovXG5mdW5jdGlvbiBET01DaGlsZHJlbldhbGtlcihlbCkge1xuICAgIHRoaXMucmF3ID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50YXJnZXQgPSBlbDtcblxuICAgIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG5leHQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3QoY2hpbGQuZGF0YSB8fCBjaGlsZC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yYXdbdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufVxuXG4vKipcbiAqIOW+gOS4i+i1sOS4gOS4quWFg+e0oFxuICovXG5ET01DaGlsZHJlbldhbGtlci5wcm90b3R5cGUuZ29OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucmF3WysrdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBET01DaGlsZHJlbldhbGtlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWFg+e0oOiKgueCueexu1xuICovXG5cblxuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgY2hhbmdlc0lzSW5EYXRhUmVmID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2VzLWlzLWluLWRhdGEtcmVmJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBiYXNlUHJvcHMgPSByZXF1aXJlKCcuL2Jhc2UtcHJvcHMnKTtcbi8vIHZhciByZXZlcnNlRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4nKTtcbi8vIHZhciBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQgPSByZXF1aXJlKCcuL2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG4vLyB2YXIgZWxlbWVudE93bkRldGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGV0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoZWQgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaGVkJyk7XG4vLyB2YXIgbm9kZVNCaW5kSW5pdCA9IHJlcXVpcmUoJy4vbm9kZS1zLWJpbmQtaW5pdCcpO1xuLy8gdmFyIG5vZGVTQmluZFVwZGF0ZSA9IHJlcXVpcmUoJy4vbm9kZS1zLWJpbmQtdXBkYXRlJyk7XG4vLyB2YXIgd2FyblNldEhUTUwgPSByZXF1aXJlKCcuL3dhcm4tc2V0LWh0bWwnKTtcbi8vIHZhciBnZXROb2RlUGF0aCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtcGF0aCcpO1xuXG4vKipcbiAqIOWFg+e0oOiKgueCueexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge01vZGVsfSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBFbGVtZW50KGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IDVcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy50YWdOYW1lID0gYU5vZGUudGFnTmFtZTtcblxuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLy8gaWU4LSDkuI3mlK/mjIFpbm5lckhUTUzovpPlh7roh6rlrprkuYnmoIfnrb5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaWVPbGRUaGFuOSAmJiB0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnZGl2JztcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB0aGlzLl9zYmluZERhdGEgPSBub2RlU0JpbmRJbml0KGFOb2RlLmRpcmVjdGl2ZXMuYmluZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuaW5pdGVkO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgbm90IGZvdW5kLiBcXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgdHlwZSBub3QgbWF0Y2gsIGV4cGVjdCAxIGJ1dCAnXG4gICAgICAgICAgICAgICAgKyBjdXJyZW50Tm9kZS5ub2RlVHlwZSArICcuXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IHRhZ05hbWUgbm90IG1hdGNoLCBleHBlY3QgJ1xuICAgICAgICAgICAgICAgICsgdGhpcy50YWdOYW1lICsgJyBidXQgbWVhdCAnICsgY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJy5cXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuXG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcywgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuY3JlYXRlZDtcbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuYXR0YWNoZWQ7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuRWxlbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPSA0O1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZU5vZGUgPSB0aGlzLmFOb2RlLmhvdHNwb3Quc291cmNlTm9kZTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMuYU5vZGUucHJvcHM7XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IHNvdXJjZU5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3JlYXRlRWwodGhpcy50YWdOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NiaW5kRGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9zYmluZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NiaW5kRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wSGFuZGxlcih0aGlzLnRhZ05hbWUsIGtleSkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYmluZERhdGFba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgfHwgIWJhc2VQcm9wc1twcm9wLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3AuaGFuZGxlcih0aGlzLmVsLCB2YWx1ZSwgcHJvcC5uYW1lLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmNyZWF0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZW50UmVhZHkpIHtcbiAgICAgICAgICAgIHZhciBodG1sRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG5cbiAgICAgICAgICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICB3YXJuU2V0SFRNTCh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gZXZhbEV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuYU5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZEFOb2RlID0gdGhpcy5hTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRBTm9kZS5DbGF6elxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgY2hpbGRBTm9kZS5DbGF6eihjaGlsZEFOb2RlLCB0aGlzLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjcmVhdGVOb2RlKGNoaWxkQU5vZGUsIHRoaXMsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hdHRhY2godGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb250ZW50UmVhZHkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcblxuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5hdHRhY2hlZDtcbiAgICB9XG59O1xuXG5FbGVtZW50LnByb3RvdHlwZS5kZXRhY2ggPSBlbGVtZW50T3duRGV0YWNoO1xuRWxlbWVudC5wcm90b3R5cGUuZGlzcG9zZSA9IGVsZW1lbnRPd25EaXNwb3NlO1xuRWxlbWVudC5wcm90b3R5cGUuX29uRWwgPSBlbGVtZW50T3duT25FbDtcbkVsZW1lbnQucHJvdG90eXBlLl9sZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5sZWF2ZURpc3Bvc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltsZW5dLmRpc3Bvc2UoMSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxlbiA9IHRoaXMuX2VsRm5zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IHRoaXMuX2VsRm5zW2xlbl07XG4gICAgICAgICAgICAgICAgdW4odGhpcy5lbCwgZm5bMF0sIGZuWzFdLCBmblsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9lbEZucyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dFRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnB1dFRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dFRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlwYXJlbnTvvIzor7TmmI7mmK/kuIDkuKpyb290IGNvbXBvbmVudO+8jOS4gOWumuimgeS7jmRvbeagkeS4rXJlbW92ZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc3Bvc2VOb0RldGFjaCB8fCAhdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuZGV0YWNoZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuZGlzcG9zZWQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vbmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25kaXNwb3NlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDop4blm77mm7TmlrBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICB2YXIgZGF0YUhvdHNwb3QgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZGF0YTtcbiAgICBpZiAoZGF0YUhvdHNwb3QgJiYgY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIGRhdGFIb3RzcG90KSkge1xuXG4gICAgICAgIC8vIHVwZGF0ZSBzLWJpbmRcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2JpbmREYXRhID0gbm9kZVNCaW5kVXBkYXRlKFxuICAgICAgICAgICAgdGhpcy5hTm9kZS5kaXJlY3RpdmVzLmJpbmQsXG4gICAgICAgICAgICB0aGlzLl9zYmluZERhdGEsXG4gICAgICAgICAgICB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgdGhpcy5vd25lcixcbiAgICAgICAgICAgIGNoYW5nZXMsXG4gICAgICAgICAgICBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSBpbiBtZS5hTm9kZS5ob3RzcG90LnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnZXRQcm9wSGFuZGxlcihtZS50YWdOYW1lLCBuYW1lKShtZS5lbCwgdmFsdWUsIG5hbWUsIG1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyB1cGRhdGUgcHJvcFxuICAgICAgICB2YXIgZHluYW1pY1Byb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBkeW5hbWljUHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IGR5bmFtaWNQcm9wc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IHByb3AubmFtZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGNoYW5nZUxlbiA9IGNoYW5nZXMubGVuZ3RoOyBqIDwgY2hhbmdlTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tqXTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgdGhpcywgcHJvcE5hbWUpXG4gICAgICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmV4cHIsIHRoaXMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBwcm9wLmhpbnRFeHByICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmhpbnRFeHByLCB0aGlzLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3AuaGFuZGxlcih0aGlzLmVsLCBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpLCBwcm9wTmFtZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjb250ZW50XG4gICAgICAgIHZhciBodG1sRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG4gICAgICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gY2hhbmdlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlc1tsZW5dLmV4cHIsIGh0bWxEaXJlY3RpdmUudmFsdWUsIHRoaXMuc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHdhcm5TZXRIVE1MKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGV2YWxFeHByKGh0bWxEaXJlY3RpdmUudmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5fdXBkYXRlKGNoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDmiafooYzlrozmiJBhdHRhY2hlZOeKtuaAgeeahOihjOS4ulxuICovXG5FbGVtZW50LnByb3RvdHlwZS5fYXR0YWNoZWQgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliJvlu7roioLngrnlr7nlupTnmoQgc3R1bXAgY29tbWVudCDlhYPntKBcbiAqL1xuXG5cblxuLyoqXG4gKiDliJvlu7roioLngrnlr7nlupTnmoQgc3R1bXAgY29tbWVudCDkuLvlhYPntKBcbiAqL1xuZnVuY3Rpb24gbm9kZU93bkNyZWF0ZVN0dW1wKCkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsIHx8IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25DcmVhdGVTdHVtcDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOmUgOavgemHiuaUvuWFg+e0oOeahOWtkOWFg+e0oFxuICovXG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+5YWD57Sg55qE5a2Q5YWD57SgXG4gKlxuICogQHBhcmFtIHtBcnJheT19IGNoaWxkcmVuIOWtkOWFg+e0oOaVsOe7hFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4oY2hpbGRyZW4sIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB2YXIgbGVuID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBjaGlsZHJlbltsZW5dLmRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50RGlzcG9zZUNoaWxkcmVuO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg566A5Y2V5omn6KGM6ZSA5q+B6IqC54K555qE6KGM5Li6XG4gKi9cblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcblxuLyoqXG4gKiDnroDljZXmiafooYzplIDmr4HoioLngrnnmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqL1xuZnVuY3Rpb24gbm9kZU93blNpbXBsZURpc3Bvc2Uobm9EZXRhY2gpIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMuY2hpbGRyZW4sIG5vRGV0YWNoLCAxKTtcblxuICAgIGlmICghbm9EZXRhY2gpIHtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgdGhpcy5vd25lciA9IG51bGw7XG4gICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5kaXNwb3NlZDtcbiAgICBpZiAodGhpcy5fb25kaXNwb3NlZCkge1xuICAgICAgICB0aGlzLl9vbmRpc3Bvc2VkKCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duU2ltcGxlRGlzcG9zZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOW8guatpee7hOS7tuexu1xuICovXG5cbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIG5vZGVPd25DcmVhdGVTdHVtcCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tY3JlYXRlLXN0dW1wJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG5cblxuLyoqXG4gKiDlvILmraXnu4Tku7bnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWIneWni+WMluWPguaVsFxuICogQHBhcmFtIHtPYmplY3R9IGxvYWRlciDnu4Tku7bliqDovb3lmahcbiAqL1xuZnVuY3Rpb24gQXN5bmNDb21wb25lbnQob3B0aW9ucywgbG9hZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICB2YXIgcmV2ZXJzZVdhbGtlciA9IG9wdGlvbnMucmV2ZXJzZVdhbGtlcjtcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB2YXIgUGxhY2Vob2xkZXJDb21wb25lbnQgPSB0aGlzLmxvYWRlci5wbGFjZWhvbGRlcjtcbiAgICAgICAgaWYgKFBsYWNlaG9sZGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuWzBdID0gbmV3IFBsYWNlaG9sZGVyQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvYWRlci5zdGFydChmdW5jdGlvbiAoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgICAgIG1lLm9ubG9hZChDb21wb25lbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvcHRpb25zLnJldmVyc2VXYWxrZXIgPSBudWxsO1xuICAgIC8vICNbZW5kXVxufVxuXG5Bc3luY0NvbXBvbmVudC5wcm90b3R5cGUuX2NyZWF0ZSA9IG5vZGVPd25DcmVhdGVTdHVtcDtcbkFzeW5jQ29tcG9uZW50LnByb3RvdHlwZS5kaXNwb3NlID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cbi8qKlxuICogYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuQXN5bmNDb21wb25lbnQucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB2YXIgUGxhY2Vob2xkZXJDb21wb25lbnQgPSB0aGlzLmxvYWRlci5wbGFjZWhvbGRlcjtcbiAgICBpZiAoUGxhY2Vob2xkZXJDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBQbGFjZWhvbGRlckNvbXBvbmVudCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuWzBdID0gY29tcG9uZW50O1xuICAgICAgICBjb21wb25lbnQuYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHRoaXMubG9hZGVyLnN0YXJ0KGZ1bmN0aW9uIChDb21wb25lbnRDbGFzcykge1xuICAgICAgICBtZS5vbmxvYWQoQ29tcG9uZW50Q2xhc3MpO1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqIGxvYWRlcuWKoOi9veWujOaIkO+8jOa4suafk+e7hOS7tlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAqL1xuQXN5bmNDb21wb25lbnQucHJvdG90eXBlLm9ubG9hZCA9IGZ1bmN0aW9uIChDb21wb25lbnRDbGFzcykge1xuICAgIGlmICh0aGlzLmVsICYmIENvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50Q2xhc3ModGhpcy5vcHRpb25zKTtcbiAgICAgICAgY29tcG9uZW50LmF0dGFjaCh0aGlzLmVsLnBhcmVudE5vZGUsIHRoaXMuZWwpO1xuXG4gICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbiA9IHRoaXMub3B0aW9ucy5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGlmICh0aGlzLnBhcmVudEluZGV4ID09IG51bGwgfHwgcGFyZW50Q2hpbGRyZW5bdGhpcy5wYXJlbnRJbmRleF0gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGVhY2gocGFyZW50Q2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBc3luY0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Q2hpbGRyZW5bdGhpcy5wYXJlbnRJbmRleF0gPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlKCk7XG59O1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkFzeW5jQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICB0aGlzLmNoaWxkcmVuWzBdICYmIHRoaXMuY2hpbGRyZW5bMF0uX3VwZGF0ZShjaGFuZ2VzKTtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEFzeW5jQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6YCa6L+H57uE5Lu25Y+N6Kej5Yib5bu66IqC54K555qE5bel5Y6C5pa55rOVXG4gKi9cblxuLy8gdmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbi8vIHZhciBBc3luY0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXN5bmMtY29tcG9uZW50Jyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog6YCa6L+H57uE5Lu25Y+N6Kej5Yib5bu66IqC54K5XG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcn0gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIGlmIChhTm9kZS5DbGF6eikge1xuICAgICAgICByZXR1cm4gbmV3IGFOb2RlLkNsYXp6KGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcik7XG4gICAgfVxuXG4gICAgdmFyIENvbXBvbmVudE9yTG9hZGVyID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZVxuICAgICAgICA/IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUsIHNjb3BlKVxuICAgICAgICA6IG93bmVyLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG5cbiAgICBpZiAoQ29tcG9uZW50T3JMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnRPckxvYWRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBuZXcgQ29tcG9uZW50T3JMb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcjogcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbmV3IEFzeW5jQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFOb2RlLFxuICAgICAgICAgICAgICAgIG93bmVyOiBvd25lcixcbiAgICAgICAgICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgc3ViVGFnOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXI6IHJldmVyc2VXYWxrZXJcbiAgICAgICAgICAgIH0sIENvbXBvbmVudE9yTG9hZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKTtcbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZXZlcnNlTm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICovXG5cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBET01DaGlsZHJlbldhbGtlciA9IHJlcXVpcmUoJy4vZG9tLWNoaWxkcmVuLXdhbGtlcicpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2VcblxuLyoqXG4gKiDlr7nlhYPntKDnmoTlrZDoioLngrnov5vooYzlj43op6NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKBcbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbihlbGVtZW50LCBzY29wZSwgb3duZXIpIHtcbiAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuXG4gICAgaWYgKCFodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgIHZhciByZXZlcnNlV2Fsa2VyID0gbmV3IERPTUNoaWxkcmVuV2Fsa2VyKGVsZW1lbnQuZWwpO1xuICAgICAgICB2YXIgYU5vZGVDaGlsZHJlbiA9IGVsZW1lbnQuYU5vZGUuY2hpbGRyZW47XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFOb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICAgICAgY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZHJlbltpXSwgZWxlbWVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXZlcnNlRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu66IqC54K555qE5bel5Y6C5pa55rOVXG4gKi9cblxuLy8gdmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbi8vIHZhciBBc3luY0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXN5bmMtY29tcG9uZW50Jyk7XG5cblxuLyoqXG4gKiDliJvlu7roioLngrlcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lcikge1xuICAgIGlmIChhTm9kZS5DbGF6eikge1xuICAgICAgICByZXR1cm4gbmV3IGFOb2RlLkNsYXp6KGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lcik7XG4gICAgfVxuXG4gICAgdmFyIENvbXBvbmVudE9yTG9hZGVyID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZVxuICAgICAgICA/IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUsIHNjb3BlKVxuICAgICAgICA6IG93bmVyLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG5cbiAgICBpZiAoQ29tcG9uZW50T3JMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnRPckxvYWRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBuZXcgQ29tcG9uZW50T3JMb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG5ldyBBc3luY0NvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBhTm9kZSxcbiAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuICAgICAgICAgICAgfSwgQ29tcG9uZW50T3JMb2FkZXIpO1xuICAgIH1cblxuICAgIGFOb2RlLkNsYXp6ID0gRWxlbWVudDtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiOt+WPliBlbGVtZW50IOeahCB0cmFuc2l0aW9uIOaOp+WItuWvueixoVxuICovXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8qKlxuICog6I635Y+WIGVsZW1lbnQg55qEIHRyYW5zaXRpb24g5o6n5Yi25a+56LGhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57SgXG4gKiBAcmV0dXJuIHtPYmplY3Q/fVxuICovXG5mdW5jdGlvbiBlbGVtZW50R2V0VHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uO1xuICAgIHZhciBvd25lciA9IGVsZW1lbnQub3duZXI7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gNSkge1xuICAgICAgICB2YXIgY21wdEdpdmVuVHJhbnNpdGlvbiA9IGVsZW1lbnQuc291cmNlICYmIGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMudHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNtcHRHaXZlblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGNtcHRHaXZlblRyYW5zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvd25lciA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbjtcbiAgICBpZiAoZGlyZWN0aXZlICYmIG93bmVyKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSBmaW5kTWV0aG9kKG93bmVyLCBkaXJlY3RpdmUudmFsdWUubmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5hcHBseShcbiAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICBldmFsQXJncyhkaXJlY3RpdmUudmFsdWUuYXJncywgZWxlbWVudC5zY29wZSwgb3duZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zaXRpb24gfHwgZWxlbWVudC50cmFuc2l0aW9uO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50R2V0VHJhbnNpdGlvbjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICovXG5cbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuXG4vKipcbiAqIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duRGV0YWNoKCkge1xuICAgIHZhciBsaWZlQ3ljbGUgPSB0aGlzLmxpZmVDeWNsZTtcbiAgICBpZiAobGlmZUN5Y2xlLmxlYXZpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNwb3NlTm9UcmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24odGhpcyk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5sZWF2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGhhc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90b1BoYXNlKCdsZWF2aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5sZWF2aW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5sZWF2ZSh0aGlzLmVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWUuX2xlYXZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbGVhdmUoKTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duRGV0YWNoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57SgXG4gKi9cblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMubGVhdmVEaXNwb3NlID0gMTtcbiAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCA9IG5vRGV0YWNoO1xuICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvbiA9IG5vVHJhbnNpdGlvbjtcblxuICAgIHRoaXMuZGV0YWNoKCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25EaXNwb3NlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Li65YWD57Sg55qEIGVsIOe7keWumuS6i+S7tlxuICovXG5cbi8vIHZhciBvbiA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvb24nKTtcblxuLyoqXG4gKiDkuLrlhYPntKDnmoQgZWwg57uR5a6a5LqL5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrXop6blj5FcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bk9uRWwobmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICBjYXB0dXJlID0gISFjYXB0dXJlO1xuICAgIHRoaXMuX2VsRm5zLnB1c2goW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSk7XG4gICAgb24odGhpcy5lbCwgbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duT25FbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOaYr+WQpua1j+iniOWZqOeOr+Wig1xuICovXG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNCcm93c2VyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5byA5Y+R5pe255qE6K2m5ZGK5o+Q56S6XG4gKi9cblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5byA5Y+R5pe255qE6K2m5ZGK5o+Q56S6XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Ug6K2m5ZGK5L+h5oGvXG4gKi9cbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIG1lc3NhZ2UgPSAnW1NBTiBXQVJOSU5HXSAnICsgbWVzc2FnZTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOmYsuatouitpuWRiuS4reaWreiwg+eUqOWghuagiFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm47XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSAg5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIHdhcm4gPSByZXF1aXJlKCcuLi91dGlsL3dhcm4nKTtcblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOS6i+S7tue7keWumuWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnueahOe7hOS7tuWvueixoVxuICovXG5mdW5jdGlvbiB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcikge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgdmFyIG1ldGhvZCA9IG93bmVyO1xuICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kW3BhdGgudmFsdWVdO1xuICAgICAgICB2YWxpZCA9ICEhbWV0aG9kO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICBlYWNoKGV2ZW50QmluZC5leHByLm5hbWUucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3YXJuKGV2ZW50QmluZC5uYW1lICsgJyBsaXN0ZW4gZmFpbCxcIicgKyBwYXRocy5qb2luKCcuJykgKyAnXCIgbm90IGV4aXN0Jyk7XG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm5FdmVudExpc3Rlbk1ldGhvZDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqL1xuXG5cbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZW1wdHknKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciB0cmlnZ2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci90cmlnZ2VyJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGVsZW1lbnRHZXRUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9lbGVtZW50LWdldC10cmFuc2l0aW9uJyk7XG4vLyB2YXIgZ2V0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vZ2V0LWV2ZW50LWxpc3RlbmVyJyk7XG4vLyB2YXIgd2FybkV2ZW50TGlzdGVuTWV0aG9kID0gcmVxdWlyZSgnLi93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QnKTtcblxuLyoqXG4gKiDlj4znu5HovpPlhaXmoYZDb21wb3NpdGlvbkVuZOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25FbmQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb3NpbmcgPSAwO1xuICAgIHRyaWdnZXIodGhpcywgJ2lucHV0Jyk7XG59XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25TdGFydOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmNvbXBvc2luZyA9IDE7XG59XG5cbmZ1bmN0aW9uIGdldFhQcm9wT3V0cHV0ZXIoZWxlbWVudCwgeFByb3AsIGRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB4UHJvcE91dHB1dChlbGVtZW50LCB4UHJvcCwgZGF0YSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRYUHJvcE91dHB1dGVyKGVsZW1lbnQsIHhQcm9wLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICAgICAgeFByb3BPdXRwdXQoZWxlbWVudCwgeFByb3AsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXRJbnB1dEZvY3VzWFByb3BIYW5kbGVyKGVsZW1lbnQsIHhQcm9wLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5faW5wdXRUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHhQcm9wT3V0cHV0KGVsZW1lbnQsIHhQcm9wLCBkYXRhKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXRJbnB1dEJsdXJYUHJvcEhhbmRsZXIoZWxlbWVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZWxlbWVudC5faW5wdXRUaW1lcik7XG4gICAgICAgIGVsZW1lbnQuX2lucHV0VGltZXIgPSBudWxsO1xuICAgIH07XG59XG4vLyAjW2VuZF1cblxuZnVuY3Rpb24geFByb3BPdXRwdXQoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWVsZW1lbnQubGlmZUN5Y2xlLmNyZWF0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbCA9IGVsZW1lbnQuZWw7XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnaW5wdXQnICYmIGJpbmRJbmZvLm5hbWUgPT09ICdjaGVja2VkJykge1xuICAgICAgICB2YXIgYmluZFZhbHVlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd2YWx1ZScpO1xuICAgICAgICB2YXIgYmluZFR5cGUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3R5cGUnKTtcblxuICAgICAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVsLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtlbC5jaGVja2VkID8gJ3B1c2gnIDogJ3JlbW92ZSddKGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkICYmIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsW2JpbmRJbmZvLm5hbWVdLCB7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgbm9kZTogZWxlbWVudCxcbiAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciBpc0NvbXBvbmVudCA9IHRoaXMubm9kZVR5cGUgPT09IDU7XG4gICAgICAgIHZhciBkYXRhID0gaXNDb21wb25lbnQgPyB0aGlzLmRhdGEgOiB0aGlzLnNjb3BlO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuXG4gICAgICAgIC8vIOWkhOeQhuiHqui6q+WPmOWMluaXtuWPjOWQkee7keWumueahOmAu+i+kVxuICAgICAgICB2YXIgeFByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LnhQcm9wcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4UHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeFByb3AgPSB4UHJvcHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoeFByb3AubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5Db21wb3NpdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NoYW5nZScsIGlucHV0T25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uc3RhcnQnLCBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uZW5kJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdvbmlucHV0JyBpbiB0aGlzLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2lucHV0JywgZ2V0SW5wdXRYUHJvcE91dHB1dGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2ZvY3VzaW4nLCBnZXRJbnB1dEZvY3VzWFByb3BIYW5kbGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2ZvY3Vzb3V0JywgZ2V0SW5wdXRCbHVyWFByb3BIYW5kbGVyKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjaGFuZ2UnLCBnZXRYUHJvcE91dHB1dGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NsaWNrJywgZ2V0WFByb3BPdXRwdXRlcih0aGlzLCB4UHJvcCwgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvd25lciA9IGlzQ29tcG9uZW50ID8gdGhpcyA6IHRoaXMub3duZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5hTm9kZS5ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRCaW5kID0gdGhpcy5hTm9kZS5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcik7XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgdGhpcy5fb25FbChcbiAgICAgICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgICAgICBnZXRFdmVudExpc3RlbmVyKGV2ZW50QmluZCwgb3duZXIsIGRhdGEsIGV2ZW50QmluZC5tb2RpZmllciksXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kLm1vZGlmaWVyLmNhcHR1cmVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5uYXRpdmVFdmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50QmluZCA9IHRoaXMubmF0aXZlRXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QmluZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBnZXRFdmVudExpc3RlbmVyKGV2ZW50QmluZCwgdGhpcy5vd25lciwgdGhpcy5zY29wZSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QmluZC5tb2RpZmllci5jYXB0dXJlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24odGhpcyk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24uZW50ZXIpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZW50ZXIodGhpcy5lbCwgZW1wdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliJ3lp4vljJboioLngrnnmoQgcy1iaW5kIOaVsOaNrlxuICovXG5cblxuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcblxuLyoqXG4gKiDliJ3lp4vljJboioLngrnnmoQgcy1iaW5kIOaVsOaNrlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzQmluZCBiaW5k5oyH5Luk5a+56LGhXG4gKiBAcGFyYW0ge01vZGVsfSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vZGVTQmluZEluaXQoc0JpbmQsIHNjb3BlLCBvd25lcikge1xuICAgIGlmIChzQmluZCAmJiBzY29wZSkge1xuICAgICAgICByZXR1cm4gZXZhbEV4cHIoc0JpbmQudmFsdWUsIHNjb3BlLCBvd25lcik7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlU0JpbmRJbml0O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K6h566X5Lik5Liq5a+56LGhIGtleSDnmoTlubbpm4ZcbiAqL1xuXG4vKipcbiAqIOiuoeeul+S4pOS4quWvueixoSBrZXkg55qE5bm26ZuGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMiDmupDlr7nosaFcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiB1bmlvbktleXMob2JqMSwgb2JqMikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gb2JqMSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9iajIpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgIGlmIChvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICFvYmoxW2tleV0gJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHVuaW9uS2V5cztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOabtOaWsOiKgueCueeahCBzLWJpbmQg5pWw5o2uXG4gKi9cblxuLy8gdmFyIHVuaW9uS2V5cyA9IHJlcXVpcmUoJy4uL3V0aWwvdW5pb24ta2V5cycpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuXG4vKipcbiAqIOabtOaWsOiKgueCueeahCBzLWJpbmQg5pWw5o2uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNCaW5kIGJpbmTmjIfku6Tlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRCaW5kRGF0YSDlvZPliY1zLWJpbmTmlbDmja5cbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDlj5jmm7TmlbDnu4RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZXIg57uR5a6a5a+56LGh5a2Q6aG55Y+Y5pu055qE5pu05paw5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIG5vZGVTQmluZFVwZGF0ZShzQmluZCwgb2xkQmluZERhdGEsIHNjb3BlLCBvd25lciwgY2hhbmdlcywgdXBkYXRlcikge1xuICAgIGlmIChzQmluZCkge1xuICAgICAgICB2YXIgbGVuID0gY2hhbmdlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlc1tsZW5dLmV4cHIsIHNCaW5kLnZhbHVlLCBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmluZERhdGEgPSBldmFsRXhwcihzQmluZC52YWx1ZSwgc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHVuaW9uS2V5cyhuZXdCaW5kRGF0YSwgb2xkQmluZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV3QmluZERhdGFba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG9sZEJpbmREYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QmluZERhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZVNCaW5kVXBkYXRlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yik5pat5YWD57Sg5piv5ZCm5LiN5YWB6K646K6+572uSFRNTFxuICovXG5cbi8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbi8vIHNlZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyhWUy44NSkuYXNweFxuXG4vKipcbiAqIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vU2V0SFRNTChlbCkge1xuICAgIHJldHVybiAvXihjb2x8Y29sZ3JvdXB8ZnJhbWVzZXR8c3R5bGV8dGFibGV8dGJvZHl8dGZvb3R8dGhlYWR8dHJ8c2VsZWN0KSQvaS50ZXN0KGVsLnRhZ05hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub1NldEhUTUw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSAg6I635Y+W6IqC54K5IHN0dW1wIOeahCBjb21tZW50XG4gKi9cblxuLy8gdmFyIG5vU2V0SFRNTCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvbm8tc2V0LWh0bWwnKTtcbi8vIHZhciB3YXJuID0gcmVxdWlyZSgnLi4vdXRpbC93YXJuJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEhUTUzlhYPntKBcbiAqL1xuZnVuY3Rpb24gd2FyblNldEhUTUwoZWwpIHtcbiAgICAvLyBkb250IHdhcm4gaWYgbm90IGluIGJyb3dzZXIgcnVudGltZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbiAgICAvLyBzZWU6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzM4OTcoVlMuODUpLmFzcHhcbiAgICBpZiAobm9TZXRIVE1MKGVsKSkge1xuICAgICAgICB3YXJuKCdzZXQgaHRtbCBmb3IgZWxlbWVudCBcIicgKyBlbC50YWdOYW1lICsgJ1wiIG1heSBjYXVzZSBhbiBlcnJvciBpbiBvbGQgSUUnKTtcbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2FyblNldEhUTUw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDojrflj5boioLngrnlnKjnu4Tku7bmoJHkuK3nmoTot6/lvoRcbiAqL1xuXG5cbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog6I635Y+W6IqC54K55Zyo57uE5Lu25qCR5Lit55qE6Lev5b6EXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIOiKgueCueWvueixoVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXROb2RlUGF0aChub2RlKSB7XG4gICAgdmFyIG5vZGVQYXRocyA9IFtdO1xuICAgIHZhciBub2RlUGFyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAobm9kZVBhcmVudCkge1xuICAgICAgICBzd2l0Y2ggKG5vZGVQYXJlbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdChub2RlUGFyZW50LnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2lmJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnZm9yWycgKyBub2RlUGFyZW50LmFub2RlLmRpcmVjdGl2ZXNbJ2ZvciddLnJhdyArICddJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnc2xvdFsnICsgKG5vZGVQYXJlbnQubmFtZSB8fCAnZGVmYXVsdCcpICsgJ10nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCd0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2NvbXBvbmVudFsnICsgKG5vZGVQYXJlbnQuc3ViVGFnIHx8ICdyb290JykgKyAnXScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVQYXJlbnQgPSBub2RlUGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVBhdGhzO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldE5vZGVQYXRoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKi9cblxuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuXG4vLyAjW2JlZ2luXSBkZXZ0b29sXG52YXIgc2FuNGRldnRvb2w7XG5cbi8qKlxuICog57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyp9IGFyZyDmtojmga/lj4LmlbBcbiAqL1xuZnVuY3Rpb24gZW1pdERldnRvb2wobmFtZSwgYXJnKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzQnJvd3NlciAmJiBzYW40ZGV2dG9vbCAmJiBzYW40ZGV2dG9vbC5kZWJ1ZyAmJiB3aW5kb3cuX19zYW5fZGV2dG9vbF9fKSB7XG4gICAgICAgIHdpbmRvdy5fX3Nhbl9kZXZ0b29sX18uZW1pdChuYW1lLCBhcmcpO1xuICAgIH1cbn1cblxuZW1pdERldnRvb2wuc3RhcnQgPSBmdW5jdGlvbiAobWFpbikge1xuICAgIHNhbjRkZXZ0b29sID0gbWFpbjtcbiAgICBlbWl0RGV2dG9vbCgnc2FuJywgbWFpbik7XG59O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVtaXREZXZ0b29sO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57uE5Lu257G7XG4gKi9cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuLi91dGlsL2JpbmQnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG4vLyB2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCcuLi91dGlsL25leHQtdGljaycpO1xuLy8gdmFyIGVtaXREZXZ0b29sID0gcmVxdWlyZSgnLi4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciB1biA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvdW4nKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNvbXBpbGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyB2YXIgcHJlaGVhdEFOb2RlID0gcmVxdWlyZSgnLi9wcmVoZWF0LWEtbm9kZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgaXNEYXRhQ2hhbmdlQnlFbGVtZW50ID0gcmVxdWlyZSgnLi9pcy1kYXRhLWNoYW5nZS1ieS1lbGVtZW50Jyk7XG4vLyB2YXIgZ2V0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vZ2V0LWV2ZW50LWxpc3RlbmVyJyk7XG4vLyB2YXIgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vcmV2ZXJzZS1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIG5vZGVTQmluZEluaXQgPSByZXF1aXJlKCcuL25vZGUtcy1iaW5kLWluaXQnKTtcbi8vIHZhciBub2RlU0JpbmRVcGRhdGUgPSByZXF1aXJlKCcuL25vZGUtcy1iaW5kLXVwZGF0ZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hlZCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoZWQnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgY3JlYXRlRGF0YVR5cGVzQ2hlY2tlciA9IHJlcXVpcmUoJy4uL3V0aWwvY3JlYXRlLWRhdGEtdHlwZXMtY2hlY2tlcicpO1xuLy8gdmFyIHdhcm4gPSByZXF1aXJlKCcuLi91dGlsL3dhcm4nKTtcblxuXG5cblxuLyoqXG4gKiDnu4Tku7bnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWIneWni+WMluWPguaVsFxuICovXG5mdW5jdGlvbiBDb21wb25lbnQob3B0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGZvciAodmFyIGtleSBpbiBDb21wb25lbnQucHJvdG90eXBlKSB7XG4gICAgICAgIGlmICh0aGlzW2tleV0gIT09IENvbXBvbmVudC5wcm90b3R5cGVba2V5XSkge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgICAgICAgd2FybignXFxgJyArIGtleSArICdcXGAgaXMgYSByZXNlcnZlZCBrZXkgb2Ygc2FuIGNvbXBvbmVudHMuIE92ZXJyaWRpbmcgdGhpcyBwcm9wZXJ0eSBtYXkgY2F1c2UgdW5rbm93biBleGNlcHRpb25zLicpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuaW1wbGljaXRDaGlsZHJlbiA9IFtdO1xuXG4gICAgdmFyIGNsYXp6ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBjbGF6ei5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkIHx8IGNsYXp6LmNvbXB1dGVkIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzIHx8IGNsYXp6Lm1lc3NhZ2VzIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBvcHRpb25zLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgdGhpcy5zdWJUYWcgPSBvcHRpb25zLnN1YlRhZztcblxuICAgIC8vIGNvbXBpbGVcbiAgICBjb21waWxlQ29tcG9uZW50KGNsYXp6KTtcblxuICAgIHZhciBwcm90b0FOb2RlID0gY2xhenoucHJvdG90eXBlLmFOb2RlO1xuICAgIHByZWhlYXRBTm9kZShwcm90b0FOb2RlKTtcblxuXG4gICAgdGhpcy50YWdOYW1lID0gcHJvdG9BTm9kZS50YWdOYW1lO1xuICAgIHRoaXMuc291cmNlID0gdHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHBhcnNlVGVtcGxhdGUob3B0aW9ucy5zb3VyY2UpLmNoaWxkcmVuWzBdXG4gICAgICAgIDogb3B0aW9ucy5zb3VyY2U7XG4gICAgcHJlaGVhdEFOb2RlKHRoaXMuc291cmNlKTtcblxuXG4gICAgdGhpcy5zb3VyY2VTbG90TmFtZVByb3BzID0gW107XG4gICAgdGhpcy5zb3VyY2VTbG90cyA9IHtcbiAgICAgICAgbmFtZWQ6IHt9XG4gICAgfTtcblxuXG4gICAgdGhpcy5vd25lciA9IG9wdGlvbnMub3duZXI7XG4gICAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG4gICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG5cbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IDVcbiAgICAgICAgICAgID8gcGFyZW50XG4gICAgICAgICAgICA6IHBhcmVudCAmJiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm93bmVyKSB7XG4gICAgICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gdGhpcy5vd25lcjtcbiAgICAgICAgdGhpcy5zY29wZSA9IHRoaXMub3duZXIuZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgIHZhciBmaXJzdENvbW1lbnROb2RlID0gdGhpcy5lbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDb21tZW50Tm9kZSAmJiBmaXJzdENvbW1lbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBmaXJzdENvbW1lbnROb2RlID0gZmlyc3RDb21tZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdENvbW1lbnROb2RlICYmIGZpcnN0Q29tbWVudE5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIHZhciBzdHVtcE1hdGNoID0gZmlyc3RDb21tZW50Tm9kZS5kYXRhLm1hdGNoKC9eXFxzKnMtZGF0YTooW1xcc1xcU10rKT8kLyk7XG4gICAgICAgICAgICBpZiAoc3R1bXBNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHVtcFRleHQgPSBzdHVtcE1hdGNoWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBjb21wb25lbnQgZGF0YVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnXG4gICAgICAgICAgICAgICAgICAgICsgc3R1bXBUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXltcXHNcXG5dKi8sICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgL1wiKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSlcXC5cXGQrWlwiL2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB5LCBtb24sIGQsIGgsIG0sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduZXcgRGF0ZSgnICsgKCt5KSArICcsJyArICgrbW9uKSArICcsJyArICgrZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJywnICsgKCtoKSArICcsJyArICgrbSkgKyAnLCcgKyAoK3MpICsgJyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApKSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWwoZmlyc3RDb21tZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICAvLyBuYXRpdmXkuovku7bmlbDnu4RcbiAgICB0aGlzLm5hdGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgIC8vIOe7hOS7tui/kOihjOaXtuS8oOWFpeeahOe7k+aehO+8jOWBmnNsb3Top6PmnpBcbiAgICAgICAgdGhpcy5faW5pdFNvdXJjZVNsb3RzKDEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5zb3VyY2UuZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50QmluZCA9IHRoaXMuc291cmNlLmV2ZW50c1tpXTtcbiAgICAgICAgICAgIC8vIOS/neWtmOW9k+WJjeWunuS+i+eahG5hdGl2ZeS6i+S7tu+8jOS4i+mdouWIm+W7umFOb2Rl5pe25YCZ5YGa5ZCI5bm2XG4gICAgICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLm5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRXZlbnRzLnB1c2goZXZlbnRCaW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3B0aW9ucy5vd25lcik7XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFxuICAgICAgICAgICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXZlbnRMaXN0ZW5lcihldmVudEJpbmQsIG9wdGlvbnMub3duZXIsIHRoaXMuc2NvcGUsIDEpLFxuICAgICAgICAgICAgICAgICAgICBldmVudEJpbmRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWdOYW1lID0gdGhpcy50YWdOYW1lIHx8IHRoaXMuc291cmNlLnRhZ05hbWU7XG4gICAgICAgIHRoaXMuYmluZHMgPSB0aGlzLnNvdXJjZS5ob3RzcG90LmJpbmRzO1xuXG4gICAgICAgIC8vIGluaXQgcy1iaW5kIGRhdGFcbiAgICAgICAgdGhpcy5fc3JjU2JpbmREYXRhID0gbm9kZVNCaW5kSW5pdCh0aGlzLnNvdXJjZS5kaXJlY3RpdmVzLmJpbmQsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2NvbXBpbGVkJyk7XG5cbiAgICAvLyBpbml0IGRhdGFcbiAgICB2YXIgaW5pdERhdGEgPSBleHRlbmQoXG4gICAgICAgIHR5cGVvZiB0aGlzLmluaXREYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaXMuaW5pdERhdGEoKSB8fCB7fSxcbiAgICAgICAgb3B0aW9ucy5kYXRhIHx8IHRoaXMuX3NyY1NiaW5kRGF0YVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5iaW5kcyAmJiB0aGlzLnNjb3BlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5iaW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBiaW5kSW5mbyA9IHRoaXMuYmluZHNbaV07XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKGJpbmRJbmZvLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvc2FuL2lzc3Vlcy8xOTFcbiAgICAgICAgICAgICAgICBpbml0RGF0YVtiaW5kSW5mby5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGEoaW5pdERhdGEpO1xuXG4gICAgXG4gICAgdGhpcy50YWdOYW1lID0gdGhpcy50YWdOYW1lIHx8ICdkaXYnO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLy8gaWU4LSDkuI3mlK/mjIFpbm5lckhUTUzovpPlh7roh6rlrprkuYnmoIfnrb5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaWVPbGRUaGFuOSAmJiB0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSAnZGl2JztcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgLy8g5Zyo5Yid5aeL5YyWICsg5pWw5o2u57uR5a6a5ZCO77yM5byA5aeL5pWw5o2u5qCh6aqMXG4gICAgLy8gTk9URTog5Y+q5Zyo5byA5Y+R54mI5pys5Lit6L+b6KGM5bGe5oCn5qCh6aqMXG4gICAgdmFyIGRhdGFUeXBlcyA9IHRoaXMuZGF0YVR5cGVzIHx8IGNsYXp6LmRhdGFUeXBlcztcbiAgICBpZiAoZGF0YVR5cGVzKSB7XG4gICAgICAgIHZhciBkYXRhVHlwZUNoZWNrZXIgPSBjcmVhdGVEYXRhVHlwZXNDaGVja2VyKFxuICAgICAgICAgICAgZGF0YVR5cGVzLFxuICAgICAgICAgICAgdGhpcy5zdWJUYWcgfHwgdGhpcy5uYW1lIHx8IGNsYXp6Lm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLnNldFR5cGVDaGVja2VyKGRhdGFUeXBlQ2hlY2tlcik7XG4gICAgICAgIHRoaXMuZGF0YS5jaGVja0RhdGFUeXBlcygpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuY29tcHV0ZWREZXBzID0ge307XG4gICAgZm9yICh2YXIgZXhwciBpbiB0aGlzLmNvbXB1dGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVkLmhhc093blByb3BlcnR5KGV4cHIpICYmICF0aGlzLmNvbXB1dGVkRGVwc1tleHByXSkge1xuICAgICAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdERhdGFDaGFuZ2VyKCk7XG4gICAgdGhpcy5fc2JpbmREYXRhID0gbm9kZVNCaW5kSW5pdCh0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuYmluZCwgdGhpcy5kYXRhLCB0aGlzKTtcbiAgICB0aGlzLl90b1BoYXNlKCdpbml0ZWQnKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICByZXZlcnNlRWxlbWVudENoaWxkcmVuKHRoaXMsIHRoaXMuZGF0YSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB3YWxrZXIgPSBvcHRpb25zLnJldmVyc2VXYWxrZXI7XG4gICAgICAgIGlmICh3YWxrZXIpIHtcbiAgICAgICAgICAgIHZhciBpZkRpcmVjdGl2ZSA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlc1snaWYnXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cblxuICAgICAgICAgICAgaWYgKCFpZkRpcmVjdGl2ZSB8fCBldmFsRXhwcihpZkRpcmVjdGl2ZS52YWx1ZSwgdGhpcy5kYXRhLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXZlcnNlRWxlbWVudENoaWxkcmVuKHRoaXMsIHRoaXMuZGF0YSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgd2Fsa2VyLnRhcmdldCwgd2Fsa2VyLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl90b1BoYXNlKCdjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG4vKipcbiAqIOWIneWni+WMluWIm+W7uue7hOS7tuWklumDqOS8oOWFpeeahOaPkuanveWvueixoVxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNGaXJzdFRpbWUg5piv5ZCm5Yid5qyh5a+5c291cmNlU2xvdHPov5vooYzorqHnrpdcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5faW5pdFNvdXJjZVNsb3RzID0gZnVuY3Rpb24gKGlzRmlyc3RUaW1lKSB7XG4gICAgdGhpcy5zb3VyY2VTbG90cy5uYW1lZCA9IHt9O1xuXG4gICAgLy8g57uE5Lu26L+Q6KGM5pe25Lyg5YWl55qE57uT5p6E77yM5YGac2xvdOino+aekFxuICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNjb3BlKSB7XG4gICAgICAgIHZhciBzb3VyY2VDaGlsZHJlbiA9IHRoaXMuc291cmNlLmNoaWxkcmVuO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc291cmNlQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBzb3VyY2VDaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgICAgIHZhciBzbG90QmluZCA9ICFjaGlsZC50ZXh0RXhwciAmJiBnZXRBTm9kZVByb3AoY2hpbGQsICdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdEJpbmQpIHtcbiAgICAgICAgICAgICAgICBpc0ZpcnN0VGltZSAmJiB0aGlzLnNvdXJjZVNsb3ROYW1lUHJvcHMucHVzaChzbG90QmluZCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2xvdE5hbWUgPSBldmFsRXhwcihzbG90QmluZC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNvdXJjZVNsb3RzLm5hbWVkW3Nsb3ROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNvdXJjZVNsb3RzLm5hbWVkW3Nsb3ROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0ZpcnN0VGltZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc291cmNlU2xvdHMubm9uYW1lO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc291cmNlU2xvdHMubm9uYW1lID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog57G75Z6L5qCH6K+GXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IDU7XG5cbi8qKlxuICog5Zyo5LiL5LiA5Liq5pu05paw5ZGo5pyf6L+Q6KGM5Ye95pWwXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Ye95pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fY3R4ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygxNik7XG5cbi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuLyoqXG4gKiDkvb/oioLngrnliLDovr7nm7jlupTnmoTnlJ/lkb3lkajmnJ9cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDnlJ/lkb3lkajmnJ/lkI3np7BcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY2FsbEhvb2sgPVxuQ29tcG9uZW50LnByb3RvdHlwZS5fdG9QaGFzZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZVtuYW1lXSkge1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZVtuYW1lXSB8fCB0aGlzLmxpZmVDeWNsZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FmdGVyTGlmZSA9IHRoaXMubGlmZUN5Y2xlO1xuXG4gICAgICAgIC8vIOmAmuefpWRldnRvb2xcbiAgICAgICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgICAgICBlbWl0RGV2dG9vbCgnY29tcC0nICsgbmFtZSwgdGhpcyk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuXG5cbi8qKlxuICog5re75Yqg5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7c3RyaW5nP30gZGVjbGFyYXRpb24g5aOw5piO5byPXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIsIGRlY2xhcmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW25hbWVdLnB1c2goe2ZuOiBsaXN0ZW5lciwgZGVjbGFyYXRpb246IGRlY2xhcmF0aW9ufSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnp7vpmaTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS51biA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgIHZhciBuYW1lTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbbmFtZV07XG4gICAgdmFyIGxlbiA9IG5hbWVMaXN0ZW5lcnMgJiYgbmFtZUxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCBsaXN0ZW5lciA9PT0gbmFtZUxpc3RlbmVyc1tsZW5dLmZuKSB7XG4gICAgICAgICAgICBuYW1lTGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vKipcbiAqIOa0vuWPkeS6i+S7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOS6i+S7tuWvueixoVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAobmFtZSwgZXZlbnQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGVhY2godGhpcy5saXN0ZW5lcnNbbmFtZV0sIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5mbi5jYWxsKG1lLCBldmVudCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIOiuoeeulyBjb21wdXRlZCDlsZ7mgKfnmoTlgLxcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXB1dGVkRXhwciBjb21wdXRlZOihqOi+vuW8j+S4slxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jYWxjQ29tcHV0ZWQgPSBmdW5jdGlvbiAoY29tcHV0ZWRFeHByKSB7XG4gICAgdmFyIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2NvbXB1dGVkRXhwcl07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNbY29tcHV0ZWRFeHByXSA9IHt9O1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdGhpcy5kYXRhLnNldChjb21wdXRlZEV4cHIsIHRoaXMuY29tcHV0ZWRbY29tcHV0ZWRFeHByXS5jYWxsKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gY2FsbCBnZXQgbWV0aG9kIGluIGNvbXB1dGVkIG5lZWQgYXJndW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1tleHByXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNbZXhwcl0gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jb21wdXRlZFtleHByXSAmJiAhbWUuY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUud2F0Y2goZXhwciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChjb21wdXRlZEV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoZXhwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIOa0vuWPkea2iOaBr1xuICog57uE5Lu25Y+v5Lul5rS+5Y+R5raI5oGv77yM5raI5oGv5bCG5rK/552A57uE5Lu25qCR5ZCR5LiK5Lyg6YCS77yM55u05Yiw6YGH5LiK56ys5LiA5Liq5aSE55CG5raI5oGv55qE57uE5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyo/fSB2YWx1ZSDmtojmga/lgLxcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcblxuICAgIHdoaWxlIChwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcGFyZW50Q29tcG9uZW50Lm1lc3NhZ2VzW25hbWVdIHx8IHBhcmVudENvbXBvbmVudC5tZXNzYWdlc1snKiddO1xuICAgICAgICBpZiAodHlwZW9mIHJlY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYWxsKFxuICAgICAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB7dGFyZ2V0OiB0aGlzLCB2YWx1ZTogdmFsdWUsIG5hbWU6IG5hbWV9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRDb21wb25lbnQgPSBwYXJlbnRDb21wb25lbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cbn07XG5cbi8qKlxuICog6I635Y+W57uE5Lu25YaF6YOo55qEIHNsb3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG5hbWUgc2xvdOWQjeensO+8jOepuuS4umRlZmF1bHQgc2xvdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2xvdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBlYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gNiAmJiBjaGlsZC5vd25lciA9PT0gbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNOYW1lZCAmJiBjaGlsZC5uYW1lID09PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8ICFjaGlsZC5pc05hbWVkICYmICFuYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblRyYXZlcnNhbChjaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIOiOt+WPluW4puaciSBzYW4tcmVmIOaMh+S7pOeahOWtkOe7hOS7tuW8leeUqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWtkOe7hOS7tueahOW8leeUqOWQjVxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlZlRhcmdldDtcbiAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50VHJhdmVyc2FsKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiAhcmVmVGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcikgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICFyZWZUYXJnZXQgJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgIXJlZlRhcmdldCAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiByZWZUYXJnZXQ7XG59O1xuXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheT99IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICB2YXIgbmVlZFJlbG9hZEZvclNsb3QgPSBmYWxzZTtcbiAgICB0aGlzLl9ub3RpZnlOZWVkUmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZWVkUmVsb2FkRm9yU2xvdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fc3JjU2JpbmREYXRhID0gbm9kZVNCaW5kVXBkYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmRpcmVjdGl2ZXMuYmluZCxcbiAgICAgICAgICAgICAgICB0aGlzLl9zcmNTYmluZERhdGEsXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgIGNoYW5nZXMsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIG1lLnNvdXJjZS5ob3RzcG90LnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRhLnNldChuYW1lLCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbWUub3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZUV4cHIgPSBjaGFuZ2UuZXhwcjtcblxuICAgICAgICAgICAgZWFjaChtZS5iaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBzZXRFeHByID0gYmluZEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlRXhwciA9IGJpbmRJdGVtLmV4cHI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIG1lLCBzZXRFeHByKVxuICAgICAgICAgICAgICAgICAgICAmJiAocmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCB1cGRhdGVFeHByLCBtZS5zY29wZSkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cHIgPSBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2V0RXhwclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5jb25jYXQoY2hhbmdlRXhwci5wYXRocy5zbGljZSh1cGRhdGVFeHByLnBhdGhzLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXhwciA9IGNoYW5nZUV4cHI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPj0gMiAmJiBjaGFuZ2UudHlwZSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZGF0YS5zcGxpY2Uoc2V0RXhwciwgW2NoYW5nZS5pbmRleCwgY2hhbmdlLmRlbGV0ZUNvdW50XS5jb25jYXQoY2hhbmdlLmluc2VydGlvbnMpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG1lLm93bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5kYXRhLnNldChzZXRFeHByLCBldmFsRXhwcih1cGRhdGVFeHByLCBtZS5zY29wZSwgbWUub3duZXIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG1lLm93bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaChtZS5zb3VyY2VTbG90TmFtZVByb3BzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBuZWVkUmVsb2FkRm9yU2xvdCA9IG5lZWRSZWxvYWRGb3JTbG90IHx8IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGJpbmRJdGVtLmV4cHIsIG1lLnNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW5lZWRSZWxvYWRGb3JTbG90O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuZWVkUmVsb2FkRm9yU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNvdXJjZVNsb3RzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXBhaW50Q2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzbG90Q2hpbGRyZW5MZW4gPSB0aGlzLnNsb3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoc2xvdENoaWxkcmVuTGVuLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdENoaWxkID0gdGhpcy5zbG90Q2hpbGRyZW5bc2xvdENoaWxkcmVuTGVuXTtcblxuICAgICAgICAgICAgICAgIGlmIChzbG90Q2hpbGQubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xvdENoaWxkcmVuLnNwbGljZShzbG90Q2hpbGRyZW5MZW4sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Q2hpbGQuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90Q2hpbGQuX3VwZGF0ZShjaGFuZ2VzLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGF0YUNoYW5nZXMgPSB0aGlzLl9kYXRhQ2hhbmdlcztcbiAgICBpZiAoZGF0YUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZGF0YUNoYW5nZXMgPSBudWxsO1xuXG4gICAgICAgIHZhciBpZkRpcmVjdGl2ZSA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlc1snaWYnXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgdmFyIGV4cGVjdE5vZGVUeXBlID0gKCFpZkRpcmVjdGl2ZSB8fCBldmFsRXhwcihpZkRpcmVjdGl2ZS52YWx1ZSwgdGhpcy5kYXRhLCB0aGlzKSkgPyAxIDogODtcblxuICAgICAgICB0aGlzLl9zYmluZERhdGEgPSBub2RlU0JpbmRVcGRhdGUoXG4gICAgICAgICAgICB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuYmluZCxcbiAgICAgICAgICAgIHRoaXMuX3NiaW5kRGF0YSxcbiAgICAgICAgICAgIHRoaXMuZGF0YSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBkYXRhQ2hhbmdlcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChtZS5lbC5ub2RlVHlwZSAhPT0gMSB8fCAobmFtZSBpbiBtZS5hTm9kZS5ob3RzcG90LnByb3BzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZ2V0UHJvcEhhbmRsZXIobWUudGFnTmFtZSwgbmFtZSkobWUuZWwsIHZhbHVlLCBuYW1lLCBtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWwubm9kZVR5cGUgPT09IGV4cGVjdE5vZGVUeXBlKSB7XG4gICAgICAgICAgICBpZiAoZXhwZWN0Tm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHluYW1pY1Byb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWNQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGR5bmFtaWNQcm9wc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGFDaGFuZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gZGF0YUNoYW5nZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuZXhwciwgdGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHByb3AuaGludEV4cHIgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuaGludEV4cHIsIHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuaGFuZGxlcih0aGlzLmVsLCBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuZGF0YSwgdGhpcyksIHByb3AubmFtZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5fdXBkYXRlKGRhdGFDaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmIChuZWVkUmVsb2FkRm9yU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0U291cmNlU2xvdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVwYWludENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVwYWludChleHBlY3ROb2RlVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW1wbGljaXRDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbXBsaWNpdENoaWxkcmVuW2ldLl91cGRhdGUoZGF0YUNoYW5nZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9QaGFzZSgndXBkYXRlZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLm93bmVyICYmIHRoaXMuX3VwZGF0ZUJpbmR4T3duZXIoZGF0YUNoYW5nZXMpKSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLl91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeU5lZWRSZWxvYWQgPSBudWxsO1xufTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlQmluZHhPd25lciA9IGZ1bmN0aW9uIChkYXRhQ2hhbmdlcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIHhiaW5kVXBlZDtcblxuICAgIGVhY2goZGF0YUNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgZWFjaChtZS5iaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlRXhwciA9IGNoYW5nZS5leHByO1xuICAgICAgICAgICAgaWYgKGJpbmRJdGVtLnhcbiAgICAgICAgICAgICAgICAmJiAhaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUub3duZXIpXG4gICAgICAgICAgICAgICAgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgcGFyc2VFeHByKGJpbmRJdGVtLm5hbWUpLCBtZS5kYXRhKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVNjb3BlRXhwciA9IGJpbmRJdGVtLmV4cHI7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHIucGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTY29wZUV4cHIgPSBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRJdGVtLmV4cHIucGF0aHMuY29uY2F0KGNoYW5nZUV4cHIucGF0aHMuc2xpY2UoMSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeGJpbmRVcGVkID0gMTtcbiAgICAgICAgICAgICAgICBtZS5zY29wZS5zZXQoXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRXhwcixcbiAgICAgICAgICAgICAgICAgICAgZXZhbEV4cHIoY2hhbmdlRXhwciwgbWUuZGF0YSwgbWUpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBiaW5kSXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB4YmluZFVwZWQ7XG59O1xuXG4vKipcbiAqIOmHjeaWsOe7mOWItue7hOS7tueahOWGheWuuVxuICog5b2TIGR5bmFtaWMgc2xvdCBuYW1lIOWPkeeUn+WPmOabtOaIliBzbG90IOWMuemFjeWPkeeUn+WPmOWMluaXtu+8jOmHjeaWsOe7mOWItlxuICog5Zyo57uE5Lu257qn5Yir6YeN57uY5pyJ54K557KX5pq077yM5L2G5piv6IO95L+d6K+B6KeG5Zu+57uT5p6c5q2j56Gu5oCnXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3JlcGFpbnRDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMuY2hpbGRyZW4sIDAsIDEpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAgICAgdGhpcy5zbG90Q2hpbGRyZW4gPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuYU5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKHRoaXMuYU5vZGUuY2hpbGRyZW5baV0sIHRoaXMsIHRoaXMuZGF0YSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuYXR0YWNoKHRoaXMuZWwpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vKipcbiAqIOWIneWni+WMlue7hOS7tuWGhemDqOebkeWQrOaVsOaNruWPmOWMllxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9pbml0RGF0YUNoYW5nZXIgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHRoaXMuX2RhdGFDaGFuZ2VyID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBpZiAobWUuX2FmdGVyTGlmZS5jcmVhdGVkKSB7XG4gICAgICAgICAgICBpZiAoIW1lLl9kYXRhQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgIG5leHRUaWNrKG1lLl91cGRhdGUsIG1lKTtcbiAgICAgICAgICAgICAgICBtZS5fZGF0YUNoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuX2RhdGFDaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZS5saWZlQ3ljbGUuaW5pdGVkICYmIG1lLm93bmVyKSB7XG4gICAgICAgICAgICBtZS5fdXBkYXRlQmluZHhPd25lcihbY2hhbmdlXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhLmxpc3Rlbih0aGlzLl9kYXRhQ2hhbmdlcik7XG59O1xuXG5cbi8qKlxuICog55uR5ZCs57uE5Lu255qE5pWw5o2u5Y+Y5YyWXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIOWPmOWMlueahOaVsOaNrumhuVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoZGF0YU5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIGRhdGFFeHByID0gcGFyc2VFeHByKGRhdGFOYW1lKTtcblxuICAgIHRoaXMuZGF0YS5saXN0ZW4oYmluZChmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgZGF0YUV4cHIsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZhbEV4cHIoZGF0YUV4cHIsIHRoaXMuZGF0YSwgdGhpcyksIGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKSk7XG59O1xuXG5cbi8qKlxuICog5bCG57uE5Lu2YXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICB0aGlzLl9hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICAvLyBlbGVtZW50IOmDveaYr+WGhemDqOWIm+W7uueahO+8jOWPquacieWKqOaAgeWIm+W7uueahCBjb21wb25lbnQg5omN5Lya6L+b5YWl6L+Z5Liq5YiG5pSvXG4gICAgICAgIGlmICh0aGlzLm93bmVyICYmICF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5vd25lci5pbXBsaWNpdENoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLl9hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdmFyIGlmRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG4gICAgaWYgKCFpZkRpcmVjdGl2ZSB8fCBldmFsRXhwcihpZkRpcmVjdGl2ZS52YWx1ZSwgdGhpcy5kYXRhLCB0aGlzKSkge1xuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5hTm9kZS5ob3RzcG90LnNvdXJjZU5vZGU7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmFOb2RlLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoc291cmNlTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBzb3VyY2VOb2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgcHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IGNyZWF0ZUVsKHRoaXMudGFnTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zYmluZERhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fc2JpbmREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYmluZERhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJvcEhhbmRsZXIodGhpcy50YWdOYW1lLCBrZXkpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2JpbmREYXRhW2tleV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuZGF0YSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgfHwgIWJhc2VQcm9wc1twcm9wLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3AuaGFuZGxlcih0aGlzLmVsLCB2YWx1ZSwgcHJvcC5uYW1lLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgICAgIGlmICghdGhpcy5fY29udGVudFJlYWR5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuYU5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQU5vZGUgPSB0aGlzLmFOb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkQU5vZGUuQ2xhenpcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgY2hpbGRBTm9kZS5DbGF6eihjaGlsZEFOb2RlLCB0aGlzLCB0aGlzLmRhdGEsIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlTm9kZShjaGlsZEFOb2RlLCB0aGlzLCB0aGlzLmRhdGEsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuYXR0YWNoKHRoaXMuZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb250ZW50UmVhZHkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdjcmVhdGVkJyk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG59O1xuXG4vKipcbiAqIOmHjeaWsOWIt+aWsOe7hOS7tuinhuWbvlxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9yZXBhaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcy5jaGlsZHJlbiwgMSwgMSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2xvdENoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLl9jb250ZW50UmVhZHkgPSAwO1xuXG4gICAgdmFyIGxlbiA9IHRoaXMuX2VsRm5zLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgdmFyIGZuID0gdGhpcy5fZWxGbnNbbGVuXTtcbiAgICAgICAgdW4odGhpcy5lbCwgZm5bMF0sIGZuWzFdLCBmblsyXSk7XG4gICAgfVxuICAgIHRoaXMuX2VsRm5zID0gW107XG5cbiAgICB2YXIgYmVmb3JlRWwgPSB0aGlzLmVsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIHRoaXMuX2F0dGFjaChiZWZvcmVFbC5wYXJlbnROb2RlLCBiZWZvcmVFbCk7XG5cbiAgICByZW1vdmVFbChiZWZvcmVFbCk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLmRldGFjaCA9IGVsZW1lbnRPd25EZXRhY2g7XG5Db21wb25lbnQucHJvdG90eXBlLmRpc3Bvc2UgPSBlbGVtZW50T3duRGlzcG9zZTtcbkNvbXBvbmVudC5wcm90b3R5cGUuX29uRWwgPSBlbGVtZW50T3duT25FbDtcbkNvbXBvbmVudC5wcm90b3R5cGUuX2F0dGFjaGVkID0gZWxlbWVudE93bkF0dGFjaGVkO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fbGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGVhdmVEaXNwb3NlKSB7XG4gICAgICAgIGlmICghdGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS51bmxpc3RlbigpO1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9kYXRhQ2hhbmdlcyA9IG51bGw7XG5cbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmltcGxpY2l0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsaWNpdENoaWxkcmVuW2xlbl0uZGlzcG9zZSgwLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbXBsaWNpdENoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VTbG90cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVNsb3ROYW1lUHJvcHMgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyDov5nph4zkuI3nlKjmjKjkuKrosIPnlKggZGlzcG9zZSDkuobvvIzlm6DkuLogY2hpbGRyZW4g6YeK5pS+6ZO+5Lya6LCD55So55qEXG4gICAgICAgICAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bbGVuXS5kaXNwb3NlKDEsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZW4gPSB0aGlzLl9lbEZucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSB0aGlzLl9lbEZuc1tsZW5dO1xuICAgICAgICAgICAgICAgIHVuKHRoaXMuZWwsIGZuWzBdLCBmblsxXSwgZm5bMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZWxGbnMgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAodGhpcy5faW5wdXRUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW5wdXRUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXRUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJcGFyZW5077yM6K+05piO5piv5LiA5Liqcm9vdCBjb21wb25lbnTvvIzkuIDlrpropoHku45kb23moJHkuK1yZW1vdmVcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNwb3NlTm9EZXRhY2ggfHwgIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3RvUGhhc2UoJ2RldGFjaGVkJyk7XG5cbiAgICAgICAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLl90b1BoYXNlKCdkaXNwb3NlZCcpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fb25kaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uZGlzcG9zZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG59O1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIm+W7uue7hOS7tuexu1xuICovXG5cbi8vIHZhciBDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpO1xuLy8gdmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmhlcml0cycpO1xuXG4vKipcbiAqIOWIm+W7uue7hOS7tuexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byDnu4Tku7bnsbvnmoTmlrnms5XooahcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBTdXBlckNvbXBvbmVudCDniLbnu4Tku7bnsbtcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBkZWZpbmVDb21wb25lbnQocHJvdG8sIFN1cGVyQ29tcG9uZW50KSB7XG4gICAgLy8g5aaC5p6c5Lyg5YWl5LiA5Liq5LiN5pivIHNhbiBjb21wb25lbnQg55qEIGNvbnN0cnVjdG9y77yM55u05o6l6L+U5Zue5LiN5piv57uE5Lu25p6E6YCg5Ye95pWwXG4gICAgLy8g6L+Z56eN5Zy65pmv5a+86Ie055qE6ZSZ6K+vIHNhbiDkuI3kuojogIPomZFcbiAgICBpZiAodHlwZW9mIHByb3RvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwcm90bztcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICh0eXBlb2YgcHJvdG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gZGVmaW5lQ29tcG9uZW50IG5lZWQgYSBwbGFpbiBvYmplY3QuJyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50Q2xhc3Mob3B0aW9uKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgQ29tcG9uZW50LmNhbGwodGhpcywgb3B0aW9uKTtcbiAgICB9XG5cbiAgICBDb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBwcm90bztcbiAgICBpbmhlcml0cyhDb21wb25lbnRDbGFzcywgU3VwZXJDb21wb25lbnQgfHwgQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBDb21wb25lbnRDbGFzcztcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVmaW5lQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57uE5Lu2TG9hZGVy57G7XG4gKi9cblxuLy8gdmFyIG5leHRUaWNrID0gcmVxdWlyZSgnLi4vdXRpbC9uZXh0LXRpY2snKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cblxuLyoqXG4gKiDnu4Tku7ZMb2FkZXLnsbtcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsb2FkIGxvYWTmlrnms5VcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBwbGFjZWhvbGRlciBsb2FkaW5n6L+H56iL5Lit5riy5p+T55qE57uE5Lu2XG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZmFsbGJhY2sgbG9hZOWksei0peaXtua4suafk+eahOe7hOS7tlxuICovXG5mdW5jdGlvbiBDb21wb25lbnRMb2FkZXIobG9hZCwgcGxhY2Vob2xkZXIsIGZhbGxiYWNrKSB7XG4gICAgdGhpcy5sb2FkID0gbG9hZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxuXG4vKipcbiAqIOW8gOWni+WKoOi9vee7hOS7tlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9ubG9hZCDnu4Tku7bliqDovb3lrozmiJDnm5HlkKzlh73mlbBcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChvbmxvYWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWQobWUuQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChvbmxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gob25sb2FkKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxO1xuXG4gICAgICAgICAgICB2YXIgc3RhcnRMb2FkID0gdGhpcy5sb2FkKCk7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIChSZWFsQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbWUuZG9uZShSZWFsQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzdGFydExvYWQgJiYgdHlwZW9mIHN0YXJ0TG9hZC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRMb2FkLnRoZW4oZG9uZSwgZG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDlrozmiJDnu4Tku7bliqDovb1cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4gKi9cbkNvbXBvbmVudExvYWRlci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChDb21wb25lbnRDbGFzcykge1xuICAgIHRoaXMuc3RhdGUgPSAyO1xuICAgIENvbXBvbmVudENsYXNzID0gQ29tcG9uZW50Q2xhc3MgfHwgdGhpcy5mYWxsYmFjaztcbiAgICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudENsYXNzO1xuXG4gICAgZWFjaCh0aGlzLmxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKENvbXBvbmVudENsYXNzKTtcbiAgICB9KTtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudExvYWRlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOe8luivkee7hOS7tuexu1xuICovXG5cbi8vIHZhciB3YXJuID0gcmVxdWlyZSgnLi4vdXRpbC93YXJuJyk7XG4vLyB2YXIgcGFyc2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS10ZW1wbGF0ZScpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgZGVmaW5lQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9kZWZpbmUtY29tcG9uZW50Jyk7XG4vLyB2YXIgQ29tcG9uZW50TG9hZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnQtbG9hZGVyJyk7XG5cblxuLyoqXG4gKiDnvJbor5Hnu4Tku7bnsbvjgILpooTop6PmnpB0ZW1wbGF0ZeWSjGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNvbXBvbmVudChDb21wb25lbnRDbGFzcykge1xuICAgIHZhciBwcm90byA9IENvbXBvbmVudENsYXNzLnByb3RvdHlwZTtcblxuICAgIC8vIHByZSBkZWZpbmUgY29tcG9uZW50cyBjbGFzc1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgIGlmICghcHJvdG8uaGFzT3duUHJvcGVydHkoJ19jbXB0UmVhZHknKSkge1xuICAgICAgICBwcm90by5jb21wb25lbnRzID0gQ29tcG9uZW50Q2xhc3MuY29tcG9uZW50cyB8fCBwcm90by5jb21wb25lbnRzIHx8IHt9O1xuICAgICAgICB2YXIgY29tcG9uZW50cyA9IHByb3RvLmNvbXBvbmVudHM7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gY29tcG9uZW50c1trZXldO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzID09PSAnb2JqZWN0JyAmJiAhKGNvbXBvbmVudENsYXNzIGluc3RhbmNlb2YgQ29tcG9uZW50TG9hZGVyKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNba2V5XSA9IGRlZmluZUNvbXBvbmVudChjb21wb25lbnRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21wb25lbnRDbGFzcyA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trZXldID0gQ29tcG9uZW50Q2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm90by5fY21wdFJlYWR5ID0gMTtcbiAgICB9XG5cblxuICAgIC8vIHByZSBjb21waWxlIHRlbXBsYXRlXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgaWYgKCFwcm90by5oYXNPd25Qcm9wZXJ0eSgnYU5vZGUnKSkge1xuICAgICAgICB2YXIgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKENvbXBvbmVudENsYXNzLnRlbXBsYXRlIHx8IHByb3RvLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICB0cmltV2hpdGVzcGFjZTogcHJvdG8udHJpbVdoaXRlc3BhY2UgfHwgQ29tcG9uZW50Q2xhc3MudHJpbVdoaXRlc3BhY2UsXG4gICAgICAgICAgICBkZWxpbWl0ZXJzOiBwcm90by5kZWxpbWl0ZXJzIHx8IENvbXBvbmVudENsYXNzLmRlbGltaXRlcnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBhTm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQgJiYgZmlyc3RDaGlsZC50ZXh0RXhwcikge1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICBpZiAoYU5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8ICFmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICB3YXJuKCdDb21wb25lbnQgdGVtcGxhdGUgbXVzdCBoYXZlIGEgcm9vdCBlbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIHByb3RvLmFOb2RlID0gZmlyc3RDaGlsZCA9IGZpcnN0Q2hpbGQgfHwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczoge30sXG4gICAgICAgICAgICBwcm9wczogW10sXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQudGFnTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgZmlyc3RDaGlsZC50YWdOYW1lID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm90by5hdXRvRmlsbFN0eWxlQW5kSWQgIT09IGZhbHNlICYmIENvbXBvbmVudENsYXNzLmF1dG9GaWxsU3R5bGVBbmRJZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0b0V4dHJhUHJvcCA9IHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAwLCBzdHlsZTogMCwgaWQ6IDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBsZW4gPSBmaXJzdENoaWxkLnByb3BzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gZmlyc3RDaGlsZC5wcm9wc1tsZW5dO1xuICAgICAgICAgICAgICAgIGlmICh0b0V4dHJhUHJvcFtwcm9wLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9FeHRyYVByb3BbcHJvcC5uYW1lXSA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGQucHJvcHMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0V4dHJhUHJvcC5pZCA9IHRvRXh0cmFQcm9wLmlkIHx8IHsgbmFtZTogJ2lkJywgZXhwcjogcGFyc2VFeHByKCdpZCcpIH07XG5cbiAgICAgICAgICAgIGlmICh0b0V4dHJhUHJvcFsnY2xhc3MnXSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc0V4cHIgPSBwYXJzZVRleHQoJ3t7Y2xhc3MgfCBfeGNsYXNzfX0nKS5zZWdzWzBdO1xuICAgICAgICAgICAgICAgIGNsYXNzRXhwci5maWx0ZXJzWzBdLmFyZ3MucHVzaCh0b0V4dHJhUHJvcFsnY2xhc3MnXS5leHByKTtcbiAgICAgICAgICAgICAgICB0b0V4dHJhUHJvcFsnY2xhc3MnXS5leHByID0gY2xhc3NFeHByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3BbJ2NsYXNzJ10gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IHBhcnNlVGV4dCgne3tjbGFzcyB8IF9jbGFzc319JylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9FeHRyYVByb3Auc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVFeHByID0gcGFyc2VUZXh0KCd7e3N0eWxlIHwgX3hzdHlsZX19Jykuc2Vnc1swXTtcbiAgICAgICAgICAgICAgICBzdHlsZUV4cHIuZmlsdGVyc1swXS5hcmdzLnB1c2godG9FeHRyYVByb3Auc3R5bGUuZXhwcik7XG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3Auc3R5bGUuZXhwciA9IHN0eWxlRXhwcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvRXh0cmFQcm9wLnN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3R5bGUnLFxuICAgICAgICAgICAgICAgICAgICBleHByOiBwYXJzZVRleHQoJ3t7c3R5bGUgfCBfc3R5bGV9fScpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5wcm9wcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRvRXh0cmFQcm9wWydjbGFzcyddLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIHRvRXh0cmFQcm9wLnN0eWxlLFxuICAgICAgICAgICAgICAgIHRvRXh0cmFQcm9wLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21waWxlQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yik5pat5piv5ZCm57uT5p2f5qGpXG4gKi9cblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDliKTmlq3mmK/lkKbnu5PmnZ/moalcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxDb21tZW50fSB0YXJnZXQg6KaB5Yik5pat55qE5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDmoannsbvlnotcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRW5kU3R1bXAodGFyZ2V0LCB0eXBlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5ub2RlVHlwZSA9PT0gOCAmJiB0YXJnZXQuZGF0YSA9PT0gJy9zLScgKyB0eXBlO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGlzRW5kU3R1bXA7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSB0ZXh0IOiKgueCueexu1xuICovXG5cbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIHdhcm5TZXRIVE1MID0gcmVxdWlyZSgnLi93YXJuLXNldC1odG1sJyk7XG4vLyB2YXIgaXNFbmRTdHVtcCA9IHJlcXVpcmUoJy4vaXMtZW5kLXN0dW1wJyk7XG4vLyB2YXIgZ2V0Tm9kZVBhdGggPSByZXF1aXJlKCcuL2dldC1ub2RlLXBhdGgnKTtcblxuXG4vKipcbiAqIHRleHQg6IqC54K557G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIFRleHROb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnROb2RlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUuZGF0YSA9PT0gJ3MtdGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBUZXh0IGVuZCBmbGFnIG5vdCBmb3VuZC4gXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VuZFN0dW1wKGN1cnJlbnROb2RlLCAndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuVGV4dE5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gMTtcblxuLyoqXG4gKiDlsIZ0ZXh0IGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cblRleHROb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAgICAgdmFyIHRlbXBGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0ZW1wRmxhZywgdGhpcy5lbCk7XG4gICAgICAgIHRlbXBGbGFnLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0aGlzLmNvbnRlbnQpO1xuICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRmxhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jb250ZW50KTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDplIDmr4EgdGV4dCDoioLngrlcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAobm9EZXRhY2gpIHtcbiAgICBpZiAoIW5vRGV0YWNoKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICByZW1vdmVFbCh0aGlzLnNlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgdGhpcy5zZWwgPSBudWxsO1xufTtcblxudmFyIHRleHRVcGRhdGVQcm9wID0gaXNCcm93c2VyXG4gICAgJiYgKHR5cGVvZiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykudGV4dENvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gJ3RleHRDb250ZW50J1xuICAgICAgICA6ICdkYXRhJyk7XG5cbi8qKlxuICog5pu05pawIHRleHQg6IqC54K555qE6KeG5Zu+XG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGVuID0gY2hhbmdlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VzW2xlbl0uZXhwciwgdGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSkpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgIGlmICh0ZXh0ICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0UmVtb3ZlRWwgPSB0aGlzLnNlbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdGFydFJlbW92ZUVsICE9PSB0aGlzLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlVGFyZ2V0ID0gc3RhcnRSZW1vdmVFbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0UmVtb3ZlRWwgPSBzdGFydFJlbW92ZUVsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwocmVtb3ZlVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHdhcm5TZXRIVE1MKHBhcmVudEVsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0ZW1wRmxhZywgdGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBGbGFnLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEZsYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbFt0ZXh0VXBkYXRlUHJvcF0gPSB0ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gVGV4dE5vZGU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlsIbmsqHmnIkgcm9vdCDlj6rmnIkgY2hpbGRyZW4g55qE5YWD57SgIGF0dGFjaCDliLDpobXpnaJcbiAqL1xuXG5cbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuXG4vKipcbiAqIOWwhuayoeaciSByb290IOWPquaciSBjaGlsZHJlbiDnmoTlhYPntKAgYXR0YWNoIOWIsOmhtemdolxuICog5Li76KaB55So5LqOIHNsb3Qg5ZKMIHRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZU5vZGUoXG4gICAgICAgICAgICB0aGlzLmFOb2RlLmNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuY2hpbGRTY29wZSB8fCB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgdGhpcy5jaGlsZE93bmVyIHx8IHRoaXMub3duZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5hdHRhY2hlZDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIHNsb3Qg6IqC54K557G7XG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi4vdXRpbC9leHRlbmQnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgbm9kZVNCaW5kSW5pdCA9IHJlcXVpcmUoJy4vbm9kZS1zLWJpbmQtaW5pdCcpO1xuLy8gdmFyIG5vZGVTQmluZFVwZGF0ZSA9IHJlcXVpcmUoJy4vbm9kZS1zLWJpbmQtdXBkYXRlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoID0gcmVxdWlyZSgnLi9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaCcpO1xuXG5cbi8qKlxuICogc2xvdCDoioLngrnnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gU2xvdE5vZGUoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gY2FsYyBzbG90IG5hbWVcbiAgICB0aGlzLm5hbWVCaW5kID0gZ2V0QU5vZGVQcm9wKGFOb2RlLCAnbmFtZScpO1xuICAgIGlmICh0aGlzLm5hbWVCaW5kKSB7XG4gICAgICAgIHRoaXMuaXNOYW1lZCA9IHRydWU7XG4gICAgICAgIHRoaXMubmFtZSA9IGV2YWxFeHByKHRoaXMubmFtZUJpbmQuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgfVxuXG4gICAgLy8gY2FsYyBhTm9kZSBjaGlsZHJlblxuICAgIHZhciBzb3VyY2VTbG90cyA9IG93bmVyLnNvdXJjZVNsb3RzO1xuICAgIHZhciBtYXRjaGVkU2xvdHM7XG4gICAgaWYgKHNvdXJjZVNsb3RzKSB7XG4gICAgICAgIG1hdGNoZWRTbG90cyA9IHRoaXMuaXNOYW1lZCA/IHNvdXJjZVNsb3RzLm5hbWVkW3RoaXMubmFtZV0gOiBzb3VyY2VTbG90cy5ub25hbWU7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZWRTbG90cykge1xuICAgICAgICB0aGlzLmlzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuYU5vZGUgPSB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IGFOb2RlLmRpcmVjdGl2ZXMsXG4gICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgY2hpbGRyZW46IG1hdGNoZWRTbG90cyB8fCBhTm9kZS5jaGlsZHJlbi5zbGljZSgwKSxcbiAgICAgICAgdmFyczogYU5vZGUudmFyc1xuICAgIH07XG5cbiAgICB0aGlzLl9zYmluZERhdGEgPSBub2RlU0JpbmRJbml0KGFOb2RlLmRpcmVjdGl2ZXMuYmluZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAvLyBjYWxjIHNjb3BlZCBzbG90IHZhcnNcbiAgICB2YXIgaW5pdERhdGE7XG4gICAgaWYgKHRoaXMuX3NiaW5kRGF0YSkge1xuICAgICAgICBpbml0RGF0YSA9IGV4dGVuZCh7fSwgdGhpcy5fc2JpbmREYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUudmFycykge1xuICAgICAgICBpbml0RGF0YSA9IGluaXREYXRhIHx8IHt9O1xuICAgICAgICBlYWNoKGFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICBpbml0RGF0YVt2YXJJdGVtLm5hbWVdID0gZXZhbEV4cHIodmFySXRlbS5leHByLCBzY29wZSwgb3duZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGlsZCBvd25lciAmIGNoaWxkIHNjb3BlXG4gICAgaWYgKHRoaXMuaXNJbnNlcnRlZCkge1xuICAgICAgICB0aGlzLmNoaWxkT3duZXIgPSBvd25lci5vd25lcjtcbiAgICAgICAgdGhpcy5jaGlsZFNjb3BlID0gb3duZXIuc2NvcGU7XG4gICAgfVxuXG4gICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuaXNTY29wZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoaWxkU2NvcGUgPSBuZXcgRGF0YShpbml0RGF0YSwgdGhpcy5jaGlsZFNjb3BlIHx8IHRoaXMuc2NvcGUpO1xuICAgIH1cblxuXG4gICAgb3duZXIuc2xvdENoaWxkcmVuLnB1c2godGhpcyk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcblxuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIHJldmVyc2VXYWxrZXIuY3VycmVudFxuICAgICAgICAgICAgPyByZXZlcnNlV2Fsa2VyLnRhcmdldC5pbnNlcnRCZWZvcmUodGhpcy5zZWwsIHJldmVyc2VXYWxrZXIuY3VycmVudClcbiAgICAgICAgICAgIDogcmV2ZXJzZVdhbGtlci50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zZWwpO1xuXG4gICAgICAgIHZhciBhTm9kZUNoaWxkcmVuID0gdGhpcy5hTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhTm9kZUNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgIGFOb2RlQ2hpbGRyZW5baV0sXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkU2NvcGUgfHwgdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkT3duZXIgfHwgdGhpcy5vd25lcixcbiAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICByZXZlcnNlV2Fsa2VyLmN1cnJlbnRcbiAgICAgICAgICAgID8gcmV2ZXJzZVdhbGtlci50YXJnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIuY3VycmVudClcbiAgICAgICAgICAgIDogcmV2ZXJzZVdhbGtlci50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuYXR0YWNoZWQ7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5TbG90Tm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSA2O1xuXG4vKipcbiAqIOmUgOavgemHiuaUviBzbG90XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cblNsb3ROb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB0aGlzLmNoaWxkT3duZXIgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRTY29wZSA9IG51bGw7XG5cbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMuY2hpbGRyZW4sIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuXG4gICAgaWYgKCFub0RldGFjaCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5zZWwpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsID0gbnVsbDtcbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmRpc3Bvc2VkO1xuXG4gICAgaWYgKHRoaXMuX29uZGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5fb25kaXNwb3NlZCgpO1xuICAgIH1cbn07XG5cblNsb3ROb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBpc0Zyb21PdXRlciDlj5jljJbkv6Hmga/mmK/lkKbmnaXmupDkuo7niLbnu4Tku7bkuYvlpJbnmoTnu4Tku7ZcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblNsb3ROb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMsIGlzRnJvbU91dGVyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmICh0aGlzLm5hbWVCaW5kICYmIGV2YWxFeHByKHRoaXMubmFtZUJpbmQuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikgIT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLm93bmVyLl9ub3RpZnlOZWVkUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGcm9tT3V0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5fdXBkYXRlKGNoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc1Njb3BlZCkge1xuICAgICAgICAgICAgdmFyIHZhcktleXMgPSB7fTtcbiAgICAgICAgICAgIGVhY2godGhpcy5hTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgIHZhcktleXNbdmFySXRlbS5uYW1lXSA9IDE7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRTY29wZS5zZXQodmFySXRlbS5uYW1lLCBldmFsRXhwcih2YXJJdGVtLmV4cHIsIG1lLnNjb3BlLCBtZS5vd25lcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzY29wZWRDaGFuZ2VzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuX3NiaW5kRGF0YSA9IG5vZGVTQmluZFVwZGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuYmluZCxcbiAgICAgICAgICAgICAgICB0aGlzLl9zYmluZERhdGEsXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgIGNoYW5nZXMsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXJLZXlzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZFNjb3BlLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiAxLCB2YWx1ZTogbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWFjaChtZS5hTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHZhckl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHZhckl0ZW0uZXhwciwgbWUuc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UudHlwZSAhPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IDEsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5jaGlsZFNjb3BlLmdldChuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlbGF0aW9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IDEsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNoYW5nZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb3VudDogY2hhbmdlLmRlbGV0ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFuZ2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uczogY2hhbmdlLmluc2VydGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uX3VwZGF0ZShzY29wZWRDaGFuZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTbG90Tm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIGZvciDmjIfku6ToioLngrnnsbtcbiAqL1xuXG4vLyB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi91dGlsL2luaGVyaXRzJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNoYW5nZXNJc0luRGF0YVJlZiA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlcy1pcy1pbi1kYXRhLXJlZicpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcblxuXG4vKipcbiAqIOW+queOr+mhueeahOaVsOaNruWuueWZqOexu1xuICpcbiAqIEBpbm5lclxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gZm9yRWxlbWVudCBmb3LlhYPntKDlr7nosaFcbiAqIEBwYXJhbSB7Kn0gaXRlbSDlvZPliY3pobnnmoTmlbDmja5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDlvZPliY3pobnnmoTntKLlvJVcbiAqL1xuZnVuY3Rpb24gRm9ySXRlbURhdGEoZm9yRWxlbWVudCwgaXRlbSwgaW5kZXgpIHtcbiAgICB0aGlzLnBhcmVudCA9IGZvckVsZW1lbnQuc2NvcGU7XG4gICAgdGhpcy5yYXcgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgdGhpcy5kaXJlY3RpdmUgPSBmb3JFbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIHRoaXMuaW5kZXhOYW1lID0gdGhpcy5kaXJlY3RpdmUuaW5kZXggfHwgJyRpbmRleCc7XG5cbiAgICB0aGlzLnJhd1t0aGlzLmRpcmVjdGl2ZS5pdGVtXSA9IGl0ZW07XG4gICAgdGhpcy5yYXdbdGhpcy5pbmRleE5hbWVdID0gaW5kZXg7XG59XG5cbi8qKlxuICog5bCG5pWw5o2u5pON5L2c55qE6KGo6L6+5byP77yM6L2s5o2i5oiQ5Li65a+5cGFyZW505pWw5o2u5pON5L2c55qE6KGo6L6+5byPXG4gKiDkuLvopoHmmK/lr7lpdGVt5ZKMaW5kZXjov5vooYzlpITnkIZcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI9cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuRm9ySXRlbURhdGEucHJvdG90eXBlLmV4cHJSZXNvbHZlID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLmRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVJdGVtKGV4cHIpIHtcbiAgICAgICAgaWYgKGV4cHIudHlwZSA9PT0gNCAmJiBleHByLnBhdGhzWzBdLnZhbHVlID09PSBkaXJlY3RpdmUuaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS52YWx1ZS5wYXRocy5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWUucmF3W21lLmluZGV4TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwci5wYXRocy5zbGljZSgxKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBleHByID0gcmVzb2x2ZUl0ZW0oZXhwcik7XG5cbiAgICB2YXIgcmVzb2x2ZWRQYXRocyA9IFtdO1xuXG4gICAgZWFjaChleHByLnBhdGhzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXNvbHZlZFBhdGhzLnB1c2goXG4gICAgICAgICAgICBpdGVtLnR5cGUgPT09IDQgJiYgaXRlbS5wYXRoc1swXS52YWx1ZSA9PT0gbWUuaW5kZXhOYW1lXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5yYXdbbWUuaW5kZXhOYW1lXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHJlc29sdmVJdGVtKGl0ZW0pXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IocmVzb2x2ZWRQYXRocyk7XG59O1xuXG4vLyDku6PnkIbmlbDmja7mk43kvZzmlrnms5VcbmluaGVyaXRzKEZvckl0ZW1EYXRhLCBEYXRhKTtcbmVhY2goXG4gICAgWydzZXQnLCAncmVtb3ZlJywgJ3Vuc2hpZnQnLCAnc2hpZnQnLCAncHVzaCcsICdwb3AnLCAnc3BsaWNlJ10sXG4gICAgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBGb3JJdGVtRGF0YS5wcm90b3R5cGVbJ18nICsgbWV0aG9kXSA9IERhdGEucHJvdG90eXBlW21ldGhvZF07XG5cbiAgICAgICAgRm9ySXRlbURhdGEucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgZXhwciA9IHRoaXMuZXhwclJlc29sdmUocGFyc2VFeHByKGV4cHIpKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50W21ldGhvZF0uYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgW2V4cHJdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG4vKipcbiAqIGZvciDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gRm9yTm9kZShhTm9kZSwgcGFyZW50LCBzY29wZSwgb3duZXIsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMucGFyYW0gPSBhTm9kZS5kaXJlY3RpdmVzWydmb3InXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cblxuICAgIHRoaXMuaXRlbVBhdGhzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucGFyYW0uaXRlbVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHRoaXMuaXRlbUV4cHIgPSB7XG4gICAgICAgIHR5cGU6IDQsXG4gICAgICAgIHBhdGhzOiB0aGlzLml0ZW1QYXRocyxcbiAgICAgICAgcmF3OiB0aGlzLnBhcmFtLml0ZW1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucGFyYW0uaW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbmRleEV4cHIgPSBjcmVhdGVBY2Nlc3Nvcihbe1xuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyArIHRoaXMucGFyYW0uaW5kZXhcbiAgICAgICAgfV0pO1xuICAgIH1cblxuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICAgICAgaWYgKHRoaXMubGlzdERhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFOb2RlLmZvclJpbnNlZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEZvckl0ZW1EYXRhKHRoaXMsIHRoaXMubGlzdERhdGFbaV0sIGkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5saXN0RGF0YSAmJiB0eXBlb2YgdGhpcy5saXN0RGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5saXN0RGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhLmhhc093blByb3BlcnR5KGkpICYmIHRoaXMubGlzdERhdGFbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFOb2RlLmZvclJpbnNlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRm9ySXRlbURhdGEodGhpcywgdGhpcy5saXN0RGF0YVtpXSwgaSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG5Gb3JOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IDM7XG5Gb3JOb2RlLnByb3RvdHlwZS5fY3JlYXRlID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuRm9yTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdoueahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB0aGlzLmxpc3REYXRhID0gZXZhbEV4cHIodGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICB0aGlzLl9jcmVhdGVDaGlsZHJlbigpO1xufTtcblxuLyoqXG4gKiDliJvlu7rlrZDlhYPntKBcbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuX2NyZWF0ZUNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50Tm9kZTtcbiAgICB2YXIgbGlzdERhdGEgPSB0aGlzLmxpc3REYXRhO1xuXG4gICAgaWYgKGxpc3REYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZSh0aGlzLmFOb2RlLmZvclJpbnNlZCwgdGhpcywgbmV3IEZvckl0ZW1EYXRhKHRoaXMsIGxpc3REYXRhW2ldLCBpKSwgdGhpcy5vd25lcik7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsaXN0RGF0YSAmJiB0eXBlb2YgbGlzdERhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbGlzdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChsaXN0RGF0YS5oYXNPd25Qcm9wZXJ0eShpKSAmJiBsaXN0RGF0YVtpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZSh0aGlzLmFOb2RlLmZvclJpbnNlZCwgdGhpcywgbmV3IEZvckl0ZW1EYXRhKHRoaXMsIGxpc3REYXRhW2ldLCBpKSwgdGhpcy5vd25lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIHRoaXMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIHZhciBsaXN0RGF0YSA9IGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIHZhciBvbGRJc0FyciA9IHRoaXMubGlzdERhdGEgaW5zdGFuY2VvZiBBcnJheTtcbiAgICB2YXIgbmV3SXNBcnIgPSBsaXN0RGF0YSBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGlmICghbGlzdERhdGEgfHwgbmV3SXNBcnIgJiYgbGlzdERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0RGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvbGRJc0FyciAhPT0gbmV3SXNBcnIgfHwgIW5ld0lzQXJyKSB7XG4gICAgICAgICAgICAvLyDlsLHmmK/ov5nkuYjmmrTliptcbiAgICAgICAgICAgIC8vIOS4jeaOqOiNkOS9v+eUqGZvcumBjeWOhm9iamVjdO+8jOeUqOeahOivneiHquW3sei0n+i0o1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3REYXRhO1xuXG4gICAgICAgICAgICB2YXIgaXNMaXN0Q2hhbmdlZDtcbiAgICAgICAgICAgIGZvciAodmFyIGNJbmRleCA9IDA7ICFpc0xpc3RDaGFuZ2VkICYmIGNJbmRleCA8IGNoYW5nZXMubGVuZ3RoOyBjSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlzTGlzdENoYW5nZWQgPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VzW2NJbmRleF0uZXhwciwgdGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YUhvdHNwb3QgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZGF0YTtcbiAgICAgICAgICAgIGlmIChpc0xpc3RDaGFuZ2VkIHx8IGRhdGFIb3RzcG90ICYmIGNoYW5nZXNJc0luRGF0YVJlZihjaGFuZ2VzLCBkYXRhSG90c3BvdCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VDaGlsZHJlbihudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9jcmVhdGVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXJyYXkoY2hhbmdlcywgbGlzdERhdGEpO1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3REYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdERhdGE7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUNoaWxkcmVuKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lrZDlhYPntKBcbiAqXG4gKiBAcGFyYW0ge0FycmF5P30gY2hpbGRyZW4g6KaB6ZSA5q+B55qE5a2Q5YWD57Sg77yM6buY6K6k5Li66Ieq6Lqr55qEY2hpbGRyZW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOmHiuaUvuWujOaIkOeahOWbnuiwg+WHveaVsFxuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5fZGlzcG9zZUNoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50Tm9kZTtcbiAgICB2YXIgcGFyZW50Rmlyc3RDaGlsZCA9IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIHBhcmVudExhc3RDaGlsZCA9IHBhcmVudEVsLmxhc3RDaGlsZDtcblxuICAgIHZhciBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIHZhciB2aW9sZW50Q2xlYXIgPSAhdGhpcy5hTm9kZS5kaXJlY3RpdmVzLnRyYW5zaXRpb25cbiAgICAgICAgJiYgIWNoaWxkcmVuXG4gICAgICAgIC8vIOaYr+WQpiBwYXJlbnQg55qE5ZSv5LiAIGNoaWxkXG4gICAgICAgICYmIGxlbiAmJiBwYXJlbnRGaXJzdENoaWxkID09PSB0aGlzLmNoaWxkcmVuWzBdLmVsICYmIHBhcmVudExhc3RDaGlsZCA9PT0gdGhpcy5lbFxuICAgICAgICA7XG5cbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuXG4gICAgdmFyIGRpc3Bvc2VkQ2hpbGRDb3VudCA9IDA7XG4gICAgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgLy8g6LCD55So5YWl5Y+j5aSE5bey5L+d6K+B5q2k5aSE5b+F5pyJ6ZyA6KaB6KKr5Yig6Zmk55qEIGNoaWxkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZGlzcG9zZUNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKHZpb2xlbnRDbGVhcikge1xuICAgICAgICAgICAgZGlzcG9zZUNoaWxkICYmIGRpc3Bvc2VDaGlsZC5kaXNwb3NlKHZpb2xlbnRDbGVhciwgdmlvbGVudENsZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXNwb3NlQ2hpbGQpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VDaGlsZC5fb25kaXNwb3NlZCA9IGNoaWxkRGlzcG9zZWQ7XG4gICAgICAgICAgICBkaXNwb3NlQ2hpbGQuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hpbGREaXNwb3NlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpb2xlbnRDbGVhcikge1xuICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoaWUpIHtcbiAgICAgICAgICAgIHBhcmVudEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICBwYXJlbnRFbC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgfVxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hpbGREaXNwb3NlZCgpIHtcbiAgICAgICAgZGlzcG9zZWRDaGlsZENvdW50Kys7XG4gICAgICAgIGlmIChkaXNwb3NlZENoaWxkQ291bnQgPj0gbGVuKSB7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuRm9yTm9kZS5wcm90b3R5cGUub3B0aSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgL2Nocm9tZVxcL1swLTldKy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4vKipcbiAqIOaVsOe7hOexu+Wei+eahOinhuWbvuabtOaWsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKiBAcGFyYW0ge0FycmF5fSBuZXdMaXN0IOaWsOaVsOe7hOaVsOaNrlxuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5fdXBkYXRlQXJyYXkgPSBmdW5jdGlvbiAoY2hhbmdlcywgbmV3TGlzdCkge1xuICAgIHZhciBvbGRDaGlsZHJlbkxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciBjaGlsZHJlbkNoYW5nZXMgPSBuZXcgQXJyYXkob2xkQ2hpbGRyZW5MZW4pO1xuXG4gICAgZnVuY3Rpb24gcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGNoYW5nZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuQ2hhbmdlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbk5lZWRVcGRhdGUgPSBudWxsO1xuICAgICAgICBpc09ubHlEaXNwb3NlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGRpc3Bvc2VDaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8g5o6n5Yi25YiX6KGo5piv5ZCm5pW05L2T5pu05paw55qE5Y+Y6YePXG4gICAgdmFyIGlzQ2hpbGRyZW5SZWJ1aWxkO1xuXG4gICAgLy9cbiAgICB2YXIgaXNPbmx5RGlzcG9zZSA9IHRydWU7XG5cbiAgICB2YXIgY2hpbGRyZW5OZWVkVXBkYXRlID0ge307XG5cbiAgICB2YXIgbmV3TGVuID0gbmV3TGlzdC5sZW5ndGg7XG4gICAgdmFyIGdldEl0ZW1LZXkgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZ2V0Rm9yS2V5O1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4gICAgZm9yICh2YXIgY0luZGV4ID0gMDsgY0luZGV4IDwgY2hhbmdlcy5sZW5ndGg7IGNJbmRleCsrKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2NJbmRleF07XG4gICAgICAgIHZhciByZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCB0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICBpZiAoIXJlbGF0aW9uKSB7XG4gICAgICAgICAgICAvLyDml6DlhbPml7bvvIznm7TmjqXkvKDpgJLnu5nlrZDlhYPntKDmm7TmlrDvvIzliJfooajmnKzouqvkuI3pnIDopoHliqhcbiAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlbGF0aW9uID4gMikge1xuICAgICAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/nmoTlrZDpoblcbiAgICAgICAgICAgICAgICAvLyDlj6rpnIDopoHlr7nnm7jlupTnmoTlrZDpobnov5vooYzmm7TmlrBcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlUGF0aHMgPSBjaGFuZ2UuZXhwci5wYXRocztcbiAgICAgICAgICAgICAgICB2YXIgZm9yTGVuID0gdGhpcy5wYXJhbS52YWx1ZS5wYXRocy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZUluZGV4ID0gK2V2YWxFeHByKGNoYW5nZVBhdGhzW2Zvckxlbl0sIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGNoYW5nZUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzQ2hpbGRyZW5SZWJ1aWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzT25seURpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5OZWVkVXBkYXRlICYmIChjaGlsZHJlbk5lZWRVcGRhdGVbY2hhbmdlSW5kZXhdID0gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzW2NoYW5nZUluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbY2hhbmdlSW5kZXhdLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9IGNoYW5nZS50eXBlID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjaGFuZ2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtUGF0aHMuY29uY2F0KGNoYW5nZVBhdGhzLnNsaWNlKGZvckxlbiArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBjaGFuZ2UuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQ6IGNoYW5nZS5kZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zOiBjaGFuZ2UuaW5zZXJ0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjaGFuZ2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtUGF0aHMuY29uY2F0KGNoYW5nZVBhdGhzLnNsaWNlKGZvckxlbiArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbY2hhbmdlSW5kZXhdLnB1c2goY2hhbmdlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbGVudDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiuvue9ruaVsOe7hOmhueeahOe0ouW8leWPr+iDvei2heWHuuaVsOe7hOmVv+W6pu+8jOatpOaXtumcgOimgeaWsOWinlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOavlOWmguW9k+WJjeaVsOe7hOWPquaciTLpobnvvIzkvYbmmK9zZXQgbGlzdFs0XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0uc2NvcGUuX3NwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY2hhbmdlLmluZGV4LCBjaGFuZ2UuZGVsZXRlQ291bnQsIGNoYW5nZS5pbnNlcnRpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbGVudDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0NoaWxkcmVuUmVidWlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVsYXRpb24gPT09IDIgJiYgY2hhbmdlLnR5cGUgPT09IDJcbiAgICAgICAgICAgICAgICAmJiAodGhpcy5vd25lci51cGRhdGVNb2RlICE9PSAnb3B0aW1pemVkJyB8fCAhdGhpcy5vcHRpIHx8IHRoaXMuYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5OZWVkVXBkYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/mnKzouqvmlbDnu4TnmoRzcGxpY2Xmk43kvZxcbiAgICAgICAgICAgICAgICAvLyDmraTml7bpnIDopoHliKDpmaTpg6jliIbpobnvvIzliJvlu7rpg6jliIbpoblcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlU3RhcnQgPSBjaGFuZ2UuaW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUNvdW50ID0gY2hhbmdlLmRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRpb25zTGVuID0gY2hhbmdlLmluc2VydGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDb3VudCA9IGluc2VydGlvbnNMZW4gLSBkZWxldGVDb3VudDtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2UgPSB0aGlzLnBhcmFtLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLmluZGV4RXhwclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGFuZ2VTdGFydCArIGRlbGV0ZUNvdW50OyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPbmx5RGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goaW5kZXhDaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2NvcGUucmF3W2NoaWxkLnNjb3BlLmluZGV4TmFtZV0gPSBpIC0gZGVsZXRlQ291bnQgKyBpbnNlcnRpb25zTGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUxlbiA9IGRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgICAgIHdoaWxlIChkZWxldGVMZW4tLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlTGVuIDwgaW5zZXJ0aW9uc0xlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNPbmx5RGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBjaGFuZ2VTdGFydCArIGRlbGV0ZUxlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogdGhpcy5pdGVtRXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLmluc2VydGlvbnNbZGVsZXRlTGVuXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gPSBjaGFuZ2UuaW5zZXJ0aW9uc1tkZWxldGVMZW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NvdW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwb3NlQ2hpbGRyZW4gPSBkaXNwb3NlQ2hpbGRyZW4uY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hhbmdlU3RhcnQgKyBpbnNlcnRpb25zTGVuLCAtbmV3Q291bnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcy5zcGxpY2UoY2hhbmdlU3RhcnQgKyBpbnNlcnRpb25zTGVuLCAtbmV3Q291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNPbmx5RGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaWNlQXJncyA9IFtjaGFuZ2VTdGFydCArIGRlbGV0ZUNvdW50LCAwXS5jb25jYXQobmV3IEFycmF5KG5ld0NvdW50KSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIHNwbGljZUFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMuc3BsaWNlLmFwcGx5KGNoaWxkcmVuQ2hhbmdlcywgc3BsaWNlQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5OZWVkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpc09ubHlEaXNwb3NlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpc0NoaWxkcmVuUmVidWlsZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyDlj5jmm7Tooajovr7lvI/mmK9saXN057uR5a6a6KGo6L6+5byP5pys6Lqr5oiW5q+N6aG555qE6YeN5paw6K6+5YC8XG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26ZyA6KaB5pu05paw5pW05Liq5YiX6KGoXG5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0SXRlbUtleSAmJiBuZXdMZW4gJiYgb2xkQ2hpbGRyZW5MZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6K6+572u5LqGdHJhY2tCee+8jOeUqGxpc+abtOaWsOOAguW8gOWniyA9PT09XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdMaXN0S2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGlzdEtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0xpc3RLZXlzTWFwID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0SW5OZXcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExpc3RLZXlJbmRleCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBnZXRJdGVtS2V5KG5ld0xpc3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdEtleXMucHVzaChpdGVtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0xpc3RLZXlzTWFwW2l0ZW1LZXldID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtS2V5ID0gZ2V0SXRlbUtleSh0aGlzLmxpc3REYXRhW2ldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkTGlzdEtleXMucHVzaChpdGVtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZExpc3RLZXlJbmRleFtpdGVtS2V5XSA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdMaXN0S2V5c01hcFtpdGVtS2V5XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkTGlzdEluTmV3W2ldID0gbmV3TGlzdEtleXNNYXBbaXRlbUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0SW5OZXdbaV0gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlQ2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXhTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleEVuZCA9IG5ld0xlbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZEluZGV4U3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkSW5kZXhFbmQgPSBvbGRDaGlsZHJlbkxlbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDkvJjljJbvvJrku47lpLTlvIDlp4vmr5Tlr7nmlrDml6cgbGlzdCDpobnmmK/lkKbnm7jlkIxcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld0luZGV4U3RhcnQgPCBuZXdMZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG9sZEluZGV4U3RhcnQgPCBvbGRDaGlsZHJlbkxlblxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV3TGlzdEtleXNbbmV3SW5kZXhTdGFydF0gPT09IG9sZExpc3RLZXlzW29sZEluZGV4U3RhcnRdXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGFbb2xkSW5kZXhTdGFydF0gIT09IG5ld0xpc3RbbmV3SW5kZXhTdGFydF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW29sZEluZGV4U3RhcnRdLnNjb3BlLnJhd1t0aGlzLnBhcmFtLml0ZW1dID0gbmV3TGlzdFtuZXdJbmRleFN0YXJ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4U3RhcnRdID0gY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4U3RhcnRdIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLml0ZW1FeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3TGlzdFtuZXdJbmRleFN0YXJ0XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlr7lsaXN05pu05LiK57qn5pWw5o2u55qE55u05o6l6K6+572uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleFN0YXJ0XSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleFN0YXJ0XSB8fCBbXSkucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleFN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRJbmRleFN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2UgPSB0aGlzLnBhcmFtLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLmluZGV4RXhwclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOS8mOWMlu+8muS7juWwvuW8gOWni+avlOWvueaWsOaXpyBsaXN0IOmhueaYr+WQpuebuOWQjFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobmV3SW5kZXhFbmQgPiBuZXdJbmRleFN0YXJ0ICYmIG9sZEluZGV4RW5kID4gb2xkSW5kZXhTdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV3TGlzdEtleXNbbmV3SW5kZXhFbmQgLSAxXSA9PT0gb2xkTGlzdEtleXNbb2xkSW5kZXhFbmQgLSAxXVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4RW5kLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRJbmRleEVuZC0tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YVtvbGRJbmRleEVuZF0gIT09IG5ld0xpc3RbbmV3SW5kZXhFbmRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltvbGRJbmRleEVuZF0uc2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gPSBuZXdMaXN0W25ld0luZGV4RW5kXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4RW5kXSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleEVuZF0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaXRlbUV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0W25ld0luZGV4RW5kXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0luZGV4RW5kICE9PSBvbGRJbmRleEVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bb2xkSW5kZXhFbmRdLnNjb3BlLnJhd1t0aGlzLmNoaWxkcmVuW29sZEluZGV4RW5kXS5zY29wZS5pbmRleE5hbWVdID0gbmV3SW5kZXhFbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleEVuZF0gPSBjaGlsZHJlbkNoYW5nZXNbb2xkSW5kZXhFbmRdIHx8IFtdKS5wdXNoKGluZGV4Q2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4RW5kXSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleEVuZF0gfHwgW10pLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0TElTID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXNJZHggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc1BvcyA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzU291cmNlID0gb2xkTGlzdEluTmV3LnNsaWNlKG9sZEluZGV4U3RhcnQsIG9sZEluZGV4RW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IG9sZEluZGV4RW5kIC0gb2xkSW5kZXhTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZUlkeCA9IG5ldyBBcnJheShsZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRJdGVtSW5OZXcgPSBsaXNTb3VyY2VbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkSXRlbUluTmV3ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVQb3MgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZVBvc0VuZCA9IG9sZExpc3RMSVMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVQb3NFbmQgPiAwICYmIG9sZExpc3RMSVNbcmVQb3NFbmQgLSAxXSA8PSBvbGRJdGVtSW5OZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZVBvcyA9IHJlUG9zRW5kIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZVBvc0VuZCAtIHJlUG9zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigocmVQb3MgKyByZVBvc0VuZCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZExpc3RMSVNbbWlkXSA+IG9sZEl0ZW1Jbk5ldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVQb3NFbmQgPSBtaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZVBvcyA9IG1pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZUlkeFtpXSA9IGxpc0lkeFtyZVBvc107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZVBvcyA9PT0gbGlzUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzUG9zKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkTGlzdExJU1tsaXNQb3NdID0gb2xkSXRlbUluTmV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc0lkeFtsaXNQb3NdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkSXRlbUluTmV3IDwgb2xkTGlzdExJU1tyZVBvcyArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkTGlzdExJU1tyZVBvcyArIDFdID0gb2xkSXRlbUluTmV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc0lkeFtyZVBvcyArIDFdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsaXNJZHhbbGlzUG9zXTsgbGlzUG9zID49IDA7IGkgPSBwcmVJZHhbaV0sIGxpc1Bvcy0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0TElTW2xpc1Bvc10gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExpc3RMSVNQb3MgPSBvbGRMaXN0TElTLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRpY1BvcyA9IG9sZExpc3RMSVNQb3MgPyBvbGRMaXN0SW5OZXdbb2xkTGlzdExJU1stLW9sZExpc3RMSVNQb3NdICsgb2xkSW5kZXhTdGFydF0gOiAtMTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkcmVuQ2hhbmdlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBuZXdMZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gbmV3SW5kZXhFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbltpXSA9IHRoaXMuY2hpbGRyZW5bb2xkQ2hpbGRyZW5MZW4gLSBuZXdMZW4gKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbb2xkQ2hpbGRyZW5MZW4gLSBuZXdMZW4gKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPCBuZXdJbmRleFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW5baV0gPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0SW5kZXggPSBvbGRMaXN0S2V5SW5kZXhbbmV3TGlzdEtleXNbaV1dO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0YXRpY1Bvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2NvcGUgPSB0aGlzLmNoaWxkcmVuW29sZExpc3RJbmRleF0uc2NvcGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pWw5o2u5pys6Lqr5byV55So5Y+R55Sf5Y+Y5YyW77yM6K6+572u5Y+Y5pu0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhW29sZExpc3RJbmRleF0gIT09IG5ld0xpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFNjb3BlLnJhd1t0aGlzLnBhcmFtLml0ZW1dID0gbmV3TGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkTGlzdEluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRMaXN0SW5kZXhdIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLml0ZW1FeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0W2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q2hhbmdlICYmIGkgIT09IG9sZExpc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkU2NvcGUucmF3W29sZFNjb3BlLmluZGV4TmFtZV0gPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZExpc3RJbmRleF0gPSBjaGlsZHJlbkNoYW5nZXNbb2xkTGlzdEluZGV4XSB8fCBbXSkucHVzaChpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlr7lsaXN05pu05LiK57qn5pWw5o2u55qE55u05o6l6K6+572uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkTGlzdEluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRMaXN0SW5kZXhdIHx8IFtdKS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbltpXSA9IHRoaXMuY2hpbGRyZW5bb2xkTGlzdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW29sZExpc3RJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljUG9zID0gb2xkTGlzdExJU1BvcyA/IG9sZExpc3RJbk5ld1tvbGRMaXN0TElTWy0tb2xkTGlzdExJU1Bvc10gKyBvbGRJbmRleFN0YXJ0XSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZExpc3RJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlQ2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW29sZExpc3RJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW5baV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbkNoYW5nZXNbaV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMgPSBuZXdDaGlsZHJlbkNoYW5nZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiuvue9ruS6hnRyYWNrQnnvvIznlKhsaXPmm7TmlrDjgILnu5PmnZ8gPT09PVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6ICB55qE5q+U5paw55qE5aSa55qE6YOo5YiG77yM5qCH6K6w6ZyA6KaBZGlzcG9zZVxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkQ2hpbGRyZW5MZW4gPiBuZXdMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbi5zbGljZShuZXdMZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcyA9IGNoaWxkcmVuQ2hhbmdlcy5zbGljZSgwLCBuZXdMZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uc2xpY2UoMCwgbmV3TGVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWJqeS4i+eahOmDqOWIhuaVtOmhueWPmOabtFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlr7lsaXN05pu05LiK57qn5pWw5o2u55qE55u05o6l6K6+572uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldLnNjb3BlLnJhd1t0aGlzLnBhcmFtLml0ZW1dICE9PSBuZXdMaXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gPSBuZXdMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLml0ZW1FeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOagh+iusCBsZW5ndGgg5piv5ZCm5Y+R55Sf5Y+Y5YyWXG4gICAgaWYgKG5ld0xlbiAhPT0gb2xkQ2hpbGRyZW5MZW4gJiYgdGhpcy5wYXJhbS52YWx1ZS5wYXRocykge1xuICAgICAgICB2YXIgbGVuZ3RoQ2hhbmdlID0ge1xuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIG9wdGlvbjoge30sXG4gICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtLnZhbHVlLnBhdGhzLmNvbmNhdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVuZ3RoJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNoYW5nZXNJc0luRGF0YVJlZihbbGVuZ3RoQ2hhbmdlXSwgdGhpcy5hTm9kZS5ob3RzcG90LmRhdGEpKSB7XG4gICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMobGVuZ3RoQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOaJp+ihjOinhuWbvuabtOaWsO+8jOWFiOWIoOWGjeWIt+aWsFxuICAgIHRoaXMuX2RvQ3JlYXRlQW5kVXBkYXRlID0gZG9DcmVhdGVBbmRVcGRhdGU7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmIChkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9kaXNwb3NlQ2hpbGRyZW4oZGlzcG9zZUNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9DcmVhdGVBbmRVcGRhdGUgPT09IG1lLl9kb0NyZWF0ZUFuZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvQ3JlYXRlQW5kVXBkYXRlKCkge1xuICAgICAgICBtZS5fZG9DcmVhdGVBbmRVcGRhdGUgPSBudWxsO1xuXG4gICAgICAgIGlmIChpc09ubHlEaXNwb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmVmb3JlRWwgPSBtZS5lbDtcbiAgICAgICAgdmFyIHBhcmVudEVsID0gYmVmb3JlRWwucGFyZW50Tm9kZTtcblxuICAgICAgICAvLyDlr7nnm7jlupTnmoTpobnov5vooYzmm7TmlrBcbiAgICAgICAgLy8g5aaC5p6c5LiNYXR0YWNoZWTliJnnm7TmjqXliJvlu7rvvIzlpoLmnpzlrZjlnKjliJnosIPnlKjmm7TmlrDlh73mlbBcbiAgICAgICAgdmFyIGogPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gbWUuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNoYW5nZXNbaV0gJiYgKCFjaGlsZHJlbk5lZWRVcGRhdGUgfHwgY2hpbGRyZW5OZWVkVXBkYXRlW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fdXBkYXRlKGNoaWxkcmVuQ2hhbmdlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlRWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IG5ld0xlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRDaGlsZCA9IG1lLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZUVsID0gbmV4dENoaWxkLnNlbCB8fCBuZXh0Q2hpbGQuZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltpXSA9IGNyZWF0ZU5vZGUobWUuYU5vZGUuZm9yUmluc2VkLCBtZSwgbmV3IEZvckl0ZW1EYXRhKG1lLCBuZXdMaXN0W2ldLCBpKSwgbWUub3duZXIpO1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwgfHwgbWUuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRm9yTm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIGlmIOaMh+S7pOiKgueCueexu1xuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIG5vZGVPd25DcmVhdGVTdHVtcCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tY3JlYXRlLXN0dW1wJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG5cbi8qKlxuICogaWYg5oyH5Luk6IqC54K557G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIElmTm9kZShhTm9kZSwgcGFyZW50LCBzY29wZSwgb3duZXIsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICBpZiAoZXZhbEV4cHIodGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgdGhpcy5lbHNlSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bMF0gPSBjcmVhdGVSZXZlcnNlTm9kZShcbiAgICAgICAgICAgICAgICB0aGlzLmFOb2RlLmlmUmluc2VkLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsaWYgfHwgZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmVsc2VJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZHJlblswXSA9IGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZUFOb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuSWZOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IDI7XG5cbklmTm9kZS5wcm90b3R5cGUuX2NyZWF0ZSA9IG5vZGVPd25DcmVhdGVTdHVtcDtcbklmTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG4vKipcbiAqIGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbklmTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGVsc2VJbmRleDtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICBjaGlsZCA9IGNyZWF0ZU5vZGUodGhpcy5hTm9kZS5pZlJpbnNlZCwgdGhpcywgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgICAgIGVsc2VJbmRleCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGVsaWYgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICBpZiAoIWVsaWYgfHwgZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjcmVhdGVOb2RlKGVsc2VBTm9kZSwgbWUsIG1lLnNjb3BlLCBtZS5vd25lcik7XG4gICAgICAgICAgICAgICAgZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblswXSA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgdGhpcy5lbHNlSW5kZXggPSBlbHNlSW5kZXg7XG4gICAgfVxuXG5cbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcbn07XG5cblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5JZk5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGNoaWxkQU5vZGUgPSB0aGlzLmFOb2RlLmlmUmluc2VkO1xuICAgIHZhciBlbHNlSW5kZXg7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICBlbHNlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVhY2godGhpcy5hTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgaWYgKGVsaWYgJiYgZXZhbEV4cHIoZWxpZi52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKSB8fCAhZWxpZikge1xuICAgICAgICAgICAgICAgIGVsc2VJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIGNoaWxkQU5vZGUgPSBlbHNlQU5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuWzBdO1xuICAgIGlmIChlbHNlSW5kZXggPT09IHRoaXMuZWxzZUluZGV4KSB7XG4gICAgICAgIGNoaWxkICYmIGNoaWxkLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuX29uZGlzcG9zZWQgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NoaWxkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsc2VJbmRleCA9IGVsc2VJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdDaGlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbHNlSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAobWUuY2hpbGRyZW5bMF0gPSBjcmVhdGVOb2RlKGNoaWxkQU5vZGUsIG1lLCBtZS5zY29wZSwgbWUub3duZXIpKVxuICAgICAgICAgICAgICAgIC5hdHRhY2gobWUuZWwucGFyZW50Tm9kZSwgbWUuZWwpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gSWZOb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgdGVtcGxhdGUg6IqC54K557G7XG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2ggPSByZXF1aXJlKCcuL25vZGUtb3duLW9ubHktY2hpbGRyZW4tYXR0YWNoJyk7XG5cbi8qKlxuICogdGVtcGxhdGUg6IqC54K557G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIFRlbXBsYXRlTm9kZShhTm9kZSwgcGFyZW50LCBzY29wZSwgb3duZXIsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgbWUuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShhTm9kZUNoaWxkLCBtZSwgbWUuc2NvcGUsIG1lLm93bmVyLCByZXZlcnNlV2Fsa2VyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuYXR0YWNoZWQ7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IDc7XG5cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaDtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMuY2hpbGRyZW4sIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuXG4gICAgaWYgKCFub0RldGFjaCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5zZWwpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsID0gbnVsbDtcbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmRpc3Bvc2VkO1xuXG4gICAgaWYgKHRoaXMuX29uZGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5fb25kaXNwb3NlZCgpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5fdXBkYXRlKGNoYW5nZXMpO1xuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlTm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIEFOb2Rl6aKE54OtXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuLy8gdmFyIGtlYmFiMmNhbWVsID0gcmVxdWlyZSgnLi4vdXRpbC9rZWJhYjJjYW1lbCcpO1xuLy8gdmFyIGNyZWF0ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9jcmVhdGUtZWwnKTtcbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG4vLyB2YXIgVGV4dE5vZGUgPSByZXF1aXJlKCcuL3RleHQtbm9kZScpO1xuLy8gdmFyIFNsb3ROb2RlID0gcmVxdWlyZSgnLi9zbG90LW5vZGUnKTtcbi8vIHZhciBGb3JOb2RlID0gcmVxdWlyZSgnLi9mb3Itbm9kZScpO1xuLy8gdmFyIElmTm9kZSA9IHJlcXVpcmUoJy4vaWYtbm9kZScpO1xuLy8gdmFyIFRlbXBsYXRlTm9kZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUtbm9kZScpO1xuXG4vKipcbiAqIEFOb2Rl6aKE54Ot77yM5YiG5p6Q55qE5pWw5o2u5byV55So562J5L+h5oGvXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOimgemihOeDreeahEFOb2RlXG4gKi9cbmZ1bmN0aW9uIHByZWhlYXRBTm9kZShhTm9kZSkge1xuICAgIHZhciBzdGFjayA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmVjb3JkSG90c3BvdERhdGEoZXhwciwgbm90Q29udGVudERhdGEpIHtcbiAgICAgICAgdmFyIHJlZnMgPSBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIpO1xuXG4gICAgICAgIGlmIChyZWZzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub3RDb250ZW50RGF0YSB8fCBpICE9PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gc3RhY2tbaV0uaG90c3BvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzdGFja1tpXS5ob3RzcG90LmRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVhY2gocmVmcywgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtyZWZdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBhbmFseXNlQU5vZGVIb3RzcG90KGFOb2RlKSB7XG4gICAgICAgIGlmICghYU5vZGUuaG90c3BvdCkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChhTm9kZSk7XG5cblxuICAgICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdCA9IHt9O1xuICAgICAgICAgICAgICAgIGFOb2RlLkNsYXp6ID0gVGV4dE5vZGU7XG4gICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYU5vZGUudGV4dEV4cHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZU5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBhTm9kZS50YWdOYW1lXG4gICAgICAgICAgICAgICAgICAgICYmIGFOb2RlLnRhZ05hbWUuaW5kZXhPZignLScpIDwgMFxuICAgICAgICAgICAgICAgICAgICAmJiAhL14odGVtcGxhdGV8c2xvdHxzZWxlY3R8aW5wdXR8b3B0aW9ufGJ1dHRvbnx2aWRlb3xhdWRpb3xjYW52YXN8aW1nfGVtYmVkfG9iamVjdHxpZnJhbWUpJC9pLnRlc3QoYU5vZGUudGFnTmFtZSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTm9kZSA9IGNyZWF0ZUVsKGFOb2RlLnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNQcm9wczogW10sXG4gICAgICAgICAgICAgICAgICAgIHhQcm9wczogW10sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgYmluZHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VOb2RlOiBzb3VyY2VOb2RlXG4gICAgICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBkYXRhOiBzdGFydFxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEodmFySXRlbS5leHByKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUucHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuYmluZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZWJhYjJjYW1lbChwcm9wLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogcHJvcC5yYXcgIT0gbnVsbCA/IHByb3AuZXhwciA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcHJvcC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3OiBwcm9wLnJhd1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEocHJvcC5leHByKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhTm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoYU5vZGUuZGlyZWN0aXZlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEvXihodG1sfGJpbmQpJC8udGVzdChrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0IHRyYWNrQnkgZ2V0S2V5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFja0J5ID0gZGlyZWN0aXZlLnRyYWNrQnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNrQnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdHJhY2tCeS50eXBlID09PSA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRyYWNrQnkucGF0aHNbMF0udmFsdWUgPT09IGRpcmVjdGl2ZS5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZ2V0Rm9yS2V5ID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmV0dXJuICcgKyB0cmFja0J5LnJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXNlQU5vZGVIb3RzcG90KGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXNlQU5vZGVIb3RzcG90KGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IGRhdGE6IGVuZFxuXG5cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IHByb3BzOiBzdGFydFxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUucHJvcHMsIGZ1bmN0aW9uIChwcm9wLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnByb3BzW3Byb3AubmFtZV0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyID0gZ2V0UHJvcEhhbmRsZXIoYU5vZGUudGFnTmFtZSwgcHJvcC5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5uYW1lID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLmlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuaWRQcm9wID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcC5leHByLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyKHNvdXJjZU5vZGUsIHByb3AuZXhwci52YWx1ZSwgcHJvcC5uYW1lLCBhTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC54KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC54UHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGllIOS4i++8jOWmguaenCBvcHRpb24g5rKh5pyJIHZhbHVlIOWxnuaAp++8jHNlbGVjdC52YWx1ZSA9IHh4IOaTjeS9nOS4jeS8mumAieS4rSBvcHRpb25cbiAgICAgICAgICAgICAgICAvLyDmiYDku6XmsqHmnInorr7nva4gdmFsdWUg5pe277yM6buY6K6k5oqKIG9wdGlvbiDnmoTlhoXlrrnkvZzkuLogdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ29wdGlvbidcbiAgICAgICAgICAgICAgICAgICAgJiYgIWdldEFOb2RlUHJvcChhTm9kZSwgJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgJiYgYU5vZGUuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBhTm9kZS5jaGlsZHJlblswXS50ZXh0RXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGdldFByb3BIYW5kbGVyKGFOb2RlLnRhZ05hbWUsICd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLnByb3BzLnB1c2godmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaCh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnByb3BzLnZhbHVlID0gYU5vZGUucHJvcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgICAgICBhTm9kZS5pZlJpbnNlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM6IGFOb2RlLnZhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3RzcG90OiBhTm9kZS5ob3RzcG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogZXh0ZW5kKHt9LCBhTm9kZS5kaXJlY3RpdmVzKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5DbGF6eiA9IElmTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUgPSBhTm9kZS5pZlJpbnNlZDtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuZGlyZWN0aXZlc1snaWYnXSA9IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmZvclJpbnNlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM6IGFOb2RlLnZhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3RzcG90OiBhTm9kZS5ob3RzcG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogZXh0ZW5kKHt9LCBhTm9kZS5kaXJlY3RpdmVzKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5DbGF6eiA9IEZvck5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmZvclJpbnNlZC5kaXJlY3RpdmVzWydmb3InXSA9IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFOb2RlID0gYU5vZGUuZm9yUmluc2VkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYU5vZGUudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzbG90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLkNsYXp6ID0gU2xvdE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZW1wbGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5DbGF6eiA9IFRlbXBsYXRlTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBwcm9wczogZW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlKSB7XG4gICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoYU5vZGUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDliIbmnpDooajovr7lvI/nmoTmlbDmja7lvJXnlKhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDopoHliIbmnpDnmoTooajovr7lvI9cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIsIGFjY2Vzc29yTWVhbkR5bmFtaWMpIHtcbiAgICB2YXIgcmVmcyA9IFtdO1xuICAgIHZhciBpc0R5bmFtaWM7XG5cbiAgICBmdW5jdGlvbiBhbmFseXNlRXhwcnMoZXhwcnMsIGFjY2Vzc29yTWVhbkR5bmFtaWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHBycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHJlZnMgPSByZWZzLmNvbmNhdChhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHJzW2ldLCBhY2Nlc3Nvck1lYW5EeW5hbWljKSk7XG4gICAgICAgICAgICBpc0R5bmFtaWMgPSBpc0R5bmFtaWMgfHwgZXhwcnNbaV0uZHluYW1pYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGlzRHluYW1pYyA9IGFjY2Vzc29yTWVhbkR5bmFtaWM7XG5cbiAgICAgICAgICAgIHZhciBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgICAgICAgICByZWZzLnB1c2gocGF0aHNbMF0udmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaChwYXRoc1swXS52YWx1ZSArICcuJyArIChwYXRoc1sxXS52YWx1ZSB8fCAnKicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKHBhdGhzLnNsaWNlKDEpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHJlZnMgPSBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIuZXhwciwgYWNjZXNzb3JNZWFuRHluYW1pYyk7XG4gICAgICAgICAgICBpc0R5bmFtaWMgPSBleHByLmV4cHIuZHluYW1pYztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGV4cHIuc2VncywgYWNjZXNzb3JNZWFuRHluYW1pYyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZWZzID0gYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByLmV4cHIpO1xuICAgICAgICAgICAgaXNEeW5hbWljID0gZXhwci5leHByLmR5bmFtaWM7XG5cbiAgICAgICAgICAgIGVhY2goZXhwci5maWx0ZXJzLCBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGZpbHRlci5uYW1lLnBhdGhzKTtcbiAgICAgICAgICAgICAgICBhbmFseXNlRXhwcnMoZmlsdGVyLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGFuYWx5c2VFeHBycyhleHByLm5hbWUucGF0aHMpO1xuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGV4cHIuYXJncyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDEyOlxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHByLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVmcyA9IHJlZnMuY29uY2F0KGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwci5pdGVtc1tpXS5leHByKSk7XG4gICAgICAgICAgICAgICAgaXNEeW5hbWljID0gaXNEeW5hbWljIHx8IGV4cHIuaXRlbXNbaV0uZXhwci5keW5hbWljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaXNEeW5hbWljICYmIChleHByLmR5bmFtaWMgPSB0cnVlKTtcbiAgICByZXR1cm4gcmVmcztcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcHJlaGVhdEFOb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu657uE5Lu2TG9hZGVyXG4gKi9cblxuLy8gdmFyIENvbXBvbmVudExvYWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50LWxvYWRlcicpO1xuXG4vKipcbiAqIOWIm+W7uue7hOS7tkxvYWRlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25zIOWIm+W7uue7hOS7tkxvYWRlcueahOWPguaVsOOAguS4uk9iamVjdOaXtuWPguiAg+S4i+aWueaPj+i/sO+8jOS4ukZ1bmN0aW9u5pe25Luj6KGobG9hZOaWueazleOAglxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5sb2FkIGxvYWTmlrnms5VcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBvcHRpb25zLnBsYWNlaG9sZGVyIGxvYWRpbmfov4fnqIvkuK3muLLmn5PnmoTljaDkvY3nu4Tku7ZcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBvcHRpb25zLmZhbGxiYWNrIGxvYWTlpLHotKXml7bmuLLmn5PnmoTnu4Tku7ZcbiAqIEByZXR1cm4ge0NvbXBvbmVudExvYWRlcn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50TG9hZGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyO1xuICAgIHZhciBmYWxsYmFjayA9IG9wdGlvbnMuZmFsbGJhY2s7XG4gICAgdmFyIGxvYWQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMgOiBvcHRpb25zLmxvYWQ7XG5cbiAgICByZXR1cm4gbmV3IENvbXBvbmVudExvYWRlcihsb2FkLCBwbGFjZWhvbGRlciwgZmFsbGJhY2spO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb25lbnRMb2FkZXI7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gICAgIHZhciBuZXh0VGljayA9IHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuL3V0aWwvaW5oZXJpdHMnKTtcbi8vICAgICB2YXIgcGFyc2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyAgICAgdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vICAgICB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL3BhcnNlci9leHByLXR5cGUnKTtcbi8vICAgICB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi92aWV3L2xpZmUtY3ljbGUnKTtcbi8vICAgICB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL3ZpZXcvbm9kZS10eXBlJyk7XG4vLyAgICAgdmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21wb25lbnQnKTtcbi8vICAgICB2YXIgY29tcGlsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21waWxlLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL3ZpZXcvZGVmaW5lLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBjcmVhdGVDb21wb25lbnRMb2FkZXIgPSByZXF1aXJlKCcuL3ZpZXcvY3JlYXRlLWNvbXBvbmVudC1sb2FkZXInKTtcbi8vICAgICB2YXIgZW1pdERldnRvb2wgPSByZXF1aXJlKCcuL3V0aWwvZW1pdC1kZXZ0b29sJyk7XG4vLyAgICAgdmFyIERhdGEgPSByZXF1aXJlKCcuL3J1bnRpbWUvZGF0YScpO1xuLy8gICAgIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vICAgICB2YXIgRGF0YVR5cGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGEtdHlwZXMnKTtcblxuXG4gICAgdmFyIHNhbiA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNhbueJiOacrOWPt1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbjogJzMuOC4xJyxcblxuICAgICAgICAvLyAjW2JlZ2luXSBkZXZ0b29sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK/osIPor5XjgILlvIDlkK/osIPor5Xml7YgZGV2dG9vbCDkvJrlt6XkvZxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe7hOS7tuWfuuexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yib5bu657uE5Lu257G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byDnu4Tku7bnsbvnmoTmlrnms5XooahcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBkZWZpbmVDb21wb25lbnQ6IGRlZmluZUNvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yib5bu657uE5Lu2TG9hZGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25zIOWIm+W7uue7hOS7tkxvYWRlcueahOWPguaVsOOAguS4uk9iamVjdOaXtuWPguiAg+S4i+aWueaPj+i/sO+8jOS4ukZ1bmN0aW9u5pe25Luj6KGobG9hZOaWueazleOAglxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmxvYWQgbG9hZOaWueazlVxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uPX0gb3B0aW9ucy5wbGFjZWhvbGRlciBsb2FkaW5n6L+H56iL5Lit5riy5p+T55qE5Y2g5L2N57uE5Lu2XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb249fSBvcHRpb25zLmZhbGxiYWNrIGxvYWTlpLHotKXml7bmuLLmn5PnmoTnu4Tku7ZcbiAgICAgICAgICogQHJldHVybiB7Q29tcG9uZW50TG9hZGVyfVxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlQ29tcG9uZW50TG9hZGVyOiBjcmVhdGVDb21wb25lbnRMb2FkZXIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBpbGVDb21wb25lbnQ6IGNvbXBpbGVDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOino+aekCB0ZW1wbGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSB0ZW1wbGF0ZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7QU5vZGV9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZVRlbXBsYXRlOiBwYXJzZVRlbXBsYXRlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6PmnpDooajovr7lvI9cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2VFeHByOiBwYXJzZUV4cHIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOi+vuW8j+exu+Wei+aemuS4vlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIEV4cHJUeXBlOiBFeHByVHlwZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog55Sf5ZG95ZGo5pyfXG4gICAgICAgICAqL1xuICAgICAgICBMaWZlQ3ljbGU6IExpZmVDeWNsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6IqC54K557G75Z6LXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgTm9kZVR5cGU6IE5vZGVUeXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlnKjkuIvkuIDkuKrmm7TmlrDlkajmnJ/ov5DooYzlh73mlbBcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGljazogbmV4dFRpY2ssXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaVsOaNruexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAY2xhc3NcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3Q/fSBkYXRhIOWIneWni+aVsOaNrlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGE/fSBwYXJlbnQg54i257qn5pWw5o2u5a+56LGhXG4gICAgICAgICAqL1xuICAgICAgICBEYXRhOiBEYXRhLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorqHnrpfooajovr7lvI/nmoTlgLxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4gICAgICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7lr7nosaFcbiAgICAgICAgICogQHBhcmFtIHtDb21wb25lbnQ9fSBvd25lciDnu4Tku7blr7nosaHvvIznlKjkuo7ooajovr7lvI/kuK1maWx0ZXLnmoTmiafooYxcbiAgICAgICAgICogQHJldHVybiB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2YWxFeHByOiBldmFsRXhwcixcblxuICAgICAgICAvKipcbiAgICAgICAgICog5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YkNsYXNzIOWtkOexu+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdXBlckNsYXNzIOeItuexu+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhVHlwZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIERhdGFUeXBlczogRGF0YVR5cGVzXG4gICAgfTtcblxuICAgIC8vIGV4cG9ydFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRm9yIENvbW1vbkpTXG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHNhbjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEZvciBBTURcbiAgICAgICAgZGVmaW5lKCdzYW4nLCBbXSwgc2FuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEZvciA8c2NyaXB0IHNyYz1cIi4uLlwiXG4gICAgICAgIHJvb3Quc2FuID0gc2FuO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICBlbWl0RGV2dG9vbC5zdGFydChzYW4pO1xuICAgIC8vICNbZW5kXVxufSkodGhpcyk7XG4vL0Agc291cmNlTWFwcGluZ1VSTD1zYW4uZGV2LmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiLyoqXG4gKiBAZmlsZSBjbGFzc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6Y2xhc3MnLCAndi1iaW5kOmNsYXNzJ107XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIG5vZGUuY2xhc3NCaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0NsYXNzID0gbm9kZS5hdHRyc01hcC5jbGFzcyB8fCAnJztcbiAgICAgICAgbm9kZS5hdHRyc01hcC5jbGFzcyA9IGB7eyBfbWMoJyR7c3RhdGljQ2xhc3N9JywgJHtub2RlLmNsYXNzQmluZGluZy5yZXBsYWNlKC9cXHMrL2csICcgJyl9KSB9fWA7XG4gICAgICAgIGJpbmRLZXlzLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBzdHlsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IGJpbmRLZXlzID0gWyc6c3R5bGUnLCAndi1iaW5kOnN0eWxlJywgJ3Ytc2hvdyddO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgY29uc3QgdlNob3cgPSBub2RlLmF0dHJzTWFwWyd2LXNob3cnXTtcbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIChub2RlLnN0eWxlQmluZGluZyB8fCB2U2hvdykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBub2RlLnN0YXRpY1N0eWxlIHx8ICdcXCdcXCcnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICBub2RlLmF0dHJzTWFwLnN0eWxlID0gYHt7IF9tcygke3N0YXRpY1N0eWxlLnJlcGxhY2UoL1wiL2csICdcXCcnKX0sICR7bm9kZS5zdHlsZUJpbmRpbmcgPyBub2RlLnN0eWxlQmluZGluZy5yZXBsYWNlKC9cXHMrL2csICcgJykgOiAne30nfSR7dlNob3cgPyBgLCAke3ZTaG93fWAgOiAnJ30pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGJpbmRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCByZUJpbmQgPSAvXih2LWJpbmQpP1xcOi87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLmZpbHRlcihuID0+IHJlQmluZC50ZXN0KG4pKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldO1xuICAgICAgICBub2RlLmF0dHJzTWFwW2tleS5yZXBsYWNlKHJlQmluZCwgJycpXSA9IGB7eyAke3ZhbHVlLnJlcGxhY2UoL1xccysvZywgJyAnKX0gfX1gO1xuICAgIH1cblxuICAgIGlmIChub2RlLmF0dHJzTWFwWyd2LWJpbmQnXSkge1xuICAgICAgICBjb25zdCB2QmluZCA9IG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWJpbmQnXSA9IGB7eyAke3ZCaW5kfSB9fWA7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWJpbmQnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgaWZcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaWYpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1pZiddID0gbm9kZS5pZjtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtaWYnXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5lbHNlaWYpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlLWlmJ10gPSBub2RlLmVsc2VpZjtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZS1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2UpIHtcbiAgICAgICAgbm9kZS5hdHRyc01hcFsncy1lbHNlJ10gPSBub2RlLmVsc2U7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWVsc2UnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZm9yXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZnIgPSBub2RlLmFsaWFzO1xuXG4gICAgaWYgKG5vZGUuaXRlcmF0b3IxKSB7XG4gICAgICAgIGZyICs9IGAsJHtub2RlLml0ZXJhdG9yMX1gO1xuICAgIH1cblxuICAgIGZyICs9IGAgaW4gX2woJHtub2RlLmZvcn0pYDtcblxuICAgIGlmIChub2RlLmtleSkge1xuICAgICAgICBmciArPSBgIHRyYWNrQnkgJHtub2RlLmtleX1gO1xuICAgIH1cblxuICAgIG5vZGUuYXR0cnNNYXBbJ3MtZm9yJ10gPSBmcjtcblxuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWZvciddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWydrZXknXTtcbiAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsnOmtleSddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LWJpbmQ6a2V5J107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgZXZlbnRcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5jb25zdCBwcmVmaXhlcnMgPSBbJ0AnLCAndi1vbjonXTtcbmNvbnN0IHJlRXZlbnQgPSAvXihAfHYtb246KS87XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCBldmVudEF0dHJzID0gbm9kZS5hdHRyc0xpc3QuZmlsdGVyKG4gPT4gcmVFdmVudC50ZXN0KG4ubmFtZSkpO1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBldmVudEF0dHJzKSB7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwW2F0dHIubmFtZV07XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5tb2RpZmllcnNdID0gYXR0ci5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbYG9uLSR7bmFtZS5yZXBsYWNlKHJlRXZlbnQsICcnKX1gXVxuICAgICAgICAgICAgPSBgJHttb2RpZmllcnMubWFwKG0gPT4gYCR7bX06YCkuam9pbignJyl9JHthdHRyLnZhbHVlfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5hdHRyc01hcFsndi1odG1sJ10pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ2h0bWwnKS52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtaHRtbCddO1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWh0bWwnXSA9IGB7eyAke3ZhbHVlfSB9fWA7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAxICYmIG5vZGUuYXR0cnNNYXBbJ3YtdGV4dCddKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5kaXJlY3RpdmVzLmZpbmQoZCA9PiBkLm5hbWUgPT09ICd0ZXh0JykudmFsdWU7XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyd2LXRleHQnXTtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFt7XG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgdGV4dDogYHt7ICR7dmFsdWV9IH19YFxuICAgICAgICB9XTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUg5LiA5Lqb5bel5YW35Ye95pWwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodG8sIGZyb20pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbihzdHIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nO1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShcXHcpL2csIChfLCBjKSA9PiAoYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKSk7XG4iLCIvKipcbiAqIEBmaWxlIHJlZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSwgb3B0aW9ucykge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEgfHwgIW5vZGUuYXR0cnNNYXAucmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVmID0gbm9kZS5hdHRyc01hcFsncy1yZWYnXSA9IG5vZGUuYXR0cnNNYXAucmVmO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwLnJlZjtcblxuICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIG5hbWU6IHJlZixcbiAgICAgICAgcm9vdDogbm9kZS5wYXJlbnQgPyB1bmRlZmluZWQgOiAxLFxuICAgICAgICBmb3I6IG5vZGUuZm9yID8gMSA6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBvcHRpb25zLnJlZnMucHVzaChpbmZvKTtcbiAgICBjb25zdCBjYW1lbE5hbWUgPSBjYW1lbGl6ZShyZWYpO1xuXG4gICAgaWYgKGNhbWVsTmFtZSAhPT0gcmVmKSB7XG4gICAgICAgIG9wdGlvbnMucmVmcy5wdXNoKHtcbiAgICAgICAgICAgIC4uLmluZm8sXG4gICAgICAgICAgICBuYW1lOiBjYW1lbE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHRyYW5zZm9ybWVyc1xuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBjbGF6eiBmcm9tICcuL2NsYXNzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBiaW5kIGZyb20gJy4vYmluZCc7XG5pbXBvcnQgeWYgZnJvbSAnLi9pZic7XG5pbXBvcnQgZnIgZnJvbSAnLi9mb3InO1xuaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sJztcbmltcG9ydCByZWYgZnJvbSAnLi9yZWYnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgeWYsXG4gICAgZnIsXG4gICAgZXZlbnQsXG4gICAgaHRtbCxcbiAgICByZWYsXG5cbiAgICBjbGF6eixcbiAgICBzdHlsZSxcblxuICAgIC8vIGJpbmQg5pS+5ZyoIGNsYXNzIOWSjCBzdHlsZSDlpITnkIblrozkuYvlkI5cbiAgICBiaW5kXG5dO1xuIiwiLyoqXG4gKiBAZmlsZSBnZXQgaHRtbCBmcm9tIGFzdFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbi8qXG4gIFNlbGYtZW5jbG9zaW5nIHRhZ3MgKHN0b2xlbiBmcm9tIG5vZGUtaHRtbHBhcnNlcilcbiovXG5jb25zdCBzaW5nbGVUYWcgPSB7XG4gICAgYXJlYTogdHJ1ZSxcbiAgICBiYXNlOiB0cnVlLFxuICAgIGJhc2Vmb250OiB0cnVlLFxuICAgIGJyOiB0cnVlLFxuICAgIGNvbDogdHJ1ZSxcbiAgICBjb21tYW5kOiB0cnVlLFxuICAgIGVtYmVkOiB0cnVlLFxuICAgIGZyYW1lOiB0cnVlLFxuICAgIGhyOiB0cnVlLFxuICAgIGltZzogdHJ1ZSxcbiAgICBpbnB1dDogdHJ1ZSxcbiAgICBpc2luZGV4OiB0cnVlLFxuICAgIGtleWdlbjogdHJ1ZSxcbiAgICBsaW5rOiB0cnVlLFxuICAgIG1ldGE6IHRydWUsXG4gICAgcGFyYW06IHRydWUsXG4gICAgc291cmNlOiB0cnVlLFxuICAgIHRyYWNrOiB0cnVlLFxuICAgIHdicjogdHJ1ZVxufTtcblxuY29uc3Qgbm9WYWx1ZUF0dHIgPSB7XG4gICAgJ3MtZWxzZSc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUF0dHIoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChub1ZhbHVlQXR0cltrZXldKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHJldHVybiBgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmluZ2lmeShhc3QsIHNjb3BlSWQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXN0KSkge1xuICAgICAgICBhc3QgPSBbYXN0XTtcbiAgICB9XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFzdCkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAzIHx8IG5vZGUudHlwZSA9PT0gMikge1xuICAgICAgICAgICAgaHRtbCArPSBub2RlLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnNNYXApLm1hcChrZXkgPT4gc3RyaW5naWZ5QXR0cihrZXksIG5vZGUuYXR0cnNNYXBba2V5XSkpO1xuICAgICAgICAgICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHNjb3BlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0F0dHIgPSBhdHRycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaHRtbCArPSBgPCR7bm9kZS50YWd9JHtoYXNBdHRyID8gJyAnIDogJyd9JHthdHRycy5qb2luKCcgJyl9PmA7XG4gICAgICAgICAgICBodG1sICs9IGhhc0NoaWxkcmVuID8gc3RyaW5naWZ5KG5vZGUuY2hpbGRyZW4sIHNjb3BlSWQpIDogJyc7XG4gICAgICAgICAgICBodG1sICs9ICFoYXNDaGlsZHJlbiAmJiBzaW5nbGVUYWdbbm9kZS50YWddID8gJycgOiBgPC8ke25vZGUudGFnfT5gO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pZkNvbmRpdGlvbnMgJiYgbm9kZS5pZkNvbmRpdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gc3RyaW5naWZ5KG5vZGUuaWZDb25kaXRpb25zLnNsaWNlKDEpLm1hcChuID0+IG4uYmxvY2spLCBzY29wZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjc3MgbW9kdWxlcyBtb2R1bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjc3NNb2R1bGVzKSB7XG5cbiAgICBmdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgICAgIGlmIChjc3NNb2R1bGVzICYmIGNzc01vZHVsZXMuJHN0eWxlICYmIGVsLmF0dHJzTWFwLmNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNDbGFzcyA9IGVsLmF0dHJzTWFwLmNsYXNzLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCAnJykuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGVsLmF0dHJzTWFwLmNsYXNzID0gc3RhdGljQ2xhc3MubWFwKGMgPT4gKGNzc01vZHVsZXMuJHN0eWxlW2NhbWVsaXplKGMpXSB8fCBjKSkuam9pbignICcpO1xuICAgICAgICAgICAgZWwuYXR0cnNMaXN0ID0gZWwuYXR0cnNMaXN0Lm1hcChcbiAgICAgICAgICAgICAgICAoe25hbWUsIHZhbHVlfSkgPT4gKHtuYW1lLCB2YWx1ZTogbmFtZSA9PT0gJ2NsYXNzJyA/IGVsLmF0dHJzTWFwLmNsYXNzIDogdmFsdWV9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByZVRyYW5zZm9ybU5vZGVcbiAgICB9O1xufVxuXG4iLCIvKipcbiAqIEBmaWxlIHN0cmlwXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUoZWwpIHtcbiAgICBlbC5jaGlsZHJlbiA9IGVsLmNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSAzKSB7XG4gICAgICAgICAgICBjaGlsZC50ZXh0ID0gXy50cmltKGNoaWxkLnRleHQsICcgXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IDIgJiYgY2hpbGQuZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGNoaWxkLmV4cHJlc3Npb247XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGV4cHJlc3Npb24uc3BsaXQoJysnKTtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgICAgICAgbGV0IGxhc3QgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXlwiLipcIiQvLnRlc3QoZmlyc3QpKSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBKU09OLnBhcnNlKGZpcnN0KTtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IF8udHJpbVN0YXJ0KGZpcnN0LCAnIFxcbicpO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50b2tlbnNbMF0gPSBmaXJzdDtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbMF0gPSBKU09OLnN0cmluZ2lmeShmaXJzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL15cIi4qXCIkLy50ZXN0KGxhc3QpKSB7XG4gICAgICAgICAgICAgICAgbGFzdCA9IEpTT04ucGFyc2UobGFzdCk7XG4gICAgICAgICAgICAgICAgbGFzdCA9IF8udHJpbUVuZChsYXN0LCAnIFxcbicpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vuc1twYXJ0cy5sZW5ndGggLSAxXSA9IGxhc3Q7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdID0gSlNPTi5zdHJpbmdpZnkobGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50b2tlbnMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkLmV4cHJlc3Npb24gPSBwYXJ0cy5qb2luKCcrJyk7XG4gICAgICAgICAgICBjaGlsZC50ZXh0ID0gXy50cmltKGNoaWxkLnRleHQsICcgXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIGF0b20gbW9kdWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gcHJlVHJhbnNmb3JtTm9kZShlbCkge1xuICAgIGVsLmF0dHJzTGlzdCA9IGVsLmF0dHJzTGlzdC5tYXAoKHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgICAgICAgZGVsZXRlIGVsLmF0dHJzTWFwW25hbWVdO1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eYS0vLCAndi0nKTtcbiAgICAgICAgZWwuYXR0cnNNYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJlVHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY29tcGlsZXJcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7Y29tcGlsZSBhcyB2dWVDb21waWxlfSBmcm9tICd2dWUtdGVtcGxhdGUtY29tcGlsZXInO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeSc7XG5pbXBvcnQgZ2V0Q3NzTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvY3NzbW9kdWxlcyc7XG5pbXBvcnQgc3RyaXAgZnJvbSAnLi9tb2R1bGVzL3N0cmlwJztcbmltcG9ydCBhdG9tIGZyb20gJy4vbW9kdWxlcy9hdG9tJztcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7cGFyc2VUZW1wbGF0ZX0gZnJvbSAnc2FuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoc291cmNlLCBvcHRpb25zID0ge30pIHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBjc3NNb2R1bGVzID0gbnVsbCxcbiAgICAgICAgc2NvcGVJZCA9ICcnLFxuICAgICAgICBzdHJpcCA9IHRydWUsXG4gICAgICAgIGF0b206IGlzQXRvbSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWlzRW1wdHkoY3NzTW9kdWxlcykpIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGdldENzc01vZHVsZXMoY3NzTW9kdWxlcykpO1xuICAgIH1cblxuICAgIGlmIChzdHJpcCkge1xuICAgICAgICBtb2R1bGVzLnVuc2hpZnQoc3RyaXApO1xuICAgIH1cblxuICAgIGlmIChpc0F0b20pIHtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGF0b20pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAgLi4uYnVpbGRJbk1vZHVsZXMsXG4gICAgICAgICAgICAuLi5tb2R1bGVzXG4gICAgICAgIF0sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2UsXG4gICAgICAgIHVzZUR5bmFtaWNDb21wb25lbnQ6IGZhbHNlLFxuICAgICAgICByZWZzOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCB7YXN0fSA9IHZ1ZUNvbXBpbGUoc291cmNlLnRyaW0oKSwgY29tcGlsZXJPcHRpb25zKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gc3RyaW5naWZ5KGFzdCwgc2NvcGVJZCk7XG4gICAgY29uc3QgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKS5jaGlsZHJlblswXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFzdCxcbiAgICAgICAgYU5vZGUsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICByZWZzOiBjb21waWxlck9wdGlvbnMucmVmc1xuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9