import React from "react";


function Child() {
    // 泛型代表类型的变量
    function dom<T>(param: T): T {
        return param;
    }
    //函数内部使用的属性，方法必须是明确局具有的
    function domArr<T>(param: T[]): T[] {
        console.log(param);
        return param;
    }

    // 泛型接口
    interface iBase {
        <T>(param: T): T;
    }
    function base<T>(param: T): T {
        return param;
    }
    const a: iBase = base;

    // 泛型类
    class BaseClass<T>{
        public self: T;
        constructor(T) {
            this.self = T;
        }
        log(): T {
            return this.self;
        }
    }
    const bc: BaseClass<string> = new BaseClass('BaseClass');
    console.log(bc.log())

    //泛型约束
    interface Iconstraint {
        length: string;
    }
    function constraint<T extends Iconstraint>(param: T): string {
        return param.length;
    }
    console.log(constraint({length:'Iconstraint'}));

    return (
        <div>
            <div>{dom(<a>--a--</a>)}</div>
            <ul>{domArr([<li key={0}>0</li>, <li key={1}> 1</li>, <li key={2}>2</li>])}</ul>
        </div>
    )
}
export default Child;