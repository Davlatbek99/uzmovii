import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.scss"
import MainIcon from "../../assets/images/logo-unscreen.gif"
import PersonIcon from '@mui/icons-material/Person';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StoryCard from '../../components/storys/StoryCard';
import { Modal } from '@mui/material';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = window.location.pathname

    const [placeholder, setPlaceholder] = useState('Qidirish...');
    const [isClicked, setIsClicked] = useState(true);
    const handleDivClick = () => {
        setPlaceholder('');
        setIsClicked(false);
    };
    const handleBlur = () => {
        setPlaceholder('Qidirish...');
        setIsClicked(true);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_top}>
                    <div className={`${styles.header_top_box} container`}>
                        <img onClick={() => { navigate("/bosh_sahifa"); setIsMenuOpen(false); }} className={styles.header_mainIcon} src={MainIcon} alt="UzMovi.com icon" />
                        <div className={styles.header_links}>
                            <div onClick={() => { navigate("/bosh_sahifa"); setIsMenuOpen(false); }}
                                className={pathname == "/bosh_sahifa" ? `${styles.header_link_one} ${styles.header_link_boshsahifa} ${styles.active}` : `${styles.header_link_one} ${styles.header_link_boshsahifa}`}>BOSH SAHIFA
                            </div>
                            <div onClick={() => { navigate("/kinolar"); setIsMenuOpen(false); }}
                                className={pathname == "/kinolar" ? `${styles.header_link_one} ${styles.header_link_kinolar} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_kinolar}`}>KINOLAR
                                <span className={styles.caret}></span>
                            </div>
                            <div onClick={() => { navigate("/seriallar"); setIsMenuOpen(false); }}
                                className={pathname == "/seriallar" ? `${styles.header_link_one} ${styles.header_link_seriallar} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_seriallar}`}>SERIALLAR
                            </div>
                            <div onClick={() => { navigate("/janr"); setIsMenuOpen(false); }}
                                className={pathname == "/janr" ? `${styles.header_link_one} ${styles.header_link_janr} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_janr}`}>JANR
                                <span className={styles.caret}></span>
                            </div>
                            <div onClick={() => { navigate("/yil"); setIsMenuOpen(false); }}
                                className={pathname == "/yil" ? `${styles.header_link_one} ${styles.header_link_yil} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_yil}`}>YIL
                                <span className={styles.caret}></span>
                            </div>
                            <div onClick={() => { navigate("/mamlakat"); setIsMenuOpen(false); }}
                                className={pathname == "/mamlakat" ? `${styles.header_link_one}  ${styles.header_link_mamlakat} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_mamlakat}`}>MAMLAKAT
                                <span className={styles.caret}></span>
                            </div>
                            <div onClick={() => { navigate("/kino_yangiliklar"); setIsMenuOpen(false); }}
                                className={pathname == "/kino_yangiliklar" ? `${styles.header_link_one}  ${styles.header_link_kinoyangiliklari} ${styles.active}` : `${styles.header_link_one}  ${styles.header_link_kinoyangiliklari}`}>KINO YANGILIKLARI
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.header_story}>
                    <div className={`${styles.header_story_box} container`}>
                        <StoryCard />
                    </div>
                </div>
                <div className={styles.header_bottom}>
                    <div className={`${styles.header_bottom_box} container`}>
                        <div className={styles.header_bottom_btns}>
                            <div className={styles.header_bottom_left}>
                                <button className={styles.header_bottom_btn}>
                                    <span className={styles.contact}>
                                        <PersonIcon /></span>Kirish</button>
                                <button className={styles.header_bottom_btn}>Ro'yxatdan o'tish</button>
                            </div>
                            <div className={styles.header_bottom_right}>
                                <button className={styles.header_bottom_btn}><TheatersOutlinedIcon /></button>
                                <button className={styles.header_bottom_btn}><EmailOutlinedIcon /></button>
                                <button className={styles.header_bottom_btn}><ErrorOutlinedIcon /></button>
                            </div>
                        </div>
                        <div onClick={handleDivClick} className={isClicked ? `${styles.header_bottom_search}` : `${styles.header_bottom_search} ${styles.hover_effect}`}>
                            <input className={styles.header_bottom_search_in}
                                type="text"
                                placeholder={placeholder}
                                style={{ width: '100%' }}
                                onBlur={handleBlur}
                                onFocus={() => setPlaceholder('')}
                            />
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header