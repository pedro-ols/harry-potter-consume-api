import styles from "./page.module.css";
import CardList from "./components/cardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Personagens</h1>
      </div>
      </header>
      <div className={styles.content}>
        <CardList/>
      </div>
    </div>
  );
}
