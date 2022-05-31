import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBody}>
        <span className={`fs-3 fw-bold ms-3 ms-md-0 ${styles.title}`}>
          Yoshi K &apos;s Portfolio.
        </span>
      </div>
    </div>
  );
};

export default Header;
