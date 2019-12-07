import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
      type="search"
      className="search"
    />
  );
};
