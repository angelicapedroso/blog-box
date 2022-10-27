import styled from 'styled-components';

const ContainerCreatePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-two);
  max-width: 80%;
  margin: 3em auto;
  border-radius: 0.5em;
  min-height: 400px;
  min-width: 400px;

  h3 {
    margin: 1.5em;
    color: var(--color-four);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    color: var(--color-five);
  }

  button {
    margin: 1em auto;

    &:hover {
      background-color: var(--color-four);
    }
  }

  textarea {
    max-width: 100%;
  }
`;

export default ContainerCreatePost;
