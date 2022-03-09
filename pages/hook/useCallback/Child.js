import React, { useCallback, useState } from "react";

function Child() {
    const [state, setState] = useState(0);
    const [count, setCount] = useState(0);

    const stateFun = useCallback(() => {
        console.log(`${state} state change`);
        return `${state} state change ${new Date().getSeconds()}s`
    }, [state])

    const countFun = useCallback(() => {
        console.log(`${count} count change`);
        return `${count} count change ${new Date().getSeconds()}s`
    }, [count])

    const emptyCall = useCallback(() => {
        console.log(`empty change`);
        return `empty change ${new Date().getSeconds()}s`;
    }, [])


    return (
        <>
            <h1>{state} [state]</h1>
            <h4>{stateFun()}</h4>
            <button onClick={() => { setState(state + 1) }}>setState 按钮</button>
            <h1>{count} [count]</h1>
            <h4>{countFun()}</h4>
            <button onClick={() => { setCount(count + 1) }}>setCount 按钮</button>
            <h4>{emptyCall()}</h4>
        </>
    )
}
export default Child;