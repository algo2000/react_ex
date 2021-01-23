import React from 'react'
import { useState } from 'react';
import Todo, { TodoType } from './Todo'
import TodoForm from './TodoForm';

function TodoIndex() {
    const [todos, setTodos] = useState<TodoType[]>([
        {
            text: 'learn about react',
            isCompleted: false
        },
        {
            text: 'met friend for lunch',
            isCompleted: false
        },
        {
            text: 'build really cool todo app',
            isCompleted: false
        }
    ])

    const addTodo = (text: TodoType) => {
        const newTodos = [...todos, { text }] as TodoType[]
        setTodos(newTodos)
    }

    const completeTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
    }

    const removeTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div>
            <div className='todo-list'>
                {todos.map((todo: TodoType, index: number) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}

export default TodoIndex
