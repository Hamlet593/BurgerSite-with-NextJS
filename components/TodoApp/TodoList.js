import TodoItem from "./TodoItem";

const TodoList = ({ todos, onChange }) => {

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onChange={onChange}/>
            ))}
        </div>
    )
}

export default TodoList;