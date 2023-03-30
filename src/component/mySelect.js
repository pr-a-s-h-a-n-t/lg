import React, { useEffect } from "react";

function MySelect({
  optionValue,
  setOptionValue,
  setBoolFlag,
  boolFlag,
  result,
  setResult,
  boolean,
}) {
  function handleChange(e) {
    setOptionValue(e.target.value);

    if (e.target.value === "constant") {
      setResult(false);
    }
    if (e.target.value === "and") {
      setResult("ddd");
    }
    if (e.target.value === "My Arg") {
      setResult(false);
    }
    if (e.target.value === "or") {
      setResult("");
    }
  }

  return (
    <div>
      <select name="item" value={optionValue} onChange={handleChange} id="item">
        <option value="">select...</option>
        <option value="constant">constant</option> // result: false
        <option value="My Arg">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
    </div>
  );
}

export default MySelect;
