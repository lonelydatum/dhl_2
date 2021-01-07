(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { ww: 2 * banner.offsetWidth, w: banner.offsetWidth, h: banner.offsetHeight, hh: 2 * banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function init_set() {
	TweenMax.set([".line"], { clip: "rect(0px, " + size.ww + "px, " + size.hh + "px, 0px)" });
	TweenMax.set(".frame1", { opacity: 1 });
	TweenMax.set(".person", { scale: 0, x: -size.w, y: -size.h, transformOrigin: "100% 100%" });
}

function end(read) {
	var tl_end = new TimelineMax();
	tl_end.add("end", "+=" + read.t2);
	tl_end.set(".logo_hwc_1", { className: "rotating" }, "end");
	tl_end.to(".frame1", .3, { opacity: 0 }, "end");
	tl_end.to(".frame2", .3, { opacity: 1 }, "+=.2");
	tl_end.from([".t3_terms", ".t3"], .7, { opacity: 0 }, "+=.5");
	return tl_end;
}

var banners = {
	opt1a: {
		t1: 3.7,
		t2: 3.7
	},
	opt1b: {
		t1: 2.5,
		t2: 3
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

	grow();

	tl.from(".t1", .4, { x: -_commonJsCommonJs.size.w }, "+=.2");

	tl.add("f2", "+=" + read.t1);
	tl.to([".line_1", ".t1"], .5, { opacity: 0, x: _commonJsCommonJs.size.w }, "f2");
	tl.from(".t2", .5, { x: -_commonJsCommonJs.size.w }, "f2");
	tl.from(".line_2", .6, { clip: "rect(0px, " + 0 + "px, " + _commonJsCommonJs.size.hh + "px, 0px)" });

	tl.add((0, _commonJsCommonJs.end)(read));

	// tl.gotoAndPlay("end")
}

function grow() {
	var tl_bang = new TimelineMax();
	tl_bang.add("bang", 1);
	tl_bang.from(".line_1", 1, { clip: "rect(0px, " + 0 + "px, " + _commonJsCommonJs.size.hh + "px, 0px)" }, "bang");
	tl_bang.to(".person", .7, { scale: .5, ease: Power3.easeOut }, "bang");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map