import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material'; // MUI komponentlaridan foydalanamiz
import useFetch from '../../hooks/fetch/Fetch';
import styles from "./StoryCard.module.scss"; // SCSS fayl import qilingan
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryCard = () => {
    const { data, loading, error } = useFetch('movie/popular');

    const settings = {
        dots: false, // Pastdagi nuqtalarni o'chirish
        infinite: true, // Cheksiz aylanish
        speed: 300, // O'tish tezligi
        slidesToShow: 1, // Bitta slayder ko'rsatiladi, lekin kenglik o'zgaruvchan
        variableWidth: true, // Kartalar kengligini dinamik o'rnatish
        slidesToScroll: 1, // Bir marta scroll qilinganda nechta karta suriladi
        arrows: false, // Yon tugmalarni o'chirish
        swipeToSlide: true, // Slayderni surib o'tish imkoniyati
        draggable: true, // Drag funksiyasini yoqish (mouse bilan sudrab o'tkazish)
    };

    return (
        <Box className={styles.storyCardsContainer}>
            <Slider {...settings} className={styles.storyCards}>
                {data?.results?.map((item, key) => (
                    <div>
                        <Box key={key} className={styles.storyCard}>
                            <img
                                className={styles.storyCard_img}
                                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                                alt="Bu yerda film rasmi bor"
                            />
                        </Box>
                        <div className={styles.storyCard_empty}></div>
                    </div>
                ))}
            </Slider>
        </Box>
    )
}

export default StoryCard;
