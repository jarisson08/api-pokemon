import  Home  from "./pages/home"
import  SearchBar  from "./components/SearchBar";
import {GlobalStyle} from './styles/global';
import {defaultTheme} from './styles/default';
import {ThemeProvider} from 'styled-components'


export default function App() {
  return (
    <ThemeProvider theme= {defaultTheme} >
    
       <SearchBar />  
       <Home /> 
     <GlobalStyle />
    </ThemeProvider>
  );
}


