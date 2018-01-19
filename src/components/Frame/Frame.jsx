// @flow

import React from "react";
import FrameStyle from "./Frame.scss";

const Frames = () => {
  return (
    <div>
      <div className="frame-top-left" />
      <div className="frame-left-top" />
      <div className="frame-top-right" />
      <div className="frame-right-top" />
      <div className="frame-left-bottom" />
      <div className="frame-bottom-left" />
      <div className="frame-right-bottom" />
      <div className="frame-bottom-right" />
    </div>
  );
};

export default Frames;
