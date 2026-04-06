
import styles from './isitfor.module.css';

export default function Isitfor() { return ( <section className={styles.whoItFor}>
          <div>
            <span className={styles.badgeGold}>WHO IT'S FOR</span>
            <h2 className={styles.sectionTitle}>
              Built for students <br /> and recruiters alike
            </h2>
            <p>
              Two sides of the same platform — each with powerful tools designed
              for their specific needs.
            </p>
          </div>

          <div className={styles.dualCards}>
            <div className={`${styles.featureCard} ${styles.studentSide}`}>
              <div className={styles.topAccent}></div>
              <span className={`${styles.miniBadge} ${styles.miniBadgeCyan}`}>For Students</span>
              <h3>Accelerate Your Career Start</h3>
              <p>
                Stop spending hours on generic job boards. Get AI-curated offers
                that match exactly who you are and where you want to go.
              </p>
              <ul className={styles.featureList}>
                <li>✦ Personalised AI offer recommendations with compatibility score</li>
                <li>✦ Skills gap analysis — know exactly what to learn next</li>
                <li>✦ Direct messaging with company recruiters</li>
                <li>✦ Real-time application tracking dashboard</li>
                <li>✦ Profile analytics — see who viewed your profile</li>
              </ul>
            </div>

            <div className={`${styles.featureCard} ${styles.companySide}`}>
              <div className={`${styles.topAccent} ${styles.gold}`}></div>
              <span className={`${styles.miniBadge} ${styles.miniBadgeGold}`}>For Companies</span>
              <h3>Find Talent That Fits</h3>
              <p>
                Reduce time-to-hire and discover pre-qualified candidates ranked
                automatically by how well they meet your requirements.
              </p>
              <ul className={styles.featureList}>
                <li>✦ AI-ranked candidate list for every offer posted</li>
                <li>✦ Detailed candidate profiles with skill matching charts</li>
                <li>✦ Automatic detection of compatible profiles</li>
                <li>✦ Integrated messaging system for efficient outreach</li>
                <li>✦ Recruitment analytics and performance reports</li>
              </ul>
            </div>
          </div>
        </section>)};