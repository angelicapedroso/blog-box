import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Home() {
  const [query, setQuery] = useState('');
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Vejo os posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou faça uma busca por tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">Buscar</button>
      </form>
      <div>
        <h1>Posts</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum post encontrado</p>
            <Link to="/posts/create">Criar um post</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
