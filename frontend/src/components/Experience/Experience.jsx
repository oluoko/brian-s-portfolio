import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import {
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
  FaLinux,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiMysql } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <FaBootstrap className={styles.skillIcon} />
            <p>Bootstrap</p>
          </div>
          <div className={styles.skill}>
            <IoLogoCss3 className={styles.skillIcon} />
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <FaFigma className={styles.skillIcon} />
            <p>Figma</p>
          </div>
          <div className={styles.skill}>
            <FaGithub className={styles.skillIcon} />
            <p>Github</p>
          </div>
          <div className={styles.skill}>
            <FaHtml5 className={styles.skillIcon} />
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <IoLogoJavascript className={styles.skillIcon} />
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <FaLinux className={styles.skillIcon} />
            <p>Linux</p>
          </div>
          <div className={styles.skill}>
            <DiMongodb className={styles.skillIcon} />
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <DiMysql className={styles.skillIcon} />
            <p>MySQL</p>
          </div>
          <div className={styles.skill}>
            <FaNode className={styles.skillIcon} />
            <p>Node</p>
          </div>
          <div className={styles.skill}>
            <SiPostman className={styles.skillIcon} />
            <p>Postman</p>
          </div>
          <div className={styles.skill}>
            <FaPython className={styles.skillIcon} />
            <p>Python</p>
          </div>
          <div className={styles.skill}>
            <FaReact className={styles.skillIcon} />
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <SiTailwindcss className={styles.skillIcon} />
            <p>Tailwind CSS</p>
          </div>
          <div className={styles.skill}>
            <TbBrandVscode className={styles.skillIcon} />
            <p>VSCode</p>
          </div>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
