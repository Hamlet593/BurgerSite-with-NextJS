import ShowText from "../helpers/ShowText";
import styles from '../styles/ToDo.module.scss';
import Head from "next/head";
import TodoList from "../components/TodoList";
import { useState } from "react";

export async function getServerSideProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    return {
        props: {
            users: users.splice(0, 3)
        }
    }
}


const [todos, setTodos] = useState([
    {
        id: Math.random(),
        text: 'Eat Hamburger',
        isCompleted: false
    },
    {
        id: Math.random(),
        text: 'Eat CheeseBurger',
        isCompleted: false
    },
    {
        id: Math.random,
        text: 'Eat All Burgers',
        isCompleted: false
    }
]);


function TodoMain({ users }) {

    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <div className={styles.container}>
                <ShowText
                    text={`${`These our burgers ToDo.`}`}
                />
                <ShowText
                    text={`${`At All About Burger - we know how a burger should taste! We pride ourselves in making fresh, never-frozen beef that is locally sourced and ground fresh daily. It doesn't stop there... Our bread is baked fresh daily, our onion rings are fried fresh to order, and our fries are cooked by the order from freshly sliced potatoes! We do EVERYTHING from A to Z!.`}`}
                />
                <h4>Here are our TOP 3 burger eaters !</h4>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            {user.id} {user.name} from {user.address.city}
                        </div>
                    )
                })}
                <ShowText
                    text='Now we will made our own ToDo app for burgers. Lets go !'
                    max={20}
                />
                <TodoList todos={todos}/>
            </div>
        </>
    )
};

export default TodoMain;