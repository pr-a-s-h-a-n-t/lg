import React, { useEffect, useState } from "react";

function ArgsTandF({ setResult, result }) {
  const [select, setSelect] = useState("");
  function handleChange(e) {
    setSelect(e.target.value);
    
  }
  useEffect(() => {
    setResult(()=> select)
  },[select]);

  return (
    <div>
      <select name="item" value={select} onChange={handleChange}>
        {/* <option value="">select</option> */}
        <option value={false}>False</option> // result: false
        <option value={true}>True</option> // result: True
      </select>
    </div>
  );
}

export default ArgsTandF;
