import React from "react";
import styled from "styled-components";
import MovieMetaData from "./MovieMetaData";
import MovieSummary from "./MovieSummary";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 20px 20px;
`;

const MovieTitle = styled.h4`
  margin-top: 8px;
  margin-bottom: 2px;
  word-break: break-word;
  font-size: 22px;
  font-weight: 400;
`;

const MovieText = ({ movie }) => {
  return (
    <Container>
      {" "}
      <MovieTitle>{movie.Title}</MovieTitle>
      <MovieMetaData movie={movie} />
      <MovieSummary movie={movie} />
    </Container>
  );
};

export default MovieText;