import React from 'react';
import styles from './Academicinfo.module.css';

const AcademicInfo: React.FC = () => {
  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBox}>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6663 6.66683V10.6668M14.6663 6.66683L7.99967 3.3335L1.33301 6.66683L7.99967 10.0002L14.6663 6.66683Z" stroke="#00E5C8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 8V11.3333C6 13.3333 10 13.3333 12 11.3333V8" stroke="#00E5C8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className={styles.title}>Academic Information</h2>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>University/School <span>*</span></label>
        <input type="text" placeholder="e.g University of Oran 1" className={styles.inputField} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Study Level <span>*</span></label>
        <div className={styles.selectWrapper}>
          <select className={styles.customSelect}>
            <option value="" disabled selected>Select Level</option>
            <option value="license">License</option>
            <option value="master">Master</option>
            <option value="master">phd</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Current Year <span>*</span></label>
        <div className={styles.selectWrapper}>
          <select className={styles.customSelect}>
            <option value="" disabled selected>Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
              <option value="3">4rd Year</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AcademicInfo;