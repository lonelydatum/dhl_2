(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { ww: 2 * banner.offsetWidth, w: banner.offsetWidth, h: banner.offsetHeight, hh: 2 * banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = new TimelineMax();

function start() {
	TweenLite.defaultEase = Power2.easeOut;

	tl.set(".frame1", { opacity: 1 });

	mask_list([".line_1", ".line_2", ".line_3"]);

	tl.from(".t1", .4, { x: -_commonJsCommonJs.size.w }, "+=.2");

	tl.add(mask_tw(".line_1"), "+=.3");
	tl.add(mask_tw(".line_2"));
	tl.add(mask_tw(".line_3"));

	tl.add("f2", "+=3");
	tl.to([".line", ".t1"], .5, { opacity: 0, x: _commonJsCommonJs.size.w }, "f2");
	tl.from(".t2", .5, { x: -_commonJsCommonJs.size.w }, "f2");

	tl.add("end", "+=4");
	tl.to(".frame1", .3, { opacity: 0 }, "end");
	tl.to(".frame2", .3, { opacity: 1 }, "+=.2");

	tl.from([".t3_terms", ".t3"], .7, { opacity: 0 }, "+=.5");

	// tl.from(".logo_hwc", .5, {opacity:0}, "+=.5")

	tl.set(".logo_hwc_1", { className: "rotating" }, "end");
	// tl.gotoAndPlay("end")
}

function mask_list(list) {
	list.map(function (item) {
		return mask_set(item);
	});
}

function mask_set(el) {
	TweenMax.set(el, { clip: "rect(0px, " + _commonJsCommonJs.size.ww + "px, " + _commonJsCommonJs.size.hh + "px, 0px)" });
}

function mask_tw(el) {
	var line_tw = new TimelineMax();
	line_tw.from(el, .4, { clip: "rect(0px, " + 0 + "px, " + _commonJsCommonJs.size.hh + "px, 0px)" });
	return line_tw;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map