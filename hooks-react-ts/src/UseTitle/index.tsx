import { useTitle } from "./UseTitle"

function UseTitleIndex() {
    const titleUploader: Function = useTitle('Loading...')
    setTimeout(() => titleUploader('title'), 3000)
    return (
        <div>
            <h1>6. UseTitle</h1>
            Look at the title!!
        </div>
    )
}

export default UseTitleIndex