import {size} from '../../_common/js/common.js'

const tl = new TimelineMax()

function start(){
	TweenLite.defaultEase = Power2.easeOut
	
	tl.set(".frame1", {opacity:1})

	mask_list([".line_1", ".line_2", ".line_3"])
	

	tl.from(".t1", .4, {x:-size.w}, "+=.2")
	
	
	tl.add( mask_tw(".line_1"), "+=.3"	)
	tl.add( mask_tw(".line_2")	)
	tl.add( mask_tw(".line_3") )
	
	
	
	tl.add("f2", "+=3")
	tl.to([".line", ".t1"], .5, {opacity:0, x:size.w}, "f2")
	tl.from(".t2", .5, {x:-size.w}, "f2")

	tl.add("end", "+=4.5")
	tl.to(".frame1", .3, {opacity:0}, "end")
	tl.to(".frame2", .3, {opacity:1}, "+=.2")

	tl.from([".t3_terms", ".t3"], .7, {opacity:0}, "+=.5")

	// tl.from(".logo_hwc", .5, {opacity:0}, "+=.5")

	tl.set(".logo_hwc_1", {className:"rotating"}, "end")
	// tl.gotoAndPlay("end")
}

function mask_list(list){
	list.map(item=>mask_set(item))
}

function mask_set(el){
	TweenMax.set(el, {clip: `rect(0px, ${size.ww}px, ${size.hh}px, 0px)`})	
}

function mask_tw(el){
	const line_tw = new TimelineMax()
	line_tw.from(el, .4, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`})	
	return line_tw
}

start()


module.exports = {};

