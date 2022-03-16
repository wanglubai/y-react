import React, { useState } from "react";
import LoginState from "./LoginState";
function Child() {
    const [state, setState] = useState(false);

    let vo = { obj: 1 }

    function login() {
        setState(true)
    }

    function out() {
        setState(false)
    }

    return (
        <>
            <div>{vo.obj}</div>
            <LoginState isLogin={state} login={login} out={out} vo={vo}></LoginState>
        </>
    )
}

export default Child;