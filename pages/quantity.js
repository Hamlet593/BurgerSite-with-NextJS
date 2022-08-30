import Head from "next/head";
import { useState, useEffect } from "react";
import UseBurgerData from "../helpers/UseBurgerData";
import BurgersInput from "../helpers/BurgersInput";

const Quantity = () => {

    const [title, setTitle] = useState('');
    const data = UseBurgerData(title);
    const [show, setShow] = useState(true);

    let confirmed, country;

    if (data) {
        confirmed = data.latest_data.confirmed;
        country = data.name;
    }

    return (
        <>
            <Head>
                <title>How many eaters we have</title>
            </Head>
            <div>
                <p>Type here country code like 'am'.</p>
                <button onClick={() => setShow(!show)}>Show eaters quantity</button>
                {
                    show ?
                        <BurgersInput
                            title={title}
                            setTitle={setTitle}
                        /> :
                        null
                }

            </div>
            {country} {confirmed}
        </>
    )
}

export default Quantity;