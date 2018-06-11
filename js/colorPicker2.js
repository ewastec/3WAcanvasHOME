var ColorPicker = function(){
    //references to the canvas element
    this.myCanvas = document.getElementById("myCanvas");
    this.context = this.myCanvas.getContext("2d");
    //CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
    this.gradient = context.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(0.2, 'blue');
    gradient.addColorStop(0.4, 'red');
    gradient.addColorStop(0.6, 'green');
    gradient.addColorStop(0.8, 'orange');
    gradient.addColorStop(1, 'white');
    context.fillStyle = gradient;
    context.fillRect(10, 10, 200, 100);


/*    this.position = {X: 0, Y: 0};

    //choose color on mousedown
    $(this.myCanvas).on('mousedown', this.mousedown.bind(this));
    $(this.myCanvas).on('mouseup', this.mouseup.bind(this));
    $(this.myCanvas).on('mousemove', this.mousemove.bind(this));
    */
}
/*
ColorPicker.prototype.mousedown = 
function mousedown()
{
mouseDown = true;
};
ColorPicker.prototype.mouseup = 
function mouseup()
{
mouseDown = false;
};
ColorPicker.prototype.mousemove = 
function mousemove(evt)
{
    var mousePos = getPosition(mouseEvent, this.myCanvas);
    var color = undefined;

    if(mouseDown && mousePos !== null && mousePos.x > padding && mousePos.x < padding + imageObj.width && mousePos.y > padding && mousePos.y < padding + imageObj.height) {

        // color picker image is 256x256 and is offset by 10px
        // from top and bottom
        var imageData = context.getImageData(padding, padding, imageObj.width, imageObj.width);
        var data = imageData.data;
        var x = mousePos.x - padding;
        var y = mousePos.y - padding;
        var red = data[((imageObj.width * y) + x) * 4];
        var green = data[((imageObj.width * y) + x) * 4 + 1];
        var blue = data[((imageObj.width * y) + x) * 4 + 2];
        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
            drawColorSquare(canvas, color, imageObj);
        }
};
ColorPicker.prototype.getPosition = 
function getPosition(mouseEvent, myCanvas)
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
}
ColorPicker.prototype.drawColorSquare = 
function drawColorSquare(myCanvas, context, color, imageObj)
{
    var colorSquareSize = 100;
    var padding = 10;
    var squareX = (this.myCanvas.width - colorSquareSize + imageObj.width) / 2;
    var squareY = (this.myCanvass.height - colorSquareSize) / 2;

    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.fillRect(squareX, squareY, colorSquareSize, colorSquareSize);
    this.context.strokeRect(squareX, squareY, colorSquareSize, colorSquareSize);
}
function init(imageObj)
{
    var padding = 10;
    var mouseDown = false;

    this.context.strokeStyle = '#444';
    this.context.lineWidth = 2;

    this.context.drawImage(imageObj, padding, padding);
    drawColorSquare(this.mycanvas, 'white', imageObj);
}
*/
var cp = new ColorPicker();
$('#color-picker').on('click',function ()
{
    
});