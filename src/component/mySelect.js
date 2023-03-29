import React from "react";

function mySelect({ optionValue, setOptionValue, setBoolFlag, boolFlag }) {

  function  handleChange(e){
    if(e.target.value === "constant"){
      setBoolFlag(true);
    }
    setOptionValue(e.target.value)
  }
  return (
    <div>
      <select
        name="item"
        value={optionValue}
        onChange={handleChange}
        id="item"
      >
        <option value="">select</option>
        <option value="constant">constant</option> // result: false
        <option value="My Arg">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
    </div>
  );
}

export default mySelect;
