import { createGlobalStyle } from 'styled-components';
// import Sidebar from '../components/Sidebar';

const GlobalStyle = createGlobalStyle`
   :root{
    --primary-color: #007bff;
--secondary-color:#6c757d;
--background-dark-color:#10121A;

--border-color:#2e344e;
--background-light-color:F1F1F1;
--white-color:#FFF;
--font-light-color:#a4acc4;
--font-dark-color:#313131;
--font-dark-color-2:#151515;
--sidebar-dark-color:#191d3B;
    /* --background-color:#000; */
}
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
    /* font-family:inherity; */
    color: var(--white-color);
    font-size: 1rem;

}
h1{
    font-size:3rem;
    color: var(--white-color);
    span{
        font-size: 2rem;
    }
}
span{
    color: var(--primary-color);
}
`;

export default GlobalStyle;


// --primary-color: #007bff;
// --secondary-color:#6c757d;
// --background-dark-color:#10121A;


// --border-color:#2e344e;
// --background-light-color:F1F1F1;
// --white-color:#FFF;
// --font-light-color:#a4acc4;
// --font-dark-color:#313131;
// --font-dark-color-2:#151515;
// --sidebar-dark-color:#191d3B;


