import React from 'react';
import styles from './styles.module.css';

function Register() {
  return (
    <div>
      <h1>Cadastre-se para começar a postar</h1>
      <p>Cria sua conta e compartilhe suas histórias e ideias</p>
      <form>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha"
          />
        </label>
        <label htmlFor="confirmPassword">
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="btn" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
