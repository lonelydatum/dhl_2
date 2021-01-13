import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()


function start(){
	
	
	
	init_set()
	
	
	
	
	
	tl.from([".t1a"], .4, {x:-size.w}, "+=.2")
	tl.from([".t1b"], .4, {x:-size.w}, "+=.2")
	tl.from([".t1c"], .4, {x:-size.w}, "+=.2")
	
	
	
	tl.from(".terms", .4, {opacity:0}, "+=.2")
	
	
	

	
	
	
	// tl.gotoAndPlay("end")
}







start()


module.exports = {};

