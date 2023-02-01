import { useState } from "react";
import Image from "next/image";
import styles from "./ProductImageViewer.module.css";

interface NextImage {
  src: string;
}

interface Props {
  images: NextImage[];
}

const ProductImageViewer = (props: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.imageShower}>
      <img
        className={styles.currentShowing}
        src={props.images[imageIndex].src}
        alt="A camera"
      />
      <div className={styles.miniatureContainer}>
        {props.images.map((item: NextImage, index) => (
          <Image
            key={index}
            className={styles.miniature}
            src={item.src}
            onClick={() => setImageIndex(index)}
            width={500}
            height={500}
            alt="Some of product images"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageViewer;
