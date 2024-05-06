import { ADD_FAV, REMOVE_FAV } from "./action-type";
import axios from "axios";

// const addFav = (character)=> {
//     return{
//         type: ADD_FAV,
//         payload:character
//     }
// }

// const removeFav = (id)=> {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }
 const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
};

const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
};


export { addFav, removeFav}