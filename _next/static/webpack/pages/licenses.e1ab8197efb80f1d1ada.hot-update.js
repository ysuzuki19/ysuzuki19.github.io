/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/licenses",{

/***/ "./pages/licenses.tsx":
/*!****************************!*\
  !*** ./pages/licenses.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Divider */ \"./components/atoms/Divider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('transform duration-700 ease'),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(active === false ? true : false);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto transition-max-height duration-700 ease-in-out\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"f7qiGf4LfIf4t470I5pcT5BjjhU=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_3__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {\n            title: license[0],\n            content: license[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidGl0bGUiLCJjb250ZW50IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjb250ZW50U3BhY2UiLCJ1c2VSZWYiLCJ0b2dnbGVBY2NvcmRpb24iLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwibWF4SGVpZ2h0IiwiTGljZW5zZXMiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwibWFwIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBRUE7QUFDQTs7QUFPTyxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQzdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FEcUM7QUFBQSxNQUNsRUMsTUFEa0U7QUFBQSxNQUMxREMsU0FEMEQ7O0FBQUEsbUJBRTdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGcUM7QUFBQSxNQUVsRUcsTUFGa0U7QUFBQSxNQUUxREMsU0FGMEQ7O0FBQUEsbUJBRzdDSiwrQ0FBUSxDQUFDLDZCQUFELENBSHFDO0FBQUEsTUFHbEVLLE1BSGtFO0FBQUEsTUFHMURDLFNBSDBEOztBQUt6RSxNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUEzQjs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCUCxhQUFTLENBQUNELE1BQU0sS0FBSyxLQUFYLEdBQW1CLElBQW5CLEdBQTBCLEtBQTNCLENBQVQ7QUFDQUcsYUFBUyxDQUFDSCxNQUFNLEdBQUcsS0FBSCxhQUFjTSxZQUFZLENBQUNHLE9BQWIsQ0FBcUJDLFlBQW5DLE9BQVAsQ0FBVDtBQUNBTCxhQUFTLENBQ1BMLE1BQU0sR0FDRiw2QkFERSxHQUVGLHdDQUhHLENBQVQ7QUFLRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMscUdBRFo7QUFFRSxhQUFPLEVBQUVRLGVBRlg7QUFBQSw4QkFJRTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQSxrQkFBaURYO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVVFO0FBQ0UsYUFBSyxFQUFDLDRCQURSO0FBRUUsaUJBQVMsRUFBQyxTQUZaO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxlQUFPLEVBQUMsV0FKVjtBQUtFLGNBQU0sRUFBQyxjQUxUO0FBQUEsK0JBT0U7QUFDRSx1QkFBYSxFQUFDLE9BRGhCO0FBRUUsd0JBQWMsRUFBQyxPQUZqQjtBQUdFLHFCQUFXLEVBQUMsR0FIZDtBQUlFLFdBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUEwQkU7QUFDRSxTQUFHLEVBQUVTLFlBRFA7QUFFRSxXQUFLLEVBQUU7QUFBRUssaUJBQVMsWUFBS1QsTUFBTDtBQUFYLE9BRlQ7QUFHRSxlQUFTLEVBQUMsOERBSFo7QUFBQSw2QkFLRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUF3Qko7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FyRE07O0dBQU1GLFM7O0tBQUFBLFM7O0FBMkRiLElBQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUE4QztBQUFBLE1BQTNDQyxRQUEyQyxTQUEzQ0EsUUFBMkM7QUFDN0QsTUFBTUMsVUFBcUIsR0FBRztBQUM1QmpCLFNBQUssd0JBQWlCa0IsK0RBQWpCLENBRHVCO0FBRTVCQyxlQUFXLElBRmlCO0FBRzVCQyxTQUFLLElBSHVCO0FBSTVCQyxRQUFJLElBSndCO0FBSzVCQyxRQUFJLEVBQUU7QUFMc0IsR0FBOUI7QUFRQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRUwsVUFBcEI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHRCxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDekIsNEJBQ0U7QUFBQSxrQ0FDRSw4REFBQyxTQUFEO0FBQVcsaUJBQUssRUFBRUEsT0FBTyxDQUFDLENBQUQsQ0FBekI7QUFBOEIsbUJBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQ7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSx3QkFERjtBQVFELE9BVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBekJEOztNQUFNVCxRO0FBZ0ROLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGljZW5zZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTWV0YVByb3BzIH0gZnJvbSAnLi4vdHlwZXMvbGF5b3V0JztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9EaXZpZGVyJztcblxuaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uOiBSZWFjdC5GQzxBY2NvcmRpb25Qcm9wcz4gPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgnMHB4Jyk7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlJyk7XG5cbiAgY29uc3QgY29udGVudFNwYWNlID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmUoYWN0aXZlID09PSBmYWxzZSA/IHRydWUgOiBmYWxzZSk7XG4gICAgc2V0SGVpZ2h0KGFjdGl2ZSA/ICcwcHgnIDogYCR7Y29udGVudFNwYWNlLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gICAgc2V0Um90YXRlKFxuICAgICAgYWN0aXZlXG4gICAgICAgID8gJ3RyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZSdcbiAgICAgICAgOiAndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlIHJvdGF0ZS0xODAnXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInB5LTYgYm94LWJvcmRlciBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtZm9vdG5vdGUgbGlnaHRcIj57dGl0bGV9PC9wPlxuICAgICAgICB7LyogPGltZ1xuICAgICAgICAgIHNyYz17YCR7YXBwQ29uZmlnLnB1YmxpY1VybH0vaW1nL2ljb25zL2NoZXZyb24tdXAuc3ZnYH1cbiAgICAgICAgICBhbHQ9XCJDaGV2cm9uIGljb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cm90YXRlfSBpbmxpbmUtYmxvY2tgfVxuICAgICAgICAvPiAqL31cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBkPVwiTTE5IDlsLTcgNy03LTdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGVudFNwYWNlfVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGAke2hlaWdodH1gIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gdHJhbnNpdGlvbi1tYXgtaGVpZ2h0IGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIj57Y29udGVudH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBMaWNlbnNlc1Byb3BzID0ge1xuICBsaWNlbnNlczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5jb25zdCBMaWNlbnNlcyA9ICh7IGxpY2Vuc2VzIH06IExpY2Vuc2VzUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGN1c3RvbU1ldGE6IE1ldGFQcm9wcyA9IHtcbiAgICB0aXRsZTogYExpYnJhcmllcyAtICR7U3RhdGljcy50aXRsZX1gLFxuICAgIGRlc2NyaXB0aW9uOiBgYCxcbiAgICBpbWFnZTogYGAsXG4gICAgZGF0ZTogYGAsXG4gICAgdHlwZTogJ2FydGljbGUnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjdXN0b21NZXRhPXtjdXN0b21NZXRhfT5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICB7bGljZW5zZXMubWFwKChsaWNlbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e2xpY2Vuc2VbMF19IGNvbnRlbnQ9e2xpY2Vuc2VbMV19IC8+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzBdfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzFdfTwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGljZW5zZV9zbHVncyA9IGZzXG4gICAgLnJlYWRkaXJTeW5jKFN0YXRpY3MucGF0aC5saWNlbnNlcylcbiAgICAuZmlsdGVyKChwYXRoKSA9PiAvXFwubWR4PyQvLnRlc3QocGF0aCkpO1xuXG4gIGNvbnN0IGxpY2Vuc2VzID0gbGljZW5zZV9zbHVncy5tYXAoKHNsdWcpID0+IHtcbiAgICBjb25zdCBsaWNlbnNlX3BhdGggPSBwYXRoLmpvaW4oU3RhdGljcy5wYXRoLmRvY3VtZW50cywgYGxpY2Vuc2VzLyR7c2x1Z31gKTtcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMobGljZW5zZV9wYXRoKTtcblxuICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG4gICAgcmV0dXJuIFtkYXRhLnRpdGxlLnJlcGxhY2UoLyAvZywgJywnKSwgY29udGVudF07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhsaWNlbnNlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGljZW5zZXM6IGxpY2Vuc2VzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWNlbnNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});