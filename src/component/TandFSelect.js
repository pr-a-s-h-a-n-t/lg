import React, { useEffect, useState } from "react";

function TandFSelect({ setResult, result }) {
  function handleChange(e) {
    setResult(e.target.value);
  }

  return (
    <div>
      <select name="item" value={result} onChange={handleChange}>
        {/* <option value="">select</option> */}
        <option value={false}>False</option> // result: false
        <option value={true}>True</option> // result: True
      </select>
    </div>
  );
}

export default TandFSelect;
