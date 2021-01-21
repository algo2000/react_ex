import { useEffect, useRef } from "react"

export const useClick = (onClick: EventListener) => {
    const ref = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        const element = ref.current
        if (element) {
            element.addEventListener('click', onClick)
        }
    }, [onClick])
    return ref;
}