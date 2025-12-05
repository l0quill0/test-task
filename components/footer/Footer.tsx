import styles from "./Footer.module.scss";
import Phone from "../../public/Phone.svg";
import Mail from "../../public/Mail.svg";
import Location from "../../public/Location.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Logo Here</span>
      <div className={styles.contentContainer}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Reach Us</span>
          <div className={styles.sectionField}>
            <Phone width={24} height={24} />
            <span>+1012 3456 789</span>
          </div>
          <div className={styles.sectionField}>
            <Mail width={24} height={24} />
            <span>demo@gmail.com</span>
          </div>
          <div className={styles.sectionField}>
            <Location width={24} height={24} />
            <span style={{ textWrap: "auto", maxWidth: "280px" }}>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </span>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Company</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blogs</span>
        </div>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Legal</span>
          <span>Privacy Policy</span>
          <span>Terms & Service</span>
          <span>Terms of Use</span>
          <span>Refund Policy</span>
        </div>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionHeader}>Quick Links</span>
          <span>Techlabz Keybox</span>
          <span>Downloads</span>
          <span>Forum</span>
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
            <button className={styles.subscribeFormButton} type="submit">
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
}
