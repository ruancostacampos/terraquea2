import styles from "./ImageShower.module.css";
import NextImage from "next/image";
import { useState } from "react";

interface Props {
  images: Array<string>;
}

const ImageShower = (props: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.imageShower}>
      <NextImage
        className={styles.currentShowing}
        src={props.images[imageIndex]}
        alt="A camera"
        width={500}
        height={500}
      />
      <div className={styles.miniatureContainer}>
        {props.images.map((item, index) => (
          <img
            key={index}
            className={styles.miniature}
            src={item}
            onClick={() => setImageIndex(index)}
            alt="Testing image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageShower;
