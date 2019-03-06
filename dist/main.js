/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/logic.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/logic.ts":
/*!**********************!*\
  !*** ./src/logic.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return goldenratio; });\nlet time = 0;\nfunction goldenratio(root, speed = 1, circles = 10, golden_ratio = 1.6803, circle_size = 1, colours = false) {\n    setInterval(() => time += speed, 1);\n    window.requestAnimationFrame(() => {\n        draw(root.getContext(\"2d\"), (root.width > root.height ? root.height : root.width) / (2 * circle_size), (root.width > root.height ? root.height : root.width) / 2, circles, golden_ratio, colours);\n    });\n}\nfunction draw(ctx, radius, size, circles, golden_ratio, colours) {\n    ctx.clearRect(0, 0, size * 2, size * 2); // clear canvas\n    let centre = [size, size];\n    ctx.beginPath();\n    ctx.arc(size, size, radius, 0, Math.PI * 2, true); // Outer circle\n    ctx.stroke();\n    for (let index = 1; index < circles; index++) {\n        let speedMulitpilier = golden_ratio * index / circles;\n        let degrees = Math.PI / 180 * speedMulitpilier * time;\n        centre = calcCentre(centre[0], centre[1], radius / Math.pow(golden_ratio, index), degrees, golden_ratio);\n        ctx.beginPath();\n        if (colours) {\n            ctx.strokeStyle = \"hsl(\" + index / circles * 360 + \",100%,50%)\";\n        }\n        ctx.arc(centre[0], centre[1], radius / Math.pow(golden_ratio, index), 0, Math.PI * 2, true);\n        ctx.stroke();\n        ctx.save();\n        centre;\n    }\n    window.requestAnimationFrame(() => {\n        draw(ctx, radius, size, circles, golden_ratio, colours);\n    });\n}\nfunction calcCentre(x, y, radius, angle, golden_ratio) {\n    let deltax = Math.sin(angle) * (radius * golden_ratio - radius);\n    let deltay = Math.cos(angle) * (radius * golden_ratio - radius);\n    let tuple = [x + deltax, y + deltay];\n    return tuple;\n}\n\n//# sourceURL=webpack:///./src/logic.ts?");

/***/ })

/******/ });