import React, { useState } from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo: React.FC = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className={`${styles.card} animate-fade`}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBox}><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="17" fill="#00E5C8" fill-opacity="0.09"/>
<rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#00E5C8" stroke-opacity="0.2"/>
<path d="M16.9997 16.9998C18.4724 16.9998 19.6663 15.8059 19.6663 14.3332C19.6663 12.8604 18.4724 11.6665 16.9997 11.6665C15.5269 11.6665 14.333 12.8604 14.333 14.3332C14.333 15.8059 15.5269 16.9998 16.9997 16.9998Z" stroke="#00E5C8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.667 22.3332C11.667 19.6665 14.067 17.6665 17.0003 17.6665C19.9337 17.6665 22.3337 19.6665 22.3337 22.3332" stroke="#00E5C8" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <h2>Personal Information</h2>
      </div>

      <div className={styles.photoUpload}>
        <label>PROFILE PHOTO <span className={styles.badge}>optional</span></label>
        <div className={styles.uploadArea}>
          <div className={styles.plusIcon}><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.82047 8.72016V0.000155926H5.32047V8.72016H3.82047ZM0.000468731 5.06016V3.64016H9.14047V5.06016H0.000468731Z" fill="#2A4A60"/>
</svg>
</div>
          <div className={styles.uploadText}>
            <p>Upload a profile photo</p>
            <span>JPG, PNG OR WEBP · MAX 5 MB</span>
          </div>
        </div>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label>First Name <span>*</span></label>
          <input type="text" placeholder="e.g Zhouri" className={styles.input} />
        </div>
        
        <div className={styles.formGroup}>
          <label>Last Name <span>*</span></label>
          <input type="text" placeholder="e.g Amine" className={styles.input} />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label>Email Address <span>*</span></label>
          <input type="email" placeholder="your@example.com" className={styles.input} />
        </div>

        {/* حقل كلمة السر الجديد */}
        <div className={styles.formGroup}>
          <label>Password <span>*</span></label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Minimum 8 characters" 
              className={styles.input} 
            />
            <i 
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.eyeIcon}`} 
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
        </div>

        {/* حقل تأكيد كلمة السر الجديد */}
        <div className={styles.formGroup}>
          <label>Confirm Password <span>*</span></label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Repeat your Password" 
              className={styles.input} 
            />
            <i 
              className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.eyeIcon}`} 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label>Phone number <span>*</span></label>
          <div className={styles.phoneInput}>
            <div className={styles.countryCode}>
              <img src="https://flagcdn.com/w20/dz.png" alt="Algeria" />
              <span>+213</span>
            </div>
            <input type="tel" placeholder="555 000 000" className={styles.input} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;