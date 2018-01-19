// @flow

import React, { Component } from "react";
import ButtonStyle from "./Button.scss";

class StyleButton extends Component {
  props: {
    active: boolean,
    style: string,
    label: string,
    onToggle: Function
  };

  handleClick = () => {
    this.props.onToggle(this.props.style);
  };

  render() {
    // Draft.js default classes
    let className = "RichEditor-styleButton button-item";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }
    return (
      <li className={className} onClick={this.handleClick}>
        {this.props.label}
      </li>
    );
  }
}

export default StyleButton;
