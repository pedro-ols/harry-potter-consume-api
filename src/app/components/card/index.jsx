import styles from "./card.module.css";

const Card = ({ character }) => {
    return (
        <div className={styles.card}>
            <div className={styles.characterImageContainer}>
                <img src={character.image || "/images/foto-perfil-vazia.png"} alt="Imagem do personagem" className={styles.cardImage}/>
            </div>
            <div className={styles.cardTitle}>
                <h1 className={styles.character}>{character.name}</h1>
                <h2 className={styles.characterText}>👶 {character.dateOfBirth || "unknown"}</h2>
                <h2 className={styles.characterText}>🏠 {character.house || "none/unknown"}</h2>
                <h2 className={styles.characterText}>🎭 {character.actor || "none"}</h2>
                <h2 className={styles.characterText}>🧙‍♂️ {character.species || "none/unknown"}</h2>
                <h2 className={styles.characterText}>🪄 {character.patronus || "none/unknown"}</h2>
            </div>
        </div>
    )
};

export default Card;
