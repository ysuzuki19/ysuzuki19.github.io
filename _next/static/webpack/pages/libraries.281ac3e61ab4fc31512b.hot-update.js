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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/ThemeSwitch */ \"./components/atoms/ThemeSwitch.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/components/molecules/Navigation.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var href = _ref.href,\n      desktop = _ref.desktop,\n      testid = _ref.testid,\n      children = _ref.children;\n  var isDesktop = desktop || false; // default value is false\n\n  var itemBase = 'text-gray-900 dark:text-white md:ml-10 md:pr-6 md:py-4';\n\n  if (isDesktop) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"invisible md:visible \".concat(itemBase),\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: itemBase,\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = NavItem;\n\nvar Navigation = function Navigation() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      className: \"sticky top-0 left-0 right-0 opacity-100\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center flex-wrap py-2 opacity-100\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"text-gray-900 dark:text-white md:pr-6 md:py-4 ml-10 md:mr-12 font-bold text-2xl\",\n            \"data-testid\": \"blog-title\",\n            children: _next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/\",\n          desktop: true,\n          testid: \"goto-home\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/about\",\n          testid: \"goto-about\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/features\",\n          desktop: true,\n          testid: \"goto-features\",\n          children: \"Features\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_3__.default, {\n          className: \"ml-auto\",\n          testid: \"switch-theme\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2aWdhdGlvbi50c3g/ZDRmNiJdLCJuYW1lcyI6WyJOYXZJdGVtIiwiaHJlZiIsImRlc2t0b3AiLCJ0ZXN0aWQiLCJjaGlsZHJlbiIsImlzRGVza3RvcCIsIml0ZW1CYXNlIiwiTmF2aWdhdGlvbiIsIlN0YXRpY3MiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQVFBLElBQU1BLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BS2xDO0FBQUEsTUFKSkMsSUFJSSxRQUpKQSxJQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsU0FBUyxHQUFHSCxPQUFPLElBQUksS0FBN0IsQ0FESSxDQUNnQzs7QUFDcEMsTUFBTUksUUFBUSxHQUFHLHdEQUFqQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDYix3QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUosSUFBWjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsaUNBQTBCSyxRQUExQixDQUFaO0FBQWtELHVCQUFhSCxNQUEvRDtBQUFBLGtCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJELE1BUU87QUFDTCx3QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUgsSUFBWjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRUssUUFBZDtBQUF3Qix1QkFBYUgsTUFBckM7QUFBQSxrQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0Q7QUFDRixDQXpCRDs7S0FBTUosTzs7QUEyQk4sSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBbUI7QUFDcEMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFRLGVBQVMsRUFBQyx5Q0FBbEI7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsOENBQWY7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLGlGQURaO0FBRUUsMkJBQVksWUFGZDtBQUFBLHNCQUlHQywrREFBYUM7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFTRSw4REFBQyxPQUFEO0FBQVMsY0FBSSxFQUFDLEdBQWQ7QUFBa0IsaUJBQU8sTUFBekI7QUFBMEIsZ0JBQU0sRUFBQyxXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQVlFLDhEQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUMsUUFBZDtBQUF1QixnQkFBTSxFQUFDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBZUUsOERBQUMsT0FBRDtBQUFTLGNBQUksRUFBQyxXQUFkO0FBQTBCLGlCQUFPLE1BQWpDO0FBQWtDLGdCQUFNLEVBQUMsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFrQkUsOERBQUMsdURBQUQ7QUFBYSxtQkFBUyxFQUFDLFNBQXZCO0FBQWlDLGdCQUFNLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMkJELENBNUJEOztNQUFNRixVO0FBOEJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2aWdhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gJy4uL2F0b21zL1RoZW1lU3dpdGNoJztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uLy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuXG50eXBlIE5hdkl0ZW1Qcm9wcyA9IHtcbiAgaHJlZjogc3RyaW5nO1xuICBkZXNrdG9wPzogYm9vbGVhbjtcbiAgdGVzdGlkPzogc3RyaW5nO1xufTtcblxuY29uc3QgTmF2SXRlbTogUmVhY3QuRkM8TmF2SXRlbVByb3BzPiA9ICh7XG4gIGhyZWYsXG4gIGRlc2t0b3AsXG4gIHRlc3RpZCxcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IGlzRGVza3RvcCA9IGRlc2t0b3AgfHwgZmFsc2U7IC8vIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgY29uc3QgaXRlbUJhc2UgPSAndGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgbWQ6bWwtMTAgbWQ6cHItNiBtZDpweS00JztcbiAgaWYgKGlzRGVza3RvcCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtgaW52aXNpYmxlIG1kOnZpc2libGUgJHtpdGVtQmFzZX1gfSBkYXRhLXRlc3RpZD17dGVzdGlkfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQmFzZX0gZGF0YS10ZXN0aWQ9e3Rlc3RpZH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGxlZnQtMCByaWdodC0wIG9wYWNpdHktMTAwXCI+XG4gICAgICAgIHsvKiA8aGVhZGVyPiAqL31cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgcHktMiBvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBtZDpwci02IG1kOnB5LTQgbWwtMTAgbWQ6bXItMTIgZm9udC1ib2xkIHRleHQtMnhsXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJibG9nLXRpdGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1N0YXRpY3MudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvXCIgZGVza3RvcCB0ZXN0aWQ9XCJnb3RvLWhvbWVcIj5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9hYm91dFwiIHRlc3RpZD1cImdvdG8tYWJvdXRcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvZmVhdHVyZXNcIiBkZXNrdG9wIHRlc3RpZD1cImdvdG8tZmVhdHVyZXNcIj5cbiAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxUaGVtZVN3aXRjaCBjbGFzc05hbWU9XCJtbC1hdXRvXCIgdGVzdGlkPVwic3dpdGNoLXRoZW1lXCIgLz5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Navigation.tsx\n");

/***/ })

});