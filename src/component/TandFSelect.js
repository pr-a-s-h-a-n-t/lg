import React from "react";

function TandFSelect({ boolean, setBoolean }) {
  return (
    <div>
      <select
        name="item"
        value={boolean}
        onChange={(e) => setBoolean(e.target.value)}
      >
        {/* <option value="">select</option> */}
        <option value="false">False</option> // result: false
        <option value="true">True</option> // result: True
      </select>
    </div>
  );
}

export default TandFSelect;
