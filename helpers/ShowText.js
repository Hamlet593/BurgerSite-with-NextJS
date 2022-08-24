import Link from "next/link";
import { useState } from "react";

const ShowText = ({ text, max = 80 }) => {
    const [more, setMore] = useState(false);

    return (
        <>
            {text.length <= max ?
                text :
                !more ?
                    <div>{text.slice(0, max)} <Link href='#'><a onClick={evt => {
                        evt.preventDefault();
                        setMore(true)
                    }}>... more</a></Link></div> :
                    <div>{text} <Link href='f'><a onClick={evt => {
                        evt.preventDefault();
                        setMore(false)
                    }}> less</a></Link></div>}
        </>
    )
}

export default ShowText;