import React, { Component } from "react";
import p5 from 'p5';

class ReactP5 extends Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.customDrawPropHandler ) {
      this.canvas.customDrawPropHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.customDrawPropHandler ) {
      this.canvas.customDrawPropHandler(newprops);
    }
  }

  render() {
    return (
      <div ref={ wrapper => this.wrapper = wrapper }></div>
    );
  }
}

export default ReactP5;