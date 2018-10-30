import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 200px;
  background-color: mediumseagreen;
  color: white;
  margin: 20px;
  font-size: 30px;
  border-radius: 2px 0px 0px 2px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 15px 4px;
  padding: 3em 0;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
`;

const RepoCard = ({ name, forks, openIssues }) => (
  <Card>
    <Text>{name}</Text>
    <Text>Forks: {forks}</Text>
    <Text>Issues: {openIssues}</Text>
  </Card>
);

export default RepoCard;
