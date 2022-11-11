import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";



export type PokemonType= {
    type: {
      name: string
    };
   
}

export type PokeImgs= {
    front_default: string
}


export type IPokemon= {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
    sprites:PokeImgs;
}

export type Request={
    id: number;
    types: PokemonType[];
    name: string;
    sprites:PokeImgs;
    
}

interface PokemonContextType {
    pokemons: IPokemon[];
    getPokemons:()=> Promise<void>;
    getMoreInfo: ()=> Promise<void>;
}

export const PokemonsContext= createContext({} as )


export function searchPokemonContext(){
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
 
  


  async function getPokemons() {
    const response= await api.get('/pokemon?limit=50&offset=0')
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

  return(
    <PokemonsContext.Provider>

    </PokemonsContext.Provider>
  )

    
}