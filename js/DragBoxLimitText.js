
function DragBoxLimitText(boxId) {  
	DragBoxLimit.call(this, boxId)  
	this.elex = $('<p></p>')
	this.eley = $('<p></p>')
	this.elex.appendTo(boxId)
	this.eley.appendTo(boxId)
}

  
DragBoxLimitText.prototype = new DragBoxLimit()   


DragBoxLimitText.prototype.move = function(x, y) {  
	DragBoxLimit.prototype.move.call(this,x,y)
	this.elex.html("left:"+x)
	this.eley.html("top:"+y)
	
}
