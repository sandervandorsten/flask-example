
function Particle() {
    this.pos = createVector(random(window.innerWidth),random(window.innerHeight));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 4;

    this.prevPos = this.pos.copy();

    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    this.applyForce = function(force) {
        this.acc.add(force);
    };
    this.show = function () {
        stroke(0, 5);
        strokeWeight(3);
        // point(this.pos.x, this.pos.y);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    };

    this.follow = function (vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    };

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    };



    this.edges = function () {
        if (this.pos.x < 0){
            this.pos.x = window.innerWidth;
            this.updatePrev();
        }
        if (this.pos.x > window.innerWidth) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = window.innerHeight;
            this.updatePrev();
        }
        if (this.pos.y > window.innerHeight) {
            this.pos.y = 0;
            this.updatePrev();
        }
    }
}