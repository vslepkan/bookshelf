import React from "react";
import Card from "../../components/Card/Card";
import { useBooks } from "../../context/BooksContext";

function ReadingList() {
  const { readingList } = useBooks();

  return (
    <div>
      <h2>Reading list page</h2>

      {readingList.map((book) => (
        <Card key={book.isbn} book={book} />
      ))}
    </div>
  );
}

export default ReadingList;
