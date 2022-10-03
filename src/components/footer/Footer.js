import React from "react";
import styles from "./../footer/Footer.module.scss"

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <div className={styles.footer}>
      &Copy {year} All Rights Reserved
    </div>
  );
};

export default Footer;
