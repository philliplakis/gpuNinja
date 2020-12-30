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
      <Link selected href="#">
        <RiCpuLine />
      </Link>
      <Link href="#">
        <SiNvidia />
      </Link>
      <Link href="#">
        <TiInfoLarge />
      </Link>
      <Link href="#">
        <RiSettings4Line />
      </Link>
      <Link href="#">
        <TiPower />
      </Link>
    </Sidenav>
  );
}
