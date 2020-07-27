import React, { useState, useEffect } from "react";
import { Line, Circle } from "rc-progress";

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
heading.fontWeight = 900;
heading.fontSize = 16;
heading.fontFamily = `'Mulish', sans-serif`;

const containerRightStyle = {
  float: "right",
  paddingRight: 10,
  width: "45%",
};

const containerLeftStyle = {
  float: "left",
  paddingLeft: 10,
  width: "40%",
};

const containerStyle = {
  display: "block",
  display: "inline-block",
  width: "80%",
  margin: -10,
};

const barTitle = {};
barTitle.marginBottom = -15;
barTitle.textAlign = "left";
barTitle.fontWeight = 400;
barTitle.fontSize = 12;
barTitle.fontFamily = `'Mulish', sans-serif`;
barTitle.color = "#ACACAC";

const barValue = {};
barValue.marginTop = -3;
barValue.textAlign = "right";
barValue.fontWeight = 700;
barValue.fontSize = 14;
barValue.fontFamily = `'Mulish', sans-serif`;
barValue.color = "#fff";

const circleTitle = {};
circleTitle.paddingTop = 20;
circleTitle.marginBottom = -50;
circleTitle.textAlign = "center";
circleTitle.fontWeight = 400;
circleTitle.fontSize = 12;
circleTitle.fontFamily = `'Mulish', sans-serif`;
circleTitle.color = "#ACACAC";

const circleValue = {};
circleValue.marginTop = -60;
circleValue.textAlign = "center";
circleValue.fontWeight = 700;
circleValue.fontSize = 14;
circleValue.fontFamily = `'Mulish', sans-serif`;
circleValue.color = "#fff";

export default function Card(props) {
  return (
    <>
      <div style={style}>
        <h1 style={heading}>This.CPU</h1>
        <div style={containerRightStyle}>
          <h3 style={barTitle}>Temperature</h3>
          <Line
            percent={50}
            strokeWidth="4"
            trailWidth="4"
            trailColor={"#393939"}
            strokeColor={"#4d84e3"}
          />
          <h2 style={barValue}>30 C</h2>
          <h3 style={barTitle}>Memory</h3>
          <Line
            percent={50}
            strokeWidth="4"
            trailWidth="4"
            trailColor={"#393939"}
            strokeColor={"#4d84e3"}
          />
          <h2 style={barValue}>30 %</h2>
        </div>
        <div style={containerLeftStyle}>
          <h3 style={circleTitle}>Load</h3>
          <Circle
            percent={50}
            strokeWidth="7"
            trailWidth="7"
            trailColor={"#393939"}
            strokeColor={"#4d84e3"}
          />
          <h2 style={circleValue}>30 %</h2>
        </div>
        <div style={{ padding: 70 }} />
        <div style={{ borderBottom: "1px solid #393939" }} />
        <div style={containerStyle}>
          <p style={{ fontSize: 10, float: "left" }}>Process A.</p>
          <p style={{ fontSize: 10, float: "right" }}>12.3%</p>
        </div>
        <div style={containerStyle}>
          <p style={{ fontSize: 10, float: "left" }}>Process B.</p>
          <p style={{ fontSize: 10, float: "right" }}>11.3%</p>
        </div>
        <div style={containerStyle}>
          <p style={{ fontSize: 10, float: "left" }}>Process C.</p>
          <p style={{ fontSize: 10, float: "right" }}>5.7%</p>
        </div>
      </div>
    </>
  );
}
