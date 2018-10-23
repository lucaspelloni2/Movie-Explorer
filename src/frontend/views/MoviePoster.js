import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, black),
    color-stop(0.35, black),
    color-stop(0.5, black),
    color-stop(0.65, black),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, transparent)
  );
`;

const getSrc = poster => {
  // increase quality
  return poster.toString().replace("_SX300", "_SX2500");
};

const MoviePoster = ({ poster, ...otherProps }) => {
  if (poster !== "N/A" && poster) {
    return <Image src={getSrc(poster)} {...otherProps} />;
  }
  return <h1>IMPLEMENT NOT FOUND IMAGE IN API</h1>;
};

export default MoviePoster;
