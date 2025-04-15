'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cardList.module.css"
import Card from "../card"

const CardList = () => {
    const url = "https://hp-api.onrender.com/api/characters";

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setCharacters(response.data);
                setLoading(false)
            } catch (error) {
                console.log("Erro ao buscar personagens na API");
                setError("Não foi possível carregar os personagens.");
                setLoading(false);
            };
        };
        fetchFilms();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                Carregando filmes...
            </div>
        )
    }
    if (error) {
        return (
            <div className={styles.error}>
                {error}
            </div>
        )
    }

    return (
        <section className={styles.cardsList}>
            {characters.map((character) => (
                <Card key={character.id} character={characters} />
            ))};
        </section>
    )
}

export default CardList