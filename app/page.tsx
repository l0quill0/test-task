import styles from "./page.module.scss";
import { Header } from "../components/header/Header";
import { ContactForm } from "../components/contactForm/ContactForm";
import { Footer } from "@/components/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Mockup metadata",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
