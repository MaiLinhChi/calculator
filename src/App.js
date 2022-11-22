import { useState } from "react";

import "./App.css";
import "./Responsive.css";

function App() {
  const [data, setData] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const handleSetData = (cal) => {
    const arrayData = data.split(/\+|-|\*|\//);
    const lastItem = arrayData[arrayData.length - 1];

    if (
      (["+", "*", "/", "."].includes(cal) && data === "") ||
      (data.slice(0) === "0" && cal !== ".") ||
      (cal === "." && lastItem.includes(".")) ||
      (operators.includes(cal) && operators.includes(data.slice(-1)))
    ) {
      return;
    }
    setData(data + cal);
  };

  const handleResult = () => {
    if (data) {
      // eslint-disable-next-line no-eval
      setData(String(eval(data)));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>CASIO</h2>
          <span>fx-570VN PLUS</span>
        </div>
        <h4 className="subtitle">NATURAL-V.P.A.M</h4>
        <div className="calculator">
          <div className="show">{data}</div>
          <button className="clear" onClick={() => setData("")}>
            <i>AC</i>
          </button>
          <button
            className="operator del"
            onClick={() => setData(data.slice(0, data.length - 1))}
          >
            <i>DEL</i>
          </button>
          <button
            className="operator"
            value="/"
            onClick={() => handleSetData("/")}
          >
            <i>/</i>
          </button>
          <button onClick={() => handleSetData("7")}>
            <i>7</i>
          </button>
          <button onClick={() => handleSetData("8")}>
            <i>8</i>
          </button>
          <button onClick={() => handleSetData("9")}>
            <i>9</i>
          </button>
          <button className="operator" onClick={() => handleSetData("*")}>
            <i>*</i>
          </button>
          <button onClick={() => handleSetData("4")}>
            <i>4</i>
          </button>
          <button onClick={() => handleSetData("5")}>
            <i>5</i>
          </button>
          <button onClick={() => handleSetData("6")}>
            <i>6</i>
          </button>
          <button className="operator" onClick={() => handleSetData("-")}>
            <i>-</i>
          </button>
          <button onClick={() => handleSetData("1")}>
            <i>1</i>
          </button>
          <button onClick={() => handleSetData("2")}>
            <i>2</i>
          </button>
          <button onClick={() => handleSetData("3")}>
            <i>3</i>
          </button>
          <button className="operator" onClick={() => handleSetData("+")}>
            <i>+</i>
          </button>
          <button onClick={() => handleSetData("0")}>
            <i>0</i>
          </button>
          <button onClick={() => handleSetData(".")}>
            <i>.</i>
          </button>
          <button className="operator equal" onClick={handleResult}>
            <i>=</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
