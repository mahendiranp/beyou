import { isMobile } from "react-device-detect";

import styles from "./header.module.css";
import CallIcon from "../../../assets/icon/callicon-dark.png";

export default function Header() {
  console.log(isMobile);
  return (
    <div className={styles.headerbg}>
      <div className="container d-flex w-100 zIndex1">
        <div className={styles.header}>
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
