import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContainerHome from './styles';
import useFetchDocuments from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

function Home() {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }

    return null;
  };

  return (
    <ContainerHome>
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou faça uma busca por tags"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn">Buscar</button>
      </form>
      <div className="posts">
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Nenhum post encontrado</p>
            <Link to="/posts/create">Criar um post</Link>
          </div>
        )}
      </div>
    </ContainerHome>
  );
}

export default Home;
