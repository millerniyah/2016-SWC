var w = 100;
var h = 500;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function adjustLineStyle(y, lineY) {
  var distance = Math.abs(lineY - y);
  var lightness = 100 - distance;
  // hsl makes a color HUE, SATURATION, LIGHTNESS.
  // lightness will be how far Y is from the Y of line.
  ctx.strokeStyle = "hsl(80, 70%," + lightness + "%)";
  ctx.lineWidth = 1;
};

function clear() {
  ctx.fillStyle = 'hsla(0,0%,0%,0.1)';
  ctx.fillRect(0,0,500,500);
}

var startX = 0 ;
var endX = 500 ;

function drawlines(mouseEvent) {
  var mouseY = mouseEvent.offsetY;
  startX = startX + (Math.random() -.5) * 30;
  endX = endX + (Math.random()  -.5) * 30;
  ctx.strokeStyle = 'pink'
  ctx.beginPath();
  ctx.moveTo(startX, 10);
  ctx.lineTo(endX, mouseY);
  ctx.stroke();
}

setInterval(clear,40);
document.addEventListener('mousemove', drawlines);
//draw lines as as the mouse is hovered over the lines
//the lines are supposed to change size as the mouse is hovered over the canvas
//as lines reappear, they should change color randomly
