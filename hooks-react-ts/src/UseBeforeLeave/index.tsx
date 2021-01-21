import {useBeforeLeave} from './UseBeforeLeave'

function UseBeforeLeaveIndex() {
    const beforeMessage: Function = () => console.log('dont leave')
    useBeforeLeave(beforeMessage)

    return (
        <div>
            <h1>7. UseBeforeLeave</h1>
            Move the mouse pointer out of the area
        </div>
    )
}

export default UseBeforeLeaveIndex
