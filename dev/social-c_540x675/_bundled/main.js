(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { ww: 2 * banner.offsetWidth, w: banner.offsetWidth, h: banner.offsetHeight, hh: 2 * banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

// function init_set() {
// 	TweenMax.set([".line"], {clip: `rect(0px, ${size.ww}px, ${size.hh}px, 0px)`})	
// 	TweenMax.set(".frame1", {opacity:1})
// 	TweenMax.set(".person",  {scale:0, x:-size.w, y:-size.h, transformOrigin:"100% 100%"})
// }

function init_set() {
	// TweenMax.set([".line"], {clip: `rect(0px, ${size.ww}px, ${size.hh}px, 0px)`})	
	TweenMax.set(".frame1", { opacity: 1 });
	// TweenMax.set(".person",  {scale:0, x:-size.w, y:-size.h, transformOrigin:"100% 100%"})
}

function end(read) {
	console.log(read);
	var tl_end = new TimelineMax();
	tl_end.add("end", "+=" + read.t2);
	if (document.getElementById("logo_hwc_1")) {
		tl_end.set("#logo_hwc_1", { className: "rotating" }, "end");
	}

	tl_end.to(".frame1", .3, { opacity: 0 }, "end");
	tl_end.to(".frame2", .3, { opacity: 1 }, "+=.2");
	tl_end.from([".t3_terms", ".t3"], .7, { opacity: 0 }, "+=.3");
	return tl_end;
}

var banners = {
	opt1a: {
		t1: 4,
		t2: 2.6
	},
	opt1b: {
		t1: 2.8,
		t2: 2
	},
	opt2a: {
		t1: 3.8,
		t2: 2.3
	},
	opt2b: {
		t1: 2.8,
		t2: 2
	}
};

exports.size = size;
exports.banners = banners;
exports.end = end;
exports.init_set = init_set;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = new TimelineMax();
var read = _commonJsCommonJs.banners.opt1a;

function start() {

	(0, _commonJsCommonJs.init_set)();

	tl.from([".t1a"], .4, { x: -_commonJsCommonJs.size.w }, "+=.2");
	tl.from([".t1b"], .4, { x: -_commonJsCommonJs.size.w }, "+=.2");
	tl.from([".t1c"], .4, { x: -_commonJsCommonJs.size.w }, "+=.2");

	tl.from(".line", 1, { clip: "rect(0px, " + 0 + "px, " + _commonJsCommonJs.size.hh + "px, 0px)" });

	tl.from([".logo_hwc", ".terms"], .5, { opacity: 0 }, "+=.2");
	tl.set("#logo_hwc_1", { className: "rotating" }, "-=.2");

	// tl.gotoAndPlay("end")
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
