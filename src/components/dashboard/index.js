import React from "react";
import Battery from "../card/battery";
import GPU from "../card/gpu";
import Hdd from "../card/hdd";
import CPU from "../card/cpu";

const flex = {};
flex.paddingTop = 40;
flex.width = 960;
flex.height = 550;
flex.display = "flex";
flex.flexDirection = "column";
flex.flexWrap = "wrap";
flex.justifyContent = "center";

export default function Dashboard(props) {
  return (
    <div style={flex}>
      <Battery />
      <Hdd />
      <CPU />
      <CPU />
      <GPU />
      <GPU />
      <GPU />
    </div>
  );
}
