const banner = document.getElementById('banner')
const size = {ww:2*banner.offsetWidth, w:banner.offsetWidth, h:banner.offsetHeight, hh:2*banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut



function init_set() {
	TweenMax.set([".line"], {clip: `rect(0px, ${size.ww}px, ${size.hh}px, 0px)`})	
	TweenMax.set(".frame1", {opacity:1})
	TweenMax.set(".person",  {scale:0, x:-size.w, y:-size.h, transformOrigin:"100% 100%"})
}

function end(read){
	console.log(read);
	const tl_end = new TimelineMax()
	tl_end.add("end", `+=${read.t2}`)
	if(document.getElementById("logo_hwc_1")){
		tl_end.set("#logo_hwc_1", {className:"rotating"}, "end")		
	}
	
	tl_end.to(".frame1", .3, {opacity:0}, "end")
	tl_end.to(".frame2", .3, {opacity:1}, "+=.2")
	tl_end.from([".t3_terms", ".t3"], .7, {opacity:0}, "+=.3")
	return tl_end
}

const banners = {
	opt1a:{
		t1: 3.8,
		t2: 2.3
	},
	opt1b:{
		t1: 2.8,
		t2: 2
	},
	opt2a:{
		t1: 3.8,
		t2: 2.3
	},
	opt2b:{
		t1: 2.8,
		t2: 2
	}
}



export {size, banners, end, init_set}