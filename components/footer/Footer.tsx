"use client";

import styles from "./Footer.module.scss";
import Phone from "@icons/Phone.svg";
import Mail from "@icons/Mail.svg";
import Location from "@icons/Location.svg";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Logo Here</span>

      <div className={styles.contentContainer}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Reach Us</span>
          <div className={styles.sectionField}>
            <div className={styles.svgWrapper}>
              <Phone />
            </div>
            <a href="tel:+1012 3456 789">+1012 3456 789</a>
          </div>
          <div className={styles.sectionField}>
            <div className={styles.svgWrapper}>
              <Mail />
            </div>
            <a href="mailto:demo@gmail.com">demo@gmail.com</a>
          </div>
          <div className={styles.sectionField}>
            <div className={styles.svgWrapper}>
              <Location />
            </div>
            <a
              className={styles.addressStyle}
              target="_blank"
              href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%A8%D0%90/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x3b977ca25eeffaaa!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11p106jvz9?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            >
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Company</span>
          <a href="/about" className={styles.sectionText}>
            About
          </a>
          <a href="/contact" className={styles.sectionText}>
            Contact
          </a>
          <a href="/blogs" className={styles.sectionText}>
            Blogs
          </a>
        </div>

        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Legal</span>
          <a href="/privacyPolicy" className={styles.sectionText}>
            Privacy Policy
          </a>
          <a href="/termsAndService" className={styles.sectionText}>
            Terms & Service
          </a>
          <a href="/termsOfUse" className={styles.sectionText}>
            Terms of Use
          </a>
          <a href="/refundPolicy" className={styles.sectionText}>
            Refund Policy
          </a>
        </div>

        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Quick Links</span>
          <a href="/keybox" className={styles.sectionText}>
            Techlabz Keybox
          </a>
          <a href="/downloads" className={styles.sectionText}>
            Downloads
          </a>
          <a href="/forum" className={styles.sectionText}>
            Forum
          </a>
        </div>

        <form className={styles.subscribeForm}>
          <span className={styles.subscribeFormHeader}>
            Join Our Newsletter
          </span>
          <div className={styles.subscribeFormInputContainer}>
            <input
              className={styles.subscribeFormInput}
              placeholder="Your email address"
            />
            <button
              className={styles.subscribeFormButton}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Subscribe
            </button>
          </div>
          <p className={styles.subscribeFormInfo}>
            * Will send you weekly updates for your better tool managment
          </p>
        </form>
      </div>
    </div>
  );
};
