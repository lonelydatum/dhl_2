const banner = document.getElementById('banner')
const size = {ww:2*banner.offsetWidth, w:banner.offsetWidth, h:banner.offsetHeight, hh:2*banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

export {size}