import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MovieTitle = styled.h4`
  margin-top: 8px;
  margin-bottom: 2px;
  word-break: break-word;
  font-size: 22px;
  font-weight: 400;
`;

const MovieYear = styled.h4`
  color: gray;
  font-size: 12px;
  margin-top: 0;
`;

const MovieText = ({ movie }) => {
  return (
    <Container>
      {" "}
      <MovieTitle>{movie.Title}</MovieTitle>
      <MovieYear>{movie.Year}</MovieYear>
    </Container>
  );
};

export default MovieText;
