import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { ROUTES } from "../../../ROUTES";
import noImage from "../../../assets/no-image.svg";

import "./book-page.css";

const BookPage = () => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const resultsBooks = useSelector((store) => store.booksReducer.resultsBooks);

  const handleBack = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  useEffect(() => {
    const currentBook = resultsBooks?.find((book) => book.id === params.id);
    if (currentBook) {
      setBook(currentBook);
    } else {
      handleBack();
    }
  }, [resultsBooks, handleBack, params.id]);
  
  if (!book) return null;
  return (
    <div className="book-page">
      <Button
        onClick={handleBack}
        variant="contained"
        endIcon={<KeyboardReturnIcon />}
      >
        Return
      </Button>
      <Typography className="book-page__title" component="div" variant="h4">
        {book.volumeInfo.title}
      </Typography>
      <img
        className="book-page__image"
        src={book.volumeInfo.imageLinks?.thumbnail || noImage}
        alt="book"
      />
      <Typography component="div" variant="subtitle2">
        Description: {book.volumeInfo.description || "No description"}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        Authors: {book.volumeInfo.authors?.join(", ") || "No authors"}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        Published Date: {book.volumeInfo.publishedDate}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        Page Count: {book.volumeInfo.pageCount}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        Categories: {book.volumeInfo.categories?.[0] || "No categories"}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        Language: {book.volumeInfo.language}
      </Typography>
    </div>
  );
};

export default BookPage;
