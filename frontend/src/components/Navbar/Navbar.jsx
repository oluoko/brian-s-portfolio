import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu, IoPerson } from "react-icons/io5";
import { FaPhone, FaRegFolderOpen } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <LiaTimesSolid className={`${styles.menuBtn} ${styles.closeBtn}`} />
        ) : (
          <IoMenu className={`${styles.menuBtn} ${styles.openBtn}`} />
        )}
      </div>
      <nav
        className={`${styles.navbar} ${styles.menuItems} ${
          menuOpen && styles.menuOpen
        }`}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <a className={styles.title} href="/">
          Home
        </a>
        <div className={styles.menu}>
          <ul>
            <li>
              <IoPerson className={styles.navbarIcon} />
              <a className={styles.navbarLink} href="#about">
                About
              </a>
            </li>
            <li>
              <FaTools className={styles.navbarIcon} />
              <Link className={styles.navbarLink} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <FaTools className={styles.navbarIcon} />
              <a className={styles.navbarLink} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <FaRegFolderOpen className={styles.navbarIcon} />
              <a className={styles.navbarLink} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <FaPhone className={styles.navbarIcon} />
              <a className={styles.navbarLink} href="#contact">
                Contact
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};
