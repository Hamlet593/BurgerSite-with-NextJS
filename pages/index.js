import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import fatBurger from '../public/fatburger.png';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head> 
        <title>My Burger's Website</title>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>We have tasty burgers</h1>
        <div className={styles.mainImage}>
          <Image
            width={400}
            height={400}
            src={fatBurger}
            alt='fat burger'
            placeholder='blur'
          />
        </div>
        <p className={styles.text}>What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.</p>
        <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
        <Link href='/burgers'><a className={styles.btn}>All burgers</a></Link>
      </div>
    </>

  )
};

export default Home;