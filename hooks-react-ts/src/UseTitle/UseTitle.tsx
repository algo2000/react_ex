import { useEffect, useState } from 'react'

export const useTitle = (init: string): Function => {
    const [title, setTitle] = useState(init);

    const updateTitle = () => {
        const htmlTitle: HTMLTitleElement = document.querySelector('title') as HTMLTitleElement
        htmlTitle.innerText = title
    }
    useEffect(updateTitle, [title])

    return setTitle
}