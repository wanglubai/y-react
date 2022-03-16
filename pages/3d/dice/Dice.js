import React, { useEffect, useRef } from "react";
import './Dice.less'

function Dice() {
    console.log('dice');
    let baseX = 13, baseY = 13;

    const dice = useRef(null);

    function initSetInterval() {
        setInterval(() => {
            baseX += 60;
            baseY += 10;
            console.log(baseX);
            console.log(baseY);
            dice.current.style.transform = `rotateX(${baseX % 360}deg) rotateY(${baseY % 360})}deg)`;
        }, 1000);
    }
    function init() {
        dice.current.addEventListener('mousedown', e => {
            let rotateX = e.clientX;
            let rotateY = e.clientY;
            let move = e => {
                dice.current.style.transform = `rotateX(${baseX - (((e.clientY - rotateY)) % 360)}deg) rotateY(${baseY + (((e.clientX - rotateX)) % 360)
                    }deg)`;
            };
            let up = e => {
                baseX = baseX - (((e.clientY - rotateY) / 2) % 360);
                baseY = baseY + (((e.clientX - rotateX) / 2) % 360);
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            };
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        });
        document.addEventListener('selectstart', e => e.preventDefault());
    }
    useEffect(() => {
        init();
        // initSetInterval();
    }, [])

    return (
        <>
            <div className="dice" ref={dice}>
                <div className="item front"><div className="">⚽️</div></div>
                <div className="item back"><div className="">⚽️⚽️</div></div>
                <div className="item right"><div className="">⚽️⚽️⚽️</div></div>
                <div className="item left"><div className="">⚽️⚽️⚽️⚽️</div></div>
                <div className="item top"><div className="">⚽️⚽️⚽️⚽️⚽️</div></div>
                <div className="item bottom"><div className="">⚽️⚽️⚽️⚽️⚽️⚽️</div></div>
            </div>
        </>
    )
}
export default Dice;