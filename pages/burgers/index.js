import Head from "next/head";
import Link from "next/link";

const Burgers = () => {
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
                <Link href='/burgers/cheeseburger'><a><button>Here is Cheeseburger</button></a></Link>
            </div>
        </>
    )
}

export default Burgers;