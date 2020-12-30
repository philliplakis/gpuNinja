import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";

const Wrapper = styled.div`
  float: left;
  padding: 11px;
  width: 26%;
  font-family: "Mulish", sans-serif;
  text-align: center;
`;

const Title = styled.div`
  margin-top: -55px;
  font-weight: 400;
  font-size: 10px;
  color: #acacac;
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

export default function CircleChart(props) {
  const [current, setCurrent] = useState(props.current);
  const [max, setMax] = useState(props.max);
  const [title, setTitle] = useState(props.title);
  const [symbol] = useState(props.symbol);

  useEffect(() => {
    setCurrent(props.current);
    setMax(props.max);
    setTitle(props.title);
  }, [props]);

  return (
    <Wrapper>
      <Circle
        percent={percentage(current, max)}
        strokeWidth="8"
        trailWidth="8"
        strokeLinecap="round"
        trailColor={"#393939"}
        strokeColor={{
          "100%": "#8A2387",
          "50%": "#E94057",
          "0%": "#F27121",
        }}
        gapDegree={90}
        gapPosition="bottom"
      />
      <Title>{title}</Title>
      <Value>
        {current} {symbol}
      </Value>
    </Wrapper>
  );
}
