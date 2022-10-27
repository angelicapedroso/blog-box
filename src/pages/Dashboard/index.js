import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import useFetchDocumets from '../../hooks/useFetchDocuments';
import useDeleteDocument from '../../hooks/useDeleteDocument';
import ContainerDashboard from './styles';

function Dashboard() {
  const { user } = useAuthValue();
  const { uid } = user;

  const { documents: posts, loading } = useFetchDocumets('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ContainerDashboard>
      <h2>Gerencie os seus posts</h2>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foi encontrado nenhum post.</p>
          <Link to="/posts/create" className="btn">
            Criar um post
          </Link>
        </div>
      ) : (
        <div className="post_header">
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}
      {posts && posts.map((post) => (
        <div key={post.id} className="post_row">
          <p>{post.title}</p>
          <div className="actions">
            <Link to={`/posts/${post.id}`}>
              Ver
            </Link>
            <Link to={`/posts/edit/${post.id}`}>
              Editar
            </Link>
            <button
              type="button"
              onClick={() => deleteDocument(post.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </ContainerDashboard>
  );
}

export default Dashboard;
