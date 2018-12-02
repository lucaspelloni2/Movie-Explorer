import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

const MovieLink = ({ link, icon }) => {
  return (
    <a href={link} target="_blank">
      <Icon src={icon} />
    </a>
  );
};

export default MovieLink;
