import styles from "./Product.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  goTo: string;
  description: string;
  image: string;
  video: string;
  align?: string;
};

const Product = ({ title, goTo, description, image, video, align }: Props) => {
  const Info = () => {
    return (
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.productImage}
            src={image}
            alt="Demaquilante"
            width="600"
            height="600"
          />
        </div>

        <div className={styles.infoContainerProduct}>
          <span>Nós produzimos</span>
          <h2>{title}</h2>
          <div className={styles.divider}></div>
          <p>{description}</p>
          <Link href={goTo}>
            <button>Detalhes</button>
          </Link>
        </div>
      </div>
    );
  };

  const Video = () => {
    return (
      <div>
        <div className={styles.videoContainer}>
          <video
            className={align === "left" ? styles.videoR : styles.videoL}
            muted
            autoPlay
            loop
          >
            <source src={video} type="video/webm" />
          </video>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {align === "left" ? (
        <>
          <Video />
          <Info />
        </>
      ) : (
        <>
          <Info />
          <Video />
        </>
      )}
    </div>
  );
};

export default Product;
