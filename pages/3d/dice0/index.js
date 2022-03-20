import React, { useRef, useEffect, useState } from "react";

import D3 from "./libs/D3";
import styles from './index.module.less'

function Dice() {
    const [d3, setD3] = useState(false)
    const conteiner = useRef(null);

    function errorCall() {
        console.log('succeeCall');
    }

    function succeeCall() {
        setD3(true);
    }
    useEffect(() => {
        const d3 = new D3(conteiner.current, './model/dice/dice.gltf', succeeCall, errorCall);
        return () => {
            d3.destroy();
        }
    }, [])

    return (<div className={styles.dice} ref={conteiner}>
        {d3 ? null : <div className="dice-default">3D失败/不支持，则默认的筛子图片</div>}
    </div>)
}
export default Dice;