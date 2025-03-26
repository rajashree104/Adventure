import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root{
    --background-color:#000;
    --primary-color: #007bff;
--secondary-color:#6c757d;
--background-dark-color:#10121A;
--border-color:#2e344e;
--background-light-color:#F1F1F1;
--white-color:#FFF;
--font-light-color:#a4acc4;
--font-dark-color:#313131;
--font-dark-color-2:#151515;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;

}
body{
 background-color: var(--background-color);

}

`;

export default GlobalStyle;



