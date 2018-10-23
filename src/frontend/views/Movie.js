import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieText from "./MovieText";

const CARD_WIDTH = 260;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: ${CARD_WIDTH}px;
  border-radius: 5px;
  min-height: 300px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    #1e1b26 55%
  );
`;

const Movie = ({ movie }) => {
  return (
    <Card>
      <MoviePoster poster={movie.Poster} width={CARD_WIDTH} height={370} />
      <MovieText movie={movie} />
    </Card>
  );
};

export default Movie;
