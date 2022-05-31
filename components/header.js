import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBody}>
        <div>
          <span className={`d-block fs-3 fw-bold ms-3 ms-md-0`}>
            Yoshi K &apos;s Portfolio.
          </span>
          <span className="d-block small ms-3 ms-md-0">
            Last Updated on 2022/05
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
