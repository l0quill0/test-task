import styles from "./ContactForm.module.scss";
import Instagram from "../../public/Instagram.svg";
import Twitter from "../../public/Twitter.svg";
import Discord from "../../public/Discord.svg";
import Phone from "../../public/Phone.svg";
import Mail from "../../public/Mail.svg";
import Location from "../../public/Location.svg";
import LetterSendDesktop from "../../public/LetterSendDesktop.svg";
import LetteSendMobile from "../../public/LetterSendMobile.svg";
import CirclesDesktop from "../../public/CirclesDesktop.svg";
import CirclesMobile from "../../public/CirclesMobile.svg";
import TextInput from "../textInput/TextInput";
import RadioInput from "../radioInput/RadioInput";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span className={styles.titleHeader}>Contact Us</span>
        <span className={styles.titleText}>
          Any question or remarks? Just write a message!
        </span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.infoHeader}>Contact information</span>
          <span className={styles.infoText}>
            Say something to start a live chat!
          </span>
          <div className={styles.infoFieldContainer}>
            <div className={styles.infoField}>
              <div className={styles.svgWrapper}>
                <Phone />
              </div>
              <span>+1012 3456 789</span>
            </div>
            <div className={styles.infoField}>
              <div className={styles.svgWrapper}>
                <Mail />
              </div>
              <span>demo@gmail.com</span>
            </div>
            <div className={styles.infoField}>
              <div className={styles.svgWrapper}>
                <Location />
              </div>
              <span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.buttonContainer}>
              <button className={styles.footerButton}>
                <Twitter />
              </button>
              <button className={styles.footerButton}>
                <Instagram />
              </button>
              <button className={styles.footerButton}>
                <Discord />
              </button>
            </div>
            <CirclesDesktop className={styles.circlesDesktop} />
            <CirclesMobile className={styles.circlesMobile} />
          </div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formRow}>
            <TextInput label="First Name" isRequired={true} />
            <TextInput label="Last Name" isRequired={true} />
          </div>
          <div className={styles.formRow}>
            <TextInput label="Email" type="email" isRequired={true} />
            <TextInput label="Phone Number" isRequired={true} />
          </div>
          <div className={styles.radioWrapper}>
            <span className={styles.radioTitle}>Select Subject?</span>
            <div className={styles.radioContainer}>
              <RadioInput
                name="subject"
                id="subject-1"
                label="General Inquiry"
              />
              <RadioInput
                name="subject"
                id="subject-2"
                label="General Inquiry"
              />
              <RadioInput
                name="subject"
                id="subject-3"
                label="General Inquiry"
              />
              <RadioInput
                name="subject"
                id="subject-4"
                label="General Inquiry"
              />
            </div>
          </div>
          <TextInput
            label="Message"
            isRequired={true}
            placeholder="Write your message.."
            styleInput={{ width: "100%" }}
          />
          <button className={styles.submitButton} type="submit">
            Send Message
          </button>
          <LetterSendDesktop className={styles.letterSendDesktop} />
          <LetteSendMobile className={styles.letterSendMobile} />
        </form>
      </div>
    </div>
  );
}
