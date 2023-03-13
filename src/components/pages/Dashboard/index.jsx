import { Link } from "react-router-dom";
import styles from "./index.module.css";
import {
  FaHome,
  FaPhone,
  FaProjectDiagram,
  FaUser,
  FaProductHunt,
} from "react-icons/fa";
import loadingImg from "../../../img/loading.svg";
import { useEffect, useState } from "react";
import { User } from "../User";
import imag from "../../../img/savings.svg";
export function Dashboard({ show, load, handleShow }) {
  const [service, setService] = useState([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((d) => d.json())
      .then((data) => setService([...data]));
    fetch("http://localhost:3000/products")
      .then((d) => d.json())
      .then((data) => setProduct([...data]));
    fetch("http://localhost:3000/users")
      .then((d) => d.json())
      .then((data) => setUser([...data]));
  }, []);
  setTimeout(() => {
    load.setloading(false);
  }, 1100);
  return (
    <div className={styles.container}>
      {load.loading ? (
        <div className={styles.divloading}>
          <img src={loadingImg}></img>
        </div>
      ) : (
        <>
          <div>
            <img src={imag} />
          </div>
          <div className={styles.dashboardItem}>
            <Link onClick={() => handleShow(1)} to="/user">
              <div>
                <h2>{user.length}</h2>
                <FaUser />
              </div>
            </Link>
            <Link onClick={() => handleShow(1)} to="/product">
              <div>
                <h2>{product.length}</h2>
                <FaProductHunt />
              </div>
            </Link>
            <Link onClick={() => handleShow(1)} to="/service">
              <div>
                <h2>{service.length}</h2>
                <FaProjectDiagram />
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
