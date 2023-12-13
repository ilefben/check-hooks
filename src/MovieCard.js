import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
            Rating: {movie.rating}
          </Card.Text>
          <Button variant="primary">Play</Button>
          <Button
            variant="primary"
            onClick={() => navigate("/MovieDetails", { state: { movie } })}
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
