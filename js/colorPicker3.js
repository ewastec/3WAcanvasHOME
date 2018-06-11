var ColorPicker = function(){
    //references to the canvas element
    this.myCanvas = document.getElementById("myCanvas");
    this.context = this.myCanvas.getContext("2d");
    
    this.position = {X: 0, Y: 0};
    this.color = '';

    this.builtColorPalette();
    //choose color on mousedown
    $(this.myCanvas).on('mousedown', this.mousedown.bind(this));
    $(this.myCanvas).on('mouseup', this.mouseup.bind(this));
    $(this.myCanvas).on('mousemove', this.mousemove.bind(this));
}

ColorPicker.prototype.mousedown = 
function (mouseEvent)
{
    //mouseDown = true;
    position = this.getPosition(mouseEvent, this.myCanvas);
    //ImageData ctx.getImageData(sx, sy, sw, sh);
    var getImageData = this.context.getImageData(position.X, position.Y, 1, 1);
    this.color = 'rgba('+getImageData.data[0]+','+ getImageData.data[1]+', '+getImageData.data[2]+','+ getImageData.data[3]+')';
    console.log(this.color);
    var newCanvas = document.getElementById("new");
    var newcontext = newCanvas.getContext("2d");
    //void ctx.putImageData(imagedata, dx, dy);
    newcontext.fillStyle = this.color;
    newcontext.fillRect(0, 0, 50, 50);

    Pen.color = this.color;
}

ColorPicker.prototype.mouseup = 
function (mouseEvent)
{
    mouseDown = false;
};
ColorPicker.prototype.mousemove = 
function (mouseEvent)
{}
ColorPicker.prototype.getPosition = 
function (mouseEvent, myCanvas)
{
  // point x,y
  var x = mouseEvent.pageX;
  var y = mouseEvent.pageY;
  //offset
  var offsetLeft = this.myCanvas.offsetLeft;
  var offsetTop = this.myCanvas.offsetTop;
  //x-offset
  var newX = x - this.myCanvas.offsetLeft;
  var newY = y - this.myCanvas.offsetTop;
  return {X : newX, Y : newY}
};
ColorPicker.prototype.builtColorPalette = 
function(context)
{
    //CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
    this.gradient = this.context.createLinearGradient(0, 0, 250, 0);
    // Create color gradient
    this.gradient.addColorStop(0, 'black');
    this.gradient.addColorStop(0.2, 'blue');
    this.gradient.addColorStop(0.4, 'red');
    this.gradient.addColorStop(0.6, 'green');
    this.gradient.addColorStop(0.8, 'orange');
    this.gradient.addColorStop(1, 'white');
    // Apply gradient to canvas
    this.context.fillStyle = this.gradient;
    this.context.fillRect(0, 0, 250, 250);

    // Create semi transparent gradient (white -> trans. -> black)
    this.gradient = this.context.createLinearGradient(0, 0, 0, 250);
    this.gradient.addColorStop(0,   "rgba(255, 255, 255, 0.7)");
    this.gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    this.gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
    this.gradient.addColorStop(1,   "rgba(0,     0,   0, 0.7)");
    // Apply gradient to canvas
    this.context.fillStyle = this.gradient;
    this.context.fillRect(0, 0, 250,250);
};
var cp = new ColorPicker();
console.log(cp.mousedown());