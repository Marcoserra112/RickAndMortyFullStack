import { ADD_FAV, REMOVE_FAV } from "./action-type";


const initialState = {
  myFavorites: [],
};



export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state, myFavorites: action.payload, allCharacters: action.payload 
        // ...state,
        // myFavorites: [...state.myFavorites, action.payload]
      };

    case REMOVE_FAV:
      // const filtredFavs = state.myFavorites.filter((fav) => {
      //   fav.id !== Number(action.payload);
      // });

      return {
         ...state, myFavorites: action.payload 
      };
    default: 
        return {...state} 
  }
}




