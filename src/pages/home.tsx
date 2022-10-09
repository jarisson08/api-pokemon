import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardPokemon } from '../components/CardPokemon';

export function Home() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    function getPokemons() {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
            .then((res) => setPokemons(res.data.results)).catch((err) => console.log(err))
    }

    return (
        <>
            <Container maxWidth={false}>
                <Grid container >

                    {pokemons.map((pokemon) => (
                        <Grid item xs={3}>
                            <CardPokemon />
                        </Grid>
                    ))}





                </Grid>

            </Container>
        </>
    )
}