import React from "react";
import styled from "styled-components";

import SideBar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import NVData from "./components/nvData";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

  text-align: center;
  background-color: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  border-radius: 5px;
  /* -webkit-app-region: drag; */
`;

function App() {
  return (
    <Wrapper>
      <SideBar />
      <Dashboard />
      {/* <NVData /> */}
    </Wrapper>
  );
}

export default App;
