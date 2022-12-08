import styles from './Footer.module.css'
import instagramIcon from '../../assets/images/instagram.svg'
import whatsappIcon from '../../assets/images/whatsapp.svg'


const Footer = () => {



    return (
        <footer id="footer" className={styles.footerContainer + ` ${styles.nofixed}`}>

            <div className={styles.contacts}>

                <div>
                    <div className={styles.cardContainer}>
                        <img src={instagramIcon.src} alt="Instagram icon" width="30px" />
                        <a href="https://www.instagram.com/nataliaricosta/" target="_blank" rel="nofollow">@nataliaricosta</a>
                    </div>
                </div>

                <div>
                    <div className={styles.cardContainer}>
                        <img src={whatsappIcon.src} alt="Whatsapp icon" width="30px" />
                        <a href="https://wa.me/5577981032507?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20dos%20produtos%20terr%C3%A1quea." target="_blank">Enviar mensagem</a>
                    </div>
                </div>

            </div>

            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <p>Praça Monsenhor Honorato, BOX N°16, Centro / Poções - BA</p>
                </div>
            </div>



        </footer>
    )
}

export default Footer