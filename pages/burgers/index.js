import Head from "next/head";
import ImageConverter from '../helpers/ImageConverter';

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
                        <div key={id}>
                            <h3>{name}</h3>
                            <p>{desc}</p>
                            <p>Price is: {price}$</p>
                            <ImageConverter
                                src={image}
                                alge={name}
                                width={300}
                                height={300}
                            />
                        </div>
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