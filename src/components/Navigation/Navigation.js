import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          Bookshelf
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/reading-list"
            className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4"
          >
            Reading list
          </Link>
          <Link
            to="/finished-books"
            className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4"
          >
            Finished books
          </Link>
          <Link
            to="/discover"
            className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white"
          >
            Discover
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
