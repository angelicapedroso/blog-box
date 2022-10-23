import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDocument from '../../hooks/useFetchDocument';
import styles from './styles.module.css';

function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando...</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post fala sobre:</h3>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
