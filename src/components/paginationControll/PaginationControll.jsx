import Pagination from "@mui/material/Pagination";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBooks, setPage } from "../store/books/actions";

export const PAGE_SIZE = 10;

const PaginationControll = () => {
  const dispatch = useDispatch();
  const resultsBooksCount = useSelector(
    (store) => store.booksReducer.resultsBooksCount
  );
  const page = useSelector((store) => store.booksReducer.page);
  const search = useSelector((store) => store.booksReducer.search);

  const handleChange = useCallback(
    (event, value) => {
      if (value === page) return;

      const startIndex = value === 1 ? 0 : PAGE_SIZE * (value - 1);
      dispatch(setPage(value));
      dispatch(
        loadAllBooks({
          startIndex,
          search,
          showResult: true,
        })
      );
      window.scrollTo(0, 0);
    },
    [search, page, dispatch]
  );

  return (
    <Pagination
      className="pagination"
      hidePrevButton
      hideNextButton
      variant="outlined"
      shape="rounded"
      count={Math.ceil(resultsBooksCount / PAGE_SIZE)}
      page={page}
      onChange={handleChange}
    />
  );
};
export default PaginationControll;
