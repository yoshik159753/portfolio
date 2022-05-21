import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBody}>
        <span className={`fs-3 fw-bold ${styles.title}`}>TitleTitleTitle</span>
      </div>
    </div>
  );
};

export default Header;
