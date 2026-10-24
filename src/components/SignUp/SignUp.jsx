import blossomFlower from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="signup-name">Name</label>
            <input
              className={styles.input}
              id="signup-name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="signup-email">Email address</label>
            <input
              className={styles.input}
              id="signup-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="signup-password">Password</label>
            <input
              className={styles.input}
              id="signup-password"
              name="password"
              type="password"
              placeholder="Name"
            />
          </div>
          <label className={styles.terms}>
            <input className={styles.checkbox} name="terms" type="checkbox" />
            <span>
              I agree to the <span className={styles.termsLink}>terms &amp; policy</span>
            </span>
          </label>
          <div className={styles.submitArea}>
            <button className={styles.submitButton} type="button">Signup</button>
          </div>
        </form>
      </section>
      <section className={styles.rightSection}>
        <img className={styles.blossom} src={blossomFlower} alt="Green blossom" />
      </section>
    </main>
  )
}

export default SignUp
