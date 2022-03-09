
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Child from './Child.js'

ReactDOM.render(
    <Child></Child>,
    document.getElementById('root')
)

// 1:首次渲染state与传入的第一个参数相同,后续渲染始终是最新的
// const [state,setState]=useState(initState)
// const [state,setState]=useState(()=>{return vo})



// 2: 更新可以是数值或者回调函数
// setState('new change')

// setState((old)=>{
//     'old change'
// })



// 3.setState 是替换不是合并
// setState((old)=>{
//     return {...old,...new}
// })