import p5 from "p5";
/**
 * Superformula
 * Source: https://en.wikipedia.org/wiki/Superformula
 * To generate complex shapes found in nature
 * @constructor
 * @param {Object} [p]  reference to instance of p5js
 * @param {Number} [m]  m component of the vector
 * @param {Number} [n1] n1 component of the vector
 * @param {Number} [n2] n2 component of the vector
 * @param {Number} [n3] n3 component of the vector
 */

class Superformula {
  constructor(p, m, n1, n2, n3) {
    this.numPoints = 360;
    this.phi = p.TWO_PI / this.numPoints;
    this.points = [];
  }
  generate(p, m, n1, n2, n3) {
    for (let i = 0; i <= this.numPoints; i++) {
      this.points[i] = this.constructPoints(p, m, n1, n2, n3, this.phi * i);
    }
    return this.points;
  }
  constructPoints(p, m, n1, n2, n3, phi) {
    let r, t1, t2;
    let a = 1, b = 1, x = 0, y = 0;

    t1 = p.cos(m * phi / 4) / a;
    t1 = p.abs(t1);
    t1 = p.pow(t1, n2);

    t2 = p.sin(m * phi / 4) / b;
    t2 = p.abs(t2);
    t2 = p.pow(t2, n3);

    r = p.pow(t1 + t2, 1 / n1);
    if (p.abs(r) == 0) {
      x = 0;
      y = 0;
    } else {
      r = 1 / r;
      x = r * p.cos(phi);
      y = r * p.sin(phi);
    }

    // Math Util
    return new p5.Vector(x, y);
  }
}

export default Superformula;
