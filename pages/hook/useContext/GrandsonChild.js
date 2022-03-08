import React, { useContext, useEffect, useState } from "react";
import context from "./context";

function GrandsonChild() {
    console.log('GrandsonChild');
    let v = useContext(context);

    const [p,setp] = useState(v);
    
    useEffect(()=>{
        console.log('GrandsonChild-useEffect');
    })
    // setp(v+1)
    return (
        <>
            <h3>{v}--{p}</h3>
        </>
    )
}

export default GrandsonChild;