import styles from "./Brian.module.css";
import { getImageUrl } from "../../utils";

export const Brian = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I&apos;m Brian Otieno.</h1>
        <p className={styles.description}>
          A software developer with a passion for building web applications.
          Currently working as a full-stack developer.
        </p>
      </div>
      <img
        src={getImageUrl("Brian/brian-s gif.gif")}
        alt="An image of Brian, the creator."
        className={styles.brianImg}
      />
    </section>
  );
};
