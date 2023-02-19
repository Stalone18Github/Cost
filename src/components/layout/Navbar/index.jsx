import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { Container } from "./../Container";
import logo from "../../../img/costs_logo.png";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="cost" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject">Novo projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
