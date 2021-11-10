import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {
  // eslint-disable-next-line react/prop-types
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

export default Search;
