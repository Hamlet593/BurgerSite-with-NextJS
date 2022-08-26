import { useState, useEffect } from "react";

const UseBurgerData = (title) => {

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
    
  return data;
}

export default UseBurgerData;