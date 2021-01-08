import { useState } from "react";

export const useInput = (initialVale, validator) => {
  const [value, setValue] = useState(initialVale);
  const onChange = event => {
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