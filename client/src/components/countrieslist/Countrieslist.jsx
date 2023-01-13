import style from "./Countrieslist.module.css"
import {useEffect} from "react";
import Countrycard from '../countrycard/Countrycard';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

const Countrieslist = () => {    
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    useEffect(()=>{
      dispatch(getCountries());
    },[]);
    return(
        countries.map((country)=>{
            return (
              <div key={country.id} className={style.countriescontainer}>
                <NavLink to={`/countries/${country.id}`} className={style.NavLink}>
                  <Countrycard id={country.id} flag={country.flag} name={country.name} capital={country.capital} continent={country.continent} population={country.population}/>
                </NavLink>
              </div>  
              );
        })
    )
  }


export default Countrieslist;



