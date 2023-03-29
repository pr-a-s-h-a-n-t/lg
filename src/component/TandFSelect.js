import React from "react";

function TandFSelect({ optionValue, setOptionValue }) {
  return (
    <div>
      <select
        name="item"
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
      >
        {/* <option value="">select</option> */}
        <option value="false">False</option> // result: false
        <option value="true">True</option> // result: True
      </select>
    </div>
  );
}

export default TandFSelect;
