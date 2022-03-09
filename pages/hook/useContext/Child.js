import React, { useContext, useEffect, useState } from "react";
import Grandson from './Grandson';
import context from "./context";
import mainContext from "./main-context";

function Child() {
    console.log('---------------------------');
    console.log('Child');
    let [v, setv] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setv(v += 1);
        }, 1000);

    }, [])

    function call(e) {
        console.log('call',e);
    }

    return (
        <context.Provider value={v}>
            <mainContext.Provider value={{ main: v, emit: call }}>
                <h1> {v}</h1>
                <Grandson />
            </mainContext.Provider>
        </context.Provider >
    )
}
export default Child;