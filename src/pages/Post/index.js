import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDocument from '../../hooks/useFetchDocument';
import styles from './styles.module.css';

function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <div className={styles.post}>
      {loading && <p>Carregando...</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
        </div>
      )}
    </div>
  );
}

export default Post;
