import styles from "./HomeScroll.module.css";
import arrowIcon from "../../assets/images/arrow.svg";
import { useEffect, useState } from "react";

const HomeScroll = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleClick = () => {
    const currentScroll = window.innerHeight + window.scrollY;

    const mainScroll =
      document.getElementById("main")!.getBoundingClientRect().top +
      window.scrollY;

    const productsScroll =
      document.getElementById("products")!.getBoundingClientRect().top +
      window.scrollY;

    const footerScroll =
      document.getElementById("footer")!.getBoundingClientRect().top +
      window.scrollY;

    if (currentScroll >= mainScroll && currentScroll < footerScroll) {
      window.location.href = "#products";
      console.log("catch");
      return;
    }

    if (currentScroll >= mainScroll && currentScroll < productsScroll) {
      console.log(1);
      window.location.href = "#footer";
      return;
    }

    if (isAtEnd) {
      window.location.href = "#navbar";
      return;
    }

    window.location.href = "#footer";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={isAtEnd ? styles.rotate + " " + styles.arrow : styles.arrow}
        id="arrow"
        src={arrowIcon.src}
        onClick={handleClick}
        width="40"
        height="40"
        alt="Arrow"
      />
    </div>
  );
};

export default HomeScroll;
