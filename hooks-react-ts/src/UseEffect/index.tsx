import React, { useEffect, useState } from 'react'

function UseEffectIndex() {
    const [number, setNumber] = useState(0)
    const [aNumber, setAnumber] = useState(0)

    useEffect(() => {
        console.log(number)
        return () => {
            console.log('Cleanup')
        }
    }, [number])

    return (
        <div>
            <h1>3. UseEffect</h1>
            <button onClick={(): void => setNumber(number + 1)}>UseEffect : {number}</button>
            <button onClick={(): void => setAnumber(aNumber + 1)}>Non-UseEffect : {aNumber}</button>
        </div>
    )
}

export default UseEffectIndex