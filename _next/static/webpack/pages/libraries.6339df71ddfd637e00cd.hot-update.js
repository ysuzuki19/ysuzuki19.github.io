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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/ThemeSwitch */ \"./components/atoms/ThemeSwitch.tsx\");\n/* harmony import */ var _next_statics_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../next-statics.config */ \"./next-statics.config.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/yuya/Github/nextts-blog/components/molecules/Navigation.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var href = _ref.href,\n      desktop = _ref.desktop,\n      testid = _ref.testid,\n      children = _ref.children;\n  var isDesktop = desktop || false; // default value is false\n\n  var itemBase = 'text-gray-900 dark:text-white md:ml-10 md:pr-6 md:py-4';\n\n  if (isDesktop) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"invisible md:visible \".concat(itemBase),\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: href,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: itemBase,\n        \"data-testid\": testid,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = NavItem;\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),\n      _React$useState2 = (0,_home_yuya_Github_nextts_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      navbarOpen = _React$useState2[0],\n      setNavbarOpen = _React$useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      className: \"sticky top-0 left-0 right-0 opacity-100\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center flex-wrap py-2 opacity-100\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"text-gray-900 dark:text-white md:pr-6 md:py-4 ml-10 md:mr-12 font-bold text-2xl\",\n            \"data-testid\": \"blog-title\",\n            children: _next_statics_config__WEBPACK_IMPORTED_MODULE_5__.default.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/\",\n          desktop: true,\n          testid: \"goto-home\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/about\",\n          testid: \"goto-about\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n          href: \"/features\",\n          desktop: true,\n          testid: \"goto-features\",\n          children: \"Features\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ThemeSwitch__WEBPACK_IMPORTED_MODULE_4__.default, {\n          className: \"ml-auto\",\n          testid: \"switch-theme\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: \"relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container px-4 mx-auto flex flex-wrap items-center justify-between\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white\",\n            href: \"#pablo\",\n            children: \"pink Tailwind Starter Kit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\",\n            type: \"button\",\n            onClick: function onClick() {\n              return setNavbarOpen(!navbarOpen);\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n              className: \"fas fa-bars\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden'),\n          id: \"example-navbar-danger\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-col lg:flex-row list-none lg:ml-auto\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: \"nav-item\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75\",\n                href: \"#pablo\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                  className: \"fab fa-facebook-square text-lg leading-lg text-white opacity-75\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"ml-2\",\n                  children: \"Share\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: \"nav-item\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75\",\n                href: \"#pablo\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                  className: \"fab fa-twitter text-lg leading-lg text-white opacity-75\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 105,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"ml-2\",\n                  children: \"Tweet\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: \"nav-item\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75\",\n                href: \"#pablo\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                  className: \"fab fa-pinterest text-lg leading-lg text-white opacity-75\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"ml-2\",\n                  children: \"Pin\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Navigation, \"OUwg7MrQcp2Qr+wiKjCIx37vgcw=\");\n\n_c2 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2aWdhdGlvbi50c3g/ZDRmNiJdLCJuYW1lcyI6WyJOYXZJdGVtIiwiaHJlZiIsImRlc2t0b3AiLCJ0ZXN0aWQiLCJjaGlsZHJlbiIsImlzRGVza3RvcCIsIml0ZW1CYXNlIiwiTmF2aWdhdGlvbiIsIlJlYWN0IiwibmF2YmFyT3BlbiIsInNldE5hdmJhck9wZW4iLCJTdGF0aWNzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFRQSxJQUFNQSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxPQUtsQztBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLE1BQU1DLFNBQVMsR0FBR0gsT0FBTyxJQUFJLEtBQTdCLENBREksQ0FDZ0M7O0FBQ3BDLE1BQU1JLFFBQVEsR0FBRyx3REFBakI7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ2Isd0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVKLElBQVo7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLGlDQUEwQkssUUFBMUIsQ0FBWjtBQUFrRCx1QkFBYUgsTUFBL0Q7QUFBQSxrQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSRCxNQVFPO0FBQ0wsd0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVILElBQVo7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUVLLFFBQWQ7QUFBd0IsdUJBQWFILE1BQXJDO0FBQUEsa0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9EO0FBQ0YsQ0F6QkQ7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQW1CRTtBQUFJLHVCQUFTLEVBQUMsVUFBZDtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxrR0FEWjtBQUVFLG9CQUFJLEVBQUMsUUFGUDtBQUFBLHdDQUlFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFNLDJCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRjtBQUFBLGtCQURGO0FBa0ZELENBcEZEOztHQUFNRixVOztNQUFBQSxVO0FBc0ZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2aWdhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gJy4uL2F0b21zL1RoZW1lU3dpdGNoJztcbmltcG9ydCBTdGF0aWNzIGZyb20gJy4uLy4uL25leHQtc3RhdGljcy5jb25maWcnO1xuXG50eXBlIE5hdkl0ZW1Qcm9wcyA9IHtcbiAgaHJlZjogc3RyaW5nO1xuICBkZXNrdG9wPzogYm9vbGVhbjtcbiAgdGVzdGlkPzogc3RyaW5nO1xufTtcblxuY29uc3QgTmF2SXRlbTogUmVhY3QuRkM8TmF2SXRlbVByb3BzPiA9ICh7XG4gIGhyZWYsXG4gIGRlc2t0b3AsXG4gIHRlc3RpZCxcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IGlzRGVza3RvcCA9IGRlc2t0b3AgfHwgZmFsc2U7IC8vIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgY29uc3QgaXRlbUJhc2UgPSAndGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgbWQ6bWwtMTAgbWQ6cHItNiBtZDpweS00JztcbiAgaWYgKGlzRGVza3RvcCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtgaW52aXNpYmxlIG1kOnZpc2libGUgJHtpdGVtQmFzZX1gfSBkYXRhLXRlc3RpZD17dGVzdGlkfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQmFzZX0gZGF0YS10ZXN0aWQ9e3Rlc3RpZH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBvcGFjaXR5LTEwMFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBweS0yIG9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIG1kOnByLTYgbWQ6cHktNCBtbC0xMCBtZDptci0xMiBmb250LWJvbGQgdGV4dC0yeGxcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImJsb2ctdGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7U3RhdGljcy50aXRsZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9cIiBkZXNrdG9wIHRlc3RpZD1cImdvdG8taG9tZVwiPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL2Fib3V0XCIgdGVzdGlkPVwiZ290by1hYm91dFwiPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9mZWF0dXJlc1wiIGRlc2t0b3AgdGVzdGlkPVwiZ290by1mZWF0dXJlc1wiPlxuICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPFRoZW1lU3dpdGNoIGNsYXNzTmFtZT1cIm1sLWF1dG9cIiB0ZXN0aWQ9XCJzd2l0Y2gtdGhlbWVcIiAvPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTIgcHktMyBiZy1waW5rLTUwMCBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6dy1hdXRvIGxnOnN0YXRpYyBsZzpibG9jayBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBsZWFkaW5nLXJlbGF4ZWQgaW5saW5lLWJsb2NrIG1yLTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB1cHBlcmNhc2UgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBwaW5rIFRhaWx3aW5kIFN0YXJ0ZXIgS2l0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBsZWFkaW5nLW5vbmUgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgYmxvY2sgbGc6aGlkZGVuIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbighbmF2YmFyT3Blbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgJ2xnOmZsZXggZmxleC1ncm93IGl0ZW1zLWNlbnRlcicgK1xuICAgICAgICAgICAgICAobmF2YmFyT3BlbiA/ICcgZmxleCcgOiAnIGhpZGRlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZD1cImV4YW1wbGUtbmF2YmFyLWRhbmdlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGlzdC1ub25lIGxnOm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgbGVhZGluZy1zbnVnIHRleHQtd2hpdGUgaG92ZXI6b3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIHRleHQtbGcgbGVhZGluZy1sZyB0ZXh0LXdoaXRlIG9wYWNpdHktNzVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+U2hhcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBsZWFkaW5nLXNudWcgdGV4dC13aGl0ZSBob3ZlcjpvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyIHRleHQtbGcgbGVhZGluZy1sZyB0ZXh0LXdoaXRlIG9wYWNpdHktNzVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+VHdlZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBsZWFkaW5nLXNudWcgdGV4dC13aGl0ZSBob3ZlcjpvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QgdGV4dC1sZyBsZWFkaW5nLWxnIHRleHQtd2hpdGUgb3BhY2l0eS03NVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5QaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Navigation.tsx\n");

/***/ })

});