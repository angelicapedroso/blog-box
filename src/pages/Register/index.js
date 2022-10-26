import React, { useEffect, useState } from 'react';
import useAuthentication from '../../hooks/useAuthentication';
import Container from './styles';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, errors: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais');
    }

    const res = createUser(user);

    return res;
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const logo = '< CODEBlog />';

  return (
    // page login
    <Container>
      {/* container-form */}
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Bem-vindx!</h2>
          <h3>Cadastre-se para começar a postar!</h3>
        </div>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirmPassword">
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn" type="submit">Cadastrar</button>}
        {loading && <button className="btn" type="submit" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </Container>
  );
}

export default Register;
