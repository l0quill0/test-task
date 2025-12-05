"use client";

import styles from "./Header.module.scss";
import Profile from "../../public/Profile.svg";
import Cart from "../../public/Cart.svg";
import Chevron from "../../public/Chevron.svg";
import Menu from "../../public/Menu.svg";
import Close from "../../public/Close.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${styles.container} ${
        isMenuOpen ? styles.containerOpen : ""
      } `}
    >
      <div className={styles.mobileContainer}>
        <p className={styles.logo}>Logo here</p>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>
      <div
        className={`${styles.navigationContainer} ${
          isMenuOpen ? styles.navOpen : styles.navClosed
        } `}
      >
        <button className={styles.button}>Home</button>
        <div className={styles.featureOptionContainer}>
          <button className={styles.button}>Features</button>
          <Chevron />
        </div>
        <button className={styles.button}>Blog</button>
        <button className={styles.button}>Shop</button>
        <button className={styles.button}>About</button>
        <button className={styles.button} style={{ fontWeight: "600" }}>
          Contact
        </button>
        <div className={styles.menuContainer}>
          <button className={styles.iconButton}>
            <Profile />
          </button>
          <button className={styles.iconButton} style={{ paddingRight: "1px" }}>
            <Cart />
          </button>
        </div>
      </div>
    </div>
  );
}
