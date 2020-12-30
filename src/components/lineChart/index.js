import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line } from "rc-progress";

const Wrapper = styled.div`
  float: right;
  padding-right: 10px;
  width: 45%;
  font-family: "Mulish", sans-serif;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #acacac;
  float: left;
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  float: right;
`;

export default function LineChart(props) {
  const [value, setValue] = useState(props.value);
  const [title, setTitle] = useState(props.title);
  const [symbol] = useState(props.symbol);

  useEffect(() => {
    setValue(value);
    setTitle(title);
  }, [props, value, title]);

  return (
    <Wrapper>
      <Line
        percent={value}
        strokeWidth="4"
        trailWidth="4"
        trailColor={"#393939"}
        strokeColor={"#8A2387"}
      />
      <Title>{title}</Title>
      <Value>
        {value} {symbol}
      </Value>
    </Wrapper>
  );
}
