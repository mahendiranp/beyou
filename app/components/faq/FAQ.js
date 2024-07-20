import styles from "./FAQ.module.css";

export const FAQ = () => {
  return (
    <div className={`${styles.faqSection}  w-100`}>
      <div className={`${styles.faqContainer} container`}>
        <div className={styles.leftSection}>
          <h3 className={styles.faqTitles}>
            Got questions? <span>We've Got Answers!</span>
          </h3>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>
                What is{" "}
                <span className="beyou">
                  'be<span>you</span>'
                </span>{" "}
                online fashion boutique?
              </h3>
              <p>
                Founder and lead designer my journey in fashion began with a
                degree in fashion design and a diploma in fashion communication.
              </p>
            </div>
            <div className={styles.question}>
              <h3>
                What is{" "}
                <span className="beyou">
                  'be<span>you</span>'
                </span>{" "}
                online fashion boutique?
              </h3>
              <p>
                Founder and lead designer my journey in fashion began with a
                degree in fashion design and a diploma in fashion communication.
              </p>
            </div>
            <div className={styles.question}>
              <h3>
                What is{" "}
                <span className="beyou">
                  'be<span>you</span>'
                </span>{" "}
                online fashion boutique?
              </h3>
              <p>
                Founder and lead designer my journey in fashion began with a
                degree in fashion design and a diploma in fashion communication.
              </p>
            </div>
            <div className={styles.question}>
              <h3>
                What is{" "}
                <span className="beyou">
                  'be<span>you</span>'
                </span>{" "}
                online fashion boutique?
              </h3>
              <p>
                Founder and lead designer my journey in fashion began with a
                degree in fashion design and a diploma in fashion communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
