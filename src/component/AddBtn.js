import React from "react";
import "./magic.css";
function AddBtn(handleSelect) {
  return (
    <div className="_addArg">
      <button onClick={handleSelect}>
       + add arg
      </button>
    </div>
  );
}

export default AddBtn;
