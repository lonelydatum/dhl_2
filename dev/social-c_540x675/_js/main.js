import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()
const read = banners.opt1a

function start(){
	
	
	
	init_set()
	
	
	
	
	

	tl.from(".t1a", .4, {opacity:0}, "+=.2")
	tl.from(".t1b", .4, {opacity:0}, "+=.2")
	TweenMax.from(".line", 1, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`, delay:.9})		
	tl.from(".t1c", .4, {opacity:0}, "+=.2")
	tl.from(".terms", .4, {opacity:0}, "+=.2")

	tl.set("#logo_hwc_1", {className:"rotating"}, 2)		
	
	
	
	

	
	
	
	// tl.gotoAndPlay("end")
}







start()


module.exports = {};

