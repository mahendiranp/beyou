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
      "We visit at you place, recommend styles, take precise measurements.",
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

export default function BookingSteps() {
  return (
    <div className={`${styles.background} w-100`}>
      <div className="container">
        <h3 className="heading">
          From concept to closet in <span>four easy steps</span>
        </h3>
        <div className={styles.listview}>
          {data.map((value, index) => (
            <List key={index} title={value.title} content={value.content} />
          ))}
        </div>
      </div>
      <div className={`container w-100 ${styles.booknow}`}>
        <button className="btn-dark">
          <img src={CallIcon.src} className="btn-icon" />
          Book now
        </button>
      </div>
    </div>
  );
}

const List = ({ title, content }) => {
  return (
    <div className={styles.list}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <div></div>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
