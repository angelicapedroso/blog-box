import React, { useState } from 'react';
// import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h1>Criar post</h1>
      <p>Escreva algum post sobre tecnologia.</p>
      <p>
        Seja um conteúdo, dica, curiosidade, ou até algum meme pra se divertir.
      </p>
      <p>Não deixe de compartilhar seu conhecimento!</p>
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
        {!response.loading && <button className="btn" type="submit">Cadastrar</button>}
        {response.loading && <button className="btn" type="button" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default CreatePost;
