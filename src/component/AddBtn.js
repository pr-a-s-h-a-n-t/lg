import React, { useEffect } from "react";
import "./magic.css";
function AddBtn( {setArgs, args, setData, data}) {

// useEffect(()=>{

// let fillObj = {
//   boolValue: "",
//   input: "",
// }
// }, [args])

let fillObj = {
  id:"",
  boolValue: "",
  input: "", 

}

 

  function handleArgs( ){
    setArgs((prev) => [...prev, fillObj]);
  }
  return (
    <div className="_addArg">
      <button onClick={ handleArgs}>
       + add arg
      </button>
    </div>
  );
}

export default AddBtn;
