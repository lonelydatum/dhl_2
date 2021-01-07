const banner = document.getElementById('banner')
const size = {ww:2*banner.offsetWidth, w:banner.offsetWidth, h:banner.offsetHeight, hh:2*banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut



function init_set() {
	TweenMax.set([".line"], {clip: `rect(0px, ${size.ww}px, ${size.hh}px, 0px)`})	
	TweenMax.set(".frame1", {opacity:1})
	TweenMax.set(".person",  {scale:0, x:-size.w, y:-size.h, transformOrigin:"100% 100%"})
}

function end(read){
	const tl_end = new TimelineMax()
	tl_end.add("end", `+=${read.t2}`)
	tl_end.set(".logo_hwc_1", {className:"rotating"}, "end")	
	tl_end.to(".frame1", .3, {opacity:0}, "end")
	tl_end.to(".frame2", .3, {opacity:1}, "+=.2")
	tl_end.from([".t3_terms", ".t3"], .7, {opacity:0}, "+=.5")
	return tl_end
}

const banners = {
	opt1a:{
		t1: 3.7,
		t2: 3.7
	},
	opt1b:{
		t1: 2.5,
		t2: 3
	}
}



export {size, banners, end, init_set}