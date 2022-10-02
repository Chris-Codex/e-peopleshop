import React from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.scss"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>Shop<span>Max</span>.</h2>
    </Link>
  </div> 
)

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.link}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
            </span>

            <span className={styles.cart}>
              <Link to="/cart">
                Cart 
                <FaShoppingCart />
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
