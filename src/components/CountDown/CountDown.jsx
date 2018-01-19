// @flow

import React from "react";

const CountDown = (props: { counter: number }) => {
  return (
    <div>
      <h3>
        {props.counter}
      </h3>
    </div>
  );
};

export default CountDown;
