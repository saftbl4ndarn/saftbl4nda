class Box {
	constructor(plats, kulor, n) {
  	this.x = plats;
    this.kulor = kulor;
    this.n = n;
    this.w = width/8;
    this.h = width / 8 + width / 16;
  }
  
  
  update() {
  	this.x -= v;
    if (this.x < -50) {
    	this.x += 50 * (rull.length);
    }
  }
  
  display() {
  	fill(this.kulor);
    rect(this.x, 0, this.w, this.h);
    fill(255);
    textSize(12);
    //text(this.n, this.x + this.w / 2 - 2, this.h / 2);
  }
  
  
}
