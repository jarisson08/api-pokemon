import  Home, { IPokemon, Request }  from "./pages/home"
import  SearchBar  from "./components/SearchBar";
import {GlobalStyle} from './styles/global';
import {defaultTheme} from './styles/default';
import {ThemeProvider} from 'styled-components'
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { HomeContainer } from "./pages/styles";
import CardPokemon from "./components/CardPokemon";


function getFilteredPokemons(search:any, pokemons:any){
if(!search){
  return pokemons;
}
  return pokemons.filter((chosenPokemon:any) => chosenPokemon.name.includes(search))
}

export default function App() {
  
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [search, setSearch]= useState('')
  

  function handleSetSearch(e: any){
    
    setSearch(e.target.value)
    console.log(filteredPokemons)
    
  }


  const filteredPokemons= getFilteredPokemons(search ,pokemons)
  


  async function getPokemons() {
    const response= await api.get('/pokemon?limit=5&offset=0')
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

  

  const getMoreInfo= async (url:string): Promise<Request> => {
      const response= await api.get(url);
            
      const {id, types, name, sprites}= response.data

      return {
          id, types, name, sprites
      }
  }

 

  return (
    <ThemeProvider theme= {defaultTheme} >
       
       <SearchBar handleSetSearch={handleSetSearch} searchPokemons={pokemons} />  
       <HomeContainer >
                

                {pokemons.map((pokemon:IPokemon, key: any) => (
                    
                        <CardPokemon key= {key} sprites={pokemon.sprites} types={pokemon.types} id={pokemon.id} url={pokemon.url} name= {pokemon.name} />
                        
                    
                    
                ))}
            
                    
        </HomeContainer>
       
     <GlobalStyle />
    </ThemeProvider>
  );
}


