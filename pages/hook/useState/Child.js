import React, { useState } from "react";

function Child() {
    console.log('Child()');

    const [v, setv] = useState(0);
    const [obj, setObj] = useState({ old: 1 });
    const [fun, setFun] = useState(() => {
        return 'fun...'
    })

    function dealObj() {
        setObj((old) => {
            return { ...old, new: new Date().getSeconds() }
        })
    }

    function dealFun() {
        setFun((p) => {
            console.log(p);
            return p + '-'
        })
    }

    return (
        <>
            <h1>{v}</h1>
            <button onClick={() => { setv((old) => { return old + 1 }) }}>----v---</button>
            <h1>{JSON.stringify(obj)}</h1>
            <button onClick={() => { dealObj() }}>----obj---</button>
            <h1>{fun}</h1>
            <button onClick={() => { dealFun() }}>----fun---</button>
        </>
    )
}
export default Child;