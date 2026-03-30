import styles from "./name.module.css";

export function Name() {
  return (
    <h1 className={styles.name}>
      <span className={styles.firstName}>Brian</span>{" "}
      <span className={styles.lastName}>Hanna</span>
    </h1>
  );
}
