import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.container}>
      <p className={styles.error}>Error, please reload page!</p>
    </div>
  );
}
