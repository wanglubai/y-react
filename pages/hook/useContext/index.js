
import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'

import context from './context';

let v = 0
setInterval(() => {
    v+=1;
}, 1000);
ReactDOM.render(
    <context.Provider value={v}>
        <Child></Child>
    </context.Provider>,
    document.getElementById('root')
)