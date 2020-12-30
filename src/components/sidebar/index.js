import React from "react";
import styled from "styled-components";
import { RiCpuLine, RiSettings4Line } from "react-icons/ri";
import { SiNvidia } from "react-icons/si";
import { TiPower, TiInfoLarge } from "react-icons/ti";

const Sidenav = styled.div`
  height: 380px;
  width: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Link = styled.a`
  padding: 16px 8px 6px 8px;
  text-decoration: none;
  font-size: 30px;
  display: block;
  color: ${(props) => (props.selected ? "#e94057" : "#818181")};
  &:hover {
    color: #e94057;
    cursor: pointer;
  }
`;

export default function Sidebar(props) {
  return (
    <Sidenav>
      <Link
        id="Dashboard"
        selected={props.selected === "Dashboard" ? true : null}
        onClick={() => props.onClick("Dashboard")}
      >
        <RiCpuLine />
      </Link>
      <Link
        id="NVData"
        selected={props.selected === "NVData" ? true : null}
        onClick={() => props.onClick("NVData")}
      >
        <SiNvidia />
      </Link>
      <Link
        id="SystemInfo"
        selected={props.selected === "SystemInfo" ? true : null}
        onClick={() => props.onClick("SystemInfo")}
      >
        <TiInfoLarge />
      </Link>
      <Link
        id="Settings"
        selected={props.selected === "Settings" ? true : null}
        onClick={() => props.onClick("Settings")}
      >
        <RiSettings4Line />
      </Link>
      <Link
        id="Power"
        selected={props.selected === "Power" ? true : null}
        onClick={() => props.onClick("Power")}
      >
        <TiPower />
      </Link>
    </Sidenav>
  );
}
