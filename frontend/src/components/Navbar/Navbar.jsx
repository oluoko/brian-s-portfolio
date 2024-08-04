import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import Logo from "../Logo/Logo";

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
        <Logo />
        <div className={styles.menu}>
          <ul>
            <li>
              <a className={styles.navbarLink} href="#about">
                About
              </a>
            </li>
            <li>
              <Link className={styles.navbarLink} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a className={styles.navbarLink} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#projects">
                Projects
              </a>
            </li>
            <li>
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
