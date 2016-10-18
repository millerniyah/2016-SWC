var w = 100;
var h = 500;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawlines(){
  for (var x = 0; x < 1000; x += 15) {
    ctx.moveTo(500, x);
    ctx.lineTo(x, x);
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth=1;
  ctx.stroke();
}

drawlines();
