import styles from "./ContactForm.module.scss";
import Instagram from "@icons/Instagram.svg";
import Twitter from "@icons/Twitter.svg";
import Discord from "@icons/Discord.svg";
import Phone from "@icons/Phone.svg";
import Mail from "@icons/Mail.svg";
import Location from "@icons/Location.svg";
import LetterSendDesktop from "@icons/LetterSendDesktop.svg";
import LetteSendMobile from "@icons/LetterSendMobile.svg";
import CirclesDesktop from "@icons/CirclesDesktop.svg";
import CirclesMobile from "@icons/CirclesMobile.svg";
import { TextInput } from "../textInput/TextInput";
import { RadioInput } from "../radioInput/RadioInput";

export const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
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
              <a href="tel:+1012 3456 789">+1012 3456 789</a>
            </div>
            <div className={styles.infoField}>
              <div className={styles.svgWrapper}>
                <Mail />
              </div>
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </div>
            <div className={styles.infoField}>
              <div className={styles.svgWrapper}>
                <Location />
              </div>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%A8%D0%90/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x3b977ca25eeffaaa!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11p106jvz9?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              >
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </a>
            </div>
          </div>

          <div className={styles.footerContainer}>
            <div className={styles.buttonContainer}>
              <a
                target="_blank"
                href="https://x.com/"
                className={styles.footerButton}
              >
                <Twitter />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/"
                className={styles.footerButton}
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://discord.com/"
                className={styles.footerButton}
              >
                <Discord />
              </a>
            </div>

            <CirclesDesktop className={styles.circlesDesktop} />
            <CirclesMobile className={styles.circlesMobile} />
          </div>
        </div>

        <form className={styles.formContainer}>
          <div className={styles.formRow}>
            <TextInput
              label="First Name"
              isRequired={true}
              className={styles.fieldInput}
            />
            <TextInput
              label="Last Name"
              isRequired={true}
              className={styles.fieldInput}
            />
          </div>

          <div className={styles.formRow}>
            <TextInput
              label="Email"
              type="email"
              isRequired={true}
              className={styles.fieldInput}
            />
            <TextInput
              label="Phone Number"
              isRequired={true}
              className={styles.fieldInput}
            />
          </div>

          <div className={styles.radioWrapper}>
            <span className={styles.radioTitle}>Select Subject?</span>
            <div className={styles.radioContainer}>
              <div className={styles.radioPair}>
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
              </div>
              <div className={styles.radioPair}>
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
          </div>

          <TextInput
            label="Message"
            isRequired={true}
            placeholder="Write your message.."
            className={styles.messageInput}
          />

          <div className={styles.submitButtonWrapper}>
            <button className={styles.submitButton} type="submit">
              Send Message
            </button>
            <LetterSendDesktop className={styles.letterSendDesktop} />
            <LetteSendMobile className={styles.letterSendMobile} />
          </div>
        </form>
      </div>
    </div>
  );
};
