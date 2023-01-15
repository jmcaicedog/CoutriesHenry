import style from "./Countrieslist.module.css";
import {useEffect, useState} from "react";
import Countrycard from '../countrycard/Countrycard';
import Pagination from "../pagination/Pagination"
import Searchbar from "../searchbar/Searchbar"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";


const Countrieslist = () => {    
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    const current = useSelector((state)=>state.current);
    const page = useSelector((state)=>state.page);

    const [countriesPerPage, setCountriesPerPage] = useState(9);
    //page===1? setCountriesPerPage(9) : setCountriesPerPage(10)

    console.log(current);
    let max = countries.length / countriesPerPage;
    
    const countrieslist = countries.slice((page-1) * countriesPerPage, (page-1) * countriesPerPage +countriesPerPage).map((country)=>{
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
      //dispatch(setPage(1));
    },[dispatch]);
    
    return(
      <>
        <Searchbar/>
        <div><Pagination max={max}/></div>
        <div>{countrieslist}</div>
      </>  
    )
}

export default Countrieslist;



