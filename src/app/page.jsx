import styles from "./page.module.css";
import CardList from "./components/cardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Personagens</h1>
      </div>
      <div className={styles.content}>
        <CardList/>
      </div>
    </div>
  );
}
