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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _components_atoms_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms/Divider */ \"./components/atoms/Divider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = useState(false),\n      _useState2 = (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      active = _useState2[0],\n      setActive = _useState2[1];\n\n  var _useState3 = useState('0px'),\n      _useState4 = (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),\n      height = _useState4[0],\n      setHeight = _useState4[1];\n\n  var _useState5 = useState('transform duration-700 ease'),\n      _useState6 = (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState5, 2),\n      rotate = _useState6[0],\n      setRotate = _useState6[1];\n\n  var contentSpace = useRef(null);\n\n  function toggleAccordion() {\n    setActive(active === false ? true : false); // @ts-ignore\n\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"\".concat(appConfig.publicUrl, \"/img/icons/chevron-up.svg\"),\n        alt: \"Chevron icon\",\n        className: \"\".concat(rotate, \" inline-block\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto transition-max-height duration-700 ease-in-out\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"f7qiGf4LfIf4t470I5pcT5BjjhU=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_4__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prose dark:prose-dark\",\n            children: license[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prose dark:prose-dark\",\n            children: license[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Divider__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwidGl0bGUiLCJjb250ZW50IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjb250ZW50U3BhY2UiLCJ1c2VSZWYiLCJ0b2dnbGVBY2NvcmRpb24iLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiYXBwQ29uZmlnIiwicHVibGljVXJsIiwibWF4SGVpZ2h0IiwiTGljZW5zZXMiLCJsaWNlbnNlcyIsImN1c3RvbU1ldGEiLCJTdGF0aWNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImRhdGUiLCJ0eXBlIiwibWFwIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFFQTtBQUNBOztBQU9PLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDN0NDLFFBQVEsQ0FBQyxLQUFELENBRHFDO0FBQUE7QUFBQSxNQUNsRUMsTUFEa0U7QUFBQSxNQUMxREMsU0FEMEQ7O0FBQUEsbUJBRTdDRixRQUFRLENBQUMsS0FBRCxDQUZxQztBQUFBO0FBQUEsTUFFbEVHLE1BRmtFO0FBQUEsTUFFMURDLFNBRjBEOztBQUFBLG1CQUc3Q0osUUFBUSxDQUFDLDZCQUFELENBSHFDO0FBQUE7QUFBQSxNQUdsRUssTUFIa0U7QUFBQSxNQUcxREMsU0FIMEQ7O0FBS3pFLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDLElBQUQsQ0FBM0I7O0FBRUEsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QlAsYUFBUyxDQUFDRCxNQUFNLEtBQUssS0FBWCxHQUFtQixJQUFuQixHQUEwQixLQUEzQixDQUFULENBRHlCLENBRXpCOztBQUNBRyxhQUFTLENBQUNILE1BQU0sR0FBRyxLQUFILGFBQWNNLFlBQVksQ0FBQ0csT0FBYixDQUFxQkMsWUFBbkMsT0FBUCxDQUFUO0FBQ0FMLGFBQVMsQ0FDUEwsTUFBTSxHQUNGLDZCQURFLEdBRUYsd0NBSEcsQ0FBVDtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQyxxR0FEWjtBQUVFLGFBQU8sRUFBRVEsZUFGWDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxrQ0FBYjtBQUFBLGtCQUFpRFg7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFDRSxXQUFHLFlBQUtjLFNBQVMsQ0FBQ0MsU0FBZiw4QkFETDtBQUVFLFdBQUcsRUFBQyxjQUZOO0FBR0UsaUJBQVMsWUFBS1IsTUFBTDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVlFO0FBQ0UsU0FBRyxFQUFFRSxZQURQO0FBRUUsV0FBSyxFQUFFO0FBQUVPLGlCQUFTLFlBQUtYLE1BQUw7QUFBWCxPQUZUO0FBR0UsZUFBUyxFQUFDLDhEQUhaO0FBQUEsNkJBS0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFBd0JKO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F4Q007O0dBQU1GLFM7O0tBQUFBLFM7O0FBOENiLElBQU1rQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUE4QztBQUFBLE1BQTNDQyxRQUEyQyxTQUEzQ0EsUUFBMkM7QUFDN0QsTUFBTUMsVUFBcUIsR0FBRztBQUM1Qm5CLFNBQUssd0JBQWlCb0IsK0RBQWpCLENBRHVCO0FBRTVCQyxlQUFXLElBRmlCO0FBRzVCQyxTQUFLLElBSHVCO0FBSTVCQyxRQUFJLElBSndCO0FBSzVCQyxRQUFJLEVBQUU7QUFMc0IsR0FBOUI7QUFRQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRUwsVUFBcEI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHRCxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDekIsNEJBQ0U7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxzQkFBd0NBLE9BQU8sQ0FBQyxDQUFEO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxzQkFBd0NBLE9BQU8sQ0FBQyxDQUFEO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUEsd0JBREY7QUFPRCxPQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBeEJEOztNQUFNVCxRO0FBK0NOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGljZW5zZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBNZXRhUHJvcHMgfSBmcm9tICcuLi90eXBlcy9sYXlvdXQnO1xuaW1wb3J0IFN0YXRpY3MgZnJvbSAnLi4vbmV4dC1zdGF0aWNzLmNvbmZpZyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9jb21wb25lbnRzL2F0b21zL0RpdmlkZXInO1xuXG5pbnRlcmZhY2UgQWNjb3JkaW9uUHJvcHMge1xuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlO1xuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb246IFJlYWN0LkZDPEFjY29yZGlvblByb3BzPiA9ICh7IHRpdGxlLCBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCcwcHgnKTtcbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKCd0cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2UnKTtcblxuICBjb25zdCBjb250ZW50U3BhY2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgIHNldEFjdGl2ZShhY3RpdmUgPT09IGZhbHNlID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc2V0SGVpZ2h0KGFjdGl2ZSA/ICcwcHgnIDogYCR7Y29udGVudFNwYWNlLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gICAgc2V0Um90YXRlKFxuICAgICAgYWN0aXZlXG4gICAgICAgID8gJ3RyYW5zZm9ybSBkdXJhdGlvbi03MDAgZWFzZSdcbiAgICAgICAgOiAndHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlIHJvdGF0ZS0xODAnXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInB5LTYgYm94LWJvcmRlciBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtZm9vdG5vdGUgbGlnaHRcIj57dGl0bGV9PC9wPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgJHthcHBDb25maWcucHVibGljVXJsfS9pbWcvaWNvbnMvY2hldnJvbi11cC5zdmdgfVxuICAgICAgICAgIGFsdD1cIkNoZXZyb24gaWNvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtyb3RhdGV9IGlubGluZS1ibG9ja2B9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250ZW50U3BhY2V9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7aGVpZ2h0fWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byB0cmFuc2l0aW9uLW1heC1oZWlnaHQgZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMFwiPntjb250ZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIExpY2Vuc2VzUHJvcHMgPSB7XG4gIGxpY2Vuc2VzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmNvbnN0IExpY2Vuc2VzID0gKHsgbGljZW5zZXMgfTogTGljZW5zZXNQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgY3VzdG9tTWV0YTogTWV0YVByb3BzID0ge1xuICAgIHRpdGxlOiBgTGlicmFyaWVzIC0gJHtTdGF0aWNzLnRpdGxlfWAsXG4gICAgZGVzY3JpcHRpb246IGBgLFxuICAgIGltYWdlOiBgYCxcbiAgICBkYXRlOiBgYCxcbiAgICB0eXBlOiAnYXJ0aWNsZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGN1c3RvbU1ldGE9e2N1c3RvbU1ldGF9PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIHtsaWNlbnNlcy5tYXAoKGxpY2Vuc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBkYXJrOnByb3NlLWRhcmtcIj57bGljZW5zZVswXX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBkYXJrOnByb3NlLWRhcmtcIj57bGljZW5zZVsxXX08L2Rpdj5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGljZW5zZV9zbHVncyA9IGZzXG4gICAgLnJlYWRkaXJTeW5jKFN0YXRpY3MucGF0aC5saWNlbnNlcylcbiAgICAuZmlsdGVyKChwYXRoKSA9PiAvXFwubWR4PyQvLnRlc3QocGF0aCkpO1xuXG4gIGNvbnN0IGxpY2Vuc2VzID0gbGljZW5zZV9zbHVncy5tYXAoKHNsdWcpID0+IHtcbiAgICBjb25zdCBsaWNlbnNlX3BhdGggPSBwYXRoLmpvaW4oU3RhdGljcy5wYXRoLmRvY3VtZW50cywgYGxpY2Vuc2VzLyR7c2x1Z31gKTtcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMobGljZW5zZV9wYXRoKTtcblxuICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG4gICAgcmV0dXJuIFtkYXRhLnRpdGxlLnJlcGxhY2UoLyAvZywgJywnKSwgY29udGVudF07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhsaWNlbnNlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGljZW5zZXM6IGxpY2Vuc2VzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWNlbnNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});