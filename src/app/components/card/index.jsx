import styles from "./card.module.css";

const Card = ({ character }) => {
    return (
        <div className={styles.card}>
            <div className={styles.characterImageContainer}>
                <img src={character.image || "#"} alt="Imagem do personagem" />
            </div>
            <div className={styles.cardTitle}>
                <h1 className={styles.character}>{character.name}</h1>
            </div>
        </div>
    )
};

export default Card;
