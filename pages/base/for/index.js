import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
const numbers = [];

for (var i = 0; i < 10; i++) {
    numbers.push(<p key={i}>{i}</p>)
}
ReactDOM.render(
    <React.StrictMode>
        <div className='item'>{numbers}</div>
    </React.StrictMode>,
    document.getElementById('root')
);
