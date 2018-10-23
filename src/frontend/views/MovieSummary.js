import React from "react";
import styled from "styled-components";

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

const MovieSummary = ({ movie }) => {
  return (
    <Container>
      <Title>Summary</Title>
      <Text>{movie.Plot}</Text>
    </Container>
  );
};
export default MovieSummary;
