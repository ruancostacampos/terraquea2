import styles from './HomeScroll.module.css'
import arrowIcon from '../../assets/images/arrow.svg';
import { useEffect, useState } from 'react';

const HomeScroll = () => {
    const [isAtEnd, setIsAtEnd] = useState(false)

    const handleButton = () => {
        window.location.href = getCurrentScroll() || window.location.href
    }

    useEffect(() => {
        window.onscroll = () => {

            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 1) {
                setIsAtEnd(true)
            } else {
                setIsAtEnd(false)
            }

        }
    }, [])

    const getCurrentScroll = () => {

        const section = window.scrollY / window.innerHeight

        if (section >= 0 && section < 1) {
            return "#demaquilante"
        }

        if (section >= 1 && section < 2) {
            return "#sabonete"
        }

        if (section >= 2 && section < 2.039) {
            setIsAtEnd(true)
            return "#footer"
        }

        if (section >= 2.039 && section < 4) {
            setIsAtEnd(false)
            window.scrollTo({ top: 0, behavior: "smooth" })
            return null
        }

    }

    return (
        <div className={styles.container}>
            <img
                className={isAtEnd ? styles.rotate + ' ' + styles.arrow : styles.arrow}
                id='arrow'
                onClick={handleButton}
                src={arrowIcon.src}
                width="40"
                height="40"
            />

        </div>
    )
}

export default HomeScroll