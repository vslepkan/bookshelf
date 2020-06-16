import React, { createContext, useContext, useEffect, useState } from "react";
import books from "../db/books.json";

const BooksContext = createContext([{}, (s) => {}]);

function BooksProvider({ children }) {
  const [state, setState] = useState(books);

  useEffect(() => {
    // grab default values
  }, []);

  return (
    <BooksContext.Provider value={[state, setState]}>
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const [state, setState] = useContext(BooksContext);

  return state;
}

export { BooksProvider, useBooks };
