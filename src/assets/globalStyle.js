import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-one: #000000;
  --color-two: #161616;
  --color-three: #393838;
  --color-four: #434BE7;
  --color-five: #E5E5E5;
}

body {
  background-color: var(--color-one);
  padding: 0;
  margin: 0;
  font-family: "Work Sans", sans-serif;
}

input::placeholder,
textarea::placeholder {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  color: var(--color-five);
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom: 1px solid var(--color-five);
}

a,
nav button {
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: var(--color-five);
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}

a:hover,
nav button:hover {
  color: var(--color-four);
}

form {
  max-width: 40%;
  margin: 0 auto;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
}

label span {
  margin-bottom: 0.3em;
  font-weight: bold;
  text-align: left;
}

input,
textarea {
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid var(--color-two);
  padding: 0.8em 0;
  background-color: transparent;
  color: var(--color-five);
}

.btn {
  background-color: var(--color-three);
  color: var(--color-one);
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
}

.btn.btn-light {
  background-color: var(--color-three);
  color: var(--color-five);
  border-radius: 0;
}

.btn.btn-light:hover {
  opacity: 0.8;
}

.btn.btn-outline {
  background-color: var(--color-four);
  border-radius: 0;
  color: var(--color-five);
  border: 1px solid var(--color-four);
  padding: 7px 30px;
}

.btn.btn-outline:hover {
  background-color: var(--color-three);
}

.btn.btn-danger:hover {
  background-color: #dc3545;
}

button[disabled] {
  background-color: var(--color-five);
}

.container .error {
  color: #721c24;
  background-color: var(--color-five);
  /* border: 1px solid var(--color-three); */
  padding: 5px;
  border-radius: 5px;
}

`;
