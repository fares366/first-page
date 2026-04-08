import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.item}>AI Matching</div>
      <div className={styles.item}>Skill Analysis</div>
      <div className={styles.item}>Direct Messaging</div>
    </div>
  );
};

export default Footer;