import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useBooks } from "../../context/BooksContext";

function Discover() {
  const { books, addBookToReadingList } = useBooks();

  const handleClick = (book) => {
    addBookToReadingList(book);
  };

  return (
    <div>
      <h1>Discover page</h1>
      <div className="flex flex-col">
        {books.map((book) => (
          <Card key={book.isbn} book={book} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
