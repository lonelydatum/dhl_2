import {size, banners, end, init_set} from '../../_common/js/common.js'

const tl = new TimelineMax()
const read = banners.opt2b

function start(){
	
	
	
	init_set()
	
	
	
	
	

	tl.from(".t1", .4, {x:-size.w}, "+=.2")
	
	
	
	tl.add("f2", read.t1)
	tl.to([".line", ".t1"], .5, {opacity:0, x:size.w}, "f2")
	tl.from(".t2a", .5, {x:-size.w}, "f2")
	tl.from(".t2b", .3, {opacity:0}, "+=1.2")

	tl.add( end(read) )
	
	
	
}





start()


module.exports = {};

