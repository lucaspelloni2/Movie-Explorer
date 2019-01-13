import React from "react";
import styled from "styled-components";
import { getDomain } from "../helpers/getDomain";
import Movie from "../views/Movie";
import Spinner from "../views/Spinner";
import LottieManager from "../views/lottie/LottieManager";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;

class Movies extends React.Component {
  render() {
    return (
      <Parent>
        {this.props.isLoading ? (
          <LottieManager />
        ) : (
          <Container>
            {this.props.movies
              ? this.props.movies.map(movie => {
                  if (movie) {
                    return <Movie movie={movie} id={movie.id} key={movie.id} />;
                  }
                })
              : null}
          </Container>
        )}
      </Parent>
    );
  }
}

export default Movies;
