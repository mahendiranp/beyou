import styles from "./choices.module.css";

const choices = [
  {
    title: "Saree blouse",
    label: "Starting from",
    price: "999",
    colorcode: "#F5E6E8",
  },
  {
    title: "Saree",
    label: "Starting from",
    price: "999",
    colorcode: "#F7EFE1",
  },
  {
    title: "Underskirt",
    label: "Starting from",
    price: "999",
    colorcode: "#E5F2D7",
  },
  {
    title: "Kurta",
    label: "Starting from",
    price: "999",
    colorcode: "#E2EAF2",
  },
  {
    title: "Bottom wear",
    label: "Starting from",
    price: "999",
    colorcode: "#E3EDEC",
  },
  {
    title: "Lehenga  Skirt",
    label: "Starting from",
    price: "999",
    colorcode: "#E6E1F2",
  },
  {
    title: "Skirts",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
];

export default function Choices() {
  return (
    <div className={`${styles.choices} w-100`}>
      <div className="container">
        <div className="heading">
          Our <span>tailoring choices</span>
        </div>
        <div className={styles.choicelist}>
          {choices.map((value, index) => (
            <List value={value} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const List = ({ value }) => {
  return (
    <div className={styles.list} style={{ backgroundColor: value.colorcode }}>
      <h5 className={styles.listTitle}>{value.title}</h5>
      <div className={styles.listLabel}>
        {value.label} <span>Rs: {value.price} %</span>
      </div>
    </div>
  );
};
