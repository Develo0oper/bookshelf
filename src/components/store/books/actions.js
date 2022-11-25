

export const SET_ALL_BOOKS = "SET_ALL_BOOKS";
export const LOAD_ALL_BOOKS = "LOAD_ALL_BOOKS";
export const SHOW_RESULTS = "SHOW_RESULTS";
export const SET_START_INDEX = "SET_START_INDEX";
export const SET_SEARCH_LINE = "SET_SEARCH_LINE";
export const SET_PAGE = "SET_PAGE";
export const SET_REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS";

export const setBooks = (payload) => ({ type: SET_ALL_BOOKS, payload});
export const showResults = () => ({ type: SHOW_RESULTS});
export const setStartIndex = (payload) => ({ type: SET_START_INDEX, payload});
export const setSearchLine = (payload) => ({ type: SET_SEARCH_LINE, payload});
export const setPage = (payload) => ({ type: SET_PAGE, payload});
export const setRequestInProgress = (payload) => ({ type: SET_REQUEST_IN_PROGRESS, payload});
//for saga
export const loadAllBooks = (payload) => ({ type: LOAD_ALL_BOOKS, payload});
