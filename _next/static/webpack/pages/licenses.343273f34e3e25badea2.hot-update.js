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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"Accordion\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Divider */ \"./components/atoms/Divider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/licenses.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar duration = 'duration-500';\nvar transformer = [\"transform \".concat(duration, \" ease\"), \"transform \".concat(duration, \" ease rotate-180\")];\nvar __N_SSG = true;\nvar Accordion = function Accordion(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0px'),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(transformer[0]),\n      rotate = _useState3[0],\n      setRotate = _useState3[1];\n\n  var contentSpace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function toggleAccordion() {\n    setActive(!active);\n    setHeight(active ? '0px' : \"\".concat(contentSpace.current.scrollHeight, \"px\"));\n    setRotate(active ? transformer[1] : transformer[0]);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col border-solid border-gray-900 border-2 mb-0 pb-0\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between\",\n      onClick: toggleAccordion,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"inline-block text-footnote light\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6 \".concat(rotate, \" inline-block\"),\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M19 9l-7 7-7-7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: contentSpace,\n      style: {\n        maxHeight: \"\".concat(height)\n      },\n      className: \"overflow-auto overflow-y-hidden transition-max-height \".concat(duration, \" ease-in-out\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Divider__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        className: \"pb-10\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Accordion, \"lZkRl0SD+gRxdxNpgDh5Zc3SdOs=\");\n\n_c = Accordion;\n\nvar Licenses = function Licenses(_ref2) {\n  var licenses = _ref2.licenses;\n  var customMeta = {\n    title: \"Libraries - \".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_3__.default.title),\n    description: \"\",\n    image: \"\",\n    date: \"\",\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    customMeta: customMeta,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: licenses.map(function (license, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {\n          title: license[0],\n          content: license[1]\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Licenses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Licenses);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"Licenses\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGljZW5zZXMudHN4P2Y2MDYiXSwibmFtZXMiOlsiZHVyYXRpb24iLCJ0cmFuc2Zvcm1lciIsIkFjY29yZGlvbiIsInRpdGxlIiwiY29udGVudCIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwicm90YXRlIiwic2V0Um90YXRlIiwiY29udGVudFNwYWNlIiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsIm1heEhlaWdodCIsIkxpY2Vuc2VzIiwibGljZW5zZXMiLCJjdXN0b21NZXRhIiwiU3RhdGljcyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJkYXRlIiwidHlwZSIsIm1hcCIsImxpY2Vuc2UiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQU9BLElBQU1BLFFBQVEsR0FBRyxjQUFqQjtBQUVBLElBQU1DLFdBQVcsR0FBRyxxQkFDTEQsUUFESyxnQ0FFTEEsUUFGSyxzQkFBcEI7O0FBS08sSUFBTUUsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUM3Q0MsK0NBQVEsQ0FBQyxLQUFELENBRHFDO0FBQUEsTUFDbEVDLE1BRGtFO0FBQUEsTUFDMURDLFNBRDBEOztBQUFBLG1CQUU3Q0YsK0NBQVEsQ0FBQyxLQUFELENBRnFDO0FBQUEsTUFFbEVHLE1BRmtFO0FBQUEsTUFFMURDLFNBRjBEOztBQUFBLG1CQUc3Q0osK0NBQVEsQ0FBQ0osV0FBVyxDQUFDLENBQUQsQ0FBWixDQUhxQztBQUFBLE1BR2xFUyxNQUhrRTtBQUFBLE1BRzFEQyxTQUgwRDs7QUFLekUsTUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBM0I7O0FBRUEsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QlAsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBRyxhQUFTLENBQUNILE1BQU0sR0FBRyxLQUFILGFBQWNNLFlBQVksQ0FBQ0csT0FBYixDQUFxQkMsWUFBbkMsT0FBUCxDQUFUO0FBQ0FMLGFBQVMsQ0FBQ0wsTUFBTSxHQUFHTCxXQUFXLENBQUMsQ0FBRCxDQUFkLEdBQW9CQSxXQUFXLENBQUMsQ0FBRCxDQUF0QyxDQUFUO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsK0RBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQyxnR0FEWjtBQUVFLGFBQU8sRUFBRWEsZUFGWDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxrQ0FBYjtBQUFBLGtCQUFpRFg7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFDRSxhQUFLLEVBQUMsNEJBRFI7QUFFRSxpQkFBUyxvQkFBYU8sTUFBYixrQkFGWDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsZUFBTyxFQUFDLFdBSlY7QUFLRSxjQUFNLEVBQUMsY0FMVDtBQUFBLCtCQU9FO0FBQ0UsdUJBQWEsRUFBQyxPQURoQjtBQUVFLHdCQUFjLEVBQUMsT0FGakI7QUFHRSxxQkFBVyxFQUFDLEdBSGQ7QUFJRSxXQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBcUJFO0FBQ0UsU0FBRyxFQUFFRSxZQURQO0FBRUUsV0FBSyxFQUFFO0FBQUVLLGlCQUFTLFlBQUtULE1BQUw7QUFBWCxPQUZUO0FBR0UsZUFBUyxrRUFBMkRSLFFBQTNELGlCQUhYO0FBQUEsOEJBS0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFBd0JJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0E3Q007O0dBQU1GLFM7O0tBQUFBLFM7O0FBbURiLElBQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUE4QztBQUFBLE1BQTNDQyxRQUEyQyxTQUEzQ0EsUUFBMkM7QUFDN0QsTUFBTUMsVUFBcUIsR0FBRztBQUM1QmpCLFNBQUssd0JBQWlCa0IsK0RBQWpCLENBRHVCO0FBRTVCQyxlQUFXLElBRmlCO0FBRzVCQyxTQUFLLElBSHVCO0FBSTVCQyxRQUFJLElBSndCO0FBSzVCQyxRQUFJLEVBQUU7QUFMc0IsR0FBOUI7QUFRQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRUwsVUFBcEI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHRCxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEdBQVY7QUFBQSw0QkFDWiw4REFBQyxTQUFEO0FBQXFCLGVBQUssRUFBRUQsT0FBTyxDQUFDLENBQUQsQ0FBbkM7QUFBd0MsaUJBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQ7QUFBeEQsV0FBZ0JDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBbEJEOztNQUFNVixRO0FBMENOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGljZW5zZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTWV0YVByb3BzIH0gZnJvbSAnLi4vdHlwZXMvbGF5b3V0JztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9EaXZpZGVyJztcblxuaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBkdXJhdGlvbiA9ICdkdXJhdGlvbi01MDAnO1xuXG5jb25zdCB0cmFuc2Zvcm1lciA9IFtcbiAgYHRyYW5zZm9ybSAke2R1cmF0aW9ufSBlYXNlYCxcbiAgYHRyYW5zZm9ybSAke2R1cmF0aW9ufSBlYXNlIHJvdGF0ZS0xODBgLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8QWNjb3JkaW9uUHJvcHM+ID0gKHsgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoJzBweCcpO1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUodHJhbnNmb3JtZXJbMF0pO1xuXG4gIGNvbnN0IGNvbnRlbnRTcGFjZSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgIHNldEhlaWdodChhY3RpdmUgPyAnMHB4JyA6IGAke2NvbnRlbnRTcGFjZS5jdXJyZW50LnNjcm9sbEhlaWdodH1weGApO1xuICAgIHNldFJvdGF0ZShhY3RpdmUgPyB0cmFuc2Zvcm1lclsxXSA6IHRyYW5zZm9ybWVyWzBdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS05MDAgYm9yZGVyLTIgbWItMCBwYi0wXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJveC1ib3JkZXIgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259XG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWZvb3Rub3RlIGxpZ2h0XCI+e3RpdGxlfTwvcD5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgJHtyb3RhdGV9IGlubGluZS1ibG9ja2B9XG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIGQ9XCJNMTkgOWwtNyA3LTctN1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250ZW50U3BhY2V9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7aGVpZ2h0fWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy15LWhpZGRlbiB0cmFuc2l0aW9uLW1heC1oZWlnaHQgJHtkdXJhdGlvbn0gZWFzZS1pbi1vdXRgfVxuICAgICAgPlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInBiLTEwXCI+e2NvbnRlbnR9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTGljZW5zZXNQcm9wcyA9IHtcbiAgbGljZW5zZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuY29uc3QgTGljZW5zZXMgPSAoeyBsaWNlbnNlcyB9OiBMaWNlbnNlc1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBjdXN0b21NZXRhOiBNZXRhUHJvcHMgPSB7XG4gICAgdGl0bGU6IGBMaWJyYXJpZXMgLSAke1N0YXRpY3MudGl0bGV9YCxcbiAgICBkZXNjcmlwdGlvbjogYGAsXG4gICAgaW1hZ2U6IGBgLFxuICAgIGRhdGU6IGBgLFxuICAgIHR5cGU6ICdhcnRpY2xlJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY3VzdG9tTWV0YT17Y3VzdG9tTWV0YX0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAge2xpY2Vuc2VzLm1hcCgobGljZW5zZSwgaWR4KSA9PiAoXG4gICAgICAgICAgPEFjY29yZGlvbiBrZXk9e2lkeH0gdGl0bGU9e2xpY2Vuc2VbMF19IGNvbnRlbnQ9e2xpY2Vuc2VbMV19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGljZW5zZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhTdGF0aWNzLnBhdGgubGljZW5zZXMpXG4gICAgLmZpbHRlcigoc2x1ZykgPT4gL1xcLm1keD8kLy50ZXN0KHNsdWcpKVxuICAgIC5tYXAoKHNsdWcpID0+IHtcbiAgICAgIGNvbnN0IGxpY2Vuc2VfcGF0aCA9IHBhdGguam9pbihcbiAgICAgICAgU3RhdGljcy5wYXRoLmRvY3VtZW50cyxcbiAgICAgICAgYGxpY2Vuc2VzLyR7c2x1Z31gXG4gICAgICApO1xuICAgICAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGxpY2Vuc2VfcGF0aCk7XG5cbiAgICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG4gICAgICByZXR1cm4gW2RhdGEudGl0bGUucmVwbGFjZSgvIC9nLCAnLCAnKSwgY29udGVudF07XG4gICAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGljZW5zZXM6IGxpY2Vuc2VzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWNlbnNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/licenses.tsx\n");

/***/ })

});