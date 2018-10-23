import React from "react";
import styled from "styled-components";
import { getDomain } from "../helpers/getDomain";
import Movie from "../views/Movie";
import Spinner from "../views/Spinner";

const Container = styled.div``;

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
          <Spinner />
        ) : (
          <Container>
            {this.state.movies.map(movie => {
              return <Movie movie={movie} id={movie.id} />;
            })}
          </Container>
        )}
      </Parent>
    );
  }
}

export default Movies;
