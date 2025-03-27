import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root{
    --background-color:#000;}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
    font-size:1.2rem;


}
body{
 background-color: var(--background-dark-color);
color: var(--font-light-color);
}

a{
    font-family:inherity;
    color: inherity;
}

`;

export default GlobalStyle;


