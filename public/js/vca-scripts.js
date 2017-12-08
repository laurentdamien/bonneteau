(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(v,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof module&&module.exports?module.exports=p():v.anime=p()})(this,function(){function v(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function p(a){return a.reduce(function(a,d){return a.concat(g.arr(d)?p(d):d)},[])}function w(a){if(g.arr(a))return a;g.str(a)&&(a=v(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function F(a,b){return a.some(function(a){return a===b})}
function A(a){var b={},d;for(d in a)b[d]=a[d];return b}function G(a,b){var d=A(a),c;for(c in a)d[c]=b.hasOwnProperty(c)?b[c]:a[c];return d}function B(a,b){var d=A(a),c;for(c in b)d[c]=g.und(a[c])?b[c]:a[c];return d}function S(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,d,h){return b+b+d+d+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var d=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+d+","+b+")"}function T(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(d[1])/360;var c=parseInt(d[2])/100,d=parseInt(d[3])/100;if(0==c)c=d=a=d;else{var e=.5>d?d*(1+c):d+c-d*c,l=2*d-e,c=b(l,e,a+1/3),d=b(l,e,a);a=b(l,e,a-1/3)}return"rgb("+255*c+","+255*d+","+255*a+")"}function x(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function U(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function H(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function C(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function I(a,b){if(g.dom(a)&&F(V,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&C(a,b))return"css";if(null!=a[b])return"object"}function W(a,b){var d=U(b),d=-1<b.indexOf("scale")?
1:0+d;a=a.style.transform;if(!a)return d;for(var c=[],e=[],l=[],h=/(\w+)\((.+?)\)/g;c=h.exec(a);)e.push(c[1]),l.push(c[2]);a=l.filter(function(a,c){return e[c]===b});return a.length?a[0]:d}function J(a,b){switch(I(a,b)){case "transform":return W(a,b);case "css":return C(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function K(a,b){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;b=parseFloat(b);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function D(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function X(a,b){function d(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var c=d(),e=d(-1),l=d(1);switch(a.property){case "x":return c.x;case "y":return c.y;case "angle":return 180*Math.atan2(l.y-e.y,l.x-e.x)/Math.PI}}function L(a,b){var d=/-?\d*\.?\d+/g;a=D(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?S(a):g.hsl(a)?T(a):void 0;else{var c=x(a);a=c?a.substr(0,a.length-c.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(d)?b.match(d).map(Number):[0],strings:b.split(d)}}function Y(a,b){return b.reduce(function(b,c,e){return b+a[e-1]+c})}function M(a){return(a?p(g.arr(a)?a.map(w):w(a)):[]).filter(function(a,d,c){return c.indexOf(a)===d})}function Z(a){var b=M(a);return b.map(function(a,c){return{target:a,id:c,total:b.length}})}function aa(a,b){var d=A(b);if(g.arr(a)){var c=a.length;2!==c||g.obj(a[0])?g.fnc(b.duration)||(d.duration=b.duration/c):a={value:a}}return w(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!D(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return B(a,d)})}function ba(a,b){var d={},c;for(c in a){var e=H(a[c],b);g.arr(e)&&(e=e.map(function(a){return H(a,b)}),1===e.length&&(e=e[0]));d[c]=e}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return g.arr(a)?y.apply(this,a):N[a]}function da(a,b){var d;return a.tweens.map(function(c){c=ba(c,b);var e=c.value,l=J(b.target,a.name),h=d?d.to.original:l,h=g.arr(e)?e[0]:h,m=K(g.arr(e)?
e[1]:e,h),l=x(m)||x(h)||x(l);c.isPath=D(e);c.from=L(h,l);c.to=L(m,l);c.start=d?d.end:a.offset;c.end=c.start+c.delay+c.duration;c.easing=ca(c.easing);c.elasticity=(1E3-Math.min(Math.max(c.elasticity,1),999))/1E3;g.col(c.from.original)&&(c.round=1);return d=c})}function ea(a,b){return p(a.map(function(a){return b.map(function(b){var c=I(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function O(a,b,d){var c="delay"===a?Math.min:Math.max;return b.length?c.apply(Math,b.map(function(b){return b[a]})):d[a]}function fa(a){var b=G(ga,a),d=G(ha,a),c=Z(a.targets),e=[],g=B(b,d),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:aa(a[h],d)});a=ea(c,e);return B(b,{children:[],animatables:c,animations:a,duration:O("duration",a,d),delay:O("delay",a,d)})}function n(a){function b(){return window.Promise&&new Promise(function(a){return Q=a})}function d(a){return f.reversed?
f.duration-a:a}function c(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,m=g.tweens;e.tween=m.filter(function(b){return a<b.end})[0]||m[m.length-1];e.isPath$1=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);m=Y(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$1?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$1&&(b=X(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ia[g.type](h.target,g.property,m,c,h.id);g.currentValue=m;b++;e={isPath$1:e.isPath$1,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)E||(E=C(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[E]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
l=f.offset,n=f.delay,P=f.currentTime,q=f.reversed,r=d(a),r=Math.min(Math.max(r,0),h);if(f.children){var p=f.children;if(r>=f.currentTime)for(var u=0;u<p.length;u++)p[u].seek(r);else for(u=p.length;u--;)p[u].seek(r)}r>l&&r<h?(c(r),!f.began&&r>=n&&(f.began=!0,e("begin")),e("run")):(r<=l&&0!==P&&(c(0),q&&g()),r>=h&&P!==h&&(c(h),q||g()));a>=h&&(f.remaining?(t=m,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),"Promise"in window&&(Q(),R=b()),f.completed||(f.completed=!0,e("complete"))),
k=0);e("update")}a=void 0===a?{}:a;var m,t,k=0,Q=null,R=b(),f=fa(a);f.reset=function(){var a=f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b;for(a=f.children.length;a--;)b=f.children[a],b.seek(b.offset),b.reset()};f.tick=function(a){m=a;t||(t=m);h((k+m-t)*n.speed)};f.seek=function(a){h(d(a))};f.pause=function(){var a=q.indexOf(f);-1<a&&q.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=
!1,t=0,k=d(f.currentTime),q.push(f),z||ja())};f.reverse=function(){f.reversed=!f.reversed;t=0;k=d(f.currentTime)};f.restart=function(){f.pause();f.reset();f.play()};f.finished=R;f.reset();f.autoplay&&f.play();return f}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ha={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},V="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
E,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||
g.rgb(a)||g.hsl(a)}},y=function(){function a(a,d,c){return(((1-3*c+3*d)*a+(3*c-6*d))*a+3*d)*a}return function(b,d,c,e){if(0<=b&&1>=b&&0<=c&&1>=c){var g=new Float32Array(11);if(b!==d||c!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,c);return function(h){if(b===d&&c===e)return h;if(0===h)return 0;if(1===h)return 1;for(var m=0,k=1;10!==k&&g[k]<=h;++k)m+=.1;--k;var k=m+(h-g[k])/(g[k+1]-g[k])*.1,l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(.001<=l){for(m=0;4>m;++m){l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(0===l)break;
var n=a(k,b,c)-h,k=k-n/l}h=k}else if(0===l)h=k;else{var k=m,m=m+.1,f=0;do n=k+(m-k)/2,l=a(n,b,c)-h,0<l?m=n:k=n;while(1e-7<Math.abs(l)&&10>++f);h=n}return a(h,d,e)}}}}(),N=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,
.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},c={linear:y(.25,.25,.75,.75)},e={},l;for(l in d)e.type=l,d[e.type].forEach(function(a){return function(d,
e){c["ease"+a.type+b[e]]=g.fnc(d)?d:y.apply($jscomp$this,d)}}(e)),e={type:e.type};return c}(),ia={css:function(a,b,d){return a.style[b]=d},attribute:function(a,b,d){return a.setAttribute(b,d)},object:function(a,b,d){return a[b]=d},transform:function(a,b,d,c,e){c[e]||(c[e]=[]);c[e].push(b+"("+d+")")}},q=[],z=0,ja=function(){function a(){z=requestAnimationFrame(b)}function b(b){var c=q.length;if(c){for(var d=0;d<c;)q[d]&&q[d].tick(b),d++;a()}else cancelAnimationFrame(z),z=0}return a}();n.version="2.0.2";
n.speed=1;n.running=q;n.remove=function(a){a=M(a);for(var b=q.length;b--;)for(var d=q[b],c=d.animations,e=c.length;e--;)F(a,c[e].animatable.target)&&(c.splice(e,1),c.length||d.pause())};n.getValue=J;n.path=function(a,b){var d=g.str(a)?v(a)[0]:a,c=b||100;return function(a){return{el:d,property:a,totalLength:d.getTotalLength()*(c/100)}}};n.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};n.bezier=y;n.easings=N;n.timeline=function(a){var b=n(a);b.pause();
b.duration=0;b.add=function(a){b.children.forEach(function(a){a.began=!0;a.completed=!0});w(a).forEach(function(a){var c=b.duration,d=a.offset;a.autoplay=!1;a.offset=g.und(d)?c:K(d,c);b.seek(a.offset);a=n(a);a.duration>c&&(b.duration=a.duration);a.began=!0;b.children.push(a)});b.reset();b.seek(0);b.autoplay&&b.restart();return b};return b};n.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return n});
},{}],2:[function(require,module,exports){
/* MIT license */
var cssKeywords = require('color-name');

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

},{"color-name":5}],3:[function(require,module,exports){
var conversions = require('./conversions');
var route = require('./route');

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;

},{"./conversions":2,"./route":4}],4:[function(require,module,exports){
var conversions = require('./conversions');

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};


},{"./conversions":2}],5:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],6:[function(require,module,exports){
/* MIT license */
var colorNames = require('color-name');
var swizzle = require('simple-swizzle');

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}

},{"color-name":5,"simple-swizzle":229}],7:[function(require,module,exports){
'use strict';

var colorString = require('color-string');
var convert = require('color-convert');

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = this.rgb();
		var color2 = mixinColor.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;

},{"color-convert":3,"color-string":6}],8:[function(require,module,exports){
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

},{}],9:[function(require,module,exports){
var isFunction = require('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":11}],10:[function(require,module,exports){
var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

},{}],11:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],12:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":107,"./_root":152}],13:[function(require,module,exports){
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":116,"./_hashDelete":117,"./_hashGet":118,"./_hashHas":119,"./_hashSet":120}],14:[function(require,module,exports){
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":132,"./_listCacheDelete":133,"./_listCacheGet":134,"./_listCacheHas":135,"./_listCacheSet":136}],15:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":107,"./_root":152}],16:[function(require,module,exports){
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":137,"./_mapCacheDelete":138,"./_mapCacheGet":139,"./_mapCacheHas":140,"./_mapCacheSet":141}],17:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":107,"./_root":152}],18:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":107,"./_root":152}],19:[function(require,module,exports){
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":16,"./_setCacheAdd":153,"./_setCacheHas":154}],20:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":14,"./_stackClear":158,"./_stackDelete":159,"./_stackGet":160,"./_stackHas":161,"./_stackSet":162}],21:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":152}],22:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":152}],23:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":107,"./_root":152}],24:[function(require,module,exports){
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;

},{}],25:[function(require,module,exports){
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;

},{}],26:[function(require,module,exports){
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

},{}],27:[function(require,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],28:[function(require,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],29:[function(require,module,exports){
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":71,"./_isIndex":125,"./isArguments":192,"./isArray":193,"./isBuffer":196,"./isTypedArray":207}],30:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],31:[function(require,module,exports){
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],32:[function(require,module,exports){
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],33:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],34:[function(require,module,exports){
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;

},{}],35:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

},{"./_baseAssignValue":39,"./eq":177}],36:[function(require,module,exports){
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":177}],37:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keys = require('./keys');

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

},{"./_copyObject":88,"./keys":209}],38:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

},{"./_copyObject":88,"./keysIn":210}],39:[function(require,module,exports){
var defineProperty = require('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":98}],40:[function(require,module,exports){
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;

},{}],41:[function(require,module,exports){
var Stack = require('./_Stack'),
    arrayEach = require('./_arrayEach'),
    assignValue = require('./_assignValue'),
    baseAssign = require('./_baseAssign'),
    baseAssignIn = require('./_baseAssignIn'),
    cloneBuffer = require('./_cloneBuffer'),
    copyArray = require('./_copyArray'),
    copySymbols = require('./_copySymbols'),
    copySymbolsIn = require('./_copySymbolsIn'),
    getAllKeys = require('./_getAllKeys'),
    getAllKeysIn = require('./_getAllKeysIn'),
    getTag = require('./_getTag'),
    initCloneArray = require('./_initCloneArray'),
    initCloneByTag = require('./_initCloneByTag'),
    initCloneObject = require('./_initCloneObject'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isObject = require('./isObject'),
    keys = require('./keys');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

},{"./_Stack":20,"./_arrayEach":27,"./_assignValue":35,"./_baseAssign":37,"./_baseAssignIn":38,"./_cloneBuffer":80,"./_copyArray":87,"./_copySymbols":89,"./_copySymbolsIn":90,"./_getAllKeys":103,"./_getAllKeysIn":104,"./_getTag":112,"./_initCloneArray":121,"./_initCloneByTag":122,"./_initCloneObject":123,"./isArray":193,"./isBuffer":196,"./isObject":202,"./keys":209}],42:[function(require,module,exports){
var isObject = require('./isObject');

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;

},{"./isObject":202}],43:[function(require,module,exports){
var baseForOwn = require('./_baseForOwn'),
    createBaseEach = require('./_createBaseEach');

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./_baseForOwn":48,"./_createBaseEach":93}],44:[function(require,module,exports){
var baseEach = require('./_baseEach');

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

},{"./_baseEach":43}],45:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],46:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    isFlattenable = require('./_isFlattenable');

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

},{"./_arrayPush":31,"./_isFlattenable":124}],47:[function(require,module,exports){
var createBaseFor = require('./_createBaseFor');

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":94}],48:[function(require,module,exports){
var baseFor = require('./_baseFor'),
    keys = require('./keys');

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"./_baseFor":47,"./keys":209}],49:[function(require,module,exports){
var castPath = require('./_castPath'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./_castPath":77,"./_toKey":166}],50:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":31,"./isArray":193}],51:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":21,"./_getRawTag":109,"./_objectToString":149}],52:[function(require,module,exports){
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

},{}],53:[function(require,module,exports){
var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

},{"./_baseFindIndex":45,"./_baseIsNaN":58,"./_strictIndexOf":163}],54:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":51,"./isObjectLike":203}],55:[function(require,module,exports){
var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":56,"./isObjectLike":203}],56:[function(require,module,exports){
var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isTypedArray = require('./isTypedArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":20,"./_equalArrays":99,"./_equalByTag":100,"./_equalObjects":101,"./_getTag":112,"./isArray":193,"./isBuffer":196,"./isTypedArray":207}],57:[function(require,module,exports){
var Stack = require('./_Stack'),
    baseIsEqual = require('./_baseIsEqual');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./_Stack":20,"./_baseIsEqual":55}],58:[function(require,module,exports){
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

},{}],59:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./_isMasked":129,"./_toSource":167,"./isFunction":199,"./isObject":202}],60:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":51,"./isLength":200,"./isObjectLike":203}],61:[function(require,module,exports){
var baseMatches = require('./_baseMatches'),
    baseMatchesProperty = require('./_baseMatchesProperty'),
    identity = require('./identity'),
    isArray = require('./isArray'),
    property = require('./property');

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

},{"./_baseMatches":64,"./_baseMatchesProperty":65,"./identity":189,"./isArray":193,"./property":214}],62:[function(require,module,exports){
var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":130,"./_nativeKeys":146}],63:[function(require,module,exports){
var isObject = require('./isObject'),
    isPrototype = require('./_isPrototype'),
    nativeKeysIn = require('./_nativeKeysIn');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

},{"./_isPrototype":130,"./_nativeKeysIn":147,"./isObject":202}],64:[function(require,module,exports){
var baseIsMatch = require('./_baseIsMatch'),
    getMatchData = require('./_getMatchData'),
    matchesStrictComparable = require('./_matchesStrictComparable');

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

},{"./_baseIsMatch":57,"./_getMatchData":106,"./_matchesStrictComparable":143}],65:[function(require,module,exports){
var baseIsEqual = require('./_baseIsEqual'),
    get = require('./get'),
    hasIn = require('./hasIn'),
    isKey = require('./_isKey'),
    isStrictComparable = require('./_isStrictComparable'),
    matchesStrictComparable = require('./_matchesStrictComparable'),
    toKey = require('./_toKey');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

},{"./_baseIsEqual":55,"./_isKey":127,"./_isStrictComparable":131,"./_matchesStrictComparable":143,"./_toKey":166,"./get":186,"./hasIn":187}],66:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],67:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

},{"./_baseGet":49}],68:[function(require,module,exports){
var identity = require('./identity'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

},{"./_overRest":151,"./_setToString":156,"./identity":189}],69:[function(require,module,exports){
var constant = require('./constant'),
    defineProperty = require('./_defineProperty'),
    identity = require('./identity');

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

},{"./_defineProperty":98,"./constant":172,"./identity":189}],70:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],71:[function(require,module,exports){
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],72:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":21,"./_arrayMap":30,"./isArray":193,"./isSymbol":206}],73:[function(require,module,exports){
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],74:[function(require,module,exports){
var arrayMap = require('./_arrayMap');

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;

},{"./_arrayMap":30}],75:[function(require,module,exports){
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],76:[function(require,module,exports){
var identity = require('./identity');

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;

},{"./identity":189}],77:[function(require,module,exports){
var isArray = require('./isArray'),
    isKey = require('./_isKey'),
    stringToPath = require('./_stringToPath'),
    toString = require('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

},{"./_isKey":127,"./_stringToPath":165,"./isArray":193,"./toString":222}],78:[function(require,module,exports){
var baseSlice = require('./_baseSlice');

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;

},{"./_baseSlice":70}],79:[function(require,module,exports){
var Uint8Array = require('./_Uint8Array');

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

},{"./_Uint8Array":22}],80:[function(require,module,exports){
var root = require('./_root');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

},{"./_root":152}],81:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer');

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

},{"./_cloneArrayBuffer":79}],82:[function(require,module,exports){
var addMapEntry = require('./_addMapEntry'),
    arrayReduce = require('./_arrayReduce'),
    mapToArray = require('./_mapToArray');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;

},{"./_addMapEntry":24,"./_arrayReduce":32,"./_mapToArray":142}],83:[function(require,module,exports){
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

},{}],84:[function(require,module,exports){
var addSetEntry = require('./_addSetEntry'),
    arrayReduce = require('./_arrayReduce'),
    setToArray = require('./_setToArray');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;

},{"./_addSetEntry":25,"./_arrayReduce":32,"./_setToArray":155}],85:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

},{"./_Symbol":21}],86:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer');

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":79}],87:[function(require,module,exports){
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

},{}],88:[function(require,module,exports){
var assignValue = require('./_assignValue'),
    baseAssignValue = require('./_baseAssignValue');

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

},{"./_assignValue":35,"./_baseAssignValue":39}],89:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    getSymbols = require('./_getSymbols');

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

},{"./_copyObject":88,"./_getSymbols":110}],90:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    getSymbolsIn = require('./_getSymbolsIn');

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

},{"./_copyObject":88,"./_getSymbolsIn":111}],91:[function(require,module,exports){
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":152}],92:[function(require,module,exports){
var baseRest = require('./_baseRest'),
    isIterateeCall = require('./_isIterateeCall');

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"./_baseRest":68,"./_isIterateeCall":126}],93:[function(require,module,exports){
var isArrayLike = require('./isArrayLike');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./isArrayLike":194}],94:[function(require,module,exports){
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],95:[function(require,module,exports){
var castSlice = require('./_castSlice'),
    hasUnicode = require('./_hasUnicode'),
    stringToArray = require('./_stringToArray'),
    toString = require('./toString');

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;

},{"./_castSlice":78,"./_hasUnicode":115,"./_stringToArray":164,"./toString":222}],96:[function(require,module,exports){
var baseIteratee = require('./_baseIteratee'),
    isArrayLike = require('./isArrayLike'),
    keys = require('./keys');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;

},{"./_baseIteratee":61,"./isArrayLike":194,"./keys":209}],97:[function(require,module,exports){
var eq = require('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

module.exports = customDefaultsAssignIn;

},{"./eq":177}],98:[function(require,module,exports){
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":107}],99:[function(require,module,exports){
var SetCache = require('./_SetCache'),
    arraySome = require('./_arraySome'),
    cacheHas = require('./_cacheHas');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

},{"./_SetCache":19,"./_arraySome":33,"./_cacheHas":75}],100:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    eq = require('./eq'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

},{"./_Symbol":21,"./_Uint8Array":22,"./_equalArrays":99,"./_mapToArray":142,"./_setToArray":155,"./eq":177}],101:[function(require,module,exports){
var getAllKeys = require('./_getAllKeys');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

},{"./_getAllKeys":103}],102:[function(require,module,exports){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],103:[function(require,module,exports){
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":50,"./_getSymbols":110,"./keys":209}],104:[function(require,module,exports){
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbolsIn = require('./_getSymbolsIn'),
    keysIn = require('./keysIn');

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

},{"./_baseGetAllKeys":50,"./_getSymbolsIn":111,"./keysIn":210}],105:[function(require,module,exports){
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":128}],106:[function(require,module,exports){
var isStrictComparable = require('./_isStrictComparable'),
    keys = require('./keys');

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;

},{"./_isStrictComparable":131,"./keys":209}],107:[function(require,module,exports){
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":59,"./_getValue":113}],108:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":150}],109:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":21}],110:[function(require,module,exports){
var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

},{"./_arrayFilter":28,"./stubArray":216}],111:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    getPrototype = require('./_getPrototype'),
    getSymbols = require('./_getSymbols'),
    stubArray = require('./stubArray');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

},{"./_arrayPush":31,"./_getPrototype":108,"./_getSymbols":110,"./stubArray":216}],112:[function(require,module,exports){
var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_DataView":12,"./_Map":15,"./_Promise":17,"./_Set":18,"./_WeakMap":23,"./_baseGetTag":51,"./_toSource":167}],113:[function(require,module,exports){
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],114:[function(require,module,exports){
var castPath = require('./_castPath'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isIndex = require('./_isIndex'),
    isLength = require('./isLength'),
    toKey = require('./_toKey');

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;

},{"./_castPath":77,"./_isIndex":125,"./_toKey":166,"./isArguments":192,"./isArray":193,"./isLength":200}],115:[function(require,module,exports){
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;

},{}],116:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":145}],117:[function(require,module,exports){
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],118:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":145}],119:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":145}],120:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":145}],121:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

},{}],122:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer'),
    cloneDataView = require('./_cloneDataView'),
    cloneMap = require('./_cloneMap'),
    cloneRegExp = require('./_cloneRegExp'),
    cloneSet = require('./_cloneSet'),
    cloneSymbol = require('./_cloneSymbol'),
    cloneTypedArray = require('./_cloneTypedArray');

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

},{"./_cloneArrayBuffer":79,"./_cloneDataView":81,"./_cloneMap":82,"./_cloneRegExp":83,"./_cloneSet":84,"./_cloneSymbol":85,"./_cloneTypedArray":86}],123:[function(require,module,exports){
var baseCreate = require('./_baseCreate'),
    getPrototype = require('./_getPrototype'),
    isPrototype = require('./_isPrototype');

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;

},{"./_baseCreate":42,"./_getPrototype":108,"./_isPrototype":130}],124:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray');

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

},{"./_Symbol":21,"./isArguments":192,"./isArray":193}],125:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],126:[function(require,module,exports){
var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

},{"./_isIndex":125,"./eq":177,"./isArrayLike":194,"./isObject":202}],127:[function(require,module,exports){
var isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

},{"./isArray":193,"./isSymbol":206}],128:[function(require,module,exports){
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],129:[function(require,module,exports){
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":91}],130:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],131:[function(require,module,exports){
var isObject = require('./isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"./isObject":202}],132:[function(require,module,exports){
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],133:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":36}],134:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":36}],135:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":36}],136:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":36}],137:[function(require,module,exports){
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":13,"./_ListCache":14,"./_Map":15}],138:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":105}],139:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":105}],140:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":105}],141:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":105}],142:[function(require,module,exports){
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],143:[function(require,module,exports){
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;

},{}],144:[function(require,module,exports){
var memoize = require('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

},{"./memoize":212}],145:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":107}],146:[function(require,module,exports){
var overArg = require('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":150}],147:[function(require,module,exports){
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

},{}],148:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":102}],149:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],150:[function(require,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],151:[function(require,module,exports){
var apply = require('./_apply');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

},{"./_apply":26}],152:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":102}],153:[function(require,module,exports){
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],154:[function(require,module,exports){
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],155:[function(require,module,exports){
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],156:[function(require,module,exports){
var baseSetToString = require('./_baseSetToString'),
    shortOut = require('./_shortOut');

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

},{"./_baseSetToString":69,"./_shortOut":157}],157:[function(require,module,exports){
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

},{}],158:[function(require,module,exports){
var ListCache = require('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":14}],159:[function(require,module,exports){
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],160:[function(require,module,exports){
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],161:[function(require,module,exports){
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],162:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":14,"./_Map":15,"./_MapCache":16}],163:[function(require,module,exports){
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

},{}],164:[function(require,module,exports){
var asciiToArray = require('./_asciiToArray'),
    hasUnicode = require('./_hasUnicode'),
    unicodeToArray = require('./_unicodeToArray');

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;

},{"./_asciiToArray":34,"./_hasUnicode":115,"./_unicodeToArray":168}],165:[function(require,module,exports){
var memoizeCapped = require('./_memoizeCapped');

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

},{"./_memoizeCapped":144}],166:[function(require,module,exports){
var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

},{"./isSymbol":206}],167:[function(require,module,exports){
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],168:[function(require,module,exports){
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;

},{}],169:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    createAssigner = require('./_createAssigner'),
    keysIn = require('./keysIn');

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;

},{"./_copyObject":88,"./_createAssigner":92,"./keysIn":210}],170:[function(require,module,exports){
var toString = require('./toString'),
    upperFirst = require('./upperFirst');

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;

},{"./toString":222,"./upperFirst":225}],171:[function(require,module,exports){
var baseClone = require('./_baseClone');

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;

},{"./_baseClone":41}],172:[function(require,module,exports){
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;

},{}],173:[function(require,module,exports){
var isObject = require('./isObject'),
    now = require('./now'),
    toNumber = require('./toNumber');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

},{"./isObject":202,"./now":213,"./toNumber":221}],174:[function(require,module,exports){
var apply = require('./_apply'),
    assignInWith = require('./assignInWith'),
    baseRest = require('./_baseRest'),
    customDefaultsAssignIn = require('./_customDefaultsAssignIn');

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;

},{"./_apply":26,"./_baseRest":68,"./_customDefaultsAssignIn":97,"./assignInWith":169}],175:[function(require,module,exports){
module.exports = require('./forEach');

},{"./forEach":185}],176:[function(require,module,exports){
var baseClamp = require('./_baseClamp'),
    baseToString = require('./_baseToString'),
    toInteger = require('./toInteger'),
    toString = require('./toString');

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

module.exports = endsWith;

},{"./_baseClamp":40,"./_baseToString":72,"./toInteger":220,"./toString":222}],177:[function(require,module,exports){
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],178:[function(require,module,exports){
var arrayFilter = require('./_arrayFilter'),
    baseFilter = require('./_baseFilter'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;

},{"./_arrayFilter":28,"./_baseFilter":44,"./_baseIteratee":61,"./isArray":193}],179:[function(require,module,exports){
var createFind = require('./_createFind'),
    findIndex = require('./findIndex');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;

},{"./_createFind":96,"./findIndex":180}],180:[function(require,module,exports){
var baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee'),
    toInteger = require('./toInteger');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;

},{"./_baseFindIndex":45,"./_baseIteratee":61,"./toInteger":220}],181:[function(require,module,exports){
var createFind = require('./_createFind'),
    findLastIndex = require('./findLastIndex');

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;

},{"./_createFind":96,"./findLastIndex":182}],182:[function(require,module,exports){
var baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee'),
    toInteger = require('./toInteger');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;

},{"./_baseFindIndex":45,"./_baseIteratee":61,"./toInteger":220}],183:[function(require,module,exports){
module.exports = require('./head');

},{"./head":188}],184:[function(require,module,exports){
var baseFlatten = require('./_baseFlatten');

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

},{"./_baseFlatten":46}],185:[function(require,module,exports){
var arrayEach = require('./_arrayEach'),
    baseEach = require('./_baseEach'),
    castFunction = require('./_castFunction'),
    isArray = require('./isArray');

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;

},{"./_arrayEach":27,"./_baseEach":43,"./_castFunction":76,"./isArray":193}],186:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

},{"./_baseGet":49}],187:[function(require,module,exports){
var baseHasIn = require('./_baseHasIn'),
    hasPath = require('./_hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

},{"./_baseHasIn":52,"./_hasPath":114}],188:[function(require,module,exports){
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;

},{}],189:[function(require,module,exports){
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],190:[function(require,module,exports){
var baseIndexOf = require('./_baseIndexOf'),
    isArrayLike = require('./isArrayLike'),
    isString = require('./isString'),
    toInteger = require('./toInteger'),
    values = require('./values');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;

},{"./_baseIndexOf":53,"./isArrayLike":194,"./isString":205,"./toInteger":220,"./values":226}],191:[function(require,module,exports){
var baseIndexOf = require('./_baseIndexOf'),
    toInteger = require('./toInteger');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = indexOf;

},{"./_baseIndexOf":53,"./toInteger":220}],192:[function(require,module,exports){
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":54,"./isObjectLike":203}],193:[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],194:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":199,"./isLength":200}],195:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

},{"./isArrayLike":194,"./isObjectLike":203}],196:[function(require,module,exports){
var root = require('./_root'),
    stubFalse = require('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":152,"./stubFalse":217}],197:[function(require,module,exports){
var isObjectLike = require('./isObjectLike'),
    isPlainObject = require('./isPlainObject');

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;

},{"./isObjectLike":203,"./isPlainObject":204}],198:[function(require,module,exports){
var baseIsEqual = require('./_baseIsEqual');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

},{"./_baseIsEqual":55}],199:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":51,"./isObject":202}],200:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],201:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;

},{"./_baseGetTag":51,"./isObjectLike":203}],202:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],203:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],204:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":51,"./_getPrototype":108,"./isObjectLike":203}],205:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;

},{"./_baseGetTag":51,"./isArray":193,"./isObjectLike":203}],206:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":51,"./isObjectLike":203}],207:[function(require,module,exports){
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":60,"./_baseUnary":73,"./_nodeUtil":148}],208:[function(require,module,exports){
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;

},{}],209:[function(require,module,exports){
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":29,"./_baseKeys":62,"./isArrayLike":194}],210:[function(require,module,exports){
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeysIn = require('./_baseKeysIn'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

},{"./_arrayLikeKeys":29,"./_baseKeysIn":63,"./isArrayLike":194}],211:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],212:[function(require,module,exports){
var MapCache = require('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"./_MapCache":16}],213:[function(require,module,exports){
var root = require('./_root');

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;

},{"./_root":152}],214:[function(require,module,exports){
var baseProperty = require('./_baseProperty'),
    basePropertyDeep = require('./_basePropertyDeep'),
    isKey = require('./_isKey'),
    toKey = require('./_toKey');

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

},{"./_baseProperty":66,"./_basePropertyDeep":67,"./_isKey":127,"./_toKey":166}],215:[function(require,module,exports){
var baseClamp = require('./_baseClamp'),
    baseToString = require('./_baseToString'),
    toInteger = require('./toInteger'),
    toString = require('./toString');

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString(string);
  position = position == null
    ? 0
    : baseClamp(toInteger(position), 0, string.length);

  target = baseToString(target);
  return string.slice(position, position + target.length) == target;
}

module.exports = startsWith;

},{"./_baseClamp":40,"./_baseToString":72,"./toInteger":220,"./toString":222}],216:[function(require,module,exports){
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],217:[function(require,module,exports){
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],218:[function(require,module,exports){
var debounce = require('./debounce'),
    isObject = require('./isObject');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;

},{"./debounce":173,"./isObject":202}],219:[function(require,module,exports){
var toNumber = require('./toNumber');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

},{"./toNumber":221}],220:[function(require,module,exports){
var toFinite = require('./toFinite');

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;

},{"./toFinite":219}],221:[function(require,module,exports){
var isObject = require('./isObject'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isObject":202,"./isSymbol":206}],222:[function(require,module,exports){
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":72}],223:[function(require,module,exports){
var arrayFilter = require('./_arrayFilter'),
    arrayMap = require('./_arrayMap'),
    baseProperty = require('./_baseProperty'),
    baseTimes = require('./_baseTimes'),
    isArrayLikeObject = require('./isArrayLikeObject');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter(array, function(group) {
    if (isArrayLikeObject(group)) {
      length = nativeMax(group.length, length);
      return true;
    }
  });
  return baseTimes(length, function(index) {
    return arrayMap(array, baseProperty(index));
  });
}

module.exports = unzip;

},{"./_arrayFilter":28,"./_arrayMap":30,"./_baseProperty":66,"./_baseTimes":71,"./isArrayLikeObject":195}],224:[function(require,module,exports){
var apply = require('./_apply'),
    arrayMap = require('./_arrayMap'),
    unzip = require('./unzip');

/**
 * This method is like `_.unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * _.unzipWith(zipped, _.add);
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array && array.length)) {
    return [];
  }
  var result = unzip(array);
  if (iteratee == null) {
    return result;
  }
  return arrayMap(result, function(group) {
    return apply(iteratee, undefined, group);
  });
}

module.exports = unzipWith;

},{"./_apply":26,"./_arrayMap":30,"./unzip":223}],225:[function(require,module,exports){
var createCaseFirst = require('./_createCaseFirst');

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;

},{"./_createCaseFirst":95}],226:[function(require,module,exports){
var baseValues = require('./_baseValues'),
    keys = require('./keys');

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;

},{"./_baseValues":74,"./keys":209}],227:[function(require,module,exports){
var baseRest = require('./_baseRest'),
    unzipWith = require('./unzipWith');

/**
 * This method is like `_.zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
 *   return a + b + c;
 * });
 * // => [111, 222]
 */
var zipWith = baseRest(function(arrays) {
  var length = arrays.length,
      iteratee = length > 1 ? arrays[length - 1] : undefined;

  iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
  return unzipWith(arrays, iteratee);
});

module.exports = zipWith;

},{"./_baseRest":68,"./unzipWith":224}],228:[function(require,module,exports){
var trim = require('trim')
  , forEach = require('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":9,"trim":231}],229:[function(require,module,exports){
'use strict';

var isArrayish = require('is-arrayish');

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};

},{"is-arrayish":230}],230:[function(require,module,exports){
'use strict';

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

},{}],231:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],232:[function(require,module,exports){
"use strict";
var window = require("global/window")
var isFunction = require("is-function")
var parseHeaders = require("parse-headers")
var xtend = require("xtend")

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    if (xhr.responseType === "document") {
        return xhr.responseXML
    }
    var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
    if (xhr.responseType === "" && !firefoxBugTakenEffect) {
        return xhr.responseXML
    }

    return null
}

function noop() {}

},{"global/window":10,"is-function":11,"parse-headers":228,"xtend":233}],233:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],234:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";

// Zimplist Depedencies


/*
 Encoder commands :

 You will need FFMPEG with recent libvpx and libH264 support compiled

 // for the fallback
 ffmpeg -i dancer.mov -vf "split [rgb][alpha]; [alpha] alphaextract [alpha]; [rgb] pad=width=iw:height=2*ih:x=0:y=0 [rgb]; [rgb][alpha] overlay=x=0:y=h, scale=720:-1" -c:v libx264 -profile:v main -level 5 -pix_fmt yuv420p -crf 21 -movflags +faststart -y output.mp4


 // native VP9 alpha channel
 ffmpeg -i papillons.mov -r 25 -c:v libvpx-vp9 -b:v 500k -crf 20 -quality best -speed 0 -threads 8 -tile-columns 3 -pix_fmt yuva420p -y output.webm

 */

// Hidden consts

/**
 *
 */
var AlphaVideo = function (_BaseView) {
    _inherits(AlphaVideo, _BaseView);

    function AlphaVideo(el, options) {
        _classCallCheck(this, AlphaVideo);

        /**
         * The native video player
         *
         * @type {Element}
         */
        var _this = _possibleConstructorReturn(this, (AlphaVideo.__proto__ || Object.getPrototypeOf(AlphaVideo)).call(this, el, options));

        _this.nativeVideo = _this.el.querySelector('video');

        // Detect if we can use transparent VP9 encoding
        _this.useFallback = !(_this.nativeVideo.canPlayType('video/webm; codecs=vp9') === 'probably');

        // TODO add 'noFallback' option

        /**
         * Base source path. resolotion and format specifiers are appended when detected
         * @type {string}
         */
        _this.srcBase = _this.nativeVideo.getAttribute('data-src');

        if (_this.useFallback) {

            /**
             * The scale of the fall back. Use to scale up smaller videos that are easier to paint
             * @type {Number}
             */
            _this.fallbackScale = parseFloat(_this.nativeVideo.getAttribute('data-fallback-scale')) || 1;

            _this.el.classList.add('fallback');

            _this.nativeVideo.src = _this.srcBase + '_small.mp4';

            if (_this.nativeVideo.videoWidth && _this.nativeVideo.videoHeight && _this.nativeVideo.duration) {
                _this._createRenderer();
            } else {
                _this.addDomEvent('loadedmetadata', _this._nativeVideoMetadataHandler, _this.nativeVideo);
            }

            _this.addDomEvent('playing', _this._nativeVideoPlayingHandler, _this.nativeVideo);
            _this.addDomEvent('pause', _this._nativeVideoPauseHandler, _this.nativeVideo);

            // Video might already be loaded
            if (!_this.nativeVideo.paused) {
                _this._createRenderer();
                _this._startRenderLoop();
            }
        } else {

            _this.nativeVideo.src = _this.srcBase + '_full.webm';
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(AlphaVideo, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {
            _get(AlphaVideo.prototype.__proto__ || Object.getPrototypeOf(AlphaVideo.prototype), 'breakpointChanged', this).call(this, breakpoint, previousBreakpoint);
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_createRenderer',
        value: function _createRenderer() {

            if (!this._renderCanvas) {
                var renderCanvas = document.createElement('canvas');
                renderCanvas.width = this.nativeVideo.videoWidth;
                renderCanvas.height = this.nativeVideo.videoHeight / 2;

                var alphaCanvas = document.createElement('canvas');
                alphaCanvas.width = this.nativeVideo.videoWidth;
                alphaCanvas.height = this.nativeVideo.videoHeight / 2;

                this._renderCanvas = renderCanvas;
                this._renderContext = renderCanvas.getContext('2d');

                this._alphaContext = alphaCanvas;
                this._alphaContext = alphaCanvas.getContext('2d');

                // Apply scale
                _Style2.default.set(this._renderCanvas, { transform: 'scale(' + this.fallbackScale + ')' });

                _Style2.default.set(this.el, {
                    width: this.nativeVideo.videoWidth * this.fallbackScale,
                    height: this.nativeVideo.videoHeight / 2 * this.fallbackScale
                });

                this.el.appendChild(renderCanvas);
            }
        }
    }, {
        key: '_render',
        value: function _render() {

            var frameWidth = this.nativeVideo.videoWidth;
            var frameHeight = this.nativeVideo.videoHeight / 2;

            // Copy RGB Data
            this._renderContext.drawImage(this.nativeVideo, 0, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);

            // Copy Alpha Data
            this._alphaContext.drawImage(this.nativeVideo, 0, frameHeight, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);

            var rgbData = this._renderContext.getImageData(0, 0, frameWidth, frameHeight);
            var alphaData = this._alphaContext.getImageData(0, 0, frameWidth, frameHeight);

            var rgbDataLen = rgbData.data.length;

            // Get grayscale value from alpha data
            for (var i = 0; i < rgbDataLen - 3; i += 4) {

                var aR = alphaData.data[i];
                var aB = alphaData.data[i + 1];
                var aG = alphaData.data[i + 2];

                // Set rgba's Alpha value to the grayscale value
                rgbData.data[i + 3] = (aR + aB + aG) / 3; // Average
            }

            this._renderContext.putImageData(rgbData, 0, 0);
        }
    }, {
        key: '_startRenderLoop',
        value: function _startRenderLoop() {
            var _this2 = this;

            if (!this._queuedFrame) {
                this._queuedFrame = window.requestAnimationFrame(function () {
                    _this2._queuedFrame = null;
                    _this2._render();
                    _this2._startRenderLoop();
                });
            }
        }
    }, {
        key: '_stopRenderLoop',
        value: function _stopRenderLoop() {
            console.log('stop render');
            if (this._queuedFrame) {
                window.cancelAnimationFrame(this.queuedFrame);
            }
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_nativeVideoMetadataHandler',
        value: function _nativeVideoMetadataHandler(event) {
            this._createRenderer();
        }
    }, {
        key: '_nativeVideoPlayingHandler',
        value: function _nativeVideoPlayingHandler(event) {
            if (this.useFallback) {
                this._startRenderLoop();
            }
        }
    }, {
        key: '_nativeVideoPauseHandler',
        value: function _nativeVideoPauseHandler(event) {
            if (this.useFallback) {
                this._stopRenderLoop();
            }
        }
    }]);

    return AlphaVideo;
}(_BaseView3.default);

exports.default = AlphaVideo;

},{"zimplist/display/BaseView":258,"zimplist/utils/Style":274}],235:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _Touch = require('zimplist/input/Touch');

var _Touch2 = _interopRequireDefault(_Touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Zimplist Dependencies


// import getDocumentRect from 'zimplist/display/getDocumentRect';

var CareerSlider = function (_BaseView) {
    _inherits(CareerSlider, _BaseView);

    function CareerSlider(el, options) {
        _classCallCheck(this, CareerSlider);

        var _this = _possibleConstructorReturn(this, (CareerSlider.__proto__ || Object.getPrototypeOf(CareerSlider)).call(this, el, { breakpoints: ['xxs', 's', 'm'] }));

        _this.itemContainer = _this.el.querySelector('.slider-item-container');

        _this.items = Array.from(_this.el.querySelectorAll('.slider-item'));

        _this.currentIndex = 0;
        _this.countVisibleItems();

        _this.gotoItem(0);

        // setup DOM events
        _this.addDomEvent('click', _this._navClickHandler, 'button');

        // Setup touch detection
        _this._touchManager = new _Touch2.default(_this.el);

        _this._touchManager.on('swipe', function (event) {
            var itemIndex = _this.currentIndex + (event.distance.x > 0 ? -1 : 1);
            itemIndex = Math.max(0, Math.min(_this.items.length - 1, itemIndex));

            _this.gotoItem(itemIndex);
        });

        return _this;
    }

    _createClass(CareerSlider, [{
        key: 'countVisibleItems',
        value: function countVisibleItems() {
            switch (this.currentBreakpoint.name) {
                case 'xxs':
                    this.visibleItems = 1;
                    break;
                case 's':
                    this.visibleItems = 2;
                    break;
                case 'm':
                    this.visibleItems = 3;
                    break;
            }
        }
    }, {
        key: 'resize',
        value: function resize() {

            // measure item width by getting
            this.itemWidth = this.items[1].offsetLeft;
        }
    }, {
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {
            _get(CareerSlider.prototype.__proto__ || Object.getPrototypeOf(CareerSlider.prototype), 'breakpointChanged', this).call(this, breakpoint, previousBreakpoint);
            this.countVisibleItems();
            this.gotoItem(this.currentIndex);
        }
    }, {
        key: 'gotoItem',
        value: function gotoItem(itemIndex) {
            var _this2 = this;

            _Style2.default.set(this.itemContainer, {
                transform: 'translateX(-' + itemIndex * this.itemWidth + 'px)'
            });

            // show hide elements
            this.items.forEach(function (item, i) {
                if (i >= itemIndex && i <= itemIndex + _this2.visibleItems - 1) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });

            // show/hide nav buttons
            if (itemIndex === 0) {
                this.el.classList.add('hide-prev');
                this.el.classList.remove('hide-next');
            } else if (itemIndex === this.items.length - this.visibleItems) {
                this.el.classList.remove('hide-prev');
                this.el.classList.add('hide-next');
            } else {
                this.el.classList.remove('hide-prev');
                this.el.classList.remove('hide-next');
            }

            this.currentIndex = itemIndex;
        }

        /*
         Event Handlers
          */

    }, {
        key: '_navClickHandler',
        value: function _navClickHandler(event) {
            var itemIndex = void 0;
            if (event.delegateTarget.classList.contains('prev')) {
                itemIndex = Math.max(0, this.currentIndex - 1);
            } else {
                itemIndex = Math.min(this.items.length - this.visibleItems, this.currentIndex + 1);
            }
            this.gotoItem(itemIndex);
        }
    }]);

    return CareerSlider;
}(_BaseView3.default);

exports.default = CareerSlider;

},{"zimplist/display/BaseView":258,"zimplist/input/Touch":269,"zimplist/utils/Style":274,"zimplist/utils/WindowManager":275}],236:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies

// UZIK Depedencies


// Local app Dependencies


/**
 * Select style link list
 */
var LinkSelect = function (_BaseView) {
    _inherits(LinkSelect, _BaseView);

    function LinkSelect(el, options) {
        _classCallCheck(this, LinkSelect);

        var _this = _possibleConstructorReturn(this, (LinkSelect.__proto__ || Object.getPrototypeOf(LinkSelect)).call(this, el, options));

        _this.addDomEvent('click', _this._labelClickHandler, '.label');
        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    /* ==========================
      Private Methods
      ========================== */

    /* ==========================
      Event Handlers
      ========================== */


    _createClass(LinkSelect, [{
        key: '_labelClickHandler',
        value: function _labelClickHandler(event) {

            if (this.el.classList.contains('expanded')) {

                this.el.classList.remove('expanded');
                this.trigger('close', {});
            } else {

                this.el.classList.add('expanded');
                this.trigger('open', {});
            }
        }
    }]);

    return LinkSelect;
}(_BaseView3.default);

exports.default = LinkSelect;

},{"zimplist/display/BaseView":258}],237:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zipWith = require('lodash/zipWith');

var _zipWith2 = _interopRequireDefault(_zipWith);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _YoutubePlayer = require('app/components/YoutubePlayer');

var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Depedencies


// Local app Dependencies


// Hidden consts

/**
 *
 */
var MediaGallery = function (_BaseView) {
    _inherits(MediaGallery, _BaseView);

    function MediaGallery(el, options) {
        _classCallCheck(this, MediaGallery);

        var _this = _possibleConstructorReturn(this, (MediaGallery.__proto__ || Object.getPrototypeOf(MediaGallery)).call(this, el, options));

        _this.visualContainer = _this.el.querySelector('.gallery-visual-animator');
        _this.textContainer = _this.el.querySelector('.gallery-text-content');

        _this.visualItems = Array.from(_this.visualContainer.querySelectorAll('.gallery-item'));
        _this.textItems = Array.from(_this.textContainer.querySelectorAll('.gallery-item-text'));

        _this.indexEl = _this.el.querySelector('.gallery-item-index > .value');

        // merge two arrays together into object
        _this.items = (0, _zipWith2.default)(_this.visualItems, _this.textItems, function (visual, text) {
            visual.classList.add('visible');
            return { visual: visual, text: text };
        });

        _this.currentIndex = 0;

        _this.textItems[_this.currentIndex].classList.add('current');

        _this.addDomEvent('click', _this._navClickHandler, '.gallery-nav button');

        _this.addDomEvent('click', _this._videoItemClickHandler, '.gallery-item.item-video');

        _this.resize();
        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(MediaGallery, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {}
    }, {
        key: 'resize',
        value: function resize() {

            // place all items in a row
            this.visualItems.forEach(function (item, i) {

                _Style2.default.set(item, { left: i * 100 + '%' });
            });
        }
    }, {
        key: 'gotoItem',
        value: function gotoItem(itemIndex) {
            if (itemIndex !== this.currentIndex) {
                var currentItem = this.items[this.currentIndex];
                var queuedItem = this.items[itemIndex];

                // get dirction of transition // TODO adapt for infinite slider
                var direction = itemIndex < this.currentIndex ? -1 : 1; // TODO use direction for sliding window effet

                var duration = Math.abs(itemIndex - this.currentIndex) * 500;

                (0, _animejs2.default)({
                    targets: this.visualContainer,
                    duration: duration,
                    translateX: -(itemIndex * 100) + '%',
                    easing: 'easeInOutCubic'
                });

                // Update texts
                this.textItems[this.currentIndex].classList.remove('current');
                this.textItems[itemIndex].classList.add('current');

                // update index
                this.indexEl.textContent = itemIndex + 1 + ' / ' + this.items.length;

                // Stp video player if it exists
                if (this.currentVideoPlayer) {
                    this.currentVideoPlayer.remove();
                    this.currentVideoPlayer = null;
                }

                // Swap references at the end
                this.currentIndex = itemIndex;
            }
        }

        /* ==========================
          Private Methods
          ========================== */

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_navClickHandler',
        value: function _navClickHandler(event) {
            var queuedItem = event.delegateTarget.classList.contains('prev') ? this.currentIndex - 1 : this.currentIndex + 1;

            // clamp values
            queuedItem = Math.max(0, Math.min(this.items.length - 1, queuedItem));

            this.gotoItem(queuedItem);
        }
    }, {
        key: '_videoItemClickHandler',
        value: function _videoItemClickHandler(event) {

            var videoContainer = document.createElement('div');
            videoContainer.className = 'youtube-player';

            var youtubePlayer = new _YoutubePlayer2.default(videoContainer, {
                videoId: event.delegateTarget.getAttribute('data-video-id'),
                autoPlay: true
            });

            this.currentVideoPlayer = youtubePlayer;

            // Append player to container
            event.delegateTarget.appendChild(youtubePlayer.el);
        }
    }]);

    return MediaGallery;
}(_BaseView3.default);

exports.default = MediaGallery;

},{"animejs":1,"app/components/YoutubePlayer":240,"lodash/zipWith":227,"zimplist/display/BaseView":258,"zimplist/utils/Style":274}],238:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Touch = require('zimplist/input/Touch');

var _Touch2 = _interopRequireDefault(_Touch);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Depedencies


// Local app Dependencies


// Hidden consts
var TRANSITION_SPEED = 1.25;

/**
 *
 */

var ProfileSlider = function (_BaseView) {
    _inherits(ProfileSlider, _BaseView);

    function ProfileSlider(el, options) {
        _classCallCheck(this, ProfileSlider);

        // Save DOM references
        var _this = _possibleConstructorReturn(this, (ProfileSlider.__proto__ || Object.getPrototypeOf(ProfileSlider)).call(this, el, { breakpoints: ['xxs', 'm'] }));

        _this._itemContainer = _this.el.querySelector('.item-container');
        _this._items = Array.from(_this._itemContainer.querySelectorAll('.career-profile'));

        // State vars
        _this.currentIndex = 0;
        _this.currentOffset = 0;

        // Touch handling
        _this._touchTracker = new _Touch2.default(_this.el);

        _this.listenTo(_this._touchTracker, 'move', _this._touchMoveHandler);
        _this.listenTo(_this._touchTracker, 'end', _this._touchEndHandler);

        _this.resize();

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(ProfileSlider, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoin) {

            if (breakpoint.name === 'm') {} else {}
        }
    }, {
        key: 'resize',
        value: function resize() {

            if (!this.minWidth('m')) {
                this._itemWidth = this._items[0].clientWidth;
                this._itemMargin = this._items[1].offsetLeft - this._items[0].offsetLeft - this._itemWidth;

                this._itemOffset = this._itemWidth + this._itemMargin;

                // offset container to maintain item centering
                var offset = (_WindowManager2.default.width - this._itemWidth) / 2;
                _Style2.default.set(this._itemContainer, { left: offset });
            } else {

                _Style2.default.set(this._itemContainer, { left: null, transform: null });

                // this._itemContainer.style.removeProperty('left');
            }
        }
    }, {
        key: 'gotoItem',
        value: function gotoItem(itemIndex) {
            var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


            // calc px offest for index
            var offset = -(itemIndex * this._itemOffset);

            // Duration relative to the distance to scroll
            var duration = Math.max(150, Math.abs(offset - this.currentOffset) * TRANSITION_SPEED); // at least 100ms to snap back from end

            if (animate) {
                (0, _animejs2.default)({
                    targets: this._itemContainer,
                    duration: duration,
                    translateX: offset,
                    easing: 'easeOutCubic'
                });
            } else {
                _Style2.default.set(this._itemContainer, { transform: 'translateX(' + offset + 'px)' });
            }

            // save state vars
            this.currentOffset = offset;
            this.currentIndex = itemIndex;
        }

        /* ==========================
          Private Methods
          ========================== */

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_touchMoveHandler',
        value: function _touchMoveHandler() {

            if (this.minWidth('m')) return;

            var distanceX = this._touchTracker.distanceX;
            var distanceY = this._touchTracker.distanceY;

            if (Math.abs(distanceX) > Math.abs(distanceY)) {
                var offset = this.currentOffset + distanceX;
                _Style2.default.set(this._itemContainer, { transform: 'translateX(' + offset + 'px)' });
            }
        }
    }, {
        key: '_touchEndHandler',
        value: function _touchEndHandler() {

            if (this.minWidth('m')) return;

            var distanceX = this._touchTracker.distanceX;
            var distanceY = this._touchTracker.distanceY;

            if (Math.abs(distanceX) > 30 && Math.abs(distanceX) > Math.abs(distanceY)) {

                var queuedIndex = distanceX > 0 ? this.currentIndex - 1 : this.currentIndex + 1;

                // Clamp to item range
                queuedIndex = Math.max(0, Math.min(this._items.length - 1, queuedIndex));

                this.gotoItem(queuedIndex);
            } else {
                // snap back to the current item if it hasn't moved much
                this.gotoItem(this.currentIndex);
            }
        }
    }]);

    return ProfileSlider;
}(_BaseView3.default);

exports.default = ProfileSlider;

},{"animejs":1,"zimplist/display/BaseView":258,"zimplist/input/Touch":269,"zimplist/utils/Style":274,"zimplist/utils/WindowManager":275}],239:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _getDocumentRect = require('zimplist/display/getDocumentRect');

var _getDocumentRect2 = _interopRequireDefault(_getDocumentRect);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Dependencies


// Local app Dependencies


// Hidden consts
var PATH_WIDTH_RATIO = 0.36;
var WAYPOINT_HEIGHT_RATIO = 0.6; // This is used because the way points visual centers aren't the whole dimensions center
var CUTOUT_PADDING = 10;
var SCROLL_PADDING = 266 + window.innerHeight * 0.2; // 266 = height of the header
var MASK_SPEED = 750;

/**
 *
 */

var ProgressPath = function (_BaseView) {
    _inherits(ProgressPath, _BaseView);

    function ProgressPath(el, options) {
        _classCallCheck(this, ProgressPath);

        // These are the elements that define the progress paths waypoints
        var _this = _possibleConstructorReturn(this, (ProgressPath.__proto__ || Object.getPrototypeOf(ProgressPath)).call(this, el, options));

        _this.waypoints = options.waypoints;

        // cutouts are elems that mask the renderers (in reality they go back and clear zones on the renderers)
        _this.cutouts = options.cutouts;

        // create scrolling Tracker for animation
        _this.currentMaskHeight = 0;

        _this._createPathsDOM();
        _this._render();

        // After first render start listening for events to trigger animated masks
        _this.listenTo(_WindowManager2.default, 'scroll', _this._scrollHandler);

        _this.breakpointChanged();
        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(ProgressPath, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {
            _get(ProgressPath.prototype.__proto__ || Object.getPrototypeOf(ProgressPath.prototype), 'breakpointChanged', this).call(this, breakpoint, previousBreakpoint);

            if (this.minWidth('s')) {
                this.currentMaskHeight = Math.max(this.currentMaskHeight, _WindowManager2.default.scrollPosition.top + _WindowManager2.default.height * 0.9);

                _Style2.default.set(this._pathContainer, {
                    height: this.currentMaskHeight, overflow: 'hidden',
                    transitionDuration: this.currentMaskHeight * MASK_SPEED

                });
            } else {
                _Style2.default.set(this._pathContainer, { height: 'auto', overflow: 'visible' });
            }
        }
    }, {
        key: 'resize',
        value: function resize() {
            this._render();
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_createPathsDOM',
        value: function _createPathsDOM() {
            var pathContainer = document.createElement('div');
            pathContainer.className = 'progress-path-mask';

            var renderers = [];

            // Create a renderer canvas between each waypoint
            for (var i = 0; i < this.waypoints.length - 1; i++) {
                var pathRenderer = document.createElement('canvas');
                pathContainer.appendChild(pathRenderer);
                renderers.push(pathRenderer);
            }

            // Save DOM references
            this._pathContainer = pathContainer;
            this._pathRenderers = renderers;

            this.el.appendChild(this._pathContainer);
        }
    }, {
        key: '_render',
        value: function _render() {
            var _this2 = this;

            var rootElOffset = (0, _getDocumentRect2.default)(this.el).top;

            // get offsets for all the waypoints
            var waypointOffsets = this.waypoints.map(function (waypoint) {
                return (0, _getDocumentRect2.default)(waypoint);
            });

            // Get displayed client rects from cutouts
            var cutoutRects = this.cutouts.map(function (cutout) {
                // console.log('cutout: ', cutout);
                return Array.from(cutout.getClientRects()).map(function (rect) {
                    return {
                        top: rect.top + _WindowManager2.default.scrollPosition.top - CUTOUT_PADDING,
                        left: rect.left + _WindowManager2.default.scrollPosition.left - CUTOUT_PADDING,
                        width: rect.width + 2 * CUTOUT_PADDING,
                        height: rect.height + 2 * CUTOUT_PADDING
                    };
                });
            });

            // flatten array for simple looping
            cutoutRects = (0, _flatten2.default)(cutoutRects);

            var _loop = function _loop(i) {
                var renderer = _this2._pathRenderers[i];
                var currentWaypoint = waypointOffsets[i];
                var nextWaypoint = waypointOffsets[i + 1];

                // Renderers have alternating directions
                var direction = i % 2 === 0 ? -1 : 1;

                // Get dimensions and position for new renderer
                var rendererHeight = nextWaypoint.top - currentWaypoint.top - currentWaypoint.height * WAYPOINT_HEIGHT_RATIO;
                var rendererWidth = rendererHeight * PATH_WIDTH_RATIO;
                var rendererLeft = direction > 0 ? (_WindowManager2.default.width + currentWaypoint.width) / 2 : _WindowManager2.default.width / 2 - (rendererWidth + currentWaypoint.width / 2);
                var rendererTop = currentWaypoint.top + currentWaypoint.height;

                // Set dimensions as CSS values and properties (canvas needs property to size properly)
                _Style2.default.set(renderer, {
                    width: rendererWidth,
                    height: rendererHeight,
                    top: rendererTop - rootElOffset,
                    left: rendererLeft
                });
                renderer.width = rendererWidth;
                renderer.height = rendererHeight;

                // Draw dashed line along path
                var ctx = renderer.getContext('2d');
                ctx.clearRect(0, 0, rendererWidth, rendererHeight);
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'rgba(0,0,0,0.65)';
                ctx.setLineDash(_this2.minWidth('s') ? [7, 10] : [4, 8]); // smaller dashes on mobile
                if (direction > 0) {
                    ctx.moveTo(0, 0);
                    ctx.bezierCurveTo(rendererWidth * 1.25, rendererHeight * 0.25, rendererWidth * 1.25, rendererHeight * 0.75, 0, rendererHeight);
                } else {
                    ctx.moveTo(rendererWidth, 0);
                    ctx.bezierCurveTo(rendererWidth - rendererWidth * 1.25, rendererHeight * 0.25, rendererWidth - rendererWidth * 1.25, rendererHeight * 0.75, rendererWidth, rendererHeight);
                }
                ctx.stroke();

                // Intersect with cutouts to hide/clear parts of the renderer
                cutoutRects.forEach(function (cutout) {

                    var aX = Math.max(cutout.left, rendererLeft);
                    var aY = Math.max(cutout.top, rendererTop);

                    var bX = Math.min(cutout.left + cutout.width, rendererLeft + rendererWidth);
                    var bY = Math.min(cutout.top + cutout.height, rendererTop + rendererHeight);

                    // If cutout and renderer intersect, clear the intersecting part from the renderer
                    if (!(aX >= bX || aY >= bY)) {
                        ctx.clearRect(cutout.left - rendererLeft, cutout.top - rendererTop, cutout.width, cutout.height);
                    }
                });
            };

            for (var i = 0; i < this._pathRenderers.length; i++) {
                _loop(i);
            }
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_scrollHandler',
        value: function _scrollHandler() {

            // Update mask height
            if (this.minWidth('s')) {
                var newMaskHeight = Math.max(this.currentMaskHeight, _WindowManager2.default.scrollPosition.top + _WindowManager2.default.height - SCROLL_PADDING);

                var distance = newMaskHeight - this.currentMaskHeight;

                this.currentMaskHeight = newMaskHeight;
                _Style2.default.set(this._pathContainer, {
                    height: this.currentMaskHeight
                    // transitionDuration : distance * MASK_SPEED
                });
            }
        }
    }]);

    return ProgressPath;
}(_BaseView3.default);

exports.default = ProgressPath;

},{"lodash/flatten":184,"zimplist/display/BaseView":258,"zimplist/display/getDocumentRect":266,"zimplist/utils/Style":274,"zimplist/utils/WindowManager":275}],240:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// UZIK Depedencies


// Local app Dependencies


// Hidden consts


/*

 STATIC API MANIPULATION

 */
var YOUTUBE_API_URL = "https://www.youtube.com/iframe_api";
var loadingScript = void 0;
var queuedInstances = [];

function loadAPI(instance) {

    // queue the player instance
    queuedInstances.push(instance);

    // create the call back for the API. name specified by YT API docs
    window.onYouTubeIframeAPIReady = function () {
        console.log('YT: ', window.YT);
        // call create player on all queued instances
        while (queuedInstances.length > 0) {
            var inst = queuedInstances.shift();
            if (inst.options.autoLoad) {
                inst._createPlayer.call(inst);
            }
        }
    };

    // load API (once)
    if (!loadingScript) {

        // create script
        loadingScript = document.createElement('script');

        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(loadingScript, firstScript);

        loadingScript.async = false;
        loadingScript.src = YOUTUBE_API_URL;
    }
}

var defaultOptions = {
    autoLoad: true
};

/**
 *
 */

var YoutubePlayer = function (_BaseView) {
    _inherits(YoutubePlayer, _BaseView);

    function YoutubePlayer(el, options) {
        _classCallCheck(this, YoutubePlayer);

        var _this = _possibleConstructorReturn(this, (YoutubePlayer.__proto__ || Object.getPrototypeOf(YoutubePlayer)).call(this, el, (0, _defaults2.default)(options, defaultOptions)));

        _this.videoId = 'videoId' in options ? options.videoId : _this.el.getAttribute('data-video-id');

        _this.playerContainer = _this.el.querySelector('.player-container');

        if (!_this.playerContainer) {
            _this.playerContainer = document.createElement('div');
            _this.playerContainer.className = 'player-container';
            _this.el.appendChild(_this.playerContainer);
        }

        // If API has already loaded, create the player imeadiatly otherwise, queue it
        if (window.YT && _this.options.autoLoad) {
            _this._createPlayer();
        } else {
            loadAPI(_this);
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(YoutubePlayer, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {}
    }, {
        key: 'play',
        value: function play() {
            if (this._player) {
                if (this._playerReady) {
                    this._player.playVideo();
                } else {
                    this._playbackRequsted = true;
                }
            } else {
                this._playbackRequsted = true;
                this._createPlayer();
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this._player) {
                this._player.pauseVideo();
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this._player) {
                this._player.stopVideo();
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._player.destroy();
            _get(YoutubePlayer.prototype.__proto__ || Object.getPrototypeOf(YoutubePlayer.prototype), 'destroy', this).call(this);
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_createPlayer',
        value: function _createPlayer() {
            this._player = new YT.Player(this.playerContainer, {
                width: '100%',
                height: '100%',
                videoId: this.videoId,
                playerVars: {
                    modestbranding: false,
                    rel: false, // display related videos at the end of the video
                    showinfo: false,
                    theme: 'light',
                    origin: window.location.domain
                },
                events: {
                    onReady: this._playerReadyHandler.bind(this),
                    onStateChange: this._playerStateChangeHandler.bind(this)
                }
            });

            // check if this is an autoload video. In case it isn't trigger a loading event anyway to get an immediate UI response for the user
            if (!this.options.autoLoad) {
                this._updateState(YoutubePlayer.STATE.LOADING);
            }

            if (this.options.autoPlay) {
                this.play();
            }
        }
    }, {
        key: '_updateState',
        value: function _updateState(newState) {
            var _this2 = this;

            // change class name
            var stateClass = 'state-' + newState;

            // update classes
            (0, _forEach2.default)(YoutubePlayer.STATE, function (state) {
                if (state !== newState) {
                    _this2.el.classList.remove('state-' + state);
                }
            });

            this.el.classList.add(stateClass);

            // update internal var
            this.state = newState;

            // trigger event for state
            this.trigger(newState);
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_playerReadyHandler',
        value: function _playerReadyHandler(event) {
            // re assign var because it has been replaced by the YT iFrame
            this.playerContainer = this.el.querySelector('.player-container');

            this._playerReady = true;

            // if the player was loaded when trying to play the video, it gets played here
            if (this._playbackRequsted) {
                this._player.playVideo();
                this._playbackRequsted = false;
            }

            this.trigger('ready');
        }
    }, {
        key: '_playerStateChangeHandler',
        value: function _playerStateChangeHandler(event) {

            switch (event.data) {
                case YT.PlayerState.PLAYING:

                    /* if (Vichy.Config.env == 'dev') {
                         this._player.mute();
                     }
                      this._startTimeMonitor();*/

                    this._updateState(YoutubePlayer.STATE.PLAYING);
                    break;

                case YT.PlayerState.BUFFERING:
                    //this.showPlayer();
                    // this._stopTimeMonitor();
                    this._updateState(YoutubePlayer.STATE.LOADING);
                    break;

                case YT.PlayerState.PAUSED:
                    // this._stopTimeMonitor();
                    this._updateState(YoutubePlayer.STATE.PAUSED);
                    break;

                case YT.PlayerState.ENDED:
                    // this._stopTimeMonitor();
                    this._updateState(YoutubePlayer.STATE.ENDED);
                    break;
            }
        }
    }]);

    return YoutubePlayer;
}(_BaseView3.default);

YoutubePlayer.STATE = {
    PENDING: 'pending',
    LOADING: 'loading',
    PLAYING: 'playing',
    PAUSED: 'paused',
    ENDED: 'ended'
};

exports.default = YoutubePlayer;

},{"lodash/defaults":174,"lodash/forEach":185,"zimplist/display/BaseView":258}],241:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Point = require('zimplist/geometry/Point');

var _Point2 = _interopRequireDefault(_Point);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _index = require('zimplist/display/dom/index');

var _index2 = _interopRequireDefault(_index);

var _empty = require('zimplist/display/dom/empty');

var _empty2 = _interopRequireDefault(_empty);

var _SpriteAnimator = require('zimplist/display/animation/SpriteAnimator');

var _SpriteAnimator2 = _interopRequireDefault(_SpriteAnimator);

var _renderBackground2 = require('app/components/values-wheel/renderBackground');

var _renderBackground3 = _interopRequireDefault(_renderBackground2);

var _generatePoints = require('app/components/values-wheel/generatePoints');

var _generatePoints2 = _interopRequireDefault(_generatePoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Depedencies


// Local app Dependencies


// Hidden consts
var WHEEL_RADIUS = 250;
var INTRO_DELAY = 260;

/**
 *
 */

var ValuesWheel = function (_BaseView) {
    _inherits(ValuesWheel, _BaseView);

    function ValuesWheel(el, options) {
        _classCallCheck(this, ValuesWheel);

        // Canvases
        var _this = _possibleConstructorReturn(this, (ValuesWheel.__proto__ || Object.getPrototypeOf(ValuesWheel)).call(this, el, options));

        _this.bgRenderer = _this.el.querySelector('.bg-renderer');
        _this.lineRenderer = _this.el.querySelector('.line-renderer');

        _this.valueItems = Array.from(_this.el.querySelectorAll('.values-wheel-large .value-item'));
        _this.colors = _this.valueItems.map(function (label) {
            return label.getAttribute('data-color');
        });

        _this.textContainer = _this.el.querySelector('.values-wheel-large .value-text-container');

        /**
         * An array of 0-2 values containing selected values (represented by their DOM nodes)
         * @type {Array}
         */
        _this.activeValues = [];

        // object with a normalized number for every value representing the lines progress
        _this.lineProgress = {};

        _this.valueItems.map(function (value) {
            return value.getAttribute('data-value-id');
        }).forEach(function (valueId) {
            return _this.lineProgress[valueId] = 0;
        });

        _this.currentMessage = _this.el.querySelector('.values-wheel-large .value-text-container .message');

        // Setup points on the circle
        /*let stepRad = (Math.PI * 2) / this.valueItems.length;
        let quaterRad = (Math.PI * 2) / 4;
         this.wheelPoints = this.valueItems.map( (step, i) => {
            let angle = (stepRad * i) - quaterRad;
            let x = WHEEL_RADIUS * Math.cos( angle ) + WHEEL_RADIUS;
            let y = WHEEL_RADIUS * Math.sin( angle ) + WHEEL_RADIUS;
            return new Point( x, y, angle, WHEEL_RADIUS );
        });*/

        _this.wheelPoints = (0, _generatePoints2.default)(_this.valueItems.length, WHEEL_RADIUS);

        _this.labelSprites = _this.valueItems.map(function (value) {
            var spriteCanvas = value.querySelector('.sprite');
            return new _SpriteAnimator2.default(spriteCanvas, { fps: 25, autoplay: false, loop: false, numFrames: 36, url: spriteCanvas.getAttribute('data-src') });
        });

        // Setup DOM events
        _this.addDomEvent('click', _this._valueItemClickHandler, '.value-item');

        _this._renderBackground();

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(ValuesWheel, [{
        key: 'introAnimation',
        value: function introAnimation() {
            var _this2 = this;

            // TODO Add sprite mask

            setTimeout(function () {
                _this2.bgRenderer.classList.remove('hidden');
                var firstHint = _this2.textContainer.querySelector('.message:first-child');

                // remove first hint
                (0, _animejs2.default)({
                    targets: firstHint,
                    opacity: [0, 1],
                    easing: 'easeInCubic',
                    duration: 1000
                });
            }, INTRO_DELAY);

            this.valueItems.forEach(function (label, i) {
                setTimeout(function () {
                    label.classList.remove('hidden');
                }, (i + 1) * 120 + INTRO_DELAY);
            });
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_renderBackground',
        value: function _renderBackground() {
            var _this3 = this;

            // Draw background
            var ctx = this.bgRenderer.getContext('2d');

            (0, _renderBackground3.default)(ctx, this.colors, this.wheelPoints, WHEEL_RADIUS);

            /*// Create mask
            ctx.clearRect(0, 0, 2 * WHEEL_RADIUS, 2 * WHEEL_RADIUS);
            ctx.beginPath();
            ctx.arc( WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_RADIUS, 0, Math.PI *2, false );
            ctx.clip();
            ctx.globalCompositeOperation = 'screen';
             // create gradients for the colors
            this.colors.forEach( (color, i) => {
                 let x = this.wheelPoints[i].x;
                let y = this.wheelPoints[i].y;
                 let gradient = ctx.createRadialGradient(x, y, 0, x, y, WHEEL_RADIUS );
                gradient.addColorStop(0, color );
                gradient.addColorStop(1, Color(color).fade(1) );
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, WHEEL_RADIUS * 2, WHEEL_RADIUS * 2);
             });
              // Last white gradient in center
            ctx.globalCompositeOperation = 'source-over';
            let whiteGradient = ctx.createRadialGradient(WHEEL_RADIUS, WHEEL_RADIUS, 0, WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_RADIUS);
             whiteGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15');
            whiteGradient.addColorStop(1, 'rgba(255, 255, 255, 0');
             ctx.fillStyle = whiteGradient;
            ctx.fillRect(0, 0, WHEEL_RADIUS * 2, WHEEL_RADIUS * 2);*/

            // Position Labels
            this.valueItems.forEach(function (label, i) {
                var point = _this3.wheelPoints[i];

                _Style2.default.set(label, {
                    top: point.y,
                    left: point.x
                });
            });
        }
    }, {
        key: '_renderLines',
        value: function _renderLines() {
            var _this4 = this;

            var ctx = this.lineRenderer.getContext('2d');

            // Clear canvas
            ctx.clearRect(0, 0, WHEEL_RADIUS * 2, WHEEL_RADIUS * 2);

            this.activeValues.forEach(function (value) {

                // get other elements tied to the value
                var valueId = value.getAttribute('data-value-id');
                var valueIndex = _this4.valueItems.indexOf(value);
                var valuePoint = _this4.wheelPoints[valueIndex];

                // Setup stroke style
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0,0,0,0.65)';
                ctx.setLineDash([7, 10]);

                // Special case is points 0 and 3 which are straight lines
                if (valueIndex === 0 || valueIndex === 3) {

                    var wheelPoint = _this4.wheelPoints[valueIndex];

                    var endX = WHEEL_RADIUS;
                    var endY = WHEEL_RADIUS + (wheelPoint.y - WHEEL_RADIUS) * (1 - _this4.lineProgress[valueId]);

                    ctx.moveTo(wheelPoint.x, wheelPoint.y);
                    ctx.lineTo(endX, endY);
                } else {
                    // Get adjacent point to build circle with
                    var adjacentPoint = void 0;

                    // direction of the arc depending on which point is being clicked
                    var arcClockwise = void 0;

                    switch (valueIndex) {
                        case 1:
                            adjacentPoint = _this4.wheelPoints[valueIndex + 1];
                            arcClockwise = false;
                            break;
                        case 2:
                            adjacentPoint = _this4.wheelPoints[valueIndex - 1];
                            arcClockwise = true;
                            break;
                        case 4:
                            adjacentPoint = _this4.wheelPoints[valueIndex + 1];
                            arcClockwise = false;
                            break;
                        case 5:
                            adjacentPoint = _this4.wheelPoints[valueIndex - 1];
                            arcClockwise = true;
                            break;

                        default:
                            adjacentPoint = _this4.wheelPoints[0];
                    }

                    // Get center point of a circle via average of the three points
                    // create point objects for the triangle
                    var centerPoint = new _Point2.default((WHEEL_RADIUS + valuePoint.x + adjacentPoint.x) / 3, (WHEEL_RADIUS + valuePoint.y + adjacentPoint.y) / 3);
                    var _wheelPoint = new _Point2.default(WHEEL_RADIUS, WHEEL_RADIUS); //TODO move for optimization

                    // Radius of circumbscribing circle
                    var arcRadius = WHEEL_RADIUS / Math.sqrt(3);

                    // get side distances to calc the angle of the arc
                    // longest side will always be the distance between the center and the value point
                    var sideC = _Point2.default.distance(valuePoint, _wheelPoint);
                    var sideA = _Point2.default.distance(valuePoint, centerPoint);
                    var sideB = _Point2.default.distance(_wheelPoint, centerPoint);

                    // Measure obtuse angle of the triangle
                    var arcAngle = Math.acos((sideA * sideA + sideB * sideB - sideC * sideC) / (2 * sideA * sideB));
                    var stepRad = Math.PI * 2 / _this4.valueItems.length; // TODO move for optimization

                    var startAngle = void 0,
                        endAngle = void 0;

                    // let arcProgress = (this.activeValues.length === 0 || i > 0) ? arcAngle * this.lineProgress.progress : arcAngle;
                    var arcProgress = arcAngle * _this4.lineProgress[valueId];

                    switch (valueIndex) {
                        case 1:
                            startAngle = Math.PI + arcAngle; // Math.PI + (stepRad * (valueIndex - 1) );
                            endAngle = startAngle - arcProgress;
                            break;
                        case 2:
                            startAngle = Math.PI - stepRad * valueIndex;
                            endAngle = startAngle + arcProgress;
                            break;
                        case 4:
                            startAngle = stepRad * 2;
                            endAngle = startAngle - arcProgress;
                            break;
                        case 5:
                            startAngle = Math.PI - stepRad * valueIndex;
                            endAngle = startAngle + arcProgress;
                            break;
                    }

                    ctx.arc(centerPoint.x, centerPoint.y, arcRadius, startAngle, endAngle, !arcClockwise);
                }

                ctx.stroke();
                ctx.closePath();
            });

            // cutout current message
            // TODO line by line clear
            ctx.clearRect(this.currentMessage.offsetLeft, this.currentMessage.offsetTop, this.currentMessage.offsetWidth, this.currentMessage.offsetHeight);
        }

        /**
         *
         * @param {DOMElement} value - Value element.
         * @private
         */

    }, {
        key: '_activateValue',
        value: function _activateValue(value) {
            // console.log('activate value');
            if (this.activeValues.length === 2) {
                // disable first
                this._deactivateValue(this.activeValues[0]);
            }

            // remove hints
            var valueIndex = (0, _index2.default)(value);

            var button = value.querySelector('button');
            var buttonBg = button.querySelector('.background');

            value.classList.add('active');
            _Style2.default.set(buttonBg, { backgroundColor: this.colors[valueIndex] });

            // Add to Selected values
            this.activeValues.push(value);

            var labelSprite = this.labelSprites[valueIndex];
            labelSprite.el.style.opacity = 1;
            labelSprite.play();

            this._updateTextContent();
        }
    }, {
        key: '_deactivateValue',
        value: function _deactivateValue(value) {
            // remove form list of active values
            var valueIndex = (0, _index2.default)(value);
            var valueId = value.getAttribute('data-value-id');
            var button = value.querySelector('button');
            var buttonBg = button.querySelector('.background');

            this.activeValues.splice(this.activeValues.indexOf(value), 1);
            value.classList.remove('active');
            _Style2.default.set(buttonBg, { backgroundColor: null });

            // remove dotted line
            this.lineProgress[valueId] = 0;

            // remove butterflies label sprite
            (0, _animejs2.default)({
                targets: this.labelSprites[valueIndex].el,
                duration: 1000,
                opacity: 0
            });

            this._updateTextContent();
        }
    }, {
        key: '_removeCurrentMessage',
        value: function _removeCurrentMessage(callback) {

            if (this.currentMessage) {
                (0, _animejs2.default)({
                    targets: this.currentMessage,
                    opacity: 0,
                    duration: 500,
                    easing: 'easeOutCubic',
                    complete: function complete() {
                        callback();
                    }
                });
            } else {
                callback();
            }
        }

        /**
         * Update the text content for active value(s)
         * @private
         */

    }, {
        key: '_updateTextContent',
        value: function _updateTextContent() {
            var _this5 = this;

            // get id from pair of attributes
            var valueId = void 0;

            if (this.activeValues.length === 1) {
                valueId = this.activeValues[0].getAttribute('data-value-id');
            } else if (this.activeValues.length === 2) {

                var valueA = this.activeValues[0];
                var valueB = this.activeValues[1];

                var indexA = (0, _index2.default)(valueA);
                var indexB = (0, _index2.default)(valueB);

                // get pair of id's as a single id "idA-idB". The order is determined by the DOM, not alphabetically
                valueId = indexA < indexB ? valueA.getAttribute('data-value-id') + '-' + valueB.getAttribute('data-value-id') : valueB.getAttribute('data-value-id') + '-' + valueA.getAttribute('data-value-id');

                // get number of points between points
                // let distance = Math.abs( indexA - indexB );
                // let shortDistance = Math.min( distance, this.valueItems.length - distance);

            } else {
                // Empty the block
                this.lineRenderer.getContext('2d').clearRect(0, 0, WHEEL_RADIUS * 2, WHEEL_RADIUS * 2);
            }

            // If we have found an element
            if (valueId) {

                // Get clone of element
                var messageEl = this.el.querySelector('.value-message-library .value-message[data-value-id="' + valueId + '"]').cloneNode(true);

                this._removeCurrentMessage(function () {
                    (0, _empty2.default)(_this5.textContainer);

                    // Save current message element
                    _this5.currentMessage = messageEl;

                    messageEl.style.opacity = 0;
                    (0, _animejs2.default)({
                        targets: messageEl,
                        opacity: [0, 1],
                        duration: 350,
                        easing: 'easeInCubic'
                    });

                    _this5.textContainer.appendChild(messageEl);
                });

                // multple lines to animate?
                valueId.split('-').forEach(function (valueProp) {

                    var currentValue = _this5.lineProgress[valueProp];

                    // don't reanimate complete lines
                    if (currentValue < 1) {
                        // set basic props
                        var animProps = {
                            targets: _this5.lineProgress,
                            duration: 1400,
                            easing: 'easeInOutCirc',
                            update: function update() {
                                _this5._renderLines();
                            }
                        };

                        // dynamic property creation for this value
                        animProps[valueProp] = [currentValue, 1];

                        // start anim
                        (0, _animejs2.default)(animProps);
                    }
                });
            }

            // Draw lines to bloc
            this._renderLines();
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_valueItemClickHandler',
        value: function _valueItemClickHandler(event) {

            if (event.delegateTarget.classList.contains('active')) {
                this._deactivateValue(event.delegateTarget);
            } else {
                this._activateValue(event.delegateTarget);
            }
        }
    }]);

    return ValuesWheel;
}(_BaseView3.default);

exports.default = ValuesWheel;

},{"animejs":1,"app/components/values-wheel/generatePoints":243,"app/components/values-wheel/renderBackground":244,"color":7,"zimplist/display/BaseView":258,"zimplist/display/animation/SpriteAnimator":260,"zimplist/display/dom/empty":261,"zimplist/display/dom/index":263,"zimplist/geometry/Point":267,"zimplist/utils/Style":274}],242:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _Point = require('zimplist/geometry/Point');

var _Point2 = _interopRequireDefault(_Point);

var _index = require('zimplist/display/dom/index');

var _index2 = _interopRequireDefault(_index);

var _empty = require('zimplist/display/dom/empty');

var _empty2 = _interopRequireDefault(_empty);

var _removeClasses = require('zimplist/display/dom/removeClasses');

var _removeClasses2 = _interopRequireDefault(_removeClasses);

var _renderBackground2 = require('./renderBackground');

var _renderBackground3 = _interopRequireDefault(_renderBackground2);

var _generatePoints = require('./generatePoints');

var _generatePoints2 = _interopRequireDefault(_generatePoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// UZIK Depedencies


// Local app Dependencies


// Hidden consts
var WHEEL_RADIUS = 170; // Must match value in SCSS
var WHEEL_POINT_ANGLE = 45 * (Math.PI / 180);

/**
 *
 */

var ValuesWheelSmall = function (_BaseView) {
    _inherits(ValuesWheelSmall, _BaseView);

    function ValuesWheelSmall(el, options) {
        _classCallCheck(this, ValuesWheelSmall);

        // this.addDomEvent('click', this._childClickHandler);
        var _this = _possibleConstructorReturn(this, (ValuesWheelSmall.__proto__ || Object.getPrototypeOf(ValuesWheelSmall)).call(this, el, options));

        _this.addDomEvent('click', _this._itemClickHandler, '.values-wheel-small .value-item');

        // Get refence to the original value list and hide it
        _this.valueList = _this.el.querySelector('.values-list');
        _this.valueElements = Array.from(_this.valueList.querySelectorAll('.value-item'));

        _this.valueListA = _this.valueList.cloneNode(true);
        _this.valueListB = _this.valueList.cloneNode(true);

        // Hide list after cloning it
        _Style2.default.set(_this.valueList, { display: 'none' });

        _this.wheelContainerA = _this.el.querySelector('.wheel-container-small:first-child');
        _this.wheelContainerB = _this.el.querySelector('.wheel-container-small:last-child');

        // Get backgrounds
        _this.backgroundA = _this.el.querySelector('.wheel-container-small:first-child .bg-renderer-small');
        _this.backgroundB = _this.el.querySelector('.wheel-container-small:last-child .bg-renderer-small');

        _this.wheelContainerA.appendChild(_this.valueListA);
        _this.wheelContainerB.appendChild(_this.valueListB);

        _this.selectedValueA = 0;
        _this.selectedValueB = 0;

        _this._activeValues = {
            a: null,
            b: null
        };

        _this.textContainer = _this.el.querySelector('.value-text-container.small');

        // Get values
        // this.values = {};

        /*this.valueElementsA.forEach( (value, i) => {
            let id      = value.getAttribute('data-value-id');
            let color   = value.getAttribute('data-color');
             this.values[ id ] = {
                el : value,
                color: color,
                index : i
            };
        });*/

        // get an array of colors from each point
        _this.colors = _this.valueElements.map(function (el) {
            return el.getAttribute('data-color');
        });

        // create wheel points
        // this.wheelPoints = generatePoints( this.valueElements.length, WHEEL_RADIUS, 30 );

        _this.wheelPoints = [];

        var firstPointOffset = 0 - Math.floor(5 / 2) * WHEEL_POINT_ANGLE;
        for (var i = 0; i < _this.valueElements.length; i++) {

            // get offset for
            var angle = firstPointOffset + i * WHEEL_POINT_ANGLE;
            var x = WHEEL_RADIUS + Math.cos(angle) * WHEEL_RADIUS;
            var y = WHEEL_RADIUS + Math.sin(angle) * WHEEL_RADIUS;

            _this.wheelPoints.push(new _Point2.default(x, y, angle, WHEEL_RADIUS));
        }

        _this._renderBackground();

        _this._positionLabels();
        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */


    _createClass(ValuesWheelSmall, [{
        key: 'introAnimation',
        value: function introAnimation() {

            Array.from(this.valueListA.querySelectorAll('.value-item.hidden')).forEach(function (item) {
                return item.classList.remove('hidden');
            });
            Array.from(this.valueListB.querySelectorAll('.value-item.hidden')).forEach(function (item) {
                return item.classList.remove('hidden');
            });
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_activateValue',
        value: function _activateValue(valueIndex) {
            var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'a';


            this['selectedValue' + group.toUpperCase()] = valueIndex;

            this._activeValues[group] = valueIndex;

            this['valueList' + group.toUpperCase()].children[valueIndex].classList.add('active');
        }
    }, {
        key: '_deactivateValue',
        value: function _deactivateValue(valueIndex) {
            var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'a';

            this._activeValues[group] = null;

            this['valueList' + group.toUpperCase()].children[valueIndex].classList.remove('active');

            // this._positionLabels();
            // this._updateTextContent();
        }
    }, {
        key: '_positionLabels',
        value: function _positionLabels() {
            var _this2 = this;

            /*
             A
              */

            var orderedValuesA = [];
            var orderIndexA = 2 - this.selectedValueA; // 5/2
            orderIndexA = orderIndexA < 0 ? orderIndexA + this.valueElements.length : orderIndexA;

            var labelsA = Array.from(this.valueListA.querySelectorAll('.value-item'));

            for (var i = 0; i < labelsA.length; i++) {
                var currentLabel = labelsA[i];

                // TODO refactor with same code below
                (0, _removeClasses2.default)(currentLabel, 'state-*');
                if (orderIndexA === 2) {
                    currentLabel.classList.add('state-selected');
                } else if (!(orderIndexA === 1 || orderIndexA === 3)) {
                    currentLabel.classList.add('state-off');
                }

                orderedValuesA[orderIndexA++] = currentLabel;
                orderIndexA = orderIndexA < labelsA.length ? orderIndexA : 0;
            }

            orderedValuesA.forEach(function (item, i) {
                _Style2.default.set(item, {
                    top: _this2.wheelPoints[i].y,
                    left: _this2.wheelPoints[i].x
                });
            });

            /*
             B
              */
            var orderedValuesB = [];
            var orderIndexB = 2 - this.selectedValueB; // 5/2
            orderIndexB = orderIndexB < 0 ? orderIndexB + this.valueElements.length : orderIndexB;

            var labelsB = Array.from(this.valueListB.querySelectorAll('.value-item'));

            for (var _i = 0; _i < labelsB.length; _i++) {
                var _currentLabel = labelsB[_i];

                // TODO refactor with same code above
                (0, _removeClasses2.default)(_currentLabel, 'state-*');
                if (orderIndexB === 2) {
                    _currentLabel.classList.add('state-selected');
                } else if (!(orderIndexB === 1 || orderIndexB === 3)) {
                    _currentLabel.classList.add('state-off');
                }

                orderedValuesB[orderIndexB++] = _currentLabel;
                orderIndexB = orderIndexB < labelsB.length ? orderIndexB : 0;
            }

            orderedValuesB.forEach(function (item, i) {

                var x = _this2.wheelPoints[i].x;
                var y = _this2.wheelPoints[i].y;

                x = WHEEL_RADIUS - (x - WHEEL_RADIUS);

                _Style2.default.set(item, {
                    top: y,
                    left: x
                });
            });
        }
    }, {
        key: '_removeCurrentMessage',
        value: function _removeCurrentMessage(callback) {

            if (this.currentMessage) {
                (0, _animejs2.default)({
                    targets: this.currentMessage,
                    opacity: 0,
                    duration: 500,
                    easing: 'easeOutCubic',
                    complete: function complete() {
                        callback();
                    }
                });
            } else {
                callback();
            }
        }
    }, {
        key: '_updateTextContent',
        value: function _updateTextContent() {
            var _this3 = this;

            // value id will be either single id or combination
            var valueId = void 0;

            // get selected values
            if (this._activeValues.a !== null) {

                if (this._activeValues.b !== null && this._activeValues.a !== this._activeValues.b) {
                    var indexA = this._activeValues.a;
                    var indexB = this._activeValues.b;

                    var valueA = this.valueElements[indexA].getAttribute('data-value-id');
                    var valueB = this.valueElements[indexB].getAttribute('data-value-id');

                    valueId = indexA < indexB ? valueA + '-' + valueB : valueB + '-' + valueA;
                } else {
                    valueId = this.valueElements[this._activeValues.a].getAttribute('data-value-id');
                }
            }

            // Get message for this values
            var messageEl = this.el.querySelector('.value-message-library .value-message[data-value-id="' + valueId + '"]').cloneNode(true);

            if (messageEl) {
                this._removeCurrentMessage(function () {
                    (0, _empty2.default)(_this3.textContainer);

                    // Save current message element
                    _this3.currentMessage = messageEl;

                    messageEl.style.opacity = 0;
                    (0, _animejs2.default)({
                        targets: messageEl,
                        opacity: [0, 1],
                        duration: 350,
                        easing: 'easeInCubic'
                    });

                    _this3.textContainer.appendChild(messageEl);
                });
            }
        }
    }, {
        key: '_renderBackground',
        value: function _renderBackground() {

            (0, _renderBackground3.default)(this.backgroundA.getContext('2d'), this.colors, this.wheelPoints, WHEEL_RADIUS);
            (0, _renderBackground3.default)(this.backgroundB.getContext('2d'), this.colors, this.wheelPoints, WHEEL_RADIUS);
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler(event) {
            this.selectedValueA++;

            if (this.selectedValueA >= this.valueElements.length) {
                this.selectedValueA = 0;
            }

            this.selectedValueB++;

            if (this.selectedValueB >= this.valueElements.length) {
                this.selectedValueB = 0;
            }

            this._positionLabels();
        }
    }, {
        key: '_itemClickHandler',
        value: function _itemClickHandler(event) {

            var itemGroup = this.valueListA.contains(event.delegateTarget) ? 'a' : 'b';
            var itemId = event.delegateTarget.getAttribute('data-value-id');
            var itemIndex = (0, _index2.default)(event.delegateTarget);

            // TODO check disabled items

            // We can't disable A, otherwise nothing will be displayed
            /*if (this._activeValues[itemGroup] !== null && this._activeValues[itemGroup] === itemIndex) {
                this._deactivateValue(itemIndex, itemGroup);
            } else */if (this._activeValues[itemGroup] !== null) {
                this._deactivateValue(this._activeValues[itemGroup], itemGroup);
            }

            this._activateValue(itemIndex, itemGroup);

            this._positionLabels();
            this._updateTextContent();
        }
    }]);

    return ValuesWheelSmall;
}(_BaseView3.default);

exports.default = ValuesWheelSmall;

},{"./generatePoints":243,"./renderBackground":244,"animejs":1,"zimplist/display/BaseView":258,"zimplist/display/dom/empty":261,"zimplist/display/dom/index":263,"zimplist/display/dom/removeClasses":264,"zimplist/geometry/Point":267,"zimplist/utils/Style":274}],243:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Point = require('zimplist/geometry/Point');

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generatePoints(length, radius) {

    var stepRad = Math.PI * 2 / length;
    var quaterRad = Math.PI * 2 / 4;

    var points = [];

    for (var i = 0; i < length; i++) {
        var angle = stepRad * i - quaterRad;
        var x = radius * Math.cos(angle) + radius;
        var y = radius * Math.sin(angle) + radius;

        points.push(new _Point2.default(x, y, angle, radius));
    }

    return points;
}

exports.default = generatePoints;

},{"zimplist/geometry/Point":267}],244:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBackground(ctx, colors, wheelPoints, radius) {

    // Create mask
    ctx.clearRect(0, 0, 2 * radius, 2 * radius);
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2, false);
    ctx.clip();
    ctx.globalCompositeOperation = 'screen';

    // create gradients for the colors
    colors.forEach(function (color, i) {

        var wheelPoint = wheelPoints[i];

        var x = wheelPoint.x;
        var y = wheelPoint.y;

        var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, (0, _color2.default)(color).fade(1));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, radius * 2, radius * 2);
    });

    // Last white gradient in center
    ctx.globalCompositeOperation = 'source-over';
    var whiteGradient = ctx.createRadialGradient(radius, radius, 0, radius, radius, radius);

    whiteGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15');
    whiteGradient.addColorStop(1, 'rgba(255, 255, 255, 0');

    ctx.fillStyle = whiteGradient;
    ctx.fillRect(0, 0, radius * 2, radius * 2);
}

exports.default = renderBackground;

},{"color":7}],245:[function(require,module,exports){
"use strict";

var _fontfaceobserver = require("fontfaceobserver");

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

var _animejs = require("animejs");

var _animejs2 = _interopRequireDefault(_animejs);

var _WindowManager = require("zimplist/utils/WindowManager");

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _Config = require("zimplist/utils/Config");

var _Config2 = _interopRequireDefault(_Config);

var _stringToElement = require("zimplist/display/dom/stringToElement");

var _stringToElement2 = _interopRequireDefault(_stringToElement);

var _pageList = require("app/pages/pageList");

var _pageList2 = _interopRequireDefault(_pageList);

var _PageDraw = require("app/ui/PageDraw");

var _PageDraw2 = _interopRequireDefault(_PageDraw);

var _Header = require("app/ui/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require("app/ui/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create main object
var VCA = {
    start: function start() {

        // Init global config with page data
        var bootstrapConfig = window.VCA_CONFIG;

        if (!bootstrapConfig) {
            console.warn('No bootstrap config provided');
        } else {
            _Config2.default.initialize(bootstrapConfig);
        }

        // Setup WindowManager
        _WindowManager2.default.initialize({
            breakpoints: [{ name: 'xxs', value: 0 }, // needs to be 0 to avoid screwing up the detection
            { name: 'xs', value: 550 }, { name: 's', value: 750 }, { name: 'm', value: 980 }, { name: 'l', value: 1200 }, { name: 'xl', value: 1400 }, { name: 'xxl', value: 1600 }]
        });

        // Setup font-face observer
        this.initFontFaceObservers();

        // Load SVG Sprite
        this.initSVGSprite();

        // Init static ui elements
        this.header = new _Header2.default(document.getElementById('site-header'));

        this.footer = new _Footer2.default(document.getElementById('site-footer'));

        this.pageDraw = new _PageDraw2.default(document.getElementById('page-draw'));

        // Initialize page in place and create new history entry
        // WARNING : make sure there are is only one '.page' loaded in the layout
        var page = this.initPage(document.querySelector('.page'));

        // console.log( window.location.href );

        window.history.replaceState({ pageId: page.id }, window.title, window.location.href);

        /*
         Setup AJAX navigation
         */
        // declare regex to detect internal links
        // TODO move to config?
        this.loadableRegex = new RegExp("(^/|" + window.location.origin + "/.*)");

        window.addEventListener('popstate', this._popstateHandler.bind(this));

        // bind link DOM events to hijack nav events
        window.document.addEventListener('click', this._globalClickHandler.bind(this));

        // Wait for load to trigger another re-render
        _WindowManager2.default.on('load', function () {
            _WindowManager2.default.trigger('resize');
        });
    },
    initFontFaceObservers: function initFontFaceObservers() {
        var fontObserverNeutrafaceSemi = new _fontfaceobserver2.default('neutrafacetext', { weight: 600 });
        var fontObserverNeutrafaceBold = new _fontfaceobserver2.default('neutrafacetext', { weight: 700 });

        var fontObserverFilosofiaRegular = new _fontfaceobserver2.default('filosofia', { weight: 400 });
        var fontObserverFilosofiaItalic = new _fontfaceobserver2.default('filosofia', { weight: 400, style: 'italic' });
        var fontObserverFilosofiaBold = new _fontfaceobserver2.default('filosofia', { weight: 700 });

        // Load all Filosofia fonts
        var filosofiaAll = Promise.all([fontObserverFilosofiaRegular.load(), fontObserverFilosofiaItalic.load(), fontObserverFilosofiaBold.load()]).then(function () {
            return document.documentElement.classList.add('font-filosofia-loaded');
        });

        // Load all Neutraface fonts
        var neutrafaceAll = Promise.all([fontObserverNeutrafaceSemi.load(), fontObserverNeutrafaceBold.load()]).then(function () {
            return document.documentElement.classList.add('font-neutraface-loaded');
        });

        // trigger window resize to force re-render when all fonts are loaded;
        Promise.all([filosofiaAll, neutrafaceAll]).then(function () {
            _WindowManager2.default.trigger('resize');
            window.sessionStorage.setItem('fontsLoaded', true); // Thi is checked directly in the layout to avoid FOUT during refreshes
        });
    },
    initSVGSprite: function initSVGSprite() {

        var svgData = window.sessionStorage.getItem('svg-sprite');
        if (svgData && svgData.length && _Config2.default.env !== 'development') {
            // Create SVG element from string and inject at the start of the body
            var svgDoc = document.createElement('div');
            svgDoc.innerHTML = svgData;
            document.body.insertBefore(svgDoc.firstChild, document.body.firstChild);
        } else {
            var svgLoader = fetch(_Config2.default.assetPath + "img/svg/icon-sprite.svg");
            svgLoader.then(function (response) {
                return response.text();
            }).then(function (responseData) {

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = responseData;

                var svgData = tempContainer.firstChild;

                // Cache SVG sprite
                window.sessionStorage.setItem('svg-sprite', responseData);

                // inject SVG
                document.body.insertBefore(svgData, document.body.firstChild);
            });
        }
    },
    loadPage: function loadPage(url) {
        var _this = this;

        // TODO replace with loader

        fetch(url, {
            credentials: 'same-origin'
        }).then(function (response) {
            // decide if we're returning JSON or string
            return response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('application/json') ? response.json() : response.text();
        }).then(function (responseData) {
            var documentEl = (0, _stringToElement2.default)(responseData);

            // TODO Change page title
            var pageEl = documentEl.querySelector('.page');

            var page = _this.initPage(pageEl);

            // Set initial state in history
            window.history.pushState({ pageId: page.id }, window.title, url);
        });
    },
    initPage: function initPage(pageEl) {

        // get unique string that id's the page
        var pageId = pageEl.getAttribute('data-page-id');

        // Append page element before
        if (pageId !== 'home') {
            this.pageDraw.injectPageEl(pageEl);
        }

        // Get an instance for the class attributed for this page
        var pageObj = void 0;
        if (_pageList2.default[pageId]) {
            pageObj = new _pageList2.default[pageId](pageEl);
        } else {
            pageObj = new _pageList2.default['default'](pageEl);
            console.error("Can't find page class for id: " + pageId);
        }

        if (pageId === 'home') {
            this.currentPage = pageObj;
            this.closePageDraw();
        } else {
            this.currentDrawPage = pageObj;
            this.openPageDraw();
        }

        return pageObj;
    },
    openPageDraw: function openPageDraw() {
        // TODO pause currentPage

        this.pageDraw.open();
    },
    closePageDraw: function closePageDraw() {

        // TODO if there is no current page, redirect?

        if (this.currentDrawPage) {
            this.pageDraw.close();
            this.currentDrawPage.remove(); // TODO wait for transition to end ?
            this.currentDrawPage = null;
        }

        // TODO un-pause currentPage

        // TODO Empty the draw
    },
    _popstateHandler: function _popstateHandler(event) {

        console.log(window.location.href);

        if (event.state.pageId && event.state.pageId === 'home') {
            this.closePageDraw();
        } else {
            // TODO load page and reopen draw
            this.loadPage(window.location.href);
        }
    },
    _globalClickHandler: function _globalClickHandler(event) {
        // iterate up the DOM to find if a link was clicked
        var linkTarget = void 0;
        var domIter = event.target;
        while (domIter !== document.documentElement) {
            if (domIter && domIter.tagName && domIter.tagName.toLowerCase() === 'a') {
                linkTarget = domIter;
                break;
            } else {
                domIter = domIter.parentNode;
            }
        }

        // Check this target
        // - is a link,
        // - has a href attr
        // - the user isn't pressing any keyboard buttons to open tab in new window.
        // - doesn't have the force-reload class (like the lang select for example)
        if (linkTarget && !event.metaKey && !event.ctrlKey && linkTarget.tagName.toLowerCase() === 'a' && linkTarget.hasAttribute('href') && !linkTarget.classList.contains('force-reload')) {

            if (linkTarget.classList.contains('close-page-draw')) {

                // Go back to home page
                if (this.currentPage) {
                    event.preventDefault();
                    this.closePageDraw();
                    window.history.pushState({ pageId: this.currentPage.id }, window.title, linkTarget.getAttribute('href'));
                } else {
                    // DO nothing. Let it happen. (temporary)
                }
            } else {
                var linkHref = linkTarget.getAttribute('href');
                if (window.location.href !== linkHref && this.loadableRegex.test(linkHref)) {
                    event.preventDefault();

                    if (this.currentDrawPage) {
                        (0, _animejs2.default)({
                            targets: this.currentDrawPage.el,
                            duration: 1000,
                            opacity: 0
                        });
                    }

                    // Will probably be a content page, display the mask
                    this.pageDraw.prepare();

                    this.loadPage(linkHref);
                }
            }
        }
    }
};

// Start App.


// Imports
VCA.start();

},{"animejs":1,"app/pages/pageList":253,"app/ui/Footer":254,"app/ui/Header":255,"app/ui/PageDraw":256,"fontfaceobserver":8,"zimplist/display/dom/stringToElement":265,"zimplist/utils/Config":272,"zimplist/utils/WindowManager":275}],246:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = require('zimplist/utils/Config');

var _Config2 = _interopRequireDefault(_Config);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";


// Local app Dependencies


// Hidden consts

/**
 *
 */
var CandidatePage = function (_Page) {
    _inherits(CandidatePage, _Page);

    function CandidatePage(el, options) {
        _classCallCheck(this, CandidatePage);

        var _this = _possibleConstructorReturn(this, (CandidatePage.__proto__ || Object.getPrototypeOf(CandidatePage)).call(this, el, options));

        if (window.dataLayer || _Config2.default.env === 'development') {
            console.log('tracking time');
            _this._initGTMTracking();
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(CandidatePage, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {}

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_initGTMTracking',
        value: function _initGTMTracking() {
            this.addDomEvent('click', function (event) {
                var button = event.delegateTarget;

                var linkType = button.getAttribute('data-link-type');
                var externalPlatform = button.getAttribute('data-external-platform');

                window.dataLayer.push({
                    'event': 'externalClick',
                    'pageGroupingMaison': 'Human Resources',
                    'linkType': linkType,
                    'externalPlatform': externalPlatform,
                    'pageLanguage': document.documentElement.lang,
                    'uri': window.location.pathname + window.location.search + window.location.hash
                });
            }, '.button');
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler(event) {}
    }]);

    return CandidatePage;
}(_Page3.default);

exports.default = CandidatePage;

},{"app/pages/Page.abstract":251,"zimplist/utils/Config":272}],247:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScrollingTracker = require('zimplist/utils/ScrollingTracker');

var _ScrollingTracker2 = _interopRequireDefault(_ScrollingTracker);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

var _ProfileSlider = require('app/components/ProfileSlider');

var _ProfileSlider2 = _interopRequireDefault(_ProfileSlider);

var _MediaGallery = require('app/components/MediaGallery');

var _MediaGallery2 = _interopRequireDefault(_MediaGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";

// Local app Dependencies


// Hidden consts

/**
 *
 */
var CareersPage = function (_Page) {
    _inherits(CareersPage, _Page);

    function CareersPage(el, options) {
        _classCallCheck(this, CareersPage);

        var _this = _possibleConstructorReturn(this, (CareersPage.__proto__ || Object.getPrototypeOf(CareersPage)).call(this, el, options));

        var profileEl = _this.el.querySelector('.career-profiles');
        if (profileEl) {
            _this.profilesSlider = new _ProfileSlider2.default(profileEl);
            _this._registerSubView(_this.profilesSlider);

            var profileTracker = _this.scrollTracker.trackElement(profileEl, 1);

            if (profileTracker.state !== _ScrollingTracker2.default.STATE.OFF) {
                _this._animateProfiles();
            } else {
                profileTracker.on('state', function (event) {
                    if (event.state !== _ScrollingTracker2.default.STATE.OFF) {
                        _this._animateProfiles();
                        profileTracker.off('state');
                    }
                });
            }
        }

        var mediaGalleryEl = _this.el.querySelector('.media-gallery');
        if (mediaGalleryEl) {
            _this.mediaGallery = new _MediaGallery2.default(mediaGalleryEl);
            _this._registerSubView(_this.mediaGallery);
        }

        if (window.dataLayer) {
            _this._initGTMTracking();
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    /* ==========================
      Private Methods
      ========================== */

    _createClass(CareersPage, [{
        key: '_initGTMTracking',
        value: function _initGTMTracking() {

            this.addDomEvent('click', function (event) {
                window.dataLayer.push({
                    'event': 'videoPlay',
                    'pageGroupingMaison': 'Human Resources',
                    'pageLanguage': document.documentElement.lang
                });
            }, '.gallery-item.item-video.visible');
        }
    }, {
        key: '_animateProfiles',
        value: function _animateProfiles() {
            Array.from(this.profilesSlider.el.querySelectorAll('.career-profile')).forEach(function (card) {
                return card.classList.remove('hidden');
            });
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler(event) {}
    }]);

    return CareersPage;
}(_Page3.default);

exports.default = CareersPage;

},{"app/components/MediaGallery":237,"app/components/ProfileSlider":238,"app/pages/Page.abstract":251,"zimplist/utils/ScrollingTracker":273}],248:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xhr = require('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

var _empty = require('zimplist/display/dom/empty');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Local app Dependencies


// Hidden consts
var RECAPTCHA_API_URL = 'https://www.google.com/recaptcha/api.js';

var instances = [];

function loadRecaptchaApi(instance) {
    if (!window.grecaptcha) {

        instances.push(instance);

        var scriptEl = document.createElement('script');
        scriptEl.setAttribute('nonce', window.VCA_CONFIG.cspNonceRecaptcha);
        scriptEl.async = true;
        scriptEl.defer = true;
        scriptEl.src = RECAPTCHA_API_URL + '?onload=recaptchaLoaded&render=explicit&hl=' + document.documentElement.lang;
        document.head.appendChild(scriptEl);
    }
}

window.recaptchaLoaded = function () {
    while (instances.length) {
        instances.shift()._initCaptcha();
    }
};

/**
 *
 * Contact Page Class
 *
 */

var ContactPage = function (_Page) {
    _inherits(ContactPage, _Page);

    function ContactPage(el, options) {
        _classCallCheck(this, ContactPage);

        var _this = _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).call(this, el, options));

        _this.contactForm = _this.el.querySelector('form');

        if (window.grecaptcha) {
            _this._initCaptcha();
        } else {
            loadRecaptchaApi(_this);
        }

        // setup DOM events
        _this.addDomEvent('submit', _this._formSubmitHandler, _this.contactForm);
        return _this;
    }

    _createClass(ContactPage, [{
        key: '_initCaptcha',
        value: function _initCaptcha() {
            this._captchaLoaded = true;

            var captchaEl = this.el.querySelector('.g-recaptcha');

            (0, _empty2.default)(captchaEl);

            var captchaRenderer = document.createElement('div');
            captchaEl.appendChild(captchaRenderer);
            window.grecaptcha.render(captchaRenderer, {
                sitekey: captchaEl.getAttribute('data-sitekey'),
                size: this.minWidth('m') ? 'normal' : 'compact'
            });
        }
    }, {
        key: 'sendData',
        value: function sendData() {
            var _this2 = this;

            var that = this;
            var formData = new FormData(this.contactForm);
            var action = this.contactForm.action;
            var method = this.contactForm.method;

            (0, _xhr2.default)({
                body: formData,
                uri: action,
                method: method
            }, function (err, resp, body) {
                var bodyObj = JSON.parse(body);
                var errors = bodyObj.errors;
                var isSent = bodyObj.is_sent;
                var contactErrorContainer = that.el.querySelector('#contact-error');

                if (!isSent) {

                    _this2._initCaptcha();

                    contactErrorContainer.classList.add('visible');
                    for (var error in errors) {
                        var formField = document.getElementById(error);

                        if (formField) {
                            formField.classList.remove('error');
                            formField.parentNode.classList.remove('error');

                            if (errors[error] && formField) {
                                formField.classList.add('error');
                                formField.parentNode.classList.add('error');
                            }
                        }
                    }

                    // Recaptcha specific errors
                    var recaptchaErrorEl = _this2.el.querySelector('.recaptcha-error');
                    if (errors['recaptcha']) {
                        recaptchaErrorEl.textContent = errors['recaptcha'];
                        recaptchaErrorEl.classList.add('visible');
                    } else {
                        recaptchaErrorEl.classList.remove('visible');
                    }
                } else {
                    // hide errors
                    contactErrorContainer.classList.remove('visible');

                    // remove errors from labels
                    var formLabels = document.getElementsByTagName('label');
                    for (var i = 0; i < formLabels.length; i++) {
                        formLabels[i].classList.remove('error');
                    }

                    // remove errors from inputs
                    var formInputs = document.getElementsByTagName('input');
                    for (var _i = 0; _i < formInputs.length; _i++) {
                        formInputs[_i].classList.remove('error');
                        formInputs[_i].value = '';
                    }

                    // remove errors from textareas
                    var formTextareas = document.getElementsByTagName('textarea');
                    for (var _i2 = 0; _i2 < formTextareas.length; _i2++) {
                        formTextareas[_i2].classList.remove('error');
                        formTextareas[_i2].value = '';
                    }

                    var submitContainer = _this2.el.querySelector('.submit-container .button');
                    submitContainer.classList.add('disabled');
                    submitContainer.querySelector('input[type="submit"]').disabled = true;

                    // show success message ?
                    var success = _this2.el.querySelector('.success');
                    success.classList.add('visible');

                    // this.contactForm.classList.add('is-sent');
                }
            });
        }

        /* ==========================
          Public Methods
          ========================== */

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_privateFunction',
        value: function _privateFunction() {}

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler() {}
    }, {
        key: '_formSubmitHandler',
        value: function _formSubmitHandler(event) {
            event.preventDefault();

            this.sendData();
        }
    }]);

    return ContactPage;
}(_Page3.default);

exports.default = ContactPage;

},{"app/pages/Page.abstract":251,"xhr":232,"zimplist/display/dom/empty":261}],249:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _findLast = require('lodash/findLast');

var _findLast2 = _interopRequireDefault(_findLast);

var _SpriteAnimator = require('zimplist/display/animation/SpriteAnimator');

var _SpriteAnimator2 = _interopRequireDefault(_SpriteAnimator);

var _ScrollingTracker = require('zimplist/utils/ScrollingTracker');

var _ScrollingTracker2 = _interopRequireDefault(_ScrollingTracker);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _getDocumentRect = require('zimplist/display/getDocumentRect');

var _getDocumentRect2 = _interopRequireDefault(_getDocumentRect);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

var _ProgressPath = require('app/components/ProgressPath');

var _ProgressPath2 = _interopRequireDefault(_ProgressPath);

var _CareerSlider = require('app/components/CareerSlider');

var _CareerSlider2 = _interopRequireDefault(_CareerSlider);

var _AlphaVideo = require('app/components/AlphaVideo');

var _AlphaVideo2 = _interopRequireDefault(_AlphaVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";


// Local app Dependencies


// Hidden consts
var MENU_COLLAPSE_HEIGHT = 111;

/**
 *
 */

var HomePage = function (_Page) {
    _inherits(HomePage, _Page);

    function HomePage(el, options) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, el, options));

        _this.careerSlider = new _CareerSlider2.default(_this.el.querySelector('.slider'));

        _this.progressPath = new _ProgressPath2.default(_this.el.querySelector('.progress-path'), {
            waypoints: Array.from(_this.el.querySelectorAll('.brand-initials')),
            cutouts: Array.from(_this.el.querySelectorAll('.progress-path-cutout'))
        });

        _this.alphaVideos = Array.from(_this.el.querySelectorAll('.alpha-video')).map(function (alphaVideo) {
            return new _AlphaVideo2.default(alphaVideo);
        });

        // wait for dancer video to be loaded
        _this.addDomEvent('loadedmetadata', function () {
            _WindowManager2.default.trigger('resize');
        }, _this.el.querySelector('.dancer-anim video'));

        if (window.dataLayer) {
            _this._initGTMTracking();
            _this._currentTackedSection = null;
        }

        _this._registerSubView(_this.progressPath);
        _this._registerSubView(_this.careerSlider);

        _this.breakpointChanged();

        _this._initScrollingTracker();
        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(HomePage, [{
        key: 'breakpointChanged',
        value: function breakpointChanged() {

            if (this.minWidth('m')) {

                if (!this.productSprite) {
                    var spriteEl = this.el.querySelector('.sprite');
                    this.productSprite = new _SpriteAnimator2.default(spriteEl, { fps: 0.75, numFrames: 9, url: spriteEl.getAttribute('data-src') });
                    this._registerSubView(this.productSprite);
                }
            } else {
                if (this.productSprite) {
                    this.productSprite.destroy();
                    this._unregisterSubView(this.productSprite);
                }
            }
        }
    }, {
        key: 'resize',
        value: function resize() {
            _get(HomePage.prototype.__proto__ || Object.getPrototypeOf(HomePage.prototype), 'resize', this).call(this);

            // Save section offset for GTM tracking
            this._sectionOffsets = Array.from(this.el.querySelectorAll('.page-section')).map(function (section) {
                return {
                    el: section,
                    offset: (0, _getDocumentRect2.default)(section).top - MENU_COLLAPSE_HEIGHT
                };
            });
        }

        /* ==========================
          Private Methods
          ========================== */

        /**
         * For performance and delayed animation reasons, we scroll track various elements
         *
         * @private
         */

    }, {
        key: '_initScrollingTracker',
        value: function _initScrollingTracker() {
            var _this2 = this;

            // this.scrollTracker = new ScrollingTracker();

            // scrolling tracker for butterfly anims for performance reasons
            Array.from(this.el.querySelectorAll('.butterfly-overlay.alpha-video')).forEach(function (overlay) {
                var tracker = _this2.scrollTracker.trackElement(overlay);
                tracker.on('state', function (event) {
                    var video = overlay.querySelector('video');
                    if (event.state === _ScrollingTracker2.default.STATE.OFF) {
                        video.pause();
                    } else {
                        video.play();
                    }
                });
            });

            // Scrolling tracker for product sprite animator
            if (this.productSprite) {
                var productSpriteTracker = this.scrollTracker.trackElement(this.productSprite.el);
                productSpriteTracker.on('state', function (event) {
                    if (event.state === _ScrollingTracker2.default.STATE.OVERLAP || event.state === _ScrollingTracker2.default.STATE.ON) {
                        _this2.productSprite.play();
                    } else {
                        _this2.productSprite.pause();
                    }
                });

                if (productSpriteTracker.state === _ScrollingTracker2.default.STATE.ON || productSpriteTracker.state === _ScrollingTracker2.default.STATE.OVERLAP) {
                    this.productSprite.play();
                }
            }

            // Track careers slider
            var careerSliderEl = this.el.querySelector('section.careers .slider');
            var careerSliderTracker = this.scrollTracker.trackElement(careerSliderEl);

            if (careerSliderTracker.state === _ScrollingTracker2.default.STATE.OFF) {
                var visibleSlides = Array.from(careerSliderEl.querySelectorAll('.slider-item.visible'));
                visibleSlides.forEach(function (slide) {
                    return slide.classList.add('anim-in');
                });
                careerSliderTracker.on('state', function (event) {
                    if (event.state !== _ScrollingTracker2.default.STATE.OFF) {
                        // remove event to only animate once
                        careerSliderTracker.off('state');
                        visibleSlides.forEach(function (slide, i) {
                            setTimeout(function () {
                                return slide.classList.remove('anim-in');
                            }, 400 + i * 200);
                        });
                    }
                });
            }

            // Scrolling tracker for dancer anim
            var dancerAnim = this.el.querySelector('.dancer-anim');
            var dancerAnimTracker = this.scrollTracker.trackElement(dancerAnim, 0.75);

            // only play once, so don't listen for events if already onscreen
            if (dancerAnimTracker.state === _ScrollingTracker2.default.STATE.ON || dancerAnimTracker.state === _ScrollingTracker2.default.STATE.OVERLAP) {
                dancerAnim.querySelector('video').play();
            } else {
                dancerAnimTracker.on('state', function (event) {
                    if (event.state === _ScrollingTracker2.default.STATE.OVERLAP || event.state === _ScrollingTracker2.default.STATE.ON) {
                        setTimeout(function () {
                            return dancerAnim.querySelector('video').play();
                        }, 375);
                        dancerAnimTracker.off('state');
                    } else {
                        dancerAnim.querySelector('video').pause();
                    }
                });
            }

            // Track theme items to fade in
            Array.from(this.el.querySelectorAll('.theme-container li.theme-hidden')).forEach(function (themeItem) {

                var tracker = _this2.scrollTracker.trackElement(themeItem);

                // only play once, so don't listen for events if already onscreen
                if (tracker.state === _ScrollingTracker2.default.STATE.ON || tracker.state === _ScrollingTracker2.default.STATE.OVERLAP) {
                    themeItem.classList.remove('theme-hidden');
                } else {
                    tracker.on('state', function (event) {
                        if (event.state === _ScrollingTracker2.default.STATE.OVERLAP || event.state === _ScrollingTracker2.default.STATE.ON) {
                            themeItem.classList.remove('theme-hidden');
                        }
                    });
                }
            });

            // enable scrolling tracker for dancer-line.
            var dancerLineFull = this.el.querySelector('.candidate .dancer-line .full');
            var dancerLineScrollTracker = this.scrollTracker.trackElement(dancerLineFull, 0.25);

            if (dancerLineScrollTracker.state === _ScrollingTracker2.default.STATE.ON) {
                dancerLineFull.classList.remove('stacked');
            } else {
                dancerLineScrollTracker.once('state:overlap', function () {
                    return dancerLineFull.classList.remove('stacked');
                });
            }
        }
    }, {
        key: '_initGTMTracking',
        value: function _initGTMTracking() {
            var _this3 = this;

            // Our values CTA
            this.addDomEvent('click', function (event) {
                window.dataLayer.push({
                    'event': 'virtualSection',
                    'pageGroupingMaison': 'Human Resources',
                    'section': 'brand-values',
                    'subSection': 'brand-values',
                    'uri': event.delegateTarget.getAttribute('href'),
                    'pageLanguage': document.documentElement.lang
                });
            }, 'section.brand-values .button');

            this.addDomEvent('click', function (event) {

                var link = event.delegateTarget.querySelector('.career-title a');

                window.dataLayer.push({
                    'event': 'virtualSection',
                    'pageGroupingMaison': 'Human Resources',
                    'section': 'human-resources',
                    'subSection': link.getAttribute('data-tracking-id'),
                    'uri': link.getAttribute('href'),
                    'pageLanguage': document.documentElement.lang

                });
            }, '.careers .slider-item');

            this.addDomEvent('click', function (event) {

                var link = event.delegateTarget;

                window.dataLayer.push({
                    'event': 'virtualSection',
                    'pageGroupingMaison': 'Human Resources',
                    'section': 'Human Resources',
                    'subSection': link.getAttribute('data-tracking-id'),
                    'uri': link.getAttribute('href'),
                    'pageLanguage': document.documentElement.lang
                });
            }, '.page-section.human-resources .button');

            this.addDomEvent('click', function (event) {
                window.dataLayer.push({
                    'event': 'virtualSection',
                    'pageGroupingMaison': 'Human Resources',
                    'section': 'candidate',
                    'subSection': 'candidate',
                    'uri': event.delegateTarget.getAttribute('href'),
                    'pageLanguage': document.documentElement.lang
                });
            }, 'section.candidate .button');

            this.listenTo(_WindowManager2.default, 'scroll', function (event) {

                var section = (0, _findLast2.default)(_this3._sectionOffsets, function (sectionOffset) {
                    return _WindowManager2.default.scrollPosition.top >= sectionOffset.offset;
                });

                if (section && section !== _this3._currentTackedSection) {
                    var sectionAnchor = section.el.querySelector('a[name]');
                    if (sectionAnchor) {

                        window.dataLayer.push({
                            'event': 'virtualSection',
                            'pageGroupingMaison': 'Human Resources',
                            'section': sectionAnchor.getAttribute('name'),
                            'uri': window.location.pathname,
                            'pageLanguage': document.documentElement.lang
                        });

                        _this3._currentTackedSection = section;
                    }
                }
            });
        }

        /* ==========================
          Event Handlers
          ========================== */

    }]);

    return HomePage;
}(_Page3.default);

exports.default = HomePage;

},{"app/components/AlphaVideo":234,"app/components/CareerSlider":235,"app/components/ProgressPath":239,"app/pages/Page.abstract":251,"lodash/findLast":181,"zimplist/display/animation/SpriteAnimator":260,"zimplist/display/getDocumentRect":266,"zimplist/utils/ScrollingTracker":273,"zimplist/utils/WindowManager":275}],250:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScrollingTracker = require('zimplist/utils/ScrollingTracker');

var _ScrollingTracker2 = _interopRequireDefault(_ScrollingTracker);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

var _ProfileSlider = require('app/components/ProfileSlider');

var _ProfileSlider2 = _interopRequireDefault(_ProfileSlider);

var _MediaGallery = require('app/components/MediaGallery');

var _MediaGallery2 = _interopRequireDefault(_MediaGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";

// Local app Dependencies


// Hidden consts

/**
 *
 */
var HumanResourcesPage = function (_Page) {
    _inherits(HumanResourcesPage, _Page);

    function HumanResourcesPage(el, options) {
        _classCallCheck(this, HumanResourcesPage);

        var _this = _possibleConstructorReturn(this, (HumanResourcesPage.__proto__ || Object.getPrototypeOf(HumanResourcesPage)).call(this, el, options));

        var profileEl = _this.el.querySelector('.career-profile-slider');
        if (profileEl) {
            _this.profilesSlider = new _ProfileSlider2.default(profileEl);
            _this._registerSubView(_this.profilesSlider);

            var profileTracker = _this.scrollTracker.trackElement(profileEl, 0.75);

            if (profileTracker.state !== _ScrollingTracker2.default.STATE.OFF) {
                _this._animateProfiles();
            } else {

                profileTracker.on('state', function (event) {
                    if (event.state === _ScrollingTracker2.default.STATE.OVERLAP || event.state === _ScrollingTracker2.default.STATE.ON) {
                        _this._animateProfiles();
                        profileTracker.off('state');
                    }
                });
            }
        }

        var mediaGalleryEl = _this.el.querySelector('.media-gallery');
        if (mediaGalleryEl) {
            _this.mediaGallery = new _MediaGallery2.default(mediaGalleryEl);
            _this._registerSubView(_this.mediaGallery);
        }

        // Google Tag Manager
        if (window.dataLayer) {
            _this._initGTMTracking();
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    /* ==========================
      Private Methods
      ========================== */

    _createClass(HumanResourcesPage, [{
        key: '_initGTMTracking',
        value: function _initGTMTracking() {
            this.addDomEvent('click', function (event) {

                var button = event.delegateTarget;

                var linkType = button.getAttribute('data-link-type');
                var externalPlatform = button.getAttribute('data-external-platform');

                if (linkType) {
                    window.dataLayer.push({
                        'event': 'externalClick',
                        'pageGroupingMaison': 'Human Resources',
                        'linkType': linkType,
                        'pageLanguage': document.documentElement.lang
                    });
                } else if (externalPlatform) {
                    window.dataLayer.push({
                        'event': 'externalClick',
                        'pageGroupingMaison': 'Human Resources',
                        'externalPlatform': externalPlatform,
                        'pageLanguage': document.documentElement.lang
                    });
                }
            }, '.button');

            this.addDomEvent('click', function () {

                window.dataLayer.push({
                    'event': 'videoPlay',
                    'line': 'Human Resources'
                });
            }, '.gallery-item.item-video.visible');
        }
    }, {
        key: '_animateProfiles',
        value: function _animateProfiles() {
            Array.from(this.profilesSlider.el.querySelectorAll('.career-profile')).forEach(function (card) {
                return card.classList.remove('hidden');
            });
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler(event) {}
    }]);

    return HumanResourcesPage;
}(_Page3.default);

exports.default = HumanResourcesPage;

},{"app/components/MediaGallery":237,"app/components/ProfileSlider":238,"app/pages/Page.abstract":251,"zimplist/utils/ScrollingTracker":273}],251:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _ContainerView2 = require('zimplist/display/ContainerView');

var _ContainerView3 = _interopRequireDefault(_ContainerView2);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _ScrollingTracker = require('zimplist/utils/ScrollingTracker');

var _ScrollingTracker2 = _interopRequireDefault(_ScrollingTracker);

var _Style = require('zimplist/utils/Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Depedencies


// Local app Dependencies


// Hidden consts

/**
 *
 */
var Page = function (_ContainerView) {
    _inherits(Page, _ContainerView);

    function Page(el, options) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, el, options));

        _this.listenTo(_WindowManager2.default, 'resize', _this.resize);

        // Every page needs a scrolling tracker
        var parentNode = _this.el.parentNode;

        _this.scrollTracker = new _ScrollingTracker2.default(_this.id === 'home' ? window : parentNode);

        var contentPageCover = _this.el.querySelector('.content-page-cover > img');
        if (contentPageCover) {
            _this.contentPageCover = contentPageCover;
            _this.addDomEvent('scroll', _this._scrollHandler, _this.scrollTracker.scrollContainer);
        }

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(Page, [{
        key: '_scrollHandler',
        value: function _scrollHandler(event) {
            var _this2 = this;

            if (!this.queuedFrame) {

                this.queuedFrame = requestAnimationFrame(function () {
                    var scrollTop = _this2.scrollTracker._getScrollContainerScrollTop();
                    _Style2.default.set(_this2.contentPageCover, { transform: 'translateY(' + scrollTop * 0.5 + 'px)' });
                    _this2.queuedFrame = null;
                });
            }
        }
    }, {
        key: 'id',
        get: function get() {
            return this.el.getAttribute('data-page-id');
        }
    }]);

    return Page;
}(_ContainerView3.default);

exports.default = Page;

},{"animejs":1,"lodash/debounce":173,"zimplist/display/ContainerView":259,"zimplist/utils/ScrollingTracker":273,"zimplist/utils/Style":274,"zimplist/utils/WindowManager":275}],252:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _ScrollingTracker = require('zimplist/utils/ScrollingTracker');

var _ScrollingTracker2 = _interopRequireDefault(_ScrollingTracker);

var _Page2 = require('app/pages/Page.abstract');

var _Page3 = _interopRequireDefault(_Page2);

var _ValuesWheel = require('app/components/values-wheel/ValuesWheel');

var _ValuesWheel2 = _interopRequireDefault(_ValuesWheel);

var _ValuesWheelSmall = require('app/components/values-wheel/ValuesWheelSmall');

var _ValuesWheelSmall2 = _interopRequireDefault(_ValuesWheelSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";


// Local app Dependencies


// Hidden consts

/**
 *
 */
var ValuesPage = function (_Page) {
    _inherits(ValuesPage, _Page);

    function ValuesPage(el, options) {
        _classCallCheck(this, ValuesPage);

        var _this = _possibleConstructorReturn(this, (ValuesPage.__proto__ || Object.getPrototypeOf(ValuesPage)).call(this, el, options));

        _this.addDomEvent('click', _this._moreValuesTriggerClickHandler, '.more-values-trigger');

        var valuesWheelEl = _this.el.querySelector('.values-wheel');

        if (_this.minWidth('m')) {
            _this.wheel = new _ValuesWheel2.default(valuesWheelEl);
        } else {
            _this.wheel = new _ValuesWheelSmall2.default(valuesWheelEl);
        }

        var wheelTracker = _this.scrollTracker.trackElement(valuesWheelEl);

        if (wheelTracker.state !== _ScrollingTracker2.default.STATE.OFF) {
            _this.wheel.introAnimation();
            _this.scrollTracker.untrackElement(wheelTracker);
        } else {
            wheelTracker.on('state', function (event) {
                if (event.state === _ScrollingTracker2.default.STATE.ON || event.state === _ScrollingTracker2.default.STATE.OVERLAP) {
                    _this.wheel.introAnimation();
                    wheelTracker.off('state');
                    _this.scrollTracker.untrackElement(wheelTracker);
                }
            });
        }

        // Google Tag Manager
        var buttons = _this.el.querySelectorAll('.button');

        buttons.forEach(function (button) {
            _this.addDomEvent('click', function () {

                var linkType = button.getAttribute('data-link-type');
                var externalPlatform = button.getAttribute('data-external-platform');

                if (linkType) {
                    window.dataLayer.push({
                        'event': 'externalClick',
                        'pageGroupingMaison': 'Human Resources',
                        'linkType': linkType,
                        'pageLanguage': document.documentElement.lang
                    });
                } else if (externalPlatform) {
                    window.dataLayer.push({
                        'event': 'externalClick',
                        'pageGroupingMaison': 'Human Resources',
                        'externalPlatform': externalPlatform,
                        'pageLanguage': document.documentElement.lang
                    });
                }
            }, button);
        });

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    /* ==========================
      Private Methods
      ========================== */


    _createClass(ValuesPage, [{
        key: '_privateFunction',
        value: function _privateFunction() {}

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_moreValuesTriggerClickHandler',
        value: function _moreValuesTriggerClickHandler(event) {

            var mask = this.el.querySelector('.more-values-mask');

            if (mask.classList.contains('hidden')) {
                (0, _animejs2.default)({
                    targets: mask,
                    duration: 1000,
                    height: [0, this.el.querySelector('.more-values-content').clientHeight],
                    easing: 'easeInOutCubic',
                    complete: function complete() {
                        mask.classList.remove('hidden');
                    }
                });

                this.el.querySelector('.trigger-container').classList.add('disabled');
            }
        }
    }]);

    return ValuesPage;
}(_Page3.default);

exports.default = ValuesPage;

},{"animejs":1,"app/components/values-wheel/ValuesWheel":241,"app/components/values-wheel/ValuesWheelSmall":242,"app/pages/Page.abstract":251,"zimplist/utils/ScrollingTracker":273}],253:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Page = require('app/pages/Page.abstract');

var _Page2 = _interopRequireDefault(_Page);

var _HomePage = require('app/pages/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ValuesPage = require('app/pages/ValuesPage');

var _ValuesPage2 = _interopRequireDefault(_ValuesPage);

var _CareersPage = require('app/pages/CareersPage');

var _CareersPage2 = _interopRequireDefault(_CareersPage);

var _HumanResourcesPage = require('app/pages/HumanResourcesPage');

var _HumanResourcesPage2 = _interopRequireDefault(_HumanResourcesPage);

var _ContactPage = require('app/pages/ContactPage');

var _ContactPage2 = _interopRequireDefault(_ContactPage);

var _CandidatePage = require('app/pages/CandidatePage');

var _CandidatePage2 = _interopRequireDefault(_CandidatePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Map of page ID's and view classes
// The keys must match the page IDs sent by the server
var pageList = {
    'default': _Page2.default,
    'home': _HomePage2.default,
    'our-values': _ValuesPage2.default,
    'careers': _CareersPage2.default,
    'human-resources': _HumanResourcesPage2.default,
    'contact': _ContactPage2.default,
    'candidate': _CandidatePage2.default,
    'legals': _Page2.default
};

exports.default = pageList;

},{"app/pages/CandidatePage":246,"app/pages/CareersPage":247,"app/pages/ContactPage":248,"app/pages/HomePage":249,"app/pages/HumanResourcesPage":250,"app/pages/Page.abstract":251,"app/pages/ValuesPage":252}],254:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _LinkSelect = require('app/components/LinkSelect');

var _LinkSelect2 = _interopRequireDefault(_LinkSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_BaseView) {
    _inherits(Footer, _BaseView);

    function Footer(el, options) {
        _classCallCheck(this, Footer);

        // init link select for languages
        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, el, options));

        _this.langSelect = new _LinkSelect2.default(_this.el.querySelector('.lang-select'));

        if (window.dataLayer) {
            _this._initGTMTracking();
        }

        return _this;
    }

    _createClass(Footer, [{
        key: '_initGTMTracking',
        value: function _initGTMTracking() {
            this.addDomEvent('click', function () {
                window.dataLayer.push({
                    'event': 'newsletterHR',
                    'pageGroupingMaison': 'Human Resources',
                    'pageLanguage': document.documentElement.lang
                });
            }, '.gtm');
        }
    }]);

    return Footer;
}(_BaseView3.default);

exports.default = Footer;

},{"app/components/LinkSelect":236,"zimplist/display/BaseView":258}],255:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _WindowManager = require('zimplist/utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _getDocumentRect = require('zimplist/display/getDocumentRect');

var _getDocumentRect2 = _interopRequireDefault(_getDocumentRect);

var _LinkSelect = require('app/components/LinkSelect');

var _LinkSelect2 = _interopRequireDefault(_LinkSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimplist Depedencies

// import getScrollParent from 'zimplist/display/dom/getScrollParent';

// Local app Dependencies


// Hidden consts
var SCROLL_SPEED_RATIO = 0.7;
var HEIGHT_HEADER_MENU = 111;

/**
 *
 */

var Header = function (_BaseView) {
    _inherits(Header, _BaseView);

    function Header(el, options) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, el, options));

        _this.langSelect = new _LinkSelect2.default(_this.el.querySelector('.lang-select'));

        // Dom Events
        _this.addDomEvent('transitionend', _this._transitionEndHandler);
        _this.addDomEvent('click', _this._menuToggleClickHandler, '.menu-toggle'); // specifying this.el prevents bubbled events from triggering this
        _this.addDomEvent('click', _this._menuItemClickHandler, '.menu a');
        _this.addDomEvent('click', _this._menuLogoClickHandler, '.small-logo');

        _this.listenTo(_WindowManager2.default, 'scroll', _this._scrollHandler);

        _this.langSelect.on('open', function (event) {
            _this.el.classList.add('is-fade-out');
        });

        _this.langSelect.on('close', function (event) {
            _this.el.classList.remove('is-fade-out');
        });

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(Header, [{
        key: 'breakpointChanged',
        value: function breakpointChanged(breakpoint, previousBreakpoint) {
            _get(Header.prototype.__proto__ || Object.getPrototypeOf(Header.prototype), 'breakpointChanged', this).call(this, breakpoint, previousBreakpoint);

            if (this.minWidth('m')) {
                this.close(); // Close because we don't need scroll lock
            }
        }
    }, {
        key: 'open',
        value: function open() {
            this.isOpen = true;
            this.el.classList.add('open');

            document.body.classList.add('scroll-lock');
        }
    }, {
        key: 'close',
        value: function close() {
            this.isOpen = false;
            this.el.classList.remove('open');

            document.body.classList.remove('scroll-lock');
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_scrollPage',
        value: function _scrollPage(offset, speed) {

            console.log(offset);

            if (this.minWidth('m')) {
                (0, _animejs2.default)({
                    targets: { // target is a proxy object to the window manager

                        get scrollTop() {
                            return _WindowManager2.default.scrollPosition.top;
                        },

                        set scrollTop(value) {
                            _WindowManager2.default.scrollTo(parseFloat(value), 0); // for some reason animejs sets a string for float values
                        }

                    },
                    duration: speed,
                    scrollTop: offset,
                    easing: 'easeInOutCubic'
                });
            } else {
                // offset = anchorBox.top - 20;
                _WindowManager2.default.scrollTo(offset);
                this.close();
            }
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_menuToggleClickHandler',
        value: function _menuToggleClickHandler() {
            this.isOpen ? this.close() : this.open();
        }
    }, {
        key: '_transitionEndHandler',
        value: function _transitionEndHandler(event) {

            if (event.target === this.el) {
                _WindowManager2.default.trigger('resize');
            }
        }
    }, {
        key: '_menuItemClickHandler',
        value: function _menuItemClickHandler(event) {

            if (!(event.metaKey || event.ctrlKey)) {
                event.preventDefault();

                var sectionName = event.delegateTarget.getAttribute('href').slice(1);
                var sectionAnchor = document.querySelector('a[name="' + sectionName + '"]').parentNode;

                var anchorBox = (0, _getDocumentRect2.default)(sectionAnchor);
                var offset = this.minWidth('m') ? anchorBox.top - HEIGHT_HEADER_MENU + 2 : // +2 to fudge the GTM tracking
                anchorBox.top - 22;

                var distance = Math.abs(_WindowManager2.default.scrollPosition.top - offset);

                this._scrollPage(offset, distance * SCROLL_SPEED_RATIO);
            }
        }
    }, {
        key: '_menuLogoClickHandler',
        value: function _menuLogoClickHandler(event) {
            event.preventDefault();
            event.stopPropagation();

            this._scrollPage(0, _WindowManager2.default.scrollPosition.top * SCROLL_SPEED_RATIO);
        }
    }, {
        key: '_scrollHandler',
        value: function _scrollHandler() {

            if (_WindowManager2.default.scrollPosition.top <= 100) {
                this.el.classList.remove('collapsed');
                document.body.classList.remove('menu-collapsed');
            } else {
                this.el.classList.add('collapsed');
                document.body.classList.add('menu-collapsed');
            }
        }
    }]);

    return Header;
}(_BaseView3.default);

exports.default = Header;

},{"animejs":1,"app/components/LinkSelect":236,"zimplist/display/BaseView":258,"zimplist/display/getDocumentRect":266,"zimplist/utils/WindowManager":275}],256:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _BaseView2 = require('zimplist/display/BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _empty = require('zimplist/display/dom/empty');

var _empty2 = _interopRequireDefault(_empty);

var _Keyboard = require('zimplist/input/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _SpriteAnimator = require('zimplist/display/animation/SpriteAnimator');

var _SpriteAnimator2 = _interopRequireDefault(_SpriteAnimator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies
// import _ from "lodash";


// Zimplist Depedencies


// Local app Dependencies


// Hidden consts

/**
 *
 */
var PageDraw = function (_BaseView) {
    _inherits(PageDraw, _BaseView);

    function PageDraw(el, options) {
        _classCallCheck(this, PageDraw);

        var _this = _possibleConstructorReturn(this, (PageDraw.__proto__ || Object.getPrototypeOf(PageDraw)).call(this, el, options));

        _this.pageContainer = _this.el.querySelector('.page-draw-main');

        var spriteCanvas = _this.el.querySelector('.sprite');
        _this.sprite = new _SpriteAnimator2.default(spriteCanvas, { fps: 25, autoplay: false, loop: false, numFrames: 36, url: spriteCanvas.getAttribute('data-src') });

        var loaderCanvas = document.body.querySelector('.page-draw-loader canvas');
        _this.loader = new _SpriteAnimator2.default(loaderCanvas, { fps: 25, autoplay: false, loop: true, numFrames: 36, url: loaderCanvas.getAttribute('data-src') });

        _this.addDomEvent('transitionend', _this._transitionEndHandler); // specifying this.el prevents bubbled events from triggering this // TODO test this

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    _createClass(PageDraw, [{
        key: 'injectPageEl',
        value: function injectPageEl(pageEl) {

            if (this.currentPageEl) {
                (0, _empty2.default)(this.pageContainer);
                this.pageContainer.scrollTop = 0;
            }

            this.currentPageEl = pageEl;

            if (!this.pageContainer.contains(pageEl)) {
                this.pageContainer.appendChild(pageEl);

                pageEl.style.opacity = 0;

                (0, _animejs2.default)({
                    targets: pageEl,
                    duration: 1000,
                    easing: 'easeOutCubic',
                    opacity: [0, 1]
                });
            }
        }
    }, {
        key: 'prepare',
        value: function prepare() {
            document.body.classList.add('page-draw-mask');
            this.loader.play();
        }
    }, {
        key: 'open',
        value: function open() {
            this.isOpen = true;
            document.body.classList.add('page-draw-open');

            /*if ( this.minWidth('m') ) {
                // setTimeout( () => this.sprite.play(), 800);
            }
            */
        }
    }, {
        key: 'close',
        value: function close() {
            this.isOpen = false;
            document.body.classList.remove('page-draw-open');
            document.body.classList.remove('scroll-lock');
            document.body.classList.remove('page-draw-mask');

            this.loader.pause();
            this.loader.currentFrame = 0;

            this.sprite.currentFrame = 0;
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_privateFunction',
        value: function _privateFunction() {}

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_transitionEndHandler',
        value: function _transitionEndHandler(event) {
            if (event.target === this.el) {
                if (this.isOpen) {
                    document.body.classList.add('scroll-lock');
                    if (this.minWidth('m')) {
                        this.sprite.play();
                    }
                } else {
                    (0, _empty2.default)(this.pageContainer);
                }
            }
        }
    }]);

    return PageDraw;
}(_BaseView3.default);

exports.default = PageDraw;

},{"animejs":1,"zimplist/display/BaseView":258,"zimplist/display/animation/SpriteAnimator":260,"zimplist/display/dom/empty":261,"zimplist/input/Keyboard":268}],257:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EVENTS = '_EVENTS'; // Define a unique key for all instances to create event hash on
var LISTEN_TARGETS = '_LISTEN_TARGETS'; // Define a unique key for all instances to create a listen array on;

/**
 * The EventTarget is a class that allows the use of custom events in it's instances. it is an implementation of the
 * Pub/Sub pattern.
 *
 * It is generally not used directly but is inherited from in other classes.
 *
 * Important : This class should not be mistaken with the native EventTarget class Elements, Window and Document inherit from.
 *
 */

var EventTarget = function () {

    /**
     * This MUST be called by sub-classes to instantiate the correct properties where events are stored.
     *
     */
    function EventTarget() {
        _classCallCheck(this, EventTarget);

        /**
         * @private
         * @type {{}}
         */
        this[EVENTS] = {};

        /**
         * @private
         * @type {Array}
         */
        this[LISTEN_TARGETS] = [];
    }

    /**
     * Register an event handler for a type
     * @param {string} type - The type of the event. A custom human readable string.
     * @param {function} handler - The function that will be invoked when the event is triggered. No signature is provided, it is up to the developer to determine what is passed to the listener at trigger time
     * @param {Object} [context=this] - The object the listener will called on. Defaults to `this` and can be changed if event delegation is needed.
     */


    _createClass(EventTarget, [{
        key: 'on',
        value: function on(type, handler) {
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;


            if (typeof type === 'string') {

                // ensure array of listeners for this type is available
                if (!this.hasListeners(type)) {
                    this[EVENTS][type] = [];
                }

                this[EVENTS][type].push({ handler: handler, context: context });
            } else {
                // Assume we have been passed an object of events.

                // loop over hash using key as type, and value as handler
                for (var key in type) {
                    if (type.hasOwnProperty(key)) {
                        var value = type[key];
                        this.on(key, value);
                    }
                }
            }
        }

        /**
         * Register an event handler that will trigger only once
         * @param {string} type - The type of the event. A custom human readable string.
         * @param {function} handler - The function that will be invoked when the event is triggered. No signature is provided, it is up to the developer to determine what is passed to the listener at trigger time
         * @param {Object} [context=this] - The object the listener will called on. Defaults to `this` and can be changed if event delegation is needed.
         */

    }, {
        key: 'once',
        value: function once(type, handler) {
            var _this = this;

            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;


            // create surrogate handler that will execute once an remove event
            var onceHandler = function onceHandler() {
                for (var _len = arguments.length, eventData = Array(_len), _key = 0; _key < _len; _key++) {
                    eventData[_key] = arguments[_key];
                }

                handler.apply(_this, eventData);
                _this.off(type, onceHandler);
            };

            // register our surrogate event
            this.on(type, onceHandler, context);
        }

        /**
         * Remove event handler, either of one type, or just one listener
         * @param {string} type - The type of the event. A custom human readable string.
         * @param {function} [handler] - The event handler to be removed. If unspecififed, all handlers of the supplied type are removed.
         */

    }, {
        key: 'off',
        value: function off(type, handler) {

            if (this.hasListeners(type)) {

                if (typeof handler === "undefined") {
                    this[EVENTS][type] = [];
                } else {
                    var registeredHandler = this[EVENTS][type].find(function (testHandler) {
                        return testHandler.handler === handler;
                    });
                    if (registeredHandler !== -1) {
                        this[EVENTS][type].splice(this[EVENTS][type].lastIndexOf(registeredHandler), 1);
                    }
                }
            }
        }

        /**
         * Utility to allow EventTargets to listen to other EventTarget's events easily
         *
         * @TODO handle objects like in `on`
         *
         * @param {EventTarget} target - The instance of EventTarget to listen to events on
         * @param {string} type - The type of the event. A custom human readable string.
         * @param {function} handler - The function that will be invoked when the event is triggered. No signature is provided, it is up to the developer to determine what is passed to the listener at trigger time
         */

    }, {
        key: 'listenTo',
        value: function listenTo(target, type, handler) {

            if (!(target instanceof EventTarget)) {
                throw new Error('Attempting to listenTo an object that does not inherit from EventTarget');
            }

            // Determine if we are listening to this object yet
            var targetListeners = this[LISTEN_TARGETS].find(function (testTarget) {
                return testTarget.target === target;
            });

            // If target listeners doesn't exist yet, add it here
            if (!targetListeners) {
                targetListeners = { target: target, listeners: {} };
                this[LISTEN_TARGETS].push(targetListeners);
            }

            // make sure an array for this type of event is available
            targetListeners.listeners[type] = targetListeners.listeners[type] || [];

            // Add to register of functions
            targetListeners.listeners[type].push(handler);

            // bind event normally
            target.on(type, handler, this);
        }

        /**
         * Stop listening for events on another EventTarget
         * @param {EventTarget} target - The instance of EventTarget to stop receiving events from.
         * @param {string} type - The type of the event. A custom human readable string.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(target, type) {

            // Determine if we are listening to this object yet
            // var targetListeners = _.find(this[LISTEN_TARGETS], {target : target });
            var targetListeners = this[LISTEN_TARGETS].find(function (testTarget) {
                return testTarget === target;
            });

            // If listeners are registered for this target
            if (targetListeners) {

                if (type) {

                    targetListeners.listeners[type].forEach(function (handler) {
                        target.off(type, handler);
                    });
                } else {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        var _loop = function _loop() {
                            var typeIter = _step.value;


                            targetListeners.listeners[typeIter].forEach(function (handler) {
                                target.off(typeIter, handler);
                            });
                        };

                        for (var _iterator = Object.keys(targetListeners.listeners)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            _loop();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }
        }

        /**
         * Determine if this object has events registered of a certain type
         * @param {string} type - Event type to check.
         * @returns {boolean} if the EventTarget has listeners for this type of event
         */

    }, {
        key: 'hasListeners',
        value: function hasListeners(type) {
            return typeof this[EVENTS][type] !== 'undefined';
        }

        /**
         * Trigger an event on this object
         * @param {string} type - The event type who's listeners will be triggered
         * @param {...*} eventParams - The parameters to be passed to the listening objects. Any number can be passed but it is recomended to only pass a single event object on which you may attach multiple properties.
         */

    }, {
        key: 'trigger',
        value: function trigger(type) {

            // if an event of this type has been registered on this event
            if (this.hasListeners(type)) {

                // loop over listeners registered for this event type
                // note : could have used for of, but could need a Symbol polyfill which is too much code.
                var handlers = this[EVENTS][type];

                for (var _len2 = arguments.length, eventParams = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    eventParams[_key2 - 1] = arguments[_key2];
                }

                for (var eventKey in handlers) {

                    if (handlers.hasOwnProperty(eventKey)) {
                        var event = this[EVENTS][type][eventKey];

                        event.handler.apply(event.context, eventParams);
                    }
                }
            }
        }
    }]);

    return EventTarget;
}();

exports.default = EventTarget;

},{}],258:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isElement = require('lodash/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _findLast = require('lodash/findLast');

var _findLast2 = _interopRequireDefault(_findLast);

var _EventTarget2 = require('../core/EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

var _WindowManager = require('../utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimple dependencies


/**
 * BaseView is the base class for organizing the DOM. It extends EventTarget to allow event based communication between
 * Views and their parents or other parts of the application that also inherit from EventTarget.
 *
 * BaseView enables easily adding DOM Events by doing the book keeping and allowing for event delegation.
 */
var BaseView = function (_EventTarget) {
    _inherits(BaseView, _EventTarget);

    /**
     *
     * @param {Element} el - The Element this view is responsible for. Saved to this.el, a View is always responsible
     *      For a single root element. The view can then split up it's contained elements with subviews
     * @param {Object} options - An object of options for the view
     * @param {Array} options.breakpoints - An array of breakpoint objects the view uses. If this options is specified,
     *      the `breakpointChanged` function will only be called with breakpoints specified here, otherwise it will be called
     *      for every breakpoint change.
     */
    function BaseView(el) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, BaseView);

        // Check supplied el parameter
        var _this = _possibleConstructorReturn(this, (BaseView.__proto__ || Object.getPrototypeOf(BaseView)).call(this));

        if (!el) {
            throw new Error('You must specify a root element for the View');
        } else if (!(0, _isElement2.default)(el)) {
            throw new Error('Supplied `el` argument needs to be a DOMElement');
        }

        // Save supplied values
        _this.el = el;
        _this.options = options;

        // Breakpoint handling
        if (_this.options.breakpoints) {
            // react only breakpoints specified in the options
            _this.breakpoints = (0, _filter2.default)(_WindowManager2.default.breakpoints, function (bp) {
                return (0, _includes2.default)(_this.options.breakpoints, bp.name);
            });
        } else {
            // use all breakpoints
            _this.breakpoints = (0, _clone2.default)(_WindowManager2.default.breakpoints);
        }

        // on first instantiation of any BaseView, bind the WindowManager.breakpoint handler
        if (!BaseView.instances.length) {
            _WindowManager2.default.on('breakpoint', breakpointHandler);
        }

        // Save newly created instance to static array.
        BaseView.instances.push(_this);

        // detect first breakpoint
        _this.currentBreakpoint = (0, _findLast2.default)(_this.breakpoints, function (bp) {
            return _WindowManager2.default.width >= bp.value;
        });

        return _this;
    }

    /**
     * Function is called when breakpoint is changed
     */


    _createClass(BaseView, [{
        key: 'breakpointChanged',
        value: function breakpointChanged() {}

        /**
         *  Bind a DOMEvent to the view, optionally filtered on the selector.
         *
         * @param {String} type - Event typoe
         * @param {Function(event)} listener - Event listener function that will be scoped to this view
         * @param {String|Element} [selector=this.el] - If selector is a String, the string will be used to test matching using
         *      delegated events to `this.el`. If it's an Element then bind event directly to that element.
         *      Binding directly to an element is usefull for events that don't bubble. (form submit, for example)
         */

    }, {
        key: 'addDomEvent',
        value: function addDomEvent(type, listener) {
            var _this2 = this;

            var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


            // init domEvents registry if not present
            this._domEvents = this._domEvents || {};

            // init registry for this type
            this._domEvents[type] = this._domEvents[type] || [];

            // Check selector is either a valid string or an element
            if (selector && !((0, _isString2.default)(selector) && selector !== 'all' || (0, _isElement2.default)(selector))) {
                throw new Error('Invalid selector passed to addDomEvent. Must be String or DOMElement. Can not be "all"');
            }

            // check we have a function to bind to.
            if (!(0, _isFunction2.default)(listener)) {
                throw new Error('no event listener function specified for addDomEvent');
            }

            // if the selector is an element, add event to it, otherwise use this.el for event delegation
            var target = (0, _isElement2.default)(selector) ? selector : this.el;

            // create internal listener that will be saved
            var internalListener = function internalListener(event) {

                // init a flag to indicate if a selector has been found
                var inSelector = false;

                // create element iterator that will climb up the DOM.
                var iterEl = void 0;

                if (!selector) {
                    inSelector = true; // if no selector specified, always trigger
                } else {

                    iterEl = event.target;

                    if ((0, _isString2.default)(selector)) {

                        while (iterEl !== _this2.el) {

                            // when clicking on SVG <use> tags in IE,
                            // the event.target is actually the declaration element, and not the actual <use> tag
                            // in that case, switch reference to the actual <use /> tag
                            if ("correspondingUseElement" in iterEl) {
                                iterEl = iterEl.correspondingUseElement;
                            }

                            // .matches does't exist on SVG elements in old IE
                            if ('matches' in iterEl && iterEl.matches(selector)) {
                                inSelector = true;
                                break;
                            } else {
                                iterEl = iterEl.parentNode;
                            }
                        }
                    } else if ((0, _isElement2.default)(selector)) {
                        // If selector is an Element, then it is our target and will always match
                        iterEl = selector;
                        inSelector = true;
                    }
                }

                if (inSelector) {
                    // Add found selector to event and transparently trigger our listener
                    event.delegateTarget = iterEl;
                    listener.apply(_this2, [event]);
                }
            };

            // Native dom event
            target.addEventListener(type, internalListener);

            // Save event object
            this._domEvents[type].push({ target: target, listener: internalListener });
        }

        /**
         * Remove DOM event from the element
         * @param {Element} target - The element to remove events from
         * @param {String} [type='all'] - The DOM event Type. Special keyword 'all' removes all event types
         */

    }, {
        key: 'removeDomEvent',
        value: function removeDomEvent(target) {
            var _this3 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';


            if (this._domEvents) {

                var events = void 0;
                if ((0, _isUndefined2.default)(type) || type === 'all') {
                    events = this._domEvents; // remove all events if no type is specified
                } else {
                    events = {};
                    events[type] = this._domEvents[type];
                }

                // for each event type
                (0, _each2.default)(events, function (eventListeners, iterType) {

                    // we don't want to modify the array in place during the loop, so save removed event listeners to an array
                    var removed = [];

                    // loop over listener objects and remove
                    (0, _each2.default)(eventListeners, function (listenerObj, i) {

                        if (!target || listenerObj.target == target) {
                            listenerObj.target.removeEventListener(iterType, listenerObj.listener);
                            removed.push(i);
                        }
                    });

                    // remove of listener objects now
                    removed.forEach(function (i) {
                        eventListeners.splice(i);
                    });

                    // Delete the object if there are no more listeners for this type
                    if (!eventListeners || eventListeners.length == 0) {
                        delete _this3._domEvents[iterType];
                    }
                });
            }
        }

        /**
         * Remove all DOM event listeners and remove the View element from the DOM. This function is used when we want to
         * remove the element from the DOM but want the view to stay in memory
         */

    }, {
        key: 'remove',
        value: function remove() {
            this.removeDomEvent();
            // Might not still be attached to DOM
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

        /**
         * Removes DOM Element and DOM events. Unbinds other Events.
         * Call this to clean up the view before de-referencing it.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.stopListening();
            this.remove();

            // Remove from internal list of instances
            BaseView.instances.splice(BaseView.instances.indexOf(this), 1);
        }

        /**
         * Dummy function to implement resizing
         */

    }, {
        key: 'resize',
        value: function resize() {}

        /**
         * Test to see if the viewport is currently at a certain breakpoint
         *
         * Proxies WindowManager.minWidth
         *
         * @param breakpoint {Number|String|Object} a breakpoint name, object or numerical value. See WindowManager.minWidth for more info
         * @returns {boolean}
         */

    }, {
        key: 'minWidth',
        value: function minWidth(breakpoint) {
            return _WindowManager2.default.minWidth(breakpoint);
        }
    }]);

    return BaseView;
}(_EventTarget3.default);

/**
 * Static array of instances
 * @static
 * @private
 * @type {Array<BaseView>}
 */


BaseView.instances = [];

/**
 * Single event handler from WindowManager breakpoint event. Handles calling of breakpointChanged on each instance if applicable
 * @private
 * @static
 * @param event
 */
function breakpointHandler(event) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = BaseView.instances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var instance = _step.value;

            // get the max breakpoint this instance handles
            var usedBreakpoint = (0, _findLast2.default)(instance.breakpoints, function (bp) {
                return event.breakpoint.value >= bp.value;
            });

            // Check it's not the current breakpoint and invoke breakpointChanged method
            if (!(0, _isEqual2.default)(usedBreakpoint, instance.currentBreakpoint)) {
                instance.currentBreakpoint = usedBreakpoint;
                instance.breakpointChanged(usedBreakpoint, event.previous);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

exports.default = BaseView;

},{"../core/EventTarget":257,"../utils/WindowManager":275,"lodash/clone":171,"lodash/each":175,"lodash/filter":178,"lodash/findLast":181,"lodash/includes":190,"lodash/isElement":197,"lodash/isEqual":198,"lodash/isFunction":199,"lodash/isString":205,"lodash/isUndefined":208}],259:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _BaseView2 = require('./BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Third party dependencies


// Zimple Depedencies


/**
 * A view that can contain other views.
 * Automatically call resize/breakpointChanged/destroy on children.
 */
var ContainerView = function (_BaseView) {
    _inherits(ContainerView, _BaseView);

    /**
     * See super declaration. This view also instantiates a subview array
     * @param el
     * @param options
     */
    function ContainerView(el, options) {
        _classCallCheck(this, ContainerView);

        /**
         * An array of contained sub views
         * @type {Array}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (ContainerView.__proto__ || Object.getPrototypeOf(ContainerView)).call(this, el, options));

        _this._subViews = [];

        return _this;
    }

    /* ==========================
      Public Methods
      ========================== */

    /**
     * Destroy
     */


    _createClass(ContainerView, [{
        key: 'destroy',
        value: function destroy() {
            var _this2 = this;

            // destroy and unregister all sub views
            this._subViews.forEach(function (view) {
                view.destroy();
                _this2._unregisterSubView(view);
            });

            // after this view is done, call super destroyer to do the real cleanup
            _get(ContainerView.prototype.__proto__ || Object.getPrototypeOf(ContainerView.prototype), 'destroy', this).call(this);
        }

        /**
         * Call resize for all the sub-views
         */

    }, {
        key: 'resize',
        value: function resize() {
            this._subViews.forEach(function (view) {
                return view.resize();
            });
            _get(ContainerView.prototype.__proto__ || Object.getPrototypeOf(ContainerView.prototype), 'resize', this).call(this);
        }

        /* ==========================
          Private Methods
          ========================== */

        /**
         *
         * @param {BaseView} view - the sub-view to register with this as a parent
         * @private
         */

    }, {
        key: '_registerSubView',
        value: function _registerSubView(view) {

            if (!(view instanceof _BaseView3.default)) {
                throw new Error('Attempting to add a sub-view to the container that does not inherit from BaseView');
            }

            // only one copy of each view
            if (!(0, _includes2.default)(this._subViews, view)) {
                this._subViews.push(view);
            }

            if (!this.el.contains(view.el)) {
                console.warn('Adding sub-view who\'s DOM element isn\'t contained in this.el');
            }
        }

        /**
         *  Remove sub-view from internal array
         * @param view
         * @private
         */

    }, {
        key: '_unregisterSubView',
        value: function _unregisterSubView(view) {
            var viewIndex = this._subViews.indexOf(view);

            if (viewIndex > -1) {
                this._subViews.splice(viewIndex, 1);
            }
        }
    }]);

    return ContainerView;
}(_BaseView3.default);

exports.default = ContainerView;

},{"./BaseView":258,"lodash/includes":190}],260:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseView2 = require('../BaseView');

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _ImageLoader = require('../../net/ImageLoader');

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // UZIK Depedencies


// Hidden consts

/**
 *
 *
 *
 */
var SpriteAnimator = function (_BaseView) {
    _inherits(SpriteAnimator, _BaseView);

    function SpriteAnimator(el, options) {
        _classCallCheck(this, SpriteAnimator);

        /**
         * Save rendering context reference
         * @type {CanvasRenderingContext2D}
         */
        var _this = _possibleConstructorReturn(this, (SpriteAnimator.__proto__ || Object.getPrototypeOf(SpriteAnimator)).call(this, el, options));

        _this.drawingContext = _this.el.getContext('2d');

        // HiDPI support
        _this.drawingContext.scale(1, 1);

        /**
         * Calc frame duration with FPS.
         * @type {number}
         */
        _this.frameDuration = 1000 / options.fps;

        /**
         * Get total number of frames. We can't calc this automatically.
         * @type {number}
         */
        _this.numFrames = options.numFrames;

        /**
         * Loop in point is the frame to loop from. If this value is -1, the sprite will not loop
         * @type {number}
         */
        _this.loop = options.loop === false ? -1 : options.loop || 0;

        _this.width = _this.el.width;
        _this.height = _this.el.height;

        _this._currentFrame = 0;
        _this.isPlaying = false;

        _this.imageLoader = new _ImageLoader2.default(options.url);
        _this.imageLoader.promise.then(function (img) {

            _this.source = img.data;

            _this.sourceCols = Math.floor(_this.source.width / _this.width);
            _this.sourceRows = Math.floor(_this.source.height / _this.height);

            if (options.autoplay || _this._playAfterLoad) {
                _this.play();
            }
        });

        return _this;
    }

    /* ==========================
      Getters and setters
      ========================== */

    _createClass(SpriteAnimator, [{
        key: 'play',


        /* ==========================
          Public Methods
          ========================== */

        value: function play() {
            var _this2 = this;

            if (this.imageLoader.status !== 'complete') {
                this._playAfterLoad = true;
                return;
            }

            this.isPlaying = true;

            if (!this.queuedFrame) {
                this.queuedFrame = requestAnimationFrame(function () {
                    if (isNaN(_this2.lastRender) || Date.now() - _this2.lastRender > _this2.frameDuration) {
                        _this2._render();
                    }

                    _this2.queuedFrame = null; // empty ref
                    if (_this2.isPlaying) _this2.play();
                });
            }
        }
    }, {
        key: 'pause',
        value: function pause() {

            this.isPlaying = false;

            if (this.queuedFrame) {
                window.cancelAnimationFrame(this.queuedFrame);
                this.queuedFrame = null;
                this._playAfterLoad = false; // in case the sprite is played and paused before load
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.pause();
            _get(SpriteAnimator.prototype.__proto__ || Object.getPrototypeOf(SpriteAnimator.prototype), 'destroy', this).call(this);
        }

        /* ==========================
          Private Methods
          ========================== */

    }, {
        key: '_render',
        value: function _render() {
            var frame = this._currentFrame + 1;

            if (frame >= this.numFrames - 1) {

                if (this.loop < 0) {
                    this.pause();
                    this._currentFrame = 0;
                    return;
                } else {
                    frame = this.loop;
                }
            }

            this.drawingContext.clearRect(0, 0, this.width, this.height);

            var x = Math.floor(frame % this.sourceCols);
            var y = Math.floor(frame / this.sourceCols);

            this.drawingContext.drawImage(this.source, x * this.width, y * this.height, this.width, this.height, 0, 0, this.width, this.height);

            this._currentFrame = frame;
            this.lastRender = Date.now();
        }

        /* ==========================
          Event Handlers
          ========================== */

    }, {
        key: '_childClickHandler',
        value: function _childClickHandler() {}
    }, {
        key: 'currentFrames',
        get: function get() {
            return this._currentFrame;
        }
    }, {
        key: 'currentFrame',
        set: function set(value) {
            this._currentFrame = value - 1;
            this._render();
        }
    }]);

    return SpriteAnimator;
}(_BaseView3.default);

exports.default = SpriteAnimator;

},{"../../net/ImageLoader":270,"../BaseView":258}],261:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Simple function to empty an element
 * @param {Element} el - DOMElement to empty by removing all it's children.
 */
var empty = function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

exports.default = empty;

},{}],262:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Find the first parent that is scrollable. in most cases this will be the document itself.
 * @param {Element} el - The element we need to find the scroll parent for
 * @returns {Element}
 */
function getScrollParent(el) {

    // Default is HTML tag
    var scrollParent = document.documentElement;

    var elIter = el;
    while (elIter.parentNode && elIter !== document.documentElement) {
        elIter = elIter.parentNode;

        if (/(auto|scroll)/.test(window.getComputedStyle(elIter).overflowY)) {
            scrollParent = elIter;
            break;
        }
    }

    return scrollParent;
}

exports.default = getScrollParent;

},{}],263:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isElement = require('lodash/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _indexOf = require('lodash/indexOf');

var _indexOf2 = _interopRequireDefault(_indexOf);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get index of searchCriteria in a collection of nodes (default is searchCritera's siblings
 * @param {Element|string} searchCriteria - An element or CSS selector to find an element
 * @param {Array<Element>} collection - The array of nodes to search in.
 * @returns {number} Index of the search criteria or -1 if the searchCritera was not found in this collection
 */
var index = function index(searchCriteria, collection) {

    var index = -1;

    // if collection parameter isn't present or an element, assume we want to find it's place among the other children of it's parent.
    if (!collection || !(0, _isElement2.default)(collection)) {
        collection = Array.from(searchCriteria.parentNode.children);
    }

    // check the collection is an array
    if ((0, _isArray2.default)(collection)) {

        // search as literal object
        if ((0, _isElement2.default)(searchCriteria)) {
            index = (0, _indexOf2.default)(collection, searchCriteria);
            // search as CSS selector
        } else if ((0, _isString2.default)(searchCriteria)) {
            index = (0, _findIndex2.default)(collection, function (item) {
                return item.matches(searchCriteria);
            });
        } else {
            throw new Error('Search criteria must be an element or a String');
        }
    } else {
        throw new Error('Trying to get an index in a non-Array collection');
    }

    return index;
};

exports.default = index;

},{"lodash/findIndex":180,"lodash/indexOf":191,"lodash/isArray":193,"lodash/isElement":197,"lodash/isString":205}],264:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Remove multiple classes from an Element. Supports removing classes with `*` wildcard
 *
 * @param {Element} el - DOM element to remove classes from
 * @param {...string} patterns - One or more class patterns. Patterns must be CSS class names but can also contain `*` as a wildcard.
 */
var removeClasses = function removeClasses(el) {

    // save classes to avoid transforming the className of the el multiple times
    var classes = el.className;

    for (var _len = arguments.length, patterns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        patterns[_key - 1] = arguments[_key];
    }

    patterns.forEach(function (pattern) {

        // replace wildcard with regex, add space matcher after for elements with multiple classes
        var patternRegex = new RegExp(pattern.replace('*', '[a-zA-Z0-9-_]+') + '\\s?');

        // remove classes using Regex
        classes = classes.replace(patternRegex, '');
    });

    // re assign new classes to the element
    el.className = classes;
};

exports.default = removeClasses;

},{}],265:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Turns a string representing one or more DOM elements into usable objects.
 * @param {string} sourceString
 * @returns {Element|DocumentFragment} The DOM representation of the string. If multiple root tags are present in the
 *     string, it will return a DocumentFragment
 */
var stringToElement = function stringToElement(sourceString) {
    // create a dummy element that is used
    var elementIterator = document.createElement("div");
    var i = void 0;

    // Throw the string into HTML
    elementIterator.innerHTML = sourceString;

    // If there are multiple root elements.
    if (elementIterator.children.length > 1) {
        // return document fragment
        var docFrag = document.createDocumentFragment();
        while (i = elementIterator.firstChild) {
            docFrag.appendChild(i);
        }

        return docFrag;
    } else {
        // just return first element
        return elementIterator.firstElementChild;
    }
};

exports.default = stringToElement;

},{}],266:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getScrollParent = require('./dom/getScrollParent');

var _getScrollParent2 = _interopRequireDefault(_getScrollParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDocumentRect = function getDocumentRect(el) {

    var elRect = el.getBoundingClientRect();

    var scrollEl = (0, _getScrollParent2.default)(el);

    return {
        top: elRect.top + scrollEl.scrollTop,

        left: elRect.left + scrollEl.scrollTop,

        width: elRect.width,
        height: elRect.height,

        right: elRect.right + scrollEl.scrollLeft,
        bottom: elRect.bottom + scrollEl.scrollTop
    };
};

exports.default = getDocumentRect;

},{"./dom/getScrollParent":262}],267:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        var angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
        var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;

        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;

        // Save optional angle and distance
        this.angle = angle;
        this.distance = distance;
    }

    _createClass(Point, [{
        key: "toPolar",
        value: function toPolar() {

            // calculate polar coordinates if they weren't supplied to the constructor
            if (isNaN(this.angle) || isNaN(this.distance)) {
                this.distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
                this.angle = Math.atan2(this.y, this.x);
            }

            return {
                angle: this.angle,
                distance: this.distance
            };
        }
    }]);

    return Point;
}();

/**
 *
 * @param {Point} a
 * @param {Point} b
 */


Point.distance = function (a, b) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
};

exports.default = Point;

},{}],268:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventTarget2 = require('../core/EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Keyboard class provides a small abstraction layer to make Keyboard events more EventTarget friendly
 *
 */
var Keyboard = function (_EventTarget) {
  _inherits(Keyboard, _EventTarget);

  /**
   *
   * @param {Element} [target=window.document] - The element to listen to events to. Defaults to the document.
   */
  function Keyboard() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.document;

    _classCallCheck(this, Keyboard);

    /**
     * DOM event target
     * @type {Element}
     */
    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

    _this.target = target;

    /**
     *
     * @type {{press: (function(event:Event)), down: (function(event:Event))}}
     * @private
     */
    _this._keyboardEvents = {
      press: _this._keyPressHandler.bind(_this),
      down: _this._keyDownHandler.bind(_this)
    };

    target.addEventListener('keypress', _this._keyboardEvents.press);
    target.addEventListener('keydown', _this._keyboardEvents.down);

    return _this;
  }

  /**
   * Stop listening for events
   */


  _createClass(Keyboard, [{
    key: 'destroy',
    value: function destroy() {
      this.target.removeEventListener('keypress', this._keyboardEvents.press);
      this.target.removeEventListener('keydown', this._keyboardEvents.down);
    }

    /**
     * Keypress handler
     * @param {Event} event - DOM Event object
     * @emits {Event} Native event
     * @private
     */

  }, {
    key: '_keyPressHandler',
    value: function _keyPressHandler(event) {
      // forward event
      this.trigger('press', event);
    }

    /**
     * Keydown event. Adds symbol to event object before forwarding it.
     * @param {Event} event - DOM event
     * @emits {Event} Native event
     * @private
     */

  }, {
    key: '_keyDownHandler',
    value: function _keyDownHandler(event) {

      // get char
      event.symbol = Keyboard.codes[event.keyCode];

      // save latest points
      this.trigger('down', event);
    }
  }]);

  return Keyboard;
}(_EventTarget3.default);

// constant type values for comparison


Keyboard.keys = {};
Keyboard.keys.ESC = 27;

// Inverse lookup for keyboard values;
Keyboard.codes = [];
Keyboard.codes[27] = 'ESC';

exports.default = Keyboard;

},{"../core/EventTarget":257}],269:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _first3 = require('lodash/first');

var _first4 = _interopRequireDefault(_first3);

var _last3 = require('lodash/last');

var _last4 = _interopRequireDefault(_last3);

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _EventTarget2 = require('../core/EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * These constants represent gestures that the touch instance will try to match
 *
 *
 */
var GESTURES_DEFINITIONS = {

    /*
      SWIPE DETECTOR
      */
    'swipe': {
        detect: function detect(events, options) {

            var detection = null;

            // only detect swipes with multiple events
            if (events.length > 1) {
                var firstEvent = (0, _first4.default)(events);
                var lastEvent = (0, _last4.default)(events);

                // Swipe with one finger only.
                if (!isMultiTouch(firstEvent) && !isMultiTouch(lastEvent)) {

                    var deltaX = lastEvent.touches[0].screenX - firstEvent.touches[0].screenX;
                    var deltaY = lastEvent.touches[0].screenY - firstEvent.touches[0].screenY;

                    var aDeltaX = Math.abs(deltaX);
                    var aDeltaY = Math.abs(deltaY);

                    // determine direction by comparison
                    if (aDeltaX > 2 * aDeltaY && aDeltaX > options.swipeThreshold) {

                        detection = {
                            axis: 'x',
                            distance: {
                                x: deltaX,
                                y: deltaY
                            }
                        };
                    } else if (options.verticalSwipe && aDeltaY > 2 * aDeltaX) {

                        detection = {
                            axis: 'y',
                            distance: {
                                x: deltaX,
                                y: deltaY
                            }
                        };
                    }
                }
            }

            return detection;
        },
        dispatchEvent: function dispatchEvent(target, eventData) {

            // create event
            var swipeEvent = document.createEvent('CustomEvent');
            swipeEvent.initCustomEvent('swipe', true, false, null);
            swipeEvent.distance = eventData.distance;
            swipeEvent.axis = eventData.axis;

            // dispatch it through the DOM
            target.dispatchEvent(swipeEvent);
        },

        repeat: false
    },

    /*
      ZOOM DETECTOR
      */
    'zoom': {
        detect: function detect(events) {
            var detection = null;

            // only detect zooms with multiple events
            if (events.length >= 2) {

                var _first = events[events.length - 2];
                var _last = events[events.length - 1];

                // detect multiple multi touch events
                if (isMultiTouch(_first) && isMultiTouch(_last)) {

                    // get distances for both points
                    var firstDistance = touchDistance(_first);
                    var lastDistance = touchDistance(_last);

                    // Zoom is onlt when fingers expand away from each other
                    if (firstDistance < lastDistance) {

                        return {
                            distance: lastDistance,
                            center: touchCenter(_last)
                        };
                    }
                }
            }

            return detection;
        },
        dispatchEvent: function dispatchEvent(target, eventData) {

            // create event
            var swipeEvent = document.createEvent('CustomEvent');
            swipeEvent.initCustomEvent('zoom', true, false, null);
            swipeEvent.distance = eventData.distance;

            // dispatch it through the DOM
            target.dispatchEvent(swipeEvent);
        },

        repeat: true
    },

    'pinch': {
        detect: function detect(events) {
            var detection = null;

            // only detect zooms with multiple events
            if (events.length >= 2) {

                var _first2 = events[events.length - 2];
                var _last2 = events[events.length - 1];

                // detect multiple multi touch events
                if (isMultiTouch(_first2) && isMultiTouch(_last2)) {

                    // get distances for both points
                    var firstDistance = touchDistance(_first2);
                    var lastDistance = touchDistance(_last2);

                    if (firstDistance > lastDistance) {

                        return {
                            distance: lastDistance,
                            center: touchCenter(_last2)
                        };
                    }
                }
            }

            return detection;
        },
        dispatchEvent: function dispatchEvent(target, eventData) {

            // create event
            var swipeEvent = document.createEvent('CustomEvent');
            swipeEvent.initCustomEvent('zoom', true, false, null);
            swipeEvent.distance = eventData.distance;

            // dispatch it through the DOM
            target.dispatchEvent(swipeEvent);
        },

        repeat: true
    }

};

/**
 * Determines if event is detecting mutliple touch points.
 * @param {TouchEvent} event - The TouchEvent to test
 * @returns {boolean}
 */
function isMultiTouch(event) {
    return event.touches.length > 1;
}

/**
 * Get distance between two touches of an event. Simple square root.
 * @param {TouchEvent} event - A multi-touch native touch event
 * @returns {number} Distance in pixels between touches
 */
function touchDistance(event) {

    var a = event.touches[0];
    var b = event.touches[1];

    return Math.sqrt(Math.pow(b.clientX - a.clientX, 2) + Math.pow(b.clientY - a.clientY, 2));
}

/**
 * Get center of touch event's touches.
 * @param {TouchEvent} event - The native event to analyse.
 * @return {{x: number, y: number}} The center the supplied event's touches. If there is a single touch, it will return it's coordinates.
 */
function touchCenter(event) {
    if (isMultiTouch(event)) {

        var a = event.touches[0];
        var b = event.touches[1];

        var aX = a.clientX;
        var aY = a.clientY;

        var bX = b.clientX;
        var bY = b.clientY;

        //         start
        var x = aX + (bX - aX) / 2;
        var y = aY + (bY - aY) / 2;

        return {
            x: x,
            y: y
        };
    } else {
        var touch = event.touches[0];

        return {
            x: touch.clientX,
            y: touch.clientY
        };
    }
}

/**
 * Class to track simple touch gestures. Inspired partly by hammer.js
 *
 * @TODO make gestures optional, moving detectors into separate class
 * @todo configure gesture detectors to avoid useless operations on multiple objects
 *
 */

var Touch = function (_EventTarget) {
    _inherits(Touch, _EventTarget);

    /**
     * @param {Element} target - Target of touch events to listen to
     * @param {Object} options - Options for class behavior. See defaults for more info.
     */
    function Touch(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Touch);

        /**
         * Save event target
         * @type {Element}
         */
        var _this = _possibleConstructorReturn(this, (Touch.__proto__ || Object.getPrototypeOf(Touch)).call(this));

        _this.target = target;

        /**
         * Saved options with default values.
         * @type {Object}
         */
        _this.options = (0, _defaults2.default)(options, Touch.defaultOptions);

        // create and store bound functions that are used as event listeners
        _this._touchEvents = {
            start: _this._touchStartHandler.bind(_this),
            move: _this._touchMoveHandler.bind(_this),
            end: _this._touchEndHandler.bind(_this)
        };

        _this.target.addEventListener('touchstart', _this._touchEvents.start);
        _this.target.addEventListener('touchmove', _this._touchEvents.move);
        _this.target.addEventListener('touchend', _this._touchEvents.end);

        // To help handling whole touch cycle (start -> move -> end) listen to the end event on the window too.
        if (_this.options.bindWindowEnd) {
            window.addEventListener('touchend', _this._touchEvents.end);
        }

        return _this;
    }

    /**
     * Get distance between first and last event points on both axis
     * @return {Number} Distance in pixels between first and last points currently tracked. Based on the first touch of a multi touch events
     */


    _createClass(Touch, [{
        key: 'destroy',

        /**
         * Remove native events and cleanup
         */
        value: function destroy() {

            this.target.removeEventListener('touchstart', this._touchEvents.start);
            this.target.removeEventListener('touchmove', this._touchEvents.move);
            this.target.removeEventListener('touchend', this._touchEvents.end);

            if (this.options.bindWindowEnd) {
                window.removeEventListener('touchend', this._touchEvents.end);
            }
        }

        /* =======
          Private methods
          ======== */

        /**
         * Start tracking touch events on the target element.
         *
         * @param {TouchEvent} event - Native DOM event
         * @emits {TouchEvent} Native DOM event
         * @private
         */

    }, {
        key: '_start',
        value: function _start(event) {

            // in case 'end()' isn't called properly. Probably shouldn't happen.
            if (this.isTouched) this.end();

            /**
             * flag to indicate if there is acutally a touch on the device.
             * @type {boolean}
             */
            this.isTouched = true;

            /**
             * Internal buffer of events to analyse
             * @type {TouchEvent[]}
             * @private
             */
            this._eventBuffer = [event];

            /**
             * Internal list of gestures currently being detected
             * @type {{}}
             * @private
             */
            this._currentGestures = {};

            this.trigger('start', event);
        }

        /**
         *
         * @param {TouchEvent} event - Native DOM event
         * @private
         */

    }, {
        key: '_move',
        value: function _move(event) {
            this._eventBuffer.push(event);

            // Run detectors
            // TODO move to sub-class
            for (var gesture in GESTURES_DEFINITIONS) {

                var gestureDef = GESTURES_DEFINITIONS[gesture];
                var gestureInfo = gestureDef.detect(this._eventBuffer, this.options);

                // if gesture detected
                if (gestureInfo) {

                    // prevent repeat events on gestures that only should happen once per touch cycle (swipe for example). Could also be handled in touchend?
                    if (gestureDef.repeat || !gestureDef.repeat && !this._currentGestures[gesture]) {

                        // attempt to prevent default
                        event.preventDefault();

                        // save gesture
                        this._currentGestures[gesture] = gestureInfo;

                        if (this.options.domEvents) {
                            gestureDef.dispatchEvent(this.target, gestureInfo);
                        }

                        this.trigger(gesture, gestureInfo);
                    }
                }
            }

            this.trigger('move', event);
        }

        /**
         * End of touch. Reset internal vars
         * @param event - Native DOM event
         * @emits {TouchEvent} - Native DOM event
         * @private
         */

    }, {
        key: '_end',
        value: function _end(event) {

            // Trigger event before disposing of saved state
            this.trigger('end', event);

            this._eventBuffer = [];
            this.isTouched = false;
        }

        /* =======
          Event Handlers
          ======== */

        /**
         * Native start event handler
         * @param event
         * @private
         */

    }, {
        key: '_touchStartHandler',
        value: function _touchStartHandler(event) {

            // standard behviour is too disable scrolling and zooming on multi touch
            if (event.touches.length > 1) {
                event.preventDefault();
            }

            // if we're already touching, and another finger starts touching, treat it as a move
            if (this.isTouched) {
                this._move(event);
            } else {
                this._start(event);
            }
        }

        /**
         * Native move event handler
         * @param event
         * @private
         */

    }, {
        key: '_touchMoveHandler',
        value: function _touchMoveHandler(event) {

            // standard behviour is too disable scrolling and zooming on multi touch
            if (event.touches.length > 1) {
                event.preventDefault();
            }

            this._move(event);
        }

        /**
         * Native end event handker
         * @param event
         * @private
         */

    }, {
        key: '_touchEndHandler',
        value: function _touchEndHandler(event) {
            this._end(event);
        }
    }, {
        key: 'distance',
        get: function get() {

            // only return a number if there is a proper distance
            if (!this._eventBuffer || this._eventBuffer.length < 2) {
                return NaN;
            } else {

                var a = this._eventBuffer[0].touches[0];
                var b = this._eventBuffer[this._eventBuffer.length - 1].touches[0];

                return Math.sqrt(Math.pow(b.clientX - a.clientX, 2) + Math.pow(b.clientY - a.clientY, 2));
            }
        }

        /**
         * Get distance between first and last event points on the X axis
         * @return {Number} Distance in pixels between first and last points currently tracked. Based on the first touch of a multi touch events
         */

    }, {
        key: 'distanceX',
        get: function get() {
            // only return a number if there is a proper distance
            if (!this._eventBuffer || this._eventBuffer.length < 2) {
                return NaN;
            } else {

                var a = this._eventBuffer[0].touches[0];
                var b = this._eventBuffer[this._eventBuffer.length - 1].touches[0];

                return b.clientX - a.clientX;
            }
        }

        /**
         * Get distance between first and last event points on the Y axis
         * @return {Number} Distance in pixels between first and last points currently tracked. Based on the first touch of a multi touch events
         */

    }, {
        key: 'distanceY',
        get: function get() {
            // only return a number if there is a proper distance
            if (!this._eventBuffer || this._eventBuffer.length < 2) {
                return NaN;
            } else {

                var a = this._eventBuffer[0].touches[0];
                var b = this._eventBuffer[this._eventBuffer.length - 1].touches[0];

                return b.clientY - a.clientY;
            }
        }
    }]);

    return Touch;
}(_EventTarget3.default);

/**
 * @static
 * @type {{verticalSwipe: boolean, swipeThreshold: number, domEvents: boolean}}
 */


Touch.defaultOptions = {

    /**
     * Dected y axis when detecting swipes. Very often we don't want to block scrolling.
     */
    verticalSwipe: false,

    /**
     * Minimum distance to trigger swipe event
     */
    swipeThreshold: 10,

    /**
     * Will create and trigger custom bubbling DOM events for gestures.
     */
    domEvents: true

};

exports.default = Touch;

},{"../core/EventTarget":257,"lodash/defaults":174,"lodash/first":183,"lodash/last":211}],270:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _Loader2 = require('./Loader');

var _Loader3 = _interopRequireDefault(_Loader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageLoader = function (_Loader) {
    _inherits(ImageLoader, _Loader);

    function ImageLoader(url, srcset, sizes) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, ImageLoader);

        // make sure it's paused so we can change paused status
        var paused = options.paused;

        var _this = _possibleConstructorReturn(this, (ImageLoader.__proto__ || Object.getPrototypeOf(ImageLoader)).call(this, url, (0, _defaults2.default)({ paused: true }, options)));

        _this.srcset = srcset;
        _this.sizes = sizes;

        if (!paused) {
            _this.load();
        }

        return _this;
    }

    /**
     * Override load mechanism
     */


    _createClass(ImageLoader, [{
        key: 'load',
        value: function load() {
            var _this2 = this;

            var image = new Image();

            image.onload = function () {
                _this2.status = _Loader3.default.STATUS.LOADING;
                _this2._promiseResolve({ url: _this2.url, data: image, rawData: image });
                _this2._handleLoadComplete();
            };

            image.onerror = function () {
                _this2._promiseReject('Could not load Image : ');
                _this2._handleLoadComplete();
            };

            // If already loaded call load handler manually
            if (image.complete === true && image.width && image.height) {
                setTimeout(function () {
                    return image.onload();
                }, 0);
            }

            // Add properties to start the load
            if (this.srcset) image.srcset = this.srcset;
            if (this.sizes) image.sizes = this.sizes;
            image.src = this.url;
        }
    }]);

    return ImageLoader;
}(_Loader3.default);

exports.default = ImageLoader;

},{"./Loader":271,"lodash/defaults":174}],271:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xhr = require('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _EventTarget2 = require('../core/EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Zimple dependencies


var loaderID = 0;

var Loader = function (_EventTarget) {
    _inherits(Loader, _EventTarget);

    function Loader(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { paused: false, parseBody: true };

        _classCallCheck(this, Loader);

        var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));

        _this.url = url;
        _this.id = options.id || 'loader-' + loaderID++;

        _this.options = options;

        // Load progress, at construct, it is always 0
        _this.progress = 0;

        // Create Promise for this loader, and save the resolve and reject functions for later
        _this.promise = new Promise(function (resolve, reject) {
            _this._promiseResolve = resolve;
            _this._promiseReject = reject;
        });

        // Start or pause loading
        if (_this.options.paused) {
            _this.status = Loader.STATUS.PAUSED;
        } else {
            _this.load();
        }

        return _this;
    }

    _createClass(Loader, [{
        key: 'load',
        value: function load() {
            var _this2 = this;

            // detect type of load
            this.request = (0, _xhr2.default)({
                url: this.url,
                beforeSend: function beforeSend(nativeXHR) {
                    // attach progress event. you never know
                    nativeXHR.addEventListener('progress', function (event) {
                        _this2._handleLoadProgress(event); // force context to instance of preloader
                    });
                }
            }, function (err, response, body) {

                var statusCodeCategory = parseInt(response.statusCode.toString()[0]);

                if (err) {

                    _this2._promiseReject(new Error(response.text));
                    _this2._handleLoadComplete();
                } else if (_.includes([4, 5], statusCodeCategory)) {} else {

                    // always save a copy of the raw data
                    _this2.rawData = body;

                    // might want to parse the body
                    if (_this2.options.parseBody) {

                        // in case there isn't an extension, resort to content-type sniffing and forcing the type
                        if (_this2.url.lastIndexOf('.') < _this2.url.lastIndexOf('/')) {
                            var contentType = response.headers['content-type'];
                            var type = void 0;
                            if (contentType.toLowerCase().includes('application/json')) {
                                type = 'json';
                            }

                            _this2.data = Loader.parseResponseBody(_this2.url, body, type);
                        } else {
                            _this2.data = Loader.parseResponseBody(_this2.url, body);
                        }
                    } else {
                        _this2.data = body;
                    }

                    _this2._promiseResolve({ url: _this2.url, data: _this2.data, rawData: body });
                    _this2._handleLoadComplete();
                }
            });

            this.status = Loader.STATUS.LOADING;

            return this.promise;
        }
    }, {
        key: '_handleLoadProgress',
        value: function _handleLoadProgress(event) {
            if (event.lengthComputable) {
                this.progress = event.loaded / event.total;
                this.trigger('progress', { progress: this.progress });
            }
        }

        /**
         * Handle end of loading. including changing loader status and firing events
         * @protected
         */

    }, {
        key: '_handleLoadComplete',
        value: function _handleLoadComplete() {

            this.status = Loader.STATUS.COMPLETE;
            this.progress = 1;
            this.trigger('complete', { target: this });
        }
    }]);

    return Loader;
}(_EventTarget3.default);

/**
 * Helper to return a more usable object from the preloader. Simple detection based on file extension
 *
 * @param url the loaded file's URL
 * @param body th loaded file's content
 * @param forceType sometimes we need to force parsing of a certain type regardless of it's file name
 */


Loader.parseResponseBody = function (url, body) {
    var forceType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


    var returnObject = void 0;

    var ext = forceType !== null ? forceType : url.substr(url.lastIndexOf('.') + 1);

    switch (ext) {
        case 'js':
            returnObject = document.createElement('script');
            returnObject.textContent = body;
            break;
        case 'json':
            returnObject = JSON.parse(body);
            break;
        case 'svg':
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = body;
            returnObject = tempDiv.firstChild;
            break;
        default:
            // pass through
            returnObject = body;
    }

    return returnObject;
};

Loader.STATUS = {
    PAUSED: 'paused',
    LOADING: 'loading',
    COMPLETE: 'complete'
};

exports.default = Loader;

},{"../core/EventTarget":257,"xhr":232}],272:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfigClass = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _startsWith = require('lodash/startsWith');

var _startsWith2 = _interopRequireDefault(_startsWith);

var _endsWith = require('lodash/endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
    env: 'prod',
    basePath: '/',
    assetPath: '/'
};

var ConfigClass = function () {
    function ConfigClass() {
        _classCallCheck(this, ConfigClass);
    }

    _createClass(ConfigClass, [{
        key: 'initialize',
        value: function initialize(bootstrapConfig) {
            this.baseConfig = {};

            // merge default config
            (0, _defaults2.default)(this.baseConfig, bootstrapConfig, defaultConfig);

            // strip first slashes on sub dir paths
            this.baseConfig.assetPath = (0, _startsWith2.default)(this.baseConfig.assetPath, '/') ? this.baseConfig.assetPath.substr(1) : this.baseConfig.assetPath;

            // ensure trailing slash
            this.baseConfig.basePath += (0, _endsWith2.default)(this.baseConfig.basePath, '/') ? '' : '/';
            this.baseConfig.assetPath += (0, _endsWith2.default)(this.baseConfig.assetPath, '/') ? '' : '/';

            // auto detect protocol://domain:port
            this.baseConfig.origin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        }
    }, {
        key: 'env',
        get: function get() {
            return this.baseConfig.env;
        }
    }, {
        key: 'assetPath',
        get: function get() {
            return this.baseConfig.origin + this.baseConfig.basePath + this.baseConfig.assetPath;
        }
    }, {
        key: 'basePath',
        get: function get() {
            return this.baseConfig.origin + this.baseConfig.basePath;
        }
    }]);

    return ConfigClass;
}();

var Config = new ConfigClass();

exports.default = Config;
exports.ConfigClass = ConfigClass;

},{"lodash/defaults":174,"lodash/endsWith":176,"lodash/startsWith":215}],273:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tracker = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isElement = require('lodash/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _EventTarget3 = require('../core/EventTarget');

var _EventTarget4 = _interopRequireDefault(_EventTarget3);

var _WindowManager = require('../utils/WindowManager');

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _Style = require('../utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _getDocumentRect = require('../display/getDocumentRect');

var _getDocumentRect2 = _interopRequireDefault(_getDocumentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tracker = function (_EventTarget) {
    _inherits(Tracker, _EventTarget);

    function Tracker(el) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        _classCallCheck(this, Tracker);

        var _this = _possibleConstructorReturn(this, (Tracker.__proto__ || Object.getPrototypeOf(Tracker)).call(this));

        _this.el = el;
        _this.offset = offset;
        _this.side = null;
        _this.state = null;

        return _this;
    }

    return Tracker;
}(_EventTarget4.default);

/**
 *
 *  Scrolling tracker allows us to know when an element is off screen, overlapping the screen or completely on screen.
 *  It also allows us to know which side the center of the element is (top or bottom) *
 *
 * @todo untrack elements
 *
 */


var ScrollingTracker = function (_EventTarget2) {
    _inherits(ScrollingTracker, _EventTarget2);

    function ScrollingTracker() {
        var scrollContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

        _classCallCheck(this, ScrollingTracker);

        /**
         * @type {Window}
         */
        var _this2 = _possibleConstructorReturn(this, (ScrollingTracker.__proto__ || Object.getPrototypeOf(ScrollingTracker)).call(this));

        _this2.scrollContainer = scrollContainer;

        _this2._trackers = [];

        if (scrollContainer === window) {
            _this2.listenTo(_WindowManager2.default, 'scroll', _this2._windowScrollHandler);
        } else {
            // create our own scroll handler if scrolling an element
            _this2._scrollHandler = _this2._windowScrollHandler.bind(_this2);
            scrollContainer.addEventListener('scroll', _this2._scrollHandler);
        }

        _this2.listenTo(_WindowManager2.default, 'resize', _this2._windowResizeHandler);

        return _this2;
    }

    /*
      Public methods
      */

    /**
     * Start tracking the scrollPosition of an element
     * @param {Element} el - The element to track.
     * @param {Number} offset - A ratio of the total height
     * @returns {Tracker} A tracker object that will emit events
     */


    _createClass(ScrollingTracker, [{
        key: 'trackElement',
        value: function trackElement(el) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


            var tracker = new Tracker(el, offset);

            this._trackers.push(tracker);

            this.refreshElementMetrics(tracker);

            this._update(false);

            return tracker;
        }
    }, {
        key: 'untrackElement',
        value: function untrackElement(elOrTracker) {

            var trackerIndex = void 0;

            if (elOrTracker instanceof Tracker) {
                trackerIndex = this._trackers.indexOf(elOrTracker);
            } else {
                trackerIndex = (0, _findIndex2.default)(this._trackers, { el: elOrTracker });
            }
        }

        /**
         *
         * @param {Element|Tracker} elOrTracker - Element or Tracker object that needs to be refreshed
         */

    }, {
        key: 'refreshElementMetrics',
        value: function refreshElementMetrics(elOrTracker) {

            var trackers = void 0;

            if (!elOrTracker) {
                trackers = this._trackers;
            } else if ((0, _isElement2.default)(elOrTracker)) {
                trackers = this._trackers.find(function (tracker) {
                    return tracker === elOrTracker;
                });
            } else if (elOrTracker instanceof Tracker) {
                trackers = [elOrTracker];
            }

            trackers.forEach(function (tracker) {

                // Save & remove transforms
                var isInlineTransformStyle = /transform\s*:\s*[a-z0-9]+/i.test(tracker.el.getAttribute('style'));
                var isInlineTransitionStyle = /transition\s*:\s*[a-z0-9]+/i.test(tracker.el.getAttribute('style'));

                var currentTransform = _Style2.default.get(tracker.el, 'transform');
                var currentTransition = _Style2.default.get(tracker.el, 'transition');

                _Style2.default.set(tracker.el, {
                    transform: 'none',
                    transition: 'none'
                });

                // Measure and save metrics to tracker
                var elementMetrics = (0, _getDocumentRect2.default)(tracker.el);

                // apply offset
                var height = elementMetrics.height * tracker.offset;
                var top = elementMetrics.top + (elementMetrics.height - height) / 2;

                tracker.top = top;
                tracker.height = height;

                // re-apply Transforms and transitions if they were removed
                if (currentTransform && isInlineTransformStyle) {
                    _Style2.default.set(tracker.el, { transform: currentTransform });
                } else {
                    tracker.el.style.removeProperty('transform');
                }

                if (currentTransition || isInlineTransitionStyle) {
                    _Style2.default.set(tracker.el, { transition: currentTransition });
                } else {
                    tracker.el.style.removeProperty('transition');
                }
            });

            this._update(false);
        }

        /*
         Private methods
          */

    }, {
        key: '_getScrollContainerScrollTop',
        value: function _getScrollContainerScrollTop() {
            return this.scrollContainer === window ? _WindowManager2.default.scrollPosition.top : this.scrollContainer.scrollTop;
        }
    }, {
        key: '_getScrollContainerHeight',
        value: function _getScrollContainerHeight() {
            return this.scrollContainer === window ? _WindowManager2.default.height : this.scrollContainer.offsetHeight;
        }
    }, {
        key: '_update',
        value: function _update() {
            var _this3 = this;

            var triggerEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


            var screenTop = this._getScrollContainerScrollTop();
            var screenHeight = this._getScrollContainerHeight();
            var screenBottom = screenTop + this._getScrollContainerHeight();

            this._trackers.forEach(function (tracker) {

                var currentState = tracker.state;
                var currentSide = tracker.side;
                var newState = void 0;
                var newSide = void 0;

                var trackerTop = tracker.top;
                var trackerBottom = tracker.top + tracker.height;

                // State checking :

                // Check if element is OFF screen
                if (screenBottom < trackerTop || // off and below
                screenTop > trackerBottom) {
                    // off and above

                    newState = ScrollingTracker.STATE.OFF;

                    // Check if element is OVERLAPPING the screen
                } else if (screenTop < trackerTop && screenBottom < trackerBottom || // overlap bottom
                screenTop > trackerTop && screenTop < trackerBottom && // overlap above
                !(screenTop > trackerTop && screenBottom < trackerBottom)) {
                    // when an element is higher than  the screen, this avoids it never becoming on {

                    newState = ScrollingTracker.STATE.OVERLAP;

                    // If element is neither OFF or OVERLAPPING, it must be ON
                } else {
                    newState = ScrollingTracker.STATE.ON;
                }

                // Side checking :
                newSide = trackerTop + tracker.height * 0.5 < screenTop + screenHeight * 0.5 ? ScrollingTracker.SIDE.ABOVE : ScrollingTracker.SIDE.BELOW;

                // Determine if state or side has actually changed
                var updateState = newState !== currentState;
                var updateSide = newSide !== currentSide;

                // save values to tracker before emitting events for consistency.
                tracker.state = newState;
                tracker.side = newSide;

                if (triggerEvents) {

                    if (updateState) {
                        var eventObject = {
                            state: newState,
                            target: tracker
                        };

                        tracker.trigger('state', eventObject);
                        tracker.trigger('state:' + newState, eventObject);
                        _this3.trigger('element:state', eventObject);
                    }

                    if (updateSide) {

                        var _eventObject = {
                            side: newSide,
                            target: tracker
                        };

                        tracker.trigger('side', _eventObject);
                        tracker.trigger('side:' + newSide, _eventObject);
                        _this3.trigger('element:side', _eventObject);
                    }
                }
            });
        }

        /*
         Event handlers
          */

        // TODO rename because of div scrolling support

    }, {
        key: '_windowScrollHandler',
        value: function _windowScrollHandler(event) {
            this._update();
        }
    }, {
        key: '_windowResizeHandler',
        value: function _windowResizeHandler(event) {
            this.refreshElementMetrics();
        }
    }]);

    return ScrollingTracker;
}(_EventTarget4.default);

// Position relateive to the viewport


ScrollingTracker.STATE = {
    ON: 'on',
    OFF: 'off',
    OVERLAP: 'overlap'
};

// Side, determine if the element is below or above the screen. This also depends on the element height
ScrollingTracker.SIDE = {
    ABOVE: 'above',
    BELOW: 'below'
};

ScrollingTracker.DIRECTION = {
    UP: -1,
    DOWN: 1
};

exports.default = ScrollingTracker;
exports.Tracker = Tracker;

},{"../core/EventTarget":257,"../display/getDocumentRect":266,"../utils/Style":274,"../utils/WindowManager":275,"lodash/debounce":173,"lodash/findIndex":180,"lodash/isElement":197}],274:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _isElement = require('lodash/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// browser prefixes
var PREFIXES = ['Webkit', 'Moz', 'MS', 'O'];

// Cache of modifier functions once the proper prefix has been found
var prefixedModifierCache = {};

// Test element for finding prefixed properties
var prefixTestEl = document.createElement('div');

/**
 * Create a prefixed aware CSS modifier for a property.
 *
 * Generated modifiers are stored in the cache declared above
 *
 * @param property
 * @private
 * @returns {function}
 */
function createModifier(property) {

    // get all prefixed properties (and un-prefixed in first position). prefixed properties are camel cased
    var prefixedProperties = [property].concat(PREFIXES.map(function (prefix) {
        return prefix + (0, _capitalize2.default)(property);
    }));

    // find the first acceptable property name
    var prefixedPropName = (0, _find2.default)(prefixedProperties, function (prop) {
        return prop in prefixTestEl.style;
    });

    // cache modifier to object
    prefixedModifierCache[property] = function (targetStyle, value) {
        targetStyle[prefixedPropName] = value;
    };

    return prefixedModifierCache[property];
}

/**
 * Style util to help setting and getting style properties
 *
 * @todo accept shorthand transform properties like x,y,scale,rotate.
 * @type {{set: Style.set, get: Style.get, addUnits: Style.addUnits, stripUnits: Style.stripUnits}}
 */
var Style = {

    /**
     * Set styles on an Element
     *
     * @param {Element} element - The element on which to set styles. Can also be the Element's style object directly.
     * @param {Object} properties - Object with properties as keys and values as
     */
    set: function set(element, properties) {

        var elementStyles = (0, _isElement2.default)(element) ? element.style : element;

        // treat properties as an object of csspropertyname : value pairs
        for (var prop in properties) {
            if (properties.hasOwnProperty(prop)) {

                // if a the value of this properties isn't already a string, format it.
                var specifiedValue = properties[prop];
                var finalValue = void 0;

                if (specifiedValue !== null) {
                    finalValue = (0, _isString2.default)(specifiedValue) ? specifiedValue : this.addUnits(prop, specifiedValue);
                } else {
                    finalValue = null;
                }

                // get cached or new modifier function and use it to modify element styles
                (prefixedModifierCache[prop] || createModifier(prop))(elementStyles, finalValue);
            }
        }
    },

    /**
     * Get style applied to this element
     *
     * TODO check on element.style object if we can detect !important rules someway
     *
     * @param element
     * @param property
     * @returns {string|number} the CSS value
     */
    get: function get(element, property) {
        return this.stripUnits(property, window.getComputedStyle(element)[property]);
    },

    /**
     * Add units to the CSS value if possible. usefull for specifying pixel values as numbers
     *
     * @param {string} property - name of the CSS property
     * @param {string|number} value - value of the property that isn't a String
     * @param {string} [units='px'] - CSS unit for the value.
     * @returns {string} Value with appropriate units. be
     */
    addUnits: function addUnits(property, value) {
        var units = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';


        var formattedValue = void 0;

        switch (property) {
            case 'top':
            case 'right':
            case 'bottom':
            case 'left':
            case 'minWidth':
            case 'minHeight':
            case 'width':
            case 'height':
                formattedValue = value.toString() + units;
                break;

            case 'opacity':
                formattedValue = value;
                break;
        }

        // format to empty string
        if (formattedValue === null) formattedValue = '';

        return formattedValue;
    },

    /**
     * Strip units and return as a number if possible, otherwise return a string
     *
     * @param {string} property - the CSS property name
     * @param {*} value - CSS value as read from the browser.
     * @return {string|number} CSS value cast to number if possible
     */
    stripUnits: function stripUnits(property, value) {

        var formattedValue = void 0;

        switch (property) {
            case 'top':
            case 'right':
            case 'bottom':
            case 'left':
            case 'minWidth':
            case 'minHeight':
            case 'width':
            case 'height':
            case 'opacity':
                formattedValue = parseFloat(value);
                break;
        }

        return formattedValue;
    }

};

exports.default = Style;

},{"lodash/capitalize":170,"lodash/find":179,"lodash/isElement":197,"lodash/isString":205}],275:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowManagerClass = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _findLast = require('lodash/findLast');

var _findLast2 = _interopRequireDefault(_findLast);

var _EventTarget2 = require('../core/EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Cross platform function to get scroll position
var getScrollTop = function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

var getScrollLeft = function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

var WindowManager = void 0;

var WindowManagerClass = function (_EventTarget) {
    _inherits(WindowManagerClass, _EventTarget);

    function WindowManagerClass() {
        _classCallCheck(this, WindowManagerClass);

        // Singleton check
        if (WindowManager) {
            throw new Error("WindowManager is a Singleton, an instance already exists");
        }

        return _possibleConstructorReturn(this, (WindowManagerClass.__proto__ || Object.getPrototypeOf(WindowManagerClass)).call(this));
    }

    /* ==========================
      Initialization function
      ========================== */


    _createClass(WindowManagerClass, [{
        key: 'initialize',
        value: function initialize(config) {

            if (!this.initialized) {
                this.config = (0, _defaults2.default)(config || {}, WindowManagerClass.defaultConfig);

                /**
                 * Array of breakpoints. You can not change breakpoints once they are set
                 * @type {Array}
                 */
                this.breakpoints = this.config.breakpoints;

                // Freeze breakpoints
                this.breakpoints.forEach(function (bp) {
                    return Object.freeze(bp);
                });

                // Create and save Event Handlers
                this._domEvents = {};
                this._domEvents.resize = (0, _throttle2.default)(this._resizeHandler.bind(this), this.config.resizeThrottle);
                this._domEvents.load = this._loadHandler.bind(this);
                this._domEvents.unload = this._unloadHandler.bind(this);
                this._domEvents.scroll = (0, _throttle2.default)(this._scrollHandler.bind(this), this.config.scrollThrottle);

                // listen for events
                window.addEventListener('resize', this._domEvents.resize);
                window.addEventListener('load', this._domEvents.load);
                window.addEventListener('unload', this._domEvents.unload);

                this.bindScrollEvent();

                // set up variable tracking
                this.scrollPosition = this.scrollPosition || { top: getScrollTop() };

                // cache window metrics now
                this._updateMetrics();
                this._updateScrollMetrics();

                this._detectBreakpoint(true);

                this.initialized = true;
            }
        }

        /* ==========================
          Public Members
          ========================== */

        // Allow scroll event to be detached from window. Useful for virtual scrolling. (shout out to MG, he'll love it)
        /**
         * Start listening for native window scroll events
         */

    }, {
        key: 'bindScrollEvent',
        value: function bindScrollEvent() {
            window.addEventListener('scroll', this._domEvents.scroll);
        }

        /**
         * Stop listening for native window scroll events
         */

    }, {
        key: 'unbindScrollEvent',
        value: function unbindScrollEvent() {
            window.removeEventListener('scroll', this._domEvents.scroll);
        }

        /**
         * Scroll to this position in the window. Updates the internal variables.
         * @param {number} y - Move scroll to to here
         * @param {number} x - Move scroll left to here.
         */

    }, {
        key: 'scrollTo',
        value: function scrollTo() {
            var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


            this.scrollPosition.top = y;
            this.scrollPosition.left = x;

            window.scrollTo(x, y);
        }

        /**
         * Determine if the viewport is of a a minimum width
         *
         * @param {Object|String|Number} breakpoint - If of type object, assumes to be a named breakpoint object with a value property.
         *  If a string, a named breakpoint's name. If a number the breakpoint's value. A number maybe used to arbitrarily check window width
         * @returns {boolean} if the viewport is at least of breakpoint size.
         */

    }, {
        key: 'minWidth',
        value: function minWidth(breakpoint) {

            // Get numerical value for breakpoint
            var breakpointValue = void 0;
            if ((0, _isNumber2.default)(breakpoint)) {
                breakpointValue = breakpoint;
            } else if ((0, _isString2.default)(breakpoint)) {
                breakpointValue = (0, _find2.default)(this.breakpoints, { name: breakpoint }).value;
            } else if ((0, _isObject2.default)(breakpoint)) {
                breakpointValue = breakpoint.value;
            }

            return this.width >= breakpointValue;
        }

        /* ==========================
          Private Members
          ========================== */
        /**
         * Save the window metrics to this object
         * @private
         */

    }, {
        key: '_updateMetrics',
        value: function _updateMetrics() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }

        /**
         * Update internal var that tracks the scroll position
         * @private
         */

    }, {
        key: '_updateScrollMetrics',
        value: function _updateScrollMetrics() {
            this.scrollPosition.top = getScrollTop();
            this.scrollPosition.left = getScrollLeft();
        }

        /**
         * Called on window resize events to detect which breakpoint we're on
         *
         * @param {Boolean} [suppressEvents=false] - Do not trigger a breakpoint event when a change is detected
         * @private
         */

    }, {
        key: '_detectBreakpoint',
        value: function _detectBreakpoint() {
            var _this2 = this;

            var suppressEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            // find biggest matching BP
            var breakpoint = (0, _findLast2.default)(this.breakpoints, function (bp) {
                return _this2.width >= bp.value;
            });

            // ony if the breakpoint has changed
            if (this.currentBreakpoint !== breakpoint) {
                var previousBreakpoint = this.currentBreakpoint;
                this.currentBreakpoint = breakpoint;

                // dispatch event for breakpoint, simply cloning the BP object for the event data
                if (!suppressEvents) {
                    this.trigger('breakpoint', { breakpoint: breakpoint, previous: previousBreakpoint }); // TODO make breakpoints immutable
                }
            }
        }

        /* ==========================
          Event Handlers
          ========================== */
        /**
         * Internal window scroll handler. This call is throttled
         * @param event
         * @private
         */

    }, {
        key: '_scrollHandler',
        value: function _scrollHandler(event) {
            var previousTop = this.scrollPosition.top;
            this._updateScrollMetrics();
            var currentTop = this.scrollPosition.top;

            // determine direction by comparing previous scroll position
            var direction = previousTop < currentTop ? 1 : -1;

            // trigger custom event
            this.trigger('scroll', { scrollPosition: this.scrollPosition, direction: direction, originalEvent: event });
        }

        /**
         * Internal window resize handler. This call is throttled
         * @private
         */

    }, {
        key: '_resizeHandler',
        value: function _resizeHandler() {
            this._updateMetrics();
            this.trigger('resize', { width: this.width, height: this.height });
            this._detectBreakpoint();
        }

        /**
         * Called when the window unloads
         * @private
         */

    }, {
        key: '_unloadHandler',
        value: function _unloadHandler() {
            this.trigger('unload');
        }

        /**
         * Forward the window load event
         * @private
         */

    }, {
        key: '_loadHandler',
        value: function _loadHandler() {
            this.trigger('load');
        }
    }]);

    return WindowManagerClass;
}(_EventTarget3.default);

WindowManagerClass.defaultConfig = {
    scrollThrottle: 15, // number of ms between scroll events
    resizeThrottle: 50, // number of ms between resize events
    disableScrollClass: null, // class name to use for the disable scroll class. default is to apply styles directly
    disableUserInputClass: null // class name to use for the disable user input class. default is to apply styles directly
};

// Create our Singleton
exports.default = WindowManager = new WindowManagerClass();

// Export singleton by default and Class if introspection needed
exports.default = WindowManager;
exports.WindowManagerClass = WindowManagerClass;

},{"../core/EventTarget":257,"lodash/defaults":174,"lodash/find":179,"lodash/findLast":181,"lodash/isNumber":201,"lodash/isObject":202,"lodash/isString":205,"lodash/throttle":218}]},{},[245])