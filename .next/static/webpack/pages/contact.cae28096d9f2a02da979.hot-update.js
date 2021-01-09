webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/portfolio/pages/contact.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Contact = function Contact() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      senderName = _useState[0],\n      setSenderName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      senderEmail = _useState2[0],\n      setSenderEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var sendEmail = function sendEmail(e) {\n    e.preventDefault();\n    axios.post('/api/send', {\n      senderName: senderName,\n      senderEmail: senderEmail,\n      message: message\n    }).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    style: {\n      marginTop: '25px',\n      textAlign: 'center'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Contact\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: sendEmail,\n      className: \"contact-form\",\n      name: \"contact\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: function onChange(e) {\n            setSenderName(e.target.value);\n          },\n          required: true,\n          type: \"text\",\n          className: \"form-control\",\n          placeholder: \"Name\",\n          name: \"name\",\n          id: \"yourname\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          onChange: function onChange(e) {\n            setSenderEmail(e.target.value);\n          },\n          required: true,\n          type: \"email\",\n          className: \"form-control\",\n          placeholder: \"name@example.com\",\n          name: \"email\",\n          id: \"youremail\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          onChange: function onChange(e) {\n            setMessage(e.target.value);\n          },\n          required: true,\n          className: \"form-control\",\n          name: \"message\",\n          id: \"yourmessage\",\n          rows: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Contact, \"bA+pI0kI+kDeV6qTsGMrpEBA1Hs=\");\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkNvbnRhY3QiLCJ1c2VTdGF0ZSIsInNlbmRlck5hbWUiLCJzZXRTZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJzZXRTZW5kZXJFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUViQyxVQUZhO0FBQUEsTUFFREMsYUFGQzs7QUFBQSxtQkFHa0JGLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2JHLFdBSGE7QUFBQSxNQUdBQyxjQUhBOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEVBQUQsQ0FKbEI7QUFBQSxNQUliSyxPQUphO0FBQUEsTUFJSkMsVUFKSTs7QUFNcEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFFQVosU0FBSyxDQUFDYSxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUN0QlQsZ0JBQVUsRUFBVkEsVUFEc0I7QUFFdEJFLGlCQUFXLEVBQVhBLFdBRnNCO0FBR3RCRSxhQUFPLEVBQVBBO0FBSHNCLEtBQXhCLEVBS0dNLElBTEgsQ0FLUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNELEtBUEgsV0FRUyxVQUFVRyxLQUFWLEVBQWlCO0FBQ3RCRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNELEtBVkg7QUFXRCxHQWREOztBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsZUFBUyxFQUFFO0FBQWhDLEtBQWxDO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sY0FBUSxFQUFFVixTQUFoQjtBQUEyQixlQUFTLEVBQUMsY0FBckM7QUFBb0QsVUFBSSxFQUFDLFNBQXpEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ3RCTix5QkFBYSxDQUFDTSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0QsV0FGRDtBQUVHLGtCQUFRLE1BRlg7QUFFWSxjQUFJLEVBQUMsTUFGakI7QUFFd0IsbUJBQVMsRUFBQyxjQUZsQztBQUVpRCxxQkFBVyxFQUFDLE1BRjdEO0FBRW9FLGNBQUksRUFBQyxNQUZ6RTtBQUVnRixZQUFFLEVBQUM7QUFGbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFPLGtCQUFRLEVBQUUsa0JBQUNYLENBQUQsRUFBTztBQUN0QkosMEJBQWMsQ0FBQ0ksQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELFdBRkQ7QUFFRyxrQkFBUSxNQUZYO0FBRVksY0FBSSxFQUFDLE9BRmpCO0FBRXlCLG1CQUFTLEVBQUMsY0FGbkM7QUFFa0QscUJBQVcsRUFBQyxrQkFGOUQ7QUFFaUYsY0FBSSxFQUFDLE9BRnRGO0FBRThGLFlBQUUsRUFBQztBQUZqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBYUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQVUsa0JBQVEsRUFBRSxrQkFBQ1gsQ0FBRCxFQUFPO0FBQ3pCRixzQkFBVSxDQUFDRSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsV0FGRDtBQUVHLGtCQUFRLE1BRlg7QUFFWSxtQkFBUyxFQUFDLGNBRnRCO0FBRXFDLGNBQUksRUFBQyxTQUYxQztBQUVvRCxZQUFFLEVBQUMsYUFGdkQ7QUFFcUUsY0FBSSxFQUFDO0FBRjFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFtQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQWpERDs7R0FBTXBCLE87O0tBQUFBLE87QUFtRFNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICBjb25zdCBbc2VuZGVyTmFtZSwgc2V0U2VuZGVyTmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlbmRlckVtYWlsLCBzZXRTZW5kZXJFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGF4aW9zLnBvc3QoJy9hcGkvc2VuZCcsIHtcbiAgICAgIHNlbmRlck5hbWUsXG4gICAgICBzZW5kZXJFbWFpbCxcbiAgICAgIG1lc3NhZ2VcbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInIHN0eWxlPXt7IG1hcmdpblRvcDogJzI1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRFbWFpbH0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCIgbmFtZT1cImNvbnRhY3RcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRTZW5kZXJOYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD1cInlvdXJuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRTZW5kZXJFbWFpbChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9fSByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIm5hbWVAZXhhbXBsZS5jb21cIiBuYW1lPVwiZW1haWxcIiBpZD1cInlvdXJlbWFpbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9fSByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWVzc2FnZVwiIGlkPVwieW91cm1lc3NhZ2VcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})