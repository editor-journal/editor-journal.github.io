import "p5/lib/addons/p5.dom";

import p5 from "p5";
import Walker from "./Walker";
import Superformula from "./Superformula";

const Sketch = p => {
  let circleWidth;

  /**
   * Superformula params
   * @type {number}
   */
  let scaler = 300;
  let m = 20;
  let n1 = 18;
  let n2 = 10;
  let n3 = 10;
  let angle = 0;

  /**
   * Canvas setup as page background
   */
  p.setup = () => {
    p
      .createCanvas(p.windowWidth, p.windowHeight)
      .style("position", "fixed")
      .style("top", "0")
      .style("left", "0")
      .style("z-index", "0");
    p.noFill();
    p.stroke(255, 120);
  };

  /**
   * Resize reset
   */
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  /**
   * Handle props from main app
   */
  p.customDrawPropHandler = props => {
    if (props.wordCount) {
      circleWidth = props.wordCount;
      angle = circleWidth / 750 * 360;
      n3 = circleWidth / 750 * 100;
    }
  };

  const drawShape = (x, y) => {
    p.push();
    p.translate(x, y);
    p.rotate(p.radians(angle));
    let newscaler = scaler;

    for (let s = 16; s > 0; s--) {
      p.beginShape();
      let mm = m + s;
      let nn1 = n1 + s;
      let nn2 = n2 + s;
      let nn3 = n3 + s;
      newscaler = newscaler + 0.98;

      let sscaler = newscaler;
      let points = new Superformula(p, mm, nn1, nn2, nn3);
      let generatedPoints = points.generate(p, mm, nn1, nn2, nn3);
      p.curveVertex(
        generatedPoints[generatedPoints.length - 1].x * sscaler,
        generatedPoints[generatedPoints.length - 1].y * sscaler
      );

      for (let i = 0; i < generatedPoints.length; i++) {
        p.curveVertex(
          generatedPoints[i].x * sscaler,
          generatedPoints[i].y * sscaler
        );
      }
      p.curveVertex(
        generatedPoints[0].x * sscaler,
        generatedPoints[0].y * sscaler
      );
      p.endShape();
    }
    // angle++;
    p.pop();
  };

  /**
   * Paint canvas
   */
  p.draw = props => {
    p.background(0);
    drawShape(p.windowWidth / 2, p.windowHeight / 2);
  };
};

export default Sketch;
