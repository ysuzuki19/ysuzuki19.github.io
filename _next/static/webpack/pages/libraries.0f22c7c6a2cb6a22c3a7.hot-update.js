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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var _home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-mdx-remote */ \"./node_modules/next-mdx-remote/index.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _mdx_components_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mdx-components.config */ \"./mdx-components.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/libraries.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar duration = 'duration-500';\nvar transformer = [\"transform \".concat(duration, \" ease\"), \"transform \".concat(duration, \" ease rotate-180\")];\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(transformer[0]),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(!active);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? transformer[1] : transformer[0]);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col border-solid border-gray-900 border-2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      className: \"box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6 \".concat(rotate, \" inline-block\"),\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto overflow-y-hidden transition-max-height \".concat(duration, \" ease-in-out\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"lZkRl0SD+gRxdxNpgDh5Zc3SdOs=\");\n\n_c = Accordion;\n\nvar Libraries = function Libraries(_ref2) {\n  var source = _ref2.source,\n      licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"prose dark:prose-dark\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {\n          components: _mdx_components_config__WEBPACK_IMPORTED_MODULE_5__.default\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: licenses.map(function (license, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Accordion, {\n            title: license[0],\n            content: license[1]\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Libraries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Libraries);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Libraries\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlicmFyaWVzLnRzeD9jZWRhIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwidHJhbnNmb3JtZXIiLCJBY2NvcmRpb24iLCJ0aXRsZSIsImNvbnRlbnQiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhlaWdodCIsInNldEhlaWdodCIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImNvbnRlbnRTcGFjZSIsInVzZVJlZiIsInRvZ2dsZUFjY29yZGlvbiIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJtYXhIZWlnaHQiLCJMaWJyYXJpZXMiLCJzb3VyY2UiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwiTWR4Q29tcG9uZW50cyIsIm1hcCIsImxpY2Vuc2UiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFJQTtBQUVBO0FBQ0E7QUFPQSxJQUFNQSxRQUFRLEdBQUcsY0FBakI7QUFFQSxJQUFNQyxXQUFXLEdBQUcscUJBQ0xELFFBREssZ0NBRUxBLFFBRkssc0JBQXBCOztBQUtPLElBQU1FLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDN0NDLCtDQUFRLENBQUMsS0FBRCxDQURxQztBQUFBLE1BQ2xFQyxNQURrRTtBQUFBLE1BQzFEQyxTQUQwRDs7QUFBQSxtQkFFN0NGLCtDQUFRLENBQUMsS0FBRCxDQUZxQztBQUFBLE1BRWxFRyxNQUZrRTtBQUFBLE1BRTFEQyxTQUYwRDs7QUFBQSxtQkFHN0NKLCtDQUFRLENBQUNKLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FIcUM7QUFBQSxNQUdsRVMsTUFIa0U7QUFBQSxNQUcxREMsU0FIMEQ7O0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgbWR4UHJpc20gZnJvbSAnbWR4LXByaXNtJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZS9zZXJpYWxpemUnO1xuaW1wb3J0IHsgTURYUmVtb3RlLCBNRFhSZW1vdGVTZXJpYWxpemVSZXN1bHQgfSBmcm9tICduZXh0LW1keC1yZW1vdGUnO1xuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJztcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBNZXRhUHJvcHMgfSBmcm9tICcuLi90eXBlcy9sYXlvdXQnO1xuaW1wb3J0IFN0YXRpY3MgZnJvbSAnLi4vbmV4dC1zdGF0aWNzLmNvbmZpZyc7XG5pbXBvcnQgTWR4Q29tcG9uZW50cyBmcm9tICcuLi9tZHgtY29tcG9uZW50cy5jb25maWcnO1xuXG5pbnRlcmZhY2UgQWNjb3JkaW9uUHJvcHMge1xuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlO1xuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IGR1cmF0aW9uID0gJ2R1cmF0aW9uLTUwMCc7XG5cbmNvbnN0IHRyYW5zZm9ybWVyID0gW1xuICBgdHJhbnNmb3JtICR7ZHVyYXRpb259IGVhc2VgLFxuICBgdHJhbnNmb3JtICR7ZHVyYXRpb259IGVhc2Ugcm90YXRlLTE4MGAsXG5dO1xuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uOiBSZWFjdC5GQzxBY2NvcmRpb25Qcm9wcz4gPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgnMHB4Jyk7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSh0cmFuc2Zvcm1lclswXSk7XG5cbiAgY29uc3QgY29udGVudFNwYWNlID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgc2V0SGVpZ2h0KGFjdGl2ZSA/ICcwcHgnIDogYCR7Y29udGVudFNwYWNlLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gICAgc2V0Um90YXRlKGFjdGl2ZSA/IHRyYW5zZm9ybWVyWzFdIDogdHJhbnNmb3JtZXJbMF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTkwMCBib3JkZXItMlwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJib3gtYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufVxuICAgICAgPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1mb290bm90ZSBsaWdodFwiPnt0aXRsZX08L3A+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02ICR7cm90YXRlfSBpbmxpbmUtYmxvY2tgfVxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBkPVwiTTE5IDlsLTcgNy03LTdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGVudFNwYWNlfVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGAke2hlaWdodH1gIH19XG4gICAgICAgIGNsYXNzTmFtZT17YG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteS1oaWRkZW4gdHJhbnNpdGlvbi1tYXgtaGVpZ2h0ICR7ZHVyYXRpb259IGVhc2UtaW4tb3V0YH1cbiAgICAgID5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9XCJwYi0xMFwiPntjb250ZW50fTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIExpYnJhcmllc1Byb3BzID0ge1xuICBzb3VyY2U6IE1EWFJlbW90ZVNlcmlhbGl6ZVJlc3VsdDtcbiAgbGljZW5zZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuY29uc3QgTGlicmFyaWVzID0gKHsgc291cmNlLCBsaWNlbnNlcyB9OiBMaWJyYXJpZXNQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgY3VzdG9tTWV0YTogTWV0YVByb3BzID0ge1xuICAgIHRpdGxlOiBgTGlicmFyaWVzIC0gJHtTdGF0aWNzLnRpdGxlfWAsXG4gICAgZGVzY3JpcHRpb246IGBgLFxuICAgIGltYWdlOiBgYCxcbiAgICBkYXRlOiBgYCxcbiAgICB0eXBlOiAnYXJ0aWNsZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGN1c3RvbU1ldGE9e2N1c3RvbU1ldGF9PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2UgZGFyazpwcm9zZS1kYXJrXCI+XG4gICAgICAgICAgPE1EWFJlbW90ZSB7Li4uc291cmNlfSBjb21wb25lbnRzPXtNZHhDb21wb25lbnRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bGljZW5zZXMubWFwKChsaWNlbnNlLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb24ga2V5PXtpZHh9IHRpdGxlPXtsaWNlbnNlWzBdfSBjb250ZW50PXtsaWNlbnNlWzFdfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpYnJhcmllc0ZpbGVQYXRoID0gcGF0aC5qb2luKFN0YXRpY3MucGF0aC5kb2N1bWVudHMsICdsaWJyYXJpZXMubWR4Jyk7XG4gIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhsaWJyYXJpZXNGaWxlUGF0aCk7XG5cbiAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKTtcblxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge1xuICAgIG1keE9wdGlvbnM6IHtcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZXF1aXJlKCdyZW1hcmstY29kZS10aXRsZXMnKV0sXG4gICAgICByZWh5cGVQbHVnaW5zOiBbbWR4UHJpc20sIHJlaHlwZVNsdWcsIHJlaHlwZUF1dG9saW5rSGVhZGluZ3NdLFxuICAgIH0sXG4gICAgc2NvcGU6IGRhdGEsXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKG1keFNvdXJjZSk7XG4gIGNvbnN0IGxpY2Vuc2VzID0gZnNcbiAgICAucmVhZGRpclN5bmMoU3RhdGljcy5wYXRoLmxpY2Vuc2VzKVxuICAgIC5maWx0ZXIoKHNsdWcpID0+IC9cXC5tZHg/JC8udGVzdChzbHVnKSlcbiAgICAubWFwKChzbHVnKSA9PiB7XG4gICAgICBjb25zdCBsaWNlbnNlX3BhdGggPSBwYXRoLmpvaW4oXG4gICAgICAgIFN0YXRpY3MucGF0aC5kb2N1bWVudHMsXG4gICAgICAgIGBsaWNlbnNlcy8ke3NsdWd9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhsaWNlbnNlX3BhdGgpO1xuXG4gICAgICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuICAgICAgcmV0dXJuIFtkYXRhLnRpdGxlLnJlcGxhY2UoLyAvZywgJywgJyksIGNvbnRlbnRdO1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNvdXJjZTogbWR4U291cmNlLFxuICAgICAgZnJvbnRNYXR0ZXI6IGRhdGEsXG4gICAgICBsaWNlbnNlczogbGljZW5zZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpYnJhcmllcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/libraries.tsx\n");

/***/ })

});