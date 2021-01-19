import { useState } from "react";

export type ValidatorType = (value: string) => boolean

export interface UseInputType {
    initial: string,
    validator: ValidatorType
}

export const useInput = ({ initial, validator }: UseInputType) => {
    const [value, setValue] = useState(initial);
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