import Link from "next/link";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <header id="navbar" className={styles.container}>
        <div
          className={styles.mobileMenu}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span />
          <span className={styles.menuLineReduced} />
          <span />
          <span className={styles.menuLineReduced} />
        </div>

        <div className={styles.logo}>
          <p>Terraquea</p>
        </div>

        <nav className={styles.containerLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className={styles.menu}>
              <Link href="/products/demaquilante">Produtos</Link>
              <div className={styles.subMenu}>
                <Link href="/products/demaquilante">demaquilante</Link>
                <Link href="/products/sabonete">sabonete</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <Sidebar show={showSidebar} toggle={toggleMenu} />
    </>
  );
};

export default Navbar;
