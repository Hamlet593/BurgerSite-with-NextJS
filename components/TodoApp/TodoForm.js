import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('');

    return (
        <form onSubmit={evt => {
            evt.preventDefault();
            onAdd(text);
            setText('')
        }}>
            <input value={text} onChange={evt => {
                setText(evt.target.value)
            }}/>
            <button style={{ marginLeft: "15px" }}>Add</button>
        </form>
    )
}

export default TodoForm;