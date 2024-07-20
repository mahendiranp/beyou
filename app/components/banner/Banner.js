import styles from "./banner.module.css";
//import video from "../../../assets/videos/bg-movie_720.mp4";

export default function Banner() {
  return (
    <main className={`${styles.banners} w-100`}>
      <h3 className={styles.info}>
        Made-to-order fashion with expert styling, delivered to <span>you</span>
      </h3>
    </main>
  );
}
