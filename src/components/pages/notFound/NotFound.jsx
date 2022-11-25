import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ROUTES } from "../../../ROUTES";

import "./not-found.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  return (
    <div className="not-found">
      <Button onClick={handleBack} variant="contained">Home</Button>
      <Typography component="div" variant="h1">
        404 Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
