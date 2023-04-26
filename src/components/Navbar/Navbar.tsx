import { navLinks } from '../constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <a href="">LOGO</a>
        </div>
        <ul className={styles.menu}>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
