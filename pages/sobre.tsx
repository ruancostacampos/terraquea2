import styles from '../styles/Sobre.module.css'
import Collage from '../components/Collage/Collage'

import img1 from '../assets/images/natalia.png'
import img2 from '../assets/images/natalia2.jpg'
import img3 from '../assets/images/natalia3.png'
import img4 from '../assets/images/natalia4.png'

export default function Sobre(){

    const images = [img1.src, img2.src, img3.src, img4.src];

    return(
        <div className={styles.sobreContainer}>
          <Collage images={images} /> 
        </div>
    )
}