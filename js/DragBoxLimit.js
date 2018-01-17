
function DragBoxLimit(boxId) {  
	DragBox.call(this, boxId)  
}

DragBoxLimit.prototype = new DragBox() 


DragBoxLimit.prototype.move = function(x, y) { 
	if (x <= 0) {
		x = 0     
	}
	if (y <= 0) { 
		y = 0    
	}
	DragBox.prototype.move.call(this,x,y)
}
