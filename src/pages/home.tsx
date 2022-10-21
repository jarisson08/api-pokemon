import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';
import { api } from '../services/api';
import { HomeContainer } from './styles';




type PokemonType= {
    type: {
      name: string
    };
   
}

type PokeImgs= {
    front_default: string
}


export type IPokemon= {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
    sprites:PokeImgs;
}

type Request={
    id: number;
    types: PokemonType[];
    name: string;
    sprites:PokeImgs;
    
}

export default function Home() {

    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    
    useEffect(()=> {
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

       

    return (
        <>
            <HomeContainer>
                
                

                    {pokemons.map((pokemon, key) => (
                        
                            <CardPokemon key= {key} sprites={pokemon.sprites} types={pokemon.types} id={pokemon.id} url={pokemon.url} name= {pokemon.name} />
                            
                        
                        
                    ))}
                
                        
            </HomeContainer>
        </>
    )
}