var scl = 15;
var inc = 0.1;
var cols, rows;

var zoff = 0;

var particles = [];

var flowfield;



function setup() {
    // window.onresize = function() {
    //   var w = window.innerWidth;
    //   var h = window.innerHeight;
    //   width = w;
    //   height = h;
    // };
  createCanvas(window.innerWidth, window.innerHeight);
  cols = floor(window.innerWidth / scl);
  rows = floor(window.innerHeight / scl);
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 200; i++){
      particles[i] = new Particle();
  }
  background(255);
}

function draw() {
    var yoff = 0;
    for (var y = 0; y < cols; y++) {
        var xoff = 0;
        for (var x = 0; x < rows; x++) {
            var index = (x + y * cols);
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(0.5);
            flowfield[index] = v;
            
            xoff += inc;

        }
        yoff += inc;

        zoff += 0.0001;
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
}