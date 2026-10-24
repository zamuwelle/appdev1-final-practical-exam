import blossomFlower from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
      </section>
      <section className={styles.rightSection}>
        <img className={styles.blossom} src={blossomFlower} alt="Green blossom" />
      </section>
    </main>
  )
}

export default SignUp
