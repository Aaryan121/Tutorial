import "./App.css";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>1</div>
      <div className={styles.child}>2</div>
      <div className={styles.child}>3</div>
      <div className={styles.child}>4</div>
      <div className={styles.child}>5</div>
      <div className={styles.child}>6</div>
    </div>
  );
}

export default App;
