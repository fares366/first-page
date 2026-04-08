import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.logo}>Trajekt</span>
        <span className={styles.subLogo}>Smart Internship Finder</span>
      </div>
      <div className={styles.navActions}>
        <span className={styles.navText}>Already have an account?</span>
        <button className={styles.btnLogin}>Log in</button>
      </div>
    </header>
  );
};

export default Navbar;