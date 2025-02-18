import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import History from "./History";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  // Function to calculate the result safely without eval
  const calculate = (expression) => {
    try {
      // Replace invalid characters (like alphabetic) before executing the expression
      const sanitizedExpression = expression.replace(/[^0-9+\-*/(). ]/g, "");
      // Use Function to safely evaluate the expression
      const result = new Function("return " + sanitizedExpression)();
      return result.toString();
    } catch (e) {
      return "Error";
    }
  };

  const handleClick = (value) => {
    if (value === "=") {
      const result = calculate(input);
      setHistory([...history, `${input} = ${result}`]); // Add to history
      setInput(result); // Set the current input to result
    } else if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "⌫"
  ];

  return (
    <div className="calculator">
      <div className="calculator-left">
        <Display value={input} />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <Button key={index} label={btn} onClick={() => handleClick(btn)} />
          ))}
        </div>
      </div>
      <History history={history} />
    </div>
  );
};

export default Calculator;
