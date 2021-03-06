import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()
const read = banners.opt1b


function start(){
	
	
	
	
	
	init_set()
	tl.from(".gradient", .4, {y:-200, opacity:0}, "+=.2")
	// grow()
	
	
	

	tl.from(".t1", .4, {x:-size.w}, "+=.2")
	
	
	
	tl.add("f2", read.t1)
	tl.to([".t1"], .5, {opacity:0, x:size.w}, "f2")
	tl.from(".t2", .5, {x:-size.w}, "f2")

	tl.add( end(read) )
	
	
	// tl.gotoAndPlay(10)
}





function grow(){
	const tl_bang = new TimelineMax()
	tl_bang.add("bang", 1)
	tl_bang.from(".line_1", 1, {clip: `rect(0px, ${0}px, ${size.hh}px, 0px)`}, "bang")		
	tl_bang.to(".person", .7, {scale:.5, ease:Power3.easeOut}, "bang")
}


start()


module.exports = {};

