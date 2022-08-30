import { useEffect } from "react";

const BurgersInput = ({ title, setTitle }) => {

    return (
        <div>
            <input
                type='text'
                value={title}
                onChange={evt => setTitle(evt.target.value)}
            />
        </div>
    )
}

export default BurgersInput;