import { useState, MouseEventHandler } from "react";
import styles from "./MobileProductShower.module.css";
import testImage from "../../assets/images/demaquilante2.jpg";
import Image from "next/image";
import MobileProductDetail from "../MobileProductDetail/MobileProductDetail";
import img1 from "../../assets/images/natalia.png";
import img2 from "../../assets/images/natalia2.jpg";
import img3 from "../../assets/images/natalia3.png";

interface NextImage {
  src: string;
}

const images: NextImage[][] = [
  [img1, img2, img3],
  [img1, img2, img3],
  [img1, img2, img3],
];

const MobileProductShower = () => {
  const [openProduct, setOpenProduct] = useState(0);

  const backFunction: MouseEventHandler<HTMLElement> = () => {
    setOpenProduct(0);
  };

  if (openProduct < 1)
    return (
      <div className={styles.container}>
        <h1 className={styles.text}>Veja mais detalhes de nossos produtos</h1>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={testImage.src}
            width={600}
            height={600}
            alt="Demaquilante"
            onClick={(e) => {
              setOpenProduct(1);
            }}
          />
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={testImage.src}
            width={600}
            height={600}
            alt="Demaquilante"
            onClick={(e) => {
              setOpenProduct(2);
            }}
          />
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={testImage.src}
            width={600}
            height={600}
            alt="Demaquilante"
            onClick={(e) => {
              setOpenProduct(3);
            }}
          />
        </div>
      </div>
    );

  if (openProduct > 0) {
    return (
      <MobileProductDetail
        index={openProduct - 1}
        images={images[openProduct - 1]}
        backFunction={backFunction}
      />
    );
  }

  return null;
};

export default MobileProductShower;
