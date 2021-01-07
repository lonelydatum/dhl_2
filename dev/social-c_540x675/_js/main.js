import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()
const read = banners.opt1a

function start(){
	
	
	
	init_set()
	
	
	
	
	tl.from([".t1a", ".t1b", ".t1c"], .6, {x:-size.w}, "+=.2")
	
	tl.from(".line", 1, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`})		
	
	
	tl.from(".terms", .4, {opacity:0}, "+=.2")
	tl.from(".logo_hwc", .5, {opacity:0}, "+=.2")
	tl.set("#logo_hwc_1", {className:"rotating"}, "+=.5")		


	

	
	
	
	
	

	
	
	
	// tl.gotoAndPlay("end")
}







start()


module.exports = {};

