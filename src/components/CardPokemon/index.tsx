import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IPokemon } from '../../pages/home';

// interface PokemonType {
//   types: {name: string}
//   name: string;
//   id: number;


// }
// interface Pokemon {
//   name: string;
//   url: string;
//   id: number;
//   types: PokemonType[]
// }
// interface Props {
//   data: Pokemon
// }



export default function CardPokemon({name, types}: IPokemon) {

   
  
  function typeHandler(){
    if(types[1]){
      return types[0].type.name + " " + types[1].type.name 
    }
    return types[0].type.name
  }
  
  return (
    

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        //image={sprites}
        
        alt="green iguana"
      />
      <CardContent>
      <Typography  gutterBottom variant="h5" sx={{backgroundColor: "pink"}} component="div">
         {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {typeHandler()}
        </Typography>
        {/* <Typography gutterBottom variant="h5" component="div">
        {types.map(pokemonType => pokemonType.type.name)}
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    // </Container>
  );
}
