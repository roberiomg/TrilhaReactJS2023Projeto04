"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/lib/stripe.ts":
/*!***************************!*\
  !*** ./src/lib/stripe.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst key = process.env.STRIPE_SECRET_KEY ?? \"\";\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](key, {\n    apiVersion: \"2022-11-15\",\n    appInfo: {\n        name: \"Ignite Shop\"\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3N0cmlwZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQjtBQUUzQixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixJQUFJO0FBRXRDLE1BQU1DLFNBQVMsSUFBSUwsOENBQU1BLENBQUNDLEtBQUs7SUFDcENLLFlBQVk7SUFDWkMsU0FBUztRQUNQQyxNQUFNO0lBQ1I7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpbGhhcmVhY3RqczIwMjNwcm9qZXRvMDQvLi9zcmMvbGliL3N0cmlwZS50cz83OThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xyXG5cclxuY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgPz8gJydcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKGtleSwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIyLTExLTE1JyxcclxuICBhcHBJbmZvOiB7XHJcbiAgICBuYW1lOiAnSWduaXRlIFNob3AnLFxyXG4gIH0sXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJzdHJpcGUiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/stripe.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/stripe */ \"(api)/./src/lib/stripe.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_stripe__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { priceId  } = req.body;\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed.\"\n        });\n    }\n    if (!priceId) {\n        return res.status(400).json({\n            error: \"Price not found.\"\n        });\n    }\n    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;\n    const cancelUrl = `${process.env.NEXT_URL}/`;\n    const checkoutSession = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n        success_url: successUrl,\n        cancel_url: cancelUrl,\n        mode: \"payment\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ]\n    });\n    return res.status(201).json({\n        checkoutUrl: checkoutSession.url\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lDO0FBRTFCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRixJQUFJRyxJQUFJO0lBRTVCLElBQUlILElBQUlJLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQjtJQUM3RCxDQUFDO0lBRUQsSUFBSSxDQUFDTCxTQUFTO1FBQ1osT0FBT0QsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1CO0lBQzFELENBQUM7SUFFRCxNQUFNQyxhQUFhLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLENBQUMseUNBQXlDLENBQUM7SUFDckYsTUFBTUMsWUFBWSxDQUFDLEVBQUVILFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU1QyxNQUFNRSxrQkFBa0IsTUFBTWYsd0VBQStCLENBQUM7UUFDNURtQixhQUFhVDtRQUNiVSxZQUFZTjtRQUNaTyxNQUFNO1FBQ05DLFlBQVk7WUFDVjtnQkFDRUMsT0FBT25CO2dCQUNQb0IsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtJQUVBLE9BQU9yQixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzFCaUIsYUFBYVYsZ0JBQWdCVyxHQUFHO0lBQ2xDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaWxoYXJlYWN0anMyMDIzcHJvamV0bzA0Ly4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC50cz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi8uLi9saWIvc3RyaXBlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxyXG4pIHtcclxuICBjb25zdCB7IHByaWNlSWQgfSA9IHJlcS5ib2R5XHJcblxyXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkLicgfSlcclxuICB9XHJcblxyXG4gIGlmICghcHJpY2VJZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdQcmljZSBub3QgZm91bmQuJyB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VjY2Vzc1VybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfVVJMfS9zdWNjZXNzP3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YFxyXG4gIGNvbnN0IGNhbmNlbFVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfVVJMfS9gXHJcblxyXG4gIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgc3VjY2Vzc191cmw6IHN1Y2Nlc3NVcmwsXHJcbiAgICBjYW5jZWxfdXJsOiBjYW5jZWxVcmwsXHJcbiAgICBtb2RlOiAncGF5bWVudCcsXHJcbiAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcmljZTogcHJpY2VJZCxcclxuICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgIGNoZWNrb3V0VXJsOiBjaGVja291dFNlc3Npb24udXJsLFxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0cmlwZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcmljZUlkIiwiYm9keSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInN1Y2Nlc3NVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9VUkwiLCJjYW5jZWxVcmwiLCJjaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwic3VjY2Vzc191cmwiLCJjYW5jZWxfdXJsIiwibW9kZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwiY2hlY2tvdXRVcmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();