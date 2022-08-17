import Head from 'next/head';

export default function Reviews ({reviews}) {
    return (
        <>
            <Head>
                <title>Reviews</title>
            </Head>
            <h1>Our reviews</h1>
            <div className='reviews'>
                {reviews.map(({id, body}) => {
                    return (
                        <div key={id} className='review'>
                            {id} {body.slice(0, 40)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}