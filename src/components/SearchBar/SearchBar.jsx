import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => (
  <div className={styles["search-bar"]}>
    <input
      className={styles["search-bar__input"]}
      value={value}
      placeholder="Search"
      onChange={onChange}
    />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchBar;
