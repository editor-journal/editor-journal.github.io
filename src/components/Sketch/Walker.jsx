/**
 * Random Walk
 * To generate random patterns 
 * 
 * @constructor
 * @param {Object} [p5]  reference to instance of p5js
 * @param {Number} [width]  width of the object
 * @param {Number} [height] height of the object
 */

class Walker {
  constructor(p5, width, height) {
    this.position = p5.createVector(width / 2, height / 2);
    this.velocity = p5.createVector(0, 0);
  }
  update(p5) {
    this.acceleration = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.acceleration.setMag(5);

    let mouse = p5.createVector(p5.mouseX, p5.mouseY);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }
  display(p5) {
    p5.fill(255);
    p5.ellipse(this.position.x, this.position.y, 48, 48);
  }
}

export default Walker;
