import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';

const Search = (props) => {
  const { query, setQuery } = props;

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      className={styles.search}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.instanceOf(Object).isRequired,
};

export default Search;
