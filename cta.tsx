
import styles from './cta.module.css';

export default function Cta() { return (


<section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.sectionTitle}>
              Ready to find your <br />{" "}
              <span className={styles.gradientText}>perfect internship?</span>
            </h2>
            <p className={styles.ctaLead}>
              Join 12,400+ students already using SmartIntern to launch their
              careers.
            </p>
            <div className={styles.ctaActions}>
              <a href="#" className="btn btnCyanPill big">
                Sign Up as a Student
              </a>
              <a href="#" className="btn btnOutlinePill big">
                Post a Position
              </a>
            </div>
          </div>
        </section>); };