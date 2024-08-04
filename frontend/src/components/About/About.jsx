import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <p>
              I&apos;m currently a third-year computer science student and also
              a tech enthusiast with a knack for crafting seamless web
              experiences. As a full-stack developer, I thrive on the dynamic
              intersection of front-end elegance and back-end robustness. My
              journey in the realm of computerscience has been marked by a
              dedication to mastering the intricacies of web development.
            </p>
          </li>

          <li className={styles.aboutItem}>
            <p>
              In my quest to bridge the gap between creativity and
              functionality, I&apos;ve honed my skills in a variety of
              technologies and frameworks. From crafting responsive and
              intuitive user interfaces with HTML, CSS, and JavaScript to
              architecting scalable server-side solutions using Node.js and
              Express, I relish the challenges of building end-to-end web
              applications.
            </p>
          </li>

          <li className={styles.aboutItem}>
            <p>
              Passionate about the endless possibilities that web development
              offers, I constantly seek innovative ways to bring ideas to life.
              Whether it&apos;s implementing the latest front-end frameworks or
              optimizing database performance, I find joy in the meticulous
              process of creating digital experiences that resonate with users.
            </p>
          </li>

          <li className={styles.aboutItem}>
            <p>
              As I embark on my third year of computer science studies, I look
              forward to delving deeper into emerging technologies and refining
              my abilities as a full-stack developer. Join me in exploring the
              ever-evolving landscape of web development, where each line of
              code contributes to a vibrant online world.
            </p>
          </li>

          <li className={styles.aboutItem}>
            <p>Let&apos;s code, innovate, and build the future together!</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
