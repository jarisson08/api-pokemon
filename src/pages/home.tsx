import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';

 import { api } from '../services/api';
import { HomeContainer } from './styles';




type PokemonType= {
    type: {name: string};
   
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
            const response= await api.get('/pokemon?limit=1&offset=0')
           const {results}= response.data
            
            
            
            const payloadPokemons= await Promise.all(
                results.map(async (pokemon: IPokemon) => {
                    const {id, name, types}= await getMoreInfo(pokemon.url);
                    //console.log({id,})
                    return {
                        name,
                        id,
                        types, 
                        
                    }
                })
                
            )
            
            setPokemons(payloadPokemons)
        }
        getPokemons()
    }, [])

    

    async function getMoreInfo(url:string): Promise<Request>{
        const response= await api.get(url);
        
        const {id, sprites, name, types}= response.data
        console.log({sprites})
        return {
            id, name, sprites, types
        }
    }

       

    return (
        <>
            <HomeContainer>
                
                

                    {pokemons.map((pokemon, key) => (
                        <Grid key= {key} item xs={3}>
                            <CardPokemon sprites={pokemon.sprites} types={pokemon.types} id={pokemon.id} url={pokemon.url} name= {pokemon.name} />
                        </Grid>
                    ))}
                

            </HomeContainer>
        </>
    )
}