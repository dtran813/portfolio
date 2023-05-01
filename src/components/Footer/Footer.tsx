import styles from './Footer.module.css';
import { social_media } from '../constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.footerName}>Duc H. Tran</p>
        <div className={styles.media}>
          {social_media.map(media => (
            <a key={media.name} href={media.url}>
              <img src={media.logo} alt={`${media.name} Logo`} />
            </a>
          ))}
        </div>
        <p className={styles.footerText}>
          All rights reserved © Duc H. Tran {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
