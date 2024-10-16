import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={3} sm={6}>
          <MovieCard
            posterUrl={movie.posterUrl}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
