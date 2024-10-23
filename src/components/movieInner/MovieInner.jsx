import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from "./MovieInner.module.scss"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SimilarMovies from '../similarMovies/SimilarMovies';
const MovieInner = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=0c43f3a99dd87115bcb9db112a118c03`
            )
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (err) {
                console.log('Error fetching data', err)
            })
    }, [id]);

    return (
        <>
            <div className={styles.innerCard}>
                <div className={`${styles.innerCard_box} container`}>
                    <div className={styles.innerCard_title}>
                        <h1 className={styles.innerCard_headtitle}>{data?.title}</h1>
                        <div className={styles.innerCard_bookmark_box} >
                            <BookmarkBorderIcon className={styles.innerCard_bookmark} />
                        </div>
                    </div>
                    <div className={styles.innerCard_div}>
                        <div className={styles.innerCard_imgs}>
                            <img className={styles.innerCard_img} src={"https://image.tmdb.org/t/p/w500" + data?.poster_path} alt="" />
                        </div>
                        <div className={styles.innerCard_texts}>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Nomi:</span> {data?.original_title}</h1>
                            </div>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Premyera sanasi:</span> {data?.release_date}</h1>
                            </div>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Tili:</span> {data?.original_language}</h1>
                            </div>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Id:</span> {data?.id}</h1>
                            </div>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Reytingi:</span> {data?.vote_average}</h1>
                            </div>
                            <div className={styles.innerCard_text}>
                                <h1 className={styles.innerCard_nexttitle}>
                                    <span className={styles.innerCard_nexttitle_span}>Ko'rishlar soni:</span> {data?.vote_count}</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerCard_def}>
                        <h2 className={styles.innerCard_deftitle}>Film haqida:</h2>
                        <h3 className={styles.innerCard_deftitle}>{data?.overview}</h3>
                    </div>
                </div>
                <SimilarMovies />
            </div>

        </>
    )
}

export default MovieInner