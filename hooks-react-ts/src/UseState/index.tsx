import React, { useState } from 'react';

function UseStateIndex() {
    const [number, setNumber] = useState(0)

    const increase = () => setNumber(number + 1)
    const decrease = () => setNumber(number - 1)

    return (
        <div className="useState">
            <h1>1. UseState</h1>
            <h2>{number}</h2>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    )
}

export default UseStateIndex;