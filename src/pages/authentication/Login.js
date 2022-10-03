import React from 'react'
import styles from "../authentication/auth.module.scss"
import loginImg from "../../asstes/loginSec.png"
import {Link} from "react-router-dom"
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'



const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img className={styles.loginImg} src={loginImg} alt="Login" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2 className='--color-danger'>Login</h2>
          <form>
            <input type="text" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            <button className='--btn --btn-primary --btn-block'>Register</button>

            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>

          <button className='--btn --btn-danger --btn-block'><FaGoogle color="#fff" /> &nbsp;Login with Google</button>
          <span className={styles.register}>
            <p>Dont have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  )
}

export default Login