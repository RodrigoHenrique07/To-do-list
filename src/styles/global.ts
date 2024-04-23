import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: ${({theme}) => theme.TEXT_COLOR};
}

body, input, button, textarea{
  outline: none;
}

img{
  max-width: 100%;
  display: block;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button {
  background-color: transparent;
}

button:hover, a:hover{
 filter: brightness(0.9);
}

a{
  text-decoration: none;
}
`;
