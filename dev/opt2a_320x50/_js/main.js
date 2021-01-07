import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()
const read = banners.opt1a

function start(){
	
	
	
	init_set()
	

	
	
	

	tl.from(".t1", .3, {x:-size.w}, "+=.2")
	tl.from(".line", 1, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`})		
	
	
	
	tl.add("f2", read.t1)
	tl.to([".line", ".t1"], .5, {opacity:0, x:size.w}, "f2")
	tl.from(".t2", .5, {x:-size.w}, "f2")

	tl.add( end(read) )
	
	
	// tl.gotoAndPlay("end")
}





start()


module.exports = {};

