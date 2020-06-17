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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/careers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/careers.js":
/*!***************************!*\
  !*** ./src/js/careers.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_city_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/city-dropdown */ "./src/js/modules/city-dropdown.js");
/* harmony import */ var _modules_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/job */ "./src/js/modules/job.js");
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mobile-menu */ "./src/js/modules/mobile-menu.js");



var cityDropdown = new _modules_city_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]();
var mobileMenu = new _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_2__["default"]();
var priceTable = new _modules_job__WEBPACK_IMPORTED_MODULE_1__["default"]();

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

/***/ "./src/js/modules/job.js":
/*!*******************************!*\
  !*** ./src/js/modules/job.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Job =
/*#__PURE__*/
function () {
  function Job() {
    _classCallCheck(this, Job);

    this.addListeners();
  }

  _createClass(Job, [{
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      document.addEventListener('click', function (evt) {
        var jobElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["hasSomeParentOfClass"])(evt.target, "job");

        if (jobElement) {
          _this.switchJobSpoiler(jobElement);
        }
      });
    }
  }, {
    key: "switchJobSpoiler",
    value: function switchJobSpoiler(jobElement) {
      jobElement.classList.toggle('job--open');
    }
  }]);

  return Job;
}();

/* harmony default export */ __webpack_exports__["default"] = (Job);

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

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/*! exports provided: hasSomeParentOfClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSomeParentOfClass", function() { return hasSomeParentOfClass; });
var hasSomeParentOfClass = function hasSomeParentOfClass(element, className) {
  if (!element || !element.classList) return false;

  if (element.classList.contains(className)) {
    return element;
  }

  return element.parentNode && hasSomeParentOfClass(element.parentNode, className);
};

/***/ })

/******/ });
//# sourceMappingURL=careers.js.map