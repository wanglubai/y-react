import React, { useMemo, useState } from "react";

function Child() {
    console.log('Child()');

    const [s, sets] = useState(0)
    const [callBack, setCallBack] = useState(2)

    function delCallback() {
        console.log('delCallback');
        let s = '';
        for (var i = 0; i < callBack; i++) {
            s += i;
        }
        return s;
    }
    const delCallbackFun = useMemo(delCallback, [callBack])

    return (
        <>
            <h1>{delCallbackFun}</h1>
            <button onClick={() => { sets(v => v + 1) }}>----s---</button>
            <button onClick={() => { setCallBack(v => v + 2) }}>---callBack---</button>
        </>
    )
}
export default Child;