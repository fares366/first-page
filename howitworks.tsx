
import styles from './howitswork.module.css';

export default function Howitworks() { return (
    <section className={styles.howItWorks}>
          <div>
            <span className={styles.badgeGold}>HOW IT WORKS</span>
            <h2 className={styles.sectionTitle}>
              Three steps to your <br /> perfect internship
            </h2>
            <p>
              From profile creation to offer acceptance — our AI guides every
              step of your journey.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>👤</div>
              <h3>Build Your Profile</h3>
              <p>
                Add your skills, experience, and preferences. The more detail
                you provide, the smarter your matches become.
              </p>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.iconBoxGold}`}>🧠</div>
              <h3>AI Finds Your Matches</h3>
              <p>
                Our algorithm analyses thousands of offers and scores each
                against your unique profile.
              </p>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>🚀</div>
              <h3>Apply with Confidence</h3>
              <p>
                One-click applications with your pre-built profile. Track every
                stage in real time.
              </p>
            </div>
          </div>
        </section>
)};