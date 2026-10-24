import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>Enter your Credentials to access your account</p>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="login-email">Email address</label>
            <input
              className={styles.input}
              id="login-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.field}>
            <div className={styles.passwordHeading}>
              <label htmlFor="login-password">Password</label>
              <a className={styles.forgotPassword} href="#">forgot password</a>
            </div>
            <input
              className={styles.input}
              id="login-password"
              name="password"
              type="password"
              placeholder="Name"
            />
          </div>
          <label className={styles.terms}>
            <input className={styles.checkbox} name="remember" type="checkbox" />
            <span>Remember for 30 days</span>
          </label>
          <div className={styles.submitArea}>
            <button className={styles.submitButton} type="button">Login</button>
          </div>
        </form>
        <div className={styles.bottomSection}>
          <div className={styles.divider}>
            <span>Or</span>
          </div>
          <div className={styles.socialButtons}>
            <button className={`${styles.socialButton} ${styles.googleButton}`} type="button">
              <img className={styles.socialIcon} src={googleLogo} alt="" />
              Sign in with Google
            </button>
            <button className={`${styles.socialButton} ${styles.appleButton}`} type="button">
              <img className={styles.socialIcon} src={appleLogo} alt="" />
              Sign in with Apple
            </button>
          </div>
          <p className={styles.account}>
            Have an account? <a className={styles.signIn} href="/signup">Sign In</a>
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <img className={styles.blossom} src={blossomFlower} alt="Green blossom" />
      </section>
    </main>
  )
}

export default Login
