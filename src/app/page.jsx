import styles from "./page.module.css";
import Weather from "./components/Weather/Weather";

const page = () => {
  return (
    <div className={styles.main}>
      <div>
        <Weather />
      </div>
    </div>
  );
};
export default page;
