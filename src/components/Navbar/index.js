import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import useAuthentication from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import Container from './styles';

function Navbar() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = '< CODEBlog />';

  return (
    <Container isMenuOpen={isMenuOpen}>
      <nav>
        <NavLink className="logo" to="/">
          {logo}
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/login">Entrar</NavLink>
              </li>
              <li>
                <NavLink to="/register">Cadastrar</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/posts/create">Criar post</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          {user && (
            <li>
              <button type="button" onClick={logout}>
                Sair
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="button_menu">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={40} /> : <List size={40} />}
        </button>
      </div>
    </Container>
  );
}

export default Navbar;
