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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('transform duration-700 ease'),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(active === false ? true : false);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6 \".concat(rotate, \" inline-block\"),\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto overflow-y-hidden transition-max-height duration-700 ease-in-out\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"f7qiGf4LfIf4t470I5pcT5BjjhU=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_3__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {\n            title: license[0],\n            content: license[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidGl0bGUiLCJjb250ZW50IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjb250ZW50U3BhY2UiLCJ1c2VSZWYiLCJ0b2dnbGVBY2NvcmRpb24iLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwibWF4SGVpZ2h0IiwiTGljZW5zZXMiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwibWFwIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFFQTs7QUFPTyxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQzdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FEcUM7QUFBQSxNQUNsRUMsTUFEa0U7QUFBQSxNQUMxREMsU0FEMEQ7O0FBQUEsbUJBRTdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGcUM7QUFBQSxNQUVsRUcsTUFGa0U7QUFBQSxNQUUxREMsU0FGMEQ7O0FBQUEsbUJBRzdDSiwrQ0FBUSxDQUFDLDZCQUFELENBSHFDO0FBQUEsTUFHbEVLLE1BSGtFO0FBQUEsTUFHMURDLFNBSDBEOztBQUt6RSxNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUEzQjs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCUCxhQUFTLENBQUNELE1BQU0sS0FBSyxLQUFYLEdBQW1CLElBQW5CLEdBQTBCLEtBQTNCLENBQVQ7QUFDQUcsYUFBUyxDQUFDSCxNQUFNLEdBQUcsS0FBSCxhQUFjTSxZQUFZLENBQUNHLE9BQWIsQ0FBcUJDLFlBQW5DLE9BQVAsQ0FBVDtBQUNBTCxhQUFTLENBQ1BMLE1BQU0sR0FDRiw2QkFERSxHQUVGLHdDQUhHLENBQVQ7QUFLRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMscUdBRFo7QUFFRSxhQUFPLEVBQUVRLGVBRlg7QUFBQSw4QkFJRTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQSxrQkFBaURYO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQ0UsYUFBSyxFQUFDLDRCQURSO0FBRUUsaUJBQVMsb0JBQWFPLE1BQWIsa0JBRlg7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGVBQU8sRUFBQyxXQUpWO0FBS0UsY0FBTSxFQUFDLGNBTFQ7QUFBQSwrQkFPRTtBQUNFLHVCQUFhLEVBQUMsT0FEaEI7QUFFRSx3QkFBYyxFQUFDLE9BRmpCO0FBR0UscUJBQVcsRUFBQyxHQUhkO0FBSUUsV0FBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXFCRTtBQUNFLFNBQUcsRUFBRUUsWUFEUDtBQUVFLFdBQUssRUFBRTtBQUFFSyxpQkFBUyxZQUFLVCxNQUFMO0FBQVgsT0FGVDtBQUdFLGVBQVMsRUFBQyxnRkFIWjtBQUFBLDZCQUtFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBQXdCSjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQWhETTs7R0FBTUYsUzs7S0FBQUEsUzs7QUFzRGIsSUFBTWdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQThDO0FBQUEsTUFBM0NDLFFBQTJDLFNBQTNDQSxRQUEyQztBQUM3RCxNQUFNQyxVQUFxQixHQUFHO0FBQzVCakIsU0FBSyx3QkFBaUJrQiwrREFBakIsQ0FEdUI7QUFFNUJDLGVBQVcsSUFGaUI7QUFHNUJDLFNBQUssSUFIdUI7QUFJNUJDLFFBQUksSUFKd0I7QUFLNUJDLFFBQUksRUFBRTtBQUxzQixHQUE5QjtBQVFBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFTCxVQUFwQjtBQUFBLDJCQUNFO0FBQUEsZ0JBQ0dELFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUN6Qiw0QkFDRTtBQUFBLGlDQUNFLDhEQUFDLFNBQUQ7QUFBVyxpQkFBSyxFQUFFQSxPQUFPLENBQUMsQ0FBRCxDQUF6QjtBQUE4QixtQkFBTyxFQUFFQSxPQUFPLENBQUMsQ0FBRDtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBREY7QUFPRCxPQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBeEJEOztNQUFNVCxRO0FBK0NOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGljZW5zZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTWV0YVByb3BzIH0gZnJvbSAnLi4vdHlwZXMvbGF5b3V0JztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuXG5pbnRlcmZhY2UgQWNjb3JkaW9uUHJvcHMge1xuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlO1xuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb246IFJlYWN0LkZDPEFjY29yZGlvblByb3BzPiA9ICh7IHRpdGxlLCBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCcwcHgnKTtcbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKCd0cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2UnKTtcblxuICBjb25zdCBjb250ZW50U3BhY2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgIHNldEFjdGl2ZShhY3RpdmUgPT09IGZhbHNlID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICBzZXRIZWlnaHQoYWN0aXZlID8gJzBweCcgOiBgJHtjb250ZW50U3BhY2UuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgKTtcbiAgICBzZXRSb3RhdGUoXG4gICAgICBhY3RpdmVcbiAgICAgICAgPyAndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlJ1xuICAgICAgICA6ICd0cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2Ugcm90YXRlLTE4MCdcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwicHktNiBib3gtYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufVxuICAgICAgPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1mb290bm90ZSBsaWdodFwiPnt0aXRsZX08L3A+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02ICR7cm90YXRlfSBpbmxpbmUtYmxvY2tgfVxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBkPVwiTTE5IDlsLTcgNy03LTdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGVudFNwYWNlfVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGAke2hlaWdodH1gIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteS1oaWRkZW4gdHJhbnNpdGlvbi1tYXgtaGVpZ2h0IGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dFwiXG4gICAgICA+XG4gICAgICAgIDxwcmUgY2xhc3NOYW1lPVwicGItMTBcIj57Y29udGVudH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBMaWNlbnNlc1Byb3BzID0ge1xuICBsaWNlbnNlczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5jb25zdCBMaWNlbnNlcyA9ICh7IGxpY2Vuc2VzIH06IExpY2Vuc2VzUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGN1c3RvbU1ldGE6IE1ldGFQcm9wcyA9IHtcbiAgICB0aXRsZTogYExpYnJhcmllcyAtICR7U3RhdGljcy50aXRsZX1gLFxuICAgIGRlc2NyaXB0aW9uOiBgYCxcbiAgICBpbWFnZTogYGAsXG4gICAgZGF0ZTogYGAsXG4gICAgdHlwZTogJ2FydGljbGUnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjdXN0b21NZXRhPXtjdXN0b21NZXRhfT5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICB7bGljZW5zZXMubWFwKChsaWNlbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e2xpY2Vuc2VbMF19IGNvbnRlbnQ9e2xpY2Vuc2VbMV19IC8+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIGRhcms6cHJvc2UtZGFya1wiPntsaWNlbnNlWzBdfTwvZGl2PiAqL31cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJvc2UgZGFyazpwcm9zZS1kYXJrXCI+e2xpY2Vuc2VbMV19PC9kaXY+ICovfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWNlbnNlX3NsdWdzID0gZnNcbiAgICAucmVhZGRpclN5bmMoU3RhdGljcy5wYXRoLmxpY2Vuc2VzKVxuICAgIC5maWx0ZXIoKHBhdGgpID0+IC9cXC5tZHg/JC8udGVzdChwYXRoKSk7XG5cbiAgY29uc3QgbGljZW5zZXMgPSBsaWNlbnNlX3NsdWdzLm1hcCgoc2x1ZykgPT4ge1xuICAgIGNvbnN0IGxpY2Vuc2VfcGF0aCA9IHBhdGguam9pbihTdGF0aWNzLnBhdGguZG9jdW1lbnRzLCBgbGljZW5zZXMvJHtzbHVnfWApO1xuICAgIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhsaWNlbnNlX3BhdGgpO1xuXG4gICAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKTtcbiAgICByZXR1cm4gW2RhdGEudGl0bGUucmVwbGFjZSgvIC9nLCAnLCcpLCBjb250ZW50XTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGxpY2Vuc2VzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsaWNlbnNlczogbGljZW5zZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpY2Vuc2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});