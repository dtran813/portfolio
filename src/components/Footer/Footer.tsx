import styles from "./Footer.module.css";
import { social_media } from "../constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.footerName}>Hoa Tran</p>
        <div className={styles.media}>
          {social_media.map((media) => (
            <a key={media.name} href={media.url} target="_blank">
              <img src={media.logo} alt={`${media.name} Logo`} />
            </a>
          ))}
        </div>
        <p className={styles.footerText}>
          All rights reserved © Hoa Tran {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
