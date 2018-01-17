
function Snow (){
	FireWorm.call(this)
	this.ele.removeClass().addClass("snow")
	this.ele.css({top:0})
}

Snow.prototype = {}
for(var k in FireWorm.prototype){
	Snow.prototype[k] = FireWorm.prototype[k]
}
Snow.prototype.fly = function(){
	var y = $("body").height() - 50;
	this.ele.animate({
		top: y
	}, 1000)
	
}
