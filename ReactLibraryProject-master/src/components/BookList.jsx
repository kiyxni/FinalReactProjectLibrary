import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Context } from '../context/Store';

import { API_URL } from '../API';
const BookList = () => {
  const [books, setBooks] = useState([]);

  //accessing state
  const [state, dispatch] = useContext(Context);

  const navigate = useNavigate();

  // add books to favourites list
  const addToFavourites = (id) => {
    //check if book iady present
    let alreadyPresent = false;
    state.favouriteBooks.forEach((book) => {
      if (book.id === id) alreadyPresent = true;
    });

    if (!alreadyPresent) {
      const favBook = books.find((book) => book.id === id);
      if (favBook) {
        const newFavourites = [...state.favouriteBooks, favBook];
        dispatch({
          type: 'ADD_BOOK_TO_FAVOURITES',
          payload: [...newFavourites],
        });
      }
    }
  };
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

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    }
    fetchBooks();
  }, []);

  return (
    <>
      {books && books.length > 0 ? (
        <div className='book-list'>
          {books.map((book) => (
            <div key={book.id} className='book'>
              <div>
                <h4>{book.title}</h4>
              </div>
              <div>
                <img
                  src={book.image_url}
                  alt='#'
                  onClick={() => navigate(`/books/${book.id}`)}
                />
              </div>
              <div>
                <button onClick={() => removeFromFavourites(book.id)}>
                  Remove from Favourites
                </button>
                <button onClick={() => addToFavourites(book.id)}>
                  Add to Favourites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>Please wait while we fetch our books....</h2>
      )}
    </>
  );
};

export default BookList;
