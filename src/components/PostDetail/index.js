import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/post/${post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  );
}

export default PostDetail;

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    createdBy: PropTypes.string,
  }).isRequired,
};
