/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tag/[tag]",{

/***/ "./pages/tag/[tag].tsx":
/*!*****************************!*\
  !*** ./pages/tag/[tag].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"TagPage\": function() { return /* binding */ TagPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_molecules_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/molecules/Card */ \"./components/molecules/Card.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/tag/[tag].tsx\",\n    _this = undefined;\n\n\n\n\n\nvar __N_SSG = true;\nvar TagPage = function TagPage(_ref) {\n  var posts = _ref.posts,\n      tag = _ref.tag;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: _next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: tag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), posts.map(function (post, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n        post: post,\n        testid: post.slug\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n_c = TagPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"TagPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFnL1t0YWddLnRzeD8wNjA0Il0sIm5hbWVzIjpbIlRhZ1BhZ2UiLCJwb3N0cyIsInRhZyIsIlN0YXRpY3MiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInBvc3QiLCJpbmRleCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUdBOztBQU9PLElBQU1BLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BQW9CO0FBQUEsTUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUNqRSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUlDLHFFQUFtQkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBQSxnQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFLR0QsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ1QsOERBQUMsK0RBQUQ7QUFBTSxZQUFJLEVBQUVELElBQVo7QUFBa0IsY0FBTSxFQUFFQSxJQUFJLENBQUNFO0FBQS9CLFNBQTBDRCxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpNO0tBQU1QLE87QUF3Q2IsK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy90YWcvW3RhZ10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NhcmQnO1xuaW1wb3J0IHsgZ2V0QWxsVGFncywgZ2V0UG9zdEJ5VGFnIH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3Bvc3QnO1xuaW1wb3J0IFN0YXRpY3MgZnJvbSAnLi4vLi4vbmV4dC1zdGF0aWNzLmNvbmZpZyc7XG5cbnR5cGUgVGFnUGFnZVByb3BzID0ge1xuICBwb3N0czogUG9zdFR5cGVbXTtcbiAgdGFnOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgVGFnUGFnZTogUmVhY3QuRkM8VGFnUGFnZVByb3BzPiA9ICh7IHBvc3RzLCB0YWcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8cD57U3RhdGljcy5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgIDxwPnt0YWd9PC9wPlxuXG4gICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZCBwb3N0PXtwb3N0fSB0ZXN0aWQ9e3Bvc3Quc2x1Z30ga2V5PXtpbmRleH0gLz5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIC8vIGNvbnN0IHBvc3RzID0gZ2V0UG9zdEJ5VGFnKHBhcmFtcy50YWcgYXMgc3RyaW5nKTtcbiAgY29uc3QgdGFnOiBzdHJpbmcgPSBwYXJhbXMudGFnO1xuICBjb25zb2xlLmxvZyh0YWcpO1xuICBjb25zdCBwb3N0cyA9IGdldFBvc3RCeVRhZyh0YWcpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBwb3N0cyxcbiAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGFncyA9IGdldEFsbFRhZ3MoKTtcbiAgY29uc3QgcGF0aHMgPSBbLi4udGFnc10ubWFwKCh0YWc6IHN0cmluZykgPT4gKHtcbiAgICBwYXJhbXM6IHsgdGFnOiB0YWcgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFnUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tag/[tag].tsx\n");

/***/ })

});