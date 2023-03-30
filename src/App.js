import React, { useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import { IonIcon } from "react-ion-icon";
import MySelect from "./component/mySelect";
import ResetBtn from "./component/ResetBtn";
import Result from "./component/result";
import TandFSelect from "./component/TandFSelect";
import AddBtn from "./component/AddBtn";
import InputArgs from "./component/InputArgs";

function App() {
  const [result, setResult] = React.useState(undefined);
  const [optionValue, setOptionValue] = React.useState(undefined);
  const [boolean, setBoolean] = React.useState(null);
  const [boolFlag, setBoolFlag] = React.useState(false);
  const [input, setInput] = React.useState("My Args");

  const [args, setArgs] = React.useState(0);

  let argsArray;

  // function fillArray() {
    argsArray = Array(args).fill("New Args");
    console.log(argsArray, "new Args added..");
  // }

  let handleSelect = () => {
    console.log("handleSelect");
    setOptionValue(null);
  };

  // useEffect(() => {
  //   fillArray();
  // }, [args]);

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
          <InputArgs input={input} setInput={setInput} />

          <TandFSelect />
        </div>
        {argsArray && argsArray.length > 0
          ? argsArray.map((args, i) => {
              return (
                <div
                key={i}
                 className="_p">
                  <InputArgs input={input} setInput={setInput} />

                  <TandFSelect />
                </div>
              );
            })
          : ""}

        <AddBtn  setArgs={setArgs} args={args} />
      </div>
      <div className="_wrapper_2">
        {optionValue === "constant" ? (
          <TandFSelect setBoolean={setBoolean} boolean={boolean} />
        ) : (
          <MySelect
            setBoolFlag={setBoolFlag}
            boolFlag={boolFlag}
            setOptionValue={setOptionValue}
            optionValue={optionValue}
          />
        )}
        <ResetBtn handleSelect={handleSelect} />
      </div>
      <div className="_result">
        <Result
          boolFlag={boolFlag}
          boolean={boolean}
          optionValue={optionValue}
        />
      </div>
    </div>
  );
}

export default App;
