// @flow

import React from "react";
import Moment from "moment";
import DateStyle from "./Date.scss";

const Date = () => {
  return (
    <div className="date-container">
      <h1 className="date-title">{Moment().format("MM.DD").toString()}</h1>
    </div>
  );
};

export default Date;
