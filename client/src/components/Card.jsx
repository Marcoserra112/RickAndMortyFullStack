import styles from "../components/estilos/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    
    myFavorites.forEach((fav) => {
      if(fav.id === id) {
        setIsFav(true)
      }
    });

  }, [myFavorites]);

  const halndleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image });
    setIsFav(!isFav);
  };

  return (
    <div className={styles.containerCard}>
      {isFav ? (
        <button className={styles.buttonX} onClick={halndleFavorite}> ❤️ </button>
      ) : (
        <button className={styles.buttonX} onClick={halndleFavorite}> 🤍 </button>
      )}

      <div className={styles.info}>
        <button onClick={() => onClose(id)} className={styles.buttonX}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img src={image} alt="" />
        <div className={styles.infoH2}>
          <h2>{id}</h2>
          <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
          </Link>
        </div>

        {/* <h2>{"Status: " +status}</h2>
        <h2>{"Species: " +species}</h2>
        <h2>{"Gender: " +gender}</h2>
        <h2>{"Origin: " + origin}</h2> */}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
