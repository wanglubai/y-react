import React, { useEffect, useLayoutEffect, useState } from 'react';

function Effect() {
    console.log('state');
    const [count, setCount] = useState(0);
    //变
    document.title = count;
    //变
    console.log(count);

    function onlyOnce() {
        console.log('init onlyOnce')
        setTimeout(() => {
            //组件初始化第3秒仅仅执行一次
            //但组件初始化第2秒点击按钮修改count
            console.log('setTimeout')
        }, 3000);
        //初始化一些东西
    }
    
    useEffect(()=>{
        console.log('创建1');
        return ()=>{
            console.log('销毁1')
        }
    },'1')

    useEffect(()=>{
        console.log('创建2');
        console.log(document.getElementById('pp'));
        return ()=>{
            console.log('销毁2')
        }
    })
    useLayoutEffect(()=>{
        console.log('创建3');
        console.log(document.getElementById('pp'));
        return()=>{
            console.log('销毁3');
        }
    })

    return (
        <div>
            <p id='pp'>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}
export default Effect;