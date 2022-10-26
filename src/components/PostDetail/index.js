import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContainerPostDetail from './styles';

function PostDetail({ post }) {
  return (
    <ContainerPostDetail>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="createdby">
        -
        {post.createBy}
      </p>
      <div className="tags">
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn">Ler</Link>
    </ContainerPostDetail>
  );
}

export default PostDetail;

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    createBy: PropTypes.string,
  }).isRequired,
};
