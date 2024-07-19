import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Footer />
    </main>
  );
}
