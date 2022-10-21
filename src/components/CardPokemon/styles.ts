import styled from "styled-components";

interface PokemonBorderColor {
  type: string;
}

export const CardContainer = styled.main<PokemonBorderColor>`
  
  div {
    width: 16.75rem;
    height: 12.25rem;
    margin: 1.5rem;
    border: 3px solid ${({theme, type})=> theme.colors[type]};
    
    border-radius: 0.5rem;
    
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
  }

  section {
    min-width: 100%;
    height: 100%;
    overflow: hidden;
  }

  img {
    min-width: 100%;
    width: auto;
    height: 100%;
  }

  footer {
    background-color: ${({theme, type})=> theme.colors[type]};
    text-align: center;
    border-radius: 0 0 0.35rem 0.35rem;
    text-transform: capitalize;
    padding: 0.75rem;
    color: ${props=> props.theme['white']};
    
  }

  transition: 0.3s;

  :hover{
    transform: scale3d(1.1, 1.1, 1)
  }
  
`;

// export const CardContainer = styled.main`
//   border: 1px solid;
//   width: 13.5rem;
//   height: 14.5rem;
//   padding: 0;
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;

//   img {
//     width: 6.5rem;
//     background-color: red;
//   }

//   main {
//     background-color: green;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     padding: 0;
//     align-items: center;
//   }

//   div {
//     background-color: ${(props) => props.theme.eletric};
//     width: 100%;
//     padding: 12px;
//     border-radius: 0 0 8px 8px;
//     display: flex;
//     height: 3.875rem;
//     justify-content: center;
//   }

//   span {
//     width: 100%;

//     background-color: red;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
