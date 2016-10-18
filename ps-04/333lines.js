var w = 100;
var h = 500;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var x = 0; x < 1000; x += 5) {
    ctx.moveTo(150, x);
    ctx.lineTo(x, 150);
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth=.5;
  ctx.stroke();
}
drawlines();

var w = 150;
var h = 1000;

var canvas = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var y = 0; y < 1000; y += 10) {
    ctx.moveTo(y, 150);
    ctx.lineTo(150, y);
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth=.5;
  ctx.stroke();
}

drawlines();
