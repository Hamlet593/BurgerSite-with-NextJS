import { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";

const ErrorPage = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Error Page</title>
            </Head>
            <div className="not-found">
                <h1>Oops...</h1>
                <h2>We don't have that page.</h2>
                <p>You will be redirect after 3 second...</p>
            </div>
        </>

    )
}

export default ErrorPage;