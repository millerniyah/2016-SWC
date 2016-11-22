var snow = new Image();
function init(){
  snow.src="http://www.clipartkid.com/images/54/animated-clip-art-snow-falling-index-of-MgYceV-clipart.gif"
  window.requestAnimationFrame(draw);
}

ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150,100,50,20,30);
ctx.stroke();

ctx.fillStyle = 'white';
ctx.fillRect(150, 20, 10, 10);
