module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/bio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/headshot.jpg":
/*!**************************!*\
  !*** ./img/headshot.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/headshot-a0567a9403f49f952731b8e5c1bfba44.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWcvaGVhZHNob3QuanBnPzNlNDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9pbWcvaGVhZHNob3QuanBnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hlYWRzaG90LWEwNTY3YTk0MDNmNDlmOTUyNzMxYjhlNWMxYmZiYTQ0LmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./img/headshot.jpg\n");

/***/ }),

/***/ "./pages/bio.js":
/*!**********************!*\
  !*** ./pages/bio.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_headshot_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/headshot.jpg */ \"./img/headshot.jpg\");\n/* harmony import */ var _img_headshot_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_headshot_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/portfolio/pages/bio.js\";\n\n\nconst Bio = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    style: {\n      marginTop: '25px',\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: 'block',\n        textAlign: 'center',\n        margin: '25px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: _img_headshot_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,\n        style: {\n          height: '250px',\n          width: '250px',\n          borderRadius: '50%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n      style: {\n        marginBottom: '25px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"I am a self taught full stack web developer (MERN) located in San Diego, California. Most of my time is spent researching industry standard web development tools and programming concepts. My main area of interest lies in modern front end frameworks (React JS). I have a passion for utilizing problem solving to bring ideas to fruition in an engaging and impactful way.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Some of my hobbies include playing guitar, singing, beer tasting, billiards, solving cube puzzles, hiking and cycling.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bio);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iaW8uanM/YzVlMSJdLCJuYW1lcyI6WyJCaW8iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwic2VsZmllIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUNoQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsZUFBUyxFQUFFO0FBQWhDLEtBQWxDO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUUsT0FBWDtBQUFvQkQsaUJBQVMsRUFBRSxRQUEvQjtBQUF5Q0UsY0FBTSxFQUFFO0FBQWpELE9BQVo7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBRUMsd0RBRFA7QUFFRSxhQUFLLEVBQUU7QUFDTEMsZ0JBQU0sRUFBRSxPQURIO0FBRUxDLGVBQUssRUFBRSxPQUZGO0FBR0xDLHNCQUFZLEVBQUU7QUFIVDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBWUU7QUFBSSxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFhRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNCRCxDQXZCRDs7QUF5QmVULGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbGZpZSBmcm9tICcuLi9pbWcvaGVhZHNob3QuanBnJ1xuXG5jb25zdCBCaW8gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcicgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICA8aDE+QWJvdXQgTWU8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcyNXB4JyB9fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17c2VsZmllfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICcyNTBweCcsXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjVweCcgfX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkkgYW0gYSBzZWxmIHRhdWdodCBmdWxsIHN0YWNrIHdlYiBkZXZlbG9wZXIgJiM0MDtNRVJOJiM0MTsgbG9jYXRlZCBpbiBTYW4gRGllZ28sIENhbGlmb3JuaWEuIE1vc3Qgb2YgbXkgdGltZSBpcyBzcGVudCByZXNlYXJjaGluZyBpbmR1c3RyeSBzdGFuZGFyZCB3ZWIgZGV2ZWxvcG1lbnQgdG9vbHMgYW5kIHByb2dyYW1taW5nIGNvbmNlcHRzLiBNeSBtYWluIGFyZWEgb2YgaW50ZXJlc3QgbGllcyBpbiBtb2Rlcm4gZnJvbnQgZW5kIGZyYW1ld29ya3MgJiM0MDtSZWFjdCBKUyYjNDE7LiBJIGhhdmUgYSBwYXNzaW9uIGZvciB1dGlsaXppbmcgcHJvYmxlbSBzb2x2aW5nIHRvIGJyaW5nIGlkZWFzIHRvIGZydWl0aW9uIGluIGFuIGVuZ2FnaW5nIGFuZCBpbXBhY3RmdWwgd2F5LjwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwPlNvbWUgb2YgbXkgaG9iYmllcyBpbmNsdWRlIHBsYXlpbmcgZ3VpdGFyLCBzaW5naW5nLCBiZWVyIHRhc3RpbmcsIGJpbGxpYXJkcywgc29sdmluZyBjdWJlIHB1enpsZXMsIGhpa2luZyBhbmQgY3ljbGluZy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/bio.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });