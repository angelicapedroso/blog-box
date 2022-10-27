import styled from 'styled-components';

const ContainerDashboard = styled.div`
  color: var(--color-five);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }

  h3 {
    margin-bottom: 1em;
  }

  .noposts {
    text-align: center;
  }

  .noposts p {
    margin-bottom: 1.5em;
  }

  .noposts a {
    padding: 10px 25px;
  }

  .post_header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 2px solid var(--color-two);
    width: 80%;
    padding: 10px;
  }

  .post_row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-three);
    width: 80%;
    padding: 1rem;
    color: var(--color-four);
  }

  .post_row p {
    font-size: 1.2em;
  }

  .post_row a {
    margin: 0 0.5em;
    padding-top: 0.5em;
    height: 2rem;
    width: 5em;
    font-size: 1em;
    border: 1px solid var(--color-four);
    color: var(--color-four);
    font-weight: bold;
  }

  a:hover {
    background-color: var(--color-five);
    transition: 0.5s ease all;
    color: var(--color-one);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-four);
    padding: 10px;
    height: 2.6rem;
    width: 5rem;
    font-size: 1em;
    border: 1px solid var(--color-four);
    font-weight: bold;

    &:hover {
      background-color: #dc3545;
      transition: 0.5s ease all;
      color: var(--color-one);
    }
  }

  .actions {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
  }
`;

export default ContainerDashboard;
