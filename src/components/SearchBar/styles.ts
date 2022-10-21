import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-weight: 700;
  font-size: 24px;
  font-family: "Poppins", sans-serif;

  background-color: ${(props) => props.theme.colors['light-gray']};

  display: flex;
  align-items: center;
  justify-content:space-between;

  input{
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-right: 1rem;
  }

  img {
    width: 2.5rem;
    height: 3.55rem;
    margin-right: 1rem;
  }
`;

export const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
`;
