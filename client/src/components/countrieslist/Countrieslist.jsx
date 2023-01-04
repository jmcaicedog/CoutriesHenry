
import React from "react";
import axios from "axios";
import Countrycard from '../countrycard/Countrycard';
import { Link } from "react-router-dom";

const Countrieslist = () => {
    const [countries, setCountries] = React.useState(null);
  
    React.useEffect(() => {
      axios.get("http://localhost:3001/countries").then((response) => {
        setCountries(response.data);
      });
    }, []);
  
    if (!countries) return null;
    
    console.log(countries[1]);
    return(
        countries.map((country)=>{
            return (
                <Link to={`/countries/${country.id}`}>
                  <Countrycard flag={country.flag} name={country.name} capital={country.capital} continent={country.continent} population={country.population}/>
                </Link>
              );
        })
    )
    

    
  }


export default Countrieslist;



