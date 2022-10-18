import React, { createContext, useReducer, useContext } from 'react';
import favBooksReducer from './reducer';

const favouriteBooks = [];

const initialState = {
  favouriteBooks,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(favBooksReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export const FavBooksState = () => {
  return useContext(Context);
};
export default Store;
