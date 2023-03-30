import React, { useEffect } from "react";

function InputArgs({ args }) {

  const [input, setInput] = React.useState(" ");

  function handleInput(e){
    setInput(e.target.value);

  }
  console.log(input,"------------" ,args)
  // useEffect(()=>{

  //   console.log(input,"------------" ,args)
  // },[input])

  return (
    <div>
      <input type="text" value={input}   onChange={handleInput} />
    </div>
  );
}

export default InputArgs;
