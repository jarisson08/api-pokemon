import  Home  from "./pages/home"
import  NavBar  from "./components/NavBar";
import {GlobalStyle} from './styles/global';
import {defaultTheme} from './styles/default';
import {ThemeProvider} from 'styled-components'


export default function App() {
  return (
    <ThemeProvider theme= {defaultTheme}>
    
       <NavBar />  
       <Home /> 
     <GlobalStyle />
    </ThemeProvider>
  );
}


