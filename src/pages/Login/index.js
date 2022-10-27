import React, { useEffect, useState } from 'react';
import ContainerForm from '../Register/styles';
import useAuthentication from '../../hooks/useAuthentication';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, errors: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = login(user);

    return res;
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const logo = '< CODEBlog />';

  return (
    <ContainerForm>
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Olá!</h2>
          <h3>Faça login para acessar sua conta!</h3>
        </div>
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
        {!loading && <button className="btn" type="submit">Entrar</button>}
        {loading && <button className="btn" type="submit" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </ContainerForm>
  );
}

export default Login;
