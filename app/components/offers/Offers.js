import styles from "./offers.module.css";

export default function Offers() {
  return (
    <div className={`${styles.offers} w-100 zIndex1`}>
      <div className="container">
        <div className={styles.offerDetails}>
          <div className={styles.offerName}>🎁 Special Launch Offer 🎁</div>
          <div className={styles.offerValue}>
            <span className={styles.offerValue1}>20% OFF</span>
            <span className={`${styles.desc} view-onmobile`}>
              on your <br />
              first order!
            </span>
          </div>
          <div className={styles.offerDesc}>
            <span className={`${styles.desc1} view-ondesktop`}>
              on your first order!
            </span>
            <span className={styles.desc2}>Offer valid until August end</span>
          </div>
        </div>
      </div>
    </div>
  );
}
