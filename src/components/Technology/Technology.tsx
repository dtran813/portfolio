import styles from './Technology.module.css';
import { technologies } from '../constants';

export default function Technology() {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.marquee}>
        <ul className={styles.marqueeList}>
          {technologies.map(tech => (
            <li key={tech.name} className={styles.item}>
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </li>
          ))}
          {/* Double the elements to fill out the width */}
          {technologies.map(tech => (
            <li key={tech.name} className={styles.item}>
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Double the elements to fill out the width */}
      <div className={styles.marquee}>
        <ul className={styles.marqueeList}>
          {technologies.map(tech => (
            <li key={tech.name} className={styles.item}>
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </li>
          ))}
          {technologies.map(tech => (
            <li key={tech.name} className={styles.item}>
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
