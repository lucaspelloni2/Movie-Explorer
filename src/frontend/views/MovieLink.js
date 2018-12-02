import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const MovieLink = ({ link, icon }) => {
  return <Icon src={icon} />;
};

export default MovieLink;
