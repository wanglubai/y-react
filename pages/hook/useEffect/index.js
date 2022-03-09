
import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child.js'

ReactDOM.render(
    <Child></Child>,
    document.getElementById('root')
)

// 1:赋值给 useEffect 的函数会在组件渲染到屏幕之后执行

// 2:effect 将在每轮渲染结束后___执行，但你可以选择让它 在只有___某些值改变的时候 才执行

// 3:返回清除函数，组件卸载前/执行下一个effect前 执行

// 4:useLayoutEffect 区别