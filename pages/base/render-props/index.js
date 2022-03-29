import React from "react";
import ReactDOM from "react-dom";

function Child(props) {
  const a = "aaa";
  return <div>{props.call(a)}</div>;
}

ReactDOM.render(
  <>
    <Child
      call={(p) => {
        return <div>{p}</div>;
      }}
    />
  </>,
  document.getElementById("root")
);
