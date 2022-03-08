import React, { useReducer } from "react";

function deal(vo, type) {
    console.log(type);

    switch (type) {
        case 'increment':
            return { count: vo.count -= 1, '-': type };
        case 'decrement':
            return { count: vo.count += 1, '+': type };
    }
}
function Child() {
    const [vo, dispatch] = useReducer(deal, { count: 0 });

    console.log(vo);

    return (
        <>
            <div>{JSON.stringify(vo)}</div>
            <button onClick={() => { dispatch('increment') }}>increment</button>
            <button onClick={() => { dispatch('decrement') }}>decrement</button>
        </>
    )
}

export default Child;