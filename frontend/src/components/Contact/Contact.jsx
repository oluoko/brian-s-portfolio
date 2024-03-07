import styles from "./Contact.module.css";
import { FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:brianotieno586@gmail.com" target="_blank" rel="noreferrer" className={styles.link}>
          <IoMail />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100070284942061"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>

        <a
          href="https://github.com/oluoko"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/that_guy.brian/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/brian-otieno-64a902213"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FaLinkedin />
        </a>

        <a href="https://twitter.com/oluoko_" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};
