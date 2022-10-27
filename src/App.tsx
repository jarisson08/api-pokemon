import  Home, { IPokemon, Request }  from "./pages/home"
import  SearchBar  from "./components/SearchBar";
import {GlobalStyle} from './styles/global';
import {defaultTheme} from './styles/default';
import {ThemeProvider} from 'styled-components'
import { api } from "./services/api";
import { useEffect, useState } from "react";


export default function App() {

  
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  
  async function getPokemons() {
    const response= await api.get('/pokemon?limit=15&offset=0')
   const {results}= response.data
    
    
    
    const payloadPokemons= await Promise.all(
        results.map(async (pokemon: IPokemon) => {
            const {id, types, name, sprites}= await getMoreInfo(pokemon.url);
            //console.log({id,})
            return {id, types, name, sprites}
        })
        
    )
    
    setPokemons(payloadPokemons)
}
  
  useEffect(()=> {
       getPokemons()
  }, [])

  

  async function getMoreInfo(url:string): Promise<Request>{
      const response= await api.get(url);
      
      // const adios= response.data
      // console.log(adios)
      // return (adios)
      const {id, types, name, sprites}= response.data

      return {
          id, types, name, sprites
      }
  }

  async function onHandleChange(pokemon:any){
    if(!pokemon){
        return getPokemons()
    }

    const result= getMoreInfo
   }

  return (
    <ThemeProvider theme= {defaultTheme} >
    
       <SearchBar searchPokemons={pokemons} />  
       <Home pokemons={pokemons}/> 
     <GlobalStyle />
    </ThemeProvider>
  );
}


