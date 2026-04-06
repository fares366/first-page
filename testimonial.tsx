import styles from './testimonial.module.css';

export default function Testimonials() { return (
<section className={styles.testimonials}>
          <div>
            <span className={styles.badgeGold}>TESTIMONIALS</span>
            <h2 className={styles.sectionTitle}>
              Trusted by students <br /> and companies
            </h2>
            <p>
              Don't just take our word for it — hear from people who found
              their match on SmartIntern.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testiCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>
                "The AI score feature is a game changer. I immediately knew which
                offers were realistic for me and which skills I needed to
                develop. Got my internship at Thales in 3 weeks."
              </p>
              <div className={styles.userInfo}>
                <div className={`${styles.avatar} ${styles.avatarCyan}`}>LM</div>
                <div className={styles.userDetails}>
                  <strong>Lina Mazari</strong>
                  <span>Master's in Software Engineering</span>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>
                "We hired three excellent interns through SmartIntern last
                semester. The candidate ranking saved our HR team an enormous
                amount of screening time."
              </p>
              <div className={styles.userInfo}>
                <div className={`${styles.avatar} ${styles.avatarGold}`}>KR</div>
                <div className={styles.userDetails}>
                  <strong>Karim Rahmani</strong>
                  <span>HR Manager - BNP Paribas</span>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.stars}>★★★★☆</div>
              <p className={styles.quote}>
                "I was sceptical about AI matching at first but the platform
                really understands what you're looking for. The profile
                completion tips were very useful for improving my score."
              </p>
              <div className={styles.userInfo}>
                <div className={`${styles.avatar} ${styles.avatarPurple}`}>YB</div>
                <div className={styles.userDetails}>
                  <strong>Yasmine Bouali</strong>
                  <span>Bachelor in Marketing, Year 3</span>
                </div>
              </div>
            </div>
          </div>
        </section>)};