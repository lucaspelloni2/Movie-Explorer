import React, { Component } from "react";
import styled from "styled-components";
import Movies from "./components/Movies";
import FolderSelector from "./components/FolderSelector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.5em;
  line-height: 1.3em;
  text-align: center;
  letter-spacing: 1px;
`;

const SubTitle = styled.h4`
  text-align: center;
  margin-top: 0;
  font-style: italic;
  font-weight: 100;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      isLoading: false
    };
  }

  render() {
    return (
      <Container>
        <Title>Explore your films. Everywhere</Title>
        <SubTitle>
          A clean web-client for exploring local downloaded films, representing
          them using aggregated data.
        </SubTitle>
        <FolderSelector
          onLoadedData={movies => {
            this.setState({ movies });
          }}
          onLoading={isLoading => {
            this.setState({ isLoading });
          }}
        />
        <Movies movies={this.state.movies} isLoading={this.state.isLoading} />
      </Container>
    );
  }
}

export default App;
