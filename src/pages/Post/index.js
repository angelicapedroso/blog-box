import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDocument from '../../hooks/useFetchDocument';
import ContainerPost from './styles';

function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <ContainerPost>
      {loading && <p>Carregando...</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post fala sobre:</h3>
          <div className="tags">
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </ContainerPost>
  );
}

export default Post;
