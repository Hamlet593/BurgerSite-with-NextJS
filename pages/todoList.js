import ShowText from "../helpers/ShowText";

const TodoList = () => {
    return (
        <>
            <ShowText
                text={`${`These our burgers.`}`}
            />
            <br />
            <ShowText
                text={`${`At All About Burger - we know how a burger should taste! We pride ourselves in making fresh, never-frozen beef that is locally sourced and ground fresh daily. It doesn't stop there... Our bread is baked fresh daily, our onion rings are fried fresh to order, and our fries are cooked by the order from freshly sliced potatoes! We do EVERYTHING from A to Z!.`}`}
                max={20}
            />
            <br />
            <ShowText
                text={`${`At All About Burger - we know how a burger should taste! We pride ourselves in making fresh, never-frozen beef that is locally sourced and ground fresh daily. It doesn't stop there... Our bread is baked fresh daily, our onion rings are fried fresh to order, and our fries are cooked by the order from freshly sliced potatoes! We do EVERYTHING from A to Z!.`}`}
            />
        </>)
};

export default TodoList;