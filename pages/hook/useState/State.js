import React, { useState } from 'react';

function State() {
    const [count, setCount] = useState(0);
    //变
    document.title = count;
    //变
    console.log(count);
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}
export default State;