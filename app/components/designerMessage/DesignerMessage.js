import styles from "./designerMessage.module.css";
import Image from "next/image";
import DesignerImage from "../../../assets/photos/designer-photo.jpeg";

export default function () {
  return (
    <div className={`${styles.designerMessage} w-100`}>
      <div className="container">
        <h3 className={`${styles.title} view-onmobile`}>
          Meet the <span>designer</span>
        </h3>
        <div className={styles.messageSection}>
          <div className={styles.leftSection}>
            <h3 className={`${styles.title} view-ondesktop`}>
              Meet the <span>designer</span>
            </h3>
            <h5 className={`${styles.message} view-ondesktop`}>
              “ I believe in discovering my own style, being comfortable &
              confident.”
            </h5>
            <div className={styles.name}>hi i’m , Pooja Shree</div>
            <p className={styles.description}>
              Founder and lead designer at beyou. My journey in fashion began
              with a degree in fashion design and a diploma in fashion
              communication. Fashion has always been my world from a young age.
            </p>
            <p className={styles.description}>
              Over the past 6 years, I've sharpened my skills in boutique
              fashion, collaborating with top designers and leading online
              tailoring startups. I've seen firsthand the challenges women face
              in finding clothes that combine style, comfort, and confidence.
            </p>
            <p className={styles.description}>
              At beyou, I merge my design expertise with a deep understanding of
              women's needs for clothing that reflects their individuality. We
              prioritise both convenience and personalisation, ensuring every
              stitch reflects your unique style.
            </p>
            <p className={styles.description}>
              Let beyou help you discover fashion that truly represents you .
            </p>
          </div>
          <div className={styles.rightSection}>
            <Image
              src={DesignerImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <h5 className={`${styles.message} view-onmobile`}>
              “ I believe in discovering my own style, being comfortable &
              confident.”
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
