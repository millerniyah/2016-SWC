<script type="text/javascript">

  var canvas = document.getElementById('canvas');
  var drawingPad = canvas.getContext('2d');

  console.log(canvas);
  console.log(drawingPad);

  drawingPad.fillStyle = "hsla(0,10%,10%,1)";
  drawingPad.fillRect(0, 0, 20, 20);

  drawingPad.fillStyle = "hsla(0,10%,60%,1)";
  drawingPad.fillRect(40, 40, 20, 20);

  drawingPad.fillStyle = "hsla(0,10%,10%,1)";
  drawingPad.fillRect(0, 0, 20, 20);

  drawingPad.fillStyle = "hsla(0,10%,60%,1)";
  drawingPad.fillRect(80, 60, 40, 20);


</script>
