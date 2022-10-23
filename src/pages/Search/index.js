import React from 'react';
import styles from './styles.module.css';
// import useFetchDocuments from '../../hooks/useFetchDocuments';
import useQuery from '../../hooks/useQuery';

function Search() {
  const query = useQuery();
  const search = query.get('q');

  return (
    <div className={styles.search}>
      <p>{search}</p>
    </div>
  );
}

export default Search;
