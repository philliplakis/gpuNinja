import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "../card";

const ElectronSystem = require("../../classes");
const info = new ElectronSystem();

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 50px;
`;

export default function Dashboard(props) {
  const [gpu, setGPU] = useState(null);

  if (!gpu) {
    info.smi().then((data) => {
      setGPU(data);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      info.smi().then((data) => {
        console.log(data);
        setGPU(data);
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Wrapper>{!gpu ? null : <Card gpu={gpu} />}</Wrapper>;
}
