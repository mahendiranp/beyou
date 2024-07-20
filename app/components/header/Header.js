import { isMobile } from "react-device-detect";

import styles from "./Header.module.css";
import CallIcon from "../../../assets/icon/callicon.svg";

export default function Header() {
  console.log(isMobile);
  return (
    <div className={styles.headerbg}>
      <div className="container d-flex w-100">
        <div className={styles.header}>
          <div className={styles.leftSection}>
            <img src="./beyou-logo.png" className={styles.logo} />
            <p className={styles.text}>Online fashion boutique</p>
          </div>
          <div className={styles.rightSection}>
            <p className={`${styles.text} view-ondesktop`}>
              Serviceable in and around <span>HSR & Haralur - Bengaluru</span>
            </p>
            <button className="btn-light">
              {/* <img src={CallIcon.src} alt="Icon description" /> */}
              <object type="image/svg+xml" data={CallIcon.src} className="icon">
                Bike
              </object>
              <span className="view-onmobile">Book</span>
              <span className="view-ondesktop">Book a consultation</span>
            </button>
          </div>
        </div>
      </div>
      <div className="view-onmobile">
        <p className={`${styles.infomessage}`}>
          Serviceable in and around <span>HSR & Haralur - Bengaluru</span>
        </p>
      </div>
    </div>
  );
}
