import React from "react";

function Card({ book, onClick }) {
  return (
    <section
      key={book.isbn}
      className="border border-green-400 w-full mb-4 p-4"
    >
      <h2 className="font-bold">{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p className="mb-2">{book.author}</p>
      <button
        type="button"
        className="p-2 bg-purple-200 rounded-md"
        onClick={() => onClick(book)}
      >
        Add to reading list
      </button>
    </section>
  );
}

export default Card;
