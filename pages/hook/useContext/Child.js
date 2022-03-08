import React, { useContext, useEffect, useState } from "react";
import Grandson from './Grandson';
import context from "./context";


function Child() {
    console.log('---------------------------');
    console.log('Child');
    let [v, setv] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setv(v += 1);
        }, 1000);

    }, [])

    return (
        <context.Provider value={v}>
            <h1>{v}</h1>
            <Grandson />
        </context.Provider >
    )
}
export default Child;