import React from "react";

function btn({ handleSelect }) {
  return (
    <div>
      <button onClick={handleSelect}>
        {/*  reset everything */}
        <span>
          <ion-icon name="close-outline"></ion-icon>
        </span>{" "}
      </button>
    </div>
  );
}

export default btn;
