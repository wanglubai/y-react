import React, { useEffect, useState, useRef } from "react";

import "./child.less";

import Echart from "./libs/Echart";
function Child() {
  const con = useRef(null);
  const day = [];
  let a = 1990;
  const data = [];
  for (var i = 0; i < 30; i++) {
    data.push(100 + i * 30*Math.random());
    day.push((a += 1));
  }
  const vo = {
    tooltip: {},
    xAxis: [
      {
        axisLabel: {
          interval: 3,
        },
        type: "category",
        data: day,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        name: "Media $",
        emphasis: {
          focus: "series",
        },
        data: data,
      },
    ],
  };
  useEffect(() => {
    const echart = new Echart(con.current, vo);
    return () => {
      console.log("销毁 ");
      echart.destroy();
    };
  });
  return <div className="child" ref={con}></div>;
}
export default Child;
