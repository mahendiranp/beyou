"use client";
import { isMobile } from "react-device-detect";

import styles from "./header.module.css";
import { slide as Menu } from "react-burger-menu";
import Pinterest from "../../../assets/icon/pinterest.png";
import Instagram from "../../../assets/icon/instagram.png";
import useScreenSize from "@/utils/useScreenSize";

import MenuIcon from "../../../assets/icon/hamburger-menu-icon.png";
import { useState, createRef } from "react";

export default function Header({ onClick }) {
  const { isMobile, isDesktop } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const ref = createRef();

  var isMenuOpen = function (id) {
    // const section = document.querySelector(`#${id}`);
    // section.scrollIntoView({
    //   behavior: "smooth",
    //   inline: "start",
    // });
    setIsOpen(!isOpen);
    onClick(id);
  };
  return (
    <div className={styles.headerbg} id="header">
      <div className="container d-flex w-100 zIndex1">
        <div className={styles.header}>
          {isMobile && (
            <Menu
              width={"100%"}
              customBurgerIcon={<img src={MenuIcon.src} />}
              customCrossIcon={false}
              className={"my-menu view-onmobile"}
              burgerButtonClassName={"hamburger-menu"}
              reveal
              isOpen={isOpen}
              onOpen={() => setIsOpen(!isOpen)}
            >
              <div className="mobile-menu">
                <div className="mobile-menu__logo">
                  <img
                    src="./beyou-logo.png"
                    className={styles.logo}
                    width="1.17rem"
                  />
                  <p className={styles.text}>Online fashion boutique</p>
                </div>
                <div className="mobile-menu__links">
                  <div className="mobile-menu__links">
                    <button
                      id="home"
                      className="menu-item"
                      onClick={() => isMenuOpen("booking-steps")}
                    >
                      How it works
                    </button>
                    <button
                      id="about"
                      className="menu-item"
                      onClick={() => isMenuOpen("choices")}
                    >
                      Our tailoring choices
                    </button>
                    <button
                      id="contact"
                      className="menu-item"
                      onClick={() => isMenuOpen("designer-message")}
                    >
                      Meet the designer
                    </button>
                    <button
                      id="contact"
                      className="menu-item"
                      onClick={() => isMenuOpen("works")}
                    >
                      Our notable work
                    </button>
                    <button
                      id="contact"
                      className="menu-item"
                      onClick={() => isMenuOpen("customer-feedbacks")}
                    >
                      Our happy customers
                    </button>
                  </div>
                  <div className="social-medias">
                    <div className="social-media-icons">
                      <a href="https://pin.it/76JZ9D5Gf" target="_blank">
                        <img src={Pinterest.src} />
                      </a>
                    </div>
                    <div className="social-media-icons">
                      <a
                        href="https://www.instagram.com/beyou_customfashion?igsh=MXI2M3hyc2Y5cXR1eA%3D%3D&utm_source=qr"
                        target="_blank"
                      >
                        <img src={Instagram.src} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Menu>
          )}
          <div className={styles.leftSection}>
            <img src="./beyou-logo.png" className={styles.logo} />
            <p className={styles.text}>Online fashion boutique</p>
          </div>
          <div className={styles.rightSection}>
            {/* <p className={`${styles.text} view-ondesktop`}>
              Serviceable in and around <span>HSR & Haralur - Bengaluru</span>
            </p> */}
            <a className="btn-light" href="tel:+919019895174">
              <span className="callicon"></span>
              <span className="header-btn">Book now</span>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="view-onmobile">
        <p className={`${styles.infomessage}`}>
          Serviceable in and around <span>HSR & Haralur - Bengaluru</span>
        </p>
      </div> */}
    </div>
  );
}
