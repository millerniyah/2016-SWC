window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var Particles = function() {
    this.oPoint = {
        x: 0,
        y:0
    }
    this.addPuffs = false;
    this.maxParticles = 200;
    this.imageSrc = "data:image/png;base64,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"
    this.canvas = null;
    this.ctx = null;
    this.windX = .5;
    this.windY = -5;
    this.alphaDecrease = .006;
    this.growingSpeed = 2.9;
    this.jitterX = 2;
    this.jitterY = 1;
    this.speedXJitter = 4;
    this.speedYJitter = 10;
    this.puffs = [];
    this.maxLife = 200;
    this.cWidth = screen.width;
    this.cHeight = screen.height;
    this.img = new Image();
    this.img.src = this.imageSrc;
    this.alphaDie = .05;
    this.bornSize = 10;

    this.init = function() {
        var self = this;
        document.onmousemove = function(e) {
            self.oPoint.x = e.clientX;
            self.oPoint.y = e.clientY;
        }

        document.onmousedown = function() {
            self.addPuffs = true;
        }

        document.onmouseup = function() {
            self.addPuffs = false;
        }

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';

        document.body.appendChild(this.canvas);
        document.getElementsByTagName('body')[0].appendChild(canvas);

        this.canvas.width = this.cWidth;
        this.canvas.height = this.cHeight;

        this.applyStyles(canvas);

        this.ctx = canvas.getContext("2d");

        (function animloop(){
            requestAnimFrame(animloop);
            self.tick();
        })();
    }

    this.applyStyles = function( element ) {
        element.style.position = "absolute";
        element.style.top = 0;
        element.style.left = 0
    }


    this.tick = function() {

        var self = this;
        var puffLength = this.puffs.length;

        //ADD PUFFS WHEN NEEDED
        if ( this.addPuffs && ( puffLength < this.maxParticles )) {
            this.puffs.push(this.newPuff());
        }

        this.ctx.clearRect(0,0,this.cWidth,this.cHeight)

        //ANIMATE PUFFS
        for(var i = 0; i < puffLength ; i++) {
            var currentPuff = this.puffs[i];
            if( currentPuff ) {

                if(currentPuff.age == this.maxLife || currentPuff.alpha <= .05) {
                    this.puffs.splice(0, 1);
                } else {
                    currentPuff.posX = currentPuff.posX + (this.windX + currentPuff.speedX);
                    currentPuff.posY = currentPuff.posY + this.windY;
                    currentPuff.scale += this.growingSpeed;
                    currentPuff.age++;
                    currentPuff.alpha -= this.alphaDecrease;
                    this.render( currentPuff );

                }

            }

        }

    }

    this.newPuff = function() {
        return {
                posX: this.oPoint.x + Math.random() * this.jitterX - (this.jitterX / 2),
                posY: this.oPoint.y + Math.random() * this.jitterY - (this.jitterY / 2),
                speedX: Math.random() * this.speedXJitter,
                speedY: Math.random() * this.speedYJitter,
                scale: this.bornSize - 80,
                age: 0,
                alpha: .7,
            }
    }


    this.render = function( currentPuff ) {
        var puffLength = this.puffs.length;

        this.ctx.globalAlpha = currentPuff.alpha;
        this.ctx.drawImage(this.img, currentPuff.posX, currentPuff.posY, currentPuff.scale + 80, currentPuff.scale + 80);


    }

    this.init();
}

window.onload = function() {
	var particles = new Particles();
	var gui = new dat.GUI();
	gui.add(particles, 'maxParticles', 20, 500);
    gui.add(particles, 'bornSize', 0, 500);
	gui.add(particles, 'windX', -30, 30);
	gui.add(particles, 'windY', -30, 30);
	gui.add(particles, 'alphaDecrease', 0.001, 0.1);
	gui.add(particles, 'growingSpeed', 0, 10);
	gui.add(particles, 'jitterX', 0, 1500);
	gui.add(particles, 'jitterY', 0, 1500);
	gui.add(particles, 'speedXJitter', 0, 20);
	gui.add(particles, 'speedYJitter', 0, 20);
	gui.add(particles, 'maxLife', 0, 400);
	gui.add(particles, 'alphaDie', 0, .1);
}


//Jonas Grumann
