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
`;

export default ContainerForm;
