/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/libraries",{

/***/ "./pages/libraries.tsx":
/*!*****************************!*\
  !*** ./pages/libraries.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var _home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-mdx-remote */ \"./node_modules/next-mdx-remote/index.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _mdx_components_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mdx-components.config */ \"./mdx-components.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/libraries.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar duration = 'duration-500';\nvar transformer = [\"transform \".concat(duration, \" ease\"), \"transform \".concat(duration, \" ease rotate-180\")];\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(transformer[0]),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(!active);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? transformer[1] : transformer[0]);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      className: \"box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"ml-6 inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6 \".concat(rotate, \" inline-block\"),\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto overflow-y-hidden transition-max-height \".concat(duration, \" ease-in-out\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n        className: \"p-0 m-0\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"lZkRl0SD+gRxdxNpgDh5Zc3SdOs=\");\n\n_c = Accordion;\n\nvar Libraries = function Libraries(_ref2) {\n  var source = _ref2.source,\n      licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"prose dark:prose-dark\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {\n          components: _mdx_components_config__WEBPACK_IMPORTED_MODULE_5__.default\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n          children: \"Licenses\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mt-10 divide-y divide-light-blue-400 border-solid border-light-blue-400 border-2\",\n          children: licenses.map(function (license, idx) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Accordion, {\n              title: license[0],\n              content: license[1]\n            }, idx, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Libraries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Libraries);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Libraries\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlicmFyaWVzLnRzeD9jZWRhIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwidHJhbnNmb3JtZXIiLCJBY2NvcmRpb24iLCJ0aXRsZSIsImNvbnRlbnQiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhlaWdodCIsInNldEhlaWdodCIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImNvbnRlbnRTcGFjZSIsInVzZVJlZiIsInRvZ2dsZUFjY29yZGlvbiIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJtYXhIZWlnaHQiLCJMaWJyYXJpZXMiLCJzb3VyY2UiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwiTWR4Q29tcG9uZW50cyIsIm1hcCIsImxpY2Vuc2UiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFJQTtBQUVBO0FBQ0E7QUFPQSxJQUFNQSxRQUFRLEdBQUcsY0FBakI7QUFFQSxJQUFNQyxXQUFXLEdBQUcscUJBQ0xELFFBREssZ0NBRUxBLFFBRkssc0JBQXBCOztBQUtPLElBQU1FLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDN0NDLCtDQUFRLENBQUMsS0FBRCxDQURxQztBQUFBLE1BQ2xFQyxNQURrRTtBQUFBLE1BQzFEQyxTQUQwRDs7QUFBQSxtQkFFN0NGLCtDQUFRLENBQUMsS0FBRCxDQUZxQztBQUFBLE1BRWxFRyxNQUZrRTtBQUFBLE1BRTFEQyxTQUYwRDs7QUFBQSxtQkFHN0NKLCtDQUFRLENBQUNKLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FIcUM7QUFBQSxNQUdsRVMsTUFIa0U7QUFBQSxNQUcxREMsU0FIMEQ7O0FB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OztNQUFNWixTO0FBZ0VOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGlicmFyaWVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuaW1wb3J0IG1keFByaXNtIGZyb20gJ21keC1wcmlzbSc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplJztcbmltcG9ydCB7IE1EWFJlbW90ZSwgTURYUmVtb3RlU2VyaWFsaXplUmVzdWx0IH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJztcbmltcG9ydCByZWh5cGVBdXRvbGlua0hlYWRpbmdzIGZyb20gJ3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncyc7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTWV0YVByb3BzIH0gZnJvbSAnLi4vdHlwZXMvbGF5b3V0JztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuaW1wb3J0IE1keENvbXBvbmVudHMgZnJvbSAnLi4vbWR4LWNvbXBvbmVudHMuY29uZmlnJztcblxuaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBkdXJhdGlvbiA9ICdkdXJhdGlvbi01MDAnO1xuXG5jb25zdCB0cmFuc2Zvcm1lciA9IFtcbiAgYHRyYW5zZm9ybSAke2R1cmF0aW9ufSBlYXNlYCxcbiAgYHRyYW5zZm9ybSAke2R1cmF0aW9ufSBlYXNlIHJvdGF0ZS0xODBgLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8QWNjb3JkaW9uUHJvcHM+ID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoJzBweCcpO1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUodHJhbnNmb3JtZXJbMF0pO1xuXG4gIGNvbnN0IGNvbnRlbnRTcGFjZSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgIHNldEhlaWdodChhY3RpdmUgPyAnMHB4JyA6IGAke2NvbnRlbnRTcGFjZS5jdXJyZW50LnNjcm9sbEhlaWdodH1weGApO1xuICAgIHNldFJvdGF0ZShhY3RpdmUgPyB0cmFuc2Zvcm1lclsxXSA6IHRyYW5zZm9ybWVyWzBdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJveC1ib3JkZXIgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259XG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTYgaW5saW5lLWJsb2NrIHRleHQtZm9vdG5vdGUgbGlnaHRcIj57dGl0bGV9PC9wPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiAke3JvdGF0ZX0gaW5saW5lLWJsb2NrYH1cbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRlbnRTcGFjZX1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtoZWlnaHR9YCB9fVxuICAgICAgICBjbGFzc05hbWU9e2BvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXktaGlkZGVuIHRyYW5zaXRpb24tbWF4LWhlaWdodCAke2R1cmF0aW9ufSBlYXNlLWluLW91dGB9XG4gICAgICA+XG4gICAgICAgIDxwcmUgY2xhc3NOYW1lPVwicC0wIG0tMFwiPntjb250ZW50fTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIExpYnJhcmllc1Byb3BzID0ge1xuICBzb3VyY2U6IE1EWFJlbW90ZVNlcmlhbGl6ZVJlc3VsdDtcbiAgbGljZW5zZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuY29uc3QgTGlicmFyaWVzID0gKHsgc291cmNlLCBsaWNlbnNlcyB9OiBMaWJyYXJpZXNQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgY3VzdG9tTWV0YTogTWV0YVByb3BzID0ge1xuICAgIHRpdGxlOiBgTGlicmFyaWVzIC0gJHtTdGF0aWNzLnRpdGxlfWAsXG4gICAgZGVzY3JpcHRpb246IGBgLFxuICAgIGltYWdlOiBgYCxcbiAgICBkYXRlOiBgYCxcbiAgICB0eXBlOiAnYXJ0aWNsZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGN1c3RvbU1ldGE9e2N1c3RvbU1ldGF9PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2UgZGFyazpwcm9zZS1kYXJrXCI+XG4gICAgICAgICAgPE1EWFJlbW90ZSB7Li4uc291cmNlfSBjb21wb25lbnRzPXtNZHhDb21wb25lbnRzfSAvPlxuICAgICAgICAgIDxoMj5MaWNlbnNlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBkaXZpZGUteSBkaXZpZGUtbGlnaHQtYmx1ZS00MDAgYm9yZGVyLXNvbGlkIGJvcmRlci1saWdodC1ibHVlLTQwMCBib3JkZXItMlwiPlxuICAgICAgICAgICAge2xpY2Vuc2VzLm1hcCgobGljZW5zZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxBY2NvcmRpb24ga2V5PXtpZHh9IHRpdGxlPXtsaWNlbnNlWzBdfSBjb250ZW50PXtsaWNlbnNlWzFdfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlicmFyaWVzRmlsZVBhdGggPSBwYXRoLmpvaW4oU3RhdGljcy5wYXRoLmRvY3VtZW50cywgJ2xpYnJhcmllcy5tZHgnKTtcbiAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGxpYnJhcmllc0ZpbGVQYXRoKTtcblxuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuXG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHNlcmlhbGl6ZShjb250ZW50LCB7XG4gICAgbWR4T3B0aW9uczoge1xuICAgICAgcmVtYXJrUGx1Z2luczogW3JlcXVpcmUoJ3JlbWFyay1jb2RlLXRpdGxlcycpXSxcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFttZHhQcmlzbSwgcmVoeXBlU2x1ZywgcmVoeXBlQXV0b2xpbmtIZWFkaW5nc10sXG4gICAgfSxcbiAgICBzY29wZTogZGF0YSxcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cobWR4U291cmNlKTtcbiAgY29uc3QgbGljZW5zZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhTdGF0aWNzLnBhdGgubGljZW5zZXMpXG4gICAgLmZpbHRlcigoc2x1ZykgPT4gL1xcLm1keD8kLy50ZXN0KHNsdWcpKVxuICAgIC5tYXAoKHNsdWcpID0+IHtcbiAgICAgIGNvbnN0IGxpY2Vuc2VfcGF0aCA9IHBhdGguam9pbihcbiAgICAgICAgU3RhdGljcy5wYXRoLmRvY3VtZW50cyxcbiAgICAgICAgYGxpY2Vuc2VzLyR7c2x1Z31gXG4gICAgICApO1xuICAgICAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGxpY2Vuc2VfcGF0aCk7XG5cbiAgICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG4gICAgICByZXR1cm4gW2RhdGEudGl0bGUucmVwbGFjZSgvIC9nLCAnLCAnKSwgY29udGVudF07XG4gICAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc291cmNlOiBtZHhTb3VyY2UsXG4gICAgICBmcm9udE1hdHRlcjogZGF0YSxcbiAgICAgIGxpY2Vuc2VzOiBsaWNlbnNlcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlicmFyaWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/libraries.tsx\n");

/***/ })

});