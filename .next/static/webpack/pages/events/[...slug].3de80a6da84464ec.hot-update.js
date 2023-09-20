"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventDetailFilterPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction EventDetailFilterPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const filterData = router.query.slug;\n    if (!filterData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"center\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sergi\\\\Documents\\\\progetti\\\\nextjs-course\\\\pages\\\\events\\\\[...slug].js\",\n        lineNumber: 6,\n        columnNumber: 28\n    }, this);\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Invalid filter, please adjust your values\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sergi\\\\Documents\\\\progetti\\\\nextjs-course\\\\pages\\\\events\\\\[...slug].js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_1__.getFilteredEvents)({\n        numYear,\n        numMonth\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"No events found for the chosen filter\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sergi\\\\Documents\\\\progetti\\\\nextjs-course\\\\pages\\\\events\\\\[...slug].js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"EventDetailFilterPage\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sergi\\\\Documents\\\\progetti\\\\nextjs-course\\\\pages\\\\events\\\\[...slug].js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(EventDetailFilterPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EventDetailFilterPage;\nvar _c;\n$RefreshReg$(_c, \"EventDetailFilterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1Y7QUFDeEIsU0FBU0U7O0lBQ3BCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN2QixNQUFNRyxhQUFhRCxPQUFPRSxLQUFLLENBQUNDLElBQUk7SUFDckMsSUFBRyxDQUFDRixZQUFZLHFCQUFPLDhEQUFDRztRQUFFQyxXQUFVO2tCQUFTOzs7Ozs7SUFFakQsTUFBTUMsZUFBYUwsVUFBVSxDQUFDLEVBQUU7SUFDaEMsTUFBTU0sZ0JBQWNOLFVBQVUsQ0FBQyxFQUFFO0lBRWpDLE1BQU1PLFVBQVMsQ0FBQ0Y7SUFDaEIsTUFBTUcsV0FBVSxDQUFDRjtJQUVqQixJQUFHRyxNQUFNRixZQUFZRSxNQUFNRCxhQUFZRCxVQUFRLFFBQVFBLFVBQVMsUUFBT0MsV0FBVSxLQUFJQSxXQUFVLElBQUc7UUFDOUYscUJBQU8sOERBQUNMO1lBQUVDLFdBQVU7c0JBQVM7Ozs7OztJQUNqQztJQUVBLE1BQU1NLGlCQUFpQmQsOERBQWlCQSxDQUFDO1FBQ3JDVztRQUNBQztJQUNKO0lBQ0MsSUFBRyxDQUFDRSxrQkFBa0JBLGVBQWVDLE1BQU0sS0FBSyxHQUFFO1FBQy9DLHFCQUFPLDhEQUFDUjtZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDaEM7SUFDRyxxQkFDSSw4REFBQ1E7a0JBQUk7Ozs7OztBQUViO0dBekJ3QmQ7O1FBQ0xELGtEQUFTQTs7O0tBREpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCJAL2R1bW15LWRhdGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnREZXRhaWxGaWx0ZXJQYWdlKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcbiAgICBpZighZmlsdGVyRGF0YSkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmcuLi48L3A+XHJcblxyXG5jb25zdCBmaWx0ZXJlZFllYXI9ZmlsdGVyRGF0YVswXTtcclxuY29uc3QgZmlsdGVyZWRNb250aD1maWx0ZXJEYXRhWzFdO1xyXG5cclxuY29uc3QgbnVtWWVhciA9K2ZpbHRlcmVkWWVhcjtcclxuY29uc3QgbnVtTW9udGggPStmaWx0ZXJlZE1vbnRoO1xyXG5cclxuaWYoaXNOYU4obnVtWWVhcikgfHwgaXNOYU4obnVtTW9udGgpIHx8bnVtWWVhcj4yMDMwIHx8IG51bVllYXIgPDIwMjEgfHxudW1Nb250aCA8MSB8fG51bU1vbnRoID4xMil7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+SW52YWxpZCBmaWx0ZXIsIHBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXM8L3A+XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoe1xyXG4gICAgbnVtWWVhcixcclxuICAgIG51bU1vbnRoXHJcbn0pXHJcbiBpZighZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKXtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyPC9wPlxyXG4gfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+RXZlbnREZXRhaWxGaWx0ZXJQYWdlPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiZ2V0RmlsdGVyZWRFdmVudHMiLCJ1c2VSb3V0ZXIiLCJFdmVudERldGFpbEZpbHRlclBhZ2UiLCJyb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwicCIsImNsYXNzTmFtZSIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlcmVkRXZlbnRzIiwibGVuZ3RoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});