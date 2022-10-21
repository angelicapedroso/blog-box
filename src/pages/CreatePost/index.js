import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthValue } from '../../context/auth';
// import styles from './styles.module.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  // const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button className="btn" type="submit">Cadastrar</button>
        {/* {!loading && <button className="btn" type="submit">Cadastrar</button>}
        {loading && <button className="btn" type="submit" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
}

export default CreatePost;
