import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = (props: { show: boolean; toggle: Function }) => {
  return (
    <nav
      className={
        !props.show
          ? styles.mobileMenuContainer
          : styles.mobileMenuContainer + ` ${styles.mobileMenuContainerShow}`
      }
      onClick={() => props.toggle()}
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/demaquilante">Demaquilante</Link>
        </li>
        <li>
          <Link href="/sabonete">Sabonete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
