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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Divider */ \"./components/atoms/Divider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('transform duration-700 ease'),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(active === false ? true : false);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto transition-max-height duration-700 ease-in-out\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"f7qiGf4LfIf4t470I5pcT5BjjhU=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_3__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prose dark:prose-dark\",\n            children: license[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prose dark:prose-dark\",\n            children: license[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidGl0bGUiLCJjb250ZW50IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjb250ZW50U3BhY2UiLCJ1c2VSZWYiLCJ0b2dnbGVBY2NvcmRpb24iLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwibWF4SGVpZ2h0IiwiTGljZW5zZXMiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwibWFwIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBRUE7QUFDQTs7QUFPTyxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQzdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FEcUM7QUFBQSxNQUNsRUMsTUFEa0U7QUFBQSxNQUMxREMsU0FEMEQ7O0FBQUEsbUJBRTdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGcUM7QUFBQSxNQUVsRUcsTUFGa0U7QUFBQSxNQUUxREMsU0FGMEQ7O0FBQUEsbUJBRzdDSiwrQ0FBUSxDQUFDLDZCQUFELENBSHFDO0FBQUEsTUFHbEVLLE1BSGtFO0FBQUEsTUFHMURDLFNBSDBEOztBQUt6RSxNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUEzQjs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCUCxhQUFTLENBQUNELE1BQU0sS0FBSyxLQUFYLEdBQW1CLElBQW5CLEdBQTBCLEtBQTNCLENBQVQ7QUFDQUcsYUFBUyxDQUFDSCxNQUFNLEdBQUcsS0FBSCxhQUFjTSxZQUFZLENBQUNHLE9BQWIsQ0FBcUJDLFlBQW5DLE9BQVAsQ0FBVDtBQUNBTCxhQUFTLENBQ1BMLE1BQU0sR0FDRiw2QkFERSxHQUVGLHdDQUhHLENBQVQ7QUFLRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMscUdBRFo7QUFFRSxhQUFPLEVBQUVRLGVBRlg7QUFBQSw2QkFJRTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQSxrQkFBaURYO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUNFLFNBQUcsRUFBRVMsWUFEUDtBQUVFLFdBQUssRUFBRTtBQUFFSyxpQkFBUyxZQUFLVCxNQUFMO0FBQVgsT0FGVDtBQUdFLGVBQVMsRUFBQyw4REFIWjtBQUFBLDZCQUtFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBQXdCSjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBbENNOztHQUFNRixTOztLQUFBQSxTOztBQXdDYixJQUFNZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBOEM7QUFBQSxNQUEzQ0MsUUFBMkMsU0FBM0NBLFFBQTJDO0FBQzdELE1BQU1DLFVBQXFCLEdBQUc7QUFDNUJqQixTQUFLLHdCQUFpQmtCLCtEQUFqQixDQUR1QjtBQUU1QkMsZUFBVyxJQUZpQjtBQUc1QkMsU0FBSyxJQUh1QjtBQUk1QkMsUUFBSSxJQUp3QjtBQUs1QkMsUUFBSSxFQUFFO0FBTHNCLEdBQTlCO0FBUUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVMLFVBQXBCO0FBQUEsMkJBQ0U7QUFBQSxnQkFDR0QsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pCLDRCQUNFO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsc0JBQXdDQSxPQUFPLENBQUMsQ0FBRDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsc0JBQXdDQSxPQUFPLENBQUMsQ0FBRDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBLHdCQURGO0FBT0QsT0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXhCRDs7TUFBTVQsUTtBQStDTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xpY2Vuc2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IE1ldGFQcm9wcyB9IGZyb20gJy4uL3R5cGVzL2xheW91dCc7XG5pbXBvcnQgU3RhdGljcyBmcm9tICcuLi9uZXh0LXN0YXRpY3MuY29uZmlnJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvRGl2aWRlcic7XG5cbmludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyB7XG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8QWNjb3JkaW9uUHJvcHM+ID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoJzBweCcpO1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoJ3RyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZScpO1xuXG4gIGNvbnN0IGNvbnRlbnRTcGFjZSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSA9PT0gZmFsc2UgPyB0cnVlIDogZmFsc2UpO1xuICAgIHNldEhlaWdodChhY3RpdmUgPyAnMHB4JyA6IGAke2NvbnRlbnRTcGFjZS5jdXJyZW50LnNjcm9sbEhlaWdodH1weGApO1xuICAgIHNldFJvdGF0ZShcbiAgICAgIGFjdGl2ZVxuICAgICAgICA/ICd0cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2UnXG4gICAgICAgIDogJ3RyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZSByb3RhdGUtMTgwJ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJweS02IGJveC1ib3JkZXIgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259XG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWZvb3Rub3RlIGxpZ2h0XCI+e3RpdGxlfTwvcD5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRlbnRTcGFjZX1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtoZWlnaHR9YCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIHRyYW5zaXRpb24tbWF4LWhlaWdodCBkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwXCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTGljZW5zZXNQcm9wcyA9IHtcbiAgbGljZW5zZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuY29uc3QgTGljZW5zZXMgPSAoeyBsaWNlbnNlcyB9OiBMaWNlbnNlc1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBjdXN0b21NZXRhOiBNZXRhUHJvcHMgPSB7XG4gICAgdGl0bGU6IGBMaWJyYXJpZXMgLSAke1N0YXRpY3MudGl0bGV9YCxcbiAgICBkZXNjcmlwdGlvbjogYGAsXG4gICAgaW1hZ2U6IGBgLFxuICAgIGRhdGU6IGBgLFxuICAgIHR5cGU6ICdhcnRpY2xlJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY3VzdG9tTWV0YT17Y3VzdG9tTWV0YX0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAge2xpY2Vuc2VzLm1hcCgobGljZW5zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzBdfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzFdfTwvZGl2PlxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWNlbnNlX3NsdWdzID0gZnNcbiAgICAucmVhZGRpclN5bmMoU3RhdGljcy5wYXRoLmxpY2Vuc2VzKVxuICAgIC5maWx0ZXIoKHBhdGgpID0+IC9cXC5tZHg/JC8udGVzdChwYXRoKSk7XG5cbiAgY29uc3QgbGljZW5zZXMgPSBsaWNlbnNlX3NsdWdzLm1hcCgoc2x1ZykgPT4ge1xuICAgIGNvbnN0IGxpY2Vuc2VfcGF0aCA9IHBhdGguam9pbihTdGF0aWNzLnBhdGguZG9jdW1lbnRzLCBgbGljZW5zZXMvJHtzbHVnfWApO1xuICAgIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhsaWNlbnNlX3BhdGgpO1xuXG4gICAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKTtcbiAgICByZXR1cm4gW2RhdGEudGl0bGUucmVwbGFjZSgvIC9nLCAnLCcpLCBjb250ZW50XTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGxpY2Vuc2VzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsaWNlbnNlczogbGljZW5zZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpY2Vuc2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});