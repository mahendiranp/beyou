"use client";

import styles from "./header.module.css";
import { slide as Menu } from "react-burger-menu";
import Pinterest from "../../../assets/icon/pinterest.png";
import Instagram from "../../../assets/icon/instagram.png";
import useScreenSize from "@/utils/useScreenSize";

import MenuIcon from "../../../assets/icon/hamburger-menu-icon.png";
import { useState, useEffect } from "react";

export default function Header() {
  const { isMobile } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    console.log("sss");
    document.addEventListener("scroll", stickNavbar);

    return () => {
      document.removeEventListener("scroll", stickNavbar);
    };
  });

  const stickNavbar = () => {
    console.log("ssss");
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };

  var isMenuOpen = function (id) {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${styles.headerbg} ${stickyClass}`} id="header">
      <div className="container d-flex w-100 zIndex1">
        <div className={styles.header}>
          {isMobile && (
            <Menu
              width={"100%"}
              customBurgerIcon={<img src={MenuIcon.src} />}
              className={"my-menu view-onmobile"}
              burgerButtonClassName={"hamburger-menu"}
              reveal
              isOpen={isOpen}
              onClose={() => setIsOpen(!isOpen)}
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
