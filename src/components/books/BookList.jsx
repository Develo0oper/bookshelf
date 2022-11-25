import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../ROUTES";
import noImage from "../../assets/no-image.svg";

import "./book-list.css";
import { useCallback } from "react";

const BooksList = ({ books }) => {
  const navigate = useNavigate();
  const handleBookClick = useCallback(
    (id) => () => {
      navigate(`${ROUTES.BOOK}/${id}`);
    },
    [navigate]
  );
  return (
    <div className="books-list">
      {books.length === 0 ? (
        <Typography component="div" variant="h7">
          No results
        </Typography>
      ) : (
        books.map((book) => (
          <Card
            key={book.id}
            className="books-list__card"
            onClick={handleBookClick(book.id)}
          >
            <Box>
              <CardContent>
                <Typography component="div" variant="h7">
                  {book.volumeInfo.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  by {book.volumeInfo.authors?.[0]}
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              className="books-list__card-media"
              component="img"
              image={
                book.volumeInfo.imageLinks?.smallThumbnail ||
                book.volumeInfo.imageLinks?.thumbnail ||
                noImage
              }
              alt="Live from space album cover"
            />
          </Card>
        ))
      )}
    </div>
  );
};

export default BooksList;
