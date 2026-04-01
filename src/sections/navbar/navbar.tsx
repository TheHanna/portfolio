import styles from "./navbar.module.css";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
    </nav>
  );
}
