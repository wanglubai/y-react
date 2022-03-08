import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);

