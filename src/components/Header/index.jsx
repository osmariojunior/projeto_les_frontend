import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
        <a href="/">
          <h1>
            Convert<span>DR</span>
          </h1>
        </a>
    </header>
  );
}
