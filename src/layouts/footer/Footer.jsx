import React from 'react'
import styles from "./Footer.module.scss"
import MainIcon from "../../assets/images/logo-unscreen.gif"
import HitIcon from "../../assets/images/hit.gif"
import OnoltiplusIcon from "../../assets/images/16_plus.png"

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={`${styles.footer_box} container`}>
                    <img className={styles.header_mainIcon} src={MainIcon} alt="UzMovi.com icon" />
                    <div className={styles.footer_btns}>
                        <button className={styles.footer_btn}>Reklama</button>
                        <button className={styles.footer_btn}>DMCA</button>
                        <button className={styles.footer_btn}>Sayt qoidalari</button>
                        <button className={styles.footer_btn}>Qayta aloqa</button>
                        <button className={styles.footer_btn}>Yosh toifasi</button>
                    </div>
                    <div className={styles.footer_icons}>
                        <img className={styles.footer_icon} src={OnoltiplusIcon} alt="16+ icon" />
                        <img className={styles.footer_icon} src={HitIcon} alt="strelka icon" />
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={`${styles.footer_bottom_box} container`}>
                    <p>© UZMOVi.com — 2019 - 2024</p>
                    <p>Права на фильмы принадлежат их авторам. Все фильмы представлены только для ознакомления.</p>
                    <p>Администрация не несет ответственности за размещенные пользователями нелегальные материалы!
                        Любой фильм будет удален по требованию правообладателя</p>
                </div>
            </div>

        </>
    )
}

export default Footer