module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/send.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const {\n    senderName,\n    senderEmail,\n    message\n  } = req.body;\n  axios.post('https://api.sendgrid.com/v3/mail/send', {\n    personalizations: [{\n      to: [{\n        email: \"travis.v.williams@gmail.com\",\n        name: \"Travis Williams\"\n      }],\n      subject: \"Test\"\n    }],\n    content: [{\n      type: \"text/plain\",\n      value: message\n    }],\n    from: {\n      email: \"travis.v.williams@gmail.com\",\n      name: \"Travis Williams\"\n    },\n    reply_to: {\n      email: senderEmail,\n      name: senderName\n    }\n  }, {\n    headers: {\n      Authorization: 'Bearer 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',\n      'Content-type': 'application/json'\n    }\n  }).then(res => console.log(res)).catch(err => console.log(err));\n  res.send('it worked');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VuZC5qcz83NzNiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsInNlbmRlck5hbWUiLCJzZW5kZXJFbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwicG9zdCIsInBlcnNvbmFsaXphdGlvbnMiLCJ0byIsImVtYWlsIiwibmFtZSIsInN1YmplY3QiLCJjb250ZW50IiwidHlwZSIsInZhbHVlIiwiZnJvbSIsInJlcGx5X3RvIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRWUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLFFBQU07QUFBRUMsY0FBRjtBQUFjQyxlQUFkO0FBQTJCQztBQUEzQixNQUF1Q0osR0FBRyxDQUFDSyxJQUFqRDtBQUVBUCxPQUFLLENBQUNRLElBQU4sQ0FBVyx1Q0FBWCxFQUFvRDtBQUNsREMsb0JBQWdCLEVBQ2QsQ0FDRTtBQUNFQyxRQUFFLEVBQUUsQ0FDRjtBQUNFQyxhQUFLLEVBQUUsNkJBRFQ7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FERSxDQUROO0FBT0VDLGFBQU8sRUFBRTtBQVBYLEtBREYsQ0FGZ0Q7QUFhbERDLFdBQU8sRUFDTCxDQUNFO0FBQ0VDLFVBQUksRUFBRSxZQURSO0FBRUVDLFdBQUssRUFBRVY7QUFGVCxLQURGLENBZGdEO0FBb0JsRFcsUUFBSSxFQUNKO0FBQ0VOLFdBQUssRUFBRSw2QkFEVDtBQUVFQyxVQUFJLEVBQUU7QUFGUixLQXJCa0Q7QUF5QmxETSxZQUFRLEVBQ1I7QUFDRVAsV0FBSyxFQUFFTixXQURUO0FBRUVPLFVBQUksRUFBRVI7QUFGUjtBQTFCa0QsR0FBcEQsRUE4Qkc7QUFDRGUsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUUsOEVBRFI7QUFFUCxzQkFBZ0I7QUFGVDtBQURSLEdBOUJILEVBb0NHQyxJQXBDSCxDQW9DUWxCLEdBQUcsSUFBSW1CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcEIsR0FBWixDQXBDZixFQXFDR3FCLEtBckNILENBcUNTQyxHQUFHLElBQUlILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBckNoQjtBQXVDQXRCLEtBQUcsQ0FBQ3VCLElBQUosQ0FBUyxXQUFUO0FBQ0QsQ0EzQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBzZW5kZXJOYW1lLCBzZW5kZXJFbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHlcblxuICBheGlvcy5wb3N0KCdodHRwczovL2FwaS5zZW5kZ3JpZC5jb20vdjMvbWFpbC9zZW5kJywge1xuICAgIHBlcnNvbmFsaXphdGlvbnM6XG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0bzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbWFpbDogXCJ0cmF2aXMudi53aWxsaWFtc0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJUcmF2aXMgV2lsbGlhbXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3ViamVjdDogXCJUZXN0XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICBjb250ZW50OlxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCIsXG4gICAgICAgICAgdmFsdWU6IG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICBmcm9tOlxuICAgIHtcbiAgICAgIGVtYWlsOiBcInRyYXZpcy52LndpbGxpYW1zQGdtYWlsLmNvbVwiLFxuICAgICAgbmFtZTogXCJUcmF2aXMgV2lsbGlhbXNcIlxuICAgIH0sXG4gICAgcmVwbHlfdG86XG4gICAge1xuICAgICAgZW1haWw6IHNlbmRlckVtYWlsLFxuICAgICAgbmFtZTogc2VuZGVyTmFtZVxuICAgIH1cbiAgfSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgU0cuQWRQMGM3aVZTTmVDd0NvM1BwZDhnUS5FTHkyY3FwS3V2WVhGVVpZQS1FdnVWZjIwNVZQM3RGUTNHdHlVOVRXRlBFJyxcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIHJlcy5zZW5kKCdpdCB3b3JrZWQnKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/send.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ })

/******/ });