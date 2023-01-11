import styles from './HomeScroll.module.css'
import arrowIcon from '../../assets/images/arrow.svg';
import { useEffect, useLayoutEffect, useState } from 'react';

const HomeScroll = () => {
    
    const [isAtEnd, setIsAtEnd] = useState(false)

    const handleClick = () => {

        let currentScroll = window.innerHeight + window.scrollY

        let demaquilanteScroll = document.getElementById('demaquilante')!
        .getBoundingClientRect().top + window.scrollY

        let saboneteScroll = document.getElementById('sabonete')!
        .getBoundingClientRect().top + window.scrollY

        let footerScroll = document.getElementById('footer')!
        .getBoundingClientRect().top + window.scrollY

        if(currentScroll < demaquilanteScroll || currentScroll < saboneteScroll){
            window.location.href = "#products"
            return
        }

        if(currentScroll < saboneteScroll || currentScroll < footerScroll){
            window.location.href = "#sabonete"
            return
        }

        if(isAtEnd){
            window.location.href="#navbar"
            return
        }

        window.location.href="#footer"
        return
    
    }

    useEffect( () => {
       
        window.onscroll = () => {
    
            if( (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 1){
              setIsAtEnd(true)
            }else{
              setIsAtEnd(false)
            }
        
        }

    }, [])

 
    const getSection = (id: string) => {
        
        let element = document.getElementById(id)?.getBoundingClientRect()
        
        if(element){
            return element.top + window.scrollY
        }

    }

    return (
        <div className={styles.container}>
            <img
                className={isAtEnd ? styles.rotate + ' ' + styles.arrow : styles.arrow}
                id='arrow'
                src={arrowIcon.src}
                onClick={handleClick}
                width="40"
                height="40"
            />

        </div>
    )
}

export default HomeScroll