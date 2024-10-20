import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.header}>
        <h1>Doug Jones</h1>
        <div className={styles.cursor} />
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/utils">Utils</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
