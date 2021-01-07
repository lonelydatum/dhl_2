import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()


function start(){
	
	
	
	init_set()
	
	
	
	tl.from([".t1a", ".t1b", ".t1c"], .4, {x:-size.w}, "+=.2")
	
	tl.from(".line", 1, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`})		
	
	

	tl.to(".person", 1, {scale:.5, ease:Power3.easeOut} )
	
	tl.from(".terms", .4, {opacity:0}, "+=.2")

	
	
	
	
	

	
	
	
	// tl.gotoAndPlay("end")
}







start()


module.exports = {};

