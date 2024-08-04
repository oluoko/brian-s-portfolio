import styles from "./Brian.module.css";
import { getImageUrl } from "../../utils";

export const Brian = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I&apos;m Brian Otieno.</h1>
        <p className={styles.description}>
          I am a dedicated software developer with a passion for creating
          dynamic and efficient web applications. With a solid background in
          full-stack development, mainly using the MERN stack, I specialize in
          both front-end and back-end technologies to ensure seamless and robust
          solutions. Currently, I am honing my skills as a full-stack developer,
          continuously striving to innovate and enhance the user experience.
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
