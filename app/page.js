"use client";
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
import Scroll from "../utils/Scroll";
import WhatAppIcon from "../assets/icon/whatsapp-icon.png";
import StickyBox from "react-sticky-box";

export default function Home() {
  const handleOnScroll = () => {};
  return (
    <main className={styles.main}>
      <Header onClick={handleOnScroll} />
      <Banner />
      <Offers />
      <BookingSteps id="booking-steps" />
      <Choices id="choices" />
      <DesignerMessage id="designer-message" />
      <Works id="works" />
      <Feedbacks id="customer-feedbacks" />
      <FaqSection />
      <Footer />
      <WhatsappIcon />
    </main>
  );
}

const WhatsappIcon = () => {
  return (
    <div className="floating-icon">
      <a href="https://wa.me/+919944590420" target="blank">
        <img src={WhatAppIcon.src} width={"48"} />
      </a>
    </div>
  );
};
