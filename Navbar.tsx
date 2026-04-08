import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Trajekt</div>

      <div className={styles.loginArea}>
        <a href="#" className={styles.text}>
          ALready have an account?
        </a>
        <a href="#" className={styles.loginBtn}>
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;