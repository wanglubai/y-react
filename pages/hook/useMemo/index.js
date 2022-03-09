
import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child.js'

ReactDOM.render(
    <Child></Child>,
    document.getElementById('root')
)

// 1:把“创建”函数和依赖项数组作为参数传入 依赖项改变时才重新计算 memoized 值

// 2:传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，
// 诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。