import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const homeStyle = currentRoute === '/' ? styles.active : '';
  const utilStyle = currentRoute === '/utils' ? styles.active : '';
  const contactStyle = currentRoute === '/contact' ? styles.active : '';
  
  return (
    <div className={styles.navbar_container}>
      <div className={styles.header}>
        <h1>Doug Jones</h1>
        <div className={styles.cursor} />
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li className={homeStyle}>
            <Link href="/">Home</Link>
          </li>
          <li className={utilStyle}>
            <Link href="/utils">Utils</Link>
          </li>
          <li className={contactStyle}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
