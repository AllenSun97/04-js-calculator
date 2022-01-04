import "./App.css";
import { useState } from "react";

function App() {
  const formula = ["+", "-", "*", "/", "."];
  const [expression, setExpression] = useState(0);
  const [result, setResult] = useState(0);

  const setNumbers = (e) => {
    const Val = e.target.value;

    if (expression === 0) setExpression("");

    if (formula.includes(Val)) {
      if (Val === "-" && expression[expression.length - 1] !== "-") {
        setExpression((prev) => prev);
      } else if (formula.includes(expression[expression.length - 1])) {
        setExpression((prev) => prev.slice(0, -1));
      }
    }
    if (Val) setExpression((prev) => prev + Val);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9]/.test(Val)) {
        setExpression(Val);
      } else {
        setExpression(result + Val);
      }
    }
  };

  const calculate = () => {
    console.log(expression);
    setResult(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const allclear = () => {
    setExpression(0);
    setResult(0);
  };

  return (
    <div className="App">
      <div className="dis">
        <input type="text" value={expression} placeholder="0" />
        <div className="total" id="display">
          {result}
        </div>
      </div>
      <button
        className="jumbo"
        id="clear"
        value="AC"
        onClick={() => allclear()}
      >
        AC
      </button>
      <button id="divide" value="/" onClick={(e) => setNumbers(e)}>
        /
      </button>
      <button id="multiply" value="*" onClick={(e) => setNumbers(e)}>
        x
      </button>
      <button id="seven" value="7" onClick={(e) => setNumbers(e)}>
        7
      </button>
      <button id="eight" value="8" onClick={(e) => setNumbers(e)}>
        8
      </button>
      <button id="nine" value="9" onClick={(e) => setNumbers(e)}>
        9
      </button>
      <button id="subtract" value="-" onClick={(e) => setNumbers(e)}>
        -
      </button>
      <button id="four" value="4" onClick={(e) => setNumbers(e)}>
        4
      </button>
      <button id="five" value="5" onClick={(e) => setNumbers(e)}>
        5
      </button>
      <button id="six" value="6" onClick={(e) => setNumbers(e)}>
        6
      </button>
      <button id="add" value="+" onClick={(e) => setNumbers(e)}>
        +
      </button>
      <button id="one" value="1" onClick={(e) => setNumbers(e)}>
        1
      </button>
      <button id="two" value="2" onClick={(e) => setNumbers(e)}>
        2
      </button>
      <button id="three" value="3" onClick={(e) => setNumbers(e)}>
        3
      </button>
      <button id="equals" value="=" onClick={(e) => calculate(e)}>
        =
      </button>
      <button id="zero" value="0" onClick={(e) => setNumbers(e)}>
        0
      </button>
      <button id="decimal" value="." onClick={(e) => setNumbers(e)}>
        .
      </button>
    </div>
  );
}

export default App;
