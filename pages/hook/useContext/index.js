
import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'


ReactDOM.render(
    <Child></Child>,
    document.getElementById('root')
)

// 1:useContext 的组件总会在 context 值变化时重新渲染

// 2:重渲染组件的开销较大，你可以 通过使用 memoization 来优化。