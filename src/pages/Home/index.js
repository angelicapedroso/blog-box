import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import useFetchDocuments from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

function Home() {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou faça uma busca por tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">Buscar</button>
      </form>
      <div className={styles.posts}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
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
