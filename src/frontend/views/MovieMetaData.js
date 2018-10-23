import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  font-size: 11px;
  color: gray;
  font-weight: bold;
`;

const Duration = ({ runTime }) => {
  /*  const noLetters = runTime.replace(/\D/g, "");
  console.log(noLetters);*/
  return (
    <div>
      {/*    {moment
        .duration(parseInt(noLetters), "minutes")
        .format("h:mm")
        .toString()}*/}
      {runTime}
    </div>
  );
};
const MovieMetaData = ({ movie }) => {
  return (
    <Container>
      {movie.Year} / {movie.Runtime} / {movie.Genre}
    </Container>
  );
};

export default MovieMetaData;
