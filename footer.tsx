import styles from './footer.module.css';
import youtubeImg from "./assets/youtube.svg";
import instaimg from "./assets/tw.svg";
import twitterimg from "./assets/linkedin.svg";
import linkedinimg from "./assets/telegram1.svg";
export default function Footer() { return ( 
    <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div className="brand">
              <div className="logoCircle"></div>
              <span className="brandName">Task</span>
            </div>
            <p className={styles.brandDesc}>
              The AI-powered platform connecting ambitious students with the
right companies — intelligently.
            </p>
            <div  className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon1}><img src={linkedinimg} alt="LinkedIn" /></a>
              
              
              <a href="#" className={styles.socialIcon2}>
                <img src={twitterimg} alt="Twitter" />
              </a>
              <a href="#" className={styles.socialIcon3}>
                <img src={instaimg}alt="Instagram" />
              </a>
              <a href="#" className={styles.socialIcon4}>
                <img src={youtubeImg}alt="YouTube" />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>Platform</h4>
            <a href="#">Find Internships</a>
            <a href="#">Post a Position</a>
            <a href="#">How it Works</a>
            <a href="#">Pricing</a>
          </div>

          <div className={styles.footerLinks}>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Partners</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div className={styles.footerLinks}>
            <h4>Legal</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">GDPR</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 SmartIntern. All rights reserved.</p>
          <p>Built with Love for students worldwide</p>
        </div>
      </footer>)};