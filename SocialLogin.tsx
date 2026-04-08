import styles from "./loginForm.module.css";

function SocialLogin() {
  return (
    <div className={styles["social-login"]}>
      <button type="button" className={styles["social-btn"]}>
        <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google"/>
        Google
      </button>

      
    </div>
  )
}

export default SocialLogin