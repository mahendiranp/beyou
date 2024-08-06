import styles from "./offers.module.css";
import { useEffect, useState } from "react";
import useScreenSize from "@/utils/useScreenSize";

export default function Offers() {
  const [sticky, setScroll] = useState(false);
  const { isMobile } = useScreenSize();

  const handleScroll = (e) => {
    const header = document.getElementById("header");
    const value = isMobile ? 15 : 5;
    const headerHeight = header.offsetHeight + value;
    const offers = document.getElementById("offers");
    const offersHeight2 = offers.getBoundingClientRect();

    console.log(headerHeight, offersHeight2.top);
    console.log(headerHeight > offersHeight2.top);
    setScroll(headerHeight > offersHeight2.top);
  };
  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${styles.offers} w-100 zIndex1 ${
        sticky ? `${styles.sticky}` : ""
      }`}
      id="offers"
    >
      <div className="container h-100">
        {!sticky && (
          <div className={styles.offerDetails}>
            <div className={`${styles.offerName} offerName`}>
              🎁 Special Launch Offer 🎁
            </div>
            <div className={styles.offerValue}>
              <span className={styles.offerValue1}>20% OFF</span>
              <span className={`${styles.desc} view-onmobile`}>
                on your <br />
                first order!
              </span>
            </div>
            {/* <a href="https://api.whatsapp.com/send?phone=50600000000">
            Click to connect +506 0000 0000
          </a> */}

            <div className={styles.offerDesc}>
              <span className={`${styles.desc1} view-ondesktop`}>
                on your first order!
              </span>
              <span className={styles.desc2}>Offer valid until August end</span>
            </div>
          </div>
        )}
        {sticky && !isMobile && (
          <div className={`${styles.offerDetails} h-100`}>
            <div className={`${styles.offerName} offerName`}>
              🎁 Special Launch Offer 🎁
            </div>
            <div className={styles.stickOfferValue}>
              <span className={styles.stickyOfferValue1}>20% OFF</span>
              <span className={`${styles.desc} view-onmobile`}>
                on your <br />
                first order!
              </span>
            </div>
            {/* <a href="https://api.whatsapp.com/send?phone=50600000000">
          Click to connect +506 0000 0000
        </a> */}

            <div className={styles.stickyOfferDesc}>
              <span className={`${styles.stickDesc1} view-ondesktop`}>
                on your first order!
              </span>
              <span className={`${sticky ? styles.stickDesc2 : styles.desc2}`}>
                Offer valid until August end
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
                <span className={styles.stickOfferValue1}>20% OFF</span>
                <span className={`${styles.stickDesc}`}>
                  on your
                  <br /> first order!
                </span>
              </div>

              <div className={styles.stickyOfferDesc}>
                <span className={styles.stickDesc2}>
                  Offer valid until August end
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
