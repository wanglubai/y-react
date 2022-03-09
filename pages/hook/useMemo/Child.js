import React, { useMemo, useState } from "react";

function Child() {
    console.log('Child()');

    const [s, sets] = useState(0)
    const [memo, setMemo] = useState(2)

    function delMoemo() {
        console.log('delMoemo');
        let s = '';
        for (var i = 0; i < memo; i++) {
            s += i;
        }
        return s;
    }
    const delMoemoFun = useMemo(() => delMoemo(), [memo])

    return (
        <>
            <h1>{delMoemoFun}</h1>
            <button onClick={() => { sets(v => v + 1) }}>----s---</button>
            <button onClick={() => { setMemo(v => v + 2) }}>---memo---</button>
        </>
    )
}
export default Child;