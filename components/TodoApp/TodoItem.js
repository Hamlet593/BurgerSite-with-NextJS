import styles from '../../styles/Todo.module.scss';

const TodoItem = ({ todo, onChange, onDelete }) => {
    return (
        <div className={styles.todoItem}>
            <input type='checkbox' checked={todo.isCompleted} className={styles.item} onChange={evt => {
                onChange({
                    ...todo,
                    isCompleted: evt.target.checked
                })
            }}/>
            <p className={styles.itemBig}>{todo.text}</p>
            <button className={styles.item} onClick={() => onDelete(todo)}>X</button>
        </div>
    )
}

export default TodoItem;