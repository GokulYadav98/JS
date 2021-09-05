/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var whatever1;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./AccountingModule.js":
/*!*****************************!*\
  !*** ./AccountingModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Journel\": () => (/* binding */ Journel)\n/* harmony export */ });\nclass Journel {\r\n    DebitCredit(){\r\n        alert(\"Debited and Credited\");\r\n    }\r\n}\r\nclass Ledger {\r\n\r\n}\n\n//# sourceURL=webpack://whatever1/./AccountingModule.js?");

/***/ }),

/***/ "./BillingModule.js":
/*!**************************!*\
  !*** ./BillingModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BillPayment\": () => (/* binding */ BillPayment)\n/* harmony export */ });\n/* harmony import */ var _PaymentModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentModule.js */ \"./PaymentModule.js\");\n\r\nclass BillPayment {\r\n    CreateBill(){\r\n        alert(\"Bill Created\")\r\n        let payObj = new _PaymentModule_js__WEBPACK_IMPORTED_MODULE_0__.PaymentGateWay();\r\n        payObj.DoPayments();\r\n    }\r\n}\n\n//# sourceURL=webpack://whatever1/./BillingModule.js?");

/***/ }),

/***/ "./PaymentModule.js":
/*!**************************!*\
  !*** ./PaymentModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PaymentGateWay\": () => (/* binding */ PaymentGateWay)\n/* harmony export */ });\n/* harmony import */ var _webpack_AccountingModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webpack/AccountingModule.js */ \"./AccountingModule.js\");\n\r\nclass PaymentGateWay {\r\n    DoPayments(){\r\n        alert(\"Payment Done\")\r\n        let obj = new _webpack_AccountingModule_js__WEBPACK_IMPORTED_MODULE_0__.Journel();\r\n        obj.DebitCredit();\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://whatever1/./PaymentModule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./BillingModule.js");
/******/ 	whatever1 = __webpack_exports__;
/******/ 	
/******/ })()
;