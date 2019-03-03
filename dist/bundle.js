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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var degrees = 0;
var width = 750;
var height = 750;
var radius = 500;
var speed = 10;
var circles = 1000;
var golden_ratio = 1.01;
// (1+Math.sqrt(5))/2
function init() {
    setInterval(function () { return degrees += speed; }, 1);
    window.requestAnimationFrame(draw);
}
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0, 0, width * 2, height * 2); // clear canvas
    var canvas = document.getElementById('canvas');
    canvas.width = width * 2;
    canvas.height = height * 2;
    var x = [];
    var centre = [[width, height]];
    ctx.beginPath();
    ctx.arc(width, height, radius, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    for (var index = 1; index < circles; index++) {
        var speedMulitpilier = (golden_ratio * ((index)) / circles);
        var next = calcCentre(centre[index - 1][0], centre[index - 1][1], radius / Math.pow(golden_ratio, index), (Math.PI / 180) * speedMulitpilier * (degrees / 2.777777) * 6.180355123);
        centre.push(next);
        ctx.beginPath();
        ctx.arc(centre[index][0], centre[index][1], radius / Math.pow(golden_ratio, index), 0, Math.PI * 2, true);
        ctx.stroke();
    }
    ctx.save();
    window.requestAnimationFrame(draw);
}
function calcCentre(x, y, radius, angle) {
    var deltax = Math.sin(angle) * (radius * golden_ratio - radius);
    var deltay = Math.cos(angle) * (radius * golden_ratio - radius);
    var tuple = [x + deltax, y + deltay];
    return tuple;
}
function drawSphere(x, y, date, ctx, index, max, radius) {
    var speedMulitpilier = (1.61803 * index) / max;
    ctx.beginPath();
    ctx.arc(x, (y + radius) - (radius / (1.6803 * index)), radius / (1.6803 * index), 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    ctx.translate(x, (y + radius) - (radius / (1.6803 * index)));
    ctx.rotate((Math.PI / 180) * 1 * speedMulitpilier);
    ctx.translate(-x, -((y + radius) - (radius / (1.6803 * index))));
    ctx.save();
}
init();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJLE9BQU8sR0FBRSxDQUFDLENBQUM7QUFDZixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBRXhCLHFCQUFxQjtBQUNyQixTQUFTLElBQUk7SUFDWCxXQUFXLENBQUMsY0FBSyxjQUFPLElBQUcsS0FBSyxFQUFmLENBQWUsRUFBRSxDQUFDLENBQUMs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O0FBQ0QsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJ2YXIgZGVncmVlcyA9MDtcclxubGV0IHdpZHRoID0gNzUwO1xyXG5sZXQgaGVpZ2h0ID0gNzUwO1xyXG5sZXQgcmFkaXVzID0gNTAwO1xyXG5sZXQgc3BlZWQgPSAxMDtcclxubGV0IGNpcmNsZXMgPSAxMDAwO1xyXG5sZXQgZ29sZGVuX3JhdGlvID0gMS4wMTtcclxuXHJcbi8vICgxK01hdGguc3FydCg1KSkvMlxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHNldEludGVydmFsKCgpPT4gZGVncmVlcys9IHNwZWVkLCAxKTtcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3KCkge1xyXG4gIHZhciBjdHggPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50KS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgqMiwgaGVpZ2h0KjIpOyAvLyBjbGVhciBjYW52YXNcclxuICBsZXQgY2FudmFzID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XHJcbmNhbnZhcy53aWR0aD0gd2lkdGgqMjtcclxuY2FudmFzLmhlaWdodD0gaGVpZ2h0KjI7XHJcbiAgbGV0IHg6bnVtYmVyW10gPSBbXTtcclxuICBsZXQgY2VudHJlOltudW1iZXIsbnVtYmVyXVtdID0gW1t3aWR0aCxoZWlnaHRdXTtcclxuICBcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4LmFyYyh3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTsgLy8gT3V0ZXIgY2lyY2xlXHJcbiAgY3R4LnN0cm9rZSgpO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBjaXJjbGVzOyBpbmRleCsrKSB7XHJcbiAgICBsZXQgc3BlZWRNdWxpdHBpbGllciA9IChnb2xkZW5fcmF0aW8gKiAoKGluZGV4KSkgLyBjaXJjbGVzKTtcclxuICAgIGxldCBuZXh0ID0gY2FsY0NlbnRyZShjZW50cmVbaW5kZXgtMV1bMF0sY2VudHJlW2luZGV4LTFdWzFdLHJhZGl1cy9NYXRoLnBvdyhnb2xkZW5fcmF0aW8saW5kZXgpLChNYXRoLlBJLzE4MCkqc3BlZWRNdWxpdHBpbGllciooZGVncmVlcy8yLjc3Nzc3NykqNi4xODAzNTUxMjMpO1xyXG4gICAgY2VudHJlLnB1c2gobmV4dCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRyZVtpbmRleF1bMF0sY2VudHJlW2luZGV4XVsxXSwgcmFkaXVzL01hdGgucG93KGdvbGRlbl9yYXRpbyxpbmRleCksIDAsIE1hdGguUEkgKiAyLCB0cnVlKTsgXHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIH1cclxuICBjdHguc2F2ZSgpO1xyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuZnVuY3Rpb24gY2FsY0NlbnRyZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpe1xyXG5sZXQgZGVsdGF4ID0gTWF0aC5zaW4oYW5nbGUpICogKHJhZGl1cypnb2xkZW5fcmF0aW8tcmFkaXVzKTtcclxubGV0IGRlbHRheSA9IE1hdGguY29zKGFuZ2xlKSAqKHJhZGl1cypnb2xkZW5fcmF0aW8tcmFkaXVzKTtcclxubGV0IHR1cGxlOltudW1iZXIsIG51bWJlcl0gPSBbeCtkZWx0YXgsIHkrZGVsdGF5XTtcclxucmV0dXJuIHR1cGxlO1xyXG5cclxufVxyXG5mdW5jdGlvbiBkcmF3U3BoZXJlKHg6IG51bWJlciwgeTogbnVtYmVyLCBkYXRlOiBEYXRlLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW5kZXg6bnVtYmVyLCBtYXg6bnVtYmVyLCByYWRpdXM6IG51bWJlcil7XHJcbiAgICBcclxuICAgIGxldCBzcGVlZE11bGl0cGlsaWVyID0gKDEuNjE4MDMgKiBpbmRleCkgLyBtYXg7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHgsICh5ICtyYWRpdXMpLShyYWRpdXMvKDEuNjgwMyAqIGluZGV4KSksIHJhZGl1cy8oMS42ODAzKmluZGV4KSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpOyAvLyBPdXRlciBjaXJjbGVcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC50cmFuc2xhdGUoeCwgKHkgK3JhZGl1cyktKHJhZGl1cy8oMS42ODAzICogaW5kZXgpKSk7IFxyXG4gICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAxKnNwZWVkTXVsaXRwaWxpZXIpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZSgteCwgLSgoeSArcmFkaXVzKS0ocmFkaXVzLygxLjY4MDMgKiBpbmRleCkpKSk7IFxyXG4gICAgXHJcbiAgY3R4LnNhdmUoKTtcclxufVxyXG5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=