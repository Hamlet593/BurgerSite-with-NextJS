import Head from "next/head";
import { useState, useEffect } from "react";


const Quantity = () => {

    const [title, setTitle] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        if (title.length === 2) {
            let id = setTimeout(() => {
                fetch(`https://corona-api.com/countries/${title}`)
                    .then(data => data.json())
                    .then(results => setData(results.data))
                    .catch(err => alert(err.message))
            }, 1000);
            return () => clearTimeout(id);
        }
    }, [title])

    let confirmed, country;

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