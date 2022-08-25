import styles from '../../styles/Todo.module.scss';

const TodoItem = ({ todo }) => {
    return (
        <div className={styles.todoItem}>
            <input type='checkbox' className={styles.item}/>
            <p className={styles.itemBig}>{todo.text}</p>
            <button className={styles.item}>X</button>
        </div>
    )
}

export default TodoItem;