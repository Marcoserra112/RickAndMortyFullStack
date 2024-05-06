import SearchBar from "./SearchBar";
import styles from "./estilos/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nav = ({ onSearch , logout}) => {
  return (
    <div className={styles.container}>

       
      <div className={styles.linksNav}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>

      <div className={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>

      <div>
        <button className={styles.NavButton}><Link to="/favorites">Favorites</Link></button>
        <button
          className={styles.NavButton}
          onClick={() => onSearch(Math.floor(Math.random() * 826))}
        >
          {/* {"RANDOM   "} */}
          <FontAwesomeIcon icon={faShuffle} />
        </button>
        <button onClick={logout} className={styles.NavButton}> Logout </button>
      </div>
    </div>
  );
};

export default Nav;
