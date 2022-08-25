import TodoItem from "./TodoItem";
import styles from '../../styles/Todo.module.scss';

const TodoList = ({ todos }) => {

    return (
        <div className={styles.todoBlock}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList;