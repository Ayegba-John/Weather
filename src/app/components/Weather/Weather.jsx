import styles from "./Weather.module.css";

const weather = () => {
  return (
    <div className={styles.main}>
      <div className={styles.search_bar}>
        <input type="text" placeholder="search" />
        <img
          className={styles.search_icon}
          src="search.svg"
          alt="search icon"
        />
      </div>
    </div>
  );
};
export default weather;
