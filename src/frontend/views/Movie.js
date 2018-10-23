import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";

const Card = styled.div`
  display: flex;
  margin: 20px;
`;
const Movie = ({ movie }) => {
  return (
    <Card>
      <MoviePoster poster={movie.Poster} width={200} height={300} />
    </Card>
  );
};

export default Movie;
