import { useInput, ValidatorType } from './UseInput'

function UseInputIndex() {
    const limitedCharacters: ValidatorType = (value) => !value.includes('@')
    const name = useInput({
        initial: 'Test:',
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