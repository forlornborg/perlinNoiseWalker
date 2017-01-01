var walker = {
  x: window.innerWidth/2,
  y: window.innerHeight/2,
  
  tx: 0.0,
  ty: 1.0,

  stepVar: 0.001,
  
  display: function(){
    stroke(255);
    point(this.x, this.y);
  },
  
  step: function(){
    this.x = map(noise(this.tx), 0, 1, 0, window.innerWidth);
    this.y = map(noise(this.ty), 0, 1, 0, window.innerHeight);
    this.tx += this.stepVar;
    this.ty += this.stepVar;
    this.stepVar = this.stepVar*map(noise(1), 0, 1, 1, 1.001);
  }
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
  background(0);
  walker.display();
  walker.step();
}