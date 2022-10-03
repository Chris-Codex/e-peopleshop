import React from 'react'
import styles from "../authentication/auth.module.scss"
import resetPassword from "../../asstes/resetPassword.jpg"
import {Link} from "react-router-dom"
import Card from '../../components/card/Card'
import { FaIdCard, FaRegistered } from 'react-icons/fa'

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
       <div className={styles.img}>
        <img className={styles.loginImg} src={resetPassword} alt="Reset Password" />
      </div>
     
      <Card>
        <div className={styles.form}>
          <h2 className='--color-danger'>Reset Password</h2>
          <form>
            <input type="text" placeholder='Email' required />
            <button className='--btn --btn-primary --btn-block'>Reset Password</button>

            <div className={styles.links}>
              <p>
                 <Link to="/login"><FaIdCard /> Login</Link>
              </p>
              <p>
                 <Link to="/register"><FaRegistered /> Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>

    </section>
  )
}

export default Reset