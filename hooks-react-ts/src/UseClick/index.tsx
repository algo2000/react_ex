import { useClick } from './UseClick'

function UseClickIndex() {
    const sayHello: EventListener = () => console.log("Hello!!")
    const title = useClick(sayHello)
    return (
        <div>
            <h1>5. UseClick</h1>
            <h1 ref={title}>Hi</h1>
        </div>
    )
}

export default UseClickIndex
