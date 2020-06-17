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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-menu */ "./src/js/modules/mobile-menu.js");
/* harmony import */ var _modules_city_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/city-dropdown */ "./src/js/modules/city-dropdown.js");
/* harmony import */ var _modules_big_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/big-slider */ "./src/js/modules/big-slider.js");
/* harmony import */ var _modules_slider_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider-3d */ "./src/js/modules/slider-3d.js");

 // import Map from './modules/yandex-map';



var mobileMenu = new _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__["default"]();
var cityDropdown = new _modules_city_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"]();
var bigSlider = new _modules_big_slider__WEBPACK_IMPORTED_MODULE_2__["BigSlider"]("#about-slider");
var slider3d = new _modules_slider_3d__WEBPACK_IMPORTED_MODULE_3__["Slider3D"](); // const map = new Map();

/***/ }),

/***/ "./src/js/modules/big-slider.js":
/*!**************************************!*\
  !*** ./src/js/modules/big-slider.js ***!
  \**************************************/
/*! exports provided: BigSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigSlider", function() { return BigSlider; });
/* harmony import */ var _slider_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-controls */ "./src/js/modules/slider-controls.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BigSlider =
/*#__PURE__*/
function () {
  function BigSlider(sliderID) {
    _classCallCheck(this, BigSlider);

    this.bigSlider = document.querySelector(sliderID);

    if (!this.bigSlider) {
      return;
    }

    this._current = 0;
    this.switchPane = this.bigSlider.querySelector(".big-slider__switch");
    this.buttons = Array.from(this.bigSlider.querySelectorAll(".big-slider__button"));
    this.slides = Array.from(this.bigSlider.querySelectorAll(".big-slider__slide"));
    this.addListeners();
    this.sliderControls = new _slider_controls__WEBPACK_IMPORTED_MODULE_0__["SliderControls"]({
      slider: this,
      controlsBlock: this.bigSlider.querySelector(".slider-nav")
    });
  }

  _createClass(BigSlider, [{
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      if (!this.switchPane) return;
      this.switchPane.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("big-slider__button")) {
          _this.current = _this.buttons.indexOf(evt.target);
        }
      });
    }
  }, {
    key: "hideAllSlides",
    value: function hideAllSlides() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slide = _step.value;
          slide.classList.remove("big-slider__slide--current");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var button = _step2.value;
          button.classList.remove("big-slider__button--current");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "current",
    set: function set(value) {
      this._current = value;
      this.hideAllSlides();

      this.slides[this._current].classList.add("big-slider__slide--current");

      if (this.buttons[this._current]) {
        this.buttons[this._current].classList.add("big-slider__button--current");
      }

      if (this.sliderControls) {
        this.sliderControls.current = this._current;
      }
    },
    get: function get() {
      return this._current;
    }
  }]);

  return BigSlider;
}();



/***/ }),

/***/ "./src/js/modules/city-dropdown.js":
/*!*****************************************!*\
  !*** ./src/js/modules/city-dropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CityDropdown =
/*#__PURE__*/
function () {
  function CityDropdown() {
    _classCallCheck(this, CityDropdown);

    this.cityButton = document.querySelector(".city-button");
    this.cityDropdown = document.querySelector(".header-top__city-dropdown");

    if (this.cityButton && this.cityDropdown) {
      this.addEventListers();
    }
  }

  _createClass(CityDropdown, [{
    key: "addEventListers",
    value: function addEventListers() {
      var _this = this;

      this.cityButton.addEventListener("click", function (evt) {
        evt.preventDefault();

        _this.toggle();
      });
      var closeButton = this.cityDropdown.querySelector(".city-dropdown__close");
      closeButton.addEventListener("click", function (evt) {
        _this.hide();
      });
      document.addEventListener("click", function (evt) {
        if (evt.target != _this.cityButton) {
          _this.hide();
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.cityDropdown.classList.remove("header-top__city-dropdown--closed");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.cityDropdown.classList.add("header-top__city-dropdown--closed");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.cityDropdown.classList.toggle("header-top__city-dropdown--closed");
    }
  }]);

  return CityDropdown;
}();

/* harmony default export */ __webpack_exports__["default"] = (CityDropdown);

/***/ }),

/***/ "./src/js/modules/mobile-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/mobile-menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.headerTop = document.querySelector('.header-top');

    if (this.headerTop) {
      this.menuButton = this.headerTop.querySelector('.menu-button');
      this.mainNav = this.headerTop.querySelector('.header-top__nav');
      this.resetDOM();
      this.addEventListeners();
    }
  }

  _createClass(MobileMenu, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      this.menuButton.addEventListener('click', function () {
        _this.toggleMenu();
      });
    }
  }, {
    key: "resetDOM",
    value: function resetDOM() {
      this.menuButton.classList.remove('menu-button--close');
      this.mainNav.classList.add('header-top__nav--closed');
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.menuButton.classList.toggle('menu-button--close');
      this.mainNav.classList.toggle('header-top__nav--closed');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/js/modules/slider-3d.js":
/*!*************************************!*\
  !*** ./src/js/modules/slider-3d.js ***!
  \*************************************/
/*! exports provided: Slider3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider3D", function() { return Slider3D; });
/* harmony import */ var _slider_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-controls */ "./src/js/modules/slider-controls.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Slider3D =
/*#__PURE__*/
function () {
  function Slider3D() {
    _classCallCheck(this, Slider3D);

    this.slider3d = document.querySelector(".slider-3d");

    if (!this.slider3d) {
      return;
    }

    this._currentSlideNum = 0;
    this.slides = Array.from(this.slider3d.querySelectorAll(".slider-3d__slide"));
    this.SliderControls = new _slider_controls__WEBPACK_IMPORTED_MODULE_0__["SliderControls"]({
      slider: this,
      controlsBlock: this.slider3d.querySelector(".slider-nav")
    });
    this.arrangeSlides();
  }

  _createClass(Slider3D, [{
    key: "arrangeSlides",
    value: function arrangeSlides() {
      var _this = this;

      var slidesCount = this.slides.length;
      this.slides.forEach(function (slide, index) {
        var slidePosition = (slidesCount + index - _this.current) % slidesCount;
        slide.style.zIndex = "".concat(slidesCount - slidePosition);
        slide.style.transition = "all 0.25s ease-out";

        if (slidePosition === slidesCount - 1) {
          slide.style.transition = "opacity 0.25s ease-out"; // slide.style.transition = `none`;

          slide.style.opacity = 0;
        }

        if (slidePosition === 0) {
          // slide.style.transition = `all 0.25s ease-out`;
          slide.style.opacity = 0;
          slide.style.transform = "perspective(800px) translate3d(-100px, 0, 100px)";
        } else {
          slide.style.transform = "perspective(800px) translate3d(".concat(slidePosition * 30, "px, 0, ").concat(-40 * slidePosition, "px)");
          slide.style.opacity = "".concat(1.25 - 0.25 * slidePosition);
        }
      });
    }
  }, {
    key: "current",
    set: function set(value) {
      this._currentSlideNum = value;
      this.arrangeSlides();
    },
    get: function get() {
      return this._currentSlideNum;
    }
  }]);

  return Slider3D;
}();



/***/ }),

/***/ "./src/js/modules/slider-controls.js":
/*!*******************************************!*\
  !*** ./src/js/modules/slider-controls.js ***!
  \*******************************************/
/*! exports provided: SliderControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderControls", function() { return SliderControls; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderControls =
/*#__PURE__*/
function () {
  function SliderControls(options) {
    _classCallCheck(this, SliderControls);

    if (!options.slider) {
      return;
    }

    this.controls = options.controlsBlock;
    this.prevButton = this.controls.querySelector(".slider-nav__prev");
    this.nextButton = this.controls.querySelector(".slider-nav__next");
    this.currentIndicator = this.controls.querySelector(".slider-nav__current");
    this.maxIndicator = this.controls.querySelector(".slider-nav__max");
    this.slider = options.slider;
    this.current = this.slider.current;
    this.slidesNum = options.slider.slides.length;
    this.addListenters();
  }

  _createClass(SliderControls, [{
    key: "addListenters",
    value: function addListenters() {
      var _this = this;

      this.prevButton.addEventListener("click", function () {
        _this.current--;
      });
      this.nextButton.addEventListener("click", function () {
        _this.current++;
      });
    }
  }, {
    key: "current",
    set: function set(value) {
      // Bounds controls current value
      if (value >= this.slidesNum) {
        this._current = 0;
      } else if (value < 0) {
        this._current = this.slidesNum - 1;
      } else {
        this._current = value;
      } // Sets current indicator


      this.currentIndicator.textContent = "".concat((this._current + 101).toString().substr(1, 2));

      if (this.slider.current !== this._current) {
        this.slider.current = this._current;
      }
    },
    get: function get() {
      return this._current;
    }
  }, {
    key: "slidesNum",
    set: function set(value) {
      // Sets slides quantity indicator
      this._slidesNum = value;
      this.maxIndicator.textContent = "/ ".concat((this._slidesNum + 100).toString().substr(1, 2));
    },
    get: function get() {
      return this._slidesNum;
    }
  }]);

  return SliderControls;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map