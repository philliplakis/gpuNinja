import React, { useState, useEffect } from "react";

// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;
// const appVersion = window.require("electron").remote.app.getVersion();

export default function ErrorBar(props) {
  const minimize = () => console.log("click"); // ipcRenderer.send("command:min");

  useEffect(() => {
    const currentRoute = window.location.href;
    console.log(currentRoute);
  });

  return (
    <>
      <div class="titleheader">{`Somename`}</div>
      <div className="titlebarwrapper">
        <div class="titlebar">
          <div class="titlebar-controls">
            <div class="titlebar-minimize">
              <button
                class="button-title"
                id="min-btn"
                onClick={() => minimize()}
              >
                <svg x="0px" y="0px" viewBox="0 0 10 1">
                  <rect fill={"#fff"} width="10" height="1"></rect>
                </svg>
              </button>
            </div>
            <div class="titlebar-close" onClick={() => minimize()}>
              <button class="button-title" id="close-btn">
                <svg x="0px" y="0px" viewBox="0 0 10 10">
                  <polygon
                    fill={"#fff"}
                    points="10,1 9,0 5,4 1,0 0,1 4,5 0,9 1,10 5,6 9,10 10,9 6,5"
                  ></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
