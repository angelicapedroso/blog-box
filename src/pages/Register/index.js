import React from 'react';
import styles from './styles.module.css';

function Register() {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para começar a postar</h1>
      <p>Crie sua conta e compartilhe suas ideias e histórias</p>
      <form>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
          />
        </label>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
          />
        </label>
        <button className="btn" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
