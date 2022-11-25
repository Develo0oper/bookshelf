import {
  SET_ALL_BOOKS,
  SET_START_INDEX,
  SHOW_RESULTS,
  SET_SEARCH_LINE,
  SET_PAGE,
  SET_REQUEST_IN_PROGRESS
} from "./actions.js";

const initialState = {
  books: [],
  resultsBooks: null,

  page: 1,
  startIndex: 0,
  allBooksCount: 0,
  resultsBooksCount: 0,
  search: "",

  requestInProgress: false,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOOKS: {
      return {
        ...state,
        books: action.payload.items || [],
        allBooksCount: action.payload.totalItems,
      };
    }
    case SHOW_RESULTS: {
      return {
        ...state,
        resultsBooks: state.books,
        resultsBooksCount: state.allBooksCount,
      };
    }
    case SET_START_INDEX: {
      return {
        ...state,
        startIndex: action.payload,
      };
    }
    case SET_SEARCH_LINE: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case SET_REQUEST_IN_PROGRESS: {
      return {
        ...state,
        requestInProgress: action.payload,
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
