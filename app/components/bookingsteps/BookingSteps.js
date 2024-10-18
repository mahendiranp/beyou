import styles from "./bookingSteps.module.css";
import CallIcon from "../../../assets/icon/callicon-light.png";

const data = [
  {
    title: "Consult",
    content: "Schedule your consultation for personalised design guidance.",
  },
  {
    title: "Design",
    content:
      "we visit your place, recommend styles, take precise measurements.",
  },
  {
    title: "Stitch",
    content:
      "You sit back and relax as our team brings your dream outfit to life.",
  },
  {
    title: "Deliver",
    content: "Enjoy timely delivery and ongoing support for any adjustments.",
  },
];

export default function BookingSteps(props) {
  return (
    <section
      className={`${styles.background} w-100 zIndex1 classname`}
      {...props}
    >
      <div className="container">
        <h3 className={`heading ${styles.heading}`}>
          From concept to closet in <span>four easy steps</span>
        </h3>
        <div className={styles.listview}>
          <div className={styles.list}>
            <div className={styles.listOptions}>
              <h5 className={styles.title}>Consult</h5>
              <div className={styles.listBorderStyle}></div>
            </div>
            <p className={styles.content}>
              Schedule your consultation for personalised design guidance.
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.listOptions}>
              <h5 className={styles.title}>Design</h5>
              <div className={styles.listBorderStyle}></div>
            </div>
            <p className={styles.content}>
              we visit your place, recommend styles, take precise measurements.
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.listOptions}>
              <h5 className={styles.title}>Stitch</h5>
              <div className={styles.listBorderStyle}></div>
            </div>
            <p className={styles.content}>
              You sit back and relax as our team brings your dream outfit to
              life.
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.listOptions}>
              <h5 className={styles.title}>Deliver</h5>
              <div
                className={`${styles.listBorderStyle} ${styles.nobackground}`}
              ></div>
            </div>
            <p className={styles.content}>
              Enjoy timely delivery and ongoing support for any adjustments.
            </p>
          </div>
          {/* {data.map((value, index) => (
            <List key={index} title={value.title} content={value.content} />
          ))} */}
        </div>
      </div>
      <div className={`container w-100 ${styles.booknow}`}>
        <a className={`${styles.btnWidth} btn-dark`} href="tel:+919944590420">
          <img src={CallIcon.src} className="btn-icon" />
          <span>Book now</span>
        </a>
      </div>
    </section>
  );
}

const List = ({ title, content }) => {
  return (
    <div className={styles.list}>
      <div className={styles.listOptions}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.listBorderStyle}></div>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
