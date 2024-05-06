import Card from "./Card";
import { connect } from "react-redux";
import Cards from "./Cards";
const Favorites = ({ myFavorites }) => {
  return (
    <>
      <Cards characters={myFavorites}   />
      {console.log("myFavorites: " + myFavorites)}
    </>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
