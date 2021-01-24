import { FormEvent, useState } from 'react'

type TodoFormProps = {
    addTodo: Function
}

function TodoForm({ addTodo }: TodoFormProps) {
    const [value, setValue] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoForm
