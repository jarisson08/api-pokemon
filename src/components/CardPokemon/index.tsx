
import { IPokemon } from '../../pages/home';
import pokeball from '../../assets/Pokeball.svg'
import { CardContainer } from './styles';

export default function CardPokemon() {

  return (
    <CardContainer>
      <main>
      <img src={pokeball} alt="pokemon" />
      </main>
      <div><span>Pokemon</span></div>
      
    </CardContainer>
  )

}


// export default function CardPokemon({name, types}: IPokemon) {

   
  
//   function typeHandler(){
//     if(types[1]){
//       return types[0].type.name + " " + types[1].type.name 
//     }
//     return types[0].type.name
//   }
  
//   return (
    

//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         //image={sprites}
        
//         alt="green iguana"
//       />
//       <CardContent>
//       <Typography  gutterBottom variant="h5" sx={{backgroundColor: "pink"}} component="div">
//          {name}
//         </Typography>
//         <Typography gutterBottom variant="h5" component="div">
//         {typeHandler()}
//         </Typography>
      
//       </CardContent>
      
//     </Card>
    
//   );
// }
