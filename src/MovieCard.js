import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const MovieCard = ({ movie }) => {
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
