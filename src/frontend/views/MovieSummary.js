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

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 2px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingContainer = styled.div`
  margin-top: 13px;
  margin-left: auto;
  margin-right: 2px;
`;

const MovieSummary = ({ movie }) => {
  return (
    <Container>
      <TopContainer>
        <Title>Summary</Title>
        <RatingContainer>
          {movie.imdbRating !== "N/A" && movie.imdbRating ? (
            <MovieRating rating={movie.imdbRating} />
          ) : (
            <i>No rating.</i>
          )}
        </RatingContainer>
      </TopContainer>
      <Text>{movie.Plot}</Text>
    </Container>
  );
};
export default MovieSummary;
