import React, { useContext } from 'react';
import '../App';
import { useAppContext } from '../context/appContext';
import { Context } from '../context/Store';
const Favourites = () => {
  //accessing state
  const [state, dispatch] = useContext(Context);

  // const favouritesChecker = (id) => {
  //   const boolean = favourites.some((book) => book.id === id);
  //   return boolean;
  // };
  // remove books from favourites list
  const removeFromFavourites = (id) => {
    console.log('book removed');
    if (state.favouriteBooks) {
      const filteredFavourites = state.favouriteBooks.filter(
        (book) => book.id !== id
      );
      if (filteredFavourites) {
        dispatch({
          type: 'REMOVE_BOOK_TO_FAVOURITES',
          payload: [...filteredFavourites],
        });
      }
    }
  };

  return (
    <div className='favourites'>
      {state.favouriteBooks.length > 0 ? (
        state.favouriteBooks.map((book) => (
          <div key={book.id} className='book'>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt='#' />
            </div>
            <div>
              <button onClick={() => removeFromFavourites(book.id)}>
                Remove from Favourites
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any favourite books yet!</h1>
      )}
    </div>
  );
};
export default Favourites;
