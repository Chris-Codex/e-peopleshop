import React from 'react'
import styles from "../authentication/auth.module.scss"
import loginImg from "../../asstes/loginSec.png"


const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img className={styles.loginImg} src={loginImg} alt="Login" />
      </div>

      <div className={styles.form}>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
          <button className='--btn --btn-primary --btn-block'>Login</button>

        </form>
      </div>
    </section>
  )
}

export default Login