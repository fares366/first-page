import Brand from "./Brand"
import EmailInput from "./Email.input"
import ResetButton from "./reset-button"
import "./App.css"
import styles from "./forgetpassword.module.css" // الموديل

function ForgetPassword() {
  return (
    <div className="auth-page">
      <div className="bg-glow"></div>
      <div className={styles.authContainer}>
        <Brand />
        <h1 className={styles.authTitle}>
          FORGOT YOUR <span className={styles.gradientText}>PASSWORD ?</span>
        </h1>
        <EmailInput />
        <ResetButton />
        <p className={styles.backLink}>
          Back to <a href="#">login</a>
        </p>
      </div>
    </div>
  )
}
export default ForgetPassword