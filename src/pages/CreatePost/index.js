import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerCreatePost from './styles';
import { useAuthValue } from '../../context/AuthContext';
import useInsertDocument from '../../hooks/useInsertDocument';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  const { user } = useAuthValue();

  const { response, insertDocument } = useInsertDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    try {
      // eslint-disable-next-line no-new
      new URL(image);
    } catch (error) {
      setFormError('A URL da imagem é inválida');
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError('Todos os campos são obrigatórios.');
    }

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName,
    });

    return navigate('/');
  };

  return (
    <ContainerCreatePost>
      <h3>Escreva um post sobre tecnologia para compartilhar seu conhecimento</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          />
        </label>
        <label htmlFor="body">
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label htmlFor="image">
          <span>Tags: (separe por vírgulas)</span>
          <input
            type="text"
            name="tags"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        {!response.loading && <button className="btn" type="submit">Cadastrar</button>}
        {response.loading && <button className="btn" type="button" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </ContainerCreatePost>
  );
}

export default CreatePost;
