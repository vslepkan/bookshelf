import React, { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext([{}, (s) => {}]);

function BooksProvider({ children }) {
  const initialReadingList =
    JSON.parse(localStorage.getItem("readingList")) || [];
  const [state, setState] = useState({
    books: [],
    readingList: initialReadingList,
  });

  useEffect(() => {
    // grab default values

    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setState((antyState) => ({
          ...antyState,
          books: data.books,
        }));
      });
  }, []);

  return (
    <BooksContext.Provider value={[state, setState]}>
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const [state, setState] = useContext(BooksContext);

  function addBookToReadingList(book) {
    setState((state) => {
      const result = {
        ...state,
        readingList: [...state.readingList, book],
      };

      localStorage.setItem("readingList", JSON.stringify(result.readingList));

      return result;
    });
  }

  return {
    books: state.books,
    readingList: state.readingList,
    addBookToReadingList,
  };
}

export { BooksProvider, useBooks };
