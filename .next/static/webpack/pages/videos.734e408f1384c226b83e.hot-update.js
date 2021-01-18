webpackHotUpdate_N_E("pages/videos",{

/***/ "./pages/videos.js":
/*!*************************!*\
  !*** ./pages/videos.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/portfolio/pages/videos.js\",\n    _this = undefined;\n\n\n\nvar Videos = function Videos() {\n  var videos = [{\n    title: 'Working with Response Objects',\n    id: 'JG1Bc-uj5jI',\n    desc: 'In this video, I teach you how to make a GET request to a public API using the Axios request library. Then, I show you how to understand the response object received as a result, plus how to access data from the response object and display said data inside of a view on the front end.'\n  }, {\n    title: 'How to Use the .filter() Array Prototype Method',\n    id: 'wTRX38Yh9pw',\n    desc: 'How to Use the .filter() Array Prototype Method in a Real Project (NextJS, ReactJS)'\n  }, {\n    title: 'Building a Chuck Norris Fact Generator',\n    id: '0FMymeLdPYI',\n    desc: 'In this video I build a Chuck Norris fact generator using the NextJS framework for ReactJS and the Axios promise-based library for HTTP requests.'\n  }, {\n    title: 'Building a Basic To-Do List With Next JS',\n    id: 'iEN3SAM3LbA',\n    desc: 'In this video, I walk through the process of building a simple To-Do List using the NextJS framework. It is meant to demonstrate the efficiency and ease of developing ReactJS applications with the NextJS framework.'\n  }];\n  var opts = {\n    height: '200px',\n    width: '17rem',\n    playerVars: {\n      // https://developers.google.com/youtube/player_parameters\n      autoplay: 0\n    }\n  };\n\n  var onReady = function onReady(e) {\n    e.target.pauseVideo;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container row\",\n    style: {\n      marginTop: '25px',\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Videos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), videos.map(function (video, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card col-sm-4\",\n        style: {\n          width: '18rem'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_youtube__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          className: \"card-img-top\",\n          videoId: video.id,\n          opts: opts,\n          onReady: onReady\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"card-title\",\n            children: video.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"card-text\",\n            children: video.desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 15\n        }, _this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Videos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Videos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9zLmpzP2NiNGEiXSwibmFtZXMiOlsiVmlkZW9zIiwidmlkZW9zIiwidGl0bGUiLCJpZCIsImRlc2MiLCJvcHRzIiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJvblJlYWR5IiwiZSIsInRhcmdldCIsInBhdXNlVmlkZW8iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJ2aWRlbyIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUVuQixNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxTQUFLLEVBQUUsK0JBRFQ7QUFFRUMsTUFBRSxFQUFFLGFBRk47QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FEYSxFQU1iO0FBQ0VGLFNBQUssRUFBRSxpREFEVDtBQUVFQyxNQUFFLEVBQUUsYUFGTjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQU5hLEVBV2I7QUFDRUYsU0FBSyxFQUFFLHdDQURUO0FBRUVDLE1BQUUsRUFBRSxhQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWGEsRUFnQmI7QUFDRUYsU0FBSyxFQUFFLDBDQURUO0FBRUVDLE1BQUUsRUFBRSxhQUZOO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBaEJhLENBQWY7QUF1QkEsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxPQURHO0FBRVhDLFNBQUssRUFBRSxPQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFBRUEsS0FBQyxDQUFDQyxNQUFGLENBQVNDLFVBQVQ7QUFBcUIsR0FBOUM7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE1BQWI7QUFBcUJDLGVBQVMsRUFBRTtBQUFoQyxLQUF0QztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFJSWQsTUFBTSxDQUFDZSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3pCLDBCQUNFO0FBQWUsaUJBQVMsRUFBQyxlQUF6QjtBQUF5QyxhQUFLLEVBQUU7QUFBRVgsZUFBSyxFQUFFO0FBQVQsU0FBaEQ7QUFBQSxnQ0FDRSxxRUFBQyxxREFBRDtBQUFTLG1CQUFTLEVBQUMsY0FBbkI7QUFBa0MsaUJBQU8sRUFBRVUsS0FBSyxDQUFDZCxFQUFqRDtBQUFxRCxjQUFJLEVBQUVFLElBQTNEO0FBQWlFLGlCQUFPLEVBQUVLO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsc0JBQTRCTyxLQUFLLENBQUNmO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsV0FBYjtBQUFBLHNCQUEwQmUsS0FBSyxDQUFDYjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQVVjLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsS0FWRCxDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBdkREOztLQUFNbEIsTTtBQXlEU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJ1xuXG5jb25zdCBWaWRlb3MgPSAoKSA9PiB7XG5cbiAgY29uc3QgdmlkZW9zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnV29ya2luZyB3aXRoIFJlc3BvbnNlIE9iamVjdHMnLFxuICAgICAgaWQ6ICdKRzFCYy11ajVqSScsXG4gICAgICBkZXNjOiAnSW4gdGhpcyB2aWRlbywgSSB0ZWFjaCB5b3UgaG93IHRvIG1ha2UgYSBHRVQgcmVxdWVzdCB0byBhIHB1YmxpYyBBUEkgdXNpbmcgdGhlIEF4aW9zIHJlcXVlc3QgbGlicmFyeS4gVGhlbiwgSSBzaG93IHlvdSBob3cgdG8gdW5kZXJzdGFuZCB0aGUgcmVzcG9uc2Ugb2JqZWN0IHJlY2VpdmVkIGFzIGEgcmVzdWx0LCBwbHVzIGhvdyB0byBhY2Nlc3MgZGF0YSBmcm9tIHRoZSByZXNwb25zZSBvYmplY3QgYW5kIGRpc3BsYXkgc2FpZCBkYXRhIGluc2lkZSBvZiBhIHZpZXcgb24gdGhlIGZyb250IGVuZC4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0hvdyB0byBVc2UgdGhlIC5maWx0ZXIoKSBBcnJheSBQcm90b3R5cGUgTWV0aG9kJyxcbiAgICAgIGlkOiAnd1RSWDM4WWg5cHcnLFxuICAgICAgZGVzYzogJ0hvdyB0byBVc2UgdGhlIC5maWx0ZXIoKSBBcnJheSBQcm90b3R5cGUgTWV0aG9kIGluIGEgUmVhbCBQcm9qZWN0IChOZXh0SlMsIFJlYWN0SlMpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdCdWlsZGluZyBhIENodWNrIE5vcnJpcyBGYWN0IEdlbmVyYXRvcicsXG4gICAgICBpZDogJzBGTXltZUxkUFlJJyxcbiAgICAgIGRlc2M6ICdJbiB0aGlzIHZpZGVvIEkgYnVpbGQgYSBDaHVjayBOb3JyaXMgZmFjdCBnZW5lcmF0b3IgdXNpbmcgdGhlIE5leHRKUyBmcmFtZXdvcmsgZm9yIFJlYWN0SlMgYW5kIHRoZSBBeGlvcyBwcm9taXNlLWJhc2VkIGxpYnJhcnkgZm9yIEhUVFAgcmVxdWVzdHMuJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdCdWlsZGluZyBhIEJhc2ljIFRvLURvIExpc3QgV2l0aCBOZXh0IEpTJyxcbiAgICAgIGlkOiAnaUVOM1NBTTNMYkEnLFxuICAgICAgZGVzYzogJ0luIHRoaXMgdmlkZW8sIEkgd2FsayB0aHJvdWdoIHRoZSBwcm9jZXNzIG9mIGJ1aWxkaW5nIGEgc2ltcGxlIFRvLURvIExpc3QgdXNpbmcgdGhlIE5leHRKUyBmcmFtZXdvcmsuIEl0IGlzIG1lYW50IHRvIGRlbW9uc3RyYXRlIHRoZSBlZmZpY2llbmN5IGFuZCBlYXNlIG9mIGRldmVsb3BpbmcgUmVhY3RKUyBhcHBsaWNhdGlvbnMgd2l0aCB0aGUgTmV4dEpTIGZyYW1ld29yay4nXG4gICAgfVxuICBdXG5cbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgd2lkdGg6ICcxN3JlbScsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgYXV0b3BsYXk6IDAsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25SZWFkeSA9IChlKSA9PiB7IGUudGFyZ2V0LnBhdXNlVmlkZW8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciByb3cnIHN0eWxlPXt7IG1hcmdpblRvcDogJzI1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPlZpZGVvczwvaDE+XG4gICAgICA8YnIgLz5cbiAgICAgIHtcbiAgICAgICAgdmlkZW9zLm1hcCgodmlkZW8sIGlkeCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJjYXJkIGNvbC1zbS00XCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScgfX0+XG4gICAgICAgICAgICAgIDxZb3VUdWJlIGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJyB2aWRlb0lkPXt2aWRlby5pZH0gb3B0cz17b3B0c30gb25SZWFkeT17b25SZWFkeX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt2aWRlby50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt2aWRlby5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/videos.js\n");

/***/ })

})