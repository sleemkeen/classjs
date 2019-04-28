// chat me up if you need clearity 
//slim

"use strict";


function cscjs() {
  this.getClass = function(b) {
  		return document.getElementsByClassName(b)[0];
  };
  this.getId = function(b) {
  		return document.getElementById(b);
  };
  this.getSelect = function(b) {
  		return document.querySelector(b);
  };

 }

cscjs.prototype.hide = function(a) {
	 return a.style.display = 'none';
};

cscjs.prototype.show = function(a) {
	 return a.style.display = 'block';
};

cscjs.prototype.fadeIn = function(a){
	return a.style.animation = 'fadein 2s';
}
cscjs.prototype.fadeOut = function(a){
	return a.style.transition = 'opacity 3s ease-in-out';
}

cscjs.prototype.getButtonValue = function(a,b){
	return b.val(a.value);

}


var init = new cscjs(); 

function $hide(b){
 	return init.hide(b);
}
function $show(b){
 	return init.show(b);
}

function $class(b){
	return init.getClass(b);
}
function $id(b){
	return init.getId(b);
}
function $select(b){
	return init.getSelect(b);
}
function $fadeIn(b){
	return init.fadeIn(b);
}
function $fadeOut(b){
	return init.fadeOut(b);
}
function $getvalue(a,b){
	return init.getButtonValue(a,b);
}





function add(...args) {
	return args.reduce((a, b) => {
		return a + b;
	});
}
function minus(...args) {
	return args.reduce((a, b) => {
		return a - b;
	});
}
function divide(...args) {
	return args.reduce((a, b) => {
		return a / b;
	});
}
function multiply(...args) {
	return args.reduce((a, b) => {
		return a * b;
	});
}
function log(a){
	return Math.log(a);
}
function sin(a){
	return Math.sin(a);
}
function tan(a){
	return Math.tan(a);
}

function clear(a){
	a.reset();
}







