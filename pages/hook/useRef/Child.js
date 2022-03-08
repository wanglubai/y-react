import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Child() {
    const el = useRef(null);
    console.log(el);

    useEffect(() => {
        console.log(el);
    })

    useLayoutEffect(() => {
        console.log(el);
    })

    return (
        <div ref={el}>
            Child
        </div>
    )
}
export default Child;