var Pencile = function(colorP, widthP)
{
  this.position = {X: 0, Y: 0};
  this.isPainting = false;
    //references to the canvas element
  this.sigCanvas = document.getElementById("canvasSignature");
  this.context = this.sigCanvas.getContext("2d");
  this.color = colorP;
  this.width = widthP;
  

  // draw a line to wherever the mouse moves to
  $(this.sigCanvas).on('mousedown', this.mousedown.bind(this));
  $(this.sigCanvas).on('mousemove', this.mousemove.bind(this));
  $(this.sigCanvas).on('mouseup', this.mouseup.bind(this));
  $(this.sigCanvas).on('mouseout', this.mouseout.bind(this));

}
Pencile.prototype.mousedown = 
function (mouseEvent)
{
  this.position = this.getPosition(mouseEvent, this.sigCanvas);
  this.isPainting = true;
  //begin drawing
  this.context.strokeStyle=Pen.color;
  this.context.lineWidth=Pen.width;
  this.context.moveTo(this.position.X, this.position.Y);
  this.context.beginPath();
};
Pencile.prototype.mousemove = 
function (mouseEvent)
{
  //begin drawing
    if(this.isPainting)
    {
      this.drawLine(mouseEvent, this.sigCanvas, this.context);
    }
};
Pencile.prototype.mouseup = 
function (mouseEvent)
{
    //finish drawing
    if(this.isPainting)
    {
    this.finishDrawing(mouseEvent, this.sigCanvas, this.context);
    }
    this.isPainting = false;
};
Pencile.prototype.mouseout = 
function (mouseEvent)
{
    //finish drawing
    if(this.isPainting == true){
    this.finishDrawing(mouseEvent, this.sigCanvas, this.context);
    }
    this.isPainting = false;
};

Pencile.prototype.getPosition = 
function (mouseEvent, sigCanvas)
{
  // point x,y
  var x = mouseEvent.pageX;
  var y = mouseEvent.pageY;
  //offset
  var offsetLeft = this.sigCanvas.offsetLeft;
  var offsetTop = this.sigCanvas.offsetTop;
  //x-offset
  var newX = x - this.sigCanvas.offsetLeft;
  var newY = y - this.sigCanvas.offsetTop;
  return {X : newX, Y : newY}
}

Pencile.prototype.drawLine = 
function (mouseEvent, sigCanvas, context)
{
  var position = this.getPosition(mouseEvent, this.sigCanvas);
  this.context.lineTo(position.X, position.Y);
  this.context.stroke();
}

Pencile.prototype.finishDrawing = 
function (mouseEvent, sigCanvas, context)
{
  // draw the line to the finishing coordinates
  this.drawLine(mouseEvent, sigCanvas, context);
  this.context.closePath();
}
Pencile.prototype.clearAll =
function (sigCanvas, context)
{
  //this.beginPath();
  this.context.clearRect(0, 0, this.sigCanvas.width, this.sigCanvas.height);
}
var Pen = new Pencile('black', 2);

$('#ecrire').on('click',function ()
{
  Pen.color = 'black';
  Pen.width = 2;  
});
$('#eface').on('click', function ()
{
  Pen.color = 'white';
  Pen.width = 20;
});
$('#cleanAll').on('click', function ()
{
  Pen.clearAll(Pen.sigCanvas, Pen.context);
});
$('#red').on('click',function ()
{
  Pen.color = 'red';
});
$('#blue').on('click',function ()
{
  Pen.color = 'blue';
});
$('#green').on('click',function ()
{
  Pen.color = 'green';
});
$('#fine').on('click',function ()
{
  Pen.width=2;
});
$('#normal').on('click',function ()
{
  Pen.width=5;
});
$('#epais').on('click',function ()
{
  Pen.width=10;
});