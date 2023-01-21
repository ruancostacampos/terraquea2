import { FC, useState } from "react";
import styles from "./ProductShower.module.css";
import Image from "next/image";
import shopeeIcon from "../../assets/images/shopee.svg";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
  name: string;
  description: string;
  price: string;
  link: string;
}

const ProductShower: FC<Props> = ({
  images,
  name,
  description,
  price,
  link,
}) => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.showerContainer}>
        <Image
          className={styles.currentImage}
          src={images[showIndex].src}
          alt={images[showIndex].alt}
          width={1000}
          height={1000}
          quality={100}
        />
        <div className={styles.miniatureContainer}>
          {images.map((image, index) => (
            <div className={styles.miniature} key={index}>
              <Image
                className={styles.miniatureImage}
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                onClick={() => setShowIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.inStock}>Em estoque</span>
        <h2 className={styles.productName}>{name}</h2>
        <span className={styles.price}>R$ {price}</span>
        <p className={styles.productDescription}>{description}</p>
        <a
          className={styles.buyButton}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Comprar
          <Image src={shopeeIcon} alt="Shopee Icon" width={100} height={100} />
        </a>
      </div>
    </div>
  );
};

export default ProductShower;
