"use client";
import Scrollbar from "smooth-scrollbar";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import BookingSteps from "./components/bookingsteps/BookingSteps";
import Choices from "./components/choices/Choices";
import Feedbacks from "./components/feedbacks/Feedbacks";
import FaqSection from "./components/faqSection/FaqSection";
import DesignerMessage from "./components/designerMessage/DesignerMessage";
import Works from "./components/works/Works";
import Offers from "./components/offers/Offers";
import { useEffect } from "react";
export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollEffect>
        <Header />
        <Banner />
        <Offers />
        <BookingSteps />
        <Choices />
        <DesignerMessage />
        <Works />
        <Feedbacks />
        <FaqSection />
        <Footer />
      </ScrollEffect>
    </main>
  );
}

const option = {
  dumping: 0.1,
  thumbMinSize: 1,
  renderByPixels: true,
  alwaysShowTracks: true,
};

const ScrollEffect = (props) => {
  useEffect(() => {
    Scrollbar.init(document.body, option);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return <>{props.children}</>;
};
