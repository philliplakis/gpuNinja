import React, { useState } from "react";
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
`;

function App() {
  const [page, setPage] = useState("Dashboard");

  const HandleClick = (id) => {
    setPage(id);
  };

  return (
    <Wrapper>
      <SideBar onClick={HandleClick} selected={page} />
      {page === "Dashboard" ? (
        <Dashboard />
      ) : page === "NVData" ? (
        <NVData />
      ) : null}
    </Wrapper>
  );
}

export default App;
