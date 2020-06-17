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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scroll_spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scroll-spy */ \"./src/js/components/scroll-spy.js\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/popup */ \"./src/js/components/popup.js\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/render */ \"./src/js/utils/render.js\");\n\r\n\r\n\r\n\r\nconst app = document.querySelector(`.app`);\r\n\r\nconst scrollSpyComponent = new _components_scroll_spy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`#scroll-spy`, `#landing`);\r\n\r\nconst loginForm = document.getElementById(`login-form`);\r\nloginForm.addEventListener(`submit`, (evt) => {\r\n  evt.preventDefault();\r\n\r\n  const wrongPopup = new _components_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n  setTimeout(() => {\r\n    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(app, wrongPopup, _utils_render__WEBPACK_IMPORTED_MODULE_2__[\"RenderPosition\"].BEFOREEND);\r\n    wrongPopup.onOkClick(() => {\r\n      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__[\"remove\"])(wrongPopup);\r\n    });\r\n  }, 540);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupWindow; });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ \"./src/js/utils/render.js\");\n\r\n\r\nconst createPopupWindowTemplate = () => {\r\n  return (\r\n    `<div class=\"popup-window\">\r\n      <div class=\"popup-window__overlay\"></div>\r\n      <div class=\"popup-window__body\">\r\n        <p class=\"popup-window__message\">Пожалуйста, укажите верные эл. почту и пароль</p>\r\n        <button class=\"button\">Ок</button>\r\n      </div>\r\n    </div>`\r\n  );\r\n};\r\n\r\nclass PopupWindow {\r\n  constructor() {\r\n    this._element = null;\r\n  }\r\n\r\n  getTemplate() {\r\n    return createPopupWindowTemplate();\r\n  }\r\n\r\n  getElement() {\r\n    if (!this._element) {\r\n      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(this.getTemplate());\r\n\r\n      this._okButton = this._element.querySelector(`button`);\r\n    }\r\n\r\n    return this._element;\r\n  }\r\n\r\n  remove() {\r\n    this._element = null;\r\n  }\r\n\r\n  onOkClick(handler) {\r\n    this._okButton.addEventListener(`click`, () => {\r\n      handler();\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/components/scroll-spy.js":
/*!*****************************************!*\
  !*** ./src/js/components/scroll-spy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollSpy; });\nclass ScrollSpy {\r\n  constructor(elementId, observedElementId) {\r\n    this._element = document.querySelector(elementId);\r\n    this._observedElement = document.querySelector(observedElementId);\r\n\r\n    if (!this._element) {\r\n      throw new Error(`No viable scroll spy element provided`);\r\n    }\r\n\r\n    if (!this._observedElement) {\r\n      throw new Error(`No viable observed element provided`);\r\n    }\r\n\r\n    this._tracker = this._element.querySelector(`.scroll-spy__tracker`);\r\n    this._links = [...this._element.querySelectorAll(`.scroll-spy__link`)];\r\n    this._currentLinkNumber = 0;\r\n    this._anchorElements = this._links\r\n      .map((link) => {\r\n        return this._observedElement.querySelector(link.attributes.href.value);\r\n      });\r\n\r\n    this._isScrolling = null;\r\n\r\n    this._addListeners();\r\n    this._navigateToLink(this._links[this._currentLinkNumber]);\r\n    this._setActiveLink(this._links[this._currentLinkNumber])\r\n  }\r\n\r\n  _addListeners() {\r\n    this._observedElement.addEventListener(`scroll`, (evt) => {\r\n      this._update(this._observedElement.scrollTop);\r\n\r\n      if (this._isScrolling) {\r\n        clearTimeout(this._isScrolling);\r\n      }\r\n      this._isScrolling = setTimeout(() => {\r\n        this._isScrolling = null;\r\n        this._onScrollStop();\r\n      }, 150);\r\n    });\r\n\r\n    this._element.addEventListener(`click`, (evt) => {\r\n      evt.preventDefault();\r\n      this._links.forEach((link) => {\r\n        if (evt.target === link) {\r\n          this._navigateToLink(link);\r\n        }\r\n      });\r\n    })\r\n\r\n    this._tracker.addEventListener(`click`, (evt) => {\r\n      evt.preventDefault();\r\n      this._navigateToNext();\r\n    })\r\n  }\r\n\r\n  _navigateToLink(link) {\r\n    const elementId = link.attributes.href.value;\r\n    const element = this._observedElement.querySelector(elementId);\r\n    element.scrollIntoView();\r\n\r\n    // this._setActiveLink(link);\r\n\r\n    this._currentLinkNumber = this._links.indexOf(link);\r\n  }\r\n\r\n  _navigateToNext() {\r\n    if (this._currentLinkNumber === this._links.length - 1) {\r\n      this._observedElement.scrollTop = this._observedElement.scrollHeight;\r\n      this._currentLinkNumber ++;\r\n      return;\r\n    } else if (this._currentLinkNumber > this._links.length - 1) {\r\n      this._currentLinkNumber = 0;\r\n    } else {\r\n      this._currentLinkNumber++;\r\n    }\r\n\r\n    this._navigateToLink(this._links[this._currentLinkNumber]);\r\n  }\r\n\r\n  _setActiveLink(link) {\r\n    this._resetLinks();\r\n    link.parentElement.classList.add(`scroll-spy__item--current`);\r\n  }\r\n\r\n  _resetLinks() {\r\n    this._links.forEach((link) => {\r\n      link.parentElement.classList.remove(`scroll-spy__item--current`);\r\n    });\r\n  }\r\n\r\n  _update(scrollTop) {\r\n    const currentAnchorIndex = this._anchorElements.reduce((acc, curr, index) => {\r\n      return ((scrollTop + this._observedElement.offsetHeight / 2) >= curr.offsetTop) ? index : acc;\r\n    }, 0);\r\n\r\n    this._currentLinkNumber = currentAnchorIndex;\r\n    this._setActiveLink(this._links[currentAnchorIndex]);\r\n  }\r\n\r\n  _onScrollStop() {\r\n    if (this._observedElement.scrollTop + this._observedElement.offsetHeight >= this._observedElement.scrollHeight) {\r\n      this._currentLinkNumber = this._links.length;\r\n      this._resetLinks();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/scroll-spy.js?");

/***/ }),

/***/ "./src/js/utils/render.js":
/*!********************************!*\
  !*** ./src/js/utils/render.js ***!
  \********************************/
/*! exports provided: RenderPosition, createElement, render, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderPosition\", function() { return RenderPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nconst RenderPosition = {\r\n  AFTERBEGIN: `afterbegin`,\r\n  BEFOREEND: `beforeend`,\r\n};\r\n\r\n\r\n/**\r\n * Returns HTMLElement from template string\r\n * @param {String} template HTML markup\r\n * @return {HTMLElement}\r\n */\r\nconst createElement = (template) => {\r\n  const newElement = document.createElement(`div`);\r\n  newElement.innerHTML = template;\r\n\r\n  return newElement.firstChild;\r\n};\r\n\r\n\r\n/**\r\n * Renders components element into HTMLElement\r\n * @param {HTMLElement} container\r\n * @param {AbstractComponent} component\r\n * @param {String} place\r\n */\r\nconst render = (container, component, place) => {\r\n  switch (place) {\r\n    case RenderPosition.AFTERBEGIN:\r\n      container.prepend(component.getElement());\r\n      break;\r\n    case RenderPosition.BEFOREEND:\r\n      container.append(component.getElement());\r\n      break;\r\n  }\r\n};\r\n\r\n\r\nconst remove = (component) => {\r\n  component.getElement().remove();\r\n  component.removeElement();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/utils/render.js?");

/***/ })

/******/ });