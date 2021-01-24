export type TodoType = {
    text: string,
    isCompleted: Boolean
}
type TodoProps = {
    todo:TodoType,
    index:number,
    key:number,
    completeTodo:Function
    removeTodo:Function
}

function Todo({todo,index,completeTodo,removeTodo}:TodoProps) {
    return (
        <div 
            className="todo"
            style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}

export default Todo
