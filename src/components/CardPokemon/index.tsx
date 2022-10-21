
import { IPokemon } from '../../pages/home';
import { CardContainer } from './styles';

export default function CardPokemon({name, sprites, types}: IPokemon) {

    
  // function typeHandler(){
  //   if(types[1]){
  //     return types[0].type+ " " + types[1].type
  //   }
  //   return types[0].type
  // }

  return (
    <CardContainer type={types[0].type.name}>

      <div>
      <section>
      <img src={sprites.front_default} alt={name} />
      </section>
      
      
      <footer>{name}</footer>
      </div>
    
      
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
