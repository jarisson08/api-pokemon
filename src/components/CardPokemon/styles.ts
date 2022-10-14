import styled from "styled-components";

export const CardContainer = styled.main`
  border: 1px solid;
  width: 13.5rem;
  height: 14.5rem;
  padding: 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  img {
    width: 6.5rem;
    background-color: red;
  }

  main {
    background-color: green;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
  }

  div {
    background-color: ${(props) => props.theme.eletric};
    width: 100%;
    padding: 12px;
    border-radius: 0 0 8px 8px;
    display: flex;
    height: 3.875rem;
    justify-content: center;
  }

  span {
    width: 100%;
    
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
