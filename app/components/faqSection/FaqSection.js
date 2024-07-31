import styles from "./faq.module.css";
import Accordion from "../accordion/Accordion";

const faqData = [
  {
    question: "What is the turnaround time?",
    answer:
      "At beyou, we strive to deliver your custom orders within 3-5 working days from the time you place your order.",
  },
  {
    question: "Are there any additional charges for lining and embellishment?",
    answer:
      "Lining is included in our service, but additional costs apply for embroidery, design add-ons, and special fabrics or trims like latkans and laces.",
  },
  {
    question: "What types of garments do you create?",
    answer:
      "We offer tailoring services for all ethnic, casual, and occasional wear for women and kids, ensuring you look your best for any event.",
  },
  {
    question: "Will you help me source fabric?",
    answer:
      "Absolutely! We are here to assist you in picking the perfect fabric for any occasion, making your shopping experience seamless.",
  },
  {
    question: "Will there be any additional charges for alteration?",
    answer:
      "No, we offer free alterations for outfits custom-made by beyou to ensure a perfect fit.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      'Booking an appointment is easy! Just click on the "book now" button to give us a call or reach us directly at +91 9019895174.',
  },
  {
    question: "Are your services available across Bangalore?",
    answer:
      "We are currently serving clients in and around HSR and Haralur. For customers from other areas, we offer online consultations to cater to your needs.",
  },
  {
    question: "Can I cancel an order?",
    answer:
      "Once an order is placed, we unfortunately cannot cancel it as we begin working on it immediately to meet our turnaround time.",
  },
  {
    question: "What are your payment methods?",
    answer:
      "You can complete your payment through cash or UPI, whichever is most convenient for you.",
  },
];

export default function FaqSection() {
  return (
    <div className={`${styles.faqSection}  w-100 zIndex1`}>
      <div className={`${styles.faqContainer} container`}>
        <div className={styles.leftSection}>
          <h3 className={styles.faqTitles}>
            Got questions? <span>We've got answers!</span>
          </h3>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.questions}>
            {faqData.map((value) => {
              return (
                //<Accordion title="First Accordion" content="First Accordion content" />
                // <div className={styles.question}>
                //   <h3>{value.question}</h3>
                //   <p>{value.answer}</p>
                // </div>
                <Accordion title={value.question} content={value.answer} />
              );
            })}
          </div>
          {/* <div className={styles.questions}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
