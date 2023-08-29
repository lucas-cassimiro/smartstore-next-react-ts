"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased; 
  font-family: 'Inter', sans-serif;  
}

ul, ol {
    list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
