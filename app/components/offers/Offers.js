import styles from "./offers.module.css";
import { useEffect, useState } from "react";
import useScreenSize from "@/utils/useScreenSize";

export default function Offers() {
  const [sticky, setSticky] = useState(false);
  const [reachedHeader, setReachedHeader] = useState(false);
  const { isMobile } = useScreenSize();
  const [headerHeight, setHeaderHeight] = useState("");

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    console.log(reachedHeader);
    const header = document.getElementById("header");
    const value = 0;
    const headerHeight = header.offsetHeight + value;
    const offers = document.getElementById("offers");
    const offersHeight2 = offers.getBoundingClientRect();
    setHeaderHeight(headerHeight);
    console.log(headerHeight, offersHeight2.top);
    console.log(headerHeight === offersHeight2.top);
    setReachedHeader(headerHeight === offersHeight2.top);
    setSticky(headerHeight === offersHeight2.top);
  };
  return (
    <div
      className={`${styles.offers} w-100 zIndex1 classname ${
        sticky ? `${styles.sticky}` : ""
      } ${sticky ? "forwards-animation" : "backwards-animation"}`}
      style={{
        top: headerHeight,
      }}
      id="offers"
    >
      <div className="container h-100">
        {!sticky && (
          <div className={styles.offerDetails}>
            <div className={`${styles.offerName} offerName`}>
              🎁 Special Launch Offer 🎁
            </div>
            <div className={styles.offerValue}>
              <span className={styles.offerValue1}>15% OFF</span>
              <span className={`${styles.desc} view-onmobile`}>
                on all above <br />
                ₹2000/-
              </span>
            </div>

            <div className={styles.offerDesc}>
              <span className={`${styles.desc1} view-ondesktop`}>
                on all above ₹2000/-
              </span>
              <span className={styles.desc2}>20th October to 1st November</span>
            </div>
          </div>
        )}
        {sticky && !isMobile && (
          <div className={`${styles.offerDetails} h-100`}>
            <div className={`${styles.offerName} offerName`}>
              🎁 Special Launch Offer 🎁
            </div>
            <div className={styles.stickOfferValue}>
              <span className={styles.stickyOfferValue1}>15% OFF</span>
              <span className={`${styles.desc} view-onmobile`}>
                on all above ₹2000/- <br />
                ₹2000/-
              </span>
            </div>
            {/* <a href="https://api.whatsapp.com/send?phone=50600000000">
          Click to connect +506 0000 0000
        </a> */}

            <div className={styles.stickyOfferDesc}>
              <span className={`${styles.stickDesc1} view-ondesktop`}>
                on all above ₹2000/-
              </span>
              <span className={`${sticky ? styles.stickDesc2 : styles.desc2}`}>
                20th October to 1st November
              </span>
            </div>
          </div>
        )}

        {sticky && isMobile && (
          <div className={`${styles.stickOfferDetails} h-100`}>
            <div className={`${styles.stickOfferName}`}>
              🎁 Special Launch Offer 🎁
            </div>
            <div className={styles.stickyOfferDetails}>
              <div className={styles.stickOfferValue}>
                <span className={styles.stickOfferValue1}>15% OFF</span>
                <span className={`${styles.stickDesc}`}>
                  on all above
                  <br /> ₹2000/-
                </span>
              </div>

              <div className={styles.stickyOfferDesc}>
                <span className={styles.stickDesc2}>
                  20th October to 1st November
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
