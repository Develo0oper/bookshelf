import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { debounce } from "../../utils/debounce";
import {
  loadAllBooks,
  showResults,
  setSearchLine,
  setPage,
} from "../store/books/actions";

import "./search-line.css";

const SearchLine = () => {
  const [options, setOptions] = useState([]);
  const inputValue = useSelector((store) => store.booksReducer.search);
  const requestInProgress = useSelector(
    (store) => store.booksReducer.requestInProgress
  );
  const [searchValue, setSearchValue] = useState(inputValue);

  const books = useSelector((store) => store.booksReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    setOptions(books);
  }, [books]);

  const debounceRequest = useCallback(
    debounce((inputValue) => {
      if (!inputValue) return;
      dispatch(loadAllBooks({ search: inputValue, startIndex: 0 }));
    }, 500),
    [dispatch]
  );

  const onInputChange = useCallback(
    (event) => {
      setSearchValue(event.target.value);
      debounceRequest(event.target.value);
    },
    [debounceRequest]
  );

  const onAutoCompleteChange = useCallback(
    (event, newValue) => {
      dispatch(setPage(1));
      dispatch(setSearchLine(newValue));
      dispatch(
        loadAllBooks({ search: newValue, startIndex: 0, showResult: true })
      );
    },
    [dispatch]
  );

  const onSearchClick = useCallback(() => {
    dispatch(setPage(1));
    if (searchValue) {
      dispatch(setSearchLine(searchValue));
      dispatch(showResults());
    }
  }, [searchValue, dispatch]);

  return (
    <div className="search-line">
      <Autocomplete
        className="search-line__autocomplete"
        freeSolo
        disableClearable
        value={searchValue}
        onChange={onAutoCompleteChange}
        options={options.map((option) => option.volumeInfo?.title || "")}
        renderOption={(props, option) => (
          <li {...props} key={props.id}>
            {option}
          </li>
        )}
        label="Search"
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchValue}
            onChange={onInputChange}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Button
        disabled={requestInProgress}
        className="search-line__button"
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={onSearchClick}
      >
        {requestInProgress ? (
          <CircularProgress color="inherit" size={20} />
        ) : (
          "Find"
        )}
      </Button>
    </div>
  );
};

export default SearchLine;
