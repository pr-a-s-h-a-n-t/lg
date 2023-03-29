import React from "react";

function mySelect({ optionValue, setOptionValue }) {
  return (
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
    </div>
  );
}

export default mySelect;
