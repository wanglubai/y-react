import React from "react";
import ReactDOM from "react-dom";

function dealFun(Component) {
  return function Child(props) {
    return (
      <>
        <div>child</div>
        <Component deal="deal" {...props}></Component>
      </>
    );
  };
}

function Slef(props) {
  return <h1>vo--{props.vo}</h1>;
}

function Parent() {
  const Dom = dealFun(Slef);
  return <Dom vo={"dom"}></Dom>;
}

ReactDOM.render(
  <>
    <Parent></Parent>
  </>,
  document.getElementById("root")
);
