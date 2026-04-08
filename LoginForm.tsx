import SocialLogin from "./SocialLogin"
import styles from "./loginform.module.css";

function LoginForm() {
  return (
    <div className={styles["login-right"]}>
      <div className={styles["form-box"]}>
        <p className={styles["form-instruction"]}>
          Enter your credentials to access your account
        </p>

        <form>
          <div className={styles["input-group"]}>
            <label>Email address</label>
            <div className={styles["input-wrapper"]}>
              <span className={styles.icon}>✉</span>
              <input type="email" placeholder="you@example.com"/>
            </div>
          </div>

          <div className={styles["input-group"]}>
            <label>Password</label>
            <div className={styles["input-wrapper"]}>
              <span className={styles.icon}>🔒</span>
              <input type="password" placeholder="enter your password"/>
            </div>
            <a href="#" className={styles["forgot-link"]}>
              Forgot your password?
            </a>
          </div>

          <div className={styles.divider}>
            <span>or login with</span>
          </div>

          <SocialLogin />

          <button type="submit" className={styles["btn-login-gradient"]}>
            Log in →
          </button>

          <p className={styles["signup-footer"]}>
            No account yet? <a href="#">Sign Up — it's free</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm