
import styles from './herocont.module.css';
import HeroCard from "./herocard"
export default function HeroContent() { return (  
<section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badgeAi}>● AI-Powered Internship Matching</span>
            <h1 className={styles.heroTitle}>
              Find Your <br />
              <span className={styles.gradientText}>
                Dream <br /> Internship
              </span>
              <br />
              Faster
            </h1>
            <p className={styles.lead}>
              Our AI analyses your profile, skills and ambitions to connect you
              with the internship opportunities that truly match — no more
              endless scrolling.
            </p>
            <div className={styles.heroActions}>
              <a href="#" className="btn btnCyanPill big">
                Find an Internship →
              </a>
              <a href="#" className="btn btnOutlinePill big">
                Post a Position
              </a>
            </div>
          </div>
          <HeroCard />
        </section>
)};