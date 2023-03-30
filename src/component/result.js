import React from "react";

function result({ optionValue, boolean , boolFlag, result}) {
  console.log(result,"00000")
  return (
    <div className="_result">
      <span>result :</span>{" "}
      {/* <span>{boolFlag ? boolean : boolean || optionValue && optionValue.length > 0 ? optionValue  : "undefined"  }</span> */}
      <span>{`${result}`}</span>
    </div>
  );
}

export default result;
