import React from "react";
function LoginState(props) {
    const isLogin = props.isLogin;

    props.vo.obj=2
    console.log(props);

    function loginAction() {
        props.login && props.login();
    }

    function outAction() {
        props.out && props.out();
    }

    if (isLogin) {
        return (
            <>
                <h1>吕布怕过谁</h1>
                <div>已登陆</div>
                <button onClick={outAction}>注销</button>
            </>
        )
    } else {
        return (
            <>
                <div>未登录</div>
                <button onClick={loginAction}>点击登陆</button>
            </>
        )
    }
}
export default LoginState;