import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import useFetchDocument from '../../hooks/useFetchDocument';
import useUpdateDocument from '../../hooks/useUpdateDocument';

function EditPost() {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      setTags(post.tags.join(','));
    }
  }, [post]);

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    try {
      // eslint-disable-next-line no-new
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim());

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    };

    updateDocument(id, data);

    navigate('/dashboard');
  };

  return (
    <div className={styles.edit}>
      {post && (
        <>
          <h2>
            Editar post:
            {post.title}
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <span>Título:</span>
              <input
                type="text"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Insira um título para o seu post"
              />
            </label>
            <label htmlFor="image">
              <span>URL da imagem:</span>
              <input
                type="text"
                name="image"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Adicione uma imagem"
              />
              <p>Preview da imagem atual:</p>
              <img src={image} alt={title} />
            </label>
            <label htmlFor="body">
              <span>Conteúdo:</span>
              <textarea
                name="body"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Insira um conteúdo"
              />
            </label>
            <label htmlFor="image">
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Insira as tags separadas por vírgula"
              />
            </label>
            {!response.loading && (
              <button className="btn" type="submit">
                Editar
              </button>
            )}
            {response.loading && (
              <button className="btn" type="button" disabled>
                Aguarde...
              </button>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default EditPost;
