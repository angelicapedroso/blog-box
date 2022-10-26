import styled from 'styled-components';

const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2rem auto 2rem auto;
  background-color: var(--color-two);
  color: var(--color-five);

  p {
    margin: 3rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  img {
    margin-top: 2rem;
    max-width: 100%;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-four);
  }

  .tags {
    margin-bottom: 1em;
    display: flex;
    color: var(--color-three);
    align-self: flex-start;
    margin-left: 3em;
    flex-wrap: wrap;
  }

  .tags p {
    margin: 0.5em;
    font-weight: bold;
  }

  h3 {
    margin-left: 3em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;

    p {
      margin: 1rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export default ContainerPost;
