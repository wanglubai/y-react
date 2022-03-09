import React, { useEffect, useState } from "react";

function Child() {
    console.log('Child()');

    const [v, setv] = useState(0);
    const [k, setk] = useState(0);

    useEffect(() => {
        console.log('init_1');
        return () => {
            console.log('clear_1');
        }
    })
    useEffect(() => {
        console.log('init_2');
        return () => {
            console.log('clear_2');
        }
    }, [])

    useEffect(() => {
        console.log('init_3');
        return () => {
            console.log('clear_3');
        }
    }, [v])
    return (
        <>
            <button onClick={() => { setv((old) => old + 1) }}>change v</button>
            <button onClick={() => { setk((old) => old + 1) }}>change k</button>
        </>
    )
}

export default Child;