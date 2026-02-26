import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBody}>
        <div>
          <span className={`block text-[1.75rem] font-bold ml-4 md:ml-0`}>
            Yoshi K &apos;s Portfolio.
          </span>
          <span className="block text-sm ml-4 md:ml-0">
            Last Updated on 2022/11
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
