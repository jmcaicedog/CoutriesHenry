import style from "./Countrieslist.module.css";
import {useEffect, useState} from "react";
import Countrycard from '../countrycard/Countrycard';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountries } from "../../redux/actions";

const Countrieslist = () => {    
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);


    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      dispatch(searchCountries(event.target.value));
    };
          

    const countrieslist = countries.map((country)=>{
      return (
        <div key={country.id} className={style.countriescontainer}>
          <NavLink to={`/countries/${country.id}`} className={style.NavLink}>
            <Countrycard id={country.id} flag={country.flag} name={country.name} capital={country.capital} continent={country.continent} population={country.population}/>
          </NavLink>
        </div>  
        );
    });

    useEffect(()=>{
      dispatch(getCountries());
    },[dispatch]);
    
    return(
      <>
        <div className={style.searchbar}>
            <input  
              className={style.input}
              type="text" 
              name="searchTerm"   
              value={searchTerm}
              autoComplete="off"
              onChange={handleChange}>
            </input>
        </div>
        <div>{countrieslist}</div>
      </>  
    )

}

export default Countrieslist;



