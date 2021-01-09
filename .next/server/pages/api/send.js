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
eval("__webpack_require__.r(__webpack_exports__);\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const {\n    senderName,\n    senderEmail,\n    message\n  } = req.body;\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      res.send('GET method not needed');\n      break;\n\n    case 'POST':\n      axios.post('https://api.sendgrid.com/v3/mail/send', {\n        personalizations: [{\n          to: [{\n            email: \"travis.v.williams@gmail.com\",\n            name: \"Travis Williams\"\n          }],\n          subject: \"Test\"\n        }],\n        content: [{\n          type: \"text/plain\",\n          value: message\n        }],\n        from: {\n          email: \"travis.v.williams@gmail.com\",\n          name: \"Travis Williams\"\n        },\n        reply_to: {\n          email: senderEmail,\n          name: senderName\n        }\n      }, {\n        headers: {\n          Authorization: 'Bearer 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',\n          'Content-type': 'application/json'\n        }\n      }).then(res => console.log(res)).catch(err => console.log(err));\n      break;\n\n    default:\n      res.setHeader('Allow', ['GET', 'POST']);\n  }\n\n  res.send('it worked');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VuZC5qcz83NzNiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsInNlbmRlck5hbWUiLCJzZW5kZXJFbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwibWV0aG9kIiwic2VuZCIsInBvc3QiLCJwZXJzb25hbGl6YXRpb25zIiwidG8iLCJlbWFpbCIsIm5hbWUiLCJzdWJqZWN0IiwiY29udGVudCIsInR5cGUiLCJ2YWx1ZSIsImZyb20iLCJyZXBseV90byIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsInNldEhlYWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRWUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLFFBQU07QUFBRUMsY0FBRjtBQUFjQyxlQUFkO0FBQTJCQztBQUEzQixNQUF1Q0osR0FBRyxDQUFDSyxJQUFqRDtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhTixHQUFuQjs7QUFFQSxVQUFRTSxNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0VMLFNBQUcsQ0FBQ00sSUFBSixDQUFTLHVCQUFUO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0VULFdBQUssQ0FBQ1UsSUFBTixDQUFXLHVDQUFYLEVBQW9EO0FBQ2xEQyx3QkFBZ0IsRUFDZCxDQUNFO0FBQ0VDLFlBQUUsRUFBRSxDQUNGO0FBQ0VDLGlCQUFLLEVBQUUsNkJBRFQ7QUFFRUMsZ0JBQUksRUFBRTtBQUZSLFdBREUsQ0FETjtBQU9FQyxpQkFBTyxFQUFFO0FBUFgsU0FERixDQUZnRDtBQWFsREMsZUFBTyxFQUNMLENBQ0U7QUFDRUMsY0FBSSxFQUFFLFlBRFI7QUFFRUMsZUFBSyxFQUFFWjtBQUZULFNBREYsQ0FkZ0Q7QUFvQmxEYSxZQUFJLEVBQ0o7QUFDRU4sZUFBSyxFQUFFLDZCQURUO0FBRUVDLGNBQUksRUFBRTtBQUZSLFNBckJrRDtBQXlCbERNLGdCQUFRLEVBQ1I7QUFDRVAsZUFBSyxFQUFFUixXQURUO0FBRUVTLGNBQUksRUFBRVY7QUFGUjtBQTFCa0QsT0FBcEQsRUE4Qkc7QUFDRGlCLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLDhFQURSO0FBRVAsMEJBQWdCO0FBRlQ7QUFEUixPQTlCSCxFQW9DR0MsSUFwQ0gsQ0FvQ1FwQixHQUFHLElBQUlxQixPQUFPLENBQUNDLEdBQVIsQ0FBWXRCLEdBQVosQ0FwQ2YsRUFxQ0d1QixLQXJDSCxDQXFDU0MsR0FBRyxJQUFJSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWixDQXJDaEI7QUFzQ0E7O0FBQ0Y7QUFDRXhCLFNBQUcsQ0FBQ3lCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBdkI7QUE3Q0o7O0FBZ0RBekIsS0FBRyxDQUFDTSxJQUFKLENBQVMsV0FBVDtBQUNELENBckREIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NlbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgc2VuZGVyTmFtZSwgc2VuZGVyRW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXFcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICByZXMuc2VuZCgnR0VUIG1ldGhvZCBub3QgbmVlZGVkJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICBheGlvcy5wb3N0KCdodHRwczovL2FwaS5zZW5kZ3JpZC5jb20vdjMvbWFpbC9zZW5kJywge1xuICAgICAgICBwZXJzb25hbGl6YXRpb25zOlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG86IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbWFpbDogXCJ0cmF2aXMudi53aWxsaWFtc0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJhdmlzIFdpbGxpYW1zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YmplY3Q6IFwiVGVzdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICAgICAgICB2YWx1ZTogbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgIGZyb206XG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbDogXCJ0cmF2aXMudi53aWxsaWFtc0BnbWFpbC5jb21cIixcbiAgICAgICAgICBuYW1lOiBcIlRyYXZpcyBXaWxsaWFtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHJlcGx5X3RvOlxuICAgICAgICB7XG4gICAgICAgICAgZW1haWw6IHNlbmRlckVtYWlsLFxuICAgICAgICAgIG5hbWU6IHNlbmRlck5hbWVcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciBTRy5BZFAwYzdpVlNOZUN3Q28zUHBkOGdRLkVMeTJjcXBLdXZZWEZVWllBLUV2dVZmMjA1VlAzdEZRM0d0eVU5VFdGUEUnLFxuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKVxuICB9XG5cbiAgcmVzLnNlbmQoJ2l0IHdvcmtlZCcpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/send.js\n");

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