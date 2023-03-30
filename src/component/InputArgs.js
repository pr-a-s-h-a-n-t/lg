import React from "react";

function InputArgs({ input, setInput }) {
  return (
    <div>
      <input type="text" value={input}   onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default InputArgs;
