import React from "react";
import ReactDOM from "react-dom";

const varTemp = <div>varTemp-val</div>;
function fun() {
  return <div>fun-val</div>;
}
function Dom() {
  return <div>dom</div>;
}
const list = [<div key={'1'}>list1</div>, <div key={'2'}>list2</div>];
ReactDOM.render(
  <>
    {varTemp}
    {fun()}
    <Dom></Dom>
    {[1, 2, 3].map((i) => {
      return <h2 key={i}>{i}</h2>;
    })}
    {list}
    {Math.random() > 0.5 ? <div>small</div> : <div>big</div>}
  </>,
  document.getElementById("root")
);
