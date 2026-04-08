import styles from "./main.module.css";
import Footer from "./Footer";
import { useRef, useState } from "react";

const Main = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <main className={styles.maincontainer}>
      <div className={styles.selectionHeader}>
        <h4>choose your profile type to get the experience built for you</h4>
      </div>

      <div
        className={styles.selectionWrapper}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {/* Student Card */}
        <section className={`${styles.card} ${styles.studentCard}`}>
          <div className={`${styles.icon} ${styles.studentIcon}`}>
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_440_4289)">
                <path d="M42.4824 15.1523L23.4539 6.39319C22.8367 6.1089 22.1793 5.96545 21.5 5.96545C20.8207 5.96545 20.1635 6.1089 19.5461 6.39319L0.517596 15.1523C0.203074 15.2976 0 15.6145 0 15.9608C0 16.307 0.203074 16.6239 0.517596 16.7693L19.5461 25.5284C20.1633 25.8126 20.8207 25.9568 21.5 25.9568C22.1793 25.9568 22.8367 25.8126 23.4541 25.5284L38.4715 18.6159V25.5766C37.8755 25.6438 37.4108 26.1511 37.4108 26.764C37.4108 27.2981 37.7642 27.7604 38.2679 27.9077L37.2524 34.6089H41.9283L40.9129 27.9077C41.4165 27.7604 41.7699 27.2981 41.7699 26.764C41.7699 26.1511 41.3051 25.6438 40.7092 25.5766V17.5857L42.4826 16.7693C42.797 16.6239 43.0002 16.307 43.0002 15.9608C43.0002 15.6145 42.7969 15.2976 42.4824 15.1523Z" fill="#00D4C8"/>
                <path d="M21.4998 29.1283C20.5553 29.1283 19.6401 28.9275 18.7799 28.5317L9.47266 24.2471V32.7831C9.47266 34.6571 15.1354 37.0344 21.4998 37.0344C27.8643 37.0344 33.5271 34.657 33.5271 32.7831V24.2471L24.2194 28.5317C23.3596 28.9275 22.4446 29.1283 21.4998 29.1283Z" fill="#00D4C8"/>
              </g>
              <defs>
                <clipPath id="clip0_440_4289">
                  <rect width="43" height="43" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2>Student</h2>
          <p>
            Looking for an internship that matches your skills and ambitions? Let our AI find the perfect opportunity for you.
          </p>
          <ul className={styles.studentList}>
            <li>Personalised AI recommendations</li>
            <li>Skills gap analysis</li>
            <li>Direct messaging with recruiters</li>
            <li>Real-time application tracking</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnStudent}`}>
            Sign Up as a Student <span>→</span>
          </button>
        </section>

        <div className={styles.divider}>OR</div>

        {/* Company Card */}
        <section className={`${styles.card} ${styles.companyCard}`}>
          <div className={`${styles.icon} ${styles.companyIcon}`}>
            <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_440_4317)">
                <path d="M23.395 35.428H9.87012V14.9022L22.4006 7.65937V35.428Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M32.8346 35.4279H23.4619V14.5057L32.5188 19.6859V35.4279Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.35547 35.428H36.6436" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
              <defs>
                <clipPath id="clip0_440_4317">
                  <rect width="41" height="43" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2>Company</h2>
          <p>
            Hiring interns? Post your positions and let AI rank the best-matched candidates for you.
          </p>
          <ul className={styles.companyList}>
            <li>AI-ranked candidate list</li>
            <li>Detailed skill matching charts</li>
            <li>Automatic profile detection</li>
            <li>Integrated messaging system</li>
          </ul>
          <button className={`${styles.btn} ${styles.btnCompany}`}>
            Sign Up as a Company <span>→</span>
          </button>
        </section>
      </div>

      <div className={styles.paginationDots}>
        <span className={`${styles.dot} ${activeIndex === 0 ? styles.active : ""}`}></span>
        <span className={`${styles.dot} ${activeIndex === 1 ? styles.active : ""}`}></span>
      </div>

      <Footer />
    </main>
  );
};

export default Main;