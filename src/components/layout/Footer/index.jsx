import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import styles from "./index.module.css";
export function Footer() {
  return (
    <footer className={styles.styleFooter}>
      <ul>
        <li>
          <Link>
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link>
            <FaTiktok />
          </Link>
        </li>
        <li>
          <Link>
            <FaWhatsapp />
          </Link>
        </li>
      </ul>
      <p>&copy; Cost 2023</p>
    </footer>
  );
}
