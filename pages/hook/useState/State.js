import React, { useState } from 'react';

function State() {
    console.log('state');
    const [count, setCount] = useState(0);
    //变
    document.title = count;
    //变
    console.log(count);

    onlyOnce();
    function onlyOnce(){
        console.log('只初始化一次的东西');
        //初始化一些东西
    }
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