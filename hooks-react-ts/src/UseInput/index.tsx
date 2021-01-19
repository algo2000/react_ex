import React, { useState } from 'react'

type ValidatorType = (value: string) => boolean

interface UseInputType {
    initialVale: string,
    validator: ValidatorType
}

const useInput = ({ initialVale, validator }: UseInputType) => {
    const [value, setValue] = useState(initialVale);
    const onChange = (event: any) => {
        const {
            target: { value }
        } = event

        let willUpdate = true;

        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value)
        }
    }
    return { value, onChange }
}

function UseInputIndex() {
    const limitedCharacters: ValidatorType = (value) => !value.includes('@')
    const name = useInput({
        initialVale: 'Test:',
        validator: limitedCharacters
    })

    return (
        <div className="UseInput">
            <h1>3. UseInput</h1>
            <input placeholder='Name' {...name} />
        </div>
    )
}
export default UseInputIndex