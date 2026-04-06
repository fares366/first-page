import { useState } from 'react';
import styles from './catalog.module.css';

export default function CatalogueHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.nav}>
        <div className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#00E5CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="#00E5CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className={styles.brand}>
          <div className={styles.logoCircle}></div>
          <span className={styles.brandName}>Task</span>
        </div>

        <nav className={styles.navLinks}>
          <a href="#">For Students</a>
          <a href="#">For Companies</a>
          <a href="#howItWorks">How it works</a>
          <a href="#">About</a>
        </nav>

        <div className={styles.navActions}>
          <button className={`${styles.btn} ${styles.btnOutlinePill}`}>Log in</button>
          <button className={`${styles.btn} ${styles.btnCyanPill}`}>Sign Up Free</button>
        </div>
      </header>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.sidebarLinks}>
          <a href="" onClick={toggleMenu}>For Students</a>
          <a href="#" onClick={toggleMenu}>For Companies</a>
          <a href="#howItWorks" onClick={toggleMenu}>How it works</a>
          <a href="#" onClick={toggleMenu}>About</a>
          <button className={`${styles.btn} ${styles.btnCyanRect}`}>Sign Up Free</button>
        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}
