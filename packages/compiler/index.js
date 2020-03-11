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

    console.log(changes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9lYWNoLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3VuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9zcGxpdC1zdHItMi1vYmouanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3N2Zy10YWdzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9jcmVhdGUtZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL3JlbW92ZS1lbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvbmV4dC10aWNrLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9pZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvdHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvaW5wdXQtZXZlbnQtY29tcGF0aWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9kYXRhLXR5cGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9jcmVhdGUtZGF0YS10eXBlcy1jaGVja2VyLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3dhbGtlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwva2ViYWIyY2FtZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL2Jvb2wtYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvZXhwci10eXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL2NyZWF0ZS1hY2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXVuYXJ5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1pZGVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXRlcnRpYXJ5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1hY2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1wYXJlbnRoZXNpemVkLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1tdWx0aXBsaWNhdGl2ZS1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3JlYWQtYWRkaXRpdmUtZXhwci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLXJlbGF0aW9uYWwtZXhwci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9yZWFkLWVxdWFsaXR5LWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcmVhZC1sb2dpY2FsLWFuZC1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3JlYWQtbG9naWNhbC1vci1leHByLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3BhcnNlLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIvcGFyc2UtY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS1pbnRlcnAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsL2RlY29kZS1odG1sLWVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS10ZXh0LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VyL3BhcnNlLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9pbnRlZ3JhdGUtYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlci9wYXJzZS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvZGVmYXVsdC1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcnVudGltZS9ldmFsLWV4cHIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2V2YWwtYXJncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvbGlmZS1jeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvbm9kZS10eXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtYS1ub2RlLXByb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2dldC1wcm9wLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2ZpbmQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9zcmMvcnVudGltZS9kYXRhLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtZXZlbnQtbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL2luc2VydC1iZWZvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2Jhc2UtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2RvbS1jaGlsZHJlbi13YWxrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L25vZGUtb3duLWNyZWF0ZS1zdHVtcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLW93bi1zaW1wbGUtZGlzcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvYXN5bmMtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9jcmVhdGUtcmV2ZXJzZS1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NyZWF0ZS1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9lbGVtZW50LWdldC10cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9lbGVtZW50LW93bi1kZXRhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLWRpc3Bvc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLW9uLWVsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYnJvd3Nlci9pcy1icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC93YXJuLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2VsZW1lbnQtb3duLWF0dGFjaGVkLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLXMtYmluZC1pbml0LmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC91bmlvbi1rZXlzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLXMtYmluZC11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9icm93c2VyL25vLXNldC1odG1sLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy93YXJuLXNldC1odG1sLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9nZXQtbm9kZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9lbWl0LWRldnRvb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvZGVmaW5lLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvY29tcG9uZW50LWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvY29tcGlsZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2lzLWVuZC1zdHVtcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvdGV4dC1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvc2xvdC1ub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmlldy9mb3Itbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvaWYtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvdGVtcGxhdGUtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZpZXcvcHJlaGVhdC1hLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92aWV3L2NyZWF0ZS1jb21wb25lbnQtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21waWxlci9tb2R1bGVzL2Nzc21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvc3RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBpbGVyL21vZHVsZXMvYXRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcGlsZXIvaW5kZXguanMiXSwibmFtZXMiOlsiYmluZEtleXMiLCJwb3N0VHJhbnNmb3JtTm9kZSIsIm5vZGUiLCJ0eXBlIiwiY2xhc3NCaW5kaW5nIiwic3RhdGljQ2xhc3MiLCJhdHRyc01hcCIsImNsYXNzIiwicmVwbGFjZSIsImZvckVhY2giLCJrZXkiLCJ2U2hvdyIsInN0eWxlQmluZGluZyIsInN0YXRpY1N0eWxlIiwic3R5bGUiLCJyZUJpbmQiLCJrZXlzIiwiT2JqZWN0IiwiZmlsdGVyIiwibiIsInRlc3QiLCJ2YWx1ZSIsInZCaW5kIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiZm9yIiwiZnIiLCJhbGlhcyIsIml0ZXJhdG9yMSIsInByZWZpeGVycyIsInJlRXZlbnQiLCJldmVudEF0dHJzIiwiYXR0cnNMaXN0IiwibmFtZSIsImF0dHIiLCJtb2RpZmllcnMiLCJzcGxpdCIsIm1hcCIsIm0iLCJqb2luIiwiZGlyZWN0aXZlcyIsImZpbmQiLCJkIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZXh0ZW5kIiwidG8iLCJmcm9tIiwidG9PYmplY3QiLCJhcnIiLCJyZXMiLCJpIiwibGVuZ3RoIiwiY2FjaGVkIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJ0b0xvd2VyQ2FzZSIsImNhbWVsaXplIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsIm9wdGlvbnMiLCJyZWYiLCJpbmZvIiwicm9vdCIsInBhcmVudCIsInVuZGVmaW5lZCIsInJlZnMiLCJwdXNoIiwiY2FtZWxOYW1lIiwieWYiLCJldmVudCIsImh0bWwiLCJjbGF6eiIsImJpbmQiLCJzaW5nbGVUYWciLCJhcmVhIiwiYmFzZSIsImJhc2Vmb250IiwiYnIiLCJjb2wiLCJjb21tYW5kIiwiZW1iZWQiLCJmcmFtZSIsImhyIiwiaW1nIiwiaW5wdXQiLCJpc2luZGV4Iiwia2V5Z2VuIiwibGluayIsIm1ldGEiLCJwYXJhbSIsInNvdXJjZSIsInRyYWNrIiwid2JyIiwibm9WYWx1ZUF0dHIiLCJzdHJpbmdpZnlBdHRyIiwiSlNPTiIsInN0cmluZ2lmeSIsImFzdCIsInNjb3BlSWQiLCJBcnJheSIsImlzQXJyYXkiLCJhdHRycyIsImhhc0NoaWxkcmVuIiwiaGFzQXR0ciIsInRhZyIsImlmQ29uZGl0aW9ucyIsInNsaWNlIiwiYmxvY2siLCJjc3NNb2R1bGVzIiwicHJlVHJhbnNmb3JtTm9kZSIsImVsIiwiJHN0eWxlIiwiY2hpbGQiLCJ0cmltIiwiZXhwcmVzc2lvbiIsInBhcnRzIiwiZmlyc3QiLCJsYXN0IiwicGFyc2UiLCJ0cmltU3RhcnQiLCJ0b2tlbnMiLCJzaGlmdCIsInRyaW1FbmQiLCJwb3AiLCJjb21waWxlIiwibW9kdWxlcyIsInN0cmlwIiwiYXRvbSIsImlzQXRvbSIsImlzRW1wdHkiLCJ1bnNoaWZ0IiwiZ2V0Q3NzTW9kdWxlcyIsImNvbXBpbGVyT3B0aW9ucyIsImJ1aWxkSW5Nb2R1bGVzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwidXNlRHluYW1pY0NvbXBvbmVudCIsInZ1ZUNvbXBpbGUiLCJ0ZW1wbGF0ZSIsImFOb2RlIiwicGFyc2VUZW1wbGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSxtQzs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7OztBQVVBOzs7OztBQUtBLGUsQ0FFQTs7QUNqQkE7Ozs7Ozs7OztBQVVBOzs7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LENBQ0E7O0FDdkJBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7O0FBS0EsMkcsQ0FFQTs7QUNsQkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHFDQUNBLElBREEsQ0FDQSxHQURBLEVBRUEsS0FGQSxDQUVBLENBRkEsRUFFQSxFQUZBLEVBR0EsV0FIQTtBQUlBLEcsQ0FDQTs7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBQ0Esc0NBSEEsQ0FLQTtBQUNBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBLDREQU5BLENBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQ0EsT0FEQSxHQUNBLFFBREEsR0FDQSxJQURBLEdBRUEsNEJBRkEsR0FFQSxhQUZBLEdBRUEsS0FGQSxHQUdBLG1CQUhBLEdBR0EsUUFIQTtBQUtBLFNBUkEsQ0FTQTs7O0FBQ0E7QUFDQTs7QUFFQTtBQUVBLEtBeEJBOztBQTBCQTtBQUNBLDREQW5DQSxDQW9DQTs7QUFFQTtBQUVBLEcsQ0FFQTs7QUFDQTs7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUNBLFVBREEsR0FDQSxhQURBLEdBQ0EsU0FEQSxHQUNBLFlBREEsR0FDQSxXQURBLEdBRUEsR0FGQSxHQUVBLFFBRkEsR0FFQSxlQUZBLEdBRUEsYUFGQSxHQUVBLElBRkEsR0FHQSxXQUhBLEdBR0EsSUFIQSxHQUdBLEdBSEE7QUFLQTtBQUVBLEtBYkE7QUFlQTtBQUlBOzs7Ozs7OztBQU1BO0FBRUE7QUFFQTtBQUNBLHlDQUNBLFFBREEsR0FDQSxRQURBLEdBQ0EsUUFEQSxHQUNBLGFBREEsR0FDQSxnQkFEQSxHQUVBLHlEQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUNBLFVBREEsR0FDQSxhQURBLEdBQ0EsU0FEQSxHQUNBLFlBREEsR0FDQSxXQURBLEdBRUEsR0FGQSxHQUVBLFFBRkEsR0FFQSxlQUZBLEdBRUEsYUFGQSxH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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBakNBO0FBbUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBOUNBO0FBZ0RBO0FBRUE7O0FDckZBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFQQTs7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBM0RBO0FBOERBOzs7QUFDQTs7QUFFQTtBQUNBLHdCQUNBLHNEQURBLEVBRUEsSUFGQSxFQUdBLEtBSEE7O0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFDQSxLQURBLEVBRUEsa0RBRkE7QUFiQTtBQWtCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQTNMQTs7QUE4TEE7QUFDQSxHLENBRUE7O0FDOU5BOzs7Ozs7OztBQVVBOztBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHLENBRUE7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQSxhQUVBO0FBQ0E7QUFIQSxZQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQ0EsbURBREEsRUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUF6RUE7O0FBNEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEcsQ0FFQTs7QUM1SUE7Ozs7Ozs7OztBQVNBOzs7Ozs7OztBQU1BO0FBQ0EsVUFEQTtBQUVBO0FBRkEsSSxDQUtBOztBQ3BCQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBTUE7QUFDQSxhQURBO0FBR0E7QUFDQSx3QkFEQTtBQUVBO0FBRkEsS0FI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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRyxDQUVBOztBQ2pRQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EsNkRBQ0EsMkNBREE7QUFFQSxHLENBRUE7O0FDdkJBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHLENBRUE7O0FDN0JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBO0FBQ0E7O0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUpBO0FBTUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0EsR0FGQSxDLENBSUE7O0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBSkE7QUFNQTs7Ozs7OztBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7QUFTQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBUkE7QUFVQTs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQXpCQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxLQU5BLE1BT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBREE7QUFFQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQSwwQkFEQSxDQUdBOztBQUNBLHVCQUpBLENBS0E7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QTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHLENBQ0E7QUFFQTs7QUNqQ0E7Ozs7Ozs7O0FBVUE7QUFFQTs7QUFDQTs7Ozs7OztBQU1BOzs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFEQSxDQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTNCQTs7QUE4QkE7QUFDQTs7QUFFQTtBQUNBLEcsQ0FDQTtBQUVBOztBQzdEQTs7Ozs7Ozs7QUFTQTtBQUVBOzs7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBSEEsQyxDQUlBO0FBRUE7O0FDakNBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLENBVUE7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQWhDQSxDQWtDQTs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBLHVEQUNBLHlDQURBLEdBRUEsY0FGQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0EscURBQ0EsTUFEQSxHQUVBLGdDQUZBO0FBR0EsS0FMQSxNQU1BO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUNBLHVCQURBLEVBRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxNQU9BO0FBQ0E7QUFDQTtBQUNBLE9BWEE7QUFZQTs7QUFFQTtBQUNBO0FBQ0EsR0FyQkE7QUF1QkE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFaQTs7QUFlQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBLEdBM0NBO0FBOENBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQ0EsMkJBREEsRUFFQSxrQkFGQSxFQUdBLFVBSEEsRUFJQSxVQUpBLEVBS0EsT0FMQSxFQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxTQWhCQTtBQWtCQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQ0EsOERBREEsR0FFQTtBQUNBO0FBQ0EsdUNBQ0EsQ0FDQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxlQURBLEVBS0EsTUFMQSxDQUtBLCtDQUxBLENBREE7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBLGFBTkEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0EsU0FuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBLE9BNUNBOztBQThDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VUFIQSxFQUlBLFVBSkEsRUFLQSxhQUxBO0FBT0EsT0FUQSxNQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FDQSxTQURBLEVBRUEsRUFGQSxFQUdBLFFBSEEsRUFJQSxRQUpBLEVBS0EsYUFMQTtBQU9BO0FBQ0E7QUFDQSxTQWRBO0FBZUE7O0FBRUE7O0FBQ0E7QUFDQSxLQTdDQSxDQThDQTs7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FIQSxNQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBQ0E7QUFDQSxHQTlCQTtBQWlDQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBLEtBRkEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7QUFTQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFDQSxNQURBLENBQ0EsZ0JBREEsRUFDQSxLQURBO0FBRUE7QUFDQTtBQUNBLEdBM0NBLEM7O0FDL0hBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUNBLE1BREEsR0FFQSxzQkFGQTtBQUlBO0FBQ0E7QUFDQSx1QkFYQSxDQWFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFJQTtBQUNBO0FBRUE7QUFDQSxLQTNCQSxDQTRCQTs7QUFDQTs7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQW5CQTtBQXFCQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FKQSxDOztBQ2xHQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BS0E7QUFDQTs7QUFDQSw0Q0FDQSw4QkFEQSxJQUVBLCtHQUZBLEVBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBO0FBSUEscUJBSkE7QUFLQTtBQUxBLFlBVEEsQ0FrQkE7O0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFJQTtBQUNBO0FBQ0EsMENBREE7QUFFQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxlQUZBO0FBTUEsdUJBTkE7QUFPQTtBQVBBO0FBU0E7QUFDQSxXQVhBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQ0EsZUFEQSxFQUVBLDBCQUZBLEVBRkEsQ0FPQTs7QUFDQTtBQUNBOztBQUNBLCtCQUNBLGtCQURBLElBRUEseUNBRkEsRUFHQTtBQUNBLHlEQUNBLGNBREEsRUFFQSx1QkFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUZBO0FBSUE7QUFDQTtBQUNBLFdBRkEsRUFqRUEsQ0FvRUE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFdBcEJBLEVBeEVBLENBOEZBO0FBQ0E7O0FBQ0EsNENBQ0EsNkJBREEsSUFFQSxpQkFGQSxFQUdBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDhDQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBLHNDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLG9DQUpBO0FBS0EsOEJBTEE7QUFNQSxvQ0FOQTtBQU9BO0FBUEE7QUFTQTtBQUNBO0FBQ0EsMENBWkEsQ0FZQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBLHNDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLG9DQUpBO0FBS0EsOEJBTEE7QUFNQSxvQ0FOQTtBQU9BO0FBUEE7QUFTQTtBQUNBLHFEQVhBLENBV0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBTkEsV0E1SUEsQ0FvSkE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQS9DQTs7QUFrREE7QUFDQTtBQUNBLEc7O0FDbFNBOzs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztBQUtBLE1BQU1BLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxjQUFYLENBQWpCOztBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixNQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxDQUFkLElBQW1CRCxJQUFJLENBQUNFLFlBQTVCLEVBQTBDO0FBQ3RDLFVBQU1DLFdBQVcsR0FBR0gsSUFBSSxDQUFDSSxRQUFMLENBQWNDLEtBQWQsSUFBdUIsRUFBM0M7QUFDQUwsUUFBSSxDQUFDSSxRQUFMLENBQWNDLEtBQWQsR0FBdUIsV0FBVUYsV0FBWSxNQUFLSCxJQUFJLENBQUNFLFlBQUwsQ0FBa0JJLE9BQWxCLENBQTBCLE1BQTFCLEVBQWtDLEdBQWxDLENBQXVDLE1BQXpGO0FBQ0FSLFlBQVEsQ0FBQ1MsT0FBVCxDQUFpQkMsR0FBRyxJQUFJLE9BQU9SLElBQUksQ0FBQ0ksUUFBTCxDQUFjSSxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYVDtBQURXLENBQWYsRTs7QUNmQTs7OztBQUtBLE1BQU1ELGNBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxjQUFYLEVBQTJCLFFBQTNCLENBQWpCOztBQUVBLFNBQVNDLHVCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixRQUFNUyxLQUFLLEdBQUdULElBQUksQ0FBQ0ksUUFBTCxDQUFjLFFBQWQsQ0FBZDs7QUFDQSxNQUFJSixJQUFJLENBQUNDLElBQUwsS0FBYyxDQUFkLEtBQW9CRCxJQUFJLENBQUNVLFlBQUwsSUFBcUJELEtBQXpDLENBQUosRUFBcUQ7QUFDakQsVUFBTUUsV0FBVyxHQUFHWCxJQUFJLENBQUNXLFdBQUwsSUFBb0IsTUFBeEMsQ0FEaUQsQ0FFakQ7O0FBQ0FYLFFBQUksQ0FBQ0ksUUFBTCxDQUFjUSxLQUFkLEdBQXVCLFVBQVNELFdBQVcsQ0FBQ0wsT0FBWixDQUFvQixJQUFwQixFQUEwQixJQUExQixDQUFnQyxLQUFJTixJQUFJLENBQUNVLFlBQUwsR0FBb0JWLElBQUksQ0FBQ1UsWUFBTCxDQUFrQkosT0FBbEIsQ0FBMEIsTUFBMUIsRUFBa0MsR0FBbEMsQ0FBcEIsR0FBNkQsSUFBSyxHQUFFRyxLQUFLLEdBQUksS0FBSUEsS0FBTSxFQUFkLEdBQWtCLEVBQUcsTUFBbEs7QUFDQVgsa0JBQVEsQ0FBQ1MsT0FBVCxDQUFpQkMsR0FBRyxJQUFJLE9BQU9SLElBQUksQ0FBQ0ksUUFBTCxDQUFjSSxHQUFkLENBQS9CO0FBQ0g7QUFDSjs7QUFFYztBQUNYVCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ2pCQTs7OztBQUtBLE1BQU1jLE1BQU0sR0FBRyxjQUFmOztBQUVBLFNBQVNkLHNCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixNQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUNqQjtBQUNIOztBQUNELFFBQU1hLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlkLElBQUksQ0FBQ0ksUUFBakIsRUFBMkJZLE1BQTNCLENBQWtDQyxDQUFDLElBQUlKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZRCxDQUFaLENBQXZDLENBQWI7O0FBQ0EsT0FBSyxNQUFNVCxHQUFYLElBQWtCTSxJQUFsQixFQUF3QjtBQUNwQixVQUFNSyxLQUFLLEdBQUduQixJQUFJLENBQUNJLFFBQUwsQ0FBY0ksR0FBZCxDQUFkO0FBQ0EsV0FBT1IsSUFBSSxDQUFDSSxRQUFMLENBQWNJLEdBQWQsQ0FBUDtBQUNBUixRQUFJLENBQUNJLFFBQUwsQ0FBY0ksR0FBRyxDQUFDRixPQUFKLENBQVlPLE1BQVosRUFBb0IsRUFBcEIsQ0FBZCxJQUEwQyxNQUFLTSxLQUFLLENBQUNiLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLEdBQXRCLENBQTJCLEtBQTFFO0FBQ0g7O0FBRUQsTUFBSU4sSUFBSSxDQUFDSSxRQUFMLENBQWMsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFVBQU1nQixLQUFLLEdBQUdwQixJQUFJLENBQUNJLFFBQUwsQ0FBYyxRQUFkLENBQWQ7QUFDQUosUUFBSSxDQUFDSSxRQUFMLENBQWMsUUFBZCxJQUEyQixNQUFLZ0IsS0FBTSxLQUF0QztBQUNBLFdBQU9wQixJQUFJLENBQUNJLFFBQUwsQ0FBYyxRQUFkLENBQVA7QUFDSDtBQUNKOztBQUVjO0FBQ1hMLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDekJBOzs7O0FBS0EsU0FBU0Esb0JBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQzdCLE1BQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBRUQsTUFBSUQsSUFBSSxDQUFDcUIsRUFBVCxFQUFhO0FBQ1RyQixRQUFJLENBQUNJLFFBQUwsQ0FBYyxNQUFkLElBQXdCSixJQUFJLENBQUNxQixFQUE3QjtBQUNBLFdBQU9yQixJQUFJLENBQUNJLFFBQUwsQ0FBYyxNQUFkLENBQVA7QUFDSDs7QUFFRCxNQUFJSixJQUFJLENBQUNzQixNQUFULEVBQWlCO0FBQ2J0QixRQUFJLENBQUNJLFFBQUwsQ0FBYyxXQUFkLElBQTZCSixJQUFJLENBQUNzQixNQUFsQztBQUNBLFdBQU90QixJQUFJLENBQUNJLFFBQUwsQ0FBYyxXQUFkLENBQVA7QUFDSDs7QUFFRCxNQUFJSixJQUFJLENBQUN1QixJQUFULEVBQWU7QUFDWHZCLFFBQUksQ0FBQ0ksUUFBTCxDQUFjLFFBQWQsSUFBMEJKLElBQUksQ0FBQ3VCLElBQS9CO0FBQ0EsV0FBT3ZCLElBQUksQ0FBQ0ksUUFBTCxDQUFjLFFBQWQsQ0FBUDtBQUNIO0FBQ0o7O0FBRWM7QUFDWEwsbUJBQWlCQTtBQUROLENBQWYsRTs7QUMxQkE7Ozs7QUFLQSxTQUFTQSxxQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDN0IsTUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsQ0FBZCxJQUFtQixDQUFDRCxJQUFJLENBQUN3QixHQUE3QixFQUFrQztBQUM5QjtBQUNIOztBQUVELE1BQUlDLEVBQUUsR0FBR3pCLElBQUksQ0FBQzBCLEtBQWQ7O0FBRUEsTUFBSTFCLElBQUksQ0FBQzJCLFNBQVQsRUFBb0I7QUFDaEJGLE1BQUUsSUFBSyxJQUFHekIsSUFBSSxDQUFDMkIsU0FBVSxFQUF6QjtBQUNIOztBQUVERixJQUFFLElBQUssVUFBU3pCLElBQUksQ0FBQ3dCLEdBQUksR0FBekI7O0FBRUEsTUFBSXhCLElBQUksQ0FBQ1EsR0FBVCxFQUFjO0FBQ1ZpQixNQUFFLElBQUssWUFBV3pCLElBQUksQ0FBQ1EsR0FBSSxFQUEzQjtBQUNIOztBQUVEUixNQUFJLENBQUNJLFFBQUwsQ0FBYyxPQUFkLElBQXlCcUIsRUFBekI7QUFFQSxTQUFPekIsSUFBSSxDQUFDSSxRQUFMLENBQWMsT0FBZCxDQUFQO0FBQ0EsU0FBT0osSUFBSSxDQUFDSSxRQUFMLENBQWMsS0FBZCxDQUFQO0FBQ0EsU0FBT0osSUFBSSxDQUFDSSxRQUFMLENBQWMsTUFBZCxDQUFQO0FBQ0EsU0FBT0osSUFBSSxDQUFDSSxRQUFMLENBQWMsWUFBZCxDQUFQO0FBQ0g7O0FBRWM7QUFDWEwsbUJBQWlCQTtBQUROLENBQWYsRTs7QUM5QkE7Ozs7QUFLQSxNQUFNNkIsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLE9BQU4sQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsWUFBaEI7O0FBRUEsU0FBUzlCLHVCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixRQUFNOEIsVUFBVSxHQUFHOUIsSUFBSSxDQUFDK0IsU0FBTCxDQUFlZixNQUFmLENBQXNCQyxDQUFDLElBQUlZLE9BQU8sQ0FBQ1gsSUFBUixDQUFhRCxDQUFDLENBQUNlLElBQWYsQ0FBM0IsQ0FBbkI7O0FBQ0EsT0FBSyxNQUFNQyxJQUFYLElBQW1CSCxVQUFuQixFQUErQjtBQUMzQixXQUFPOUIsSUFBSSxDQUFDSSxRQUFMLENBQWM2QixJQUFJLENBQUNELElBQW5CLENBQVA7QUFDQSxVQUFNLENBQUNBLElBQUQsRUFBTyxHQUFHRSxTQUFWLElBQXVCRCxJQUFJLENBQUNELElBQUwsQ0FBVUcsS0FBVixDQUFnQixHQUFoQixDQUE3QjtBQUNBbkMsUUFBSSxDQUFDSSxRQUFMLENBQWUsTUFBSzRCLElBQUksQ0FBQzFCLE9BQUwsQ0FBYXVCLE9BQWIsRUFBc0IsRUFBdEIsQ0FBMEIsRUFBOUMsSUFDTyxHQUFFSyxTQUFTLENBQUNFLEdBQVYsQ0FBY0MsQ0FBQyxJQUFLLEdBQUVBLENBQUUsR0FBeEIsRUFBNEJDLElBQTVCLENBQWlDLEVBQWpDLENBQXFDLEdBQUVMLElBQUksQ0FBQ2QsS0FBTSxFQUQzRDtBQUVIO0FBQ0o7O0FBRWM7QUFDWHBCLG1CQUFpQkE7QUFETixDQUFmLEU7O0FDbEJBOzs7O0FBS0EsU0FBU0Esc0JBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQzdCLE1BQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLENBQWQsSUFBbUJELElBQUksQ0FBQ0ksUUFBTCxDQUFjLFFBQWQsQ0FBdkIsRUFBZ0Q7QUFDNUMsVUFBTWUsS0FBSyxHQUFHbkIsSUFBSSxDQUFDdUMsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDVCxJQUFGLEtBQVcsTUFBckMsRUFBNkNiLEtBQTNEO0FBQ0EsV0FBT25CLElBQUksQ0FBQ0ksUUFBTCxDQUFjLFFBQWQsQ0FBUDtBQUNBSixRQUFJLENBQUNJLFFBQUwsQ0FBYyxRQUFkLElBQTJCLE1BQUtlLEtBQU0sS0FBdEM7QUFDQW5CLFFBQUksQ0FBQzBDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7QUFFRCxNQUFJMUMsSUFBSSxDQUFDQyxJQUFMLEtBQWMsQ0FBZCxJQUFtQkQsSUFBSSxDQUFDSSxRQUFMLENBQWMsUUFBZCxDQUF2QixFQUFnRDtBQUM1QyxVQUFNZSxLQUFLLEdBQUduQixJQUFJLENBQUN1QyxVQUFMLENBQWdCQyxJQUFoQixDQUFxQkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNULElBQUYsS0FBVyxNQUFyQyxFQUE2Q2IsS0FBM0Q7QUFDQSxXQUFPbkIsSUFBSSxDQUFDSSxRQUFMLENBQWMsUUFBZCxDQUFQO0FBQ0FKLFFBQUksQ0FBQzBDLFFBQUwsR0FBZ0IsQ0FBQztBQUNiekMsVUFBSSxFQUFFLENBRE87QUFFYjBDLFVBQUksRUFBRyxNQUFLeEIsS0FBTTtBQUZMLEtBQUQsQ0FBaEI7QUFJSDtBQUNKOztBQUVjO0FBQ1hwQixtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ3ZCQTs7Ozs7QUFLQTs7O0FBR08sU0FBUzZDLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CQyxJQUFwQixFQUEwQjtBQUM3QixPQUFLLE1BQU10QyxHQUFYLElBQWtCc0MsSUFBbEIsRUFBd0I7QUFDcEJELE1BQUUsQ0FBQ3JDLEdBQUQsQ0FBRixHQUFVc0MsSUFBSSxDQUFDdEMsR0FBRCxDQUFkO0FBQ0g7O0FBQ0QsU0FBT3FDLEVBQVA7QUFDSDtBQUVEOzs7O0FBR08sU0FBU0UsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUIsUUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNHLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUlGLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFQLEVBQVk7QUFDUk4sWUFBTSxDQUFDSyxHQUFELEVBQU1ELEdBQUcsQ0FBQ0UsQ0FBRCxDQUFULENBQU47QUFDSDtBQUNKOztBQUNELFNBQU9ELEdBQVA7QUFDSDtBQUdEOzs7O0FBR08sU0FBU0csTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0I7QUFDdkIsUUFBTUMsS0FBSyxHQUFHdkMsTUFBTSxDQUFDd0MsTUFBUCxDQUFjLElBQWQsQ0FBZDtBQUNBLFNBQU8sU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDMUIsVUFBTUMsR0FBRyxHQUFHSixLQUFLLENBQUNHLEdBQUQsQ0FBakI7QUFDQSxXQUFPQyxHQUFHLEtBQUtKLEtBQUssQ0FBQ0csR0FBRCxDQUFMLEdBQWFKLEVBQUUsQ0FBQ0ksR0FBRCxDQUFwQixDQUFWO0FBQ0gsR0FIRDtBQUlIO0FBRUQ7Ozs7QUFHQSxNQUFNRSxXQUFXLEdBQUcsZ0JBQXBCO0FBQ08sTUFBTUMsU0FBUyxHQUFHUixNQUFNLENBQUVLLEdBQUQsSUFBUztBQUNyQyxTQUFPQSxHQUFHLENBQ0xuRCxPQURFLENBQ01xRCxXQUROLEVBQ21CLE9BRG5CLEVBRUZyRCxPQUZFLENBRU1xRCxXQUZOLEVBRW1CLE9BRm5CLEVBR0ZFLFdBSEUsRUFBUDtBQUlILENBTDhCLENBQXhCO0FBT0EsTUFBTUMsUUFBUSxHQUFHTCxHQUFHLElBQUlBLEdBQUcsQ0FBQ25ELE9BQUosQ0FBWSxRQUFaLEVBQXNCLENBQUN5RCxDQUFELEVBQUlDLENBQUosS0FBV0EsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLFdBQUYsRUFBSCxHQUFxQixFQUF2RCxDQUF4QixDOztBQ25EUDs7OztBQUtBOztBQUVBLFNBQVNsRSxxQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNrRSxPQUFqQyxFQUEwQztBQUN0QyxNQUFJbEUsSUFBSSxDQUFDQyxJQUFMLEtBQWMsQ0FBZCxJQUFtQixDQUFDRCxJQUFJLENBQUNJLFFBQUwsQ0FBYytELEdBQXRDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsUUFBTUEsR0FBRyxHQUFHbkUsSUFBSSxDQUFDSSxRQUFMLENBQWMsT0FBZCxJQUF5QkosSUFBSSxDQUFDSSxRQUFMLENBQWMrRCxHQUFuRDtBQUNBLFNBQU9uRSxJQUFJLENBQUNJLFFBQUwsQ0FBYytELEdBQXJCO0FBRUEsUUFBTUMsSUFBSSxHQUFHO0FBQ1RwQyxRQUFJLEVBQUVtQyxHQURHO0FBRVRFLFFBQUksRUFBRXJFLElBQUksQ0FBQ3NFLE1BQUwsR0FBY0MsU0FBZCxHQUEwQixDQUZ2QjtBQUdUL0MsT0FBRyxFQUFFeEIsSUFBSSxDQUFDd0IsR0FBTCxHQUFXLENBQVgsR0FBZStDO0FBSFgsR0FBYjtBQU1BTCxTQUFPLENBQUNNLElBQVIsQ0FBYUMsSUFBYixDQUFrQkwsSUFBbEI7QUFDQSxRQUFNTSxTQUFTLEdBQUdaLFFBQVEsQ0FBQ0ssR0FBRCxDQUExQjs7QUFFQSxNQUFJTyxTQUFTLEtBQUtQLEdBQWxCLEVBQXVCO0FBQ25CRCxXQUFPLENBQUNNLElBQVIsQ0FBYUMsSUFBYixDQUFrQixFQUNkLEdBQUdMLElBRFc7QUFFZHBDLFVBQUksRUFBRTBDO0FBRlEsS0FBbEI7QUFJSDtBQUNKOztBQUVjO0FBQ1gzRSxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQy9CQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxzREFDWDRFLFVBRFcsRUFFWGxELFdBRlcsRUFHWG1ELGFBSFcsRUFJWEMsSUFKVyxFQUtYVixXQUxXLEVBT1hXLGFBUFcsRUFRWGxFLEtBUlcsRUFVWDtBQUNBbUUsSUFYVyxDQUFmLEU7Ozs7O0FDZEE7Ozs7O0FBS0E7OztBQUdBLE1BQU1DLFNBQVMsR0FBRztBQUNkQyxNQUFJLEVBQUUsSUFEUTtBQUVkQyxNQUFJLEVBQUUsSUFGUTtBQUdkQyxVQUFRLEVBQUUsSUFISTtBQUlkQyxJQUFFLEVBQUUsSUFKVTtBQUtkQyxLQUFHLEVBQUUsSUFMUztBQU1kQyxTQUFPLEVBQUUsSUFOSztBQU9kQyxPQUFLLEVBQUUsSUFQTztBQVFkQyxPQUFLLEVBQUUsSUFSTztBQVNkQyxJQUFFLEVBQUUsSUFUVTtBQVVkQyxLQUFHLEVBQUUsSUFWUztBQVdkQyxPQUFLLEVBQUUsSUFYTztBQVlkQyxTQUFPLEVBQUUsSUFaSztBQWFkQyxRQUFNLEVBQUUsSUFiTTtBQWNkQyxNQUFJLEVBQUUsSUFkUTtBQWVkQyxNQUFJLEVBQUUsSUFmUTtBQWdCZEMsT0FBSyxFQUFFLElBaEJPO0FBaUJkQyxRQUFNLEVBQUUsSUFqQk07QUFrQmRDLE9BQUssRUFBRSxJQWxCTztBQW1CZEMsS0FBRyxFQUFFO0FBbkJTLENBQWxCO0FBc0JBLE1BQU1DLFdBQVcsR0FBRztBQUNoQixZQUFVO0FBRE0sQ0FBcEI7O0FBSUEsU0FBU0MsYUFBVCxDQUF1QjdGLEdBQXZCLEVBQTRCVyxLQUE1QixFQUFtQztBQUMvQixNQUFJaUYsV0FBVyxDQUFDNUYsR0FBRCxDQUFmLEVBQXNCO0FBQ2xCLFdBQU9BLEdBQVA7QUFDSDs7QUFDRCxTQUFRLEdBQUVBLEdBQUksSUFBRzhGLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEYsS0FBZixDQUFzQixFQUF2QztBQUNIOztBQUVjLFNBQVNvRixTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDNUMsTUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsR0FBZCxDQUFMLEVBQXlCO0FBQ3JCQSxPQUFHLEdBQUcsQ0FBQ0EsR0FBRCxDQUFOO0FBQ0g7O0FBRUQsTUFBSTNCLElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssTUFBTTdFLElBQVgsSUFBbUJ3RyxHQUFuQixFQUF3QjtBQUNwQixRQUFJeEcsSUFBSSxDQUFDQyxJQUFMLEtBQWMsQ0FBZCxJQUFtQkQsSUFBSSxDQUFDQyxJQUFMLEtBQWMsQ0FBckMsRUFBd0M7QUFDcEM0RSxVQUFJLElBQUk3RSxJQUFJLENBQUMyQyxJQUFiO0FBQ0gsS0FGRCxNQUdLLElBQUkzQyxJQUFJLENBQUNDLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUN0QixZQUFNMkcsS0FBSyxHQUFHN0YsTUFBTSxDQUFDRCxJQUFQLENBQVlkLElBQUksQ0FBQ0ksUUFBakIsRUFBMkJnQyxHQUEzQixDQUErQjVCLEdBQUcsSUFBSTZGLGFBQWEsQ0FBQzdGLEdBQUQsRUFBTVIsSUFBSSxDQUFDSSxRQUFMLENBQWNJLEdBQWQsQ0FBTixDQUFuRCxDQUFkOztBQUNBLFVBQUlpRyxPQUFKLEVBQWE7QUFDVEcsYUFBSyxDQUFDbkMsSUFBTixDQUFXZ0MsT0FBWDtBQUNIOztBQUNELFlBQU1JLFdBQVcsR0FBRzdHLElBQUksQ0FBQzBDLFFBQUwsSUFBaUIxQyxJQUFJLENBQUMwQyxRQUFMLENBQWNTLE1BQWQsR0FBdUIsQ0FBNUQ7QUFDQSxZQUFNMkQsT0FBTyxHQUFHRixLQUFLLENBQUN6RCxNQUFOLEdBQWUsQ0FBL0I7QUFDQTBCLFVBQUksSUFBSyxJQUFHN0UsSUFBSSxDQUFDK0csR0FBSSxHQUFFRCxPQUFPLEdBQUcsR0FBSCxHQUFTLEVBQUcsR0FBRUYsS0FBSyxDQUFDdEUsSUFBTixDQUFXLEdBQVgsQ0FBZ0IsR0FBNUQ7QUFDQXVDLFVBQUksSUFBSWdDLFdBQVcsR0FBR04sU0FBUyxDQUFDdkcsSUFBSSxDQUFDMEMsUUFBTixFQUFnQitELE9BQWhCLENBQVosR0FBdUMsRUFBMUQ7QUFDQTVCLFVBQUksSUFBSSxDQUFDZ0MsV0FBRCxJQUFnQjdCLFNBQVMsQ0FBQ2hGLElBQUksQ0FBQytHLEdBQU4sQ0FBekIsR0FBc0MsRUFBdEMsR0FBNEMsS0FBSS9HLElBQUksQ0FBQytHLEdBQUksR0FBakU7O0FBRUEsVUFBSS9HLElBQUksQ0FBQ2dILFlBQUwsSUFBcUJoSCxJQUFJLENBQUNnSCxZQUFMLENBQWtCN0QsTUFBbEIsR0FBMkIsQ0FBcEQsRUFBdUQ7QUFDbkQwQixZQUFJLElBQUkwQixTQUFTLENBQUN2RyxJQUFJLENBQUNnSCxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixDQUF4QixFQUEyQjdFLEdBQTNCLENBQStCbkIsQ0FBQyxJQUFJQSxDQUFDLENBQUNpRyxLQUF0QyxDQUFELEVBQStDVCxPQUEvQyxDQUFqQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFPNUIsSUFBUDtBQUNILEM7O0FDdEVEOzs7O0FBS0E7QUFFZSx5REFBVXNDLFVBQVYsRUFBc0I7QUFFakMsV0FBU0MsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCO0FBQzFCLFFBQUlGLFVBQVUsSUFBSUEsVUFBVSxDQUFDRyxNQUF6QixJQUFtQ0QsRUFBRSxDQUFDakgsUUFBSCxDQUFZQyxLQUFuRCxFQUEwRDtBQUN0RCxZQUFNRixXQUFXLEdBQUdrSCxFQUFFLENBQUNqSCxRQUFILENBQVlDLEtBQVosQ0FBa0JDLE9BQWxCLENBQTBCLFVBQTFCLEVBQXNDLEVBQXRDLEVBQTBDNkIsS0FBMUMsQ0FBZ0QsR0FBaEQsQ0FBcEI7QUFDQWtGLFFBQUUsQ0FBQ2pILFFBQUgsQ0FBWUMsS0FBWixHQUFvQkYsV0FBVyxDQUFDaUMsR0FBWixDQUFnQjRCLENBQUMsSUFBS21ELFVBQVUsQ0FBQ0csTUFBWCxDQUFrQnhELFFBQVEsQ0FBQ0UsQ0FBRCxDQUExQixLQUFrQ0EsQ0FBeEQsRUFBNEQxQixJQUE1RCxDQUFpRSxHQUFqRSxDQUFwQjtBQUNBK0UsUUFBRSxDQUFDdEYsU0FBSCxHQUFlc0YsRUFBRSxDQUFDdEYsU0FBSCxDQUFhSyxHQUFiLENBQ1gsQ0FBQztBQUFDSixZQUFEO0FBQU9iO0FBQVAsT0FBRCxNQUFvQjtBQUFDYSxZQUFEO0FBQU9iLGFBQUssRUFBRWEsSUFBSSxLQUFLLE9BQVQsR0FBbUJxRixFQUFFLENBQUNqSCxRQUFILENBQVlDLEtBQS9CLEdBQXVDYztBQUFyRCxPQUFwQixDQURXLENBQWY7QUFHSDtBQUNKOztBQUVELFNBQU87QUFDSGlHO0FBREcsR0FBUDtBQUdILEM7Ozs7OztBQ3RCRDs7OztBQUtBOztBQUVBLFNBQVNySCx1QkFBVCxDQUEyQnNILEVBQTNCLEVBQStCO0FBQzNCQSxJQUFFLENBQUMzRSxRQUFILEdBQWMyRSxFQUFFLENBQUMzRSxRQUFILENBQVlOLEdBQVosQ0FBZ0JtRixLQUFLLElBQUk7QUFDbkMsUUFBSUEsS0FBSyxDQUFDdEgsSUFBTixLQUFlLENBQW5CLEVBQXNCO0FBQ2xCc0gsV0FBSyxDQUFDNUUsSUFBTixHQUFhb0IseUJBQUMsQ0FBQ3lELElBQUYsQ0FBT0QsS0FBSyxDQUFDNUUsSUFBYixFQUFtQixLQUFuQixDQUFiO0FBQ0g7O0FBQ0QsUUFBSTRFLEtBQUssQ0FBQ3RILElBQU4sS0FBZSxDQUFmLElBQW9Cc0gsS0FBSyxDQUFDRSxVQUE5QixFQUEwQztBQUN0QyxZQUFNQSxVQUFVLEdBQUdGLEtBQUssQ0FBQ0UsVUFBekI7QUFDQSxZQUFNQyxLQUFLLEdBQUdELFVBQVUsQ0FBQ3RGLEtBQVgsQ0FBaUIsR0FBakIsQ0FBZDtBQUNBLFVBQUl3RixLQUFLLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQWpCO0FBQ0EsVUFBSUUsSUFBSSxHQUFHRixLQUFLLENBQUNBLEtBQUssQ0FBQ3ZFLE1BQU4sR0FBZSxDQUFoQixDQUFoQjs7QUFDQSxVQUFJLFNBQVNqQyxJQUFULENBQWN5RyxLQUFkLENBQUosRUFBMEI7QUFDdEJBLGFBQUssR0FBR3JCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0YsS0FBWCxDQUFSO0FBQ0FBLGFBQUssR0FBRzVELHlCQUFDLENBQUMrRCxTQUFGLENBQVlILEtBQVosRUFBbUIsS0FBbkIsQ0FBUjs7QUFDQSxZQUFJQSxLQUFKLEVBQVc7QUFDUEosZUFBSyxDQUFDUSxNQUFOLENBQWEsQ0FBYixJQUFrQkosS0FBbEI7QUFDQUQsZUFBSyxDQUFDLENBQUQsQ0FBTCxHQUFXcEIsSUFBSSxDQUFDQyxTQUFMLENBQWVvQixLQUFmLENBQVg7QUFDSCxTQUhELE1BSUs7QUFDREosZUFBSyxDQUFDUSxNQUFOLENBQWFDLEtBQWI7QUFDQU4sZUFBSyxDQUFDTSxLQUFOO0FBQ0g7QUFDSjs7QUFDRCxVQUFJLFNBQVM5RyxJQUFULENBQWMwRyxJQUFkLENBQUosRUFBeUI7QUFDckJBLFlBQUksR0FBR3RCLElBQUksQ0FBQ3VCLEtBQUwsQ0FBV0QsSUFBWCxDQUFQO0FBQ0FBLFlBQUksR0FBRzdELHlCQUFDLENBQUNrRSxPQUFGLENBQVVMLElBQVYsRUFBZ0IsS0FBaEIsQ0FBUDs7QUFDQSxZQUFJQSxJQUFKLEVBQVU7QUFDTkwsZUFBSyxDQUFDUSxNQUFOLENBQWFMLEtBQUssQ0FBQ3ZFLE1BQU4sR0FBZSxDQUE1QixJQUFpQ3lFLElBQWpDO0FBQ0FGLGVBQUssQ0FBQ0EsS0FBSyxDQUFDdkUsTUFBTixHQUFlLENBQWhCLENBQUwsR0FBMEJtRCxJQUFJLENBQUNDLFNBQUwsQ0FBZXFCLElBQWYsQ0FBMUI7QUFDSCxTQUhELE1BSUs7QUFDREwsZUFBSyxDQUFDUSxNQUFOLENBQWFHLEdBQWI7QUFDQVIsZUFBSyxDQUFDUSxHQUFOO0FBQ0g7QUFDSjs7QUFDRFgsV0FBSyxDQUFDRSxVQUFOLEdBQW1CQyxLQUFLLENBQUNwRixJQUFOLENBQVcsR0FBWCxDQUFuQjtBQUNBaUYsV0FBSyxDQUFDNUUsSUFBTixHQUFhb0IseUJBQUMsQ0FBQ3lELElBQUYsQ0FBT0QsS0FBSyxDQUFDNUUsSUFBYixFQUFtQixLQUFuQixDQUFiO0FBQ0g7O0FBQ0QsV0FBTzRFLEtBQVA7QUFDSCxHQXJDYSxDQUFkO0FBc0NIOztBQUVjO0FBQ1h4SCxtQkFBaUJBO0FBRE4sQ0FBZixFOztBQ2hEQTs7OztBQUtBLFNBQVNxSCxxQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUJBLElBQUUsQ0FBQ3RGLFNBQUgsR0FBZXNGLEVBQUUsQ0FBQ3RGLFNBQUgsQ0FBYUssR0FBYixDQUFpQixDQUFDO0FBQUNKLFFBQUQ7QUFBT2I7QUFBUCxHQUFELEtBQW1CO0FBQy9DLFdBQU9rRyxFQUFFLENBQUNqSCxRQUFILENBQVk0QixJQUFaLENBQVA7QUFDQUEsUUFBSSxHQUFHQSxJQUFJLENBQUMxQixPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQixDQUFQO0FBQ0ErRyxNQUFFLENBQUNqSCxRQUFILENBQVk0QixJQUFaLElBQW9CYixLQUFwQjtBQUNBLFdBQU87QUFDSEEsV0FERztBQUVIYTtBQUZHLEtBQVA7QUFJSCxHQVJjLENBQWY7QUFTSDs7QUFFYztBQUNYb0Ysa0JBQWdCQTtBQURMLENBQWYsRTs7Ozs7QUNqQkE7QUFBQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTZSxPQUFULENBQWlCbEMsTUFBakIsRUFBeUIvQixPQUFPLEdBQUcsRUFBbkMsRUFBdUM7QUFFMUMsUUFBTTtBQUNGa0UsV0FBTyxHQUFHLEVBRFI7QUFFRmpCLGNBQVUsR0FBRyxJQUZYO0FBR0ZWLFdBQU8sR0FBRyxFQUhSO0FBSUY0QixTQUFLLEdBQUcsSUFKTjtBQUtGQyxRQUFJLEVBQUVDLE1BQU0sR0FBRztBQUxiLE1BTUZyRSxPQU5KOztBQVFBLE1BQUksQ0FBQ3NFLG1DQUFPLENBQUNyQixVQUFELENBQVosRUFBMEI7QUFDdEJpQixXQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLFVBQWEsQ0FBQ3ZCLFVBQUQsQ0FBN0I7QUFDSDs7QUFFRCxNQUFJa0IsS0FBSixFQUFXO0FBQ1BELFdBQU8sQ0FBQ0ssT0FBUixDQUFnQkosS0FBaEI7QUFDSDs7QUFFRCxNQUFJRSxNQUFKLEVBQVk7QUFDUkgsV0FBTyxDQUFDSyxPQUFSLENBQWdCSCxJQUFoQjtBQUNIOztBQUVELFFBQU1LLGVBQWUsR0FBRztBQUNwQlAsV0FBTyxFQUFFLENBQ0wsR0FBR1EsZ0JBREUsRUFFTCxHQUFHUixPQUZFLENBRFc7QUFLcEJTLHNCQUFrQixFQUFFLEtBTEE7QUFNcEJDLHVCQUFtQixFQUFFLEtBTkQ7QUFPcEJ0RSxRQUFJLEVBQUU7QUFQYyxHQUF4QjtBQVVBLFFBQU07QUFBQ2dDO0FBQUQsTUFBUXVDLGtEQUFVLENBQUM5QyxNQUFNLENBQUN1QixJQUFQLEVBQUQsRUFBZ0JtQixlQUFoQixDQUF4QjtBQUVBLFFBQU1LLFFBQVEsR0FBR3pDLFNBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLENBQTFCO0FBQ0EsUUFBTXdDLEtBQUssR0FBR0MsZ0NBQWEsQ0FBQ0YsUUFBRCxDQUFiLENBQXdCdEcsUUFBeEIsQ0FBaUMsQ0FBakMsQ0FBZDtBQUVBLFNBQU87QUFDSDhELE9BREc7QUFFSHlDLFNBRkc7QUFHSEQsWUFIRztBQUlIeEUsUUFBSSxFQUFFbUUsZUFBZSxDQUFDbkU7QUFKbkIsR0FBUDtBQU1ILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXRlbXBsYXRlLWNvbXBpbGVyXCIpOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgU2FuIOS4u+aWh+S7tlxuICovXG5cbihmdW5jdGlvbiAocm9vdCkge1xuICAgIC8vIOS6uuW3peiwg+aVtOaJk+WMheS7o+eggemhuuW6j++8jOmAmui/h+azqOmHiuaJi+W3peWGmeS4gOS6m+S+nei1llxuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9ndWlkJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2VtcHR5Jyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2V4dGVuZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9pbmhlcml0cycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9lYWNoJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NvbnRhaW5zJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2JpbmQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvb24nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvdW4nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvc3ZnLXRhZ3MnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvY3JlYXRlLWVsJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9pbnB1dC1ldmVudC1jb21wYXRpYmxlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9kYXRhLXR5cGVzLmpzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZS1kYXRhLXR5cGVzLWNoZWNrZXIuanMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci93YWxrZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci9wYXJzZS10ZW1wbGF0ZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvZGVmYXVsdC1maWx0ZXJzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2xpZmUtY3ljbGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvbm9kZS10eXBlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2dldC1wcm9wLWhhbmRsZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvaXMtZGF0YS1jaGFuZ2UtYnktZWxlbWVudCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9nZXQtZXZlbnQtbGlzdGVuZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvY3JlYXRlLW5vZGUnKTtcblxuXG4gICAgLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDllK/kuIBpZFxuICovXG5cblxuLyoqXG4gKiDojrflj5bllK/kuIBpZFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9IOWUr+S4gGlkXG4gKi9cbnZhciBndWlkID0gMTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ3VpZDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOepuuWHveaVsFxuICovXG5cblxuLyoqXG4gKiDllaXpg73kuI3lubJcbiAqL1xuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbXB0eTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWxnuaAp+aLt+i0nVxuICovXG5cbi8qKlxuICog5a+56LGh5bGe5oCn5ou36LSdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCDnm67moIflr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug5rqQ5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9IOi/lOWbnuebruagh+WvueixoVxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXh0ZW5kO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gKi9cblxuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kJyk7XG5cbi8qKlxuICog5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ViQ2xhc3Mg5a2Q57G75Ye95pWwXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdXBlckNsYXNzIOeItuexu+WHveaVsFxuICovXG5mdW5jdGlvbiBpbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHZhciBzdWJDbGFzc1Byb3RvID0gc3ViQ2xhc3MucHJvdG90eXBlO1xuICAgIHZhciBGID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgRi5wcm90b3R5cGUgPSBzdXBlckNsYXNzLnByb3RvdHlwZTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgIGV4dGVuZChzdWJDbGFzcy5wcm90b3R5cGUsIHN1YkNsYXNzUHJvdG8pO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0cztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOmBjeWOhuaVsOe7hFxuICovXG5cblxuLyoqXG4gKiDpgY3ljobmlbDnu4Tpm4blkIhcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSDmlbDnu4TmupBcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oQW55LG51bWJlcik6Ym9vbGVhbn0gaXRlcmF0b3Ig6YGN5Y6G5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGVhY2goYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvcihhcnJheVtpXSwgaSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVhY2g7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliKTmlq3mlbDnu4TkuK3mmK/lkKbljIXlkKvmn5DpoblcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4vZWFjaCcpO1xuXG4vKipcbiAqIOWIpOaWreaVsOe7hOS4reaYr+WQpuWMheWQq+afkOmhuVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IOaVsOe7hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDljIXlkKvnmoTpoblcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKGFycmF5LCB2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXN1bHQgPSBpdGVtID09PSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuICFyZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb250YWlucztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIGJpbmTlh73mlbBcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg6KaBYmluZOeahOWHveaVsFxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgdGhpc+aMh+WQkeWvueixoVxuICogQHBhcmFtIHsuLi4qfSBhcmdzIOmihOiuvueahOWIneWni+WPguaVsFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgdGhpc0FyZykge1xuICAgIHZhciBuYXRpdmVCaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSB7XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYmluZDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIERPTSDkuovku7bmjILovb1cbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bmjILovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIOaYr+WQpuaYr+aNleiOt+mYtuautVxuICovXG5mdW5jdGlvbiBvbihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBvbjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIERPTSDkuovku7bljbjovb1cbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bljbjovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIOaYr+WQpuaYr+aNleiOt+mYtuautVxuICovXG5mdW5jdGlvbiB1bihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB1bjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWwhuWtl+espuS4sumAl+WPt+WIh+WIhui/lOWbnuWvueixoVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8qKlxuICog5bCG5a2X56ym5Liy6YCX5Y+35YiH5YiG6L+U5Zue5a+56LGhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDlrZfnrKbkuLJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc3BsaXRTdHIyT2JqKHNvdXJjZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBlYWNoKFxuICAgICAgICBzb3VyY2Uuc3BsaXQoJywnKSxcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBrZXk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHNwbGl0U3RyMk9iajtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIFNWR+agh+etvuihqFxuICovXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIHN2Z1RhZ3NcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvc3ZnZHRkLmh0bWwg5Y+q5Y+W5bi455SoXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgc3ZnVGFncyA9IHNwbGl0U3RyMk9iaignJ1xuICAgIC8vIHN0cnVjdHVyZVxuICAgICsgJ3N2ZyxnLGRlZnMsZGVzYyxtZXRhZGF0YSxzeW1ib2wsdXNlLCdcbiAgICAvLyBpbWFnZSAmIHNoYXBlXG4gICAgKyAnaW1hZ2UscGF0aCxyZWN0LGNpcmNsZSxsaW5lLGVsbGlwc2UscG9seWxpbmUscG9seWdvbiwnXG4gICAgLy8gdGV4dFxuICAgICsgJ3RleHQsdHNwYW4sdHJlZix0ZXh0cGF0aCwnXG4gICAgLy8gb3RoZXJcbiAgICArICdtYXJrZXIscGF0dGVybixjbGlwcGF0aCxtYXNrLGZpbHRlcixjdXJzb3IsdmlldyxhbmltYXRlLCdcbiAgICAvLyBmb250XG4gICAgKyAnZm9udCxmb250LWZhY2UsZ2x5cGgsbWlzc2luZy1nbHlwaCwnXG4gICAgLy8gY2FtZWxcbiAgICArICdhbmltYXRlQ29sb3IsYW5pbWF0ZU1vdGlvbixhbmltYXRlVHJhbnNmb3JtLHRleHRQYXRoLGZvcmVpZ25PYmplY3QnXG4pO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdmdUYWdzO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgRE9N5Yib5bu6XG4gKi9cblxuLy8gdmFyIHN2Z1RhZ3MgPSByZXF1aXJlKCcuL3N2Zy10YWdzJyk7XG5cbi8qKlxuICog5Yib5bu6IERPTSDlhYPntKBcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRhZ05hbWUgdGFnTmFtZVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZ05hbWUpIHtcbiAgICBpZiAoc3ZnVGFnc1t0YWdOYW1lXSAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDnp7vpmaRET01cbiAqL1xuXG4vKipcbiAqIOWwhiBET00g5LuO6aG16Z2i5Lit56e76ZmkXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsKGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZW1vdmVFbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWcqOS4i+S4gOS4quaXtumXtOWRqOacn+i/kOihjOS7u+WKoVxuICovXG5cbi8vIOivpeaWueazleWPgueFp+S6hnZ1ZTIuNS4w55qE5a6e546w77yM5oSf6LCidnVl5Zui6ZifXG4vLyBTRUU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvYmxvYi8wOTQ4ZDk5OWYyZmRkZjlmOTA5OTE5NTY0OTNmOTc2MjczYzVkYTFmL3NyYy9jb3JlL3V0aWwvZW52LmpzI0w2OFxuXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi9iaW5kJyk7XG5cbi8qKlxuICog5LiL5LiA5Liq5ZGo5pyf6KaB5omn6KGM55qE5Lu75Yqh5YiX6KGoXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBuZXh0VGFza3MgPSBbXTtcblxuLyoqXG4gKiDmiafooYzkuIvkuIDkuKrlkajmnJ/ku7vliqHnmoTlh73mlbBcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xudmFyIG5leHRIYW5kbGVyO1xuXG4vKipcbiAqIOa1j+iniOWZqOaYr+WQpuaUr+aMgeWOn+eUn1Byb21pc2VcbiAqIOWvuVByb21pc2XlgZrliKTmlq3vvIzmmK/kuLrkuobnpoHnlKjkuIDkupvkuI3kuKXosKjnmoRQcm9taXNl55qEcG9seWZpbGxcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG52YXIgaXNOYXRpdmVQcm9taXNlID0gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFByb21pc2UpO1xuXG4vKipcbiAqIOWcqOS4i+S4gOS4quaXtumXtOWRqOacn+i/kOihjOS7u+WKoVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Lu75Yqh5Ye95pWwXG4gKiBAcGFyYW0ge09iamVjdD19IHRoaXNBcmcgdGhpc+aMh+WQkeWvueixoVxuICovXG5mdW5jdGlvbiBuZXh0VGljayhmbiwgdGhpc0FyZykge1xuICAgIGlmICh0aGlzQXJnKSB7XG4gICAgICAgIGZuID0gYmluZChmbiwgdGhpc0FyZyk7XG4gICAgfVxuICAgIG5leHRUYXNrcy5wdXNoKGZuKTtcblxuICAgIGlmIChuZXh0SGFuZGxlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXNrcyA9IG5leHRUYXNrcy5zbGljZSgwKTtcbiAgICAgICAgbmV4dFRhc2tzID0gW107XG4gICAgICAgIG5leHRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhc2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGFza3NbaV0oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDpnZ7moIflh4bmlrnms5XvvIzkvYbmmK/mraTmlrnms5XpnZ7luLjlkLvlkIjopoHmsYLjgIJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZShuZXh0SGFuZGxlcik7XG4gICAgfVxuICAgIC8vIOeUqE1lc3NhZ2VDaGFubmVs5Y675YGac2V0SW1tZWRpYXRl55qEcG9seWZpbGxcbiAgICAvLyDljp/nkIbmmK/lsIbmlrDnmoRtZXNzYWdl5LqL5Lu25Yqg5YWl5Yiw5Y6f5pyJ55qEZG9tIGV2ZW50c+S5i+WQjlxuICAgIGVsc2UgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB2YXIgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbmV4dEhhbmRsZXI7XG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoMSk7XG4gICAgfVxuICAgIC8vIGZvciBuYXRpdmUgYXBwXG4gICAgZWxzZSBpZiAoaXNOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dEhhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChuZXh0SGFuZGxlciwgMCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBuZXh0VGljaztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIGll54mI5pys5Y+3XG4gKi9cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qKlxuICog5LuOdXNlckFnZW505LitaWXniYjmnKzlj7fnmoTljLnphY3kv6Hmga9cbiAqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBpZVZlcnNpb25NYXRjaCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbXNpZVxccyooWzAtOV0rKS9pKTtcblxuLyoqXG4gKiBpZeeJiOacrOWPt++8jOmdnmll5pe25Li6MFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBpZSA9IGllVmVyc2lvbk1hdGNoID8gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gaWVWZXJzaW9uTWF0Y2hbMV0gLSAwIDogMDtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOaYr+WQpiBJRSDlubbkuJTlsI/kuo4gOVxuICovXG5cbi8vIHZhciBpZSA9IHJlcXVpcmUoJy4vaWUnKTtcblxuLy8gSEFDSzpcbi8vIDEuIElFOOS4i++8jOiuvue9rmlubmVySFRNTOaXtuWmguaenOS7pWh0bWwgY29tbWVudOW8gOWktO+8jGNvbW1lbnTkvJrooqvoh6rliqjmu6Tmjolcbi8vICAgIOS4uuS6huS/neivgXN0dW1w5a2Y5Zyo77yM6ZyA6KaB6K6+572u5a6MaHRtbOWQju+8jGNyZWF0ZUNvbW1lbnTlubZhcHBlbmRDaGlsZC9pbnNlcnRCZWZvcmVcbi8vIDIuIElFOOS4i++8jGlubmVySFRNTOi/mOS4jeaUr+aMgWN1c3RvbSBlbGVtZW5077yM5omA5Lul6ZyA6KaB55SoZGl25pu/5Luj77yM5LiN55SoY3JlYXRlRWxlbWVudFxuLy8gMy4g6Jm954S2SUU45bey57uP5LyY5YyW5LqG5a2X56ym5LiyK+i/nuaOpe+8jOeijueJh+WMlui/nuaOpeaAp+iDveS4jeWGjemAgOWMllxuLy8gICAg5L2G5piv55Sx5LqO5LiK6Z2i5aSa5Liq5YW85a655Zy65pmv6YO955SoIDwgOSDliKTmlq3vvIzmiYDku6XlrZfnrKbkuLLov57mjqXkuZ/msr/nlKhcbi8vICAgIOaJgOS7pee7k+aenOaYr0lFOOS4i+Wtl+espuS4sui/nuaOpeeUqOeahOaYr+aVsOe7hGpvaW7nmoTmlrnlvI9cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qKlxuICog5piv5ZCmIElFIOW5tuS4lOWwj+S6jiA5XG4gKi9cbnZhciBpZU9sZFRoYW45ID0gaWUgJiYgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gaWUgPCA5O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGllT2xkVGhhbjk7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6blj5HlhYPntKDkuovku7ZcbiAqL1xuXG4vKipcbiAqIOinpuWPkeWFg+e0oOS6i+S7tlxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICovXG5mdW5jdGlvbiB0cmlnZ2VyKGVsLCBldmVudE5hbWUpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmlnZ2VyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kej5YazIElFOSDlnKjooajljZXlhYPntKDkuK3liKDpmaTlrZfnrKbml7bkuI3op6blj5Hkuovku7bnmoTpl67pophcbiAqL1xuXG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuL2llJyk7XG4vLyB2YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG4vLyB2YXIgdHJpZ2dlciA9IHJlcXVpcmUoJy4vdHJpZ2dlcicpO1xuXG4vLyAjW2JlZ2luXSBhbGx1YVxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoaWUgPT09IDkpIHtcbiAgICBvbihkb2N1bWVudCwgJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWwudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vICNbZW5kXVxuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Ieq6Zet5ZCI5qCH562+6KGoXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICog6Ieq6Zet5ZCI5qCH562+5YiX6KGoXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGF1dG9DbG9zZVRhZ3MgPSBzcGxpdFN0cjJPYmooJ2FyZWEsYmFzZSxicixjb2wsZW1iZWQsaHIsaW1nLGlucHV0LGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGF1dG9DbG9zZVRhZ3M7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBkYXRhIHR5cGVzXG4gKi9cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuL2JpbmQnKTtcbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4vZW1wdHknKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxudmFyIEFOT05ZTU9VU19DTEFTU19OQU1FID0gJzw8YW5vbnltb3VzPj4nO1xuXG4vKipcbiAqIOiOt+WPlueyvuehrueahOexu+Wei1xuICpcbiAqIEBOT1RFIOWmguaenCBvYmog5piv5LiA5LiqIERPTUVsZW1lbnTvvIzmiJHku6zkvJrov5Tlm54gYGVsZW1lbnRg77ybXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqIOebruagh1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREYXRhVHlwZShvYmopIHtcbiAgICAvLyDkuI3mlK/mjIFlbGVtZW505LqG44CCZGF0YeW6lOivpeaYr+e6r+aVsOaNrlxuICAgIC8vIGlmIChvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKSB7XG4gICAgLy8gICAgIHJldHVybiAnZWxlbWVudCc7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICAgICAgLmNhbGwob2JqKVxuICAgICAgICAuc2xpY2UoOCwgLTEpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuLy8gI1tlbmRdXG5cbi8qKlxuICog5Yib5bu66ZO+5byP55qE5pWw5o2u57G75Z6L5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHZhbGlkYXRlIOecn+ato+eahOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBjaGFpbmVkQ2hlY2tlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNoYWluZWRDaGVja2VyLmlzUmVxdWlyZWQgPSBlbXB0eTtcblxuICAgIC8vIOWPquWcqCBlcnJvciDlip/og73lkK/nlKjml7bmiY3mnInlrp7pmYXkuIrnmoQgZGF0YVR5cGVzIOajgOa1i1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFsaWRhdGUgPSB2YWxpZGF0ZSB8fCBlbXB0eTtcbiAgICB2YXIgY2hlY2tUeXBlID0gZnVuY3Rpb24gKGlzUmVxdWlyZWQsIGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgLy8g5aaC5p6c5pivIG51bGwg5oiWIHVuZGVmaW5lZO+8jOmCo+S5iOimgeaPkOWJjei/lOWbnuWVplxuICAgICAgICBpZiAoZGF0YVZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIOaYryByZXF1aXJlZCDlsLHmiqXplJlcbiAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICsgJ1RoZSBgJyArIGRhdGFOYW1lICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICArICdpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsICdcbiAgICAgICAgICAgICAgICAgICAgKyAnYnV0IGl0cyB2YWx1ZSBpcyAnICsgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5LiN5pivIHJlcXVpcmVk77yM6YKj5bCx5pivIG9rIOeahFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsaWRhdGUoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSk7XG5cbiAgICB9O1xuXG4gICAgY2hhaW5lZENoZWNrZXIgPSBiaW5kKGNoZWNrVHlwZSwgbnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja2VyLmlzUmVxdWlyZWQgPSBiaW5kKGNoZWNrVHlwZSwgbnVsbCwgdHJ1ZSk7XG4gICAgLy8gI1tlbmRdXG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrZXI7XG5cbn1cblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog55Sf5oiQ5Li76KaB57G75Z6L5pWw5o2u5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlIOS4u+exu+Wei1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcih0eXBlKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkICcgKyB0eXBlICsgJyknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG5cblxuLyoqXG4gKiDnlJ/miJAgYXJyYXlPZiDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYXJyYXlJdGVtQ2hlY2tlciDmlbDnu4TkuK3mr4/pobnmlbDmja7nmoTmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU9mQ2hlY2tlcihhcnJheUl0ZW1DaGVja2VyKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJyYXlJdGVtQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgYXJyYXlPZmAsIGV4cGVjdGVkIGBmdW5jdGlvbmAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgYXJyYXkpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhVmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5SXRlbUNoZWNrZXIoZGF0YVZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUgKyAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgaW5zdGFuY2VPZiDmo4DmtYvlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbnxDbGFzc30gZXhwZWN0ZWRDbGFzcyDmnJ/lvoXnmoTnsbtcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZU9mQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBpZiAoZGF0YVZhbHVlIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZUNsYXNzTmFtZSA9IGRhdGFWYWx1ZS5jb25zdHJ1Y3RvciAmJiBkYXRhVmFsdWUuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAgICAgPyBkYXRhVmFsdWUuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAgICAgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBBTk9OWU1PVVNfQ0xBU1NfTkFNRTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICsgJygnICsgZGF0YVZhbHVlQ2xhc3NOYW1lICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICsgJ2V4cGVjdGVkIGluc3RhbmNlIG9mICcgKyBleHBlY3RlZENsYXNzTmFtZSArICcpJ1xuICAgICAgICApO1xuXG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBzaGFwZSDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNoYXBlVHlwZXMgc2hhcGUg5qCh6aqM6KeE5YiZXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hhcGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKHNoYXBlVHlwZXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYHNoYXBlYCwgZXhwZWN0ZWQgYG9iamVjdGAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9iamVjdCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgc2hhcGVLZXlOYW1lIGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICAgICAgaWYgKHNoYXBlVHlwZXMuaGFzT3duUHJvcGVydHkoc2hhcGVLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1tzaGFwZUtleU5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VyKGRhdGFWYWx1ZSwgc2hhcGVLZXlOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUgKyAnLicgKyBzaGFwZUtleU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb25lT2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGV4cGVjdGVkRW51bVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7lgLxcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZkNoZWNrZXIoZXhwZWN0ZWRFbnVtVmFsdWVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShleHBlY3RlZEVudW1WYWx1ZXMpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1WYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhVmFsdWUgPT09IGV4cGVjdGVkRW51bVZhbHVlc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHZhbHVlJ1xuICAgICAgICAgICAgKyAnKGAnICsgZGF0YVZhbHVlICsgJ2Agc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICArICdleHBlY3RlZCBvbmUgb2YgJyArIGV4cGVjdGVkRW51bVZhbHVlcy5qb2luKCcsJykgKyAnKSdcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9uZU9mVHlwZSDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxGdW5jdGlvbj59IGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7nsbvlnotcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZlR5cGVDaGVja2VyKGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNoZWNrZXIoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6cIGNoZWNrZXIg5a6M5oiQ5qCh6aqM5rKh5oql6ZSZ77yM6YKj5bCx6L+U5Zue5LqGXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnInplJnor6/vvIzpgqPkuYjlupTor6XmiorplJnor6/lkJ7mjolcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5omA5pyJ55qE5Y+v5o6l5Y+XIHR5cGUg6YO95aSx6LSl5LqG77yM5omN5Lii5LiA5Liq5byC5bi4XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgdmFsdWUnXG4gICAgICAgICAgICArICcoYCcgKyBkYXRhVmFsdWUgKyAnYCBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcpJ1xuICAgICAgICApO1xuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb2JqZWN0T2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOWvueixoeWxnuaAp+WAvOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBvYmplY3RPZmAsIGV4cGVjdGVkIGZ1bmN0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9iamVjdCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgZGF0YUtleU5hbWUgaW4gZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChkYXRhVmFsdWUuaGFzT3duUHJvcGVydHkoZGF0YUtleU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdHlwZUNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxEYXRhTmFtZSArICcuJyArIGRhdGFLZXlOYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBleGFjdCDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNoYXBlVHlwZXMgb2JqZWN0IOW9ouaAgeWumuS5iVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV4YWN0Q2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSwgc2VjcmV0KSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKHNoYXBlVHlwZXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgZXhhY3RgJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFWYWx1ZVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVmFsdWVUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSBgJyArIGRhdGFWYWx1ZVR5cGUgKyAnYCdcbiAgICAgICAgICAgICAgICArICcoc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCBleHBlY3RlZCBgb2JqZWN0YCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFsbEtleXMgPSB7fTtcblxuICAgICAgICAvLyDlhYjlkIjlhaUgc2hhcGVUeXBlc1xuICAgICAgICBleHRlbmQoYWxsS2V5cywgc2hhcGVUeXBlcyk7XG4gICAgICAgIC8vIOWGjeWQiOWFpSBkYXRhVmFsdWVcbiAgICAgICAgZXh0ZW5kKGFsbEtleXMsIGRhdGFWYWx1ZSk7XG4gICAgICAgIC8vIOS/neivgSBhbGxLZXlzIOeahOexu+Wei+ato+ehrlxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChhbGxLZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGRhdGFWYWx1ZSDkuK3mnInkuIDkuKrlpJrkvZnnmoTmlbDmja7poblcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdJbnZhbGlkIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKGAnICsga2V5ICsgJ2AgaXMgbm90IGRlZmluZWQgaW4gYERhdGFUeXBlcy5leGFjdGApJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBkYXRhVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJyhgJyArIGtleSArICdgIGlzIG1hcmtlZCBgcmVxdWlyZWRgIGluIGBEYXRhVHlwZXMuZXhhY3RgKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZnVsbERhdGFOYW1lICsgJy4nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICBzZWNyZXRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG4vLyAjW2VuZF1cblxuXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG52YXIgRGF0YVR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKCksXG4gICAgb2JqZWN0OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKCksXG4gICAgZnVuYzogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuICAgIHN0cmluZzogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuICAgIG51bWJlcjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuICAgIGJvb2w6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcbiAgICBzeW1ib2w6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoKSxcbiAgICBhbnk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgYXJyYXlPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvYmplY3RPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlclxufTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbkRhdGFUeXBlcyA9IHtcblxuICAgIGFueTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcigpLFxuXG4gICAgLy8g57G75Z6L5qOA5rWLXG4gICAgYXJyYXk6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgLy8g5aSN5ZCI57G75Z6L5qOA5rWLXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZkNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VPZkNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlT25lT2ZDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlT25lT2ZUeXBlQ2hlY2tlcixcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVFeGFjdENoZWNrZXJcblxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbi8vICNbZW5kXVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gRGF0YVR5cGVzO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu65pWw5o2u5qOA5rWL5Ye95pWwXG4gKi9cblxuXG4vLyAjW2JlZ2luXSBlcnJvclxuXG4vKipcbiAqIOWIm+W7uuaVsOaNruajgOa1i+WHveaVsFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZGF0YVR5cGVzICAgICDmlbDmja7moLzlvI9cbiAqIEBwYXJhbSAge3N0cmluZ30gY29tcG9uZW50TmFtZSDnu4Tku7blkI1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYXRhVHlwZXNDaGVja2VyKGRhdGFUeXBlcywgY29tcG9uZW50TmFtZSkge1xuXG4gICAgLyoqXG4gICAgICog5qCh6aqMIGRhdGEg5piv5ZCm5ruh6LazIGRhdGEgdHlwZXMg55qE5qC85byPXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSBkYXRhIOaVsOaNrlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgIGZvciAodmFyIGRhdGFUeXBlTmFtZSBpbiBkYXRhVHlwZXMpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICAgICAgaWYgKGRhdGFUeXBlcy5oYXNPd25Qcm9wZXJ0eShkYXRhVHlwZU5hbWUpKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGVDaGVja2VyID0gZGF0YVR5cGVzW2RhdGFUeXBlTmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFUeXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcG9uZW50TmFtZSArICc6JyArIGRhdGFUeXBlTmFtZSArICcgaXMgaW52YWxpZDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gc2FuLkRhdGFUeXBlcydcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhVHlwZUNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGVOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbn1cblxuLy8gI1tlbmRdXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWtl+espuS4sua6kOeggeivu+WPluexu1xuICovXG5cblxuLyoqXG4gKiDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbvvvIznlKjkuo7mqKHmnb/lrZfnrKbkuLLop6PmnpDov4fnqItcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB6K+75Y+W55qE5a2X56ym5LiyXG4gKi9cbmZ1bmN0aW9uIFdhbGtlcihzb3VyY2UpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbn1cblxuLyoqXG4gKiDojrflj5blvZPliY3lrZfnrKbnoIFcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3VycmVudENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJDb2RlQXQodGhpcy5pbmRleCk7XG59O1xuXG4vKipcbiAqIOaIquWPluWtl+espuS4sueJh+autVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCDotbflp4vkvY3nva5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQg57uT5p2f5L2N572uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3V0ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+esplxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSDor7vlj5blrZfnrKbmlbBcbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHRoaXMuaW5kZXggKz0gZGlzdGFuY2U7XG59O1xuXG4vKipcbiAqIOivu+WPluS4i+S4gOS4quWtl+espu+8jOi/lOWbnuS4i+S4gOS4quWtl+espueahCBjb2RlXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLm5leHRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ28oMSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvZGUoKTtcbn07XG5cbi8qKlxuICog6I635Y+W55u45bqU5L2N572u5a2X56ym55qEIGNvZGVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5a2X56ym5L2N572uXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY2hhckNvZGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckNvZGVBdChpbmRleCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+espu+8jOebtOWIsOmBh+WIsOaMh+WumuWtl+espuWGjeWBnOatolxuICog5pyq5oyH5a6a5a2X56ym5pe277yM5b2T6YGH5Yiw56ys5LiA5Liq6Z2e56m65qC844CB5Yi26KGo56ym55qE5a2X56ym5YGc5q2iXG4gKlxuICogQHBhcmFtIHtudW1iZXI9fSBjaGFyQ29kZSDmjIflrprlrZfnrKbnmoRjb2RlXG4gKiBAcmV0dXJuIHtib29sZWFufSDlvZPmjIflrprlrZfnrKbml7bvvIzov5Tlm57mmK/lkKbnorDliLDmjIflrprnmoTlrZfnrKZcbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5nb1VudGlsID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gICAgdmFyIGNvZGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLmxlbiAmJiAoY29kZSA9IHRoaXMuY3VycmVudENvZGUoKSkpIHtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOiAvLyDnqbrmoLwgc3BhY2VcbiAgICAgICAgICAgIGNhc2UgOTogLy8g5Yi26KGo56ymIHRhYlxuICAgICAgICAgICAgY2FzZSAxMzogLy8gXFxyXG4gICAgICAgICAgICBjYXNlIDEwOiAvLyBcXG5cbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5ZCR5YmN6K+75Y+W56ym5ZCI6KeE5YiZ55qE5a2X56ym54mH5q6177yM5bm26L+U5Zue6KeE5YiZ5Yy56YWN57uT5p6cXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlZyDlrZfnrKbniYfmrrXnmoTmraPliJnooajovr7lvI9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNYXRjaFN0YXJ0IOaYr+WQpuW/hemhu+WMuemFjeW9k+WJjeS9jee9rlxuICogQHJldHVybiB7QXJyYXk/fVxuICovXG5XYWxrZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHJlZywgaXNNYXRjaFN0YXJ0KSB7XG4gICAgcmVnLmxhc3RJbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICB2YXIgbWF0Y2ggPSByZWcuZXhlYyh0aGlzLnNvdXJjZSk7XG4gICAgaWYgKG1hdGNoICYmICghaXNNYXRjaFN0YXJ0IHx8IHRoaXMuaW5kZXggPT09IG1hdGNoLmluZGV4KSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gcmVnLmxhc3RJbmRleDtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFdhbGtlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOaKiiBrZWJhYiBjYXNlIOWtl+espuS4sui9rOaNouaIkCBjYW1lbCBjYXNlXG4gKi9cblxuLyoqXG4gKiDmiooga2ViYWIgY2FzZSDlrZfnrKbkuLLovazmjaLmiJAgY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGtlYmFiMmNhbWVsKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UucmVwbGFjZSgvLSsoLikvaWcsIGZ1bmN0aW9uIChtYXRjaCwgYWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGtlYmFiMmNhbWVsO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgYm9vbOWxnuaAp+ihqFxuICovXG5cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICogYm9vbOWxnuaAp+ihqFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBib29sQXR0cnMgPSBzcGxpdFN0cjJPYmooXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LCdcbiAgICArICdjaGVja2VkLGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsZm9ybW5vdmFsaWRhdGUsJ1xuICAgICsgJ2hpZGRlbixpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSxtdXRlZCxub21vZHVsZSxub3ZhbGlkYXRlLCdcbiAgICArICdvcGVuLHJlYWRvbmx5LHJlcXVpcmVkLHJldmVyc2VkLHNlbGVjdGVkLHR5cGVtdXN0bWF0Y2gnXG4pO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBib29sQXR0cnM7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDooajovr7lvI/nsbvlnotcbiAqL1xuXG4vKipcbiAqIOihqOi+vuW8j+exu+Wei1xuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEV4cHJUeXBlID0ge1xuICAgIFNUUklORzogMSxcbiAgICBOVU1CRVI6IDIsXG4gICAgQk9PTDogMyxcbiAgICBBQ0NFU1NPUjogNCxcbiAgICBJTlRFUlA6IDUsXG4gICAgQ0FMTDogNixcbiAgICBURVhUOiA3LFxuICAgIEJJTkFSWTogOCxcbiAgICBVTkFSWTogOSxcbiAgICBURVJUSUFSWTogMTAsXG4gICAgT0JKRUNUOiAxMSxcbiAgICBBUlJBWTogMTIsXG4gICAgTlVMTDogMTNcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEV4cHJUeXBlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu66K6/6Zeu6KGo6L6+5byP5a+56LGhXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDliJvlu7rorr/pl67ooajovr7lvI/lr7nosaFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRocyDorr/pl67ot6/lvoRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWNjZXNzb3IocGF0aHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiA0LFxuICAgICAgICBwYXRoczogcGF0aHNcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBY2Nlc3NvcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluWtl+espuS4slxuICovXG5cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDor7vlj5blrZfnrKbkuLJcbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkU3RyaW5nKHdhbGtlcikge1xuICAgIHZhciBzdGFydENvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB2YXIgY2hhckNvZGU7XG5cbiAgICB3YWxrTG9vcDogd2hpbGUgKChjaGFyQ29kZSA9IHdhbGtlci5uZXh0Q29kZSgpKSkge1xuICAgICAgICBzd2l0Y2ggKGNoYXJDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDkyOiAvLyBcXFxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc3RhcnRDb2RlOlxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBicmVhayB3YWxrTG9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaXRlcmFsID0gd2Fsa2VyLmN1dChzdGFydEluZGV4LCB3YWxrZXIuaW5kZXgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IDEsXG4gICAgICAgIC8vIOWkhOeQhuWtl+espui9rOS5iVxuICAgICAgICB2YWx1ZTogKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBsaXRlcmFsKSkoKVxuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRTdHJpbmc7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bkuIDlhYPooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRTdHJpbmcgPSByZXF1aXJlKCcuL3JlYWQtc3RyaW5nJyk7XG4vLyB2YXIgcmVhZE51bWJlciA9IHJlcXVpcmUoJy4vcmVhZC1udW1iZXInKTtcbi8vIHZhciByZWFkQ2FsbCA9IHJlcXVpcmUoJy4vcmVhZC1jYWxsJyk7XG4vLyB2YXIgcmVhZFBhcmVudGhlc2l6ZWRFeHByID0gcmVxdWlyZSgnLi9yZWFkLXBhcmVudGhlc2l6ZWQtZXhwcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG5cbi8qKlxuICog6K+75Y+W5LiA5YWD6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFVuYXJ5RXhwcih3YWxrZXIpIHtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgc3dpdGNoICh3YWxrZXIuY3VycmVudENvZGUoKSkge1xuICAgICAgICBjYXNlIDMzOiAvLyAhXG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDksXG4gICAgICAgICAgICAgICAgZXhwcjogcmVhZFVuYXJ5RXhwcih3YWxrZXIpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAzM1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgICAgICByZXR1cm4gcmVhZFN0cmluZyh3YWxrZXIpO1xuXG4gICAgICAgIGNhc2UgNDU6IC8vIC1cbiAgICAgICAgY2FzZSA0ODogLy8gbnVtYmVyXG4gICAgICAgIGNhc2UgNDk6XG4gICAgICAgIGNhc2UgNTA6XG4gICAgICAgIGNhc2UgNTE6XG4gICAgICAgIGNhc2UgNTI6XG4gICAgICAgIGNhc2UgNTM6XG4gICAgICAgIGNhc2UgNTQ6XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgIGNhc2UgNTY6XG4gICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICByZXR1cm4gcmVhZE51bWJlcih3YWxrZXIpO1xuXG4gICAgICAgIGNhc2UgNDA6IC8vIChcbiAgICAgICAgICAgIHJldHVybiByZWFkUGFyZW50aGVzaXplZEV4cHIod2Fsa2VyKTtcblxuICAgICAgICAvLyBhcnJheSBsaXRlcmFsXG4gICAgICAgIGNhc2UgOTE6IC8vIFtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHZhciBhcnJJdGVtcyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKCF3YWxrZXIuZ29VbnRpbCg5MykpIHsgLy8gXVxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgYXJySXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNDYgJiYgd2Fsa2VyLm1hdGNoKC9cXC5cXC5cXC5cXHMqL2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLmV4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvVW50aWwoNDQpOyAvLyAsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogMTIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGFyckl0ZW1zXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIC8vIG9iamVjdCBsaXRlcmFsXG4gICAgICAgIGNhc2UgMTIzOiAvLyB7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICB2YXIgb2JqSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKCF3YWxrZXIuZ29VbnRpbCgxMjUpKSB7IC8vIH1cbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xuICAgICAgICAgICAgICAgIG9iakl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDQ2ICYmIHdhbGtlci5tYXRjaCgvXFwuXFwuXFwuXFxzKi9nKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhwciA9IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YWxrZXJJbmRleEJlZm9yZU5hbWUgPSB3YWxrZXIuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IHJlYWRVbmFyeUV4cHIod2Fsa2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lLnR5cGUgPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1tTQU4gRkFUQUxdIHVuZXhwZWN0IG9iamVjdCBuYW1lOiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB3YWxrZXIuY3V0KHdhbGtlckluZGV4QmVmb3JlTmFtZSwgd2Fsa2VyLmluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLmdvVW50aWwoNTgpKSB7IC8vIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhwciA9IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZXhwciA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUudHlwZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gaXRlbS5uYW1lLnBhdGhzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvVW50aWwoNDQpOyAvLyAsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogMTEsXG4gICAgICAgICAgICAgICAgaXRlbXM6IG9iakl0ZW1zXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZWFkQ2FsbCh3YWxrZXIpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkVW5hcnlFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5pWw5a2XXG4gKi9cblxuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRVbmFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdW5hcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluaVsOWtl1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZE51bWJlcih3YWxrZXIpIHtcbiAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL1xccyooLT9bMC05XSsoXFwuWzAtOV0rKT8pL2csIDEpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgdmFsdWU6ICttYXRjaFsxXVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNDUpIHtcbiAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogOSxcbiAgICAgICAgICAgIGV4cHI6IHJlYWRVbmFyeUV4cHIod2Fsa2VyKSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiA0NVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZE51bWJlcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPlmlkZW50XG4gKi9cblxuLyoqXG4gKiDor7vlj5ZpZGVudFxuICog6L+Z6YeM55qEIGlkZW50IOaMh+agh+ivhuespihpZGVudGlmaWVyKe+8jOS5n+WwseaYr+mAmuW4uOaEj+S5ieS4iueahOWPmOmHj+WQjVxuICog6L+Z6YeM6buY6K6k55qE5Y+Y6YeP5ZCN6KeE5YiZ5Li677ya55Sx576O5YWD56ym5Y+3KCQp44CB5pWw5a2X44CB5a2X5q+N5oiW6ICF5LiL5YiS57q/KF8p5p6E5oiQ55qE5a2X56ym5LiyXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZWFkSWRlbnQod2Fsa2VyKSB7XG4gICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9cXHMqKFtcXCQwLTlhLXpfXSspL2lnLCAxKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIGV4cGVjdCBhbiBpZGVudDogJyArIHdhbGtlci5jdXQod2Fsa2VyLmluZGV4KSk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgcmV0dXJuIG1hdGNoWzFdO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkSWRlbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bkuInlhYPooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsT1JFeHByID0gcmVxdWlyZSgnLi9yZWFkLWxvZ2ljYWwtb3ItZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS4ieWFg+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGNvbmRpdGlvbmFsID0gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2MykgeyAvLyA/XG4gICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgdmFyIHllc0V4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA1OCkgeyAvLyA6XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEwLFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwsXG4gICAgICAgICAgICAgICAgICAgIHllc0V4cHIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWw7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRUZXJ0aWFyeUV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5borr/pl67ooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciByZWFkSWRlbnQgPSByZXF1aXJlKCcuL3JlYWQtaWRlbnQnKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5borr/pl67ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkQWNjZXNzb3Iod2Fsa2VyKSB7XG4gICAgdmFyIGZpcnN0U2VnID0gcmVhZElkZW50KHdhbGtlcik7XG4gICAgc3dpdGNoIChmaXJzdFNlZykge1xuICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaXJzdFNlZyA9PT0gJ3RydWUnXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogMTNcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIHZhbHVlOiBmaXJzdFNlZ1xuICAgICAgICB9XG4gICAgXSk7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbiAgICBhY2Nlc3Nvckxvb3A6IHdoaWxlICgxKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cblxuICAgICAgICBzd2l0Y2ggKHdhbGtlci5jdXJyZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIDQ2OiAvLyAuXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWRlbnQgYXMgc3RyaW5nXG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhdGhzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVhZElkZW50KHdhbGtlcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTogLy8gW1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGF0aHMucHVzaChyZWFkVGVydGlhcnlFeHByKHdhbGtlcikpO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDkzKTsgLy8gXVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrIGFjY2Vzc29yTG9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRBY2Nlc3NvcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluiwg+eUqFxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6LCD55SoXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEBwYXJhbSB7QXJyYXk9fSBkZWZhdWx0QXJncyDpu5jorqTlj4LmlbBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZENhbGwod2Fsa2VyLCBkZWZhdWx0QXJncykge1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG4gICAgdmFyIHJlc3VsdCA9IHJlYWRBY2Nlc3Nvcih3YWxrZXIpO1xuXG4gICAgdmFyIGFyZ3M7XG4gICAgaWYgKHdhbGtlci5nb1VudGlsKDQwKSkgeyAvLyAoXG4gICAgICAgIGFyZ3MgPSBbXTtcblxuICAgICAgICB3aGlsZSAoIXdhbGtlci5nb1VudGlsKDQxKSkgeyAvLyApXG4gICAgICAgICAgICBhcmdzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDQ0KTsgLy8gLFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZmF1bHRBcmdzKSB7XG4gICAgICAgIGFyZ3MgPSBkZWZhdWx0QXJncztcbiAgICB9XG5cbiAgICBpZiAoYXJncykge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICB0eXBlOiA2LFxuICAgICAgICAgICAgbmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRDYWxsO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5ous5Y+36KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluaLrOWPt+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRQYXJlbnRoZXNpemVkRXhwcih3YWxrZXIpIHtcbiAgICB3YWxrZXIuZ28oMSk7XG4gICAgdmFyIGV4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoNDEpOyAvLyApXG5cbiAgICBleHByLnBhcmVudGhlc2l6ZWQgPSB0cnVlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkUGFyZW50aGVzaXplZEV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bkuZjms5Xooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRVbmFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdW5hcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS5mOazleihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkVW5hcnlFeHByKHdhbGtlcik7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzogLy8gJVxuICAgICAgICAgICAgY2FzZSA0MjogLy8gKlxuICAgICAgICAgICAgY2FzZSA0NzogLy8gL1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBleHByID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiA4LFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRVbmFyeUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZE11bHRpcGxpY2F0aXZlRXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluWKoOazleihqOi+vuW8j1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZE11bHRpcGxpY2F0aXZlRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1tdWx0aXBsaWNhdGl2ZS1leHByJyk7XG5cblxuLyoqXG4gKiDor7vlj5bliqDms5Xooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkQWRkaXRpdmVFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgd2Fsa2VyLmdvVW50aWwoKTtcbiAgICAgICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDM6IC8vICtcbiAgICAgICAgICAgIGNhc2UgNDU6IC8vIC1cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgZXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogOCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcildXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQWRkaXRpdmVFeHByO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K+75Y+W5YWz57O75Yik5pat6KGo6L6+5byPXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQWRkaXRpdmVFeHByID0gcmVxdWlyZSgnLi9yZWFkLWFkZGl0aXZlLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5blhbPns7vliKTmlq3ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkQWRkaXRpdmVFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNjA6IC8vIDxcbiAgICAgICAgY2FzZSA2MjogLy8gPlxuICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDgsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRSZWxhdGlvbmFsRXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPluebuOetieavlOWvueihqOi+vuW8j1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZFJlbGF0aW9uYWxFeHByID0gcmVxdWlyZSgnLi9yZWFkLXJlbGF0aW9uYWwtZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluebuOetieavlOWvueihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSA2MTogLy8gPVxuICAgICAgICBjYXNlIDMzOiAvLyAhXG4gICAgICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgY29kZSArPSA2MTtcbiAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiA4LFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRSZWxhdGlvbmFsRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdhbGtlci5nbygtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRFcXVhbGl0eUV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDor7vlj5bpgLvovpHkuI7ooajovr7lvI9cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRFcXVhbGl0eUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtZXF1YWxpdHktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPlumAu+i+keS4juihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAzOCkgeyAvLyAmXG4gICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gMzgpIHtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogOCxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogNzYsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhbGtlci5nbygtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRMb2dpY2FsQU5ERXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOivu+WPlumAu+i+keaIluihqOi+vuW8j1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZExvZ2ljYWxBTkRFeHByID0gcmVxdWlyZSgnLi9yZWFkLWxvZ2ljYWwtYW5kLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bpgLvovpHmiJbooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTG9naWNhbE9SRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDEyNCkgeyAvLyB8XG4gICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gMTI0KSB7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IDgsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IDI0OCxcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTG9naWNhbE9SRXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOihqOi+vuW8j1xuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOino+aekOihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlRXhwcihzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnICYmIHNvdXJjZS50eXBlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIGV4cHIgPSByZWFkVGVydGlhcnlFeHByKG5ldyBXYWxrZXIoc291cmNlKSk7XG4gICAgZXhwci5yYXcgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlRXhwcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOiwg+eUqFxuICovXG5cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRDYWxsID0gcmVxdWlyZSgnLi9yZWFkLWNhbGwnKTtcblxuLyoqXG4gKiDop6PmnpDosIPnlKhcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHBhcmFtIHtBcnJheT19IGRlZmF1bHRBcmdzIOm7mOiupOWPguaVsFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUNhbGwoc291cmNlLCBkZWZhdWx0QXJncykge1xuICAgIHZhciBleHByID0gcmVhZENhbGwobmV3IFdhbGtlcihzb3VyY2UpLCBkZWZhdWx0QXJncyk7XG5cbiAgICBpZiAoZXhwci50eXBlICE9PSA2KSB7XG4gICAgICAgIGV4cHIgPSB7XG4gICAgICAgICAgICB0eXBlOiA2LFxuICAgICAgICAgICAgbmFtZTogZXhwcixcbiAgICAgICAgICAgIGFyZ3M6IGRlZmF1bHRBcmdzIHx8IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwci5yYXcgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlQ2FsbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOaPkuWAvOabv+aNolxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQ2FsbCA9IHJlcXVpcmUoJy4vcmVhZC1jYWxsJyk7XG5cbi8qKlxuICog6Kej5p6Q5o+S5YC85pu/5o2iXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VJbnRlcnAoc291cmNlKSB7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcblxuICAgIHZhciBpbnRlcnAgPSB7XG4gICAgICAgIHR5cGU6IDUsXG4gICAgICAgIGV4cHI6IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSxcbiAgICAgICAgZmlsdGVyczogW10sXG4gICAgICAgIHJhdzogc291cmNlXG4gICAgfTtcblxuICAgIHdoaWxlICh3YWxrZXIuZ29VbnRpbCgxMjQpKSB7IC8vIHxcbiAgICAgICAgdmFyIGNhbGxFeHByID0gcmVhZENhbGwod2Fsa2VyLCBbXSk7XG4gICAgICAgIHN3aXRjaCAoY2FsbEV4cHIubmFtZS5wYXRoc1swXS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXcnOlxuICAgICAgICAgICAgICAgIGludGVycC5vcmlnaW5hbCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGludGVycC5maWx0ZXJzLnB1c2goY2FsbEV4cHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VJbnRlcnA7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PnoIEgSFRNTCDlrZfnrKblrp7kvZNcbiAqL1xuXG52YXIgRU5USVRZX0RFQ09ERV9NQVAgPSB7XG4gICAgbHQ6ICc8JyxcbiAgICBndDogJz4nLFxuICAgIG5ic3A6ICcgJyxcbiAgICBxdW90OiAnXFxcIicsXG4gICAgZW1zcDogJ1xcdTIwMDMnLFxuICAgIGVuc3A6ICdcXHUyMDAyJyxcbiAgICB0aGluc3A6ICdcXHUyMDA5JyxcbiAgICBjb3B5OiAnXFx4YTknLFxuICAgIHJlZzogJ1xceGFlJyxcbiAgICB6d25qOiAnXFx1MjAwYycsXG4gICAgendqOiAnXFx1MjAwZCcsXG4gICAgYW1wOiAnJidcbn07XG5cbi8qKlxuICog6Kej56CBIEhUTUwg5a2X56ym5a6e5L2TXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDopoHop6PnoIHnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZGVjb2RlSFRNTEVudGl0eShzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlXG4gICAgICAgIC5yZXBsYWNlKC8mIyhbMC05XSspOy9nLCBmdW5jdGlvbiAobWF0Y2gsIGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtjb2RlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlcGxhY2UoLyYjeChbMC05YS1mXSspOy9pZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjb2RlLCAxNikpO1xuICAgICAgICB9KVxuICAgICAgICAucmVwbGFjZSgvJihbYS16XSspOy9pZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gRU5USVRZX0RFQ09ERV9NQVBbY29kZV0gfHwgbWF0Y2g7XG4gICAgICAgIH0pO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVIVE1MRW50aXR5O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kej5p6Q5paH5pysXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHBhcnNlSW50ZXJwID0gcmVxdWlyZSgnLi9wYXJzZS1pbnRlcnAnKTtcbi8vIHZhciBkZWNvZGVIVE1MRW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbC9kZWNvZGUtaHRtbC1lbnRpdHknKTtcblxuLyoqXG4gKiDlr7nlrZfnrKbkuLLov5vooYzlj6/nlKjkuo5uZXcgUmVnRXhw55qE5a2X6Z2i5YyWXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOmcgOimgeWtl+mdouWMlueahOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfSDlrZfnrKbkuLLlrZfpnaLljJbnu5PmnpxcbiAqL1xuZnVuY3Rpb24gcmVnZXhwTGl0ZXJhbChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoL1tcXF5cXFtcXF1cXCRcXChcXClcXHtcXH1cXD9cXCpcXC5cXCtcXFxcXS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgYztcbiAgICB9KTtcbn1cblxudmFyIGRlbGltUmVnQ2FjaGUgPSB7fTtcblxuLyoqXG4gKiDop6PmnpDmlofmnKxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHBhcmFtIHtBcnJheT99IGRlbGltaXRlcnMg5YiG6ZqU56ym44CC6buY6K6k5Li6IFsne3snLCAnfX0nXVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZVRleHQoc291cmNlLCBkZWxpbWl0ZXJzKSB7XG4gICAgZGVsaW1pdGVycyA9IGRlbGltaXRlcnMgfHwgWyd7eycsICd9fSddO1xuXG4gICAgdmFyIHJlZ0NhY2hlS2V5ID0gZGVsaW1pdGVyc1swXSArICc+Li48JyArIGRlbGltaXRlcnNbMV07XG4gICAgdmFyIGV4cHJTdGFydFJlZyA9IGRlbGltUmVnQ2FjaGVbcmVnQ2FjaGVLZXldO1xuICAgIGlmICghZXhwclN0YXJ0UmVnKSB7XG4gICAgICAgIGV4cHJTdGFydFJlZyA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICByZWdleHBMaXRlcmFsKGRlbGltaXRlcnNbMF0pXG4gICAgICAgICAgICAgICAgKyAnXFxcXHMqKFtcXFxcc1xcXFxTXSs/KVxcXFxzKidcbiAgICAgICAgICAgICAgICArIHJlZ2V4cExpdGVyYWwoZGVsaW1pdGVyc1sxXSksXG4gICAgICAgICAgICAnZydcbiAgICAgICAgKTtcbiAgICAgICAgZGVsaW1SZWdDYWNoZVtyZWdDYWNoZUtleV0gPSBleHByU3RhcnRSZWc7XG4gICAgfVxuXG4gICAgdmFyIGV4cHJNYXRjaDtcblxuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG4gICAgdmFyIGJlZm9yZUluZGV4ID0gMDtcblxuICAgIHZhciBleHByID0ge1xuICAgICAgICB0eXBlOiA3LFxuICAgICAgICBzZWdzOiBbXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwdXNoU3RyaW5nVG9TZWcodGV4dCkge1xuICAgICAgICB0ZXh0ICYmIGV4cHIuc2Vncy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICBsaXRlcmFsOiB0ZXh0LFxuICAgICAgICAgICAgdmFsdWU6IGRlY29kZUhUTUxFbnRpdHkodGV4dClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGRlbGltRW5kTGVuID0gZGVsaW1pdGVyc1sxXS5sZW5ndGg7XG4gICAgd2hpbGUgKChleHByTWF0Y2ggPSB3YWxrZXIubWF0Y2goZXhwclN0YXJ0UmVnKSkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgaW50ZXJwU291cmNlID0gZXhwck1hdGNoWzFdO1xuICAgICAgICB2YXIgaW50ZXJwTGVuID0gZXhwck1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgaWYgKHdhbGtlci5jdXQod2Fsa2VyLmluZGV4ICsgMSAtIGRlbGltRW5kTGVuLCB3YWxrZXIuaW5kZXggKyAxKSA9PT0gZGVsaW1pdGVyc1sxXSkge1xuICAgICAgICAgICAgaW50ZXJwU291cmNlICs9IHdhbGtlci5jdXQod2Fsa2VyLmluZGV4LCB3YWxrZXIuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIGludGVycExlbisrO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaFN0cmluZ1RvU2VnKHdhbGtlci5jdXQoXG4gICAgICAgICAgICBiZWZvcmVJbmRleCxcbiAgICAgICAgICAgIHdhbGtlci5pbmRleCAtIGludGVycExlblxuICAgICAgICApKTtcblxuICAgICAgICB2YXIgaW50ZXJwID0gcGFyc2VJbnRlcnAoaW50ZXJwU291cmNlKTtcbiAgICAgICAgZXhwci5vcmlnaW5hbCA9IGV4cHIub3JpZ2luYWwgfHwgaW50ZXJwLm9yaWdpbmFsO1xuICAgICAgICBleHByLnNlZ3MucHVzaChpbnRlcnApO1xuXG4gICAgICAgIGJlZm9yZUluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIH1cblxuICAgIHB1c2hTdHJpbmdUb1NlZyh3YWxrZXIuY3V0KGJlZm9yZUluZGV4KSk7XG5cblxuXG4gICAgaWYgKGV4cHIuc2Vncy5sZW5ndGggPT09IDEgJiYgZXhwci5zZWdzWzBdLnR5cGUgPT09IDEpIHtcbiAgICAgICAgZXhwci52YWx1ZSA9IGV4cHIuc2Vnc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VUZXh0O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6Kej5p6Q5oyH5LukXG4gKi9cblxuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuL3BhcnNlLWV4cHInKTtcbi8vIHZhciBwYXJzZUNhbGwgPSByZXF1aXJlKCcuL3BhcnNlLWNhbGwnKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciByZWFkQWNjZXNzb3IgPSByZXF1aXJlKCcuL3JlYWQtYWNjZXNzb3InKTtcbi8vIHZhciByZWFkVW5hcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXVuYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDmjIfku6Top6PmnpDlmahcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkaXJlY3RpdmVQYXJzZXJzID0ge1xuICAgICdmb3InOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIodmFsdWUpO1xuICAgICAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL15cXHMqKFskMC05YS16X10rKShcXHMqLFxccyooWyQwLTlhLXpfXSspKT9cXHMraW5cXHMrL2lnLCAxKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICAgICAgICAgICAgaXRlbTogbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRVbmFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLmluZGV4ID0gbWF0Y2hbM107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3YWxrZXIubWF0Y2goL1xccyp0cmFja2J5XFxzKy9pZywgMSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB3YWxrZXIuaW5kZXg7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLnRyYWNrQnkgPSByZWFkQWNjZXNzb3Iod2Fsa2VyKTtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUudHJhY2tCeS5yYXcgPSB3YWxrZXIuY3V0KHN0YXJ0LCB3YWxrZXIuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gZm9yIHN5bnRheCBlcnJvcjogJyArIHZhbHVlKTtcbiAgICAgICAgLy8gI1tlbmRdXG4gICAgfSxcblxuICAgICdyZWYnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZVRleHQodmFsdWUsIG9wdGlvbnMuZGVsaW1pdGVycylcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2lmJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2VsaWYnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZWxzZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnYmluZCc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdodG1sJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ3RyYW5zaXRpb24nOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUNhbGwodmFsdWUpXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuLyoqXG4gKiDop6PmnpDmjIfku6RcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOaMh+S7pOWQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOaMh+S7pOWAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZShhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2Vsc2UtaWYnKSB7XG4gICAgICAgIG5hbWUgPSAnZWxpZic7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlciA9IGRpcmVjdGl2ZVBhcnNlcnNbbmFtZV07XG4gICAgaWYgKHBhcnNlcikge1xuICAgICAgICAoYU5vZGUuZGlyZWN0aXZlc1tuYW1lXSA9IHBhcnNlcih2YWx1ZSwgb3B0aW9ucykpLnJhdyA9IHZhbHVlO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VEaXJlY3RpdmU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDop6PmnpDmir3osaHoioLngrnlsZ7mgKdcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGtlYmFiMmNhbWVsID0gcmVxdWlyZSgnLi4vdXRpbC9rZWJhYjJjYW1lbCcpO1xuLy8gdmFyIGJvb2xBdHRycyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvYm9vbC1hdHRycycpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4vY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZS1leHByJyk7XG4vLyB2YXIgcGFyc2VDYWxsID0gcmVxdWlyZSgnLi9wYXJzZS1jYWxsJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgcGFyc2VEaXJlY3RpdmUgPSByZXF1aXJlKCcuL3BhcnNlLWRpcmVjdGl2ZScpO1xuXG5cbi8qKlxuICog6Kej5p6Q5oq96LGh6IqC54K55bGe5oCnXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlsZ7mgKflkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gaW50ZWdyYXRlQXR0cihhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcHJlZml4SW5kZXggPSBuYW1lLmluZGV4T2YoJy0nKTtcbiAgICB2YXIgcmVhbE5hbWU7XG4gICAgdmFyIHByZWZpeDtcblxuICAgIGlmIChwcmVmaXhJbmRleCA+IDApIHtcbiAgICAgICAgcHJlZml4ID0gbmFtZS5zbGljZSgwLCBwcmVmaXhJbmRleCk7XG4gICAgICAgIHJlYWxOYW1lID0gbmFtZS5zbGljZShwcmVmaXhJbmRleCArIDEpO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiByZWFsTmFtZSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhTm9kZS5ldmVudHMucHVzaChldmVudCk7XG5cbiAgICAgICAgICAgIHZhciBjb2xvbkluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKChjb2xvbkluZGV4ID0gdmFsdWUuaW5kZXhPZignOicpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSB2YWx1ZS5zbGljZSgwLCBjb2xvbkluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50SGFuZGxlcihcImRkOmFhXCIpIOi/meenjeaDheWGteS4jeiDveeul21vZGlmaWVy77yM6ZyA6KaB6L6o6K+GXG4gICAgICAgICAgICAgICAgaWYgKCEvXlthLXpdKyQvaS50ZXN0KG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5tb2RpZmllclttb2RpZmllcl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoY29sb25JbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5leHByID0gcGFyc2VDYWxsKHZhbHVlLCBbXG4gICAgICAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICB7dHlwZTogMSwgdmFsdWU6ICckZXZlbnQnfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nhbic6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgcGFyc2VEaXJlY3RpdmUoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwcm9wJzpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd2YXInOlxuICAgICAgICAgICAgaWYgKCFhTm9kZS52YXJzKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUudmFycyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFsTmFtZSA9IGtlYmFiMmNhbWVsKHJlYWxOYW1lKTtcbiAgICAgICAgICAgIGFOb2RlLnZhcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcjogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICog6Kej5p6Q5oq96LGh6IqC54K557uR5a6a5bGe5oCnXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWxnuaAp+WQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHJhd1ZhbHVlIOWxnuaAp+WAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBpbnRlZ3JhdGVQcm9wKGFOb2RlLCBuYW1lLCByYXdWYWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIHBhcnNlIHR3byB3YXkgYmluZGluZywgZS5nLiB2YWx1ZT1cIns9aWRlbnQ9fVwiXG4gICAgdmFyIHZhbHVlID0gcmF3VmFsdWUgfHwgJyc7XG4gICAgdmFyIHhNYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFx7PVxccyooLio/KVxccyo9XFx9JC8pO1xuXG4gICAgaWYgKHhNYXRjaCkge1xuICAgICAgICBhTm9kZS5wcm9wcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBleHByOiBwYXJzZUV4cHIoeE1hdGNoWzFdKSxcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICByYXc6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZXhwciA9IHBhcnNlVGV4dCh2YWx1ZSwgb3B0aW9ucy5kZWxpbWl0ZXJzKTtcblxuICAgIC8vIOi/memHjOS4jeiDveaKiuWPquacieS4gOS4quaPkuWAvOeahOWxnuaAp+aKveWPllxuICAgIC8vIOWboOS4uuaPkuWAvOmHjOeahOWAvOWPr+iDveaYr2h0bWzniYfmrrXvvIzlrrnmmJPooqvms6jlhaVcbiAgICAvLyDnu4Tku7bnmoTmlbDmja7nu5HlrprlnKjnu4Tku7Zpbml05pe25YGa5oq95Y+WXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgZWFjaChleHByLnNlZ3MsIGZ1bmN0aW9uIChzZWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnLnR5cGUgPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdfJyArIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGV4cHIudHlwZSA9PT0gNykge1xuICAgICAgICBzd2l0Y2ggKGV4cHIuc2Vncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoYm9vbEF0dHJzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBleHByID0gZXhwci5zZWdzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChleHByLnR5cGUgPT09IDUgJiYgZXhwci5maWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBleHByID0gZXhwci5leHByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFOb2RlLnByb3BzLnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBleHByOiBleHByLFxuICAgICAgICByYXc6IHJhd1ZhbHVlXG4gICAgfSk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW50ZWdyYXRlQXR0cjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOino+aekOaooeadv1xuICovXG5cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgaW50ZWdyYXRlQXR0ciA9IHJlcXVpcmUoJy4vaW50ZWdyYXRlLWF0dHInKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9zdmctdGFncycpO1xuLy8gdmFyIGF1dG9DbG9zZVRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxuZnVuY3Rpb24gZ2V0WFBhdGgoc3RhY2ssIGN1cnJlbnRUYWdOYW1lKSB7XG4gICAgdmFyIHBhdGggPSBbJ1JPT1QnXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gc3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcGF0aC5wdXNoKHN0YWNrW2ldLnRhZ05hbWUpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFRhZ05hbWUpIHtcbiAgICAgICAgcGF0aC5wdXNoKGN1cnJlbnRUYWdOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbignPicpO1xufVxuLy8gI1tlbmRdXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiDop6PmnpAgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIHRlbXBsYXRl5rqQ56CBXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge3N0cmluZz99IG9wdGlvbnMudHJpbVdoaXRlc3BhY2Ug56m655m95paH5pys55qE5aSE55CG562W55Wl44CCbm9uZXxibGFua3xhbGxcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKiBAcmV0dXJuIHtBTm9kZX1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlID0gb3B0aW9ucy50cmltV2hpdGVzcGFjZSB8fCAnbm9uZSc7XG5cbiAgICB2YXIgcm9vdE5vZGUgPSB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IHt9LFxuICAgICAgICBwcm9wczogW10sXG4gICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cblxuICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L21nLCAnJykucmVwbGFjZSgvKF5cXHMrfFxccyskKS9nLCAnJyk7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcblxuICAgIHZhciB0YWdSZWcgPSAvPChcXC8pPyhbYS16XVthLXowLTktXSopXFxzKi9pZztcbiAgICB2YXIgYXR0clJlZyA9IC8oWy06MC05YS16XFxbXFxdX10rKShcXHMqPVxccyooWydcIl0pKFteXFwzXSo/KVxcMyk/XFxzKi9pZztcblxuICAgIHZhciB0YWdNYXRjaDtcbiAgICB2YXIgY3VycmVudE5vZGUgPSByb290Tm9kZTtcbiAgICB2YXIgc3RhY2sgPSBbcm9vdE5vZGVdO1xuICAgIHZhciBzdGFja0luZGV4ID0gMDtcbiAgICB2YXIgYmVmb3JlTGFzdEluZGV4ID0gMDtcblxuICAgIHdoaWxlICgodGFnTWF0Y2ggPSB3YWxrZXIubWF0Y2godGFnUmVnKSkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdGFnTWF0Y2hTdGFydCA9IHdhbGtlci5pbmRleCAtIHRhZ01hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgdmFyIHRhZ0VuZCA9IHRhZ01hdGNoWzFdO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IHRhZ01hdGNoWzJdO1xuICAgICAgICBpZiAoIXN2Z1RhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA2MjogPlxuICAgICAgICAvLyA0NzogL1xuICAgICAgICAvLyDlpITnkIYgPC94eHh4ID5cbiAgICAgICAgaWYgKHRhZ0VuZCkge1xuICAgICAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2Mikge1xuICAgICAgICAgICAgICAgIC8vIOa7oei2s+WFs+mXreagh+etvueahOadoeS7tuaXtu+8jOWFs+mXreagh+etvlxuICAgICAgICAgICAgICAgIC8vIOWQkeS4iuafpeaJvuWIsOWvueW6lOagh+etvu+8jOaJvuS4jeWIsOaXtuW/veeVpeWFs+mXrVxuICAgICAgICAgICAgICAgIHZhciBjbG9zZUluZGV4ID0gc3RhY2tJbmRleDtcblxuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5q2j5Zyo6Zet5ZCI5LiA5Liq6Ieq6Zet5ZCI55qE5qCH562+77yM5L6L5aaCIDwvaW5wdXQ+77yM5oql6ZSZXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBpcyBhIGBhdXRvIGNsb3NlZGAgdGFnLCAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdzbyBpdCBjYW5ub3QgYmUgY2xvc2VkIHdpdGggPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOWFs+mXreeahCB0YWcg5ZKM5b2T5YmN5omT5byA55qE5LiN5LiA6Ie077yM5oql6ZSZXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lICE9PSB0YWdOYW1lXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOimgeaKiiB0YWJsZSDoh6rliqjmt7vliqAgdGJvZHkg55qE5oOF5Ya157uZ5Y675o6JXG4gICAgICAgICAgICAgICAgICAgICYmICEodGFnTmFtZSA9PT0gJ3RhYmxlJyAmJiBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lID09PSAndGJvZHknKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaykgKyAnIGlzIGNsb3NlZCB3aXRoICcgKyB0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cblxuICAgICAgICAgICAgICAgIHB1c2hUZXh0Tm9kZShzb3VyY2Uuc2xpY2UoYmVmb3JlTGFzdEluZGV4LCB0YWdNYXRjaFN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNsb3NlSW5kZXggPiAwICYmIHN0YWNrW2Nsb3NlSW5kZXhdLnRhZ05hbWUgIT09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjbG9zZUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFja0luZGV4ID0gY2xvc2VJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gc3RhY2tbc3RhY2tJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpITnkIYgPC94eHgg6Z2e5q2j5bi46Zet5ZCI5qCH562+XG5cbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzpl63lkIjmoIfnrb7ml7bvvIzljLnphY3lkI7nmoTkuIvkuIDkuKrlrZfnrKbmmK8gPO+8jOWNs+S4i+S4gOS4quagh+etvueahOW8gOWni++8jOmCo+S5iOW9k+WJjemXreWQiOagh+etvuacqumXreWQiFxuICAgICAgICAgICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICArICdcXCdzIGNsb3NlIHRhZyBub3QgY2xvc2VkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOmXreWQiOagh+etvuacieWxnuaAp1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spXG4gICAgICAgICAgICAgICAgICAgICsgJ1xcJ3MgY2xvc2UgdGFnIGhhcyBhdHRyaWJ1dGVzJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhRWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiB7fSxcbiAgICAgICAgICAgICAgICBwcm9wczogW10sXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0YWdDbG9zZSA9IGF1dG9DbG9zZVRhZ3NbdGFnTmFtZV07XG5cbiAgICAgICAgICAgIC8vIOino+aekCBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG5cbiAgICAgICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmoIfnrb7nu5PmnZ/ml7bot7Plh7ogYXR0cmlidXRlcyDor7vlj5ZcbiAgICAgICAgICAgICAgICAvLyDmoIfnrb7lj6/og73nm7TmjqXnu5PmnZ/miJbpl63lkIjnu5PmnZ9cbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA2Mikge1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOmBh+WIsCAvPiDmjInpl63lkIjlpITnkIZcbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA0N1xuICAgICAgICAgICAgICAgICAgICAmJiB3YWxrZXIuY2hhckNvZGUod2Fsa2VyLmluZGV4ICsgMSkgPT09IDYyXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nbygyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnQ2xvc2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZSDkuLLnu5PmnZ/kuoZcbiAgICAgICAgICAgICAgICAvLyDov5nml7blgJnvvIzor7TmmI7ov5nkuKror7vlj5blkajmnJ/nmoTmiYDmnInlhoXlrrnvvIzpg73mmK90ZXh0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0Q2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaFRleHROb2RlKHdhbGtlci5jdXQoYmVmb3JlTGFzdEluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgIGFFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyDlnKjlpITnkIbkuIDkuKogb3BlbiDmoIfnrb7ml7bvvIzlpoLmnpzpgYfliLDkuoYgPO+8jCDljbPkuIvkuIDkuKrmoIfnrb7nmoTlvIDlp4vvvIzliJnlvZPliY3moIfnrb7mnKrog73mraPluLjpl63lkIjvvIzmiqXplJlcbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA2MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGlzIG5vdCBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAvLyDor7vlj5YgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJNYXRjaCA9IHdhbGtlci5tYXRjaChhdHRyUmVnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bGe5oCn5pyJID3vvIzkvYbmsqHlj5bliLAgdmFsdWXvvIzmiqXplJlcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmNoYXJDb2RlKGF0dHJNYXRjaC5pbmRleCArIGF0dHJNYXRjaFsxXS5sZW5ndGgpID09PSA2MVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWF0dHJNYXRjaFsyXVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGF0dHJpYnV0ZSBgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYXR0ck1hdGNoWzFdICsgJ2AgaXMgbm90IHdyYXBwZWQgd2l0aCBcIlwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JhdGVBdHRyKFxuICAgICAgICAgICAgICAgICAgICAgICAgYUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbM10gPyBhdHRyTWF0Y2hbNF0gOiB2b2lkKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBwdXNoVGV4dE5vZGUoc291cmNlLnNsaWNlKGJlZm9yZUxhc3RJbmRleCwgdGFnTWF0Y2hTdGFydCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggaWYgZGlyZWN0aXZlIGZvciBlbHNlL2VsaWYgZGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgdmFyIGVsc2VEaXJlY3RpdmUgPSBhRWxlbWVudC5kaXJlY3RpdmVzWydlbHNlJ10gLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICAgICAgfHwgYUVsZW1lbnQuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsc2VEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENoaWxkcmVuTGVuID0gY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWZBTm9kZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudENoaWxkcmVuTGVuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZCA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW3BhcmVudENoaWxkcmVuTGVuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDaGlsZC50ZXh0RXhwcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnNwbGljZShwYXJlbnRDaGlsZHJlbkxlbiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmQU5vZGUgPSBwYXJlbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZkFOb2RlIHx8ICFwYXJlbnRDaGlsZC5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFURUxdIGVsc2Ugbm90IG1hdGNoIGlmLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZkFOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZkFOb2RlLmVsc2VzID0gaWZBTm9kZS5lbHNlcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmQU5vZGUuZWxzZXMucHVzaChhRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhRWxlbWVudC50YWdOYW1lID09PSAndHInICYmIGN1cnJlbnROb2RlLnRhZ05hbWUgPT09ICd0YWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Ym9keU5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICd0Ym9keSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKHRib2R5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHRib2R5Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWysrc3RhY2tJbmRleF0gPSB0Ym9keU5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKGFFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRhZ0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrWysrc3RhY2tJbmRleF0gPSBhRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGJlZm9yZUxhc3RJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB9XG5cbiAgICBwdXNoVGV4dE5vZGUod2Fsa2VyLmN1dChiZWZvcmVMYXN0SW5kZXgpKTtcblxuICAgIHJldHVybiByb290Tm9kZTtcblxuICAgIC8qKlxuICAgICAqIOWcqOivu+WPluagiOS4rea3u+WKoOaWh+acrOiKgueCuVxuICAgICAqXG4gICAgICogQGlubmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5paH5pys5YaF5a65XG4gICAgICovXG4gICAgZnVuY3Rpb24gcHVzaFRleHROb2RlKHRleHQpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLnRyaW1XaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgICBjYXNlICdibGFuayc6XG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHRFeHByOiBwYXJzZVRleHQodGV4dCwgb3B0aW9ucy5kZWxpbWl0ZXJzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIGVzbGludC1lbmFibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRlbXBsYXRlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6buY6K6kZmlsdGVyXG4gKi9cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRTdHlsZUZpbHRlcihzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXkgKyAnOicgKyBzb3VyY2Vba2V5XSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cblxuLyoqXG4gKiDpu5jorqRmaWx0ZXJcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBERUZBVUxUX0ZJTFRFUlMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBVUkznvJbnoIFmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5LiyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSDmm7/mjaLnu5PmnpzkuLJcbiAgICAgKi9cbiAgICB1cmw6IGVuY29kZVVSSUNvbXBvbmVudCxcblxuICAgIF9jbGFzczogZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9LFxuICAgIF9zdHlsZTogZGVmYXVsdFN0eWxlRmlsdGVyLFxuXG4gICAgX3hjbGFzczogZnVuY3Rpb24gKG91dGVyLCBpbm5lcikge1xuICAgICAgICBpZiAob3V0ZXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgb3V0ZXIgPSBvdXRlci5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbm5lciArICcgJyArIG91dGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5uZXI7XG4gICAgfSxcblxuICAgIF94c3R5bGU6IGZ1bmN0aW9uIChvdXRlciwgaW5uZXIpIHtcbiAgICAgICAgb3V0ZXIgPSBvdXRlciAmJiBkZWZhdWx0U3R5bGVGaWx0ZXIob3V0ZXIpO1xuICAgICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbm5lciArICc7JyArIG91dGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5uZXI7XG4gICAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gREVGQVVMVF9GSUxURVJTO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6KGo6L6+5byP6K6h566XXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG4vLyB2YXIgREVGQVVMVF9GSUxURVJTID0gcmVxdWlyZSgnLi9kZWZhdWx0LWZpbHRlcnMnKTtcbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4vZXZhbC1hcmdzJyk7XG5cbi8qKlxuICog6K6h566X6KGo6L6+5byP55qE5YC8XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u5a655Zmo5a+56LGhXG4gKiBAcGFyYW0ge0NvbXBvbmVudD19IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZXZhbEV4cHIoZXhwciwgZGF0YSwgb3duZXIpIHtcbiAgICBpZiAoZXhwci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZTtcblxuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB2YWx1ZSA9IGV2YWxFeHByKGV4cHIuZXhwciwgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAhdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHZhbHVlID0gZXZhbEV4cHIoZXhwci5zZWdzWzBdLCBkYXRhLCBvd25lcik7XG4gICAgICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IGV2YWxFeHByKGV4cHIuc2Vnc1sxXSwgZGF0YSwgb3duZXIpO1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjE6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxNTU6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxODM6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyNDg6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJldHVybiBldmFsRXhwcihcbiAgICAgICAgICAgICAgICBleHByLnNlZ3NbZXZhbEV4cHIoZXhwci5zZWdzWzBdLCBkYXRhLCBvd25lcikgPyAxIDogMl0sXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBvd25lclxuICAgICAgICAgICAgKTtcblxuXG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLml0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZXhwci5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gZXZhbEV4cHIoaXRlbS5leHByLCBkYXRhLCBvd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlICYmICh2YWx1ZSA9IHZhbHVlLmNvbmNhdChpdGVtVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBleHByLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSBldmFsRXhwcihpdGVtLmV4cHIsIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgJiYgZXh0ZW5kKHZhbHVlLCBpdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbZXZhbEV4cHIoaXRlbS5uYW1lLCBkYXRhLCBvd25lcildID0gaXRlbVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5nZXQoZXhwcik7XG5cblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB2YWx1ZSA9IGV2YWxFeHByKGV4cHIuZXhwciwgZGF0YSwgb3duZXIpO1xuXG4gICAgICAgICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuZmlsdGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IGV4cHIuZmlsdGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlck5hbWUgPSBmaWx0ZXIubmFtZS5wYXRoc1swXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZpbHRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdfY2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnX3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IERFRkFVTFRfRklMVEVSU1tmaWx0ZXJOYW1lXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ194Y2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnX3hzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9IERFRkFVTFRfRklMVEVSU1tmaWx0ZXJOYW1lXSh2YWx1ZSwgZXZhbEV4cHIoZmlsdGVyLmFyZ3NbMF0sIGRhdGEsIG93bmVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvd25lci5maWx0ZXJzW2ZpbHRlck5hbWVdICYmIG93bmVyLmZpbHRlcnNbZmlsdGVyTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdLmNvbmNhdChldmFsQXJncyhmaWx0ZXIuYXJncywgZGF0YSwgb3duZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGlmIChvd25lciAmJiBleHByLm5hbWUudHlwZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBvd25lcjtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aHNMZW4gPSBleHByLm5hbWUucGF0aHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IG1ldGhvZCAmJiBpIDwgcGF0aHNMZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBtZXRob2RbZXZhbEV4cHIoZXhwci5uYW1lLnBhdGhzW2ldLCBkYXRhLCBvd25lcildO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZXRob2QuYXBwbHkob3duZXIsIGV2YWxBcmdzKGV4cHIuYXJncywgZGF0YSwgb3duZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB2YXIgYnVmID0gJyc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuc2Vncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gZXhwci5zZWdzW2ldO1xuICAgICAgICAgICAgICAgIGJ1ZiArPSBzZWcudmFsdWUgfHwgZXZhbEV4cHIoc2VnLCBkYXRhLCBvd25lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZhbEV4cHI7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDkuLrlh73mlbDosIPnlKjorqHnrpflj4LmlbDmlbDnu4TnmoTlgLxcbiAqL1xuXG5cbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vZXZhbC1leHByJyk7XG5cbi8qKlxuICog5Li65Ye95pWw6LCD55So6K6h566X5Y+C5pWw5pWw57uE55qE5YC8XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJncyDlj4LmlbDooajovr7lvI/liJfooahcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDnu4Tku7bnjq/looNcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBldmFsQXJncyhhcmdzLCBkYXRhLCBvd25lcikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZXZhbEV4cHIoYXJnc1tpXSwgZGF0YSwgb3duZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBldmFsQXJncztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOavlOi+g+WPmOabtOihqOi+vuW8j+S4juebruagh+ihqOi+vuW8j+S5i+mXtOeahOWFs+ezu1xuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vZXZhbC1leHByJyk7XG5cbi8qKlxuICog5Yik5pat5Y+Y5pu06KGo6L6+5byP5LiO5aSa5Liq6KGo6L6+5byP5LmL6Ze055qE5YWz57O777yMMOS4uuWujOWFqOayoeWFs+ezu++8jDHkuLrmnInlhbPns7tcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2VFeHByIOebruagh+ihqOi+vuW8j1xuICogQHBhcmFtIHtBcnJheX0gZXhwcnMg5aSa5Liq5rqQ6KGo6L6+5byPXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg6KGo6L6+5byP5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwcnMsIGRhdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwcnNbaV0sIGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xufVxuXG4vKipcbiAqIOavlOi+g+WPmOabtOihqOi+vuW8j+S4juebruagh+ihqOi+vuW8j+S5i+mXtOeahOWFs+ezu++8jOeUqOS6juinhuWbvuabtOaWsOWIpOaWrVxuICog6KeG5Zu+5pu05paw6ZyA6KaB5qC55o2u5YW25YWz57O777yM5YGa5Ye655u45bqU55qE5pu05paw6KGM5Li6XG4gKlxuICogMDog5a6M5YWo5rKh5YWz57O7XG4gKiAxOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nmoTmr43pobko5aaCYeS4jmEuYikg5oiWIOihqOekuumcgOimgeWujOWFqOWPmOWMllxuICogMjog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55u4562JXG4gKiA+Mjog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55qE5a2Q6aG577yM5aaCYS5iLmPkuI5hLmJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlRXhwciDlj5jmm7Tooajovr7lvI9cbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOimgeavlOi+g+eahOebruagh+ihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOihqOi+vuW8j+aJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLCBkYXRhKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgaWYgKCFleHByLmNoYW5nZUNhY2hlKSB7XG4gICAgICAgIGV4cHIuY2hhbmdlQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlRXhwci5yYXcgJiYgIWV4cHIuZHluYW1pYykge1xuICAgICAgICBpZiAoZXhwci5jaGFuZ2VDYWNoZVtjaGFuZ2VFeHByLnJhd10gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHIuY2hhbmdlQ2FjaGVbY2hhbmdlRXhwci5yYXddO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICAgICAgICAgIHZhciBwYXRoc0xlbiA9IHBhdGhzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VQYXRocyA9IGNoYW5nZUV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgY2hhbmdlTGVuID0gY2hhbmdlUGF0aHMubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoc0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhFeHByID0gcGF0aHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhFeHByVmFsdWUgPSBwYXRoRXhwci52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXRoRXhwclZhbHVlID09IG51bGwgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgcGF0aEV4cHIsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgaSA8IGNoYW5nZUxlblxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICAgICAgJiYgKHBhdGhFeHByVmFsdWUgfHwgZXZhbEV4cHIocGF0aEV4cHIsIGRhdGEpKSAhPSBjaGFuZ2VQYXRoc1tpXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE1hdGgubWF4KDEsIGNoYW5nZUxlbiAtIHBhdGhzTGVuICsgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICByZXN1bHQgPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLmV4cHIsIGRhdGEpID8gMSA6IDA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDc6XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIHJlc3VsdCA9IGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwci5zZWdzLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cHIuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwci5pdGVtc1tpXS5leHByLCBkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLmV4cHIsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwci5maWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGV4cHIuZmlsdGVyc1tpXS5hcmdzLCBkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHByLm5hbWUucGF0aHMsIGRhdGEpXG4gICAgICAgICAgICAgICAgfHwgY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHByLmFyZ3MsIGRhdGEpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZUV4cHIucmF3ICYmICFleHByLmR5bmFtaWMpIHtcbiAgICAgICAgZXhwci5jaGFuZ2VDYWNoZVtjaGFuZ2VFeHByLnJhd10gPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2hhbmdlRXhwckNvbXBhcmU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDmlbDmja7lj5jmm7TnsbvlnovmnprkuL5cbiAqL1xuXG4vKipcbiAqIOaVsOaNruWPmOabtOexu+Wei+aemuS4vlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIERhdGFDaGFuZ2VUeXBlID0ge1xuICAgIFNFVDogMSxcbiAgICBTUExJQ0U6IDJcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERhdGFDaGFuZ2VUeXBlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg55Sf5ZG95ZGo5pyf57G7XG4gKi9cblxuZnVuY3Rpb24gbGlmZUN5Y2xlT3duSXMobmFtZSkge1xuICAgIHJldHVybiB0aGlzW25hbWVdO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuLyoqXG4gKiDoioLngrnnlJ/lkb3lkajmnJ/kv6Hmga9cbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBMaWZlQ3ljbGUgPSB7XG4gICAgc3RhcnQ6IHt9LFxuXG4gICAgY29tcGlsZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBpbml0ZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgICAgYXR0YWNoZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgbGVhdmluZzoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGF0dGFjaGVkOiB0cnVlLFxuICAgICAgICBsZWF2aW5nOiB0cnVlXG4gICAgfSxcblxuICAgIGRldGFjaGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgICAgZGV0YWNoZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgZGlzcG9zZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBkaXNwb3NlZDogdHJ1ZVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTGlmZUN5Y2xlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6IqC54K557G75Z6LXG4gKi9cblxuLyoqXG4gKiDoioLngrnnsbvlnotcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBOb2RlVHlwZSA9IHtcbiAgICBURVhUOiAxLFxuICAgIElGOiAyLFxuICAgIEZPUjogMyxcbiAgICBFTEVNOiA0LFxuICAgIENNUFQ6IDUsXG4gICAgU0xPVDogNixcbiAgICBUUEw6IDcsXG4gICAgTE9BREVSOiA4XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBOb2RlVHlwZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiOt+WPliBBTm9kZSBwcm9wcyDmlbDnu4TkuK3nm7jlupQgbmFtZSDnmoTpoblcbiAqL1xuXG4vKipcbiAqIOiOt+WPliBBTm9kZSBwcm9wcyDmlbDnu4TkuK3nm7jlupQgbmFtZSDnmoTpoblcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUgQU5vZGXlr7nosaFcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWXlsZ7mgKfljLnphY3kuLJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0QU5vZGVQcm9wKGFOb2RlLCBuYW1lKSB7XG4gICAgdmFyIGluZGV4ID0gYU5vZGUuaG90c3BvdC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYU5vZGUucHJvcHNbaW5kZXhdO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0QU5vZGVQcm9wO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6I635Y+W5bGe5oCn5aSE55CG5a+56LGhXG4gKi9cblxuLy8gdmFyIGNvbnRhaW5zID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWlucycpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi4vdXRpbC9lbXB0eScpO1xuLy8gdmFyIHN2Z1RhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL3N2Zy10YWdzJyk7XG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuLi9icm93c2VyL2llJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG5cbi8qKlxuICogSFRNTCDlsZ7mgKflkowgRE9NIOaTjeS9nOWxnuaAp+eahOWvueeFp+ihqFxuICpcbiAqIEBpbm5lclxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgSFRNTF9BVFRSX1BST1BfTUFQID0ge1xuICAgICdyZWFkb25seSc6ICdyZWFkT25seScsXG4gICAgJ2NlbGxwYWRkaW5nJzogJ2NlbGxQYWRkaW5nJyxcbiAgICAnY2VsbHNwYWNpbmcnOiAnY2VsbFNwYWNpbmcnLFxuICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICdyb3dzcGFuJzogJ3Jvd1NwYW4nLFxuICAgICd2YWxpZ24nOiAndkFsaWduJyxcbiAgICAndXNlbWFwJzogJ3VzZU1hcCcsXG4gICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAnZm9yJzogJ2h0bWxGb3InXG59O1xuXG4vKipcbiAqIOm7mOiupOeahOWFg+e0oOeahOWxnuaAp+iuvue9rueahOWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIoZWwsIHZhbHVlLCBuYW1lKSB7XG4gICAgdmFyIHByb3BOYW1lID0gSFRNTF9BVFRSX1BST1BfTUFQW25hbWVdIHx8IG5hbWU7XG4gICAgdmFyIHZhbHVlTm90TnVsbCA9IHZhbHVlICE9IG51bGw7XG5cbiAgICAvLyBpbnB1dCDnmoQgdHlwZSDmmK/kuKrnibnmrorlsZ7mgKfvvIzlhbblrp7kuZ/lupTor6XnlKggc2V0QXR0cmlidXRlXG4gICAgLy8g5L2G5pivIHR5cGUg5LiN5bqU6K+l6L+Q6KGM5pe25Yqo5oCB5pS55Y+Y77yM5ZCm5YiZ5Lya5pyJ5YW85a655oCn6Zeu6aKYXG4gICAgLy8g5omA5Lul6L+Z6YeM55u05o6l5bCx5LiN566h5LqGXG4gICAgaWYgKHByb3BOYW1lIGluIGVsKSB7XG4gICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbHVlTm90TnVsbCA/IHZhbHVlIDogJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlTm90TnVsbCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWVOb3ROdWxsKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN2Z1Byb3BIYW5kbGVyKGVsLCB2YWx1ZSwgbmFtZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGJvb2xQcm9wSGFuZGxlcihlbCwgdmFsdWUsIG5hbWUpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBIVE1MX0FUVFJfUFJPUF9NQVBbbmFtZV0gfHwgbmFtZTtcbiAgICBlbFtwcm9wTmFtZV0gPSAhIXZhbHVlO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXByb3BlcnRpZXMtcXVvdGUgKi9cbi8qKlxuICog6buY6K6k55qE5bGe5oCn6K6+572u5Y+Y5o2i5pa55rOVXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlcnMgPSB7XG4gICAgc3R5bGU6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuICAgIH0sXG5cbiAgICAnY2xhc3MnOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgICAgIGllXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgIT09IHZhbHVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2xvdDogZW1wdHksXG5cbiAgICBkcmFnZ2FibGU6IGJvb2xQcm9wSGFuZGxlclxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1wcm9wZXJ0aWVzLXF1b3RlICovXG5cbnZhciBhbmFsSW5wdXRDaGVja2VyID0ge1xuICAgIGNoZWNrYm94OiBjb250YWlucyxcbiAgICByYWRpbzogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgdmFyIGJpbmRWYWx1ZSA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndmFsdWUnKTtcbiAgICB2YXIgYmluZFR5cGUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3R5cGUnKTtcblxuICAgIGlmIChiaW5kVmFsdWUgJiYgYmluZFR5cGUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBldmFsRXhwcihiaW5kVHlwZS5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKTtcblxuICAgICAgICBpZiAoYW5hbElucHV0Q2hlY2tlclt0eXBlXSkge1xuICAgICAgICAgICAgdmFyIGJpbmRDaGVja2VkID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBpZiAoYmluZENoZWNrZWQgIT0gbnVsbCAmJiAhYmluZENoZWNrZWQuaGludEV4cHIpIHtcbiAgICAgICAgICAgICAgICBiaW5kQ2hlY2tlZC5oaW50RXhwciA9IGJpbmRWYWx1ZS5leHByO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gISFhbmFsSW5wdXRDaGVja2VyW3R5cGVdKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IGV2YWxFeHByKGJpbmRWYWx1ZS5leHByLCBlbGVtZW50LmRhdGEsIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIDogZXZhbEV4cHIoYmluZFZhbHVlLmV4cHIsIGVsZW1lbnQuc2NvcGUsIGVsZW1lbnQub3duZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgZWxlbWVudFByb3BIYW5kbGVycyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgICBtdWx0aXBsZTogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBjaGVja2VkOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBhbmFsSW5wdXRDaGVja2VkU3RhdGUoZWxlbWVudCwgdmFsdWUpO1xuXG4gICAgICAgICAgICBib29sUHJvcEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgc3RhdGUgIT0gbnVsbCA/IHN0YXRlIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICAvLyDku6PnoIHkuI3nlKjmir3lh7rmnaXpmLLph43lpI3vvIxhbGx1YeWGheeahOS7o+eggeWcqOeOsOS7o+a1j+iniOWZqOeJiOacrOS8muiiq+e8luivkeaXtuW5suaOie+8jGd6aXDkuZ/kvJrlpITnkIbph43lpI3pl67pophcbiAgICAgICAgICAgIC8vIHNlZTogIzM3OFxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAoaWUgJiYgaWUgPCA4ICYmICFlbGVtZW50LmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICAgICAgICAgIGJvb2xQcm9wSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlICE9IG51bGwgPyBzdGF0ZSA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAnZGVmYXVsdENoZWNrZWQnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuICAgICAgICB9LFxuICAgICAgICByZWFkb25seTogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBkaXNhYmxlZDogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBhdXRvZm9jdXM6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xQcm9wSGFuZGxlclxuICAgIH0sXG5cbiAgICBvcHRpb246IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKGlzT3B0aW9uU2VsZWN0ZWQoZWxlbWVudCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNlbGVjdDoge1xuICAgICAgICByZWFkb25seTogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBkaXNhYmxlZDogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBhdXRvZm9jdXM6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xQcm9wSGFuZGxlclxuICAgIH0sXG5cbiAgICB0ZXh0YXJlYToge1xuICAgICAgICByZWFkb25seTogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBkaXNhYmxlZDogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBhdXRvZm9jdXM6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xQcm9wSGFuZGxlclxuICAgIH0sXG5cbiAgICBidXR0b246IHtcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgYXV0b2ZvY3VzOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIHR5cGU6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQoZWxlbWVudCwgdmFsdWUpIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0ID0gZWxlbWVudC5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudFNlbGVjdCkge1xuICAgICAgICBpZiAocGFyZW50U2VsZWN0LnRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFNlbGVjdCA9IHBhcmVudFNlbGVjdC5wYXJlbnQ7XG4gICAgfVxuXG5cbiAgICBpZiAocGFyZW50U2VsZWN0KSB7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICB2YXIgZXhwcjtcblxuICAgICAgICBpZiAoKHByb3AgPSBnZXRBTm9kZVByb3AocGFyZW50U2VsZWN0LmFOb2RlLCAndmFsdWUnKSlcbiAgICAgICAgICAgICYmIChleHByID0gcHJvcC5leHByKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gcGFyZW50U2VsZWN0Lm5vZGVUeXBlID09PSA1XG4gICAgICAgICAgICAgICAgPyBldmFsRXhwcihleHByLCBwYXJlbnRTZWxlY3QuZGF0YSwgcGFyZW50U2VsZWN0KVxuICAgICAgICAgICAgICAgIDogZXZhbEV4cHIoZXhwciwgcGFyZW50U2VsZWN0LnNjb3BlLCBwYXJlbnRTZWxlY3Qub3duZXIpXG4gICAgICAgICAgICAgICAgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIOWFg+e0oHRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lIOWxnuaAp+WQjVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRQcm9wSGFuZGxlcih0YWdOYW1lLCBhdHRyTmFtZSkge1xuICAgIGlmIChzdmdUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBzdmdQcm9wSGFuZGxlcjtcbiAgICB9XG5cbiAgICB2YXIgdGFnUHJvcEhhbmRsZXJzID0gZWxlbWVudFByb3BIYW5kbGVyc1t0YWdOYW1lXTtcbiAgICBpZiAoIXRhZ1Byb3BIYW5kbGVycykge1xuICAgICAgICB0YWdQcm9wSGFuZGxlcnMgPSBlbGVtZW50UHJvcEhhbmRsZXJzW3RhZ05hbWVdID0ge307XG4gICAgfVxuXG4gICAgdmFyIHByb3BIYW5kbGVyID0gdGFnUHJvcEhhbmRsZXJzW2F0dHJOYW1lXTtcbiAgICBpZiAoIXByb3BIYW5kbGVyKSB7XG4gICAgICAgIHByb3BIYW5kbGVyID0gZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlcnNbYXR0ck5hbWVdIHx8IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXI7XG4gICAgICAgIHRhZ1Byb3BIYW5kbGVyc1thdHRyTmFtZV0gPSBwcm9wSGFuZGxlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcEhhbmRsZXI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldFByb3BIYW5kbGVyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yik5pat5Y+Y5pu05piv5ZCm5p2l5rqQ5LqO5YWD57SgXG4gKi9cblxuLyoqXG4gKiDliKTmlq3lj5jmm7TmmK/lkKbmnaXmupDkuo7lhYPntKDvvIzmnaXmupDkuo7lhYPntKDml7bvvIzop4blm77mm7TmlrDpnIDopoHpmLvmlq1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlIOWPmOabtOWvueixoVxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IOWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmc/fSBwcm9wTmFtZSDlsZ7mgKflkI3vvIzlj6/pgInjgILpnIDopoHnsr7noa7liKTmlq3mmK/lkKbmnaXmupDkuo7mraTlsZ7mgKfml7bkvKDlhaVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIGVsZW1lbnQsIHByb3BOYW1lKSB7XG4gICAgdmFyIGNoYW5nZVRhcmdldCA9IGNoYW5nZS5vcHRpb24udGFyZ2V0O1xuICAgIHJldHVybiBjaGFuZ2VUYXJnZXQgJiYgY2hhbmdlVGFyZ2V0Lm5vZGUgPT09IGVsZW1lbnRcbiAgICAgICAgJiYgKCFwcm9wTmFtZSB8fCBjaGFuZ2VUYXJnZXQucHJvcCA9PT0gcHJvcE5hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDlnKjlr7nosaHkuIrkvb/nlKhhY2Nlc3NvcuihqOi+vuW8j+afpeaJvuaWueazlVxuICovXG5cbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG5cbi8qKlxuICog5Zyo5a+56LGh5LiK5L2/55SoYWNjZXNzb3Looajovr7lvI/mn6Xmib7mlrnms5VcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOa6kOWvueixoVxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVFeHByIOihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGZpbmRNZXRob2Qoc291cmNlLCBuYW1lRXhwciwgZGF0YSkge1xuICAgIHZhciBtZXRob2QgPSBzb3VyY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgbWV0aG9kICE9IG51bGwgJiYgaSA8IG5hbWVFeHByLnBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IG1ldGhvZFtldmFsRXhwcihuYW1lRXhwci5wYXRoc1tpXSwgZGF0YSldO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2Q7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZpbmRNZXRob2Q7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDmlbDmja7nsbtcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcblxuLyoqXG4gKiDmlbDmja7nsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0P30gZGF0YSDliJ3lp4vmlbDmja5cbiAqIEBwYXJhbSB7TW9kZWw/fSBwYXJlbnQg54i257qn5pWw5o2u5a655ZmoXG4gKi9cbmZ1bmN0aW9uIERhdGEoZGF0YSwgcGFyZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5yYXcgPSBkYXRhIHx8IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vLyDku6XkuIvkuKTkuKrlh73mlbDlj6rlnKjlvIDlj5HmqKHlvI/kuIvlj6/nlKjvvIzlnKjnlJ/kuqfmqKHlvI/kuIvkuI3lrZjlnKhcbi8qKlxuICogRGF0YVR5cGVzIOajgOa1i1xuICovXG5EYXRhLnByb3RvdHlwZS5jaGVja0RhdGFUeXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlQ2hlY2tlcikge1xuICAgICAgICB0aGlzLnR5cGVDaGVja2VyKHRoaXMucmF3KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiuvue9riB0eXBlIGNoZWNrZXJcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdHlwZUNoZWNrZXIg57G75Z6L5qCh6aqM5ZmoXG4gKi9cbkRhdGEucHJvdG90eXBlLnNldFR5cGVDaGVja2VyID0gZnVuY3Rpb24gKHR5cGVDaGVja2VyKSB7XG4gICAgdGhpcy50eXBlQ2hlY2tlciA9IHR5cGVDaGVja2VyO1xufTtcblxuLy8gI1tlbmRdXG5cbi8qKlxuICog5re75Yqg5pWw5o2u5Y+Y5pu055qE5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkRhdGEucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnp7vpmaTmlbDmja7lj5jmm7TnmoTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqL1xuRGF0YS5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBpZiAoIWxpc3RlbmVyIHx8IHRoaXMubGlzdGVuZXJzW2xlbl0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog6Kem5Y+R5pWw5o2u5Y+Y5pu0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDlj5jmm7Tkv6Hmga/lr7nosaFcbiAqL1xuRGF0YS5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICBpZiAoY2hhbmdlLm9wdGlvbi5zaWxlbnQgfHwgY2hhbmdlLm9wdGlvbi5zaWxlbmNlIHx8IGNoYW5nZS5vcHRpb24ucXVpZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6I635Y+W5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0P30gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7RGF0YT99IGNhbGxlZSDlvZPliY3mlbDmja7ojrflj5bnmoTosIPnlKjnjq/looNcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnJhdztcbiAgICBpZiAoIWV4cHIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXhwciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcbiAgICB9XG5cbiAgICB2YXIgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNhbGxlZSA9IGNhbGxlZSB8fCB0aGlzO1xuXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1swXS52YWx1ZV07XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMucGFyZW50LmdldChleHByLCBjYWxsZWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihwYXRoc1tpXSwgY2FsbGVlKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICog5pWw5o2u5a+56LGh5Y+Y5pu05pON5L2cXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gc291cmNlIOimgeWPmOabtOeahOa6kOaVsOaNrlxuICogQHBhcmFtIHtBcnJheX0gZXhwclBhdGhzIOWxnuaAp+i3r+W+hFxuICogQHBhcmFtIHtudW1iZXJ9IHBhdGhzU3RhcnQg5b2T5YmN5aSE55CG55qE5bGe5oCn6Lev5b6E5oyH6ZKI5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gcGF0aHNMZW4g5bGe5oCn6Lev5b6E6ZW/5bqmXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWPmOabtOWxnuaAp+WAvFxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOWvueW6lOeahERhdGHlr7nosaFcbiAqIEByZXR1cm4geyp9IOWPmOabtOWQjueahOaWsOaVsOaNrlxuICovXG5mdW5jdGlvbiBpbW11dGFibGVTZXQoc291cmNlLCBleHByUGF0aHMsIHBhdGhzU3RhcnQsIHBhdGhzTGVuLCB2YWx1ZSwgZGF0YSkge1xuICAgIGlmIChwYXRoc1N0YXJ0ID49IHBhdGhzTGVuKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlID09IG51bGwpIHtcbiAgICAgICAgc291cmNlID0ge307XG4gICAgfVxuXG4gICAgdmFyIHBhdGhFeHByID0gZXhwclBhdGhzW3BhdGhzU3RhcnRdO1xuICAgIHZhciBwcm9wID0gZXZhbEV4cHIocGF0aEV4cHIsIGRhdGEpO1xuICAgIHZhciByZXN1bHQgPSBzb3VyY2U7XG5cbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gK3Byb3A7XG4gICAgICAgIHByb3AgPSBpc05hTihpbmRleCkgPyBwcm9wIDogaW5kZXg7XG5cbiAgICAgICAgcmVzdWx0ID0gc291cmNlLnNsaWNlKDApO1xuICAgICAgICByZXN1bHRbcHJvcF0gPSBpbW11dGFibGVTZXQoc291cmNlW3Byb3BdLCBleHByUGF0aHMsIHBhdGhzU3RhcnQgKyAxLCBwYXRoc0xlbiwgdmFsdWUsIGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICAgIGlmIChrZXkgIT09IHByb3AgJiYgc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0W3Byb3BdID0gaW1tdXRhYmxlU2V0KHNvdXJjZVtwcm9wXSwgZXhwclBhdGhzLCBwYXRoc1N0YXJ0ICsgMSwgcGF0aHNMZW4sIHZhbHVlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAocGF0aEV4cHIudmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBleHByUGF0aHNbcGF0aHNTdGFydF0gPSB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycgPyAxIDogMixcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiDorr7nva7mlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChleHByLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgc2V0OiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgaWYgKHRoaXMuZ2V0KGV4cHIpID09PSB2YWx1ZSAmJiAhb3B0aW9uLmZvcmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHByID0ge1xuICAgICAgICB0eXBlOiA0LFxuICAgICAgICBwYXRoczogZXhwci5wYXRocy5zbGljZSgwKSxcbiAgICAgICAgcmF3OiBleHByLnJhd1xuICAgIH07XG5cbiAgICB2YXIgcHJvcCA9IGV4cHIucGF0aHNbMF0udmFsdWU7XG4gICAgdGhpcy5yYXdbcHJvcF0gPSBpbW11dGFibGVTZXQodGhpcy5yYXdbcHJvcF0sIGV4cHIucGF0aHMsIDEsIGV4cHIucGF0aHMubGVuZ3RoLCB2YWx1ZSwgdGhpcyk7XG5cbiAgICB0aGlzLmZpcmUoe1xuICAgICAgICB0eXBlOiAxLFxuICAgICAgICBleHByOiBleHByLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgfSk7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHRoaXMuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICAvLyAjW2VuZF1cblxufTtcblxuLyoqXG4gKiDlkIjlubbmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOW+heWQiOW5tueahOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKGV4cHIsIHNvdXJjZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgbWVyZ2U6ICcgKyBleHByUmF3KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0KGV4cHIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIE1lcmdlIEV4cGVjdHMgYSBUYXJnZXQgb2YgVHlwZSBcXCdvYmplY3RcXCc7IGdvdCAnICsgdHlwZW9mIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBNZXJnZSBFeHBlY3RzIGEgU291cmNlIG9mIFR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJyArIHR5cGVvZiBzb3VyY2UpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICB0aGlzLnNldChcbiAgICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIGV4cHIucGF0aHMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc291cmNlW2tleV0sXG4gICAgICAgICAgICBvcHRpb25cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOWfuuS6juabtOaWsOWHveaVsOabtOaWsOaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOaVsOaNruWkhOeQhuWHveaVsFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGV4cHIsIGZuLCBvcHRpb24pIHtcbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBleHByUmF3ID0gZXhwcjtcbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmIChleHByLnR5cGUgIT09IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBhcHBseTogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdbU0FOIEVSUk9SXSBJbnZhbGlkIEFyZ3VtZW50XFwncyBUeXBlIGluIERhdGEgYXBwbHk6ICdcbiAgICAgICAgICAgICsgJ0V4cGVjdGVkIEZ1bmN0aW9uIGJ1dCBnb3QgJyArIHR5cGVvZiBmblxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuc2V0KGV4cHIsIGZuKG9sZFZhbHVlKSwgb3B0aW9uKTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5c3BsaWNl5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBzcGxpY2Ug5o6l5Y+X55qE5Y+C5pWw5YiX6KGo77yM5pWw57uE6aG55LiOQXJyYXkucHJvdG90eXBlLnNwbGljZeeahOWPguaVsOS4gOiHtFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtBcnJheX0g5paw5pWw57uEXG4gKi9cbkRhdGEucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChleHByLCBhcmdzLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgc3BsaWNlOiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgcGF0aHM6IGV4cHIucGF0aHMuc2xpY2UoMCksXG4gICAgICAgIHJhdzogZXhwci5yYXdcbiAgICB9O1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IFtdO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPiBsZW4pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBsZW4gKyBpbmRleDtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3QXJyYXkgPSB0YXJnZXQuc2xpY2UoMCk7XG4gICAgICAgIHJldHVyblZhbHVlID0gbmV3QXJyYXkuc3BsaWNlLmFwcGx5KG5ld0FycmF5LCBhcmdzKTtcblxuICAgICAgICB0aGlzLnJhdyA9IGltbXV0YWJsZVNldCh0aGlzLnJhdywgZXhwci5wYXRocywgMCwgZXhwci5wYXRocy5sZW5ndGgsIG5ld0FycmF5LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZpcmUoe1xuICAgICAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBkZWxldGVDb3VudDogcmV0dXJuVmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgdmFsdWU6IHJldHVyblZhbHVlLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogYXJncy5zbGljZSgyKSxcbiAgICAgICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdGhpcy5jaGVja0RhdGFUeXBlcygpO1xuICAgIC8vICNbZW5kXVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblwdXNo5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSBpdGVtIOimgXB1c2jnmoTlgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7bnVtYmVyfSDmlrDmlbDnu4TnmoRsZW5ndGjlsZ7mgKdcbiAqL1xuRGF0YS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChleHByLCBpdGVtLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgW3RhcmdldC5sZW5ndGgsIDAsIGl0ZW1dLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCArIDE7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblwb3Dmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uIChleHByLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNwbGljZShleHByLCBbbGVuIC0gMSwgMV0sIG9wdGlvbilbMF07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXNoaWZ05pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIChleHByLCBvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoZXhwciwgWzAsIDFdLCBvcHRpb24pWzBdO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobl1bnNoaWZ05pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSBpdGVtIOimgXVuc2hpZnTnmoTlgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7bnVtYmVyfSDmlrDmlbDnu4TnmoRsZW5ndGjlsZ7mgKdcbiAqL1xuRGF0YS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChleHByLCBpdGVtLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgWzAsIDAsIGl0ZW1dLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCArIDE7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobnnp7vpmaTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg6KaB56e76Zmk6aG555qE57Si5byVXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUucmVtb3ZlQXQgPSBmdW5jdGlvbiAoZXhwciwgaW5kZXgsIG9wdGlvbikge1xuICAgIHRoaXMuc3BsaWNlKGV4cHIsIFtpbmRleCwgMV0sIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhueenu+mZpOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg6KaB56e76Zmk55qE6aG5XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGV4cHIsIHZhbHVlLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldFtsZW5dID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFtsZW4sIDFdLCBvcHRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRGF0YTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiOt+WPluWjsOaYjuW8j+S6i+S7tueahOebkeWQrOWHveaVsFxuICovXG5cblxuLy8gdmFyIGV2YWxBcmdzID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWFyZ3MnKTtcbi8vIHZhciBmaW5kTWV0aG9kID0gcmVxdWlyZSgnLi4vcnVudGltZS9maW5kLW1ldGhvZCcpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcblxuLyoqXG4gKiDojrflj5blo7DmmI7lvI/kuovku7bnmoTnm5HlkKzlh73mlbBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOe7keWumuS/oeaBr+WvueixoVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBvbmVudEV2ZW50IOaYr+WQpue7hOS7tuiHquWumuS5ieS6i+S7tlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50TGlzdGVuZXIoZXZlbnRCaW5kLCBvd25lciwgZGF0YSwgaXNDb21wb25lbnRFdmVudCkge1xuICAgIHZhciBhcmdzID0gZXZlbnRCaW5kLmV4cHIuYXJncztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlID0gaXNDb21wb25lbnRFdmVudCA/IGUgOiBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgICB2YXIgbWV0aG9kID0gZmluZE1ldGhvZChvd25lciwgZXZlbnRCaW5kLmV4cHIubmFtZSwgZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBtZXRob2QuYXBwbHkoXG4gICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPyBldmFsQXJncyhhcmdzLCBuZXcgRGF0YSh7ICRldmVudDogZSB9LCBkYXRhKSwgb3duZXIpIDogW11cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLnByZXZlbnQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50QmluZC5tb2RpZmllci5zdG9wKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0RXZlbnRMaXN0ZW5lcjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIpOaWreWPmOabtOaVsOe7hOaYr+WQpuW9seWTjeWIsOaVsOaNruW8leeUqOaRmOimgVxuICovXG5cblxuLyoqXG4gKiDliKTmlq3lj5jmm7TmlbDnu4TmmK/lkKblvbHlk43liLDmlbDmja7lvJXnlKjmkZjopoFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOWPmOabtOaVsOe7hFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFSZWYg5pWw5o2u5byV55So5pGY6KaBXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjaGFuZ2VzSXNJbkRhdGFSZWYoY2hhbmdlcywgZGF0YVJlZikge1xuICAgIGlmIChkYXRhUmVmKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghY2hhbmdlLm92ZXJ2aWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhzID0gY2hhbmdlLmV4cHIucGF0aHM7XG4gICAgICAgICAgICAgICAgY2hhbmdlLm92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuZXh0T3ZlcnZpZXcgPSBwYXRoc1swXS52YWx1ZSArICcuJyArIHBhdGhzWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2Uud2lsZE92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWUgKyAnLionO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGFSZWZbY2hhbmdlLm92ZXJ2aWV3XVxuICAgICAgICAgICAgICAgIHx8IGNoYW5nZS53aWxkT3ZlcnZpZXcgJiYgZGF0YVJlZltjaGFuZ2Uud2lsZE92ZXJ2aWV3XVxuICAgICAgICAgICAgICAgIHx8IGNoYW5nZS5leHRPdmVydmlldyAmJiBkYXRhUmVmW2NoYW5nZS5leHRPdmVydmlld11cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjaGFuZ2VzSXNJbkRhdGFSZWY7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSBpbnNlcnRCZWZvcmUg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKi9cblxuLyoqXG4gKiBpbnNlcnRCZWZvcmUg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKlxuICogQHBhcmFtIHtIVE1MTm9kZX0gdGFyZ2V0RWwg6KaB5o+S5YWl55qE6IqC54K5XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBiZWZvcmVFbCDlnKjmraTlhYPntKDkuYvliY3mj5LlhaVcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHRhcmdldEVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgICAgaWYgKGJlZm9yZUVsKSB7XG4gICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUodGFyZ2V0RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRhcmdldEVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QmVmb3JlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5YWD57Sg55qE5Z+65pys5bGe5oCnXG4gKi9cblxudmFyIGJhc2VQcm9wcyA9IHtcbiAgICAnY2xhc3MnOiAxLFxuICAgICdzdHlsZSc6IDEsXG4gICAgJ2lkJzogMVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BzO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5YWD57Sg5a2Q6IqC54K56YGN5Y6G5pON5L2c57G7XG4gKi9cblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDlhYPntKDlrZDoioLngrnpgY3ljobmk43kvZznsbtcbiAqXG4gKiBAaW5uZXJcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwg6KaB6YGN5Y6G55qE5YWD57SgXG4gKi9cbmZ1bmN0aW9uIERPTUNoaWxkcmVuV2Fsa2VyKGVsKSB7XG4gICAgdGhpcy5yYXcgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRhcmdldCA9IGVsO1xuXG4gICAgdmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgbmV4dDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoL15cXHMqJC8udGVzdChjaGlsZC5kYXRhIHx8IGNoaWxkLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFbChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhdy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB0aGlzLnJhdy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJhd1t0aGlzLmluZGV4XTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLnJhd1t0aGlzLmluZGV4ICsgMV07XG59XG5cbi8qKlxuICog5b6A5LiL6LWw5LiA5Liq5YWD57SgXG4gKi9cbkRPTUNoaWxkcmVuV2Fsa2VyLnByb3RvdHlwZS5nb05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yYXdbKyt0aGlzLmluZGV4XTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLnJhd1t0aGlzLmluZGV4ICsgMV07XG59O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERPTUNoaWxkcmVuV2Fsa2VyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5YWD57Sg6IqC54K557G7XG4gKi9cblxuXG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBjaGFuZ2VzSXNJbkRhdGFSZWYgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGJhc2VQcm9wcyA9IHJlcXVpcmUoJy4vYmFzZS1wcm9wcycpO1xuLy8gdmFyIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3JldmVyc2UtZWxlbWVudC1jaGlsZHJlbicpO1xuLy8gdmFyIGlzRGF0YUNoYW5nZUJ5RWxlbWVudCA9IHJlcXVpcmUoJy4vaXMtZGF0YS1jaGFuZ2UtYnktZWxlbWVudCcpO1xuLy8gdmFyIGdldFByb3BIYW5kbGVyID0gcmVxdWlyZSgnLi9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRPd25PbkVsID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1vbi1lbCcpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hlZCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoZWQnKTtcbi8vIHZhciBub2RlU0JpbmRJbml0ID0gcmVxdWlyZSgnLi9ub2RlLXMtYmluZC1pbml0Jyk7XG4vLyB2YXIgbm9kZVNCaW5kVXBkYXRlID0gcmVxdWlyZSgnLi9ub2RlLXMtYmluZC11cGRhdGUnKTtcbi8vIHZhciB3YXJuU2V0SFRNTCA9IHJlcXVpcmUoJy4vd2Fybi1zZXQtaHRtbCcpO1xuLy8gdmFyIGdldE5vZGVQYXRoID0gcmVxdWlyZSgnLi9nZXQtbm9kZS1wYXRoJyk7XG5cbi8qKlxuICog5YWD57Sg6IqC54K557G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIEVsZW1lbnQoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5fZWxGbnMgPSBbXTtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gNVxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLnRhZ05hbWUgPSBhTm9kZS50YWdOYW1lO1xuXG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAvLyBpZTgtIOS4jeaUr+aMgWlubmVySFRNTOi+k+WHuuiHquWumuS5ieagh+etvlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpZU9sZFRoYW45ICYmIHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdkaXYnO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuX3NiaW5kRGF0YSA9IG5vZGVTQmluZEluaXQoYU5vZGUuZGlyZWN0aXZlcy5iaW5kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5pbml0ZWQ7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCBub3QgZm91bmQuIFxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCB0eXBlIG5vdCBtYXRjaCwgZXhwZWN0IDEgYnV0ICdcbiAgICAgICAgICAgICAgICArIGN1cnJlbnROb2RlLm5vZGVUeXBlICsgJy5cXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRoaXMudGFnTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgdGFnTmFtZSBub3QgbWF0Y2gsIGV4cGVjdCAnXG4gICAgICAgICAgICAgICAgKyB0aGlzLnRhZ05hbWUgKyAnIGJ1dCBtZWF0ICcgKyBjdXJyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLlxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG5cbiAgICAgICAgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbih0aGlzLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5jcmVhdGVkO1xuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5hdHRhY2hlZDtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5FbGVtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IDQ7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGlmICghdGhpcy5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuYU5vZGUuaG90c3BvdC5zb3VyY2VOb2RlO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5hTm9kZS5wcm9wcztcblxuICAgICAgICAgICAgaWYgKHNvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gc291cmNlTm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBjcmVhdGVFbCh0aGlzLnRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2JpbmREYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3NiaW5kRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2JpbmREYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb3BIYW5kbGVyKHRoaXMudGFnTmFtZSwga2V5KShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NiaW5kRGF0YVtrZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZXZhbEV4cHIocHJvcC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSB8fCAhYmFzZVByb3BzW3Byb3AubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyKHRoaXMuZWwsIHZhbHVlLCBwcm9wLm5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuY3JlYXRlZDtcbiAgICAgICAgfVxuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRlbnRSZWFkeSkge1xuICAgICAgICAgICAgdmFyIGh0bWxEaXJlY3RpdmUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcblxuICAgICAgICAgICAgaWYgKGh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIHdhcm5TZXRIVE1MKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBldmFsRXhwcihodG1sRGlyZWN0aXZlLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5hTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkQU5vZGUgPSB0aGlzLmFOb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZEFOb2RlLkNsYXp6XG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBjaGlsZEFOb2RlLkNsYXp6KGNoaWxkQU5vZGUsIHRoaXMsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNyZWF0ZU5vZGUoY2hpbGRBTm9kZSwgdGhpcywgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmF0dGFjaCh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWFkeSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuXG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmF0dGFjaGVkO1xuICAgIH1cbn07XG5cbkVsZW1lbnQucHJvdG90eXBlLmRldGFjaCA9IGVsZW1lbnRPd25EZXRhY2g7XG5FbGVtZW50LnByb3RvdHlwZS5kaXNwb3NlID0gZWxlbWVudE93bkRpc3Bvc2U7XG5FbGVtZW50LnByb3RvdHlwZS5fb25FbCA9IGVsZW1lbnRPd25PbkVsO1xuRWxlbWVudC5wcm90b3R5cGUuX2xlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlYXZlRGlzcG9zZSkge1xuICAgICAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2xlbl0uZGlzcG9zZSgxLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGVuID0gdGhpcy5fZWxGbnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gdGhpcy5fZWxGbnNbbGVuXTtcbiAgICAgICAgICAgICAgICB1bih0aGlzLmVsLCBmblswXSwgZm5bMV0sIGZuWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2VsRm5zID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0VGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2lucHV0VGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0VGltZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciXBhcmVudO+8jOivtOaYjuaYr+S4gOS4qnJvb3QgY29tcG9uZW5077yM5LiA5a6a6KaB5LuOZG9t5qCR5LitcmVtb3ZlXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzcG9zZU5vRGV0YWNoIHx8ICF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5kZXRhY2hlZDtcblxuICAgICAgICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5kaXNwb3NlZDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX29uZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbmRpc3Bvc2VkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOinhuWbvuabtOaWsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIHZhciBkYXRhSG90c3BvdCA9IHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhO1xuICAgIGlmIChkYXRhSG90c3BvdCAmJiBjaGFuZ2VzSXNJbkRhdGFSZWYoY2hhbmdlcywgZGF0YUhvdHNwb3QpKSB7XG5cbiAgICAgICAgLy8gdXBkYXRlIHMtYmluZFxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zYmluZERhdGEgPSBub2RlU0JpbmRVcGRhdGUoXG4gICAgICAgICAgICB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuYmluZCxcbiAgICAgICAgICAgIHRoaXMuX3NiaW5kRGF0YSxcbiAgICAgICAgICAgIHRoaXMuc2NvcGUsXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxuICAgICAgICAgICAgY2hhbmdlcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIG1lLmFOb2RlLmhvdHNwb3QucHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdldFByb3BIYW5kbGVyKG1lLnRhZ05hbWUsIG5hbWUpKG1lLmVsLCB2YWx1ZSwgbmFtZSwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwcm9wXG4gICAgICAgIHZhciBkeW5hbWljUHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGR5bmFtaWNQcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gZHluYW1pY1Byb3BzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcC5uYW1lO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgY2hhbmdlTGVuID0gY2hhbmdlcy5sZW5ndGg7IGogPCBjaGFuZ2VMZW47IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2pdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCB0aGlzLCBwcm9wTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuZXhwciwgdGhpcy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHByb3AuaGludEV4cHIgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuaGludEV4cHIsIHRoaXMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyKHRoaXMuZWwsIGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lciksIHByb3BOYW1lLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgdmFyIGh0bWxEaXJlY3RpdmUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcbiAgICAgICAgaWYgKGh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSBjaGFuZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VzW2xlbl0uZXhwciwgaHRtbERpcmVjdGl2ZS52YWx1ZSwgdGhpcy5zY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgd2FyblNldEhUTUwodGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gZXZhbEV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOaJp+ihjOWujOaIkGF0dGFjaGVk54q25oCB55qE6KGM5Li6XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLl9hdHRhY2hlZCA9IGVsZW1lbnRPd25BdHRhY2hlZDtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWIm+W7uuiKgueCueWvueW6lOeahCBzdHVtcCBjb21tZW50IOWFg+e0oFxuICovXG5cblxuXG4vKipcbiAqIOWIm+W7uuiKgueCueWvueW6lOeahCBzdHVtcCBjb21tZW50IOS4u+WFg+e0oFxuICovXG5mdW5jdGlvbiBub2RlT3duQ3JlYXRlU3R1bXAoKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgfHwgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57Sg55qE5a2Q5YWD57SgXG4gKi9cblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKDnmoTlrZDlhYPntKBcbiAqXG4gKiBAcGFyYW0ge0FycmF5PX0gY2hpbGRyZW4g5a2Q5YWD57Sg5pWw57uEXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudERpc3Bvc2VDaGlsZHJlbihjaGlsZHJlbiwgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHZhciBsZW4gPSBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGNoaWxkcmVuW2xlbl0uZGlzcG9zZShub0RldGFjaCwgbm9UcmFuc2l0aW9uKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnREaXNwb3NlQ2hpbGRyZW47XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDnroDljZXmiafooYzplIDmr4HoioLngrnnmoTooYzkuLpcbiAqL1xuXG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuXG4vKipcbiAqIOeugOWNleaJp+ihjOmUgOavgeiKgueCueeahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICovXG5mdW5jdGlvbiBub2RlT3duU2ltcGxlRGlzcG9zZShub0RldGFjaCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcy5jaGlsZHJlbiwgbm9EZXRhY2gsIDEpO1xuXG4gICAgaWYgKCFub0RldGFjaCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmRpc3Bvc2VkO1xuICAgIGlmICh0aGlzLl9vbmRpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuX29uZGlzcG9zZWQoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5byC5q2l57uE5Lu257G7XG4gKi9cblxuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcbi8vIHZhciBub2RlT3duU2ltcGxlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1vd24tc2ltcGxlLWRpc3Bvc2UnKTtcblxuXG4vKipcbiAqIOW8guatpee7hOS7tuexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg5Yid5aeL5YyW5Y+C5pWwXG4gKiBAcGFyYW0ge09iamVjdH0gbG9hZGVyIOe7hOS7tuWKoOi9veWZqFxuICovXG5mdW5jdGlvbiBBc3luY0NvbXBvbmVudChvcHRpb25zLCBsb2FkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICAgIHRoaXMuaWQgPSBndWlkKys7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIHZhciByZXZlcnNlV2Fsa2VyID0gb3B0aW9ucy5yZXZlcnNlV2Fsa2VyO1xuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBQbGFjZWhvbGRlckNvbXBvbmVudCA9IHRoaXMubG9hZGVyLnBsYWNlaG9sZGVyO1xuICAgICAgICBpZiAoUGxhY2Vob2xkZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bMF0gPSBuZXcgUGxhY2Vob2xkZXJDb21wb25lbnQob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZGVyLnN0YXJ0KGZ1bmN0aW9uIChDb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgbWUub25sb2FkKENvbXBvbmVudENsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9wdGlvbnMucmV2ZXJzZVdhbGtlciA9IG51bGw7XG4gICAgLy8gI1tlbmRdXG59XG5cbkFzeW5jQ29tcG9uZW50LnByb3RvdHlwZS5fY3JlYXRlID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuQXN5bmNDb21wb25lbnQucHJvdG90eXBlLmRpc3Bvc2UgPSBub2RlT3duU2ltcGxlRGlzcG9zZTtcblxuLyoqXG4gKiBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5Bc3luY0NvbXBvbmVudC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHZhciBQbGFjZWhvbGRlckNvbXBvbmVudCA9IHRoaXMubG9hZGVyLnBsYWNlaG9sZGVyO1xuICAgIGlmIChQbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbmV3IFBsYWNlaG9sZGVyQ29tcG9uZW50KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5bMF0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbXBvbmVudC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdGhpcy5sb2FkZXIuc3RhcnQoZnVuY3Rpb24gKENvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIG1lLm9ubG9hZChDb21wb25lbnRDbGFzcyk7XG4gICAgfSk7XG59O1xuXG5cbi8qKlxuICogbG9hZGVy5Yqg6L295a6M5oiQ77yM5riy5p+T57uE5Lu2XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICovXG5Bc3luY0NvbXBvbmVudC5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24gKENvbXBvbmVudENsYXNzKSB7XG4gICAgaWYgKHRoaXMuZWwgJiYgQ29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRDbGFzcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBjb21wb25lbnQuYXR0YWNoKHRoaXMuZWwucGFyZW50Tm9kZSwgdGhpcy5lbCk7XG5cbiAgICAgICAgdmFyIHBhcmVudENoaWxkcmVuID0gdGhpcy5vcHRpb25zLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50SW5kZXggPT0gbnVsbCB8fCBwYXJlbnRDaGlsZHJlblt0aGlzLnBhcmVudEluZGV4XSAhPT0gdGhpcykge1xuICAgICAgICAgICAgZWFjaChwYXJlbnRDaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFzeW5jQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRDaGlsZHJlblt0aGlzLnBhcmVudEluZGV4XSA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UoKTtcbn07XG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuQXN5bmNDb21wb25lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIHRoaXMuY2hpbGRyZW5bMF0gJiYgdGhpcy5jaGlsZHJlblswXS5fdXBkYXRlKGNoYW5nZXMpO1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQXN5bmNDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDpgJrov4fnu4Tku7blj43op6PliJvlu7roioLngrnnmoTlt6XljoLmlrnms5VcbiAqL1xuXG4vLyB2YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuLy8gdmFyIEFzeW5jQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9hc3luYy1jb21wb25lbnQnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDpgJrov4fnu4Tku7blj43op6PliJvlu7roioLngrlcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyfSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgaWYgKGFOb2RlLkNsYXp6KSB7XG4gICAgICAgIHJldHVybiBuZXcgYU5vZGUuQ2xhenooYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICB2YXIgQ29tcG9uZW50T3JMb2FkZXIgPSBvd25lci5nZXRDb21wb25lbnRUeXBlXG4gICAgICAgID8gb3duZXIuZ2V0Q29tcG9uZW50VHlwZShhTm9kZSwgc2NvcGUpXG4gICAgICAgIDogb3duZXIuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcblxuICAgIGlmIChDb21wb25lbnRPckxvYWRlcikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudE9yTG9hZGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IG5ldyBDb21wb25lbnRPckxvYWRlcih7XG4gICAgICAgICAgICAgICAgc291cmNlOiBhTm9kZSxcbiAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyOiByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBuZXcgQXN5bmNDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcjogcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgfSwgQ29tcG9uZW50T3JMb2FkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgcGFyZW50LCBzY29wZSwgb3duZXIsIHJldmVyc2VXYWxrZXIpO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJldmVyc2VOb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5a+55YWD57Sg55qE5a2Q6IqC54K56L+b6KGM5Y+N6KejXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIERPTUNoaWxkcmVuV2Fsa2VyID0gcmVxdWlyZSgnLi9kb20tY2hpbGRyZW4td2Fsa2VyJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuXG4vKipcbiAqIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICovXG5mdW5jdGlvbiByZXZlcnNlRWxlbWVudENoaWxkcmVuKGVsZW1lbnQsIHNjb3BlLCBvd25lcikge1xuICAgIHZhciBodG1sRGlyZWN0aXZlID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG5cbiAgICBpZiAoIWh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgdmFyIHJldmVyc2VXYWxrZXIgPSBuZXcgRE9NQ2hpbGRyZW5XYWxrZXIoZWxlbWVudC5lbCk7XG4gICAgICAgIHZhciBhTm9kZUNoaWxkcmVuID0gZWxlbWVudC5hTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFOb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICAgICAgY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZHJlbltpXSwgZWxlbWVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXZlcnNlRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu66IqC54K555qE5bel5Y6C5pa55rOVXG4gKi9cblxuLy8gdmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbi8vIHZhciBBc3luY0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXN5bmMtY29tcG9uZW50Jyk7XG5cblxuLyoqXG4gKiDliJvlu7roioLngrlcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lcikge1xuICAgIGlmIChhTm9kZS5DbGF6eikge1xuICAgICAgICByZXR1cm4gbmV3IGFOb2RlLkNsYXp6KGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lcik7XG4gICAgfVxuXG4gICAgdmFyIENvbXBvbmVudE9yTG9hZGVyID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZVxuICAgICAgICA/IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUsIHNjb3BlKVxuICAgICAgICA6IG93bmVyLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG5cbiAgICBpZiAoQ29tcG9uZW50T3JMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnRPckxvYWRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBuZXcgQ29tcG9uZW50T3JMb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG5ldyBBc3luY0NvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBhTm9kZSxcbiAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuICAgICAgICAgICAgfSwgQ29tcG9uZW50T3JMb2FkZXIpO1xuICAgIH1cblxuICAgIGFOb2RlLkNsYXp6ID0gRWxlbWVudDtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOiOt+WPliBlbGVtZW50IOeahCB0cmFuc2l0aW9uIOaOp+WItuWvueixoVxuICovXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8qKlxuICog6I635Y+WIGVsZW1lbnQg55qEIHRyYW5zaXRpb24g5o6n5Yi25a+56LGhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57SgXG4gKiBAcmV0dXJuIHtPYmplY3Q/fVxuICovXG5mdW5jdGlvbiBlbGVtZW50R2V0VHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uO1xuICAgIHZhciBvd25lciA9IGVsZW1lbnQub3duZXI7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gNSkge1xuICAgICAgICB2YXIgY21wdEdpdmVuVHJhbnNpdGlvbiA9IGVsZW1lbnQuc291cmNlICYmIGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMudHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNtcHRHaXZlblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGNtcHRHaXZlblRyYW5zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvd25lciA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbjtcbiAgICBpZiAoZGlyZWN0aXZlICYmIG93bmVyKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSBmaW5kTWV0aG9kKG93bmVyLCBkaXJlY3RpdmUudmFsdWUubmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5hcHBseShcbiAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICBldmFsQXJncyhkaXJlY3RpdmUudmFsdWUuYXJncywgZWxlbWVudC5zY29wZSwgb3duZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zaXRpb24gfHwgZWxlbWVudC50cmFuc2l0aW9uO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50R2V0VHJhbnNpdGlvbjtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICovXG5cbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuXG4vKipcbiAqIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duRGV0YWNoKCkge1xuICAgIHZhciBsaWZlQ3ljbGUgPSB0aGlzLmxpZmVDeWNsZTtcbiAgICBpZiAobGlmZUN5Y2xlLmxlYXZpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNwb3NlTm9UcmFuc2l0aW9uKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24odGhpcyk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5sZWF2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGhhc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90b1BoYXNlKCdsZWF2aW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5sZWF2aW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5sZWF2ZSh0aGlzLmVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWUuX2xlYXZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbGVhdmUoKTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duRGV0YWNoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57SgXG4gKi9cblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMubGVhdmVEaXNwb3NlID0gMTtcbiAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCA9IG5vRGV0YWNoO1xuICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvbiA9IG5vVHJhbnNpdGlvbjtcblxuICAgIHRoaXMuZGV0YWNoKCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25EaXNwb3NlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Li65YWD57Sg55qEIGVsIOe7keWumuS6i+S7tlxuICovXG5cbi8vIHZhciBvbiA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvb24nKTtcblxuLyoqXG4gKiDkuLrlhYPntKDnmoQgZWwg57uR5a6a5LqL5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrXop6blj5FcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bk9uRWwobmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICBjYXB0dXJlID0gISFjYXB0dXJlO1xuICAgIHRoaXMuX2VsRm5zLnB1c2goW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSk7XG4gICAgb24odGhpcy5lbCwgbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duT25FbDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOaYr+WQpua1j+iniOWZqOeOr+Wig1xuICovXG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNCcm93c2VyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5byA5Y+R5pe255qE6K2m5ZGK5o+Q56S6XG4gKi9cblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5byA5Y+R5pe255qE6K2m5ZGK5o+Q56S6XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Ug6K2m5ZGK5L+h5oGvXG4gKi9cbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIG1lc3NhZ2UgPSAnW1NBTiBXQVJOSU5HXSAnICsgbWVzc2FnZTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOmYsuatouitpuWRiuS4reaWreiwg+eUqOWghuagiFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm47XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSAg5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIHdhcm4gPSByZXF1aXJlKCcuLi91dGlsL3dhcm4nKTtcblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOS6i+S7tue7keWumuWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnueahOe7hOS7tuWvueixoVxuICovXG5mdW5jdGlvbiB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcikge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgdmFyIG1ldGhvZCA9IG93bmVyO1xuICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kW3BhdGgudmFsdWVdO1xuICAgICAgICB2YWxpZCA9ICEhbWV0aG9kO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICBlYWNoKGV2ZW50QmluZC5leHByLm5hbWUucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3YXJuKGV2ZW50QmluZC5uYW1lICsgJyBsaXN0ZW4gZmFpbCxcIicgKyBwYXRocy5qb2luKCcuJykgKyAnXCIgbm90IGV4aXN0Jyk7XG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm5FdmVudExpc3Rlbk1ldGhvZDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqL1xuXG5cbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZW1wdHknKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciB0cmlnZ2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci90cmlnZ2VyJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGVsZW1lbnRHZXRUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9lbGVtZW50LWdldC10cmFuc2l0aW9uJyk7XG4vLyB2YXIgZ2V0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vZ2V0LWV2ZW50LWxpc3RlbmVyJyk7XG4vLyB2YXIgd2FybkV2ZW50TGlzdGVuTWV0aG9kID0gcmVxdWlyZSgnLi93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QnKTtcblxuLyoqXG4gKiDlj4znu5HovpPlhaXmoYZDb21wb3NpdGlvbkVuZOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25FbmQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb3NpbmcgPSAwO1xuICAgIHRyaWdnZXIodGhpcywgJ2lucHV0Jyk7XG59XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25TdGFydOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmNvbXBvc2luZyA9IDE7XG59XG5cbmZ1bmN0aW9uIGdldFhQcm9wT3V0cHV0ZXIoZWxlbWVudCwgeFByb3AsIGRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB4UHJvcE91dHB1dChlbGVtZW50LCB4UHJvcCwgZGF0YSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRYUHJvcE91dHB1dGVyKGVsZW1lbnQsIHhQcm9wLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICAgICAgeFByb3BPdXRwdXQoZWxlbWVudCwgeFByb3AsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXRJbnB1dEZvY3VzWFByb3BIYW5kbGVyKGVsZW1lbnQsIHhQcm9wLCBkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5faW5wdXRUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHhQcm9wT3V0cHV0KGVsZW1lbnQsIHhQcm9wLCBkYXRhKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXRJbnB1dEJsdXJYUHJvcEhhbmRsZXIoZWxlbWVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZWxlbWVudC5faW5wdXRUaW1lcik7XG4gICAgICAgIGVsZW1lbnQuX2lucHV0VGltZXIgPSBudWxsO1xuICAgIH07XG59XG4vLyAjW2VuZF1cblxuZnVuY3Rpb24geFByb3BPdXRwdXQoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWVsZW1lbnQubGlmZUN5Y2xlLmNyZWF0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbCA9IGVsZW1lbnQuZWw7XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnaW5wdXQnICYmIGJpbmRJbmZvLm5hbWUgPT09ICdjaGVja2VkJykge1xuICAgICAgICB2YXIgYmluZFZhbHVlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd2YWx1ZScpO1xuICAgICAgICB2YXIgYmluZFR5cGUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3R5cGUnKTtcblxuICAgICAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVsLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtlbC5jaGVja2VkID8gJ3B1c2gnIDogJ3JlbW92ZSddKGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkICYmIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsW2JpbmRJbmZvLm5hbWVdLCB7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgbm9kZTogZWxlbWVudCxcbiAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciBpc0NvbXBvbmVudCA9IHRoaXMubm9kZVR5cGUgPT09IDU7XG4gICAgICAgIHZhciBkYXRhID0gaXNDb21wb25lbnQgPyB0aGlzLmRhdGEgOiB0aGlzLnNjb3BlO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuXG4gICAgICAgIC8vIOWkhOeQhuiHqui6q+WPmOWMluaXtuWPjOWQkee7keWumueahOmAu+i+kVxuICAgICAgICB2YXIgeFByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LnhQcm9wcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4UHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeFByb3AgPSB4UHJvcHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoeFByb3AubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5Db21wb3NpdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NoYW5nZScsIGlucHV0T25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uc3RhcnQnLCBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uZW5kJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdvbmlucHV0JyBpbiB0aGlzLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2lucHV0JywgZ2V0SW5wdXRYUHJvcE91dHB1dGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2ZvY3VzaW4nLCBnZXRJbnB1dEZvY3VzWFByb3BIYW5kbGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2ZvY3Vzb3V0JywgZ2V0SW5wdXRCbHVyWFByb3BIYW5kbGVyKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjaGFuZ2UnLCBnZXRYUHJvcE91dHB1dGVyKHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NsaWNrJywgZ2V0WFByb3BPdXRwdXRlcih0aGlzLCB4UHJvcCwgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvd25lciA9IGlzQ29tcG9uZW50ID8gdGhpcyA6IHRoaXMub3duZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5hTm9kZS5ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRCaW5kID0gdGhpcy5hTm9kZS5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcik7XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgdGhpcy5fb25FbChcbiAgICAgICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgICAgICBnZXRFdmVudExpc3RlbmVyKGV2ZW50QmluZCwgb3duZXIsIGRhdGEsIGV2ZW50QmluZC5tb2RpZmllciksXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kLm1vZGlmaWVyLmNhcHR1cmVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5uYXRpdmVFdmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50QmluZCA9IHRoaXMubmF0aXZlRXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QmluZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBnZXRFdmVudExpc3RlbmVyKGV2ZW50QmluZCwgdGhpcy5vd25lciwgdGhpcy5zY29wZSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QmluZC5tb2RpZmllci5jYXB0dXJlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24odGhpcyk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24uZW50ZXIpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZW50ZXIodGhpcy5lbCwgZW1wdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliJ3lp4vljJboioLngrnnmoQgcy1iaW5kIOaVsOaNrlxuICovXG5cblxuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcblxuLyoqXG4gKiDliJ3lp4vljJboioLngrnnmoQgcy1iaW5kIOaVsOaNrlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzQmluZCBiaW5k5oyH5Luk5a+56LGhXG4gKiBAcGFyYW0ge01vZGVsfSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vZGVTQmluZEluaXQoc0JpbmQsIHNjb3BlLCBvd25lcikge1xuICAgIGlmIChzQmluZCAmJiBzY29wZSkge1xuICAgICAgICByZXR1cm4gZXZhbEV4cHIoc0JpbmQudmFsdWUsIHNjb3BlLCBvd25lcik7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlU0JpbmRJbml0O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg6K6h566X5Lik5Liq5a+56LGhIGtleSDnmoTlubbpm4ZcbiAqL1xuXG4vKipcbiAqIOiuoeeul+S4pOS4quWvueixoSBrZXkg55qE5bm26ZuGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMiDmupDlr7nosaFcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiB1bmlvbktleXMob2JqMSwgb2JqMikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gb2JqMSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9iajIpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgIGlmIChvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICFvYmoxW2tleV0gJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHVuaW9uS2V5cztcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOabtOaWsOiKgueCueeahCBzLWJpbmQg5pWw5o2uXG4gKi9cblxuLy8gdmFyIHVuaW9uS2V5cyA9IHJlcXVpcmUoJy4uL3V0aWwvdW5pb24ta2V5cycpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuXG4vKipcbiAqIOabtOaWsOiKgueCueeahCBzLWJpbmQg5pWw5o2uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNCaW5kIGJpbmTmjIfku6Tlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRCaW5kRGF0YSDlvZPliY1zLWJpbmTmlbDmja5cbiAqIEBwYXJhbSB7TW9kZWx9IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDlj5jmm7TmlbDnu4RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZXIg57uR5a6a5a+56LGh5a2Q6aG55Y+Y5pu055qE5pu05paw5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIG5vZGVTQmluZFVwZGF0ZShzQmluZCwgb2xkQmluZERhdGEsIHNjb3BlLCBvd25lciwgY2hhbmdlcywgdXBkYXRlcikge1xuICAgIGlmIChzQmluZCkge1xuICAgICAgICB2YXIgbGVuID0gY2hhbmdlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlc1tsZW5dLmV4cHIsIHNCaW5kLnZhbHVlLCBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmluZERhdGEgPSBldmFsRXhwcihzQmluZC52YWx1ZSwgc2NvcGUsIG93bmVyKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHVuaW9uS2V5cyhuZXdCaW5kRGF0YSwgb2xkQmluZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV3QmluZERhdGFba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG9sZEJpbmREYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QmluZERhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZVNCaW5kVXBkYXRlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yik5pat5YWD57Sg5piv5ZCm5LiN5YWB6K646K6+572uSFRNTFxuICovXG5cbi8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbi8vIHNlZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyhWUy44NSkuYXNweFxuXG4vKipcbiAqIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vU2V0SFRNTChlbCkge1xuICAgIHJldHVybiAvXihjb2x8Y29sZ3JvdXB8ZnJhbWVzZXR8c3R5bGV8dGFibGV8dGJvZHl8dGZvb3R8dGhlYWR8dHJ8c2VsZWN0KSQvaS50ZXN0KGVsLnRhZ05hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub1NldEhUTUw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSAg6I635Y+W6IqC54K5IHN0dW1wIOeahCBjb21tZW50XG4gKi9cblxuLy8gdmFyIG5vU2V0SFRNTCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvbm8tc2V0LWh0bWwnKTtcbi8vIHZhciB3YXJuID0gcmVxdWlyZSgnLi4vdXRpbC93YXJuJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEhUTUzlhYPntKBcbiAqL1xuZnVuY3Rpb24gd2FyblNldEhUTUwoZWwpIHtcbiAgICAvLyBkb250IHdhcm4gaWYgbm90IGluIGJyb3dzZXIgcnVudGltZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbiAgICAvLyBzZWU6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzM4OTcoVlMuODUpLmFzcHhcbiAgICBpZiAobm9TZXRIVE1MKGVsKSkge1xuICAgICAgICB3YXJuKCdzZXQgaHRtbCBmb3IgZWxlbWVudCBcIicgKyBlbC50YWdOYW1lICsgJ1wiIG1heSBjYXVzZSBhbiBlcnJvciBpbiBvbGQgSUUnKTtcbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2FyblNldEhUTUw7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDojrflj5boioLngrnlnKjnu4Tku7bmoJHkuK3nmoTot6/lvoRcbiAqL1xuXG5cbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog6I635Y+W6IqC54K55Zyo57uE5Lu25qCR5Lit55qE6Lev5b6EXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIOiKgueCueWvueixoVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBnZXROb2RlUGF0aChub2RlKSB7XG4gICAgdmFyIG5vZGVQYXRocyA9IFtdO1xuICAgIHZhciBub2RlUGFyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAobm9kZVBhcmVudCkge1xuICAgICAgICBzd2l0Y2ggKG5vZGVQYXJlbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdChub2RlUGFyZW50LnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2lmJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnZm9yWycgKyBub2RlUGFyZW50LmFub2RlLmRpcmVjdGl2ZXNbJ2ZvciddLnJhdyArICddJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnc2xvdFsnICsgKG5vZGVQYXJlbnQubmFtZSB8fCAnZGVmYXVsdCcpICsgJ10nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCd0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2NvbXBvbmVudFsnICsgKG5vZGVQYXJlbnQuc3ViVGFnIHx8ICdyb290JykgKyAnXScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVQYXJlbnQgPSBub2RlUGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVBhdGhzO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldE5vZGVQYXRoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKi9cblxuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuXG4vLyAjW2JlZ2luXSBkZXZ0b29sXG52YXIgc2FuNGRldnRvb2w7XG5cbi8qKlxuICog57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyp9IGFyZyDmtojmga/lj4LmlbBcbiAqL1xuZnVuY3Rpb24gZW1pdERldnRvb2wobmFtZSwgYXJnKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzQnJvd3NlciAmJiBzYW40ZGV2dG9vbCAmJiBzYW40ZGV2dG9vbC5kZWJ1ZyAmJiB3aW5kb3cuX19zYW5fZGV2dG9vbF9fKSB7XG4gICAgICAgIHdpbmRvdy5fX3Nhbl9kZXZ0b29sX18uZW1pdChuYW1lLCBhcmcpO1xuICAgIH1cbn1cblxuZW1pdERldnRvb2wuc3RhcnQgPSBmdW5jdGlvbiAobWFpbikge1xuICAgIHNhbjRkZXZ0b29sID0gbWFpbjtcbiAgICBlbWl0RGV2dG9vbCgnc2FuJywgbWFpbik7XG59O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVtaXREZXZ0b29sO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57uE5Lu257G7XG4gKi9cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuLi91dGlsL2JpbmQnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG4vLyB2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCcuLi91dGlsL25leHQtdGljaycpO1xuLy8gdmFyIGVtaXREZXZ0b29sID0gcmVxdWlyZSgnLi4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciB1biA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvdW4nKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNvbXBpbGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyB2YXIgcHJlaGVhdEFOb2RlID0gcmVxdWlyZSgnLi9wcmVoZWF0LWEtbm9kZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgaXNEYXRhQ2hhbmdlQnlFbGVtZW50ID0gcmVxdWlyZSgnLi9pcy1kYXRhLWNoYW5nZS1ieS1lbGVtZW50Jyk7XG4vLyB2YXIgZ2V0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vZ2V0LWV2ZW50LWxpc3RlbmVyJyk7XG4vLyB2YXIgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vcmV2ZXJzZS1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIG5vZGVTQmluZEluaXQgPSByZXF1aXJlKCcuL25vZGUtcy1iaW5kLWluaXQnKTtcbi8vIHZhciBub2RlU0JpbmRVcGRhdGUgPSByZXF1aXJlKCcuL25vZGUtcy1iaW5kLXVwZGF0ZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hlZCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoZWQnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgY3JlYXRlRGF0YVR5cGVzQ2hlY2tlciA9IHJlcXVpcmUoJy4uL3V0aWwvY3JlYXRlLWRhdGEtdHlwZXMtY2hlY2tlcicpO1xuLy8gdmFyIHdhcm4gPSByZXF1aXJlKCcuLi91dGlsL3dhcm4nKTtcblxuXG5cblxuLyoqXG4gKiDnu4Tku7bnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWIneWni+WMluWPguaVsFxuICovXG5mdW5jdGlvbiBDb21wb25lbnQob3B0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGZvciAodmFyIGtleSBpbiBDb21wb25lbnQucHJvdG90eXBlKSB7XG4gICAgICAgIGlmICh0aGlzW2tleV0gIT09IENvbXBvbmVudC5wcm90b3R5cGVba2V5XSkge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgICAgICAgd2FybignXFxgJyArIGtleSArICdcXGAgaXMgYSByZXNlcnZlZCBrZXkgb2Ygc2FuIGNvbXBvbmVudHMuIE92ZXJyaWRpbmcgdGhpcyBwcm9wZXJ0eSBtYXkgY2F1c2UgdW5rbm93biBleGNlcHRpb25zLicpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuaW1wbGljaXRDaGlsZHJlbiA9IFtdO1xuXG4gICAgdmFyIGNsYXp6ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBjbGF6ei5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkIHx8IGNsYXp6LmNvbXB1dGVkIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzIHx8IGNsYXp6Lm1lc3NhZ2VzIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBvcHRpb25zLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgdGhpcy5zdWJUYWcgPSBvcHRpb25zLnN1YlRhZztcblxuICAgIC8vIGNvbXBpbGVcbiAgICBjb21waWxlQ29tcG9uZW50KGNsYXp6KTtcblxuICAgIHZhciBwcm90b0FOb2RlID0gY2xhenoucHJvdG90eXBlLmFOb2RlO1xuICAgIHByZWhlYXRBTm9kZShwcm90b0FOb2RlKTtcblxuXG4gICAgdGhpcy50YWdOYW1lID0gcHJvdG9BTm9kZS50YWdOYW1lO1xuICAgIHRoaXMuc291cmNlID0gdHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHBhcnNlVGVtcGxhdGUob3B0aW9ucy5zb3VyY2UpLmNoaWxkcmVuWzBdXG4gICAgICAgIDogb3B0aW9ucy5zb3VyY2U7XG4gICAgcHJlaGVhdEFOb2RlKHRoaXMuc291cmNlKTtcblxuXG4gICAgdGhpcy5zb3VyY2VTbG90TmFtZVByb3BzID0gW107XG4gICAgdGhpcy5zb3VyY2VTbG90cyA9IHtcbiAgICAgICAgbmFtZWQ6IHt9XG4gICAgfTtcblxuXG4gICAgdGhpcy5vd25lciA9IG9wdGlvbnMub3duZXI7XG4gICAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG4gICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG5cbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IDVcbiAgICAgICAgICAgID8gcGFyZW50XG4gICAgICAgICAgICA6IHBhcmVudCAmJiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm93bmVyKSB7XG4gICAgICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gdGhpcy5vd25lcjtcbiAgICAgICAgdGhpcy5zY29wZSA9IHRoaXMub3duZXIuZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gZ3VpZCsrO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgIHZhciBmaXJzdENvbW1lbnROb2RlID0gdGhpcy5lbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDb21tZW50Tm9kZSAmJiBmaXJzdENvbW1lbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBmaXJzdENvbW1lbnROb2RlID0gZmlyc3RDb21tZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdENvbW1lbnROb2RlICYmIGZpcnN0Q29tbWVudE5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIHZhciBzdHVtcE1hdGNoID0gZmlyc3RDb21tZW50Tm9kZS5kYXRhLm1hdGNoKC9eXFxzKnMtZGF0YTooW1xcc1xcU10rKT8kLyk7XG4gICAgICAgICAgICBpZiAoc3R1bXBNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHVtcFRleHQgPSBzdHVtcE1hdGNoWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBjb21wb25lbnQgZGF0YVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnXG4gICAgICAgICAgICAgICAgICAgICsgc3R1bXBUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXltcXHNcXG5dKi8sICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgL1wiKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSlcXC5cXGQrWlwiL2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB5LCBtb24sIGQsIGgsIG0sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduZXcgRGF0ZSgnICsgKCt5KSArICcsJyArICgrbW9uKSArICcsJyArICgrZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJywnICsgKCtoKSArICcsJyArICgrbSkgKyAnLCcgKyAoK3MpICsgJyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApKSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWwoZmlyc3RDb21tZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICAvLyBuYXRpdmXkuovku7bmlbDnu4RcbiAgICB0aGlzLm5hdGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgIC8vIOe7hOS7tui/kOihjOaXtuS8oOWFpeeahOe7k+aehO+8jOWBmnNsb3Top6PmnpBcbiAgICAgICAgdGhpcy5faW5pdFNvdXJjZVNsb3RzKDEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5zb3VyY2UuZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50QmluZCA9IHRoaXMuc291cmNlLmV2ZW50c1tpXTtcbiAgICAgICAgICAgIC8vIOS/neWtmOW9k+WJjeWunuS+i+eahG5hdGl2ZeS6i+S7tu+8jOS4i+mdouWIm+W7umFOb2Rl5pe25YCZ5YGa5ZCI5bm2XG4gICAgICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLm5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRXZlbnRzLnB1c2goZXZlbnRCaW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3B0aW9ucy5vd25lcik7XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFxuICAgICAgICAgICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXZlbnRMaXN0ZW5lcihldmVudEJpbmQsIG9wdGlvbnMub3duZXIsIHRoaXMuc2NvcGUsIDEpLFxuICAgICAgICAgICAgICAgICAgICBldmVudEJpbmRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWdOYW1lID0gdGhpcy50YWdOYW1lIHx8IHRoaXMuc291cmNlLnRhZ05hbWU7XG4gICAgICAgIHRoaXMuYmluZHMgPSB0aGlzLnNvdXJjZS5ob3RzcG90LmJpbmRzO1xuXG4gICAgICAgIC8vIGluaXQgcy1iaW5kIGRhdGFcbiAgICAgICAgdGhpcy5fc3JjU2JpbmREYXRhID0gbm9kZVNCaW5kSW5pdCh0aGlzLnNvdXJjZS5kaXJlY3RpdmVzLmJpbmQsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2NvbXBpbGVkJyk7XG5cbiAgICAvLyBpbml0IGRhdGFcbiAgICB2YXIgaW5pdERhdGEgPSBleHRlbmQoXG4gICAgICAgIHR5cGVvZiB0aGlzLmluaXREYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaXMuaW5pdERhdGEoKSB8fCB7fSxcbiAgICAgICAgb3B0aW9ucy5kYXRhIHx8IHRoaXMuX3NyY1NiaW5kRGF0YVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5iaW5kcyAmJiB0aGlzLnNjb3BlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5iaW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBiaW5kSW5mbyA9IHRoaXMuYmluZHNbaV07XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKGJpbmRJbmZvLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvc2FuL2lzc3Vlcy8xOTFcbiAgICAgICAgICAgICAgICBpbml0RGF0YVtiaW5kSW5mby5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGEoaW5pdERhdGEpO1xuXG5cbiAgICB0aGlzLnRhZ05hbWUgPSB0aGlzLnRhZ05hbWUgfHwgJ2Rpdic7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAvLyBpZTgtIOS4jeaUr+aMgWlubmVySFRNTOi+k+WHuuiHquWumuS5ieagh+etvlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpZU9sZFRoYW45ICYmIHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdkaXYnO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAvLyDlnKjliJ3lp4vljJYgKyDmlbDmja7nu5HlrprlkI7vvIzlvIDlp4vmlbDmja7moKHpqoxcbiAgICAvLyBOT1RFOiDlj6rlnKjlvIDlj5HniYjmnKzkuK3ov5vooYzlsZ7mgKfmoKHpqoxcbiAgICB2YXIgZGF0YVR5cGVzID0gdGhpcy5kYXRhVHlwZXMgfHwgY2xhenouZGF0YVR5cGVzO1xuICAgIGlmIChkYXRhVHlwZXMpIHtcbiAgICAgICAgdmFyIGRhdGFUeXBlQ2hlY2tlciA9IGNyZWF0ZURhdGFUeXBlc0NoZWNrZXIoXG4gICAgICAgICAgICBkYXRhVHlwZXMsXG4gICAgICAgICAgICB0aGlzLnN1YlRhZyB8fCB0aGlzLm5hbWUgfHwgY2xhenoubmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRhdGEuc2V0VHlwZUNoZWNrZXIoZGF0YVR5cGVDaGVja2VyKTtcbiAgICAgICAgdGhpcy5kYXRhLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdGhpcy5jb21wdXRlZERlcHMgPSB7fTtcbiAgICBmb3IgKHZhciBleHByIGluIHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcHV0ZWQuaGFzT3duUHJvcGVydHkoZXhwcikgJiYgIXRoaXMuY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQoZXhwcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0RGF0YUNoYW5nZXIoKTtcbiAgICB0aGlzLl9zYmluZERhdGEgPSBub2RlU0JpbmRJbml0KHRoaXMuYU5vZGUuZGlyZWN0aXZlcy5iaW5kLCB0aGlzLmRhdGEsIHRoaXMpO1xuICAgIHRoaXMuX3RvUGhhc2UoJ2luaXRlZCcpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcywgdGhpcy5kYXRhLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnY3JlYXRlZCcpO1xuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHdhbGtlciA9IG9wdGlvbnMucmV2ZXJzZVdhbGtlcjtcbiAgICAgICAgaWYgKHdhbGtlcikge1xuICAgICAgICAgICAgdmFyIGlmRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG4gICAgICAgICAgICBpZiAoIWlmRGlyZWN0aXZlIHx8IGV2YWxFeHByKGlmRGlyZWN0aXZlLnZhbHVlLCB0aGlzLmRhdGEsIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gd2Fsa2VyLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcywgdGhpcy5kYXRhLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCB3YWxrZXIudGFyZ2V0LCB3YWxrZXIuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuX2F0dGFjaGVkKCk7XG4gICAgICAgICAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cbi8qKlxuICog5Yid5aeL5YyW5Yib5bu657uE5Lu25aSW6YOo5Lyg5YWl55qE5o+S5qe95a+56LGhXG4gKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHtib29sZWFufSBpc0ZpcnN0VGltZSDmmK/lkKbliJ3mrKHlr7lzb3VyY2VTbG90c+i/m+ihjOiuoeeul1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9pbml0U291cmNlU2xvdHMgPSBmdW5jdGlvbiAoaXNGaXJzdFRpbWUpIHtcbiAgICB0aGlzLnNvdXJjZVNsb3RzLm5hbWVkID0ge307XG5cbiAgICAvLyDnu4Tku7bov5DooYzml7bkvKDlhaXnmoTnu5PmnoTvvIzlgZpzbG906Kej5p6QXG4gICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc2NvcGUpIHtcbiAgICAgICAgdmFyIHNvdXJjZUNoaWxkcmVuID0gdGhpcy5zb3VyY2UuY2hpbGRyZW47XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzb3VyY2VDaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHNvdXJjZUNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICAgICAgdmFyIHNsb3RCaW5kID0gIWNoaWxkLnRleHRFeHByICYmIGdldEFOb2RlUHJvcChjaGlsZCwgJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90QmluZCkge1xuICAgICAgICAgICAgICAgIGlzRmlyc3RUaW1lICYmIHRoaXMuc291cmNlU2xvdE5hbWVQcm9wcy5wdXNoKHNsb3RCaW5kKTtcblxuICAgICAgICAgICAgICAgIHZhciBzbG90TmFtZSA9IGV2YWxFeHByKHNsb3RCaW5kLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc291cmNlU2xvdHMubmFtZWRbc2xvdE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc291cmNlU2xvdHMubmFtZWRbc2xvdE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRmlyc3RUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zb3VyY2VTbG90cy5ub25hbWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zb3VyY2VTbG90cy5ub25hbWUgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDnsbvlnovmoIfor4ZcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLm5vZGVUeXBlID0gNTtcblxuLyoqXG4gKiDlnKjkuIvkuIDkuKrmm7TmlrDlkajmnJ/ov5DooYzlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDopoHov5DooYznmoTlh73mlbBcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG5Db21wb25lbnQucHJvdG90eXBlLl9jdHggPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTtcblxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG4vKipcbiAqIOS9v+iKgueCueWIsOi+vuebuOW6lOeahOeUn+WRveWRqOacn1xuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOeUn+WRveWRqOacn+WQjeensFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jYWxsSG9vayA9XG5Db21wb25lbnQucHJvdG90eXBlLl90b1BoYXNlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlW25hbWVdKSB7XG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlW25hbWVdIHx8IHRoaXMubGlmZUN5Y2xlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FmdGVyTGlmZSA9IHRoaXMubGlmZUN5Y2xlO1xuXG4gICAgICAgIC8vIOmAmuefpWRldnRvb2xcbiAgICAgICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgICAgICBlbWl0RGV2dG9vbCgnY29tcC0nICsgbmFtZSwgdGhpcyk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuXG5cbi8qKlxuICog5re75Yqg5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7c3RyaW5nP30gZGVjbGFyYXRpb24g5aOw5piO5byPXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIsIGRlY2xhcmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW25hbWVdLnB1c2goe2ZuOiBsaXN0ZW5lciwgZGVjbGFyYXRpb246IGRlY2xhcmF0aW9ufSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnp7vpmaTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS51biA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgIHZhciBuYW1lTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbbmFtZV07XG4gICAgdmFyIGxlbiA9IG5hbWVMaXN0ZW5lcnMgJiYgbmFtZUxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCBsaXN0ZW5lciA9PT0gbmFtZUxpc3RlbmVyc1tsZW5dLmZuKSB7XG4gICAgICAgICAgICBuYW1lTGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vKipcbiAqIOa0vuWPkeS6i+S7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOS6i+S7tuWvueixoVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAobmFtZSwgZXZlbnQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGVhY2godGhpcy5saXN0ZW5lcnNbbmFtZV0sIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5mbi5jYWxsKG1lLCBldmVudCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIOiuoeeulyBjb21wdXRlZCDlsZ7mgKfnmoTlgLxcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXB1dGVkRXhwciBjb21wdXRlZOihqOi+vuW8j+S4slxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jYWxjQ29tcHV0ZWQgPSBmdW5jdGlvbiAoY29tcHV0ZWRFeHByKSB7XG4gICAgdmFyIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2NvbXB1dGVkRXhwcl07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNbY29tcHV0ZWRFeHByXSA9IHt9O1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdGhpcy5kYXRhLnNldChjb21wdXRlZEV4cHIsIHRoaXMuY29tcHV0ZWRbY29tcHV0ZWRFeHByXS5jYWxsKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gY2FsbCBnZXQgbWV0aG9kIGluIGNvbXB1dGVkIG5lZWQgYXJndW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1tleHByXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNbZXhwcl0gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jb21wdXRlZFtleHByXSAmJiAhbWUuY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUud2F0Y2goZXhwciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2NhbGNDb21wdXRlZChjb21wdXRlZEV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZGF0YS5nZXQoZXhwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIOa0vuWPkea2iOaBr1xuICog57uE5Lu25Y+v5Lul5rS+5Y+R5raI5oGv77yM5raI5oGv5bCG5rK/552A57uE5Lu25qCR5ZCR5LiK5Lyg6YCS77yM55u05Yiw6YGH5LiK56ys5LiA5Liq5aSE55CG5raI5oGv55qE57uE5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyo/fSB2YWx1ZSDmtojmga/lgLxcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcblxuICAgIHdoaWxlIChwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcGFyZW50Q29tcG9uZW50Lm1lc3NhZ2VzW25hbWVdIHx8IHBhcmVudENvbXBvbmVudC5tZXNzYWdlc1snKiddO1xuICAgICAgICBpZiAodHlwZW9mIHJlY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYWxsKFxuICAgICAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB7dGFyZ2V0OiB0aGlzLCB2YWx1ZTogdmFsdWUsIG5hbWU6IG5hbWV9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRDb21wb25lbnQgPSBwYXJlbnRDb21wb25lbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cbn07XG5cbi8qKlxuICog6I635Y+W57uE5Lu25YaF6YOo55qEIHNsb3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG5hbWUgc2xvdOWQjeensO+8jOepuuS4umRlZmF1bHQgc2xvdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2xvdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBlYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gNiAmJiBjaGlsZC5vd25lciA9PT0gbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNOYW1lZCAmJiBjaGlsZC5uYW1lID09PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8ICFjaGlsZC5pc05hbWVkICYmICFuYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblRyYXZlcnNhbChjaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIOiOt+WPluW4puaciSBzYW4tcmVmIOaMh+S7pOeahOWtkOe7hOS7tuW8leeUqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWtkOe7hOS7tueahOW8leeUqOWQjVxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlZlRhcmdldDtcbiAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50VHJhdmVyc2FsKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiAhcmVmVGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcikgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuc291cmNlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICFyZWZUYXJnZXQgJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgIXJlZlRhcmdldCAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiByZWZUYXJnZXQ7XG59O1xuXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheT99IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICB2YXIgbmVlZFJlbG9hZEZvclNsb3QgPSBmYWxzZTtcbiAgICB0aGlzLl9ub3RpZnlOZWVkUmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZWVkUmVsb2FkRm9yU2xvdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zcmNTYmluZERhdGEgPSBub2RlU0JpbmRVcGRhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZGlyZWN0aXZlcy5iaW5kLFxuICAgICAgICAgICAgICAgIHRoaXMuX3NyY1NiaW5kRGF0YSxcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlcyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgaW4gbWUuc291cmNlLmhvdHNwb3QucHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLmRhdGEuc2V0KG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBtZS5vd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlRXhwciA9IGNoYW5nZS5leHByO1xuXG4gICAgICAgICAgICBlYWNoKG1lLmJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIHNldEV4cHIgPSBiaW5kSXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVFeHByID0gYmluZEl0ZW0uZXhwcjtcblxuICAgICAgICAgICAgICAgIGlmICghaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUsIHNldEV4cHIpXG4gICAgICAgICAgICAgICAgICAgICYmIChyZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHVwZGF0ZUV4cHIsIG1lLnNjb3BlKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZXRFeHByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNvbmNhdChjaGFuZ2VFeHByLnBhdGhzLnNsaWNlKHVwZGF0ZUV4cHIucGF0aHMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVFeHByID0gY2hhbmdlRXhwcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA+PSAyICYmIGNoYW5nZS50eXBlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5kYXRhLnNwbGljZShzZXRFeHByLCBbY2hhbmdlLmluZGV4LCBjaGFuZ2UuZGVsZXRlQ291bnRdLmNvbmNhdChjaGFuZ2UuaW5zZXJ0aW9ucyksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbWUub3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmRhdGEuc2V0KHNldEV4cHIsIGV2YWxFeHByKHVwZGF0ZUV4cHIsIG1lLnNjb3BlLCBtZS5vd25lciksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbWUub3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKG1lLnNvdXJjZVNsb3ROYW1lUHJvcHMsIGZ1bmN0aW9uIChiaW5kSXRlbSkge1xuICAgICAgICAgICAgICAgIG5lZWRSZWxvYWRGb3JTbG90ID0gbmVlZFJlbG9hZEZvclNsb3QgfHwgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgYmluZEl0ZW0uZXhwciwgbWUuc2NvcGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhbmVlZFJlbG9hZEZvclNsb3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5lZWRSZWxvYWRGb3JTbG90KSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U291cmNlU2xvdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlcGFpbnRDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNsb3RDaGlsZHJlbkxlbiA9IHRoaXMuc2xvdENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChzbG90Q2hpbGRyZW5MZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90Q2hpbGQgPSB0aGlzLnNsb3RDaGlsZHJlbltzbG90Q2hpbGRyZW5MZW5dO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsb3RDaGlsZC5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90Q2hpbGRyZW4uc3BsaWNlKHNsb3RDaGlsZHJlbkxlbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3RDaGlsZC5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3RDaGlsZC5fdXBkYXRlKGNoYW5nZXMsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYXRhQ2hhbmdlcyA9IHRoaXMuX2RhdGFDaGFuZ2VzO1xuICAgIGlmIChkYXRhQ2hhbmdlcykge1xuICAgICAgICB0aGlzLl9kYXRhQ2hhbmdlcyA9IG51bGw7XG5cbiAgICAgICAgdmFyIGlmRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICB2YXIgZXhwZWN0Tm9kZVR5cGUgPSAoIWlmRGlyZWN0aXZlIHx8IGV2YWxFeHByKGlmRGlyZWN0aXZlLnZhbHVlLCB0aGlzLmRhdGEsIHRoaXMpKSA/IDEgOiA4O1xuXG4gICAgICAgIHRoaXMuX3NiaW5kRGF0YSA9IG5vZGVTQmluZFVwZGF0ZShcbiAgICAgICAgICAgIHRoaXMuYU5vZGUuZGlyZWN0aXZlcy5iaW5kLFxuICAgICAgICAgICAgdGhpcy5fc2JpbmREYXRhLFxuICAgICAgICAgICAgdGhpcy5kYXRhLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGRhdGFDaGFuZ2VzLFxuICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmVsLm5vZGVUeXBlICE9PSAxIHx8IChuYW1lIGluIG1lLmFOb2RlLmhvdHNwb3QucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnZXRQcm9wSGFuZGxlcihtZS50YWdOYW1lLCBuYW1lKShtZS5lbCwgdmFsdWUsIG5hbWUsIG1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5lbC5ub2RlVHlwZSA9PT0gZXhwZWN0Tm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGlmIChleHBlY3ROb2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBkeW5hbWljUHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHluYW1pY1Byb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gZHluYW1pY1Byb3BzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGF0YUNoYW5nZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBkYXRhQ2hhbmdlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5leHByLCB0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgcHJvcC5oaW50RXhwciAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5oaW50RXhwciwgdGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyKHRoaXMuZWwsIGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5kYXRhLCB0aGlzKSwgcHJvcC5uYW1lLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLl91cGRhdGUoZGF0YUNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKG5lZWRSZWxvYWRGb3JTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRTb3VyY2VTbG90cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXBhaW50Q2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBhaW50KGV4cGVjdE5vZGVUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbXBsaWNpdENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmltcGxpY2l0Q2hpbGRyZW5baV0uX3VwZGF0ZShkYXRhQ2hhbmdlcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b1BoYXNlKCd1cGRhdGVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3duZXIgJiYgdGhpcy5fdXBkYXRlQmluZHhPd25lcihkYXRhQ2hhbmdlcykpIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIuX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5TmVlZFJlbG9hZCA9IG51bGw7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGVCaW5keE93bmVyID0gZnVuY3Rpb24gKGRhdGFDaGFuZ2VzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgeGJpbmRVcGVkO1xuXG4gICAgZWFjaChkYXRhQ2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBlYWNoKG1lLmJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VFeHByID0gY2hhbmdlLmV4cHI7XG4gICAgICAgICAgICBpZiAoYmluZEl0ZW0ueFxuICAgICAgICAgICAgICAgICYmICFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBtZS5vd25lcilcbiAgICAgICAgICAgICAgICAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBwYXJzZUV4cHIoYmluZEl0ZW0ubmFtZSksIG1lLmRhdGEpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlU2NvcGVFeHByID0gYmluZEl0ZW0uZXhwcjtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwci5wYXRocy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmluZEl0ZW0uZXhwci5wYXRocy5jb25jYXQoY2hhbmdlRXhwci5wYXRocy5zbGljZSgxKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB4YmluZFVwZWQgPSAxO1xuICAgICAgICAgICAgICAgIG1lLnNjb3BlLnNldChcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2NvcGVFeHByLFxuICAgICAgICAgICAgICAgICAgICBldmFsRXhwcihjaGFuZ2VFeHByLCBtZS5kYXRhLCBtZSksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHhiaW5kVXBlZDtcbn07XG5cbi8qKlxuICog6YeN5paw57uY5Yi257uE5Lu255qE5YaF5a65XG4gKiDlvZMgZHluYW1pYyBzbG90IG5hbWUg5Y+R55Sf5Y+Y5pu05oiWIHNsb3Qg5Yy56YWN5Y+R55Sf5Y+Y5YyW5pe277yM6YeN5paw57uY5Yi2XG4gKiDlnKjnu4Tku7bnuqfliKvph43nu5jmnInngrnnspfmmrTvvIzkvYbmmK/og73kv53or4Hop4blm77nu5PmnpzmraPnoa7mgKdcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fcmVwYWludENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcy5jaGlsZHJlbiwgMCwgMSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgICAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5hTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZU5vZGUodGhpcy5hTm9kZS5jaGlsZHJlbltpXSwgdGhpcywgdGhpcy5kYXRhLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5hdHRhY2godGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKlxuICog5Yid5aeL5YyW57uE5Lu25YaF6YOo55uR5ZCs5pWw5o2u5Y+Y5YyWXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2luaXREYXRhQ2hhbmdlciA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdGhpcy5fZGF0YUNoYW5nZXIgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgIGlmIChtZS5fYWZ0ZXJMaWZlLmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIGlmICghbWUuX2RhdGFDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgbmV4dFRpY2sobWUuX3VwZGF0ZSwgbWUpO1xuICAgICAgICAgICAgICAgIG1lLl9kYXRhQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5fZGF0YUNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lLmxpZmVDeWNsZS5pbml0ZWQgJiYgbWUub3duZXIpIHtcbiAgICAgICAgICAgIG1lLl91cGRhdGVCaW5keE93bmVyKFtjaGFuZ2VdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRhdGEubGlzdGVuKHRoaXMuX2RhdGFDaGFuZ2VyKTtcbn07XG5cblxuLyoqXG4gKiDnm5HlkKznu4Tku7bnmoTmlbDmja7lj5jljJZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YU5hbWUg5Y+Y5YyW55qE5pWw5o2u6aG5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIChkYXRhTmFtZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgZGF0YUV4cHIgPSBwYXJzZUV4cHIoZGF0YU5hbWUpO1xuXG4gICAgdGhpcy5kYXRhLmxpc3RlbihiaW5kKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBkYXRhRXhwciwgdGhpcy5kYXRhKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmFsRXhwcihkYXRhRXhwciwgdGhpcy5kYXRhLCB0aGlzKSwgY2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpKTtcbn07XG5cblxuLyoqXG4gKiDlsIbnu4Tku7ZhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHRoaXMuX2F0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgICAgIC8vIGVsZW1lbnQg6YO95piv5YaF6YOo5Yib5bu655qE77yM5Y+q5pyJ5Yqo5oCB5Yib5bu655qEIGNvbXBvbmVudCDmiY3kvJrov5vlhaXov5nkuKrliIbmlK9cbiAgICAgICAgaWYgKHRoaXMub3duZXIgJiYgIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLmltcGxpY2l0Q2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX2F0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB2YXIgaWZEaXJlY3RpdmUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG5cbiAgICBpZiAoIWlmRGlyZWN0aXZlIHx8IGV2YWxFeHByKGlmRGlyZWN0aXZlLnZhbHVlLCB0aGlzLmRhdGEsIHRoaXMpKSB7XG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZU5vZGUgPSB0aGlzLmFOb2RlLmhvdHNwb3Quc291cmNlTm9kZTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMuYU5vZGUucHJvcHM7XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbCA9IHNvdXJjZU5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3JlYXRlRWwodGhpcy50YWdOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NiaW5kRGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9zYmluZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NiaW5kRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wSGFuZGxlcih0aGlzLnRhZ05hbWUsIGtleSkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYmluZERhdGFba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5kYXRhLCB0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSB8fCAhYmFzZVByb3BzW3Byb3AubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5oYW5kbGVyKHRoaXMuZWwsIHZhbHVlLCBwcm9wLm5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdG9QaGFzZSgnY3JlYXRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZW50UmVhZHkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5hTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRBTm9kZSA9IHRoaXMuYU5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRBTm9kZS5DbGF6elxuICAgICAgICAgICAgICAgICAgICA/IG5ldyBjaGlsZEFOb2RlLkNsYXp6KGNoaWxkQU5vZGUsIHRoaXMsIHRoaXMuZGF0YSwgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgOiBjcmVhdGVOb2RlKGNoaWxkQU5vZGUsIHRoaXMsIHRoaXMuZGF0YSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5hdHRhY2godGhpcy5lbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWFkeSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbn07XG5cbi8qKlxuICog6YeN5paw5Yi35paw57uE5Lu26KeG5Zu+XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3JlcGFpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLmNoaWxkcmVuLCAxLCAxKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zbG90Q2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuX2NvbnRlbnRSZWFkeSA9IDA7XG5cbiAgICB2YXIgbGVuID0gdGhpcy5fZWxGbnMubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLl9lbEZuc1tsZW5dO1xuICAgICAgICB1bih0aGlzLmVsLCBmblswXSwgZm5bMV0sIGZuWzJdKTtcbiAgICB9XG4gICAgdGhpcy5fZWxGbnMgPSBbXTtcblxuICAgIHZhciBiZWZvcmVFbCA9IHRoaXMuZWw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgdGhpcy5fYXR0YWNoKGJlZm9yZUVsLnBhcmVudE5vZGUsIGJlZm9yZUVsKTtcblxuICAgIHJlbW92ZUVsKGJlZm9yZUVsKTtcbn07XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZGV0YWNoID0gZWxlbWVudE93bkRldGFjaDtcbkNvbXBvbmVudC5wcm90b3R5cGUuZGlzcG9zZSA9IGVsZW1lbnRPd25EaXNwb3NlO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fb25FbCA9IGVsZW1lbnRPd25PbkVsO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fYXR0YWNoZWQgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5Db21wb25lbnQucHJvdG90eXBlLl9sZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5sZWF2ZURpc3Bvc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnVubGlzdGVuKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2RhdGFDaGFuZ2VzID0gbnVsbDtcblxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuaW1wbGljaXRDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxpY2l0Q2hpbGRyZW5bbGVuXS5kaXNwb3NlKDAsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmltcGxpY2l0Q2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVNsb3RzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlU2xvdE5hbWVQcm9wcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIOi/memHjOS4jeeUqOaMqOS4quiwg+eUqCBkaXNwb3NlIOS6hu+8jOWboOS4uiBjaGlsZHJlbiDph4rmlL7pk77kvJrosIPnlKjnmoRcbiAgICAgICAgICAgIHRoaXMuc2xvdENoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltsZW5dLmRpc3Bvc2UoMSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxlbiA9IHRoaXMuX2VsRm5zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IHRoaXMuX2VsRm5zW2xlbl07XG4gICAgICAgICAgICAgICAgdW4odGhpcy5lbCwgZm5bMF0sIGZuWzFdLCBmblsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9lbEZucyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dFRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnB1dFRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dFRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlwYXJlbnTvvIzor7TmmI7mmK/kuIDkuKpyb290IGNvbXBvbmVudO+8jOS4gOWumuimgeS7jmRvbeagkeS4rXJlbW92ZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc3Bvc2VOb0RldGFjaCB8fCAhdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcblxuICAgICAgICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuX3RvUGhhc2UoJ2Rpc3Bvc2VkJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vbmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25kaXNwb3NlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdkZXRhY2hlZCcpO1xuICAgIH1cbn07XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg5Yib5bu657uE5Lu257G7XG4gKi9cblxuLy8gdmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50Jyk7XG4vLyB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi91dGlsL2luaGVyaXRzJyk7XG5cbi8qKlxuICog5Yib5bu657uE5Lu257G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIOe7hOS7tuexu+eahOaWueazleihqFxuICogQHBhcmFtIHtGdW5jdGlvbj19IFN1cGVyQ29tcG9uZW50IOeItue7hOS7tuexu1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGRlZmluZUNvbXBvbmVudChwcm90bywgU3VwZXJDb21wb25lbnQpIHtcbiAgICAvLyDlpoLmnpzkvKDlhaXkuIDkuKrkuI3mmK8gc2FuIGNvbXBvbmVudCDnmoQgY29uc3RydWN0b3LvvIznm7TmjqXov5Tlm57kuI3mmK/nu4Tku7bmnoTpgKDlh73mlbBcbiAgICAvLyDov5nnp43lnLrmma/lr7zoh7TnmoTplJnor68gc2FuIOS4jeS6iOiAg+iZkVxuICAgIGlmICh0eXBlb2YgcHJvdG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKHR5cGVvZiBwcm90byAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEFMXSBkZWZpbmVDb21wb25lbnQgbmVlZCBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmdW5jdGlvbiBDb21wb25lbnRDbGFzcyhvcHRpb24pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBvcHRpb24pO1xuICAgIH1cblxuICAgIENvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIGluaGVyaXRzKENvbXBvbmVudENsYXNzLCBTdXBlckNvbXBvbmVudCB8fCBDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudENsYXNzO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDnu4Tku7ZMb2FkZXLnsbtcbiAqL1xuXG4vLyB2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCcuLi91dGlsL25leHQtdGljaycpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuXG4vKipcbiAqIOe7hOS7tkxvYWRlcuexu1xuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxvYWQgbG9hZOaWueazlVxuICogQHBhcmFtIHtGdW5jdGlvbj19IHBsYWNlaG9sZGVyIGxvYWRpbmfov4fnqIvkuK3muLLmn5PnmoTnu4Tku7ZcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBmYWxsYmFjayBsb2Fk5aSx6LSl5pe25riy5p+T55qE57uE5Lu2XG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudExvYWRlcihsb2FkLCBwbGFjZWhvbGRlciwgZmFsbGJhY2spIHtcbiAgICB0aGlzLmxvYWQgPSBsb2FkO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB0aGlzLmZhbGxiYWNrID0gZmFsbGJhY2s7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG5cbi8qKlxuICog5byA5aeL5Yqg6L2957uE5Lu2XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25sb2FkIOe7hOS7tuWKoOi9veWujOaIkOebkeWQrOWHveaVsFxuICovXG5Db21wb25lbnRMb2FkZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKG9ubG9hZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9ubG9hZChtZS5Db21wb25lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG9ubG9hZCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChvbmxvYWQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XG5cbiAgICAgICAgICAgIHZhciBzdGFydExvYWQgPSB0aGlzLmxvYWQoKTtcbiAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gKFJlYWxDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBtZS5kb25lKFJlYWxDb21wb25lbnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHN0YXJ0TG9hZCAmJiB0eXBlb2Ygc3RhcnRMb2FkLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdGFydExvYWQudGhlbihkb25lLCBkb25lKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOWujOaIkOe7hOS7tuWKoOi9vVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAqL1xuQ29tcG9uZW50TG9hZGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gKENvbXBvbmVudENsYXNzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgQ29tcG9uZW50Q2xhc3MgPSBDb21wb25lbnRDbGFzcyB8fCB0aGlzLmZhbGxiYWNrO1xuICAgIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50Q2xhc3M7XG5cbiAgICBlYWNoKHRoaXMubGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoQ29tcG9uZW50Q2xhc3MpO1xuICAgIH0pO1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50TG9hZGVyO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUg57yW6K+R57uE5Lu257G7XG4gKi9cblxuLy8gdmFyIHdhcm4gPSByZXF1aXJlKCcuLi91dGlsL3dhcm4nKTtcbi8vIHZhciBwYXJzZVRlbXBsYXRlID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRleHQnKTtcbi8vIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL2RlZmluZS1jb21wb25lbnQnKTtcbi8vIHZhciBDb21wb25lbnRMb2FkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudC1sb2FkZXInKTtcblxuXG4vKipcbiAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICovXG5mdW5jdGlvbiBjb21waWxlQ29tcG9uZW50KENvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlO1xuXG4gICAgLy8gcHJlIGRlZmluZSBjb21wb25lbnRzIGNsYXNzXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgaWYgKCFwcm90by5oYXNPd25Qcm9wZXJ0eSgnX2NtcHRSZWFkeScpKSB7XG4gICAgICAgIHByb3RvLmNvbXBvbmVudHMgPSBDb21wb25lbnRDbGFzcy5jb21wb25lbnRzIHx8IHByb3RvLmNvbXBvbmVudHMgfHwge307XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gcHJvdG8uY29tcG9uZW50cztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBjb21wb25lbnRzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgPT09ICdvYmplY3QnICYmICEoY29tcG9uZW50Q2xhc3MgaW5zdGFuY2VvZiBDb21wb25lbnRMb2FkZXIpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trZXldID0gZGVmaW5lQ29tcG9uZW50KGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudENsYXNzID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tleV0gPSBDb21wb25lbnRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvLl9jbXB0UmVhZHkgPSAxO1xuICAgIH1cblxuXG4gICAgLy8gcHJlIGNvbXBpbGUgdGVtcGxhdGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KCdhTm9kZScpKSB7XG4gICAgICAgIHZhciBhTm9kZSA9IHBhcnNlVGVtcGxhdGUoQ29tcG9uZW50Q2xhc3MudGVtcGxhdGUgfHwgcHJvdG8udGVtcGxhdGUsIHtcbiAgICAgICAgICAgIHRyaW1XaGl0ZXNwYWNlOiBwcm90by50cmltV2hpdGVzcGFjZSB8fCBDb21wb25lbnRDbGFzcy50cmltV2hpdGVzcGFjZSxcbiAgICAgICAgICAgIGRlbGltaXRlcnM6IHByb3RvLmRlbGltaXRlcnMgfHwgQ29tcG9uZW50Q2xhc3MuZGVsaW1pdGVyc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGFOb2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCAmJiBmaXJzdENoaWxkLnRleHRFeHByKSB7XG4gICAgICAgICAgICBmaXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIGlmIChhTm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgIWZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHdhcm4oJ0NvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGhhdmUgYSByb290IGVsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgcHJvdG8uYU5vZGUgPSBmaXJzdENoaWxkID0gZmlyc3RDaGlsZCB8fCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fSxcbiAgICAgICAgICAgIHByb3BzOiBbXSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZmlyc3RDaGlsZC50YWdOYW1lID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICBmaXJzdENoaWxkLnRhZ05hbWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3RvLmF1dG9GaWxsU3R5bGVBbmRJZCAhPT0gZmFsc2UgJiYgQ29tcG9uZW50Q2xhc3MuYXV0b0ZpbGxTdHlsZUFuZElkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRvRXh0cmFQcm9wID0ge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IDAsIHN0eWxlOiAwLCBpZDogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGxlbiA9IGZpcnN0Q2hpbGQucHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBmaXJzdENoaWxkLnByb3BzW2xlbl07XG4gICAgICAgICAgICAgICAgaWYgKHRvRXh0cmFQcm9wW3Byb3AubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0b0V4dHJhUHJvcFtwcm9wLm5hbWVdID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZC5wcm9wcy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvRXh0cmFQcm9wLmlkID0gdG9FeHRyYVByb3AuaWQgfHwgeyBuYW1lOiAnaWQnLCBleHByOiBwYXJzZUV4cHIoJ2lkJykgfTtcblxuICAgICAgICAgICAgaWYgKHRvRXh0cmFQcm9wWydjbGFzcyddKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzRXhwciA9IHBhcnNlVGV4dCgne3tjbGFzcyB8IF94Y2xhc3N9fScpLnNlZ3NbMF07XG4gICAgICAgICAgICAgICAgY2xhc3NFeHByLmZpbHRlcnNbMF0uYXJncy5wdXNoKHRvRXh0cmFQcm9wWydjbGFzcyddLmV4cHIpO1xuICAgICAgICAgICAgICAgIHRvRXh0cmFQcm9wWydjbGFzcyddLmV4cHIgPSBjbGFzc0V4cHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0V4dHJhUHJvcFsnY2xhc3MnXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogcGFyc2VUZXh0KCd7e2NsYXNzIHwgX2NsYXNzfX0nKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b0V4dHJhUHJvcC5zdHlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZUV4cHIgPSBwYXJzZVRleHQoJ3t7c3R5bGUgfCBfeHN0eWxlfX0nKS5zZWdzWzBdO1xuICAgICAgICAgICAgICAgIHN0eWxlRXhwci5maWx0ZXJzWzBdLmFyZ3MucHVzaCh0b0V4dHJhUHJvcC5zdHlsZS5leHByKTtcbiAgICAgICAgICAgICAgICB0b0V4dHJhUHJvcC5zdHlsZS5leHByID0gc3R5bGVFeHByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3Auc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdHlsZScsXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IHBhcnNlVGV4dCgne3tzdHlsZSB8IF9zdHlsZX19JylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLnByb3BzLnB1c2goXG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3BbJ2NsYXNzJ10sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3Auc3R5bGUsXG4gICAgICAgICAgICAgICAgdG9FeHRyYVByb3AuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliKTmlq3mmK/lkKbnu5PmnZ/moalcbiAqL1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOWIpOaWreaYr+WQpue7k+adn+ahqVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SFRNTENvbW1lbnR9IHRhcmdldCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbmRTdHVtcCh0YXJnZXQsIHR5cGUpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm5vZGVUeXBlID09PSA4ICYmIHRhcmdldC5kYXRhID09PSAnL3MtJyArIHR5cGU7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNFbmRTdHVtcDtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIHRleHQg6IqC54K557G7XG4gKi9cblxuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgd2FyblNldEhUTUwgPSByZXF1aXJlKCcuL3dhcm4tc2V0LWh0bWwnKTtcbi8vIHZhciBpc0VuZFN0dW1wID0gcmVxdWlyZSgnLi9pcy1lbmQtc3R1bXAnKTtcbi8vIHZhciBnZXROb2RlUGF0aCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtcGF0aCcpO1xuXG5cbi8qKlxuICogdGV4dCDoioLngrnnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gVGV4dE5vZGUoYU5vZGUsIHBhcmVudCwgc2NvcGUsIG93bmVyLCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuICAgICAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudE5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5kYXRhID09PSAncy10ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSB0aGlzLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIFRleHQgZW5kIGZsYWcgbm90IGZvdW5kLiBcXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW5kU3R1bXAoY3VycmVudE5vZGUsICd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5UZXh0Tm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSAxO1xuXG4vKipcbiAqIOWwhnRleHQgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBldmFsRXhwcih0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICB2YXIgdGVtcEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRlbXBGbGFnLCB0aGlzLmVsKTtcbiAgICAgICAgdGVtcEZsYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMuY29udGVudCk7XG4gICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBGbGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNvbnRlbnQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOmUgOavgSB0ZXh0IOiKgueCuVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIChub0RldGFjaCkge1xuICAgIGlmICghbm9EZXRhY2gpIHtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuc2VsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLnNlbCA9IG51bGw7XG59O1xuXG52YXIgdGV4dFVwZGF0ZVByb3AgPSBpc0Jyb3dzZXJcbiAgICAmJiAodHlwZW9mIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKS50ZXh0Q29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyAndGV4dENvbnRlbnQnXG4gICAgICAgIDogJ2RhdGEnKTtcblxuLyoqXG4gKiDmm7TmlrAgdGV4dCDoioLngrnnmoTop4blm75cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuYU5vZGUudGV4dEV4cHIudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSBjaGFuZ2VzLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZXNbbGVuXS5leHByLCB0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlKSkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmFsRXhwcih0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICAgICAgaWYgKHRleHQgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRSZW1vdmVFbCA9IHRoaXMuc2VsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0YXJ0UmVtb3ZlRWwgIT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXJnZXQgPSBzdGFydFJlbW92ZUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRSZW1vdmVFbCA9IHN0YXJ0UmVtb3ZlRWwubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbChyZW1vdmVUYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgd2FyblNldEhUTUwocGFyZW50RWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRlbXBGbGFnLCB0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEZsYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRmxhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsW3RleHRVcGRhdGVQcm9wXSA9IHRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBUZXh0Tm9kZTtcblxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBmaWxlIOWwhuayoeaciSByb290IOWPquaciSBjaGlsZHJlbiDnmoTlhYPntKAgYXR0YWNoIOWIsOmhtemdolxuICovXG5cblxuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG5cbi8qKlxuICog5bCG5rKh5pyJIHJvb3Qg5Y+q5pyJIGNoaWxkcmVuIOeahOWFg+e0oCBhdHRhY2gg5Yiw6aG16Z2iXG4gKiDkuLvopoHnlKjkuo4gc2xvdCDlkowgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYU5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZShcbiAgICAgICAgICAgIHRoaXMuYU5vZGUuY2hpbGRyZW5baV0sXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jaGlsZFNjb3BlIHx8IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICB0aGlzLmNoaWxkT3duZXIgfHwgdGhpcy5vd25lclxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmF0dGFjaGVkO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgc2xvdCDoioLngrnnsbtcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBub2RlU0JpbmRJbml0ID0gcmVxdWlyZSgnLi9ub2RlLXMtYmluZC1pbml0Jyk7XG4vLyB2YXIgbm9kZVNCaW5kVXBkYXRlID0gcmVxdWlyZSgnLi9ub2RlLXMtYmluZC11cGRhdGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2ggPSByZXF1aXJlKCcuL25vZGUtb3duLW9ubHktY2hpbGRyZW4tYXR0YWNoJyk7XG5cblxuLyoqXG4gKiBzbG90IOiKgueCueexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge01vZGVsfSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBTbG90Tm9kZShhTm9kZSwgcGFyZW50LCBzY29wZSwgb3duZXIsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSA1XG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKys7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAvLyBjYWxjIHNsb3QgbmFtZVxuICAgIHRoaXMubmFtZUJpbmQgPSBnZXRBTm9kZVByb3AoYU5vZGUsICduYW1lJyk7XG4gICAgaWYgKHRoaXMubmFtZUJpbmQpIHtcbiAgICAgICAgdGhpcy5pc05hbWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXZhbEV4cHIodGhpcy5uYW1lQmluZC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB9XG5cbiAgICAvLyBjYWxjIGFOb2RlIGNoaWxkcmVuXG4gICAgdmFyIHNvdXJjZVNsb3RzID0gb3duZXIuc291cmNlU2xvdHM7XG4gICAgdmFyIG1hdGNoZWRTbG90cztcbiAgICBpZiAoc291cmNlU2xvdHMpIHtcbiAgICAgICAgbWF0Y2hlZFNsb3RzID0gdGhpcy5pc05hbWVkID8gc291cmNlU2xvdHMubmFtZWRbdGhpcy5uYW1lXSA6IHNvdXJjZVNsb3RzLm5vbmFtZTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlZFNsb3RzKSB7XG4gICAgICAgIHRoaXMuaXNJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5hTm9kZSA9IHtcbiAgICAgICAgZGlyZWN0aXZlczogYU5vZGUuZGlyZWN0aXZlcyxcbiAgICAgICAgcHJvcHM6IFtdLFxuICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICBjaGlsZHJlbjogbWF0Y2hlZFNsb3RzIHx8IGFOb2RlLmNoaWxkcmVuLnNsaWNlKDApLFxuICAgICAgICB2YXJzOiBhTm9kZS52YXJzXG4gICAgfTtcblxuICAgIHRoaXMuX3NiaW5kRGF0YSA9IG5vZGVTQmluZEluaXQoYU5vZGUuZGlyZWN0aXZlcy5iaW5kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgIC8vIGNhbGMgc2NvcGVkIHNsb3QgdmFyc1xuICAgIHZhciBpbml0RGF0YTtcbiAgICBpZiAodGhpcy5fc2JpbmREYXRhKSB7XG4gICAgICAgIGluaXREYXRhID0gZXh0ZW5kKHt9LCB0aGlzLl9zYmluZERhdGEpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS52YXJzKSB7XG4gICAgICAgIGluaXREYXRhID0gaW5pdERhdGEgfHwge307XG4gICAgICAgIGVhY2goYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgIGluaXREYXRhW3Zhckl0ZW0ubmFtZV0gPSBldmFsRXhwcih2YXJJdGVtLmV4cHIsIHNjb3BlLCBvd25lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoaWxkIG93bmVyICYgY2hpbGQgc2NvcGVcbiAgICBpZiAodGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRPd25lciA9IG93bmVyLm93bmVyO1xuICAgICAgICB0aGlzLmNoaWxkU2NvcGUgPSBvd25lci5zY29wZTtcbiAgICB9XG5cbiAgICBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5pc1Njb3BlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hpbGRTY29wZSA9IG5ldyBEYXRhKGluaXREYXRhLCB0aGlzLmNoaWxkU2NvcGUgfHwgdGhpcy5zY29wZSk7XG4gICAgfVxuXG5cbiAgICBvd25lci5zbG90Q2hpbGRyZW4ucHVzaCh0aGlzKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuXG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgcmV2ZXJzZVdhbGtlci5jdXJyZW50XG4gICAgICAgICAgICA/IHJldmVyc2VXYWxrZXIudGFyZ2V0Lmluc2VydEJlZm9yZSh0aGlzLnNlbCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KVxuICAgICAgICAgICAgOiByZXZlcnNlV2Fsa2VyLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnNlbCk7XG5cbiAgICAgICAgdmFyIGFOb2RlQ2hpbGRyZW4gPSB0aGlzLmFOb2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFOb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgYU5vZGVDaGlsZHJlbltpXSxcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRTY29wZSB8fCB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRPd25lciB8fCB0aGlzLm93bmVyLFxuICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXJcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIHJldmVyc2VXYWxrZXIuY3VycmVudFxuICAgICAgICAgICAgPyByZXZlcnNlV2Fsa2VyLnRhcmdldC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KVxuICAgICAgICAgICAgOiByZXZlcnNlV2Fsa2VyLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5hdHRhY2hlZDtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblNsb3ROb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IDY7XG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+IHNsb3RcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuU2xvdE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMuY2hpbGRPd25lciA9IG51bGw7XG4gICAgdGhpcy5jaGlsZFNjb3BlID0gbnVsbDtcblxuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcy5jaGlsZHJlbiwgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG5cbiAgICBpZiAoIW5vRGV0YWNoKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICByZW1vdmVFbCh0aGlzLnNlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWwgPSBudWxsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIHRoaXMub3duZXIgPSBudWxsO1xuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuZGlzcG9zZWQ7XG5cbiAgICBpZiAodGhpcy5fb25kaXNwb3NlZCkge1xuICAgICAgICB0aGlzLl9vbmRpc3Bvc2VkKCk7XG4gICAgfVxufTtcblxuU2xvdE5vZGUucHJvdG90eXBlLmF0dGFjaCA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzRnJvbU91dGVyIOWPmOWMluS/oeaBr+aYr+WQpuadpea6kOS6jueItue7hOS7tuS5i+WklueahOe7hOS7tlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU2xvdE5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcywgaXNGcm9tT3V0ZXIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubmFtZUJpbmQgJiYgZXZhbEV4cHIodGhpcy5uYW1lQmluZC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHRoaXMub3duZXIuX25vdGlmeU5lZWRSZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0Zyb21PdXRlcikge1xuICAgICAgICBpZiAodGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2NvcGVkKSB7XG4gICAgICAgICAgICB2YXIgdmFyS2V5cyA9IHt9O1xuICAgICAgICAgICAgZWFjaCh0aGlzLmFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyS2V5c1t2YXJJdGVtLm5hbWVdID0gMTtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZFNjb3BlLnNldCh2YXJJdGVtLm5hbWUsIGV2YWxFeHByKHZhckl0ZW0uZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHNjb3BlZENoYW5nZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5fc2JpbmREYXRhID0gbm9kZVNCaW5kVXBkYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuYU5vZGUuZGlyZWN0aXZlcy5iaW5kLFxuICAgICAgICAgICAgICAgIHRoaXMuX3NiaW5kRGF0YSxcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlcyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhcktleXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkU2NvcGUuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IDEsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmICghbWUuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlYWNoKG1lLmFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdmFySXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgdmFySXRlbS5leHByLCBtZS5zY29wZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS50eXBlICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogMSwgdmFsdWU6IG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1lLmNoaWxkU2NvcGUuZ2V0KG5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVsYXRpb24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogMSwgdmFsdWU6IG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogY2hhbmdlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50OiBjaGFuZ2UuZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zOiBjaGFuZ2UuaW5zZXJ0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5fdXBkYXRlKHNjb3BlZENoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uX3VwZGF0ZShjaGFuZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNsb3ROb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgZm9yIOaMh+S7pOiKgueCueexu1xuICovXG5cbi8vIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5oZXJpdHMnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgY2hhbmdlc0lzSW5EYXRhUmVmID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2VzLWlzLWluLWRhdGEtcmVmJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBub2RlT3duU2ltcGxlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1vd24tc2ltcGxlLWRpc3Bvc2UnKTtcbi8vIHZhciBub2RlT3duQ3JlYXRlU3R1bXAgPSByZXF1aXJlKCcuL25vZGUtb3duLWNyZWF0ZS1zdHVtcCcpO1xuXG5cbi8qKlxuICog5b6q546v6aG555qE5pWw5o2u5a655Zmo57G7XG4gKlxuICogQGlubmVyXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3JFbGVtZW50IGZvcuWFg+e0oOWvueixoVxuICogQHBhcmFtIHsqfSBpdGVtIOW9k+WJjemhueeahOaVsOaNrlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOW9k+WJjemhueeahOe0ouW8lVxuICovXG5mdW5jdGlvbiBGb3JJdGVtRGF0YShmb3JFbGVtZW50LCBpdGVtLCBpbmRleCkge1xuICAgIHRoaXMucGFyZW50ID0gZm9yRWxlbWVudC5zY29wZTtcbiAgICB0aGlzLnJhdyA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICB0aGlzLmRpcmVjdGl2ZSA9IGZvckVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgdGhpcy5pbmRleE5hbWUgPSB0aGlzLmRpcmVjdGl2ZS5pbmRleCB8fCAnJGluZGV4JztcblxuICAgIHRoaXMucmF3W3RoaXMuZGlyZWN0aXZlLml0ZW1dID0gaXRlbTtcbiAgICB0aGlzLnJhd1t0aGlzLmluZGV4TmFtZV0gPSBpbmRleDtcbn1cblxuLyoqXG4gKiDlsIbmlbDmja7mk43kvZznmoTooajovr7lvI/vvIzovazmjaLmiJDkuLrlr7lwYXJlbnTmlbDmja7mk43kvZznmoTooajovr7lvI9cbiAqIOS4u+imgeaYr+WvuWl0ZW3lkoxpbmRleOi/m+ihjOWkhOeQhlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5Gb3JJdGVtRGF0YS5wcm90b3R5cGUuZXhwclJlc29sdmUgPSBmdW5jdGlvbiAoZXhwcikge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUl0ZW0oZXhwcikge1xuICAgICAgICBpZiAoZXhwci50eXBlID09PSA0ICYmIGV4cHIucGF0aHNbMF0udmFsdWUgPT09IGRpcmVjdGl2ZS5pdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLnZhbHVlLnBhdGhzLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5yYXdbbWUuaW5kZXhOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByLnBhdGhzLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIGV4cHIgPSByZXNvbHZlSXRlbShleHByKTtcblxuICAgIHZhciByZXNvbHZlZFBhdGhzID0gW107XG5cbiAgICBlYWNoKGV4cHIucGF0aHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJlc29sdmVkUGF0aHMucHVzaChcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gNCAmJiBpdGVtLnBhdGhzWzBdLnZhbHVlID09PSBtZS5pbmRleE5hbWVcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1lLnJhd1ttZS5pbmRleE5hbWVdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogcmVzb2x2ZUl0ZW0oaXRlbSlcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihyZXNvbHZlZFBhdGhzKTtcbn07XG5cbi8vIOS7o+eQhuaVsOaNruaTjeS9nOaWueazlVxuaW5oZXJpdHMoRm9ySXRlbURhdGEsIERhdGEpO1xuZWFjaChcbiAgICBbJ3NldCcsICdyZW1vdmUnLCAndW5zaGlmdCcsICdzaGlmdCcsICdwdXNoJywgJ3BvcCcsICdzcGxpY2UnXSxcbiAgICBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIEZvckl0ZW1EYXRhLnByb3RvdHlwZVsnXycgKyBtZXRob2RdID0gRGF0YS5wcm90b3R5cGVbbWV0aG9kXTtcblxuICAgICAgICBGb3JJdGVtRGF0YS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICBleHByID0gdGhpcy5leHByUmVzb2x2ZShwYXJzZUV4cHIoZXhwcikpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRbbWV0aG9kXS5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCxcbiAgICAgICAgICAgICAgICBbZXhwcl0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgIH1cbik7XG5cbi8qKlxuICogZm9yIOaMh+S7pOiKgueCueexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge01vZGVsfSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBGb3JOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSA1XG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKys7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5wYXJhbSA9IGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG4gICAgdGhpcy5pdGVtUGF0aHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wYXJhbS5pdGVtXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgdGhpcy5pdGVtRXhwciA9IHtcbiAgICAgICAgdHlwZTogNCxcbiAgICAgICAgcGF0aHM6IHRoaXMuaXRlbVBhdGhzLFxuICAgICAgICByYXc6IHRoaXMucGFyYW0uaXRlbVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wYXJhbS5pbmRleCkge1xuICAgICAgICB0aGlzLmluZGV4RXhwciA9IGNyZWF0ZUFjY2Vzc29yKFt7XG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgdmFsdWU6ICcnICsgdGhpcy5wYXJhbS5pbmRleFxuICAgICAgICB9XSk7XG4gICAgfVxuXG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgICAgICBpZiAodGhpcy5saXN0RGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYU5vZGUuZm9yUmluc2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRm9ySXRlbURhdGEodGhpcywgdGhpcy5saXN0RGF0YVtpXSwgaSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXJcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmxpc3REYXRhICYmIHR5cGVvZiB0aGlzLmxpc3REYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmxpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGEuaGFzT3duUHJvcGVydHkoaSkgJiYgdGhpcy5saXN0RGF0YVtpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYU5vZGUuZm9yUmluc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBGb3JJdGVtRGF0YSh0aGlzLCB0aGlzLmxpc3REYXRhW2ldLCBpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cbkZvck5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gMztcbkZvck5vZGUucHJvdG90eXBlLl9jcmVhdGUgPSBub2RlT3duQ3JlYXRlU3R1bXA7XG5Gb3JOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2i55qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgIHRoaXMubGlzdERhdGEgPSBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgIHRoaXMuX2NyZWF0ZUNoaWxkcmVuKCk7XG59O1xuXG4vKipcbiAqIOWIm+W7uuWtkOWFg+e0oFxuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5fY3JlYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuICAgIHZhciBsaXN0RGF0YSA9IHRoaXMubGlzdERhdGE7XG5cbiAgICBpZiAobGlzdERhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKHRoaXMuYU5vZGUuZm9yUmluc2VkLCB0aGlzLCBuZXcgRm9ySXRlbURhdGEodGhpcywgbGlzdERhdGFbaV0sIGkpLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxpc3REYXRhICYmIHR5cGVvZiBsaXN0RGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsaXN0RGF0YSkge1xuICAgICAgICAgICAgaWYgKGxpc3REYXRhLmhhc093blByb3BlcnR5KGkpICYmIGxpc3REYXRhW2ldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKHRoaXMuYU5vZGUuZm9yUmluc2VkLCB0aGlzLCBuZXcgRm9ySXRlbURhdGEodGhpcywgbGlzdERhdGFbaV0sIGkpLCB0aGlzLm93bmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmF0dGFjaChwYXJlbnRFbCwgdGhpcy5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgdmFyIGxpc3REYXRhID0gZXZhbEV4cHIodGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgdmFyIG9sZElzQXJyID0gdGhpcy5saXN0RGF0YSBpbnN0YW5jZW9mIEFycmF5O1xuICAgIHZhciBuZXdJc0FyciA9IGxpc3REYXRhIGluc3RhbmNlb2YgQXJyYXk7XG5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFsaXN0RGF0YSB8fCBuZXdJc0FyciAmJiBsaXN0RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3REYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9sZElzQXJyICE9PSBuZXdJc0FyciB8fCAhbmV3SXNBcnIpIHtcbiAgICAgICAgICAgIC8vIOWwseaYr+i/meS5iOaatOWKm1xuICAgICAgICAgICAgLy8g5LiN5o6o6I2Q5L2/55SoZm9y6YGN5Y6Gb2JqZWN077yM55So55qE6K+d6Ieq5bex6LSf6LSjXG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdERhdGE7XG5cbiAgICAgICAgICAgIHZhciBpc0xpc3RDaGFuZ2VkO1xuICAgICAgICAgICAgZm9yICh2YXIgY0luZGV4ID0gMDsgIWlzTGlzdENoYW5nZWQgJiYgY0luZGV4IDwgY2hhbmdlcy5sZW5ndGg7IGNJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaXNMaXN0Q2hhbmdlZCA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZXNbY0luZGV4XS5leHByLCB0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRhSG90c3BvdCA9IHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhO1xuICAgICAgICAgICAgaWYgKGlzTGlzdENoYW5nZWQgfHwgZGF0YUhvdHNwb3QgJiYgY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIGRhdGFIb3RzcG90KSkge1xuICAgICAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcG9zZUNoaWxkcmVuKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuX2NyZWF0ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBcnJheShjaGFuZ2VzLCBsaXN0RGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdERhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0RGF0YTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2hpbGRyZW4oKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOmUgOavgemHiuaUvuWtkOWFg+e0oFxuICpcbiAqIEBwYXJhbSB7QXJyYXk/fSBjaGlsZHJlbiDopoHplIDmr4HnmoTlrZDlhYPntKDvvIzpu5jorqTkuLroh6rouqvnmoRjaGlsZHJlblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg6YeK5pS+5a6M5oiQ55qE5Zue6LCD5Ye95pWwXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLl9kaXNwb3NlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuICAgIHZhciBwYXJlbnRGaXJzdENoaWxkID0gcGFyZW50RWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgcGFyZW50TGFzdENoaWxkID0gcGFyZW50RWwubGFzdENoaWxkO1xuXG4gICAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgdmFyIHZpb2xlbnRDbGVhciA9ICF0aGlzLmFOb2RlLmRpcmVjdGl2ZXMudHJhbnNpdGlvblxuICAgICAgICAmJiAhY2hpbGRyZW5cbiAgICAgICAgLy8g5piv5ZCmIHBhcmVudCDnmoTllK/kuIAgY2hpbGRcbiAgICAgICAgJiYgbGVuICYmIHBhcmVudEZpcnN0Q2hpbGQgPT09IHRoaXMuY2hpbGRyZW5bMF0uZWwgJiYgcGFyZW50TGFzdENoaWxkID09PSB0aGlzLmVsXG4gICAgICAgIDtcblxuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG5cbiAgICB2YXIgZGlzcG9zZWRDaGlsZENvdW50ID0gMDtcbiAgICBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAvLyDosIPnlKjlhaXlj6PlpITlt7Lkv53or4HmraTlpITlv4XmnInpnIDopoHooqvliKDpmaTnmoQgY2hpbGRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBkaXNwb3NlQ2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAodmlvbGVudENsZWFyKSB7XG4gICAgICAgICAgICBkaXNwb3NlQ2hpbGQgJiYgZGlzcG9zZUNoaWxkLmRpc3Bvc2UodmlvbGVudENsZWFyLCB2aW9sZW50Q2xlYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpc3Bvc2VDaGlsZCkge1xuICAgICAgICAgICAgZGlzcG9zZUNoaWxkLl9vbmRpc3Bvc2VkID0gY2hpbGREaXNwb3NlZDtcbiAgICAgICAgICAgIGRpc3Bvc2VDaGlsZC5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZERpc3Bvc2VkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlvbGVudENsZWFyKSB7XG4gICAgICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChpZSkge1xuICAgICAgICAgICAgcGFyZW50RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgICAgIHBhcmVudEVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgICAgICB9XG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGlsZERpc3Bvc2VkKCkge1xuICAgICAgICBkaXNwb3NlZENoaWxkQ291bnQrKztcbiAgICAgICAgaWYgKGRpc3Bvc2VkQ2hpbGRDb3VudCA+PSBsZW4pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Gb3JOb2RlLnByb3RvdHlwZS5vcHRpID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiAvY2hyb21lXFwvWzAtOV0rL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbi8qKlxuICog5pWw57uE57G75Z6L55qE6KeG5Zu+5pu05pawXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqIEBwYXJhbSB7QXJyYXl9IG5ld0xpc3Qg5paw5pWw57uE5pWw5o2uXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLl91cGRhdGVBcnJheSA9IGZ1bmN0aW9uIChjaGFuZ2VzLCBuZXdMaXN0KSB7XG4gICAgdmFyIG9sZENoaWxkcmVuTGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIGNoaWxkcmVuQ2hhbmdlcyA9IG5ldyBBcnJheShvbGRDaGlsZHJlbkxlbik7XG5cbiAgICBmdW5jdGlvbiBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW5DaGFuZ2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuTmVlZFVwZGF0ZSA9IG51bGw7XG4gICAgICAgIGlzT25seURpc3Bvc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgZGlzcG9zZUNoaWxkcmVuID0gW107XG5cbiAgICAvLyDmjqfliLbliJfooajmmK/lkKbmlbTkvZPmm7TmlrDnmoTlj5jph49cbiAgICB2YXIgaXNDaGlsZHJlblJlYnVpbGQ7XG5cbiAgICAvL1xuICAgIHZhciBpc09ubHlEaXNwb3NlID0gdHJ1ZTtcblxuICAgIHZhciBjaGlsZHJlbk5lZWRVcGRhdGUgPSB7fTtcblxuICAgIHZhciBuZXdMZW4gPSBuZXdMaXN0Lmxlbmd0aDtcbiAgICB2YXIgZ2V0SXRlbUtleSA9IHRoaXMuYU5vZGUuaG90c3BvdC5nZXRGb3JLZXk7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgICBmb3IgKHZhciBjSW5kZXggPSAwOyBjSW5kZXggPCBjaGFuZ2VzLmxlbmd0aDsgY0luZGV4KyspIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbY0luZGV4XTtcbiAgICAgICAgdmFyIHJlbGF0aW9uID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIGlmICghcmVsYXRpb24pIHtcbiAgICAgICAgICAgIC8vIOaXoOWFs+aXtu+8jOebtOaOpeS8oOmAkue7meWtkOWFg+e0oOabtOaWsO+8jOWIl+ihqOacrOi6q+S4jemcgOimgeWKqFxuICAgICAgICAgICAgcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVsYXRpb24gPiAyKSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+eahOWtkOmhuVxuICAgICAgICAgICAgICAgIC8vIOWPqumcgOimgeWvueebuOW6lOeahOWtkOmhuei/m+ihjOabtOaWsFxuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VQYXRocyA9IGNoYW5nZS5leHByLnBhdGhzO1xuICAgICAgICAgICAgICAgIHZhciBmb3JMZW4gPSB0aGlzLnBhcmFtLnZhbHVlLnBhdGhzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlSW5kZXggPSArZXZhbEV4cHIoY2hhbmdlUGF0aHNbZm9yTGVuXSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oY2hhbmdlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNDaGlsZHJlblJlYnVpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNPbmx5RGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbk5lZWRVcGRhdGUgJiYgKGNoaWxkcmVuTmVlZFVwZGF0ZVtjaGFuZ2VJbmRleF0gPSAxKTtcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbY2hhbmdlSW5kZXhdID0gY2hpbGRyZW5DaGFuZ2VzW2NoYW5nZUluZGV4XSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW0uaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0ucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlID0gY2hhbmdlLnR5cGUgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNoYW5nZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1QYXRocy5jb25jYXQoY2hhbmdlUGF0aHMuc2xpY2UoZm9yTGVuICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNoYW5nZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb3VudDogY2hhbmdlLmRlbGV0ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydGlvbnM6IGNoYW5nZS5pbnNlcnRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNoYW5nZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1QYXRocy5jb25jYXQoY2hhbmdlUGF0aHMuc2xpY2UoZm9yTGVuICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0ucHVzaChjaGFuZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lsZW50OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5pWw57uE6aG555qE57Si5byV5Y+v6IO96LaF5Ye65pWw57uE6ZW/5bqm77yM5q2k5pe26ZyA6KaB5paw5aKeXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q+U5aaC5b2T5YmN5pWw57uE5Y+q5pyJMumhue+8jOS9huaYr3NldCBsaXN0WzRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XS5zY29wZS5fc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChjaGFuZ2UuaW5kZXgsIGNoYW5nZS5kZWxldGVDb3VudCwgY2hhbmdlLmluc2VydGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lsZW50OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQ2hpbGRyZW5SZWJ1aWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA9PT0gMiAmJiBjaGFuZ2UudHlwZSA9PT0gMlxuICAgICAgICAgICAgICAgICYmICh0aGlzLm93bmVyLnVwZGF0ZU1vZGUgIT09ICdvcHRpbWl6ZWQnIHx8ICF0aGlzLm9wdGkgfHwgdGhpcy5hTm9kZS5kaXJlY3RpdmVzLnRyYW5zaXRpb24pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbk5lZWRVcGRhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+acrOi6q+aVsOe7hOeahHNwbGljZeaTjeS9nFxuICAgICAgICAgICAgICAgIC8vIOatpOaXtumcgOimgeWIoOmZpOmDqOWIhumhue+8jOWIm+W7uumDqOWIhumhuVxuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VTdGFydCA9IGNoYW5nZS5pbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZXRlQ291bnQgPSBjaGFuZ2UuZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICAgICAgdmFyIGluc2VydGlvbnNMZW4gPSBjaGFuZ2UuaW5zZXJ0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NvdW50ID0gaW5zZXJ0aW9uc0xlbiAtIGRlbGV0ZUNvdW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZSA9IHRoaXMucGFyYW0uaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaW5kZXhFeHByXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoYW5nZVN0YXJ0ICsgZGVsZXRlQ291bnQ7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09ubHlEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zY29wZS5yYXdbY2hpbGQuc2NvcGUuaW5kZXhOYW1lXSA9IGkgLSBkZWxldGVDb3VudCArIGluc2VydGlvbnNMZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVsZXRlTGVuID0gZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRlbGV0ZUxlbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVMZW4gPCBpbnNlcnRpb25zTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09ubHlEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNoYW5nZVN0YXJ0ICsgZGVsZXRlTGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLml0ZW1FeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFuZ2UuaW5zZXJ0aW9uc1tkZWxldGVMZW5dXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5yYXdbdGhpcy5wYXJhbS5pdGVtXSA9IGNoYW5nZS5pbnNlcnRpb25zW2RlbGV0ZUxlbl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3Q291bnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGFuZ2VTdGFydCArIGluc2VydGlvbnNMZW4sIC1uZXdDb3VudClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzLnNwbGljZShjaGFuZ2VTdGFydCArIGluc2VydGlvbnNMZW4sIC1uZXdDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpc09ubHlEaXNwb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGxpY2VBcmdzID0gW2NoYW5nZVN0YXJ0ICsgZGVsZXRlQ291bnQsIDBdLmNvbmNhdChuZXcgQXJyYXkobmV3Q291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgc3BsaWNlQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcy5zcGxpY2UuYXBwbHkoY2hpbGRyZW5DaGFuZ2VzLCBzcGxpY2VBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbk5lZWRVcGRhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlzT25seURpc3Bvc2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlzQ2hpbGRyZW5SZWJ1aWxkID0gMTtcblxuICAgICAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/mnKzouqvmiJbmr43pobnnmoTph43mlrDorr7lgLxcbiAgICAgICAgICAgICAgICAvLyDmraTml7bpnIDopoHmm7TmlrDmlbTkuKrliJfooahcblxuICAgICAgICAgICAgICAgIGlmIChnZXRJdGVtS2V5ICYmIG5ld0xlbiAmJiBvbGRDaGlsZHJlbkxlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzorr7nva7kuoZ0cmFja0J577yM55SobGlz5pu05paw44CC5byA5aeLID09PT1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0xpc3RLZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0S2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TGlzdEtleXNNYXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExpc3RJbk5ldyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGlzdEtleUluZGV4ID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUtleSA9IGdldEl0ZW1LZXkobmV3TGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdMaXN0S2V5cy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdEtleXNNYXBbaXRlbUtleV0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBnZXRJdGVtS2V5KHRoaXMubGlzdERhdGFbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0S2V5cy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkTGlzdEtleUluZGV4W2l0ZW1LZXldID0gaTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0xpc3RLZXlzTWFwW2l0ZW1LZXldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0SW5OZXdbaV0gPSBuZXdMaXN0S2V5c01hcFtpdGVtS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZExpc3RJbk5ld1tpXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleFN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4RW5kID0gbmV3TGVuO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkSW5kZXhTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRJbmRleEVuZCA9IG9sZENoaWxkcmVuTGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOS8mOWMlu+8muS7juWktOW8gOWni+avlOWvueaWsOaXpyBsaXN0IOmhueaYr+WQpuebuOWQjFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobmV3SW5kZXhTdGFydCA8IG5ld0xlblxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgb2xkSW5kZXhTdGFydCA8IG9sZENoaWxkcmVuTGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXdMaXN0S2V5c1tuZXdJbmRleFN0YXJ0XSA9PT0gb2xkTGlzdEtleXNbb2xkSW5kZXhTdGFydF1cbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YVtvbGRJbmRleFN0YXJ0XSAhPT0gbmV3TGlzdFtuZXdJbmRleFN0YXJ0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bb2xkSW5kZXhTdGFydF0uc2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gPSBuZXdMaXN0W25ld0luZGV4U3RhcnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkSW5kZXhTdGFydF0gPSBjaGlsZHJlbkNoYW5nZXNbb2xkSW5kZXhTdGFydF0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaXRlbUV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0W25ld0luZGV4U3RhcnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4U3RhcnRdID0gY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4U3RhcnRdIHx8IFtdKS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4U3RhcnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEluZGV4U3RhcnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZSA9IHRoaXMucGFyYW0uaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaW5kZXhFeHByXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5LyY5YyW77ya5LuO5bC+5byA5aeL5q+U5a+55paw5penIGxpc3Qg6aG55piv5ZCm55u45ZCMXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXdJbmRleEVuZCA+IG5ld0luZGV4U3RhcnQgJiYgb2xkSW5kZXhFbmQgPiBvbGRJbmRleFN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXdMaXN0S2V5c1tuZXdJbmRleEVuZCAtIDFdID09PSBvbGRMaXN0S2V5c1tvbGRJbmRleEVuZCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXhFbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEluZGV4RW5kLS07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhW29sZEluZGV4RW5kXSAhPT0gbmV3TGlzdFtuZXdJbmRleEVuZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW29sZEluZGV4RW5kXS5zY29wZS5yYXdbdGhpcy5wYXJhbS5pdGVtXSA9IG5ld0xpc3RbbmV3SW5kZXhFbmRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkSW5kZXhFbmRdID0gY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4RW5kXSB8fCBbXSkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogdGhpcy5pdGVtRXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbbmV3SW5kZXhFbmRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3SW5kZXhFbmQgIT09IG9sZEluZGV4RW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltvbGRJbmRleEVuZF0uc2NvcGUucmF3W3RoaXMuY2hpbGRyZW5bb2xkSW5kZXhFbmRdLnNjb3BlLmluZGV4TmFtZV0gPSBuZXdJbmRleEVuZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4RW5kXSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRJbmRleEVuZF0gfHwgW10pLnB1c2goaW5kZXhDaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a+5bGlzdOabtOS4iue6p+aVsOaNrueahOebtOaOpeiuvue9rlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkSW5kZXhFbmRdID0gY2hpbGRyZW5DaGFuZ2VzW29sZEluZGV4RW5kXSB8fCBbXSkucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExpc3RMSVMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc0lkeCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzUG9zID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXNTb3VyY2UgPSBvbGRMaXN0SW5OZXcuc2xpY2Uob2xkSW5kZXhTdGFydCwgb2xkSW5kZXhFbmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gb2xkSW5kZXhFbmQgLSBvbGRJbmRleFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJlSWR4ID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZEl0ZW1Jbk5ldyA9IGxpc1NvdXJjZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRJdGVtSW5OZXcgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZVBvcyA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlUG9zRW5kID0gb2xkTGlzdExJUy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZVBvc0VuZCA+IDAgJiYgb2xkTGlzdExJU1tyZVBvc0VuZCAtIDFdIDw9IG9sZEl0ZW1Jbk5ldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlUG9zID0gcmVQb3NFbmQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlUG9zRW5kIC0gcmVQb3MgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChyZVBvcyArIHJlUG9zRW5kKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTGlzdExJU1ttaWRdID4gb2xkSXRlbUluTmV3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZVBvc0VuZCA9IG1pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlUG9zID0gbWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVQb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlSWR4W2ldID0gbGlzSWR4W3JlUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUG9zID09PSBsaXNQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXNQb3MrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0TElTW2xpc1Bvc10gPSBvbGRJdGVtSW5OZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzSWR4W2xpc1Bvc10gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRJdGVtSW5OZXcgPCBvbGRMaXN0TElTW3JlUG9zICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRMaXN0TElTW3JlUG9zICsgMV0gPSBvbGRJdGVtSW5OZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzSWR4W3JlUG9zICsgMV0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxpc0lkeFtsaXNQb3NdOyBsaXNQb3MgPj0gMDsgaSA9IHByZUlkeFtpXSwgbGlzUG9zLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZExpc3RMSVNbbGlzUG9zXSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGlzdExJU1BvcyA9IG9sZExpc3RMSVMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGljUG9zID0gb2xkTGlzdExJU1BvcyA/IG9sZExpc3RJbk5ld1tvbGRMaXN0TElTWy0tb2xkTGlzdExJU1Bvc10gKyBvbGRJbmRleFN0YXJ0XSA6IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW5DaGFuZ2VzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IG5ld0xlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBuZXdJbmRleEVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuW2ldID0gdGhpcy5jaGlsZHJlbltvbGRDaGlsZHJlbkxlbiAtIG5ld0xlbiArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRDaGlsZHJlbkxlbiAtIG5ld0xlbiArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA8IG5ld0luZGV4U3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbltpXSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExpc3RJbmRleCA9IG9sZExpc3RLZXlJbmRleFtuZXdMaXN0S2V5c1tpXV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RhdGljUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRTY29wZSA9IHRoaXMuY2hpbGRyZW5bb2xkTGlzdEluZGV4XS5zY29wZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mnKzouqvlvJXnlKjlj5HnlJ/lj5jljJbvvIzorr7nva7lj5jmm7RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGFbb2xkTGlzdEluZGV4XSAhPT0gbmV3TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkU2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gPSBuZXdMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tvbGRMaXN0SW5kZXhdID0gY2hpbGRyZW5DaGFuZ2VzW29sZExpc3RJbmRleF0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaXRlbUV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmcmVzaCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDaGFuZ2UgJiYgaSAhPT0gb2xkTGlzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRTY29wZS5yYXdbb2xkU2NvcGUuaW5kZXhOYW1lXSA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbb2xkTGlzdEluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tvbGRMaXN0SW5kZXhdIHx8IFtdKS5wdXNoKGluZGV4Q2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tvbGRMaXN0SW5kZXhdID0gY2hpbGRyZW5DaGFuZ2VzW29sZExpc3RJbmRleF0gfHwgW10pLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuW2ldID0gdGhpcy5jaGlsZHJlbltvbGRMaXN0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbb2xkTGlzdEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNQb3MgPSBvbGRMaXN0TElTUG9zID8gb2xkTGlzdEluTmV3W29sZExpc3RMSVNbLS1vbGRMaXN0TElTUG9zXSArIG9sZEluZGV4U3RhcnRdIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTGlzdEluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5bb2xkTGlzdEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbltpXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkcmVuQ2hhbmdlc1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3Q2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcyA9IG5ld0NoaWxkcmVuQ2hhbmdlcztcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6K6+572u5LqGdHJhY2tCee+8jOeUqGxpc+abtOaWsOOAgue7k+adnyA9PT09XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDogIHnmoTmr5TmlrDnmoTlpJrnmoTpg6jliIbvvIzmoIforrDpnIDopoFkaXNwb3NlXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRDaGlsZHJlbkxlbiA+IG5ld0xlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZUNoaWxkcmVuID0gZGlzcG9zZUNoaWxkcmVuLmNvbmNhdCh0aGlzLmNoaWxkcmVuLnNsaWNlKG5ld0xlbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzID0gY2hpbGRyZW5DaGFuZ2VzLnNsaWNlKDAsIG5ld0xlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5zbGljZSgwLCBuZXdMZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5Ymp5LiL55qE6YOo5YiG5pW06aG55Y+Y5pu0XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0uc2NvcGUucmF3W3RoaXMucGFyYW0uaXRlbV0gIT09IG5ld0xpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5yYXdbdGhpcy5wYXJhbS5pdGVtXSA9IG5ld0xpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMuaXRlbUV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3TGlzdFtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8g5qCH6K6wIGxlbmd0aCDmmK/lkKblj5HnlJ/lj5jljJZcbiAgICBpZiAobmV3TGVuICE9PSBvbGRDaGlsZHJlbkxlbiAmJiB0aGlzLnBhcmFtLnZhbHVlLnBhdGhzKSB7XG4gICAgICAgIHZhciBsZW5ndGhDaGFuZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgb3B0aW9uOiB7fSxcbiAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW0udmFsdWUucGF0aHMuY29uY2F0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsZW5ndGgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2hhbmdlc0lzSW5EYXRhUmVmKFtsZW5ndGhDaGFuZ2VdLCB0aGlzLmFOb2RlLmhvdHNwb3QuZGF0YSkpIHtcbiAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhsZW5ndGhDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5omn6KGM6KeG5Zu+5pu05paw77yM5YWI5Yig5YaN5Yi35pawXG4gICAgdGhpcy5fZG9DcmVhdGVBbmRVcGRhdGUgPSBkb0NyZWF0ZUFuZFVwZGF0ZTtcblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKGRpc3Bvc2VDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9DcmVhdGVBbmRVcGRhdGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VDaGlsZHJlbihkaXNwb3NlQ2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkb0NyZWF0ZUFuZFVwZGF0ZSA9PT0gbWUuX2RvQ3JlYXRlQW5kVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZG9DcmVhdGVBbmRVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9DcmVhdGVBbmRVcGRhdGUoKSB7XG4gICAgICAgIG1lLl9kb0NyZWF0ZUFuZFVwZGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzT25seURpc3Bvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiZWZvcmVFbCA9IG1lLmVsO1xuICAgICAgICB2YXIgcGFyZW50RWwgPSBiZWZvcmVFbC5wYXJlbnROb2RlO1xuXG4gICAgICAgIC8vIOWvueebuOW6lOeahOmhuei/m+ihjOabtOaWsFxuICAgICAgICAvLyDlpoLmnpzkuI1hdHRhY2hlZOWImeebtOaOpeWIm+W7uu+8jOWmguaenOWtmOWcqOWImeiwg+eUqOabtOaWsOWHveaVsFxuICAgICAgICB2YXIgaiA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ2hhbmdlc1tpXSAmJiAoIWNoaWxkcmVuTmVlZFVwZGF0ZSB8fCBjaGlsZHJlbk5lZWRVcGRhdGVbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLl91cGRhdGUoY2hpbGRyZW5DaGFuZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA8IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVFbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbmV3TGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dENoaWxkID0gbWUuY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlRWwgPSBuZXh0Q2hpbGQuc2VsIHx8IG5leHRDaGlsZC5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldID0gY3JlYXRlTm9kZShtZS5hTm9kZS5mb3JSaW5zZWQsIG1lLCBuZXcgRm9ySXRlbURhdGEobWUsIG5ld0xpc3RbaV0sIGkpLCBtZS5vd25lcik7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0uYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCB8fCBtZS5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBGb3JOb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgaWYg5oyH5Luk6IqC54K557G7XG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcbi8vIHZhciBub2RlT3duU2ltcGxlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1vd24tc2ltcGxlLWRpc3Bvc2UnKTtcblxuLyoqXG4gKiBpZiDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gSWZOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSA1XG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKys7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIGlmIChldmFsRXhwcih0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICB0aGlzLmVsc2VJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlblswXSA9IGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgIHRoaXMuYU5vZGUuaWZSaW5zZWQsXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHRoaXMub3duZXIsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBlYWNoKGFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgICAgIGlmICghZWxpZiB8fCBlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuWzBdID0gY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlQU5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWUub3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5JZk5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gMjtcblxuSWZOb2RlLnByb3RvdHlwZS5fY3JlYXRlID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuSWZOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cbi8qKlxuICogYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuSWZOb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZWxzZUluZGV4O1xuICAgIHZhciBjaGlsZDtcblxuICAgIGlmIChldmFsRXhwcih0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIGNoaWxkID0gY3JlYXRlTm9kZSh0aGlzLmFOb2RlLmlmUmluc2VkLCB0aGlzLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICAgICAgZWxzZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgIGlmICghZWxpZiB8fCBlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNyZWF0ZU5vZGUoZWxzZUFOb2RlLCBtZSwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgICAgICBlbHNlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuWzBdID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgICAgICB0aGlzLmVsc2VJbmRleCA9IGVsc2VJbmRleDtcbiAgICB9XG5cblxuICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xufTtcblxuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbklmTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgY2hpbGRBTm9kZSA9IHRoaXMuYU5vZGUuaWZSaW5zZWQ7XG4gICAgdmFyIGVsc2VJbmRleDtcblxuICAgIGlmIChldmFsRXhwcih0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIGVsc2VJbmRleCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGVsaWYgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICBpZiAoZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpIHx8ICFlbGlmKSB7XG4gICAgICAgICAgICAgICAgZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgY2hpbGRBTm9kZSA9IGVsc2VBTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bMF07XG4gICAgaWYgKGVsc2VJbmRleCA9PT0gdGhpcy5lbHNlSW5kZXgpIHtcbiAgICAgICAgY2hpbGQgJiYgY2hpbGQuX3VwZGF0ZShjaGFuZ2VzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5fb25kaXNwb3NlZCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgY2hpbGQuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxzZUluZGV4ID0gZWxzZUluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0NoaWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsc2VJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIChtZS5jaGlsZHJlblswXSA9IGNyZWF0ZU5vZGUoY2hpbGRBTm9kZSwgbWUsIG1lLnNjb3BlLCBtZS5vd25lcikpXG4gICAgICAgICAgICAgICAgLmF0dGFjaChtZS5lbC5wYXJlbnROb2RlLCBtZS5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBJZk5vZGU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSB0ZW1wbGF0ZSDoioLngrnnsbtcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tb25seS1jaGlsZHJlbi1hdHRhY2gnKTtcblxuLyoqXG4gKiB0ZW1wbGF0ZSDoioLngrnnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbH0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gVGVtcGxhdGVOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlLCBvd25lciwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSA1XG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKys7XG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICBtZS5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlQ2hpbGQsIG1lLCBtZS5zY29wZSwgbWUub3duZXIsIHJldmVyc2VXYWxrZXIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5hdHRhY2hlZDtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gNztcblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuXG4vKipcbiAqIOmUgOavgemHiuaUvlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9UcmFuc2l0aW9uIOaYr+WQpuS4jeaYvuekuui/h+a4oeWKqOeUu+aViOaenFxuICovXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcy5jaGlsZHJlbiwgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG5cbiAgICBpZiAoIW5vRGV0YWNoKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICByZW1vdmVFbCh0aGlzLnNlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWwgPSBudWxsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIHRoaXMub3duZXIgPSBudWxsO1xuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuZGlzcG9zZWQ7XG5cbiAgICBpZiAodGhpcy5fb25kaXNwb3NlZCkge1xuICAgICAgICB0aGlzLl9vbmRpc3Bvc2VkKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGVOb2RlO1xuXG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogQGZpbGUgQU5vZGXpooTng61cbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG4vLyB2YXIga2ViYWIyY2FtZWwgPSByZXF1aXJlKCcuLi91dGlsL2tlYmFiMmNhbWVsJyk7XG4vLyB2YXIgY3JlYXRlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL2NyZWF0ZS1lbCcpO1xuLy8gdmFyIGdldFByb3BIYW5kbGVyID0gcmVxdWlyZSgnLi9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciBUZXh0Tm9kZSA9IHJlcXVpcmUoJy4vdGV4dC1ub2RlJyk7XG4vLyB2YXIgU2xvdE5vZGUgPSByZXF1aXJlKCcuL3Nsb3Qtbm9kZScpO1xuLy8gdmFyIEZvck5vZGUgPSByZXF1aXJlKCcuL2Zvci1ub2RlJyk7XG4vLyB2YXIgSWZOb2RlID0gcmVxdWlyZSgnLi9pZi1ub2RlJyk7XG4vLyB2YXIgVGVtcGxhdGVOb2RlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZS1ub2RlJyk7XG5cbi8qKlxuICogQU5vZGXpooTng63vvIzliIbmnpDnmoTmlbDmja7lvJXnlKjnrYnkv6Hmga9cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg6KaB6aKE54Ot55qEQU5vZGVcbiAqL1xuZnVuY3Rpb24gcHJlaGVhdEFOb2RlKGFOb2RlKSB7XG4gICAgdmFyIHN0YWNrID0gW107XG5cbiAgICBmdW5jdGlvbiByZWNvcmRIb3RzcG90RGF0YShleHByLCBub3RDb250ZW50RGF0YSkge1xuICAgICAgICB2YXIgcmVmcyA9IGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwcik7XG5cbiAgICAgICAgaWYgKHJlZnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vdENvbnRlbnREYXRhIHx8IGkgIT09IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzdGFja1tpXS5ob3RzcG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHN0YWNrW2ldLmhvdHNwb3QuZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWFjaChyZWZzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3JlZl0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFuYWx5c2VBTm9kZUhvdHNwb3QoYU5vZGUpIHtcbiAgICAgICAgaWYgKCFhTm9kZS5ob3RzcG90KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFOb2RlKTtcblxuXG4gICAgICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90ID0ge307XG4gICAgICAgICAgICAgICAgYU5vZGUuQ2xhenogPSBUZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhTm9kZS50ZXh0RXhwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIGFOb2RlLnRhZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgJiYgYU5vZGUudGFnTmFtZS5pbmRleE9mKCctJykgPCAwXG4gICAgICAgICAgICAgICAgICAgICYmICEvXih0ZW1wbGF0ZXxzbG90fHNlbGVjdHxpbnB1dHxvcHRpb258YnV0dG9ufHZpZGVvfGF1ZGlvfGNhbnZhc3xpbWd8ZW1iZWR8b2JqZWN0fGlmcmFtZSkkL2kudGVzdChhTm9kZS50YWdOYW1lKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VOb2RlID0gY3JlYXRlRWwoYU5vZGUudGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1Byb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgeFByb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBiaW5kczogW10sXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU5vZGU6IHNvdXJjZU5vZGVcbiAgICAgICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IGRhdGE6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YSh2YXJJdGVtLmV4cHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5iaW5kcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtlYmFiMmNhbWVsKHByb3AubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBwcm9wLnJhdyAhPSBudWxsID8gcHJvcC5leHByIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBwcm9wLngsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXc6IHByb3AucmF3XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShwcm9wLmV4cHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFOb2RlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIS9eKGh0bWx8YmluZCkkLy50ZXN0KGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXQgdHJhY2tCeSBnZXRLZXkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdmb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNrQnkgPSBkaXJlY3RpdmUudHJhY2tCeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2tCeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0cmFja0J5LnR5cGUgPT09IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdHJhY2tCeS5wYXRoc1swXS52YWx1ZSA9PT0gZGlyZWN0aXZlLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5nZXRGb3JLZXkgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm4gJyArIHRyYWNrQnkucmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgZGF0YTogZW5kXG5cblxuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgcHJvcHM6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3AsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QucHJvcHNbcHJvcC5uYW1lXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBwcm9wLmhhbmRsZXIgPSBnZXRQcm9wSGFuZGxlcihhTm9kZS50YWdOYW1lLCBwcm9wLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5pZFByb3AgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wLmV4cHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wLmhhbmRsZXIoc291cmNlTm9kZSwgcHJvcC5leHByLnZhbHVlLCBwcm9wLm5hbWUsIGFOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnhQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWUg5LiL77yM5aaC5p6cIG9wdGlvbiDmsqHmnIkgdmFsdWUg5bGe5oCn77yMc2VsZWN0LnZhbHVlID0geHgg5pON5L2c5LiN5Lya6YCJ5LitIG9wdGlvblxuICAgICAgICAgICAgICAgIC8vIOaJgOS7peayoeacieiuvue9riB2YWx1ZSDml7bvvIzpu5jorqTmioogb3B0aW9uIOeahOWGheWuueS9nOS4uiB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChhTm9kZS50YWdOYW1lID09PSAnb3B0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiAhZ2V0QU5vZGVQcm9wKGFOb2RlLCAndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAmJiBhTm9kZS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGFOb2RlLmNoaWxkcmVuWzBdLnRleHRFeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZ2V0UHJvcEhhbmRsZXIoYU5vZGUudGFnTmFtZSwgJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUucHJvcHMucHVzaCh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcy5wdXNoKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QucHJvcHMudmFsdWUgPSBhTm9kZS5wcm9wcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmlmUmluc2VkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGFOb2RlLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBhTm9kZS5ldmVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdHNwb3Q6IGFOb2RlLmhvdHNwb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBleHRlbmQoe30sIGFOb2RlLmRpcmVjdGl2ZXMpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLkNsYXp6ID0gSWZOb2RlO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZSA9IGFOb2RlLmlmUmluc2VkO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5kaXJlY3RpdmVzWydpZiddID0gbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snZm9yJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuZm9yUmluc2VkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGFOb2RlLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBhTm9kZS5ldmVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdHNwb3Q6IGFOb2RlLmhvdHNwb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBleHRlbmQoe30sIGFOb2RlLmRpcmVjdGl2ZXMpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLkNsYXp6ID0gRm9yTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuZm9yUmluc2VkLmRpcmVjdGl2ZXNbJ2ZvciddID0gbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICAgICAgYU5vZGUgPSBhTm9kZS5mb3JSaW5zZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhTm9kZS50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nsb3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuQ2xhenogPSBTbG90Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RlbXBsYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLkNsYXp6ID0gVGVtcGxhdGVOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IHByb3BzOiBlbmRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYU5vZGUpIHtcbiAgICAgICAgYW5hbHlzZUFOb2RlSG90c3BvdChhTm9kZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIOWIhuaekOihqOi+vuW8j+eahOaVsOaNruW8leeUqFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOimgeWIhuaekOeahOihqOi+vuW8j1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwciwgYWNjZXNzb3JNZWFuRHluYW1pYykge1xuICAgIHZhciByZWZzID0gW107XG4gICAgdmFyIGlzRHluYW1pYztcblxuICAgIGZ1bmN0aW9uIGFuYWx5c2VFeHBycyhleHBycywgYWNjZXNzb3JNZWFuRHluYW1pYykge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgcmVmcyA9IHJlZnMuY29uY2F0KGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwcnNbaV0sIGFjY2Vzc29yTWVhbkR5bmFtaWMpKTtcbiAgICAgICAgICAgIGlzRHluYW1pYyA9IGlzRHluYW1pYyB8fCBleHByc1tpXS5keW5hbWljO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaXNEeW5hbWljID0gYWNjZXNzb3JNZWFuRHluYW1pYztcblxuICAgICAgICAgICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICAgICAgICAgIHJlZnMucHVzaChwYXRoc1swXS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHBhdGhzWzBdLnZhbHVlICsgJy4nICsgKHBhdGhzWzFdLnZhbHVlIHx8ICcqJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbmFseXNlRXhwcnMocGF0aHMuc2xpY2UoMSksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmVmcyA9IGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwci5leHByLCBhY2Nlc3Nvck1lYW5EeW5hbWljKTtcbiAgICAgICAgICAgIGlzRHluYW1pYyA9IGV4cHIuZXhwci5keW5hbWljO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICBjYXNlIDg6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBhbmFseXNlRXhwcnMoZXhwci5zZWdzLCBhY2Nlc3Nvck1lYW5EeW5hbWljKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJlZnMgPSBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIuZXhwcik7XG4gICAgICAgICAgICBpc0R5bmFtaWMgPSBleHByLmV4cHIuZHluYW1pYztcblxuICAgICAgICAgICAgZWFjaChleHByLmZpbHRlcnMsIGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBhbmFseXNlRXhwcnMoZmlsdGVyLm5hbWUucGF0aHMpO1xuICAgICAgICAgICAgICAgIGFuYWx5c2VFeHBycyhmaWx0ZXIuYXJncyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGV4cHIubmFtZS5wYXRocyk7XG4gICAgICAgICAgICBhbmFseXNlRXhwcnMoZXhwci5hcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cHIuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWZzID0gcmVmcy5jb25jYXQoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByLml0ZW1zW2ldLmV4cHIpKTtcbiAgICAgICAgICAgICAgICBpc0R5bmFtaWMgPSBpc0R5bmFtaWMgfHwgZXhwci5pdGVtc1tpXS5leHByLmR5bmFtaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpc0R5bmFtaWMgJiYgKGV4cHIuZHluYW1pYyA9IHRydWUpO1xuICAgIHJldHVybiByZWZzO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwcmVoZWF0QU5vZGU7XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAZmlsZSDliJvlu7rnu4Tku7ZMb2FkZXJcbiAqL1xuXG4vLyB2YXIgQ29tcG9uZW50TG9hZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnQtbG9hZGVyJyk7XG5cbi8qKlxuICog5Yib5bu657uE5Lu2TG9hZGVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbnMg5Yib5bu657uE5Lu2TG9hZGVy55qE5Y+C5pWw44CC5Li6T2JqZWN05pe25Y+C6ICD5LiL5pa55o+P6L+w77yM5Li6RnVuY3Rpb27ml7bku6Pooahsb2Fk5pa55rOV44CCXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmxvYWQgbG9hZOaWueazlVxuICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdGlvbnMucGxhY2Vob2xkZXIgbG9hZGluZ+i/h+eoi+S4rea4suafk+eahOWNoOS9jee7hOS7tlxuICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdGlvbnMuZmFsbGJhY2sgbG9hZOWksei0peaXtua4suafk+eahOe7hOS7tlxuICogQHJldHVybiB7Q29tcG9uZW50TG9hZGVyfVxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRMb2FkZXIob3B0aW9ucykge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXI7XG4gICAgdmFyIGZhbGxiYWNrID0gb3B0aW9ucy5mYWxsYmFjaztcbiAgICB2YXIgbG9hZCA9IHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucyA6IG9wdGlvbnMubG9hZDtcblxuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyKGxvYWQsIHBsYWNlaG9sZGVyLCBmYWxsYmFjayk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvbmVudExvYWRlcjtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyAgICAgdmFyIG5leHRUaWNrID0gcmVxdWlyZSgnLi91dGlsL25leHQtdGljaycpO1xuLy8gICAgIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vdXRpbC9pbmhlcml0cycpO1xuLy8gICAgIHZhciBwYXJzZVRlbXBsYXRlID0gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vICAgICB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gICAgIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gICAgIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL3ZpZXcvbGlmZS1jeWNsZScpO1xuLy8gICAgIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vdmlldy9ub2RlLXR5cGUnKTtcbi8vICAgICB2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi92aWV3L2NvbXBvbmVudCcpO1xuLy8gICAgIHZhciBjb21waWxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi92aWV3L2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyAgICAgdmFyIGRlZmluZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9kZWZpbmUtY29tcG9uZW50Jyk7XG4vLyAgICAgdmFyIGNyZWF0ZUNvbXBvbmVudExvYWRlciA9IHJlcXVpcmUoJy4vdmlldy9jcmVhdGUtY29tcG9uZW50LWxvYWRlcicpO1xuLy8gICAgIHZhciBlbWl0RGV2dG9vbCA9IHJlcXVpcmUoJy4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vICAgICB2YXIgRGF0YSA9IHJlcXVpcmUoJy4vcnVudGltZS9kYXRhJyk7XG4vLyAgICAgdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gICAgIHZhciBEYXRhVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0YS10eXBlcycpO1xuXG5cbiAgICB2YXIgc2FuID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogc2Fu54mI5pys5Y+3XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uOiAnMy44LjEnLFxuXG4gICAgICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQr+iwg+ivleOAguW8gOWQr+iwg+ivleaXtiBkZXZ0b29sIOS8muW3peS9nFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAvKipcbiAgICAgICAgICog57uE5Lu25Z+657G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJvlu7rnu4Tku7bnsbtcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3RvIOe7hOS7tuexu+eahOaWueazleihqFxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIGRlZmluZUNvbXBvbmVudDogZGVmaW5lQ29tcG9uZW50LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJvlu7rnu4Tku7ZMb2FkZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbnMg5Yib5bu657uE5Lu2TG9hZGVy55qE5Y+C5pWw44CC5Li6T2JqZWN05pe25Y+C6ICD5LiL5pa55o+P6L+w77yM5Li6RnVuY3Rpb27ml7bku6Pooahsb2Fk5pa55rOV44CCXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMubG9hZCBsb2Fk5pa55rOVXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb249fSBvcHRpb25zLnBsYWNlaG9sZGVyIGxvYWRpbmfov4fnqIvkuK3muLLmn5PnmoTljaDkvY3nu4Tku7ZcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdGlvbnMuZmFsbGJhY2sgbG9hZOWksei0peaXtua4suafk+eahOe7hOS7tlxuICAgICAgICAgKiBAcmV0dXJuIHtDb21wb25lbnRMb2FkZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVDb21wb25lbnRMb2FkZXI6IGNyZWF0ZUNvbXBvbmVudExvYWRlcixcblxuICAgICAgICAvKipcbiAgICAgICAgICog57yW6K+R57uE5Lu257G744CC6aKE6Kej5p6QdGVtcGxhdGXlkoxjb21wb25lbnRzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICAgICAgICAgKi9cbiAgICAgICAgY29tcGlsZUNvbXBvbmVudDogY29tcGlsZUNvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6Kej5p6QIHRlbXBsYXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIHRlbXBsYXRlIOa6kOeggVxuICAgICAgICAgKiBAcmV0dXJuIHtBTm9kZX1cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlVGVtcGxhdGU6IHBhcnNlVGVtcGxhdGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOino+aekOihqOi+vuW8j1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZUV4cHI6IHBhcnNlRXhwcixcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo6L6+5byP57G75Z6L5p6a5Li+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgRXhwclR5cGU6IEV4cHJUeXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlJ/lkb3lkajmnJ9cbiAgICAgICAgICovXG4gICAgICAgIExpZmVDeWNsZTogTGlmZUN5Y2xlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoioLngrnnsbvlnotcbiAgICAgICAgICpcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBOb2RlVHlwZTogTm9kZVR5cGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWcqOS4i+S4gOS4quabtOaWsOWRqOacn+i/kOihjOWHveaVsFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDopoHov5DooYznmoTlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIG5leHRUaWNrOiBuZXh0VGljayxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5pWw5o2u57G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBjbGFzc1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdD99IGRhdGEg5Yid5aeL5pWw5o2uXG4gICAgICAgICAqIEBwYXJhbSB7RGF0YT99IHBhcmVudCDniLbnuqfmlbDmja7lr7nosaFcbiAgICAgICAgICovXG4gICAgICAgIERhdGE6IERhdGEsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiuoeeul+ihqOi+vuW8j+eahOWAvFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI/lr7nosaFcbiAgICAgICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNruWvueixoVxuICAgICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudD19IG93bmVyIOe7hOS7tuWvueixoe+8jOeUqOS6juihqOi+vuW8j+S4rWZpbHRlcueahOaJp+ihjFxuICAgICAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZhbEV4cHI6IGV2YWxFeHByLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmnoTlu7rnsbvkuYvpl7TnmoTnu6fmib/lhbPns7tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3ViQ2xhc3Mg5a2Q57G75Ye95pWwXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyQ2xhc3Mg54i257G75Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBpbmhlcml0czogaW5oZXJpdHMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGFUeXBlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgRGF0YVR5cGVzOiBEYXRhVHlwZXNcbiAgICB9O1xuXG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBGb3IgQ29tbW9uSlNcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc2FuO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gRm9yIEFNRFxuICAgICAgICBkZWZpbmUoJ3NhbicsIFtdLCBzYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRm9yIDxzY3JpcHQgc3JjPVwiLi4uXCJcbiAgICAgICAgcm9vdC5zYW4gPSBzYW47XG4gICAgfVxuXG4gICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgIGVtaXREZXZ0b29sLnN0YXJ0KHNhbik7XG4gICAgLy8gI1tlbmRdXG59KSh0aGlzKTtcbi8vQCBzb3VyY2VNYXBwaW5nVVJMPXNhbi5kZXYuanMubWFwIixudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCIvKipcbiAqIEBmaWxlIGNsYXNzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgYmluZEtleXMgPSBbJzpjbGFzcycsICd2LWJpbmQ6Y2xhc3MnXTtcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5jbGFzc0JpbmRpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSBub2RlLmF0dHJzTWFwLmNsYXNzIHx8ICcnO1xuICAgICAgICBub2RlLmF0dHJzTWFwLmNsYXNzID0gYHt7IF9tYygnJHtzdGF0aWNDbGFzc30nLCAke25vZGUuY2xhc3NCaW5kaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKX0pIH19YDtcbiAgICAgICAgYmluZEtleXMuZm9yRWFjaChrZXkgPT4gZGVsZXRlIG5vZGUuYXR0cnNNYXBba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9zdFRyYW5zZm9ybU5vZGVcbn07XG4iLCIvKipcbiAqIEBmaWxlIHN0eWxlXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuY29uc3QgYmluZEtleXMgPSBbJzpzdHlsZScsICd2LWJpbmQ6c3R5bGUnLCAndi1zaG93J107XG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBjb25zdCB2U2hvdyA9IG5vZGUuYXR0cnNNYXBbJ3Ytc2hvdyddO1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgKG5vZGUuc3R5bGVCaW5kaW5nIHx8IHZTaG93KSkge1xuICAgICAgICBjb25zdCBzdGF0aWNTdHlsZSA9IG5vZGUuc3RhdGljU3R5bGUgfHwgJ1xcJ1xcJyc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIG5vZGUuYXR0cnNNYXAuc3R5bGUgPSBge3sgX21zKCR7c3RhdGljU3R5bGUucmVwbGFjZSgvXCIvZywgJ1xcJycpfSwgJHtub2RlLnN0eWxlQmluZGluZyA/IG5vZGUuc3R5bGVCaW5kaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKSA6ICd7fSd9JHt2U2hvdyA/IGAsICR7dlNob3d9YCA6ICcnfSkgfX1gO1xuICAgICAgICBiaW5kS2V5cy5mb3JFYWNoKGtleSA9PiBkZWxldGUgbm9kZS5hdHRyc01hcFtrZXldKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYmluZFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHJlQmluZCA9IC9eKHYtYmluZCk/XFw6LztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyc01hcCkuZmlsdGVyKG4gPT4gcmVCaW5kLnRlc3QobikpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmF0dHJzTWFwW2tleV07XG4gICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwW2tleV07XG4gICAgICAgIG5vZGUuYXR0cnNNYXBba2V5LnJlcGxhY2UocmVCaW5kLCAnJyldID0gYHt7ICR7dmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnICcpfSB9fWA7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddKSB7XG4gICAgICAgIGNvbnN0IHZCaW5kID0gbm9kZS5hdHRyc01hcFsndi1iaW5kJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtYmluZCddID0gYHt7ICR7dkJpbmR9IH19YDtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZCddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBpZlxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIHBvc3RUcmFuc2Zvcm1Ob2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5pZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWlmJ10gPSBub2RlLmlmO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1pZiddO1xuICAgIH1cblxuICAgIGlmIChub2RlLmVsc2VpZikge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UtaWYnXSA9IG5vZGUuZWxzZWlmO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1lbHNlLWlmJ107XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZWxzZSkge1xuICAgICAgICBub2RlLmF0dHJzTWFwWydzLWVsc2UnXSA9IG5vZGUuZWxzZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZWxzZSddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBmb3JcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5mb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmciA9IG5vZGUuYWxpYXM7XG5cbiAgICBpZiAobm9kZS5pdGVyYXRvcjEpIHtcbiAgICAgICAgZnIgKz0gYCwke25vZGUuaXRlcmF0b3IxfWA7XG4gICAgfVxuXG4gICAgZnIgKz0gYCBpbiBfbCgke25vZGUuZm9yfSlgO1xuXG4gICAgaWYgKG5vZGUua2V5KSB7XG4gICAgICAgIGZyICs9IGAgdHJhY2tCeSAke25vZGUua2V5fWA7XG4gICAgfVxuXG4gICAgbm9kZS5hdHRyc01hcFsncy1mb3InXSA9IGZyO1xuXG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtZm9yJ107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ2tleSddO1xuICAgIGRlbGV0ZSBub2RlLmF0dHJzTWFwWyc6a2V5J107XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtYmluZDprZXknXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBldmVudFxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmNvbnN0IHByZWZpeGVycyA9IFsnQCcsICd2LW9uOiddO1xuY29uc3QgcmVFdmVudCA9IC9eKEB8di1vbjopLztcblxuZnVuY3Rpb24gcG9zdFRyYW5zZm9ybU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGV2ZW50QXR0cnMgPSBub2RlLmF0dHJzTGlzdC5maWx0ZXIobiA9PiByZUV2ZW50LnRlc3Qobi5uYW1lKSk7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIGV2ZW50QXR0cnMpIHtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbYXR0ci5uYW1lXTtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLm1vZGlmaWVyc10gPSBhdHRyLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbm9kZS5hdHRyc01hcFtgb24tJHtuYW1lLnJlcGxhY2UocmVFdmVudCwgJycpfWBdXG4gICAgICAgICAgICA9IGAke21vZGlmaWVycy5tYXAobSA9PiBgJHttfTpgKS5qb2luKCcnKX0ke2F0dHIudmFsdWV9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgY2xhc3NcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSAmJiBub2RlLmF0dHJzTWFwWyd2LWh0bWwnXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZGlyZWN0aXZlcy5maW5kKGQgPT4gZC5uYW1lID09PSAnaHRtbCcpLnZhbHVlO1xuICAgICAgICBkZWxldGUgbm9kZS5hdHRyc01hcFsndi1odG1sJ107XG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ3MtaHRtbCddID0gYHt7ICR7dmFsdWV9IH19YDtcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09IDEgJiYgbm9kZS5hdHRyc01hcFsndi10ZXh0J10pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmRpcmVjdGl2ZXMuZmluZChkID0+IGQubmFtZSA9PT0gJ3RleHQnKS52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG5vZGUuYXR0cnNNYXBbJ3YtdGV4dCddO1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW3tcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICB0ZXh0OiBge3sgJHt2YWx1ZX0gfX1gXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvc3RUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSDkuIDkupvlt6Xlhbflh73mlbBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCh0bywgZnJvbSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldKSB7XG4gICAgICAgICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZm4pIHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgICAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKTtcbiIsIi8qKlxuICogQGZpbGUgcmVmXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWwnO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gMSB8fCAhbm9kZS5hdHRyc01hcC5yZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWYgPSBub2RlLmF0dHJzTWFwWydzLXJlZiddID0gbm9kZS5hdHRyc01hcC5yZWY7XG4gICAgZGVsZXRlIG5vZGUuYXR0cnNNYXAucmVmO1xuXG4gICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgbmFtZTogcmVmLFxuICAgICAgICByb290OiBub2RlLnBhcmVudCA/IHVuZGVmaW5lZCA6IDEsXG4gICAgICAgIGZvcjogbm9kZS5mb3IgPyAxIDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIG9wdGlvbnMucmVmcy5wdXNoKGluZm8pO1xuICAgIGNvbnN0IGNhbWVsTmFtZSA9IGNhbWVsaXplKHJlZik7XG5cbiAgICBpZiAoY2FtZWxOYW1lICE9PSByZWYpIHtcbiAgICAgICAgb3B0aW9ucy5yZWZzLnB1c2goe1xuICAgICAgICAgICAgLi4uaW5mbyxcbiAgICAgICAgICAgIG5hbWU6IGNhbWVsTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgdHJhbnNmb3JtZXJzXG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuaW1wb3J0IGNsYXp6IGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9iaW5kJztcbmltcG9ydCB5ZiBmcm9tICcuL2lmJztcbmltcG9ydCBmciBmcm9tICcuL2Zvcic7XG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuaW1wb3J0IHJlZiBmcm9tICcuL3JlZic7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICB5ZixcbiAgICBmcixcbiAgICBldmVudCxcbiAgICBodG1sLFxuICAgIHJlZixcblxuICAgIGNsYXp6LFxuICAgIHN0eWxlLFxuXG4gICAgLy8gYmluZCDmlL7lnKggY2xhc3Mg5ZKMIHN0eWxlIOWkhOeQhuWujOS5i+WQjlxuICAgIGJpbmRcbl07XG4iLCIvKipcbiAqIEBmaWxlIGdldCBodG1sIGZyb20gYXN0XG4gKiBAYXV0aG9yIGN4dG9tKGN4dG9tMjAwOEBnbWFpbC5jb20pXG4gKi9cblxuLypcbiAgU2VsZi1lbmNsb3NpbmcgdGFncyAoc3RvbGVuIGZyb20gbm9kZS1odG1scGFyc2VyKVxuKi9cbmNvbnN0IHNpbmdsZVRhZyA9IHtcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlXG59O1xuXG5jb25zdCBub1ZhbHVlQXR0ciA9IHtcbiAgICAncy1lbHNlJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc3RyaW5naWZ5QXR0cihrZXksIHZhbHVlKSB7XG4gICAgaWYgKG5vVmFsdWVBdHRyW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2tleX09JHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5naWZ5KGFzdCwgc2NvcGVJZCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhc3QpKSB7XG4gICAgICAgIGFzdCA9IFthc3RdO1xuICAgIH1cblxuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYXN0KSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IDMgfHwgbm9kZS50eXBlID09PSAyKSB7XG4gICAgICAgICAgICBodG1sICs9IG5vZGUudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyc01hcCkubWFwKGtleSA9PiBzdHJpbmdpZnlBdHRyKGtleSwgbm9kZS5hdHRyc01hcFtrZXldKSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goc2NvcGVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzQXR0ciA9IGF0dHJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBodG1sICs9IGA8JHtub2RlLnRhZ30ke2hhc0F0dHIgPyAnICcgOiAnJ30ke2F0dHJzLmpvaW4oJyAnKX0+YDtcbiAgICAgICAgICAgIGh0bWwgKz0gaGFzQ2hpbGRyZW4gPyBzdHJpbmdpZnkobm9kZS5jaGlsZHJlbiwgc2NvcGVJZCkgOiAnJztcbiAgICAgICAgICAgIGh0bWwgKz0gIWhhc0NoaWxkcmVuICYmIHNpbmdsZVRhZ1tub2RlLnRhZ10gPyAnJyA6IGA8LyR7bm9kZS50YWd9PmA7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucyAmJiBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBzdHJpbmdpZnkobm9kZS5pZkNvbmRpdGlvbnMuc2xpY2UoMSkubWFwKG4gPT4gbi5ibG9jayksIHNjb3BlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG59XG4iLCIvKipcbiAqIEBmaWxlIGNzcyBtb2R1bGVzIG1vZHVsZVxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNzc01vZHVsZXMpIHtcblxuICAgIGZ1bmN0aW9uIHByZVRyYW5zZm9ybU5vZGUoZWwpIHtcbiAgICAgICAgaWYgKGNzc01vZHVsZXMgJiYgY3NzTW9kdWxlcy4kc3R5bGUgJiYgZWwuYXR0cnNNYXAuY2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0NsYXNzID0gZWwuYXR0cnNNYXAuY2xhc3MucmVwbGFjZSgvKF5cInxcIiQpL2csICcnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZWwuYXR0cnNNYXAuY2xhc3MgPSBzdGF0aWNDbGFzcy5tYXAoYyA9PiAoY3NzTW9kdWxlcy4kc3R5bGVbY2FtZWxpemUoYyldIHx8IGMpKS5qb2luKCcgJyk7XG4gICAgICAgICAgICBlbC5hdHRyc0xpc3QgPSBlbC5hdHRyc0xpc3QubWFwKFxuICAgICAgICAgICAgICAgICh7bmFtZSwgdmFsdWV9KSA9PiAoe25hbWUsIHZhbHVlOiBuYW1lID09PSAnY2xhc3MnID8gZWwuYXR0cnNNYXAuY2xhc3MgOiB2YWx1ZX0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJlVHJhbnNmb3JtTm9kZVxuICAgIH07XG59XG5cbiIsIi8qKlxuICogQGZpbGUgc3RyaXBcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBwb3N0VHJhbnNmb3JtTm9kZShlbCkge1xuICAgIGVsLmNoaWxkcmVuID0gZWwuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGNoaWxkLnRleHQgPSBfLnRyaW0oY2hpbGQudGV4dCwgJyBcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gMiAmJiBjaGlsZC5leHByZXNzaW9uKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gY2hpbGQuZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZXhwcmVzc2lvbi5zcGxpdCgnKycpO1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gcGFydHNbMF07XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaXJzdCkpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IEpTT04ucGFyc2UoZmlyc3QpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gXy50cmltU3RhcnQoZmlyc3QsICcgXFxuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vuc1swXSA9IGZpcnN0O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IEpTT04uc3RyaW5naWZ5KGZpcnN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXlwiLipcIiQvLnRlc3QobGFzdCkpIHtcbiAgICAgICAgICAgICAgICBsYXN0ID0gSlNPTi5wYXJzZShsYXN0KTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gXy50cmltRW5kKGxhc3QsICcgXFxuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudG9rZW5zW3BhcnRzLmxlbmd0aCAtIDFdID0gbGFzdDtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gPSBKU09OLnN0cmluZ2lmeShsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRva2Vucy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGQuZXhwcmVzc2lvbiA9IHBhcnRzLmpvaW4oJysnKTtcbiAgICAgICAgICAgIGNoaWxkLnRleHQgPSBfLnRyaW0oY2hpbGQudGV4dCwgJyBcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3N0VHJhbnNmb3JtTm9kZVxufTtcbiIsIi8qKlxuICogQGZpbGUgYXRvbSBtb2R1bGVcbiAqIEBhdXRob3IgY3h0b20oY3h0b20yMDA4QGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlKGVsKSB7XG4gICAgZWwuYXR0cnNMaXN0ID0gZWwuYXR0cnNMaXN0Lm1hcCgoe25hbWUsIHZhbHVlfSkgPT4ge1xuICAgICAgICBkZWxldGUgZWwuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15hLS8sICd2LScpO1xuICAgICAgICBlbC5hdHRyc01hcFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcmVUcmFuc2Zvcm1Ob2RlXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBjb21waWxlclxuICogQGF1dGhvciBjeHRvbShjeHRvbTIwMDhAZ21haWwuY29tKVxuICovXG5cbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMnO1xuaW1wb3J0IHtjb21waWxlIGFzIHZ1ZUNvbXBpbGV9IGZyb20gJ3Z1ZS10ZW1wbGF0ZS1jb21waWxlcic7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5JztcbmltcG9ydCBnZXRDc3NNb2R1bGVzIGZyb20gJy4vbW9kdWxlcy9jc3Ntb2R1bGVzJztcbmltcG9ydCBzdHJpcCBmcm9tICcuL21vZHVsZXMvc3RyaXAnO1xuaW1wb3J0IGF0b20gZnJvbSAnLi9tb2R1bGVzL2F0b20nO1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtwYXJzZVRlbXBsYXRlfSBmcm9tICdzYW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShzb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBtb2R1bGVzID0gW10sXG4gICAgICAgIGNzc01vZHVsZXMgPSBudWxsLFxuICAgICAgICBzY29wZUlkID0gJycsXG4gICAgICAgIHN0cmlwID0gdHJ1ZSxcbiAgICAgICAgYXRvbTogaXNBdG9tID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghaXNFbXB0eShjc3NNb2R1bGVzKSkge1xuICAgICAgICBtb2R1bGVzLnVuc2hpZnQoZ2V0Q3NzTW9kdWxlcyhjc3NNb2R1bGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmlwKSB7XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChzdHJpcCk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXRvbSkge1xuICAgICAgICBtb2R1bGVzLnVuc2hpZnQoYXRvbSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZXJPcHRpb25zID0ge1xuICAgICAgICBtb2R1bGVzOiBbXG4gICAgICAgICAgICAuLi5idWlsZEluTW9kdWxlcyxcbiAgICAgICAgICAgIC4uLm1vZHVsZXNcbiAgICAgICAgXSxcbiAgICAgICAgcHJlc2VydmVXaGl0ZXNwYWNlOiBmYWxzZSxcbiAgICAgICAgdXNlRHluYW1pY0NvbXBvbmVudDogZmFsc2UsXG4gICAgICAgIHJlZnM6IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IHthc3R9ID0gdnVlQ29tcGlsZShzb3VyY2UudHJpbSgpLCBjb21waWxlck9wdGlvbnMpO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBzdHJpbmdpZnkoYXN0LCBzY29wZUlkKTtcbiAgICBjb25zdCBhTm9kZSA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUpLmNoaWxkcmVuWzBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXN0LFxuICAgICAgICBhTm9kZSxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIHJlZnM6IGNvbXBpbGVyT3B0aW9ucy5yZWZzXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=