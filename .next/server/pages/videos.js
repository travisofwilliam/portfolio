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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/videos.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/videos.js":
/*!*************************!*\
  !*** ./pages/videos.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube */ \"react-youtube\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/portfolio/pages/videos.js\";\n\n\nconst Videos = () => {\n  const videos = [{\n    title: 'Working with Response Objects',\n    id: 'JG1Bc-uj5jI',\n    desc: 'In this video, I teach you how to make a GET request to a public API using the Axios request library. Then, I show you how to understand the response object received as a result, plus how to access data from the response object and display said data inside of a view on the front end.'\n  }, {\n    title: 'How to Use the .filter() Array Prototype Method',\n    id: 'wTRX38Yh9pw',\n    desc: 'How to Use the .filter() Array Prototype Method in a Real Project (NextJS, ReactJS)'\n  }, {\n    title: 'Building a Chuck Norris Fact Generator',\n    id: '0FMymeLdPYI',\n    desc: 'In this video I build a Chuck Norris fact generator using the NextJS framework for ReactJS and the Axios promise-based library for HTTP requests.'\n  }, {\n    title: 'Building a Basic To-Do List With Next JS',\n    id: 'iEN3SAM3LbA',\n    desc: 'In this video, I walk through the process of building a simple To-Do List using the NextJS framework. It is meant to demonstrate the efficiency and ease of developing ReactJS applications with the NextJS framework.'\n  }];\n  const opts = {\n    height: '200px',\n    // width: '17rem',\n    playerVars: {\n      // https://developers.google.com/youtube/player_parameters\n      autoplay: 0\n    }\n  };\n\n  const onReady = e => {\n    e.target.pauseVideo;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    style: {\n      marginTop: '25px',\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Videos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: videos.map((video, idx) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card col-md-4\",\n          style: {\n            border: 'none'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_youtube__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            className: \"card-img-top\",\n            videoId: video.id,\n            opts: opts,\n            onReady: onReady\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: video.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"card-text\",\n              children: video.desc\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92aWRlb3MuanM/Y2I0YSJdLCJuYW1lcyI6WyJWaWRlb3MiLCJ2aWRlb3MiLCJ0aXRsZSIsImlkIiwiZGVzYyIsIm9wdHMiLCJoZWlnaHQiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJvblJlYWR5IiwiZSIsInRhcmdldCIsInBhdXNlVmlkZW8iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJ2aWRlbyIsImlkeCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBRW5CLFFBQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFNBQUssRUFBRSwrQkFEVDtBQUVFQyxNQUFFLEVBQUUsYUFGTjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURhLEVBTWI7QUFDRUYsU0FBSyxFQUFFLGlEQURUO0FBRUVDLE1BQUUsRUFBRSxhQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTmEsRUFXYjtBQUNFRixTQUFLLEVBQUUsd0NBRFQ7QUFFRUMsTUFBRSxFQUFFLGFBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FYYSxFQWdCYjtBQUNFRixTQUFLLEVBQUUsMENBRFQ7QUFFRUMsTUFBRSxFQUFFLGFBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQmEsQ0FBZjtBQXVCQSxRQUFNQyxJQUFJLEdBQUc7QUFDWEMsVUFBTSxFQUFFLE9BREc7QUFFWDtBQUNBQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUU7QUFGQTtBQUhELEdBQWI7O0FBU0EsUUFBTUMsT0FBTyxHQUFJQyxDQUFELElBQU87QUFBRUEsS0FBQyxDQUFDQyxNQUFGLENBQVNDLFVBQVQ7QUFBcUIsR0FBOUM7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE1BQWI7QUFBcUJDLGVBQVMsRUFBRTtBQUFoQyxLQUFsQztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFFSWIsTUFBTSxDQUFDYyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FBQ3pCLDRCQUNFO0FBQWUsbUJBQVMsRUFBQyxlQUF6QjtBQUF5QyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRTtBQUFWLFdBQWhEO0FBQUEsa0NBQ0UscUVBQUMsb0RBQUQ7QUFBUyxxQkFBUyxFQUFDLGNBQW5CO0FBQWtDLG1CQUFPLEVBQUVGLEtBQUssQ0FBQ2IsRUFBakQ7QUFBcUQsZ0JBQUksRUFBRUUsSUFBM0Q7QUFBaUUsbUJBQU8sRUFBRUk7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJPLEtBQUssQ0FBQ2Q7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUEsd0JBQTBCYyxLQUFLLENBQUNaO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsV0FBVWEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0QsT0FWRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0F6REQ7O0FBMkRlakIscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJ1xuXG5jb25zdCBWaWRlb3MgPSAoKSA9PiB7XG5cbiAgY29uc3QgdmlkZW9zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnV29ya2luZyB3aXRoIFJlc3BvbnNlIE9iamVjdHMnLFxuICAgICAgaWQ6ICdKRzFCYy11ajVqSScsXG4gICAgICBkZXNjOiAnSW4gdGhpcyB2aWRlbywgSSB0ZWFjaCB5b3UgaG93IHRvIG1ha2UgYSBHRVQgcmVxdWVzdCB0byBhIHB1YmxpYyBBUEkgdXNpbmcgdGhlIEF4aW9zIHJlcXVlc3QgbGlicmFyeS4gVGhlbiwgSSBzaG93IHlvdSBob3cgdG8gdW5kZXJzdGFuZCB0aGUgcmVzcG9uc2Ugb2JqZWN0IHJlY2VpdmVkIGFzIGEgcmVzdWx0LCBwbHVzIGhvdyB0byBhY2Nlc3MgZGF0YSBmcm9tIHRoZSByZXNwb25zZSBvYmplY3QgYW5kIGRpc3BsYXkgc2FpZCBkYXRhIGluc2lkZSBvZiBhIHZpZXcgb24gdGhlIGZyb250IGVuZC4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0hvdyB0byBVc2UgdGhlIC5maWx0ZXIoKSBBcnJheSBQcm90b3R5cGUgTWV0aG9kJyxcbiAgICAgIGlkOiAnd1RSWDM4WWg5cHcnLFxuICAgICAgZGVzYzogJ0hvdyB0byBVc2UgdGhlIC5maWx0ZXIoKSBBcnJheSBQcm90b3R5cGUgTWV0aG9kIGluIGEgUmVhbCBQcm9qZWN0IChOZXh0SlMsIFJlYWN0SlMpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdCdWlsZGluZyBhIENodWNrIE5vcnJpcyBGYWN0IEdlbmVyYXRvcicsXG4gICAgICBpZDogJzBGTXltZUxkUFlJJyxcbiAgICAgIGRlc2M6ICdJbiB0aGlzIHZpZGVvIEkgYnVpbGQgYSBDaHVjayBOb3JyaXMgZmFjdCBnZW5lcmF0b3IgdXNpbmcgdGhlIE5leHRKUyBmcmFtZXdvcmsgZm9yIFJlYWN0SlMgYW5kIHRoZSBBeGlvcyBwcm9taXNlLWJhc2VkIGxpYnJhcnkgZm9yIEhUVFAgcmVxdWVzdHMuJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdCdWlsZGluZyBhIEJhc2ljIFRvLURvIExpc3QgV2l0aCBOZXh0IEpTJyxcbiAgICAgIGlkOiAnaUVOM1NBTTNMYkEnLFxuICAgICAgZGVzYzogJ0luIHRoaXMgdmlkZW8sIEkgd2FsayB0aHJvdWdoIHRoZSBwcm9jZXNzIG9mIGJ1aWxkaW5nIGEgc2ltcGxlIFRvLURvIExpc3QgdXNpbmcgdGhlIE5leHRKUyBmcmFtZXdvcmsuIEl0IGlzIG1lYW50IHRvIGRlbW9uc3RyYXRlIHRoZSBlZmZpY2llbmN5IGFuZCBlYXNlIG9mIGRldmVsb3BpbmcgUmVhY3RKUyBhcHBsaWNhdGlvbnMgd2l0aCB0aGUgTmV4dEpTIGZyYW1ld29yay4nXG4gICAgfVxuICBdXG5cbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgLy8gd2lkdGg6ICcxN3JlbScsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgYXV0b3BsYXk6IDAsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25SZWFkeSA9IChlKSA9PiB7IGUudGFyZ2V0LnBhdXNlVmlkZW8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcicgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICA8aDE+VmlkZW9zPC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIHtcbiAgICAgICAgICB2aWRlb3MubWFwKCh2aWRlbywgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJjYXJkIGNvbC1tZC00XCIgc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgPFlvdVR1YmUgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnIHZpZGVvSWQ9e3ZpZGVvLmlkfSBvcHRzPXtvcHRzfSBvblJlYWR5PXtvblJlYWR5fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt2aWRlby50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3ZpZGVvLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos.js\n");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-youtube\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC15b3V0dWJlXCI/M2I1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC15b3V0dWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QteW91dHViZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-youtube\n");

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