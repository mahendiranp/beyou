import styles from "./banner.module.css";
//import video from "../../../assets/videos/bg-movie_720.mp4";
import Image1 from "../../../assets/images/banner-1.png";
import Image2 from "../../../assets/images/banner-2.png";
import Image3 from "../../../assets/images/banner-3.png";
import Image from "next/image";

export default function Banner() {
  return (
    <main className={`${styles.banners} w-100`}>
      <div className={`container ${styles.positionReleative}}]`}>
        <div className={`${styles.bannerMobileView} w-100 view-onmobile`}>
          <img src="./banner-mobile.png" className={styles.bannerMobileView} />
        </div>
        <div className={`${styles.bannerDesktopView} w-100 view-ondesktop`}>
          <img src={Image1.src} />
          <img src={Image2.src} />
          <img src={Image3.src} />
        </div>
        <h3 className={styles.info}>
          Made-to-order fashion with expert styling, delivered to you
        </h3>
      </div>
    </main>
  );
}
