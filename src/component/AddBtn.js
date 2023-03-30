import React from "react";
import "./magic.css";
function AddBtn( {setArgs, args}) {

  function handleArgs( ){
    setArgs(  args + 1 );
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
