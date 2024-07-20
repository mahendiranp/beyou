import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import BookingSteps from "./components/bookingsteps/BookingSteps";
import Choices from "./components/choices/Choices";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <BookingSteps />
      <Choices />
      <Footer />
    </main>
  );
}
