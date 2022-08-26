import TodoItem from "./TodoItem";

const TodoList = ({ todos, onChange, onDelete }) => {

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default TodoList;