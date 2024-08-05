import styles from "./Brian.module.css";
import { getImageUrl } from "../../utils";

export const Brian = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I&apos;m Brian Otieno.</h1>
        <p className={styles.description}>
          I am a passionate software developer specializing in dynamic web
          applications using the MERN stack. With expertise in both front-end
          and back-end technologies, I ensure seamless and robust solutions.
          Currently, I am honing my full-stack skills, always striving to
          innovate and enhance user experience.
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
