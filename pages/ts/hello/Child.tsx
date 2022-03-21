import React from "react";


function dom<T>(p:T):T{
    return p;
}

const Child: React.FC = () => {
    return <>11</>
}

export default Child;