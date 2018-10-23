import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Movie = ({ movie }) => {
  return <Container>{movie.title}</Container>;
};

export default Movie;
