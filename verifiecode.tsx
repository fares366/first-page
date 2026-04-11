/* VerifyCode.tsx */
import React from 'react';
import Brand from './Brand';
import styles from './Verifiecode.module.css';

function VerifyCode() {
  return (
    <div className="auth-page">
      <div className="bg-glow"></div>
      
      <div className={styles.container}>
        <Brand />
        
        <h1 className={styles.title}>
          ENTER THE <span className={styles.gradientText}>RECEIVED CODE</span>
        </h1>
        
        <p className={styles.description}>
          We sent a 6-digit verification code to your email address
        </p>
        
        <div className={styles.emailBadge}>
          ✉ you@example.com
        </div>

        <div className={styles.codeGrid}>
          {[...Array(6)].map((_, i) => (
            <input 
              key={i}
              type="text" 
              maxLength={1} 
              className={styles.otpInput} 
              autoFocus={i === 0}
            />
          ))}
        </div>

        <div className={styles.timerSection}>
          Code expires in <span style={{color: 'var(--cyan)'}}>00:30</span>
          <button className={styles.resendBtn}>Resend?</button>
        </div>

        <button className={styles.resetBtn}>
          RESET PASSWORD <span>→</span>
        </button>

        <p className={styles.backLink}>
          Back to <a href="#">login</a>
        </p>
      </div>
    </div>
  );
}

export default VerifyCode;