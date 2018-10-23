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
  constructor() {
    super();
    this.state = {
      movies: null
    };
  }

  componentDidMount() {
    fetch(`${getDomain()}/api/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          this.setState({ movies: response.data });
          console.log(response.data);
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Parent>
        {!this.state.movies ? (
          <LottieManager />
        ) : (
          <Container>
            {this.state.movies.map(movie => {
              if (movie) {
                return <Movie movie={movie} id={movie.id} />;
              }
            })}
          </Container>
        )}
      </Parent>
    );
  }
}

export default Movies;
