import styles from './statrow.module.css';

export default function StatsRow() { return ( <section className={styles.statsRow}>
          <div className={styles.statItem}>
            <h2>12,400+</h2>
            <p>Registered Students</p>
          </div>
          <div className={`${styles.statItem} ${styles.active}`}>
            <h2>3,100+</h2>
            <p>Available Offers</p>
          </div>
          <div className={styles.statItem}>
            <h2>860+</h2>
            <p>Partner Companies</p>
          </div>
        </section>
)};