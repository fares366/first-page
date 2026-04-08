import React from 'react';
import Navbar from './Navbar';
import PersonalInfo from './Personalinfo';
import AcademicInfo from './Academicinfo';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Create your <span>student</span> account</h1>
        <div className={styles.grid}>
          <PersonalInfo />
          <AcademicInfo />
        </div>
        <div className={styles.footer}>
          <button className={styles.btnSubmit}>
            Create my account <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;