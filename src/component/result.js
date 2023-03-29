import React from "react";

function result({ optionValue }) {
  return (
    <div className="_result">
      <span>result :</span>{" "}
      <span>{optionValue ? optionValue : "undefined"}</span>
    </div>
  );
}

export default result;
