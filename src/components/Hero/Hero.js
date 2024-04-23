import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

console.log(styles);

const Hero = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>
          To-do-React-App
        </PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
  };

  export default Hero;


  