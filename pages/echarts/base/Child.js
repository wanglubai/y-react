
import React, { useEffect, useState, useRef } from 'react';

import './child.less'

import Echart from './libs/Echart';
function Child() {
    const con = useRef(null);
    const vo = {
        tooltip: {
        },
        xAxis: [
            {
                type: 'category',
                data: ['2021.10', '2021.9', '2021.8', '2021.7', '2021.6', '2021.5', '2021.4']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                type: 'line',
                name: 'Media $',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }
        ]
    };
    useEffect(() => {
        const echart = new Echart(con.current, vo);
        return () => {
            console.log('销毁 ');
            echart.destroy();
        }
    })
    return (
        <div className='child' ref={con}></div>
    )
}
export default Child;