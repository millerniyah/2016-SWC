var canvas = document.getElementById('corpse');
var ctx = canvas.getContext('2d');

var millerniyah = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

millerniyah.drawTop = function(ctx) {
  drawImage("https://millerniyah.github.io/2016-SWC/ps-06/head.png", ctx, 0, 0);
};

millerniyah.drawMiddle = function(ctx) {
  drawImage("https://millerniyah.github.io/2016-SWC/ps-06/body.png", ctx, 0, 240);
};

millerniyah.drawBottom = function(ctx) {
  drawImage("https://millerniyah.github.io/2016-SWC/ps-06/legs.png", ctx, 0, 480);
};

millerniyah.drawCorpse = function(ctx) {
  millerniyah.drawTop(ctx);
  millerniyah.drawMiddle(ctx);
  millerniyah.drawBottom(ctx);
};

window.millerniyah = millerniyah;

window.millerniyah.drawCorpse(ctx);
