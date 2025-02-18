import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="app">
      <h1>Interactive Calculator</h1>
      <div className="calculator-container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
