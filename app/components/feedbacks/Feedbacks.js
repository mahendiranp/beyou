import styles from "./feedbacks.module.css";
import quationLeft from "../../../assets/images/quotation-2.png";
import quationRight from "../../../assets/images/quotation-1.png";
import quationBeYouLogo from "../../../assets/images/beyou-circle.png";
import FeedbackSlider from "../feedbackSlider/FeedbackSlider";

export default function Feedbacks() {
  return (
    <div className={`${styles.feedbacks}  w-100`}>
      <div className="container">
        <div className={styles.feedbackTitle}>
          <div className={styles.quationLeft}>
            <img src={quationLeft.src} />
          </div>
          <div className={styles.quationBeYouLogo}>
            <img src={quationBeYouLogo.src} />
          </div>
          <div className={styles.quationRight}>
            <img src={quationRight.src} />
          </div>
        </div>
        <FeedbackSlider />
      </div>
    </div>
  );
}
