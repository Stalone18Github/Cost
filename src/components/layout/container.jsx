import styles from "./index.module.css";
export function Container({ children, costumer }) {
  return (
    <div className={`${styles.container} ${styles[costumer]}`}>{children}</div>
  );
}
