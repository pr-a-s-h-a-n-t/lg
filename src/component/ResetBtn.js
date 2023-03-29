import React from "react";

function ResetBtn({ handleSelect }) {
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

export default ResetBtn;
