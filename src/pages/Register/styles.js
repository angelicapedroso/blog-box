import styled from 'styled-components';

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 89vh;
  background-color: var(--color-four);

  form {
    display: flex;
    flex-direction: column;
    height: 80%;
    border-radius: 10px;
    color: var(--color-five);
  }

  .logo {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: var(--color-one);
  }

  .logo h1 {
    color: var(--color-four);
    font-size: 3em;
    align-self: center;
  }

  .title h2 {
    margin-bottom: 0.1em;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
  }

  button {
    width: 100%;
  }

  @media (max-width: 768px) {
    .logo {
      display: none;
    }

    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    background: var(--color-one);

    form {
      background: var(--color-four);
      border-radius: 8px;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 60vh;
      min-width: 320px;
      padding: 2rem;
    }
  }
`;

export default ContainerForm;
