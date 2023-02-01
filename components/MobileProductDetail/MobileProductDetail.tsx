import styles from "./MobileProductDetail.module.css";
import ScaleY from "../Animations/ScaleY";
import data from "../../assets/data/products.json";
import ProductImageViewer from "../ProductImageViewer/ProductImageViewer";
import { MouseEventHandler, useEffect } from "react";

interface NextImage {
  src: string;
}

interface Props {
  index: number;
  images: NextImage[];
  backFunction: MouseEventHandler<HTMLElement>;
}

interface Product {
  name: string;
  price: string;
  description: string;
}

const MobileProductDetail = (props: Props) => {
  const products: Product[] = data.products;

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("mobileProductShower")?.scrollIntoView();
    }, 100);
  }, []);

  return (
    <ScaleY minHeight="none">
      <div className={styles.detalhesContainer} id="mobileProductShower">
        <div className={styles.detalhesSubContainer}>
          <span className={styles.stock}>Em estoque</span>
          <h2>{products[props.index].name}</h2>
          <p className={styles.price}>R$29,90</p>
          <div className={styles.divider}></div>

          <div className={styles.detailsInfoText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia laoreet mattis. Vivamus sodales quam sed sagittis tempor.
              Donec vulputate ipsum at sodales euismod. Vestibulum eleifend
              interdum sollicitudin. Integer consequat nisl et tincidunt
              consequat. Phasellus euismod, arcu tincidunt ullamcorper
              consequat, urna quam finibus enim, ut vehicula arcu dui eget eros.
              Duis interdum mollis mauris, vitae varius est feugiat et. Mauris
              vitae aliquet diam, ut gravida quam. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Praesent ac mauris molestie,
              venenatis leo non, tincidunt lorem.
            </p>
          </div>

          <div className={styles.divider}></div>
          <div className={styles.centralizeButton}>
            <a
              href="https://api.whatsapp.com/send?phone=5577981032507&text=Ol%C3%A1%2C%20gostei%20do%20sabonete%20que%20vi%20no%20seu%20site%2C%20eu%20quero!"
              target="_blank"
              rel="noreferrer"
            >
              <button>Eu quero!</button>
            </a>
            <button className={styles.backButton} onClick={props.backFunction}>
              Voltar
            </button>
          </div>
        </div>

        <ProductImageViewer images={props.images} />
      </div>
    </ScaleY>
  );
};

export default MobileProductDetail;
