import styled from "styled-components";

export const CardContainer = styled.main`
  
  div {
    width: 18.75rem;
    height: 14.25rem;
    margin: 1.5rem;
    border: 2px solid;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
  }

  section {
    min-width: 100%;
    height: 200px;
    overflow: hidden;
  }

  img {
    min-width: 100%;
    width: auto;
    height: 100%;
  }

  footer {
    background-color: pink;
    text-align: center;
    border-radius: 0 0 0.35rem 0.35rem;

    padding: 0.75rem;
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
