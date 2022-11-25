import { useSelector } from "react-redux";
import SearchLine from "../../searchLine/SearchLine";
import PaginationControll from "../../paginationControll/PaginationControll";
import BooksList from "../../books/BookList";

import "./search-page.css";

const SearchPage = () => {
  const resultsBooks = useSelector((store) => store.booksReducer.resultsBooks);
  return (
    <div className="search-page">
      <SearchLine />
      {resultsBooks && (
        <>
          <BooksList books={resultsBooks} />
          <PaginationControll />
        </>
      )}
    </div>
  );
};

export default SearchPage;
