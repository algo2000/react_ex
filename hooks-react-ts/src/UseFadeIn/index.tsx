import { useEffect, useRef } from 'react'

const useFadeIn = (duration: number = 1, delay: number = 0) => {
    const element = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        if (element.current) {
            const { current } = element
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = '1'
        }
    }, [])
    return { ref: element, style: { opacity: 0 } };
}

function UseFadInIndex() {
    const fadeIn1 = useFadeIn(3, 1)
    const fadeIn2 = useFadeIn(3, 3)
    return (
        <div>
            <h1 {...fadeIn1}>FadeIn1</h1>
            <h1 {...fadeIn2}>FadeIn2</h1>
        </div>
    )
}

export default UseFadInIndex