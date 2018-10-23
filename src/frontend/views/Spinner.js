import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Spinner = () => {
  return (
    <Container>
      <iframe
        width="500"
        height="500"
        src="https://lottiefiles.com/iframe/2053-loading"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

export default Spinner;
