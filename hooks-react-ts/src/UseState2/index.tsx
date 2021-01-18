import React, { useState } from 'react'

function UseStateIndex2() {
    const [inputState, setInputState] = useState({
        disabled: true,
        text: "활성화"
    })

    const transformSwitch = () => {
        setInputState({
            disabled: !inputState.disabled,
            text: (inputState.disabled ? "비활성화" : "활성화")
        })
    }

    return (
        <div className="UseState2">
            <h1>2. UseState Part2</h1>
            <input disabled={inputState.disabled}/>
            <button onClick={transformSwitch}>{inputState.text}</button>
        </div>
    )
}
export default UseStateIndex2
