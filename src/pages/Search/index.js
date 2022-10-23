import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import useFetchDocuments from '../../hooks/useFetchDocuments';
import useQuery from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetail';

function Search() {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className={styles.search}>
      <div>
        {posts && posts.length === 0 && (
          <div>
            <p>Não foi encontrado nenhum post com a sua busca...</p>
            <Link to="/" className="btn btn-light">Voltar</Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default Search;
