import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { Container } from "./../Container";
import logo from "../../../img/costs_logo.png";
import {
  FaHome,
  FaPhone,
  FaProjectDiagram,
  FaUser,
  FaProductHunt,
} from "react-icons/fa";
export function Navbar({ handleShow }) {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link onClick={() => handleShow(1)} to="/">
          <img src={logo} alt="cost" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FaHome />
            <Link onClick={() => handleShow(1)} to="/">
              Dashboard
            </Link>
          </li>
          <li className={styles.item}>
            <FaUser />
            <Link onClick={() => handleShow(1)} to="/user">
              User
            </Link>
          </li>
          <li className={styles.item}>
            <FaProductHunt />
            <Link onClick={() => handleShow(1)} to="/product">
              Product
            </Link>
          </li>
          <li className={styles.item}>
            <FaProjectDiagram />
            <Link onClick={() => handleShow(1)} to="/service">
              Service
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
