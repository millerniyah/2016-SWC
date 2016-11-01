var w = 100;
var h = 500;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var x = 0; x < 1000; x += 15) {
    ctx.moveTo(500, x);
    ctx.lineTo(x, x);
  }

  ctx.strokeStyle = "white";
  ctx.lineWidth=2;
  ctx.stroke();
}

drawlines();

//draw lines as as the mouse hovered over the lines
//the lines are supposed to change size as the mouse is hovered over the canvas
//as lines reappear, they change color in gradient form
function mouseOver() {
   var element = document.getElementById("canvas");
   var top = parseInt(element.style.top) || 0;
   top = top -5;
   element.style.top = top + "px";
 }
