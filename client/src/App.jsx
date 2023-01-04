import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Countrydetails from './components/countrydetails/Countrydetails';
import { Route } from 'react-router-dom';
import Countrieslist from './components/countrieslist/Countrieslist';

function App() {
  return (
    <>
    
    <Route path="/">
      <Navbar name="Touristic activities arround the world..."/>
    </Route>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/countries">
      <Countrieslist/>
    </Route>  
      
    <Route path="/country/:name">
      <Countrydetails/>
    </Route>


    </>
  );
}

export default App;
