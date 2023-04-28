import styles from './Hero.module.css';
import { name } from '../constants';
import { SplitText } from '../index';

export default function Hero() {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <div>
        <h1 className={styles.name}>
          <SplitText text={name} role="heading" />
        </h1>
      </div>
    </section>
  );
}
