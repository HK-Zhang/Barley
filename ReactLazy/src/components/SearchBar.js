import React from "react";

export const SearchBar = props => {
  const searchProps = {
    value: props.value,
    handleChange: props.handleChange,
    handleSubmit: props.handleSubmit
  };
  return props.searchBarProps(searchProps);
};
