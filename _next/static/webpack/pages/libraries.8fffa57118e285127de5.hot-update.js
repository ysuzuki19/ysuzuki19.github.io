/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/libraries",{

/***/ "./components/molecules/Navigation.tsx":
/*!*********************************************!*\
  !*** ./components/molecules/Navigation.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/ThemeSwitch */ \"./components/atoms/ThemeSwitch.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/components/molecules/Navigation.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var href = _ref.href,\n      desktop = _ref.desktop,\n      testid = _ref.testid,\n      children = _ref.children;\n  var isDesktop = desktop || false; // default value is false\n\n  var itemBase = 'text-gray-900 dark:text-white md:ml-10 md:pr-6 md:py-4';\n\n  if (isDesktop) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"invisible md:visible \".concat(itemBase),\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: itemBase,\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = NavItem;\n\nvar Navigation = function Navigation() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: \"flex items-center flex-wrap py-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"text-gray-900 dark:text-white md:pr-6 md:py-4 ml-10 md:mr-12 font-bold text-2xl\",\n          \"data-testid\": \"blog-title\",\n          children: _next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        href: \"/\",\n        desktop: true,\n        testid: \"goto-home\",\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        href: \"/about\",\n        testid: \"goto-about\",\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n        href: \"/features\",\n        desktop: true,\n        testid: \"goto-features\",\n        children: \"Features\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_3__.default, {\n        className: \"ml-auto\",\n        testid: \"switch-theme\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2aWdhdGlvbi50c3g/ZDRmNiJdLCJuYW1lcyI6WyJOYXZJdGVtIiwiaHJlZiIsImRlc2t0b3AiLCJ0ZXN0aWQiLCJjaGlsZHJlbiIsImlzRGVza3RvcCIsIml0ZW1CYXNlIiwiTmF2aWdhdGlvbiIsIlN0YXRpY3MiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVFBLElBQU1BLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BS2xDO0FBQUEsTUFKSkMsSUFJSSxRQUpKQSxJQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsU0FBUyxHQUFHSCxPQUFPLElBQUksS0FBN0IsQ0FESSxDQUNnQzs7QUFDcEMsTUFBTUksUUFBUSxHQUFHLHdEQUFqQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDYix3QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUosSUFBWjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsaUNBQTBCSyxRQUExQixDQUFaO0FBQWtELHVCQUFhSCxNQUEvRDtBQUFBLGtCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJELE1BUU87QUFDTCx3QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUgsSUFBWjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUssUUFBZDtBQUF3Qix1QkFBYUgsTUFBckM7QUFBQSxrQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0Q7QUFDRixDQXpCRDs7S0FBTUosTzs7QUEyQk4sSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBbUI7QUFDcEMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxrQ0FBZjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMsaUZBRFo7QUFFRSx5QkFBWSxZQUZkO0FBQUEsb0JBSUdDLCtEQUFhQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0UsOERBQUMsT0FBRDtBQUFTLFlBQUksRUFBQyxHQUFkO0FBQWtCLGVBQU8sTUFBekI7QUFBMEIsY0FBTSxFQUFDLFdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFZRSw4REFBQyxPQUFEO0FBQVMsWUFBSSxFQUFDLFFBQWQ7QUFBdUIsY0FBTSxFQUFDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFlRSw4REFBQyxPQUFEO0FBQVMsWUFBSSxFQUFDLFdBQWQ7QUFBMEIsZUFBTyxNQUFqQztBQUFrQyxjQUFNLEVBQUMsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQWtCRSw4REFBQyx1REFBRDtBQUFhLGlCQUFTLEVBQUMsU0FBdkI7QUFBaUMsY0FBTSxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3QkQsQ0F6QkQ7O01BQU1GLFU7QUEyQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9OYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgVGhlbWVTd2l0Y2ggZnJvbSAnLi4vYXRvbXMvVGhlbWVTd2l0Y2gnO1xuaW1wb3J0IFN0YXRpY3MgZnJvbSAnLi4vLi4vbmV4dC1zdGF0aWNzLmNvbmZpZyc7XG5cbnR5cGUgTmF2SXRlbVByb3BzID0ge1xuICBocmVmOiBzdHJpbmc7XG4gIGRlc2t0b3A/OiBib29sZWFuO1xuICB0ZXN0aWQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBOYXZJdGVtOiBSZWFjdC5GQzxOYXZJdGVtUHJvcHM+ID0gKHtcbiAgaHJlZixcbiAgZGVza3RvcCxcbiAgdGVzdGlkLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgaXNEZXNrdG9wID0gZGVza3RvcCB8fCBmYWxzZTsgLy8gZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZVxuICBjb25zdCBpdGVtQmFzZSA9ICd0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBtZDptbC0xMCBtZDpwci02IG1kOnB5LTQnO1xuICBpZiAoaXNEZXNrdG9wKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2BpbnZpc2libGUgbWQ6dmlzaWJsZSAke2l0ZW1CYXNlfWB9IGRhdGEtdGVzdGlkPXt0ZXN0aWR9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1CYXNlfSBkYXRhLXRlc3RpZD17dGVzdGlkfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgcHktMlwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBtZDpwci02IG1kOnB5LTQgbWwtMTAgbWQ6bXItMTIgZm9udC1ib2xkIHRleHQtMnhsXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYmxvZy10aXRsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1N0YXRpY3MudGl0bGV9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvXCIgZGVza3RvcCB0ZXN0aWQ9XCJnb3RvLWhvbWVcIj5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9hYm91dFwiIHRlc3RpZD1cImdvdG8tYWJvdXRcIj5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvZmVhdHVyZXNcIiBkZXNrdG9wIHRlc3RpZD1cImdvdG8tZmVhdHVyZXNcIj5cbiAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDxUaGVtZVN3aXRjaCBjbGFzc05hbWU9XCJtbC1hdXRvXCIgdGVzdGlkPVwic3dpdGNoLXRoZW1lXCIgLz5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Navigation.tsx\n");

/***/ })

});