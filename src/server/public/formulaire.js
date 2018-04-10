webpackJsonp([1],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Ractive) {

(function (Ractive) {
	var template = __webpack_require__(341);
	var initService = __webpack_require__(133);

	Ractive.components['formulaire'] = Ractive.extend({
		template: template,
		on: {
			init: function init() {
				var ctx = this;
				ctx.set("testVariable", "Bonjour");
			}
		}
	});
})(Ractive.default);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)))

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n\t<h1>Test formulaire</h1>\n\t<p>{{testVariable}}</p>\n</div>";

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(65);
module.exports = __webpack_require__(130);


/***/ })

},[347]);