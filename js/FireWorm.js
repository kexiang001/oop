
function FireWorm(){
		
		this.ele = $("<div></div>")
		this.ele.addClass("fireworm")  
		this.ele.appendTo("body") 
		var x = Math.random() * ($("body").width() - 100)
		var y = Math.random() * ($("body").height() - 100)
		this.ele.css({left:x,top:y})
}
FireWorm.prototype.fly = function(){
		var x = Math.random() * ($("body").width() - 100)
		var y = Math.random() * ($("body").height() - 100)
		var self = this
		this.ele.animate({
			left: x,
			top: y
		}, 1000, function() {
			self.fly()
		})
	}