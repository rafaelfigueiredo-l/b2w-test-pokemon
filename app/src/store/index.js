import { createStore } from "redux";

const INITIAL_STATE = {
  theme: {},
  errorApp: "false",
  errorAppMessage: "",
  pokemonLoading: "true",
  pokemonByType: [],
};
function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "SET_POKEMON_DATA_BY_TYPE":
      return {
        ...state,
        pokemonByType: action.payload,
      };
    case "SET_POKEMON_LOADING":
      return {
        ...state,
        pokemonLoading: action.payload,
      };
    case "SET_ERROR_APP":
      return {
        ...state,
        errorApp: action.payload,
      };
    case "SET_ERROR_APP_MESSAGE":
      return {
        ...state,
        errorAppMessage: action.payload,
      };

    default:
      return state;
  }
}

const store = createStore(
  course,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
