import React, { useEffect } from "react";

function InputArgs({ args, id, input, setInput }) {
  // const [input, setInput] = React.useState(null);

  function handleInput(e) {
    setInput(e.target.value);
    // args.input = temp;
  }
  // console.log(input, "------------", args, "------------", id);

  

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
    </div>
  );
}

export default InputArgs;
