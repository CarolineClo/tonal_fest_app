import React from "react";

function MyButton(props) {
  return (
    <button
      onClick={() => {
        props.function();
      }}
    >
      {props.name}
    </button>
  );
}

export default MyButton;
{
}
