import React from "react";
import "./App.css";

import Dashboard from "./components/dashboard";
import TopBar from "./components/topBar";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <TopBar />
    </div>
  );
}

export default App;
