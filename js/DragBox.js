

function DragBox(boxId) {
	this.ele = $(boxId)	
}
DragBox.prototype.start = function() {
	
	var self = this  
	this.ele.mousedown(function(e) { 
		var e = e || window
		e.preventDefault()
		var detaX = e.offsetX 
		var detaY = e.offsetY
		
		$(document).mousemove(function(e) {
			
			e.preventDefault()  
			var x = e.clientX - detaX 
			var y = e.clientY - detaY
			self.move(x, y)        
		})
		
		$(document).mouseup(function() { 
			self.stop()
		})
	})
}

DragBox.prototype.move = function(x, y) {
	this.ele.css({
		left: x,
		top: y
	})
}

DragBox.prototype.stop = function() {
	$(document).off("mouseup mousemove")
}
