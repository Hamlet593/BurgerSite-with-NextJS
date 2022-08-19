import Head from "next/head";
import ImageConverter from '../../helpers/ImageConverter';
import styles from '../../styles/Burgers.module.scss';
import Link from "next/link";

const Burgers = ({ burgers }) => {
    return (
        <>
            <Head>
                <title>
                    Our Burgers
                </title>
            </Head>
            <div>
                <h1>
                    Our Burgers
                </h1>
                {burgers.map(({ name, desc, image, price, id }) => {
                    return (
                        <Link href={`/burgers/${id}`} key={id}>
                            <a className={styles.burgerCard}>
                                <ImageConverter
                                    src={image}
                                    alt={name}
                                    width='100%'
                                    height='100%'
                                />
                                <h3>{name}</h3>
                                <p>{desc}</p>
                                <p>Price is: {price}$</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    return {
        props: {
            burgers: data
        }
    }
}

export default Burgers;