import React, { Component, Suspense, lazy } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import { SearchBar } from "./components/SearchBar";
import { SearchInput } from "./components/SearchInput";

const UserProfile = lazy(() => import("./UserProfile"));

const SearchWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const SearchButton = styled.button`
  height: 30px;
  width: 100px;
`;

const Loading = styled.div`
  text-align: center;
`;

const Blurred = styled.div`
  height: 500px;
  @supports (backdrop-filter: blur(10px)) or
    (--webkit-backdrop-filter: blur(10px)) {
    background-color: blue;
    backdrop-filter: blur(10px);
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 100px;
`;

const Text = styled.h3`
  font-family: "Roboto", sans-serif;
`;

class App extends Component {
  state = {
    user: "",
    loading: false,
    profile: {},
    repos: []
  };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  search = event => {
    const url = `https://api.github.com/users/${this.state.user}`;

    this.setState({ loading: true });
    event.preventDefault();
    axios
      .get(url)
      .then(response => {
        this.setState({ profile: response.data });
        this.getRepos(response.data.repos_url);
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getRepos = url => {
    axios
      .get(url)
      .then(response => {
        this.setState({ repos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <div className="App">
          <Row>
            <Col sm={12}>
              <SearchWrapper>
                <Title>Github</Title>
                <SearchBar
                  value={value}
                  handleChange={this.handleChange}
                  handleSubmit={this.search}
                  searchBarProps={({ value, handleChange, handleSubmit }) => (
                    <SearchInput
                      value={value}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                  )}
                />
              </SearchWrapper>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {this.state.loading ? <Loading>Fetching data</Loading> : null}
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              {this.state.profile ? (
                <Suspense fallback={<Blurred />}>
                  <h1>{this.state.profile.login}</h1>
                </Suspense>
              ) : null}
              <Text>
                Here is some more info that can be displayed without waiting for
                data to come back from the API
              </Text>
              <Text>
                And we've got a bit more here! We don't have to wait to display
                it!
              </Text>
            </Col>
            <Col sm={10}>
              {this.state.repos.length > 0 ? (
                <Suspense fallback={<Blurred />}>
                  <UserProfile repos={this.state.repos} />
                </Suspense>
              ) : null}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
