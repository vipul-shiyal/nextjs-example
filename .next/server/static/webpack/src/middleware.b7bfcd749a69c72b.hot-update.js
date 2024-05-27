"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/session */ \"(middleware)/./src/utils/session.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nconst protectedRoutes = [\n    \"/middlewareside\",\n    \"/profile\"\n];\nfunction middleware(request) {\n    if (!_utils_session__WEBPACK_IMPORTED_MODULE_0__.sessionStatus && protectedRoutes.includes(request.nextUrl.pathname)) {\n        const absoluteURL = new URL(\"/\", request.nextUrl.origin);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redirect(absoluteURL.toString());\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBQ1E7QUFFeEQsTUFBTUUsa0JBQWtCO0lBQUM7SUFBbUI7Q0FBWTtBQUd4QyxTQUFTQyxXQUFXQyxPQUFtQjtJQUVyRCxJQUFHLENBQUNKLHlEQUFhQSxJQUFJRSxnQkFBZ0JHLFFBQVEsQ0FBQ0QsUUFBUUUsT0FBTyxDQUFDQyxRQUFRLEdBQUc7UUFDdkUsTUFBTUMsY0FBYyxJQUFJQyxJQUFJLEtBQUtMLFFBQVFFLE9BQU8sQ0FBQ0ksTUFBTTtRQUN2RCxPQUFPVCxrRkFBWUEsQ0FBQ1UsUUFBUSxDQUFDSCxZQUFZSSxRQUFRO0lBQ25EO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXNzaW9uU3RhdHVzIH0gZnJvbSBcIkAvdXRpbHMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5jb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbXCIvbWlkZGxld2FyZXNpZGVcIiwgXCIvcHJvZmlsZVwiLF07XG5cblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDpOZXh0UmVxdWVzdCkge1xuICBcbiAgaWYoIXNlc3Npb25TdGF0dXMgJiYgcHJvdGVjdGVkUm91dGVzLmluY2x1ZGVzKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSkpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVVSTCA9IG5ldyBVUkwoXCIvXCIsIHJlcXVlc3QubmV4dFVybC5vcmlnaW4pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChhYnNvbHV0ZVVSTC50b1N0cmluZygpKVxuICB9XG4gfVxuXG4iXSwibmFtZXMiOlsic2Vzc2lvblN0YXR1cyIsIk5leHRSZXNwb25zZSIsInByb3RlY3RlZFJvdXRlcyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiaW5jbHVkZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJhYnNvbHV0ZVVSTCIsIlVSTCIsIm9yaWdpbiIsInJlZGlyZWN0IiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});