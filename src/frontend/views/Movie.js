import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieText from "./MovieText";
import MovieTrailer from "./MovieLink";

const CARD_WIDTH = 350;
const ratio = 1688 / 2500; // --> width / height  = ratio

const Card = styled.div`
  &:hover {
   transform: scale(1.02);
  }
  transform-style: preserve-3d;
  transition: 0.4s ease-in-out;
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
      <a
        href={`http://127.0.0.1:8887/${movie.path}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MoviePoster
          poster={movie.Poster}
          width={CARD_WIDTH}
          height={CARD_WIDTH / ratio}
        />
      </a>
      <MovieText movie={movie} />
    </Card>
  );
};

export default Movie;
