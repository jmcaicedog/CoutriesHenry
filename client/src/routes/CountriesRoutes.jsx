import {Route} from 'react-router-dom';
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Countrydetails from '../components/countrydetails/Countrydetails';
import Countrieslist from '../components/countrieslist/Countrieslist';
import Activityform from '../components/activityform/Activityform';
import { Fragment } from 'react';
const CountriesRoutes = () =>{
    return(
    <>
        <Route
          path="/"
          render={(props) => {
            if (props.location.pathname !== "/") {
              return <Navbar {...props} />;
            }
            return null;
          }}
        />{" "}
        {/* <Route path="/">
            <Navbar name="Touristic activities arround the world..."/>
        </Route> */}
        
        <Route exact path="/">
            <Home/>
        </Route>
        
        <Route exact path="/countries">
            <Countrieslist/>
        </Route>  
        
        <Route path="/countries/:countryId" component={Countrydetails}/>
        
        <Route exact path="/activity">
            <Activityform/>
        </Route>


    </>
    );
}

export default CountriesRoutes;
