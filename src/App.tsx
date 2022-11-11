import  Home, { IPokemon, Request }  from "./pages/home"
import  SearchBar  from "./components/SearchBar";
import {GlobalStyle} from './styles/global';
import {defaultTheme} from './styles/default';
import {ThemeProvider} from 'styled-components'
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { HomeContainer } from "./pages/styles";
import CardPokemon from "./components/CardPokemon";




export default function App() {
  
  
 

  return (
    <ThemeProvider theme= {defaultTheme} >
       
       <SearchBar />  
       <Home />
       
     <GlobalStyle />
    </ThemeProvider>
  );
}


