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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('transform duration-700 ease'),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(!active);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6 \".concat(rotate, \" inline-block\"),\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto overflow-y-hidden transition-max-height duration-700 ease-in-out\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"f7qiGf4LfIf4t470I5pcT5BjjhU=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_3__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {\n            title: license[0],\n            content: license[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidGl0bGUiLCJjb250ZW50IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjb250ZW50U3BhY2UiLCJ1c2VSZWYiLCJ0b2dnbGVBY2NvcmRpb24iLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwibWF4SGVpZ2h0IiwiTGljZW5zZXMiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwibWFwIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFFQTs7QUFPTyxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQzdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FEcUM7QUFBQSxNQUNsRUMsTUFEa0U7QUFBQSxNQUMxREMsU0FEMEQ7O0FBQUEsbUJBRTdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGcUM7QUFBQSxNQUVsRUcsTUFGa0U7QUFBQSxNQUUxREMsU0FGMEQ7O0FBQUEsbUJBRzdDSiwrQ0FBUSxDQUFDLDZCQUFELENBSHFDO0FBQUEsTUFHbEVLLE1BSGtFO0FBQUEsTUFHMURDLFNBSDBEOztBQUt6RSxNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUEzQjs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCUCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0FHLGFBQVMsQ0FBQ0gsTUFBTSxHQUFHLEtBQUgsYUFBY00sWUFBWSxDQUFDRyxPQUFiLENBQXFCQyxZQUFuQyxPQUFQLENBQVQ7QUFDQUwsYUFBUyxDQUNQTCxNQUFNLEdBQ0YsNkJBREUsR0FFRix3Q0FIRyxDQUFUO0FBS0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHFHQURaO0FBRUUsYUFBTyxFQUFFUSxlQUZYO0FBQUEsOEJBSUU7QUFBRyxpQkFBUyxFQUFDLGtDQUFiO0FBQUEsa0JBQWlEWDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUNFLGFBQUssRUFBQyw0QkFEUjtBQUVFLGlCQUFTLG9CQUFhTyxNQUFiLGtCQUZYO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxlQUFPLEVBQUMsV0FKVjtBQUtFLGNBQU0sRUFBQyxjQUxUO0FBQUEsK0JBT0U7QUFDRSx1QkFBYSxFQUFDLE9BRGhCO0FBRUUsd0JBQWMsRUFBQyxPQUZqQjtBQUdFLHFCQUFXLEVBQUMsR0FIZDtBQUlFLFdBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFxQkU7QUFDRSxTQUFHLEVBQUVFLFlBRFA7QUFFRSxXQUFLLEVBQUU7QUFBRUssaUJBQVMsWUFBS1QsTUFBTDtBQUFYLE9BRlQ7QUFHRSxlQUFTLEVBQUMsZ0ZBSFo7QUFBQSw2QkFLRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUF3Qko7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0FoRE07O0dBQU1GLFM7O0tBQUFBLFM7O0FBc0RiLElBQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUE4QztBQUFBLE1BQTNDQyxRQUEyQyxTQUEzQ0EsUUFBMkM7QUFDN0QsTUFBTUMsVUFBcUIsR0FBRztBQUM1QmpCLFNBQUssd0JBQWlCa0IsK0RBQWpCLENBRHVCO0FBRTVCQyxlQUFXLElBRmlCO0FBRzVCQyxTQUFLLElBSHVCO0FBSTVCQyxRQUFJLElBSndCO0FBSzVCQyxRQUFJLEVBQUU7QUFMc0IsR0FBOUI7QUFRQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRUwsVUFBcEI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHRCxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDekIsNEJBQ0U7QUFBQSxpQ0FDRSw4REFBQyxTQUFEO0FBQVcsaUJBQUssRUFBRUEsT0FBTyxDQUFDLENBQUQsQ0FBekI7QUFBOEIsbUJBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQ7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQURGO0FBT0QsT0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXhCRDs7TUFBTVQsUTtBQThDTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xpY2Vuc2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IE1ldGFQcm9wcyB9IGZyb20gJy4uL3R5cGVzL2xheW91dCc7XG5pbXBvcnQgU3RhdGljcyBmcm9tICcuLi9uZXh0LXN0YXRpY3MuY29uZmlnJztcblxuaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uOiBSZWFjdC5GQzxBY2NvcmRpb25Qcm9wcz4gPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgnMHB4Jyk7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlJyk7XG5cbiAgY29uc3QgY29udGVudFNwYWNlID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgc2V0SGVpZ2h0KGFjdGl2ZSA/ICcwcHgnIDogYCR7Y29udGVudFNwYWNlLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gICAgc2V0Um90YXRlKFxuICAgICAgYWN0aXZlXG4gICAgICAgID8gJ3RyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZSdcbiAgICAgICAgOiAndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlIHJvdGF0ZS0xODAnXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInB5LTYgYm94LWJvcmRlciBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtZm9vdG5vdGUgbGlnaHRcIj57dGl0bGV9PC9wPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiAke3JvdGF0ZX0gaW5saW5lLWJsb2NrYH1cbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRlbnRTcGFjZX1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtoZWlnaHR9YCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXktaGlkZGVuIHRyYW5zaXRpb24tbWF4LWhlaWdodCBkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXRcIlxuICAgICAgPlxuICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInBiLTEwXCI+e2NvbnRlbnR9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTGljZW5zZXNQcm9wcyA9IHtcbiAgbGljZW5zZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuY29uc3QgTGljZW5zZXMgPSAoeyBsaWNlbnNlcyB9OiBMaWNlbnNlc1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBjdXN0b21NZXRhOiBNZXRhUHJvcHMgPSB7XG4gICAgdGl0bGU6IGBMaWJyYXJpZXMgLSAke1N0YXRpY3MudGl0bGV9YCxcbiAgICBkZXNjcmlwdGlvbjogYGAsXG4gICAgaW1hZ2U6IGBgLFxuICAgIGRhdGU6IGBgLFxuICAgIHR5cGU6ICdhcnRpY2xlJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY3VzdG9tTWV0YT17Y3VzdG9tTWV0YX0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAge2xpY2Vuc2VzLm1hcCgobGljZW5zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIHRpdGxlPXtsaWNlbnNlWzBdfSBjb250ZW50PXtsaWNlbnNlWzFdfSAvPlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBkYXJrOnByb3NlLWRhcmtcIj57bGljZW5zZVswXX08L2Rpdj4gKi99XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzFdfTwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGljZW5zZV9zbHVncyA9IGZzXG4gICAgLnJlYWRkaXJTeW5jKFN0YXRpY3MucGF0aC5saWNlbnNlcylcbiAgICAuZmlsdGVyKChwYXRoKSA9PiAvXFwubWR4PyQvLnRlc3QocGF0aCkpO1xuXG4gIGNvbnN0IGxpY2Vuc2VzID0gbGljZW5zZV9zbHVncy5tYXAoKHNsdWcpID0+IHtcbiAgICBjb25zdCBsaWNlbnNlX3BhdGggPSBwYXRoLmpvaW4oU3RhdGljcy5wYXRoLmRvY3VtZW50cywgYGxpY2Vuc2VzLyR7c2x1Z31gKTtcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMobGljZW5zZV9wYXRoKTtcblxuICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG4gICAgcmV0dXJuIFtkYXRhLnRpdGxlLnJlcGxhY2UoLyAvZywgJywgJyksIGNvbnRlbnRdO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsaWNlbnNlczogbGljZW5zZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpY2Vuc2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});