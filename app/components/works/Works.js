import styles from "./works.module.css";
import Image from "next/image";

import Image1 from "../../../assets/photos/DSCF0431.png";
import Image9 from "../../../assets/photos/DSCF0666.png";
import Image7 from "../../../assets/photos/DSCF1322.png";
import Image5 from "../../../assets/photos/IMG_2382.png";
import Image2 from "../../../assets/photos/IMG_2545.png";
import Image6 from "../../../assets/photos/IMG_2708.png";
import Image8 from "../../../assets/photos/IMG_4686.png";
import Image4 from "../../../assets/photos/IMG_6848.png";
import Image3 from "../../../assets/photos/IMG_9663.png";

export default function () {
  return (
    <div className={`${styles.works} w-100 zIndex1`}>
      <div className="container">
        <h3 className={`${styles.headingText} heading`}>
          Our <span>notable work</span>
        </h3>
        <div className={styles.gallery}>
          <figure className={`galleryImg  ${styles.galleryItem1}`}>
            <Image
              src={Image1}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Kurtha set</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem2}`}>
            <Image
              src={Image2}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Blouse</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem3}`}>
            <Image
              src={Image3}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>
              Embroidery Blouse
            </figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem4}`}>
            <Image
              src={Image4}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Blouse</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem5}`}>
            <Image
              src={Image5}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Blouse</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem6}`}>
            <Image
              src={Image6}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Golden work</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem7}`}>
            <Image
              src={Image7}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Blouse</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem8}`}>
            <Image
              src={Image8}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Shorts</figcaption>
          </figure>
          <figure className={`galleryImg  ${styles.galleryItem9}`}>
            <Image
              src={Image9}
              alt="Gallery image 1"
              className={styles.galleryImg}
            />
            <figcaption className={styles.galleryDesc}>Golden work</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
