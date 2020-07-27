import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";

const style = {};
style.backgroundColor = "#202020";
style.borderRadius = 10;
style.width = 300;
style.minHeight = 80;
style.margin = 5;

const heading = {};
heading.textAlign = "left";
heading.paddingLeft = 15;
heading.paddingTop = 10;
heading.marginBottom = -5;
heading.fontWeight = 900;
heading.fontSize = 16;
heading.fontFamily = `'Mulish', sans-serif`;

const containerStyle = {
  paddingLeft: "5%",
  width: "90%",
};

export default function Card(props) {
  return (
    <div style={style}>
      <h1 style={heading}>This.BATTERY</h1>
      <div style={containerStyle}>
        <Line
          percent={50}
          strokeWidth="5"
          trailWidth="5"
          trailColor={"#393939"}
          strokeColor={"#4de375"}
        />
      </div>
    </div>
  );
}
