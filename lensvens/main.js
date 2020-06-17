/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rangeslider-pure/dist/range-slider.js":
/*!************************************************************!*\
  !*** ./node_modules/rangeslider-pure/dist/range-slider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/range-slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/range-slider.css":
/*!******************************!*\
  !*** ./src/range-slider.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/range-slider.js":
/*!*****************************!*\
  !*** ./src/range-slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.js");

var dom = _interopRequireWildcard(_dom);

var _functions = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

__webpack_require__(/*! ./range-slider.css */ "./src/range-slider.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
var MAX_SET_BY_DEFAULT = 100;
var HANDLE_RESIZE_DELAY = 300;
var HANDLE_RESIZE_DEBOUNCE = 50;

var pluginName = 'rangeSlider';
var inputrange = dom.supportsRange();
var defaults = {
  polyfill: true,
  root: document,
  rangeClass: 'rangeSlider',
  disabledClass: 'rangeSlider--disabled',
  fillClass: 'rangeSlider__fill',
  bufferClass: 'rangeSlider__buffer',
  handleClass: 'rangeSlider__handle',
  startEvent: ['mousedown', 'touchstart', 'pointerdown'],
  moveEvent: ['mousemove', 'touchmove', 'pointermove'],
  endEvent: ['mouseup', 'touchend', 'pointerup'],
  min: null,
  max: null,
  step: null,
  value: null,
  buffer: null,
  stick: null,
  borderRadius: 10,
  vertical: false
};

var verticalSlidingFixRegistered = false;

/**
 * Plugin
 * @param {HTMLElement} element
 * @param {this} options
 */

var RangeSlider = function () {
  function RangeSlider(element, options) {
    _classCallCheck(this, RangeSlider);

    var minSetByDefault = void 0;
    var maxSetByDefault = void 0;
    var stepSetByDefault = void 0;
    var stickAttribute = void 0;
    var stickValues = void 0;

    RangeSlider.instances.push(this);

    this.element = element;
    this.options = func.simpleExtend(defaults, options);
    this.polyfill = this.options.polyfill;
    this.vertical = this.options.vertical;
    this.onInit = this.options.onInit;
    this.onSlide = this.options.onSlide;
    this.onSlideStart = this.options.onSlideStart;
    this.onSlideEnd = this.options.onSlideEnd;
    this.onSlideEventsCount = -1;
    this.isInteractsNow = false;
    this.needTriggerEvents = false;

    this._addVerticalSlideScrollFix();

    // Plugin should only be used as a polyfill
    if (!this.polyfill) {
      // Input range support?
      if (inputrange) {
        return;
      }
    }

    this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));

    this.identifier = 'js-' + pluginName + '-' + func.uuid();

    this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);

    this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);

    this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));

    this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));

    this.percent = null;

    if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
      this.stick = this.options.stick;
    } else if (stickAttribute = this.element.getAttribute('stick')) {
      stickValues = stickAttribute.split(' ');
      if (stickValues.length >= 1) {
        this.stick = stickValues.map(parseFloat);
      }
    }
    if (this.stick && this.stick.length === 1) {
      this.stick.push(this.step * 1.5);
    }
    this._updatePercentFromValue();

    this.toFixed = this._toFixed(this.step);

    var directionClass = void 0;

    this.container = document.createElement('div');
    dom.addClass(this.container, this.options.fillClass);

    directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
    dom.addClass(this.container, directionClass);

    this.handle = document.createElement('div');
    dom.addClass(this.handle, this.options.handleClass);

    directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
    dom.addClass(this.handle, directionClass);

    this.range = document.createElement('div');
    dom.addClass(this.range, this.options.rangeClass);
    this.range.id = this.identifier;

    var elementTitle = element.getAttribute('title');
    if (elementTitle && elementTitle.length > 0) {
      this.range.setAttribute('title', elementTitle);
    }

    if (this.options.bufferClass) {
      this.buffer = document.createElement('div');
      dom.addClass(this.buffer, this.options.bufferClass);
      this.range.appendChild(this.buffer);

      directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
      dom.addClass(this.buffer, directionClass);
    }

    this.range.appendChild(this.container);
    this.range.appendChild(this.handle);

    directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
    dom.addClass(this.range, directionClass);

    if (func.isNumberLike(this.options.value)) {
      this._setValue(this.options.value, true);
      this.element.value = this.options.value;
    }

    if (func.isNumberLike(this.options.buffer)) {
      this.element.setAttribute('data-buffer', this.options.buffer);
    }

    if (func.isNumberLike(this.options.min) || minSetByDefault) {
      this.element.setAttribute('min', '' + this.min);
    }

    if (func.isNumberLike(this.options.max) || maxSetByDefault) {
      this.element.setAttribute('max', '' + this.max);
    }

    if (func.isNumberLike(this.options.step) || stepSetByDefault) {
      this.element.setAttribute('step', '' + this.step);
    }

    dom.insertAfter(this.element, this.range);

    // hide the input visually
    dom.setCss(this.element, {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'overflow': 'hidden',
      'opacity': '0'
    });

    // Store context
    this._handleDown = this._handleDown.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._startEventListener = this._startEventListener.bind(this);
    this._changeEventListener = this._changeEventListener.bind(this);
    this._handleResize = this._handleResize.bind(this);

    this._init();

    // Attach Events
    window.addEventListener('resize', this._handleResize, false);

    dom.addEventListeners(this.options.root, this.options.startEvent, this._startEventListener);

    // Listen to programmatic value changes
    this.element.addEventListener('change', this._changeEventListener, false);
  }

  /**
   * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
   * @param {Element} el
   * @param {Object} options
   */


  _createClass(RangeSlider, [{
    key: 'update',


    /* public methods */

    /**
     * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
     * @param {Boolean} triggerEvents
     * @returns {RangeSlider}
     */
    value: function update(obj, triggerEvents) {
      if (triggerEvents) {
        this.needTriggerEvents = true;
      }
      if (func.isObject(obj)) {
        if (func.isNumberLike(obj.min)) {
          this.element.setAttribute('min', '' + obj.min);
          this.min = obj.min;
        }

        if (func.isNumberLike(obj.max)) {
          this.element.setAttribute('max', '' + obj.max);
          this.max = obj.max;
        }

        if (func.isNumberLike(obj.step)) {
          this.element.setAttribute('step', '' + obj.step);
          this.step = obj.step;
          this.toFixed = this._toFixed(obj.step);
        }

        if (func.isNumberLike(obj.buffer)) {
          this._setBufferPosition(obj.buffer);
        }

        if (func.isNumberLike(obj.value)) {
          this._setValue(obj.value);
        }
      }
      this._update();
      this.onSlideEventsCount = 0;
      this.needTriggerEvents = false;
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this = this;

      dom.removeAllListenersFromEl(this, this.options.root);
      window.removeEventListener('resize', this._handleResize, false);
      this.element.removeEventListener('change', this._changeEventListener, false);

      this.element.style.cssText = '';
      delete this.element[pluginName];

      // Remove the generated markup
      if (this.range) {
        this.range.parentNode.removeChild(this.range);
      }

      RangeSlider.instances = RangeSlider.instances.filter(function (plugin) {
        return plugin !== _this;
      });

      if (!RangeSlider.instances.some(function (plugin) {
        return plugin.vertical;
      })) {
        this._removeVerticalSlideScrollFix();
      }
    }

    /* private methods */

  }, {
    key: '_toFixed',
    value: function _toFixed(step) {
      return (step + '').replace('.', '').length - 1;
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.onInit && typeof this.onInit === 'function') {
        this.onInit();
      }
      this._update(false);
    }
  }, {
    key: '_updatePercentFromValue',
    value: function _updatePercentFromValue() {
      this.percent = (this.value - this.min) / (this.max - this.min);
    }

    /**
     * This method check if this.identifier exists in ev.target's ancestors
     * @param ev
     * @param data
     */

  }, {
    key: '_startEventListener',
    value: function _startEventListener(ev, data) {
      var _this2 = this;

      var el = ev.target;
      var isEventOnSlider = false;

      if (ev.which !== 1 && !('touches' in ev)) {
        return;
      }

      dom.forEachAncestors(el, function (el) {
        return isEventOnSlider = el.id === _this2.identifier && !dom.hasClass(el, _this2.options.disabledClass);
      }, true);

      if (isEventOnSlider) {
        this._handleDown(ev, data);
      }
    }
  }, {
    key: '_changeEventListener',
    value: function _changeEventListener(ev, data) {
      if (data && data.origin === this.identifier) {
        return;
      }

      var value = ev.target.value;
      var pos = this._getPositionFromValue(value);

      this._setPosition(pos);
    }
  }, {
    key: '_update',
    value: function _update(triggerEvent) {
      var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';

      this.handleSize = dom.getDimension(this.handle, sizeProperty);
      this.rangeSize = dom.getDimension(this.range, sizeProperty);
      this.maxHandleX = this.rangeSize - this.handleSize;
      this.grabX = this.handleSize / 2;
      this.position = this._getPositionFromValue(this.value);

      // Consider disabled state
      if (this.element.disabled) {
        dom.addClass(this.range, this.options.disabledClass);
      } else {
        dom.removeClass(this.range, this.options.disabledClass);
      }

      this._setPosition(this.position);
      if (this.options.bufferClass && this.options.buffer) {
        this._setBufferPosition(this.options.buffer);
      }
      this._updatePercentFromValue();
      if (triggerEvent !== false) {
        dom.triggerEvent(this.element, 'change', { origin: this.identifier });
      }
    }
  }, {
    key: '_addVerticalSlideScrollFix',
    value: function _addVerticalSlideScrollFix() {
      if (this.vertical && !verticalSlidingFixRegistered) {
        document.addEventListener('touchmove', RangeSlider._touchMoveScrollHandler, { passive: false });
        verticalSlidingFixRegistered = true;
      }
    }
  }, {
    key: '_removeVerticalSlideScrollFix',
    value: function _removeVerticalSlideScrollFix() {
      document.removeEventListener('touchmove', RangeSlider._touchMoveScrollHandler);
      verticalSlidingFixRegistered = false;
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      var _this3 = this;

      return func.debounce(function () {
        // Simulate resizeEnd event.
        func.delay(function () {
          _this3._update();
        }, HANDLE_RESIZE_DELAY);
      }, HANDLE_RESIZE_DEBOUNCE)();
    }
  }, {
    key: '_handleDown',
    value: function _handleDown(e) {
      this.isInteractsNow = true;
      e.preventDefault();
      dom.addEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
      dom.addEventListeners(this.options.root, this.options.endEvent, this._handleEnd);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
        return;
      }

      var boundingClientRect = this.range.getBoundingClientRect();

      var posX = this._getRelativePosition(e);
      var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var handleX = this._getPositionFromNode(this.handle) - rangeX;
      var position = posX - this.grabX;

      this._setPosition(position);

      if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
        this.grabX = posX - handleX;
      }
      this._updatePercentFromValue();
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(e) {
      var posX = this._getRelativePosition(e);

      this.isInteractsNow = true;
      e.preventDefault();
      this._setPosition(posX - this.grabX);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(e) {
      e.preventDefault();
      dom.removeEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
      dom.removeEventListeners(this.options.root, this.options.endEvent, this._handleEnd);

      // Ok we're done fire the change event
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
          this.onSlideEnd(this.value, this.percent, this.position);
        }

        if (this.vertical) {
          RangeSlider.slidingVertically = false;
        }
      }
      this.onSlideEventsCount = 0;
      this.isInteractsNow = false;
    }
  }, {
    key: '_setPosition',
    value: function _setPosition(pos) {
      var position = void 0;
      var stickRadius = void 0;
      var restFromValue = void 0;
      var stickTo = void 0;

      // Snapping steps
      var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX));

      // Stick to stick[0] in radius stick[1]
      if (this.stick) {
        stickTo = this.stick[0];
        stickRadius = this.stick[1] || 0.1;
        restFromValue = value % stickTo;
        if (restFromValue < stickRadius) {
          value = value - restFromValue;
        } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
          value = value - restFromValue + stickTo;
        }
      }
      position = this._getPositionFromValue(value);

      // Update ui
      if (this.vertical) {
        this.container.style.height = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style['msTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style.transform = 'translateY(-' + position + 'px)';
      } else {
        this.container.style.width = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateX(' + position + 'px)';
        this.handle.style['msTransform'] = 'translateX(' + position + 'px)';
        this.handle.style.transform = 'translateX(' + position + 'px)';
      }

      this._setValue(value);

      // Update globals
      this.position = position;
      this.value = value;
      this._updatePercentFromValue();

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
          this.onSlideStart(this.value, this.percent, this.position);
        }

        if (this.onSlide && typeof this.onSlide === 'function') {
          this.onSlide(this.value, this.percent, this.position);
        }

        if (this.vertical) {
          RangeSlider.slidingVertically = true;
        }
      }

      this.onSlideEventsCount++;
    }
  }, {
    key: '_setBufferPosition',
    value: function _setBufferPosition(pos) {
      var isPercent = true;

      if (isFinite(pos)) {
        pos = parseFloat(pos);
      } else if (func.isString(pos)) {
        if (pos.indexOf('px') > 0) {
          isPercent = false;
        }
        pos = parseFloat(pos);
      } else {
        console.warn('New position must be XXpx or XX%');
        return;
      }

      if (isNaN(pos)) {
        console.warn('New position is NaN');
        return;
      }
      if (!this.options.bufferClass) {
        console.warn('You disabled buffer, it\'s className is empty');
        return;
      }
      var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

      if (bufferSize < 0) {
        bufferSize = 0;
      }
      if (bufferSize > 100) {
        bufferSize = 100;
      }
      this.options.buffer = bufferSize;

      var paddingSize = this.options.borderRadius / this.rangeSize * 100;
      var bufferSizeWithPadding = bufferSize - paddingSize;

      if (bufferSizeWithPadding < 0) {
        bufferSizeWithPadding = 0;
      }

      if (this.vertical) {
        this.buffer.style.height = bufferSizeWithPadding + '%';
        this.buffer.style.bottom = paddingSize * 0.5 + '%';
      } else {
        this.buffer.style.width = bufferSizeWithPadding + '%';
        this.buffer.style.left = paddingSize * 0.5 + '%';
      }

      this.element.setAttribute('data-buffer', bufferSize);
    }

    /**
     *
     * @param {Element} node
     * @returns {*} Returns element position relative to the parent
     * @private
     */

  }, {
    key: '_getPositionFromNode',
    value: function _getPositionFromNode(node) {
      var i = this.vertical ? this.maxHandleX : 0;

      while (node !== null) {
        i += this.vertical ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent;
      }
      return i;
    }

    /**
     *
     * @param {(MouseEvent|TouchEvent)}e
     * @returns {number}
     */

  }, {
    key: '_getRelativePosition',
    value: function _getRelativePosition(e) {
      var boundingClientRect = this.range.getBoundingClientRect();

      // Get the offset relative to the viewport
      var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var pageOffset = 0;

      var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

      if (typeof e[pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
      } else if (typeof e.originalEvent !== 'undefined') {
        if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent[pagePositionProperty];
        } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent.touches[0][pagePositionProperty];
        }
      } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches[0][pagePositionProperty];
      } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
        pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
      }

      if (this.vertical) {
        pageOffset -= window.pageYOffset;
      }

      return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
    }
  }, {
    key: '_getPositionFromValue',
    value: function _getPositionFromValue(value) {
      var percentage = (value - this.min) / (this.max - this.min);
      var pos = percentage * this.maxHandleX;

      return isNaN(pos) ? 0 : pos;
    }
  }, {
    key: '_getValueFromPosition',
    value: function _getValueFromPosition(pos) {
      var percentage = pos / (this.maxHandleX || 1);
      var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;

      return Number(value.toFixed(this.toFixed));
    }
  }, {
    key: '_setValue',
    value: function _setValue(value, force) {
      if (value === this.value && !force) {
        return;
      }

      // Set the new value and fire the `input` event
      this.element.value = value;
      this.value = value;
      dom.triggerEvent(this.element, 'input', { origin: this.identifier });
    }
  }], [{
    key: 'create',
    value: function create(el, options) {
      var createInstance = function createInstance(el) {
        var data = el[pluginName];

        // Create a new instance.
        if (!data) {
          data = new RangeSlider(el, options);
          el[pluginName] = data;
        }
      };

      if (el.length) {
        Array.prototype.slice.call(el).forEach(function (el) {
          createInstance(el);
        });
      } else {
        createInstance(el);
      }
    }
  }, {
    key: '_touchMoveScrollHandler',
    value: function _touchMoveScrollHandler(event) {
      if (RangeSlider.slidingVertically) {
        event.preventDefault();
      }
    }
  }]);

  return RangeSlider;
}();

exports.default = RangeSlider;


RangeSlider.version = "0.4.11";
RangeSlider.dom = dom;
RangeSlider.functions = func;
RangeSlider.instances = [];
RangeSlider.slidingVertically = false;
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

var _functions = __webpack_require__(/*! ./functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENT_LISTENER_LIST = 'eventListenerList';

var detectIE = exports.detectIE = function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');

    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var ieVersion = detectIE();
var eventCaptureParams = window.PointerEvent && !ieVersion ? { passive: false } : false;

/**
 * Check if a `element` is visible in the DOM
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
var isHidden = exports.isHidden = function isHidden(element) {
  return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
};

/**
 * Get hidden parentNodes of an `element`
 *
 * @param {Element} element
 * @return {Element[]}
 */
var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
  var parents = [];
  var node = element.parentNode;

  while (node && isHidden(node)) {
    parents.push(node);
    node = node.parentNode;
  }
  return parents;
};

/**
 * Returns dimensions for an element even if it is not visible in the DOM.
 *
 * @param  {Element} element
 * @param  {string}  key     (e.g. offsetWidth …)
 * @return {Number}
 */
var getDimension = exports.getDimension = function getDimension(element, key) {
  var hiddenParentNodes = getHiddenParentNodes(element);
  var hiddenParentNodesLength = hiddenParentNodes.length;
  var hiddenParentNodesStyle = [];
  var dimension = element[key];

  // Used for native `<details>` elements
  var toggleOpenProperty = function toggleOpenProperty(element) {
    if (typeof element.open !== 'undefined') {
      element.open = !element.open;
    }
  };

  if (hiddenParentNodesLength) {
    for (var i = 0; i < hiddenParentNodesLength; i++) {
      // Cache the styles to restore then later.
      hiddenParentNodesStyle.push({
        display: hiddenParentNodes[i].style.display,
        height: hiddenParentNodes[i].style.height,
        overflow: hiddenParentNodes[i].style.overflow,
        visibility: hiddenParentNodes[i].style.visibility
      });

      hiddenParentNodes[i].style.display = 'block';
      hiddenParentNodes[i].style.height = '0';
      hiddenParentNodes[i].style.overflow = 'hidden';
      hiddenParentNodes[i].style.visibility = 'hidden';
      toggleOpenProperty(hiddenParentNodes[i]);
    }

    dimension = element[key];

    for (var j = 0; j < hiddenParentNodesLength; j++) {
      toggleOpenProperty(hiddenParentNodes[j]);
      hiddenParentNodes[j].style.display = hiddenParentNodesStyle[j].display;
      hiddenParentNodes[j].style.height = hiddenParentNodesStyle[j].height;
      hiddenParentNodes[j].style.overflow = hiddenParentNodesStyle[j].overflow;
      hiddenParentNodes[j].style.visibility = hiddenParentNodesStyle[j].visibility;
    }
  }
  return dimension;
};

/**
 *
 * @param {HTMLElement} el
 * @param {Object} cssObj
 * @returns {*}
 */
var setCss = exports.setCss = function setCss(el, cssObj) {
  for (var key in cssObj) {
    el.style[key] = cssObj[key];
  }
  return el.style;
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var hasClass = exports.hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var addClass = exports.addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var removeClass = exports.removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

/**
 *
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {boolean} andForElement - apply callback for el
 * @returns {HTMLElement}
 */
var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
  if (andForElement) {
    callback(el);
  }

  while (el.parentNode && !callback(el)) {
    el = el.parentNode;
  }

  return el;
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} name event name
 * @param {Object} data
 */
var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
  if (!func.isString(name)) {
    throw new TypeError('event name must be String');
  }
  if (!(el instanceof HTMLElement)) {
    throw new TypeError('element must be HTMLElement');
  }
  name = name.trim();
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);
  el.dispatchEvent(event);
};

/**
 * @param {Object} referenceNode after this
 * @param {Object} newNode insert this
 */
var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Add event listeners and push them to el[EVENT_LISTENER_LIST]
 * @param {HTMLElement|Node|Document} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    if (!el[EVENT_LISTENER_LIST]) {
      el[EVENT_LISTENER_LIST] = {};
    }
    if (!el[EVENT_LISTENER_LIST][eventName]) {
      el[EVENT_LISTENER_LIST][eventName] = [];
    }

    el.addEventListener(eventName, listener, eventCaptureParams);
    if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
      el[EVENT_LISTENER_LIST][eventName].push(listener);
    }
  });
};

/**
 * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
 * @param {HTMLElement} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    var index = void 0;

    el.removeEventListener(eventName, listener, false);

    if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
      el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
    }
  });
};

/**
 * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
 * @param {RangeSlider} instance
 * @param {HTMLElement} el DOM element
 */
var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
  if (!el[EVENT_LISTENER_LIST]) {
    return;
  }

  /* jshint ignore:start */

  /**
   *
   * @callback listener
   * @this {Object} event name
   */
  function rm(listener) {
    if (listener === instance._startEventListener) {
      this.el.removeEventListener(this.eventName, listener, false);
    }
  }

  for (var eventName in el[EVENT_LISTENER_LIST]) {
    el[EVENT_LISTENER_LIST][eventName].forEach(rm, { eventName: eventName, el: el });
  }

  el[EVENT_LISTENER_LIST] = {};
  /* jshint ignore:end */
};

/**
 * Range feature detection
 * @return {Boolean}
 */
var supportsRange = exports.supportsRange = function supportsRange() {
  var input = document.createElement('input');

  input.setAttribute('type', 'range');
  return input.type !== 'text';
};

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Create a random uuid
 */
var uuid = exports.uuid = function uuid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
var delay = exports.delay = function delay(fn, wait) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
var debounce = exports.debounce = function debounce(fn) {
  var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

var isString = exports.isString = function isString(obj) {
  return obj === '' + obj;
};

var isArray = exports.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
  return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
};

var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return null;
  }

  for (var i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

var isObject = exports.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
  var opt = {};

  for (var key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (var _key4 in options) {
    opt[_key4] = options[_key4];
  }

  return opt;
};

var between = exports.between = function between(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
};

/***/ })

/******/ });
});
//# sourceMappingURL=range-slider.js.map

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/faq */ "./src/js/modules/faq.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/order */ "./src/js/modules/order.js");
/* harmony import */ var _modules_policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/policy */ "./src/js/modules/policy.js");
/* harmony import */ var _modules_tinkoff_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tinkoff-order */ "./src/js/modules/tinkoff-order.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_table_spoiler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/table-spoiler */ "./src/js/modules/table-spoiler.js");







var mobileMenu = new _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"]();
mobileMenu.init();
var orderPopup = new _modules_order__WEBPACK_IMPORTED_MODULE_2__["default"]();
var policyPopup = new _modules_policy__WEBPACK_IMPORTED_MODULE_3__["default"]();
var tinkoffOrder = new _modules_tinkoff_order__WEBPACK_IMPORTED_MODULE_4__["default"]();
var tableSpoiler = new _modules_table_spoiler__WEBPACK_IMPORTED_MODULE_6__["default"]();
tableSpoiler.init();
var faq = new _modules_faq__WEBPACK_IMPORTED_MODULE_0__["default"]();
faq.init();
var profitCalculator = new _modules_calculator__WEBPACK_IMPORTED_MODULE_5__["default"]();

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProritCalculator; });
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rangeslider-pure */ "./node_modules/rangeslider-pure/dist/range-slider.js");
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rangeslider_pure__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var OPTIONS = {
  // fixed
  cost: {
    id: 'pc-cost',
    value: 2500
  },
  royalty: {
    id: 'pc-royalty',
    value: 2500
  },
  smm: {
    id: 'pc-smm',
    value: 2000
  },
  polygraphy: {
    id: 'pc-polygraphy',
    value: 1000
  },
  conversion: {
    id: 'pc-conversion',
    value: 25
  },
  // variables
  orders: {
    id: 'pc-orders',
    value: 10,
    min: 5,
    max: 50
  },
  avgCheck: {
    id: 'pc-avg-check',
    value: 6000,
    min: 4000,
    max: 10000,
    step: 500
  },
  leads: {
    id: 'pc-leads',
    value: 40,
    min: 20,
    max: 200
  },
  addCosts: {
    id: 'pc-add-costs',
    value: 0,
    min: 0,
    max: 32000,
    step: 200
  },
  // totals
  income: {
    id: 'pc-income'
  },
  expences: {
    id: 'pc-expences'
  },
  profit: {
    id: 'pc-profit'
  }
};

var ProritCalculator = /*#__PURE__*/function () {
  function ProritCalculator() {
    var _this = this;

    _classCallCheck(this, ProritCalculator);

    // const self = this;
    // self.rangeControllers = {};
    this.costInput = document.getElementById(OPTIONS.cost.id);
    this.royaltyInput = document.getElementById(OPTIONS.royalty.id);
    this.smmInput = document.getElementById(OPTIONS.smm.id);
    this.polygraphyInput = document.getElementById(OPTIONS.polygraphy.id);
    this.conversionInput = document.getElementById(OPTIONS.conversion.id);
    this.ordersInput = document.getElementById(OPTIONS.orders.id);
    this.avgCheckInput = document.getElementById(OPTIONS.avgCheck.id);
    this.leadsInput = document.getElementById(OPTIONS.leads.id);
    this.addCostsInput = document.getElementById(OPTIONS.addCosts.id);
    this.incomeInput = document.getElementById(OPTIONS.income.id);
    this.expencesInput = document.getElementById(OPTIONS.expences.id);
    this.profitInput = document.getElementById(OPTIONS.profit.id);

    var updateInput = function updateInput(rangeController) {
      var input = rangeController.element.parentElement.querySelector('.calculator__input');
      input.value = rangeController.value;

      _this.onInputUpdate(input.id);
    };

    var ranges = document.querySelectorAll('.calculator__range');
    rangeslider_pure__WEBPACK_IMPORTED_MODULE_0___default.a.create(ranges, {
      polyfill: true,
      rangeClass: 'range-slider',
      disabledClass: 'range-slider--disabled',
      fillClass: 'range-slider__fill',
      bufferClass: 'range-slider__buffer',
      handleClass: 'range-slider__handle',
      onInit: function onInit() {
        // self.rangeControllers[this.element.id.slice(0, -7)] = this;
        updateInput(this);
      },
      onSlide: function onSlide() {
        updateInput(this);
      },
      onSlideEnd: function onSlideEnd() {
        updateInput(this);
      }
    });
    this.ordersRange = document.getElementById(OPTIONS.orders.id + '__range');
    this.leadsRange = document.getElementById(OPTIONS.leads.id + '__range');
    this.addCostsRange = document.getElementById(OPTIONS.addCosts.id + '__range');
    this.updateInputs();
  }

  _createClass(ProritCalculator, [{
    key: "onInputUpdate",
    value: function onInputUpdate(inputID) {
      this.updateValues(); // inputID

      switch (inputID) {
        case OPTIONS.orders.id:
          this.updateLeads();
          this.updateAddCosts();
          break;

        case OPTIONS.leads.id:
          this.updateOrders();
          this.updateAddCosts();
          break;

        case OPTIONS.addCosts.id:
          this.updateLeads(this.addCostsInput.value / 200 + 40);
          this.updateOrders();
          break;

        default:
          break;
      }

      this.calculate();
      this.updateInputs();
    }
  }, {
    key: "updateOrders",
    value: function updateOrders(newVal) {
      this.orders = newVal || parseInt(this.leads * this.conversion / 100);

      if (this.ordersRange) {
        this.ordersRange.value = this.orders;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        this.ordersRange.dispatchEvent(event);
      }
    }
  }, {
    key: "updateLeads",
    value: function updateLeads(newVal) {
      this.leads = newVal || parseInt(this.orders * 100 / this.conversion);

      if (this.leadsRange) {
        this.leadsRange.value = this.leads;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        this.leadsRange.dispatchEvent(event);
      }
    }
  }, {
    key: "updateAddCosts",
    value: function updateAddCosts() {
      var LEAD_PRICE = 200;
      this.addCosts = this.leads > 40 ? (this.leads - 40) * LEAD_PRICE : 0;

      if (this.addCostsRange) {
        this.addCostsRange.value = this.addCosts;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        this.addCostsRange.dispatchEvent(event);
      }
    }
  }, {
    key: "updateValues",
    value: function updateValues() {
      this.cost = parseInt(this.costInput.value);
      this.royalty = parseInt(this.royaltyInput.value);
      this.smm = parseInt(this.smmInput.value);
      this.polygraphy = parseInt(this.polygraphyInput.value);
      this.conversion = parseInt(this.conversionInput.value);
      this.orders = parseInt(this.ordersInput.value);
      this.avgCheck = parseInt(this.avgCheckInput.value);
      this.leads = parseInt(this.leadsInput.value);
      this.addCosts = parseInt(this.addCostsInput.value);
    }
  }, {
    key: "calculate",
    value: function calculate() {
      this.income = this.avgCheck * this.orders;
      this.expences = this.addCosts + this.cost + this.royalty + this.smm + this.polygraphy;
      this.profit = this.income - this.expences;
    }
  }, {
    key: "updateInputs",
    value: function updateInputs() {
      this.costInput.value = this.cost + '₽';
      this.royaltyInput.value = this.royalty + '₽';
      this.smmInput.value = this.smm + '₽';
      this.polygraphyInput.value = this.polygraphy + '₽';
      this.conversionInput.value = this.conversion;
      this.ordersInput.value = this.orders;
      this.avgCheckInput.value = this.avgCheck;
      this.leadsInput.value = this.leads;
      this.addCostsInput.value = this.addCosts;
      this.incomeInput.value = this.income + '₽';
      this.expencesInput.value = this.expences + '₽';
      this.profitInput.value = this.profit + '₽';
    }
  }]);

  return ProritCalculator;
}();



/***/ }),

/***/ "./src/js/modules/faq.js":
/*!*******************************!*\
  !*** ./src/js/modules/faq.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FAQ = /*#__PURE__*/function () {
  function FAQ() {
    _classCallCheck(this, FAQ);

    this.QUESTION_CLASS = 'questions__description';
    var questionElements = document.querySelectorAll(".".concat(this.QUESTION_CLASS));
    if (questionElements.length === 0) return;
    this.questions = Array.from(questionElements);
  }

  _createClass(FAQ, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.questions) return;
      this.questions.forEach(function (question) {
        question.addEventListener('click', function (evt) {
          _this.toggle(question);
        });
      });
    }
  }, {
    key: "toggle",
    value: function toggle(question) {
      var _this2 = this;

      if (document.documentElement.clientWidth >= 1000) {
        this.questions.forEach(function (question) {
          question.classList.remove("".concat(_this2.QUESTION_CLASS, "--open"));
        });
      }

      question.classList.toggle("".concat(this.QUESTION_CLASS, "--open"));
    }
  }]);

  return FAQ;
}();

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuButton = document.querySelector('.menu-button');
    this.headerNav = document.querySelector('.header__nav');
  }

  _createClass(MobileMenu, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.menuButton || !this.headerNav) return;
      this.menuButton.classList.remove('menu-button--close');
      this.headerNav.classList.remove('header__nav--open');
      this.menuButton.addEventListener('click', function (evt) {
        _this.menuButton.classList.toggle('menu-button--close');

        _this.headerNav.classList.toggle('header__nav--open');
      });
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/js/modules/order.js":
/*!*********************************!*\
  !*** ./src/js/modules/order.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPopup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderPopup = /*#__PURE__*/function () {
  function OrderPopup() {
    _classCallCheck(this, OrderPopup);

    this._popup = document.querySelector('.order-popup');
    this._closeBtn = document.querySelector('.order-popup__close-btn');

    if (this._popup && this._closeBtn) {
      this._idInput = this._popup.querySelector('#id-input');
      this.init();
    }
  }

  _createClass(OrderPopup, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('contact-button')) {
          evt.preventDefault();

          _this.openPopup();

          _this._idInput.value = evt.target.textContent;
        }
      });

      this._closeBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this.closePopup();
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('order-popup--open');

      document.addEventListener('keydown', this.escKeyHandler.bind(this));
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('order-popup--open');

      document.removeEventListener('keydown', this.escKeyHandler.bind(this));
    }
  }, {
    key: "escKeyHandler",
    value: function escKeyHandler(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        this.closePopup();
      }
    }
  }]);

  return OrderPopup;
}();



/***/ }),

/***/ "./src/js/modules/policy.js":
/*!**********************************!*\
  !*** ./src/js/modules/policy.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolicyPopup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PolicyPopup = /*#__PURE__*/function () {
  function PolicyPopup() {
    _classCallCheck(this, PolicyPopup);

    this._popup = document.querySelector('.policy-popup');
    this._closeBtn = document.querySelector('.policy-popup__close-btn');

    if (this._popup && this._closeBtn) {
      this.init();
    }
  }

  _createClass(PolicyPopup, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('policy-button')) {
          evt.preventDefault();

          _this.openPopup();
        }
      });

      this._closeBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this.closePopup();
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('policy-popup--open');

      document.addEventListener('keydown', this.escKeyHandler.bind(this));
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('policy-popup--open');

      document.removeEventListener('keydown', this.escKeyHandler.bind(this));
    }
  }, {
    key: "escKeyHandler",
    value: function escKeyHandler(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        this.closePopup();
      }
    }
  }]);

  return PolicyPopup;
}();



/***/ }),

/***/ "./src/js/modules/table-spoiler.js":
/*!*****************************************!*\
  !*** ./src/js/modules/table-spoiler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableSpoiler = /*#__PURE__*/function () {
  function TableSpoiler() {
    _classCallCheck(this, TableSpoiler);

    this.showMore = document.querySelector('.plan-compare__show-more');
    this.spoiler = document.querySelector('.plan-compare__spoiler');
  }

  _createClass(TableSpoiler, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.showMore || !this.spoiler) return;
      this.showMore.addEventListener('click', function (evt) {
        _this.showMore.classList.add('plan-compare__show-more--open');

        _this.spoiler.classList.add('plan-compare__spoiler--open');
      });
    }
  }]);

  return TableSpoiler;
}();

/* harmony default export */ __webpack_exports__["default"] = (TableSpoiler);

/***/ }),

/***/ "./src/js/modules/tinkoff-order.js":
/*!*****************************************!*\
  !*** ./src/js/modules/tinkoff-order.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TinkoffOrderPopup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TinkoffOrderPopup = /*#__PURE__*/function () {
  function TinkoffOrderPopup() {
    _classCallCheck(this, TinkoffOrderPopup);

    this._escKeyHandler = this._escKeyHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
    this._popup = document.querySelector('.tinkoff-popup');
    this._closeBtn = document.querySelector('.tinkoff-popup__close-btn');

    if (this._popup && this._closeBtn) {
      this._init();
    }
  }

  _createClass(TinkoffOrderPopup, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._form = this._popup.querySelector("#tinkoff-order");
      this._priceInput = this._popup.querySelector('.tinkoffPayRow[name="amount"]');
      this._descriptionInput = this._popup.querySelector('.tinkoffPayRow[name="description"]');
      document.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('buy-button')) {
          evt.preventDefault();
          var button = evt.target;
          _this._priceInput.value = button.dataset.price.toString();
          _this._descriptionInput.value = button.dataset.title;

          _this._openPopup();
        }
      });

      this._form.addEventListener("submit", this._submitHandler);

      this._closeBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this._closePopup();
      });
    }
  }, {
    key: "_openPopup",
    value: function _openPopup() {
      this._popup.classList.add('tinkoff-popup--open');

      document.addEventListener('keydown', this._escKeyHandler);
    }
  }, {
    key: "_closePopup",
    value: function _closePopup() {
      this._popup.classList.remove('tinkoff-popup--open');

      document.removeEventListener('keydown', this._escKeyHandler);
    }
  }, {
    key: "_escKeyHandler",
    value: function _escKeyHandler(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        this.closePopup();
      }
    }
  }, {
    key: "_submitHandler",
    value: function _submitHandler(evt) {
      evt.preventDefault();
      console.log(this._priceInput.value);
      this._emailInput = this._popup.querySelector('.tinkoffPayRow[name="email"]');
      this._phoneInput = this._popup.querySelector('.tinkoffPayRow[name="phone"]');
      this._receiptInput = this._popup.querySelector('.tinkoffPayRow[name="receipt"]');
      var receiptData = {
        "Email": this._emailInput.value,
        "Phone": this._phoneInput.value,
        // "EmailCompany": "b@test.ru",
        "Taxation": "usn_income",
        "Items": [{
          "Name": this._descriptionInput.value,
          "Price": this._priceInput.value * 100,
          "Quantity": 1.00,
          "Amount": this._priceInput.value * 100,
          // "PaymentMethod": "full_prepayment",
          "PaymentObject": "service",
          "Tax": "none" // "Ean13": "0123456789"

        }]
      };
      console.log(receiptData.Items);
      this._receiptInput.value = JSON.stringify(receiptData);
      window.pay(this._form);
      return false; // this._form.submit();
    }
  }]);

  return TinkoffOrderPopup;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map