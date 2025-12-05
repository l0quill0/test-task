import styles from "./page.module.scss";
import Header from "../components/header/Header";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
