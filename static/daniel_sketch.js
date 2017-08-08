// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

var inc = 0.1;
var scl = 15;
var cols, rows;

var zoff = 0;


var particles = [];

var flowfield;

function setup() {
    var w = window.innerWidth;
    var h = window.innerHeight;
  createCanvas(w, h);
  colorMode(HSB, 255);
  cols = floor(w / scl);
  rows = floor(h / scl);

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  setup();
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
          var index = x + y * cols;
          var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
          var v = p5.Vector.fromAngle(angle);
          v.setMag(1.5);
          flowfield[index] = v;
          xoff += inc;
          stroke(0, 50);
          yoff += inc;

          zoff += 0.0001;
      }
  }
      for (var i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
      }
  window.addEventListener('resize', resize);
}