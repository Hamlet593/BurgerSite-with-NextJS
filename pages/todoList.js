import { useState } from "react";

const TodoList = () => {
    let text = `At All About Burger - we know how a burger should taste! We pride ourselves in making fresh, never-frozen beef that is locally sourced and ground fresh daily. It doesn't stop there... Our bread is baked fresh daily, our onion rings are fried fresh to order, and our fries are cooked by the order from freshly sliced potatoes! We do EVERYTHING from A to Z!.`
    const [more, setMore] = useState(false);
    return (
        <>
            {!more ? <div>{text.slice(0, 110)} <a onClick={() => setMore(true)}>... more</a></div>
                : <div>{text} <a onClick={() => setMore(false)}>less</a></div>}
        </>
    )
}

export default TodoList;