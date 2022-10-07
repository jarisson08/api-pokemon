//import { Home } from "./pages/home"

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CardPokemon } from "./components/CardPokemon";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <>
      <NavBar />
      <Container  maxWidth={false}>
        <Grid container >
          <Grid item xs={3}>
            <CardPokemon />
          </Grid>

          <Grid item xs={3}>
            <CardPokemon />
          </Grid>

          <Grid item xs={3}>
            <CardPokemon />
          </Grid>

          <Grid item xs={3}>
            <CardPokemon />
          </Grid>

          <Grid item xs={3}>
            <CardPokemon />
          </Grid>

          <Grid item xs={3}>
            <CardPokemon />
          </Grid>


        </Grid>

      </Container>
    </>
  );
}

export default App;
