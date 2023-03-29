import React from "react";

function result({ optionValue, boolean , boolFlag}) {
  return (
    <div className="_result">
      <span>result :</span>{" "}
      <span>{boolFlag ? boolean : boolean || optionValue && optionValue.length > 0 ? optionValue  : "undefined"  }</span>
       
    </div>
  );
}

export default result;
