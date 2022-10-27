import styled from 'styled-components';

const Container = styled.header`
  nav {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 2em;
    border-bottom: 0.05em solid var(--color-three);
  }

  .logo {
    font-size: 1.4em;
    // color: var(--color-four);
  }

  .logo:hover {
    font-size: 1.5em;
    transition: 0.5s;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    margin-right: 1em;
  }

  ul li a {
    padding: 0.4em 0.6em;
    text-decoration: none;
  }

  .button_menu {
    display: none;
  }

  @media (max-width: 768px) {
    .button_menu {
      display: block;
      margin-bottom: 1.5em;
    }

    .button_menu button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      background: transparent;
      border: none;
      color: var(--color-four);
      cursor: pointer;
    }

    .button_menu button:hover {
      opacity: 0.8;
    }

    nav {
      display: none;
    }

    ${({ isMenuOpen }) => isMenuOpen
    && `
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--color-one);
    }

    nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    nav ul li {
      margin: 1em 0;
    }

    nav ul li a {
      font-size: 1.5em;
    }

    nav ul li a:hover {
      font-size: 1.6em;
      transition: 0.5s;
    }

    .logo {
      display: none;
    }
  `}
  }
`;

export default Container;
