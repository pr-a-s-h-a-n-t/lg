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
import ArgsTandF from "./component/ArgsTandF";

function App() {
  const [result, setResult] = React.useState(undefined);
  const [optionValue, setOptionValue] = React.useState(undefined);
  const [boolean, setBoolean] = React.useState(null);
  const [boolFlag, setBoolFlag] = React.useState(false);
  const [input, setInput] = React.useState("My Args");

  const [args, setArgs] = React.useState([]);
  const [data, setData] = React.useState([]);


  let argsArray;

  // function fillArray() {
    argsArray = Array(args).fill("New Args");
    // console.log(argsArray, "new Args added..");

  // }

  let handleSelect = () => {
    // console.log("handleSelect");
    setOptionValue(null);
    setResult(undefined);
  };
  

  console.log(args, "asdasdasdasdadassdadad");

  
  return (
    <div className="App">
      <h1 id="center">Hello ✋ Coder!!!</h1>
      <div className="_wrapper_1">
        <div className="_p">
          <InputArgs input={input} setInput={setInput} />

          <ArgsTandF result={result} setResult={setResult}   />
        </div>
        {args && args.length > 0
          ? args.map((args, i) => {
              return (
                <div
                key={i}
                 
                 className="_p">
                  <InputArgs args={args}  id = {i}   />

                  <TandFSelect  id = {i} args={args}  setBoolean={setBoolean} boolean={boolean} />
                </div>
              );
            })
          : ""}
{/* 
if some how i make an state of obj that store all the data req



 */}
        <AddBtn setData={setData} data= {data}  setArgs={setArgs} args={args} />
      </div>
      <div className="_wrapper_2">
        {optionValue === "constant" ? (
           
          <TandFSelect result={result} setResult={setResult}  setBoolean={setBoolean} boolean={boolean} />
        ) : (
          <MySelect
            setBoolFlag={setBoolFlag}
            boolFlag={boolFlag}
            setOptionValue={setOptionValue}
            optionValue={optionValue}
            setResult= {setResult}
            result = {result}
          />
        )}
        <ResetBtn handleSelect={handleSelect} />
      </div>
      <div className="_result">
        <Result
          boolFlag={boolFlag}
          boolean={boolean}
          optionValue={optionValue}
          result={result}
        />
      </div>
    </div>
  );
}

export default App;


