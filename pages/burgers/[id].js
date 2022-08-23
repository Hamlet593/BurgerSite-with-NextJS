import Image from 'next/image';
import styles from '../../styles/Burgers.module.scss';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  const paths = data.map(burger => {
    return {
      params: { id: burger.id }
    }
  });
  
  console.log(paths);
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();
  return {
    props: { burger: data }
  }
}

const Details = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
        <div className={styles.imageContainer}>
          <Image 
            src={`${burger.image}`} 
            alt={`${burger.name}`} 
            width="100%"
            height="100%" 
          />
        </div>
        <div>
          <p>{burger.desc}</p>
      </div>
    </div>
  );
}

export default Details;