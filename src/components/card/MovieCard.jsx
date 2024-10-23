import React from 'react'
import styles from "./MovieCard.module.scss"
import { Link } from 'react-router-dom'

const MovieCard = ({ img, title, id }) => {
    return (
        <>
            <Link to={`/movie/${id}`}>
                <div className={styles.card}>
                    <img className={styles.card_img} src={"https://image.tmdb.org/t/p/w500" + img}
                        alt="Bu yerda film rasmi bor" />
                    <div className={styles.card_title}>
                        <h1 className={styles.card_title_text}>{title}</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MovieCard