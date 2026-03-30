import styles from "./title.module.css";

export function Title() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Full Stack Web Developer</h2>
      <h3 className={styles.experience}>15+ years of experience</h3>
    </div>
  );
}
