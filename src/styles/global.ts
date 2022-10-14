import {createGlobalStyle} from 'styled-components';

export const GlobalStyle= createGlobalStyle`

*{
    margin: 0;
    padding: 0.25rem;
    box-sizing: border-box;
}

body {
    background-color: ${props => props.theme['background']};
    
    :focus{
        outline: o;
        box-shadow: 0 0 0 2px
    }
}

@media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}

@media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
}

`