import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";

const Wrapper = styled.div`
  float: left;
  padding: 15px;
  width: 40%;
  font-family: "Mulish", sans-serif;
  text-align: center;
`;

const Title = styled.div`
  margin-top: -70px;
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

export default function CircleChart(props) {
  const [value, setValue] = useState(props.value);
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    setValue(props.value);
    setTitle(props.title);
  }, [props]);

  return (
    <Wrapper>
      <Circle
        percent={value}
        strokeWidth="8"
        trailWidth="8"
        strokeLinecap="round"
        trailColor={"#393939"}
        strokeColor={{
          "100%": "#8A2387",
          "50%": "#E94057",
          "0%": "#F27121",
        }}
      />
      <Title>{title}</Title>
      <Value>{value} %</Value>
    </Wrapper>
  );
}
