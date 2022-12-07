import AnimatedJoin from '../Animations/AnimatedJoin'
import LeftToRight from '../Animations/LeftToRight'
import ScaleX from '../Animations/ScaleX'
import branch from '../../assets/images/branch.png'

import styles from './Intro.module.css'


const Intro = () => {

    return (
        <div className={styles.homeIntroContainer}>

            <AnimatedJoin>
                <div className={styles.rotate}>
                    <img className={styles.branch} src={branch.src} alt="Galho" />
                </div>
            </AnimatedJoin>

            <div className={styles.infoContainer}>
                <div className={styles.infoProduct}>

                    <LeftToRight delay={1} duration={0.4}>
                        <h1>Terraquea</h1>
                    </LeftToRight>

                    <LeftToRight delay={1.4} duration={0.4}>
                        <h2>Nutra <br></br>teus sentidos</h2>
                    </LeftToRight>

                    <LeftToRight delay={1.8} duration={0.4}>
                        <p>Produtos que aproveitam o poder do 100% natural.</p>
                    </LeftToRight>

                    <ScaleX delay={2.2} duration={0.4}>
                        <div className={styles.divider}></div>
                    </ScaleX>

                    <div className={styles.description}>

                        <LeftToRight delay={2.6} duration={0.4}>
                            <p>Para todo tipo de pele.</p>
                        </LeftToRight>

                        <LeftToRight delay={3.0} duration={0.4} invert={true}>
                            <p>Hidrata e trata.</p>
                        </LeftToRight>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Intro