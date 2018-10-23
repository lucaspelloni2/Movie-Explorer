import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
`;

const MovieTitle = styled.h4`
  margin-top: 8px;
  margin-bottom: 2px;
  word-break: break-word;
`;

const MovieYear = styled.h4`
  color: gray;
  font-size: 12px;
  margin-top: 0;
`;
const Movie = ({ movie }) => {
  return (
    <Card>
      <MoviePoster poster={movie.Poster} width={200} height={300} />
      <MovieTitle>{movie.Title}</MovieTitle>
      <MovieYear>{movie.Year}</MovieYear>
    </Card>
  );
};

export default Movie;
