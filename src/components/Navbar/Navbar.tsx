import React from 'react';
import { navLinks } from '../constants';
import styles from './Navbar.module.css';
import { menu, x } from '../../assets';

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  const mobileMenu: React.CSSProperties = {
    pointerEvents: 'all',
    transform: 'scale(1)',
    right: '1.5rem',
    top: '2rem',
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <a href="#">Duc H Tran</a>
        </div>

        <ul className={styles.menu}>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`} className={styles.navLink}>
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileNavWrapper}>
          <button
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            className={styles.menuBtn}
            onClick={handleClick}
          >
            <img src={toggle ? x : menu} />
          </button>

          <ul
            className={styles.mobileMenu}
            style={toggle ? mobileMenu : undefined}
          >
            {navLinks.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={styles.navLink}
                  onClick={handleClick}
                  tabIndex={toggle ? undefined : -1}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
