import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <h3>Front-end Developer</h3>
            <p>
              I&apos;m a front-end developer with experience in building
              responsive and optimized websites. I&apos;ve crafted intuitive
              user interfaces using HTML, CSS, and JavaScript, bringing ideas to
              life with creativity and functionality.
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3>Back-end Developer</h3>
            <p>
              I have experience developing fast and optimized back-end systems
              and APIs. From scalable server-side solutions using Node.js and
              Express to ensuring database performance, I thrive on the
              challenges of building robust applications.
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3>Full-stack Enthusiast</h3>
            <p>
              I&apos;m passionate about the endless possibilities of web
              development. Whether it&apos;s implementing the latest front-end
              frameworks or optimizing back-end performance, I&apos;m dedicated
              to creating seamless digital experiences.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
