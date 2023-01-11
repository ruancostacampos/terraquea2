import styles from './Soap.module.css'
import Image from 'next/image'
import saboneteLiquido from '../../assets/images/saboneteliquido.jpg'
import sabonete from '../../assets/images/sabonete.jpg'
import demaquilante from '../../assets/images/demaquilante.jpg'
import React, { useEffect, useRef, useState } from 'react'
import ProductShower from '../ProductShower/ProductShower'


const Soap = () => {

    const firstContentRef = useRef<HTMLDivElement>(null)
    const secondContentRef = useRef<HTMLDivElement>(null)
    const thirdContentRef = useRef<HTMLDivElement>(null)
    const [currentShowing, setCurrentShowing] = useState(-1)

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        
        const element: HTMLImageElement = e.currentTarget


        if(currentShowing < 0){

            document.getElementById("products")?.scrollIntoView();
            window.onscroll = () => {}

            if(element.id === "firstImage"){
                setCurrentShowing(1)
                element.classList.add(`${styles.firstImageOpen}`)
                element.parentElement?.classList.add(`${styles.wrapper}`)
                return
            }

            if(element.id === "secondImage"){
                setCurrentShowing(2)
                element.classList.add(`${styles.secondImageOpen}`)
                element.parentElement?.classList.add(`${styles.secondImageContainerOpen}`)
                return
            }

            if(element.id === "thirdImage"){
                setCurrentShowing(3)
                element.classList.add(`${styles.thirdImageOpen}`)
                element.parentElement?.classList.add(`${styles.thirdImageContainerOpen}`)
                return
            }
        }

        //If the first image is open
        if(currentShowing > 0){


            if(currentShowing === 1 ){
               firstContentRef.current?.classList.remove(`${styles.show1}`)
               element.classList.remove(`${styles.firstImageOpen}`)
               element.parentElement?.classList.remove(`${styles.wrapper}`)
            }

            if(currentShowing === 2){
                firstContentRef.current?.classList.remove(`${styles.show2}`)
                element.classList.remove(`${styles.secondImageOpen}`)
                element.parentElement?.classList.remove(`${styles.secondImageContainerOpen}`)
            }

            if(currentShowing === 3){
                thirdContentRef.current?.classList.remove(`${styles.show3}`)
                element.classList.remove(`${styles.thirdImageOpen}`)
                element.parentElement?.classList.remove(`${styles.thirdImageContainerOpen}`)
            }

            setCurrentShowing(-1)
            return
        }
    }

    useEffect( () => {
        // Setting ref 
        firstContentRef.current?.classList.add(`${styles.show1}`)
        secondContentRef.current?.classList.add(`${styles.show2}`)
        thirdContentRef.current?.classList.add(`${styles.show3}`)
    })

    return (
        <div 
            id="products" 
            className={styles.container}>

            <div className={`${styles.image} ${styles.firstImage}`}>
                <Image
                    id="firstImage"
                    className={`${styles.image} ${styles.firstImage}`}
                    src={saboneteLiquido}
                    alt="Produtos naturais em cima de uma cesta"
                    onClick={(e => { handleClick(e) })}
                    style={{ width: "calc(37.33vw + 1px)", position: "relative" }}
                />

                {(currentShowing === 1) &&
                    <div 
                        className={styles.productInfoContainer}
                        ref={firstContentRef}
                    >
                        <ProductShower />
                    </div>
                }


            </div>

            <div className="secondImageContainer">
                <Image
                    id="secondImage"
                    className={`${styles.image} + ${styles.secondImage}`}
                    src={sabonete}
                    alt="Produtos naturais em cima de uma cesta"
                    quality={100}
                    onClick={(e => { handleClick(e) })}
                    style={{ top: 0, left: "calc(33.33vw - (6.6667% + 1px) )", width: "calc(33.33vw + 6.6667%)", position: "absolute" }}
                />
                {(currentShowing === 2) &&
                    <div 
                        className={styles.productInfoContainer}
                        ref={secondContentRef}
                    >
                        <h2>Sabonete Líquido</h2>
                        <div className="divider"></div>
                    </div>
                }
            </div>

            <div className="thirdImageContainer">
                <Image
                    id="thirdImage"
                    className={`${styles.image} + ${styles.thirdImage}`}
                    src={demaquilante}
                    alt="Produtos naturais em cima de uma cesta"
                    quality={50}
                    onClick={(e => { handleClick(e) })}
                    style={{ top: 0, left: "calc(66.66vw - 0.1% )", width: "calc(33vw + 9%)", position: "absolute" }}
                />
                {(currentShowing === 3) &&
                    <div 
                        className={styles.productInfoContainer}
                        ref={thirdContentRef}
                    >
                        <h2>Sabonete Líquido</h2>
                        <div className="divider"></div>
                    </div>
                }
            </div>

        </div>
    )
}

export default Soap