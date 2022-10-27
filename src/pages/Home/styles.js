import styled from 'styled-components';

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color-five);
    font-size: 1.7rem;
    margin-bottom: 1em;
  }

  input {
    margin-right: 1rem;
    width: 20rem;
  }

  input:focus {
    border-bottom: 1px solid var(--color-four);
  }

  button {
    background-color: transparent;
    color: var(--color-five);
    border: 1px solid var(--color-five);
  }

  button:hover {
    background-color: var(--color-five);
    color: var(--color-one);
    transition: 0.6s ease all;
  }

  form {
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
  }

  .noposts {
    text-align: center;
  }

  .noposts p {
    margin-bottom: 1.5em;
  }

  .noposts a {
    text-decoration: none;
    padding: 10px 25px;
  }
`;

export default ContainerHome;
