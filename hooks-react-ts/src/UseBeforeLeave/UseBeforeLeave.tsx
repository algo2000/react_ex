import { useEffect } from "react"

export const useBeforeLeave = (message: Function) => {
    const handle: EventListener = (event: Event) => {
        const { clientY } = event as MouseEvent
        if (clientY <= 0) {
            message()
        }
    }

    useEffect(() => {
        document.addEventListener('mouseleave', handle)
        return () => document.removeEventListener('mouseleave', handle)
    }, [])
}