import styles from "./footer.module.css";
import Pinterest from "../../../assets/icon/pinterest.png";
import Instagram from "../../../assets/icon/instagram.png";

export default function Footer() {
  return (
    <div className={`${styles.footer} w-100 zIndex1`}>
      <div className="container">
        <div className={styles.logo}>
          <img src="./beyou-logo.png" className={styles.logo} />
        </div>
        <div className={styles.info}>
          made with care{" "}
          <span className="view-ondesktop b-inline">for you</span>
          <br />
          <span className="view-onmobile">for you</span>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.contactDetails}>
            <div className={styles.contacts}>
              <div className={styles.labels}>
                <span className={styles.emailIcon}>Email:</span>{" "}
                <a href="mailto:hello@b-you.co">hello@b-you.co</a>
              </div>
              <div className={styles.labels}>
                <span className={styles.callIcon}>Call:</span>{" "}
                <a href="tel:+919944590420">+91 9944590420</a>
              </div>
              <div className={styles.labels}>
                <span className={styles.locationIcon}>Locate:</span> Silver
                County Rd, Bengaluru
              </div>
            </div>
            <div className={styles.socialMedias}>
              <div className={styles.socialMediaIcons}>
                <a href="https://pin.it/76JZ9D5Gf" target="_blank">
                  <img src={Pinterest.src} />
                </a>
              </div>
              <div className={styles.socialMediaIcons}>
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
        <div className={styles.copyright}>&copy; be you. 2024</div>
      </div>
    </div>
  );
}
