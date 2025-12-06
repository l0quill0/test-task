"use client";

import styles from "./Header.module.scss";
import Profile from "@icons/Profile.svg";
import Cart from "@icons/Cart.svg";
import Chevron from "@icons/Chevron.svg";
import Menu from "@icons/Menu.svg";
import Close from "@icons/Close.svg";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={clsx(styles.container, isMenuOpen && styles.containerOpen)}>
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
        className={clsx(
          styles.navigationContainer,
          isMenuOpen ? styles.navOpen : styles.navClosed
        )}
      >
        <a href="/home" className={styles.button}>
          Home
        </a>
        <div className={styles.featureOptionContainer}>
          <button className={styles.button}>Features</button>
          <Chevron />
        </div>
        <a href="/blog" className={styles.button}>
          Blog
        </a>
        <a href="/shop" className={styles.button}>
          Shop
        </a>
        <a href="/about" className={styles.button}>
          About
        </a>
        <a href="/contact" className={clsx(styles.button, styles.heavyButton)}>
          Contact
        </a>

        <div className={styles.menuContainer}>
          <a href="/profile" className={styles.iconButton}>
            <Profile />
          </a>
          <a href="/cart" className={clsx(styles.iconButton, styles.cartIcon)}>
            <Cart />
          </a>
        </div>
      </div>
    </div>
  );
};
