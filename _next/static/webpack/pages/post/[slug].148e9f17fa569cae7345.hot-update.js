/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-mdx-remote */ \"./node_modules/next-mdx-remote/index.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_molecules_TableOfContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/molecules/TableOfContents */ \"./components/molecules/TableOfContents.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../next-statics.config */ \"./next-statics.config.tsx\");\n/* harmony import */ var _mdx_components_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mdx-components.config */ \"./mdx-components.config.tsx\");\n/* harmony import */ var _components_atoms_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/atoms/Chip */ \"./components/atoms/Chip.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/pages/post/[slug].tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar PostPage = function PostPage(_ref) {\n  var toc = _ref.toc,\n      source = _ref.source,\n      frontMatter = _ref.frontMatter;\n  var customMeta = {\n    title: \"\".concat(frontMatter.title, \" - \").concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_5__.default.title),\n    description: frontMatter.description,\n    image: \"\".concat(_next_statics_config__WEBPACK_IMPORTED_MODULE_5__.default.url).concat(frontMatter.image),\n    date: frontMatter.date,\n    type: 'article'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    customMeta: customMeta,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      className: \"mb-3 text-gray-900 dark:text-white\",\n      children: frontMatter.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mt-6 mb-4\",\n      children: frontMatter.tags.map(function (tag) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_atoms_Chip__WEBPACK_IMPORTED_MODULE_7__.default, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: \"/tag/\".concat(tag),\n            children: tag\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this)\n        }, tag, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"md:grid md:grid-cols-3 divide-x border-none\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"prose dark:prose-dark col-span-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"mb-10 text-sm text-gray-500 dark:text-gray-400\",\n          children: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.parseISO)(frontMatter.date), 'MMMM dd, yyyy')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_9__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {\n          components: _mdx_components_config__WEBPACK_IMPORTED_MODULE_6__.default\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"mt-10 mb-3 text-gray-900 dark:text-white\",\n          children: \"\\u95A2\\u9023\\u30BF\\u30B0\\u3092\\u63A2\\u3059\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"mt-6 mb-4\",\n          children: frontMatter.tags.map(function (tag) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_atoms_Chip__WEBPACK_IMPORTED_MODULE_7__.default, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"/tag/\".concat(tag),\n                children: tag\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, _this)\n            }, tag, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"invisible md:visible md:h-screen md:sticky md:top-20 md:ml-auto md:mr-auto md:p-3 dark:text-white border-none max-h-screen\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"py-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_molecules_TableOfContents__WEBPACK_IMPORTED_MODULE_4__.default, {\n          toc: toc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PostPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzNmOWYiXSwibmFtZXMiOlsiUG9zdFBhZ2UiLCJ0b2MiLCJzb3VyY2UiLCJmcm9udE1hdHRlciIsImN1c3RvbU1ldGEiLCJ0aXRsZSIsIlN0YXRpY3MiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZGF0ZSIsInR5cGUiLCJ0YWdzIiwibWFwIiwidGFnIiwiZm9ybWF0IiwicGFyc2VJU08iLCJNZHhDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFRQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFrQztBQUFBLE1BQS9CQyxHQUErQixRQUEvQkEsR0FBK0I7QUFBQSxNQUExQkMsTUFBMEIsUUFBMUJBLE1BQTBCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUMxRSxNQUFNQyxVQUFxQixHQUFHO0FBQzVCQyxTQUFLLFlBQUtGLFdBQVcsQ0FBQ0UsS0FBakIsZ0JBQTRCQywrREFBNUIsQ0FEdUI7QUFFNUJDLGVBQVcsRUFBRUosV0FBVyxDQUFDSSxXQUZHO0FBRzVCQyxTQUFLLFlBQUtGLDZEQUFMLFNBQW1CSCxXQUFXLENBQUNLLEtBQS9CLENBSHVCO0FBSTVCQyxRQUFJLEVBQUVOLFdBQVcsQ0FBQ00sSUFKVTtBQUs1QkMsUUFBSSxFQUFFO0FBTHNCLEdBQTlCO0FBUUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVOLFVBQXBCO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsb0NBQWQ7QUFBQSxnQkFDR0QsV0FBVyxDQUFDRTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFDR0YsV0FBVyxDQUFDUSxJQUFaLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQVM7QUFDN0IsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLGlCQUFVQSxHQUFWLENBQVA7QUFBQSxzQkFBeUJBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxPQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBYUU7QUFBSyxlQUFTLEVBQUMsNkNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsa0NBQW5CO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLGdEQUFiO0FBQUEsb0JBQ0dDLGdEQUFNLENBQUNDLGtEQUFRLENBQUNaLFdBQVcsQ0FBQ00sSUFBYixDQUFULEVBQTZCLGVBQTdCO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHNEQUFELGtDQUFlUCxNQUFmO0FBQXVCLG9CQUFVLEVBQUVjLDJEQUFhQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBSSxtQkFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBU0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFDR2IsV0FBVyxDQUFDUSxJQUFaLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQVM7QUFDN0IsZ0NBQ0UsOERBQUMsMkRBQUQ7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLGlCQUFVQSxHQUFWLENBQVA7QUFBQSwwQkFBeUJBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQW9CRTtBQUFLLGlCQUFTLEVBQUMsNEhBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMEVBQUQ7QUFBaUIsYUFBRyxFQUFFWjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQWxERDs7S0FBTUQsUTs7QUFnR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgbWR4UHJpc20gZnJvbSAnbWR4LXByaXNtJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZS9zZXJpYWxpemUnO1xuaW1wb3J0IHsgTURYUmVtb3RlLCBNRFhSZW1vdGVTZXJpYWxpemVSZXN1bHQgfSBmcm9tICduZXh0LW1keC1yZW1vdGUnO1xuaW1wb3J0IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgZnJvbSAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJztcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcbmltcG9ydCByZW1hcmtDb2RlVGl0bGVzIGZyb20gJ3JlbWFyay1jb2RlLXRpdGxlcyc7XG5pbXBvcnQgbWFya2Rvd25Ub2MgZnJvbSAnbWFya2Rvd24tdG9jJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgVGFibGVPZkNvbnRlbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1RhYmxlT2ZDb250ZW50cyc7XG5pbXBvcnQgeyBwb3N0RmlsZVBhdGhzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWR4VXRpbHMnO1xuaW1wb3J0IFN0YXRpY3MgZnJvbSAnLi4vLi4vbmV4dC1zdGF0aWNzLmNvbmZpZyc7XG5pbXBvcnQgTWR4Q29tcG9uZW50cyBmcm9tICcuLi8uLi9tZHgtY29tcG9uZW50cy5jb25maWcnO1xuaW1wb3J0IHsgVG9jVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RvYyc7XG5pbXBvcnQgeyBNZXRhUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcy9sYXlvdXQnO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9wb3N0JztcbmltcG9ydCBDaGlwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvQ2hpcCc7XG5cbnR5cGUgUG9zdFBhZ2VQcm9wcyA9IHtcbiAgdG9jOiBBcnJheTxUb2NUeXBlPjtcbiAgc291cmNlOiBNRFhSZW1vdGVTZXJpYWxpemVSZXN1bHQ7XG4gIGZyb250TWF0dGVyOiBQb3N0VHlwZTtcbn07XG5cbmNvbnN0IFBvc3RQYWdlOiBSZWFjdC5GQzxQb3N0UGFnZVByb3BzPiA9ICh7IHRvYywgc291cmNlLCBmcm9udE1hdHRlciB9KSA9PiB7XG4gIGNvbnN0IGN1c3RvbU1ldGE6IE1ldGFQcm9wcyA9IHtcbiAgICB0aXRsZTogYCR7ZnJvbnRNYXR0ZXIudGl0bGV9IC0gJHtTdGF0aWNzLnRpdGxlfWAsXG4gICAgZGVzY3JpcHRpb246IGZyb250TWF0dGVyLmRlc2NyaXB0aW9uLFxuICAgIGltYWdlOiBgJHtTdGF0aWNzLnVybH0ke2Zyb250TWF0dGVyLmltYWdlfWAsXG4gICAgZGF0ZTogZnJvbnRNYXR0ZXIuZGF0ZSxcbiAgICB0eXBlOiAnYXJ0aWNsZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGN1c3RvbU1ldGE9e2N1c3RvbU1ldGF9PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAge2Zyb250TWF0dGVyLnRpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBtYi00XCI+XG4gICAgICAgIHtmcm9udE1hdHRlci50YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDaGlwIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YC90YWcvJHt0YWd9YH0+e3RhZ308L2E+XG4gICAgICAgICAgICA8L0NoaXA+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMyBkaXZpZGUteCBib3JkZXItbm9uZVwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9zZSBkYXJrOnByb3NlLWRhcmsgY29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHtmb3JtYXQocGFyc2VJU08oZnJvbnRNYXR0ZXIuZGF0ZSksICdNTU1NIGRkLCB5eXl5Jyl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxNRFhSZW1vdGUgey4uLnNvdXJjZX0gY29tcG9uZW50cz17TWR4Q29tcG9uZW50c30gLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtMTAgbWItMyB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAg6Zai6YCj44K/44Kw44KS5o6i44GZXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBtYi00XCI+XG4gICAgICAgICAgICB7ZnJvbnRNYXR0ZXIudGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDaGlwIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdGFnLyR7dGFnfWB9Pnt0YWd9PC9hPlxuICAgICAgICAgICAgICAgIDwvQ2hpcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXNpYmxlIG1kOnZpc2libGUgbWQ6aC1zY3JlZW4gbWQ6c3RpY2t5IG1kOnRvcC0yMCBtZDptbC1hdXRvIG1kOm1yLWF1dG8gbWQ6cC0zIGRhcms6dGV4dC13aGl0ZSBib3JkZXItbm9uZSBtYXgtaC1zY3JlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj48L2Rpdj5cbiAgICAgICAgICA8VGFibGVPZkNvbnRlbnRzIHRvYz17dG9jfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3RGaWxlUGF0aCA9IHBhdGguam9pbihTdGF0aWNzLnBhdGgucG9zdHMsIGAke3BhcmFtcy5zbHVnfS5tZHhgKTtcbiAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKHBvc3RGaWxlUGF0aCk7XG5cbiAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoc291cmNlKTtcblxuICBjb25zdCB0b2MgPSBtYXJrZG93blRvYyhjb250ZW50KVxuICAgIC5qc29uLm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IG9iai5jb250ZW50LFxuICAgICAgICBzbHVnOiBvYmouc2x1ZyxcbiAgICAgICAgbHZsOiBvYmoubHZsLFxuICAgICAgICBpOiBvYmouaSxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKChvYmo6IFRvY1R5cGUpID0+IG9iai5sdmwgIT09IDEpO1xuXG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHNlcmlhbGl6ZShjb250ZW50LCB7XG4gICAgbWR4T3B0aW9uczoge1xuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0NvZGVUaXRsZXNdLFxuICAgICAgcmVoeXBlUGx1Z2luczogW21keFByaXNtLCByZWh5cGVTbHVnLCByZWh5cGVBdXRvbGlua0hlYWRpbmdzXSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0b2M6IHRvYyxcbiAgICAgIHNvdXJjZTogbWR4U291cmNlLFxuICAgICAgZnJvbnRNYXR0ZXI6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhdGhzID0gcG9zdEZpbGVQYXRoc1xuICAgIC5tYXAoKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXFwubWR4PyQvLCAnJykpXG4gICAgLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});