
import styles from './herocard.module.css';

export default function HeroCard() {
  return (
    <aside className={styles.jobCard}>
      <div className={styles.cardHeader}>
        <div className={styles.companyIcon}>
          
        </div>
        <div className={styles.headerText}>
          <p className={styles.cardTitle}>Front-End Developer Intern</p>
          <p className={styles.cardSubtitle}>sonatrach • algiers, Algeria</p>
        </div>
        <div className={styles.matchBadge}>87% match</div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.scoreLabel}>AI Compatibility Score</p>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
        </div>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagCyan}`}>✓ React</span>
          <span className={`${styles.tag} ${styles.tagBlue}`}>✓ TypeScript</span>
          <span className={`${styles.tag} ${styles.tagRed}`}>Three.js</span>
          <span className={`${styles.tag} ${styles.tagOrange}`}>6 months</span>
          <span className={`${styles.tag} ${styles.tagOrange}`}>paid</span>
        </div>
        <div className={styles.cardMeta}>
          <div className={styles.metaItem}>
            <span>Location</span>
            <strong>On-site</strong>
          </div>
          <div className={styles.metaItem}>
            <span>Start</span>
            <strong>Sept 2025</strong>
          </div>
          <div className={styles.metaItem}>
            <span>Level</span>
            <strong>Master</strong>
          </div>
        </div>
        <button className={styles.btnCyanRect}>Apply Now →</button>
      </div>
    </aside>
  );
};