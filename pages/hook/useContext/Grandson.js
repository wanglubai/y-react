import React, { useContext, useEffect } from "react";

import context from "./context";
import GrandsonChild from "./GrandsonChild";

function Grandson() {
    console.log('Grandson()');

    const v = useContext(context);
    return (
        <>
            <h2>'Grandson' {v}</h2>
            <GrandsonChild></GrandsonChild>
        </>
    )
}

export default Grandson;