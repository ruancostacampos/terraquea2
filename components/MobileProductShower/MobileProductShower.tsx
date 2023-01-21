import styles from "./MobileProductShower.module.css";
import testImage from "../../assets/images/demaquilante2.jpg";
import Image from "next/image";

const MobileProductShower = () => {
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
        />
      </div>
      <div className={styles.card}>
        <Image
          className={styles.image}
          src={testImage.src}
          width={600}
          height={600}
          alt="Demaquilante"
        />
      </div>
      <div className={styles.card}>
        <Image
          className={styles.image}
          src={testImage.src}
          width={600}
          height={600}
          alt="Demaquilante"
        />
      </div>
    </div>
  );
};

export default MobileProductShower;
