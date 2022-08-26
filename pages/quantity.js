import Head from "next/head";
import { useState, useEffect } from "react";
import UseBurgerData from "../helpers/UseBurgerData";


const Quantity = () => {

    const [title, setTitle] = useState('');


    let confirmed, country;
    const data = UseBurgerData(title)

    if (data) {
        confirmed = data.latest_data.confirmed;
        country = data.name;
    }

    return (
        <>
            <Head>
                <title>How many eaters we have.</title>
            </Head>
            <div>
                <p>Type here country code like 'am'.</p>
                <input value={title} type='text' onChange={evt => {
                    setTitle(evt.target.value)
                }} />
            </div>
            {country} {confirmed}
        </>
    )
}

export default Quantity;