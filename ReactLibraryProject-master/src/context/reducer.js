const favBooksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK_TO_FAVOURITES':
      return {
        ...state,
        favouriteBooks: action.payload,
      };
    case 'REMOVE_BOOK_TO_FAVOURITES':
      return {
        ...state,
        favouriteBooks: action.payload,
      };
    default:
      return state;
  }
};

export default favBooksReducer;
