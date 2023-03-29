import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { IonIcon } from "react-ion-icon";
import MySelect from "./component/mySelect";
import Btn from "./component/btn";
import Result from "./component/result";
import TandFSelect from "./component/TandFSelect";
import AddBtn from "./component/AddBtn";
function App() {
  const [result, setResult] = React.useState(undefined);
  const [optionValue, setOptionValue] = React.useState(undefined);

  let handleSelect = () => {
    console.log("handleSelect");
    setOptionValue(undefined);
  };

  /* Task--
  1. when we select constant option from select then entire option should change and new option should appear with option value true and false. and result should be shown according to 
  option value like if option value true then result is true and
  if option value false then result is false!!.

  2.
   */
  return (
    <div className="App">
      <h1 id="center">Hello ✋ Coder!!!</h1>
      <div className="_wrapper_1">
        <div className="_p">
          <MySelect />

          <TandFSelect />
        </div>

        <AddBtn />
      </div>
      <div className="_wrapper_2">
        <MySelect />
        <Btn />
      </div>
      <div className="_result">
        <Result />
      </div>
    </div>
  );
}

export default App;
