var position = {X: 0, Y: 0};
var isPainting = false;
//references to the canvas element
var sigCanvas = document.getElementById("canvasSignature");
var context = sigCanvas.getContext("2d");
var color = 'black';
var width = 3;

function getPosition(mouseEvent, sigCanvas){
  // point x,y
  var x = mouseEvent.pageX;
  var y = mouseEvent.pageY;
  //console.log(x);
  //console.log(y);

  //offset
  var offsetLeft = sigCanvas.offsetLeft;
  var offsetTop = sigCanvas.offsetTop;
  //console.log(offsetLeft);
  //console.log(offsetTop);

  //x-offset
  var newX = x - sigCanvas.offsetLeft;
  var newY = y - sigCanvas.offsetTop;
  //console.log(newX);
  //console.log(newY);

  return {X : newX, Y : newY}
}
function drawLine(mouseEvent, sigCanvas, context) {
  var position = getPosition(mouseEvent, sigCanvas);

  context.lineTo(position.X, position.Y);
  context.stroke();
}
function finishDrawing(mouseEvent, sigCanvas, context) {
  // draw the line to the finishing coordinates
  drawLine(mouseEvent, sigCanvas, context);

  context.closePath();

  // unbind any events which could draw
//   $(sigCanvas).unbind("mousemove")
//               .unbind("mouseup")
//               .unbind("mouseout");
}

function initialize(color, width) 
{      //color
      context.strokeStyle = color;
      context.lineWidth = width; 
      console.log(width); 
}

$('#ecrire').on('click',function () {
  var color = 'Black';
  initialize(color, width);
});
$('#eface').on('click', function () {
  var color = 'White';
  var width = 30;
  initialize(color, width);
});
$('#red').on('click',function () {
  var color = 'red';
  initialize(color, width);
});
$('#blue').on('click',function () {
  var color = 'blue';
  initialize(color, width);
});
$('#green').on('click',function () {
  var color = 'green';
  initialize(color, width);
});
$('#fine').on('click',function () {
  var width = 3;
  initialize(color, width);
});
$('#normal').on('click',function () { 
  var width = 5;
  initialize(color, width);
});
$('#epais').on('click',function () {
  
  var width = 10;
  initialize(color, width);
});

// draw a line to wherever the mouse moves to
$("#canvasSignature").mousedown(function (mouseEvent) {
  position = getPosition(mouseEvent, sigCanvas);
  //console.log(position);
  isPainting = true;

  //begin drawing
  context.moveTo(position.X, position.Y);
  context.beginPath();
});
  // more mouseEvent handlers
  $("#canvasSignature").mousemove(function (mouseEvent) {
    //begin drawing
  //context.moveTo(position.X, position.Y);
  //context.beginPath();
      //draw the line
      if(isPainting == true){
        drawLine(mouseEvent, sigCanvas, context);
      }
      
  });
  $("#canvasSignature").mouseup(function (mouseEvent) {
      //finish drawing
      if(isPainting == true){
      finishDrawing(mouseEvent, sigCanvas, context);
      }
      isPainting = false;
  });
  $("#canvasSignature").mouseout(function (mouseEvent) {
      //finish drawing
      if(isPainting == true){
      finishDrawing(mouseEvent, sigCanvas, context);
      }
      isPainting = false;
  });