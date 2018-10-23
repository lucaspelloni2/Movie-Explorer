import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 4px;
`;

const MoviePoster = ({ poster, ...otherProps }) => {
  return <Image src={poster} {...otherProps} />;
};

export default MoviePoster;
