import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html { 
    font-size: 6.25%; 
}

body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    font-size: 16rem;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    line-height: 1.4;
    font-weight: 200;
}

ul {
    list-style-type: none;
    padding: 0;

}

li {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    margin-bottom: 5rem;
    align-items: center;
   }

a {
    text-decoration: none;
    color: black;
    font-size: 13rem;
    text-align: start;
    font-weight: light;
}

a:hover,
a:active {
    color: ${({theme}) => theme.colors.darkGray};
}

button {
    cursor: pointer;
    border: inherit;
    outline: none;
    font-family: inherit;
    font-size: inherit;
}

h1 {
    font-weight: 300;
    letter-spacing: 1px;
    margin: 10rem;
}

h2 {
    font-family: 'Bebas Neue', cursive;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: -1.25rem;

}

header {
    position: relative;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    color: white;
    display: flex;
    justify-content: center;  
    align-items: center;
}

img {
    object-fit: cover;
    width: 42mm;
    height: 42mm;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

textarea {
    font-family: inherit;
    font-size: 13rem;
    line-height: 1.4;
    font-weight: light;
}

p {
    font-size: 13rem;
    font-weight: 200;
}

input {
    padding: 2rem;
}

`;
export default GlobalStyle;
