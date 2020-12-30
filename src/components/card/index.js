import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CircleChart from "../circleChart";
import LineChart from "../lineChart";
import ClockChart from "../clockChart";

const Wrapper = styled.div`
  background-color: #202020;
  border-radius: 10px;
  width: 300px;
  min-height: 100%;
  margin: 15px;
  padding: 10px;
  font-family: "Mulish", sans-serif;
`;

const GPU = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-align: left;
`;

function parseSmi(params) {
  const string = params.split(" ");
  return parseInt(string);
}

export default function Card(props) {
  const [data, setData] = useState(props.gpu.gpu);

  useEffect(() => {
    setData(props.gpu.gpu);
  }, [props]);

  return (
    <>
      <GPU>{data.product_name}</GPU>
      <Wrapper>
        <ClockChart
          current={parseSmi(data.clocks.graphics_clock)}
          max={parseSmi(data.max_clocks.graphics_clock)}
          title="GPU"
          symbol="MHz"
        />
        <ClockChart
          current={parseSmi(data.clocks.mem_clock)}
          max={parseSmi(data.max_clocks.mem_clock)}
          title="MEM"
          symbol="MHz"
        />
        <ClockChart
          current={parseSmi(data.temperature.gpu_temp)}
          max={parseSmi(data.temperature.gpu_temp_max_gpu_threshold)}
          title="Temp"
          symbol="C"
        />
      </Wrapper>
      <Wrapper>
        <Heading>Utilization</Heading>
        <CircleChart value={parseSmi(data.utilization.gpu_util)} title="GPU" />
        <LineChart
          value={parseSmi(data.utilization.memory_util)}
          title="Memory"
          symbol="%"
        />
        <LineChart
          value={parseSmi(data.utilization.encoder_util)}
          title="Encoder"
          symbol="%"
        />
        <LineChart
          value={parseSmi(data.utilization.decoder_util)}
          title="Decoder"
          symbol="%"
        />
        <LineChart
          value={parseSmi(data.fan_speed)}
          title="Fan Speed"
          symbol="%"
        />
      </Wrapper>
    </>
  );
}
