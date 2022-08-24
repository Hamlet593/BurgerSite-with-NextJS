import ShowText from "../helpers/ShowText";
import styles from '../styles/ToDo.module.scss';

const TodoList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.showText}>
                <ShowText
                    text={`${`These our burgers ToDo.`}`}
                />
                <div className={styles.showText}>
                    <ShowText
                        text={`${`At All About Burger - we know how a burger should taste! We pride ourselves in making fresh, never-frozen beef that is locally sourced and ground fresh daily. It doesn't stop there... Our bread is baked fresh daily, our onion rings are fried fresh to order, and our fries are cooked by the order from freshly sliced potatoes! We do EVERYTHING from A to Z!.`}`}
                    />
                    <div className={styles.showText}>
                        <ShowText
                            text='Now we will make our own ToDo app for burgers. Lets go !'
                            max={20}
                        />
                    </div>
                </div>
            </div>
        </div>)
};

export default TodoList;