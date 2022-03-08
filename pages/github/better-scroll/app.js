
import React, { useEffect, useRef, useState } from 'react';

import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';

import './app.less'
BScroll.use(Pullup);
BScroll.use(PullDown);


function app() {
    const l = [];
    for (var i = 0; i < 20; i++) {
        l.push(<p key={i} className='item'>{`----${i}----`}</p>)
    }
    const [list, setList] = useState(l);

    const scrollEl = useRef(null);

    let scroll = null;
    const options = {
        scrollY: true,
        pullDownRefresh: false,
        pullUpLoad: true
    }
    function init() {
        if (scroll == null) {
            console.log(scrollEl);
            scroll = new BScroll(scrollEl.current, options);
            initEvents();
        }
    }

    useEffect(() => {
        init();
        if (scroll) {
            // scroll.refresh();
        }
        // scroll.finishPullUp();
        console.log('useEffect');
    })

    function pushVo() {
        const items = [];
        const len = list.length;
        for (var i = len; i < len + 20; i++) {
            items.push(<p key={i} className='item'>{`----${i}----`}</p>)
        }

        setList(list.concat(items));
    }

    function initEvents() {
        const list = [];
        if (options.pullUpLoad) list.push('pullingUp');
        if (options.pullDownRefresh) list.push('pullingDown');
        list.forEach((v) => {
            scroll.on(v, (e) => {
                switch (v) {
                    case 'pullingDown':
                        console.log(v);
                        break;
                    case 'pullingUp':
                        console.log(v);
                        pushVo();
                        break;
                }
            });
        });
    }

    return (
        <div className='scroll' ref={scrollEl}>
            <div>
                {list}
            </div>
        </div>
    )
}

export default app;