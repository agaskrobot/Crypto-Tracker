import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ cap }) => (
  <div className={styles.header}>
    <h1 className={styles["header__title"]}>Crypto Tracker</h1>
    <p>Market Cap: {cap}</p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Header;
