import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { IonIcon } from "react-ion-icon";

function App() {
  const [result, setResult] = React.useState(undefined);
  const [optionValue, setOptionValue] = React.useState(undefined);

  let handleSelect = () => {
    console.log("handleSelect");
    setOptionValue(undefined);
    
  };

  return (
    <div className="App">
      <h1>Hello ✋ Coder!!!</h1>

      {/* Task--
      1. when we select constant option from select then entire option should change and new option should appear with option value true and false. and result should be shown according to 
      option value like if option value true then result is true and
      if option value false then result is false!!.

      2.
       */}

      <div>
        <select
          name="item"
          value={optionValue}
          onChange={(e) => setOptionValue(e.target.value)}
          id="item"
        >
          <option value="">select</option>
          <option value="false">constant</option> // result: false
          <option value="My Arg">argument</option>
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
        <button onClick={handleSelect}>
          {/*  reset everything */}
          <span>
            <ion-icon name="close-outline"></ion-icon>
          </span>{" "}
        </button>


        
      </div>
      <div>
        <span>result :</span>
        <span>{optionValue ? optionValue : result}</span>
      </div>
    </div>
  );
}

export default App;
