import styled from 'styled-components';

const ContainerPostDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: var(--color-two);

  img {
    margin-top: 2rem;
    max-width: 90%;
  }

  h2 {
    text-align: center;
    margin-bottom: 0;
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
  }

  .tags span {
    font-weight: bold;
  }

  .createdby {
    font-style: italic;
    color: var(--color-five);
    font-size: 1.1em;
    align-self: flex-start;
    margin-left: 3em;
  }

  a {
    margin-bottom: 1rem;
    background: transparent;
    border: 1px solid var(--color-five);
    color: var(--color-five);
    font-size: 1.2em;
    align-self: flex-start;
    margin-left: 3em;
  }

  a:hover {
    background: var(--color-five);
    color: var(--color-four);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export default ContainerPostDetail;
