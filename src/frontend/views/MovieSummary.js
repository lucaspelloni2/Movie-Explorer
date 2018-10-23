import React from "react";
import styled from "styled-components";
import MovieRating from "./MovieRating";

const Container = styled.div``;

const Text = styled.p`
  color: gray;
  font-size: 10.5px;
  margin-top: 0;
  word-break: break-word;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 2px;
`;

const TopContainer = styled.div``;

const MovieSummary = ({ movie }) => {
  return (
    <Container>
      <TopContainer>
        <Title>Summary</Title>
        <MovieRating rating={movie.imdbRating} />
      </TopContainer>
      <Text>{movie.Plot}</Text>
    </Container>
  );
};
export default MovieSummary;
