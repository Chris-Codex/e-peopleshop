import {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../header/Header.module.scss"
import {FaShoppingCart, FaTimes} from "react-icons/fa"
import {HiOutlineMenuAlt3} from "react-icons/hi"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>Shop<span>Max</span>.</h2>
    </Link>
  </div> 
)

const cart = (
  <Link to="/cart">
    Cart 
    <FaShoppingCart size={20} />
    <p>0</p>
  </Link>
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={showMenu ? 
              `${styles["nav_wrapper"]} 
              ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                  <Link to="/">
                    {logo}
                    <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                  </Link>
                </li>
                <li>
                  <NavLink to="/" className={activeLink}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={activeLink}>
                    Contact Us
                  </NavLink>
                </li>
            </ul>

            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
                <NavLink to="/register" className={activeLink}>Register</NavLink>
                <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
              </span>

              <span className={styles.cart}>
                {cart}
              </span>
            </div>
        </nav>

        <div className={styles["menu-icon"]}>
          <span className={styles.cart}>
                {cart}
          </span>
          <HiOutlineMenuAlt3 onClick={toggleMenu} size={28} />
        </div>

      </div>
    </header>
  );
};

export default Header;
