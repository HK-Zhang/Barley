import React from "react";
import { Input } from "./styled-components/Input";
import { SearchButton } from "./styled-components/Button/SearchButton";
import { StyledLink } from "./styled-components/Link/StyledLink";

export const SearchInput = ({ value, handleChange, handleSubmit }) => (
  <div style={{ display: "flex", padding: "20px" }}>
    <Input
      placeholder="Search for an artist"
      type="text"
      value={value}
      onChange={handleChange}
    />
    <SearchButton onClick={handleSubmit}>
      <StyledLink to="/search">Search</StyledLink>
    </SearchButton>
  </div>
);
