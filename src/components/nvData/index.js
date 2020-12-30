import React, { useState } from "react";
import styled from "styled-components";

const ElectronSystem = require("../../classes");
const info = new ElectronSystem();

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 80px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 13px;
  float: left;
  padding: 3px 10px 0px 10px;
`;

const Input = styled.input`
  width: 70px;
  font-weight: 700;
  font-size: 12px;
  float: right;
  margin: 3px;
  &:focus {
    outline: none;
  }
`;

const GPU = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
`;

function StyledLine({ title, data }) {
  return (
    <>
      <Title>{title}</Title>
      <Input readOnly value={data} />
    </>
  );
}

function DisplayData({ gpu }) {
  console.log(gpu);
  return (
    <>
      <GPU>{gpu.gpu.product_name}</GPU>
      <StyledLine title={"Driver Version"} data={gpu.driver_version} />
      <StyledLine title={"CUDA Version"} data={gpu.cuda_version} />
      <StyledLine title={"Product"} data={gpu.gpu.product_brand} />
      <StyledLine title={"Bios Version"} data={gpu.gpu.vbios_version} />
      <StyledLine title={"Board Id"} data={gpu.gpu.board_id} />
      <StyledLine title={"Mode"} data={gpu.gpu.compute_mode} />
      <StyledLine title={"Display Active"} data={gpu.gpu.display_active} />
      <StyledLine
        title={"Driver Type"}
        data={gpu.gpu.driver_model.current_dm}
      />
      <StyledLine title={"ECC"} data={gpu.gpu.ecc_mode.current_ecc} />
      <StyledLine
        title={"Virtualization"}
        data={gpu.gpu.gpu_virtualization_mode.virtualization_mode}
      />
      <StyledLine
        title={" GPU Clock"}
        data={gpu.gpu.max_clocks.graphics_clock}
      />
      <StyledLine title={" MEM Clock"} data={gpu.gpu.max_clocks.mem_clock} />
      <StyledLine
        title={"Max Link"}
        data={gpu.gpu.pci.pci_gpu_link_info.max_link_width}
      />
      <StyledLine
        title={"Current Link"}
        data={gpu.gpu.pci.pci_gpu_link_info.current_link_width}
      />
      <StyledLine title={"Perf State"} data={gpu.gpu.performance_state} />
      <StyledLine
        title={"Max Power Limit"}
        data={gpu.gpu.power_readings.default_power_limit}
      />
      <StyledLine
        title={"Power Limit"}
        data={gpu.gpu.power_readings.enforced_power_limit}
      />
      <StyledLine
        title={"Power Draw"}
        data={gpu.gpu.power_readings.power_draw}
      />
      <StyledLine title={"UUID"} data={gpu.gpu.uuid} />
    </>
  );
}

export default function Dashboard(props) {
  const [gpu, setGPU] = useState(null);

  if (!gpu) {
    info.smi().then((data) => {
      setGPU(data);
    });
  }

  return <Wrapper>{!gpu ? null : <DisplayData gpu={gpu} />}</Wrapper>;
}
