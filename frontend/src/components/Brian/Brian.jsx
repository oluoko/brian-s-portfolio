import styles from "./Brian.module.css";
import { getImageUrl } from "../../utils";
import { FaArrowDown } from "react-icons/fa";

export const Brian = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I&apos;m Brian Otieno.</h1>
        <p className={styles.description}>
          A software developer with a passion for building web applications.
          Currently working as a full-stack developer.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:brianotieno586@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact Mee
        </a>
        <div className={styles.resumeContainer}>
          <a
            href="https://docs.google.com/document/d/1r75YJhfcUEZvzuFYd0IwwWSfLJ9gWgq0yaF3PpYrA_Q/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={styles.resume}
          >
            Resume
          </a>

          <a
            href="https://docs.google.com/document/d/1r75YJhfcUEZvzuFYd0IwwWSfLJ9gWgq0yaF3PpYrA_Q/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={styles.downloadButton}
          >
            <FaArrowDown />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("Brian/brian-s gif.gif")}
        alt="An image of Brian, the creator."
        className={styles.brianImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
