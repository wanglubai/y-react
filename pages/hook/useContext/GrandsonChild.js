import React, { useContext, useEffect, useState } from "react";
import context from "./context";
import mainContext from './main-context'
function GrandsonChild() {
    console.log('GrandsonChild()');

    let v = useContext(context);
    let { main, emit } = useContext(mainContext);

    useEffect(() => {
        setInterval(() => {
            emit(v + 'GrandsonChild')
        }, 2000);
    }, [])

    return (
        <>
            <h3>'GrandsonChild' {v} {main}</h3>
        </>
    )
}

export default GrandsonChild;