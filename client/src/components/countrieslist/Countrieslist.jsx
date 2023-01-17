import style from "./Countrieslist.module.css";
import {useEffect} from "react";
import Countrycard from '../countrycard/Countrycard';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setCountriesPerPage} from "../../redux/actions";
import Filterbycontinent from "../filters/filterbycontinent/Filterbycontinent";
import SortByName from "../filters/sortbyname/SortByName";
import SortByHabs from "../filters/sortbyhabs/SortByHabs";


const Countrieslist = () => {    
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    const orderedsend = useSelector((state)=>state.orderedsend);
    const page = useSelector((state)=>state.page);
    const countriesPerPage = useSelector((state)=>state.countriesPerPage);
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
      !countries.length && dispatch(getCountries());
      page===1? dispatch(setCountriesPerPage(9)) : dispatch(setCountriesPerPage(10));
    },[dispatch,page, countries.length]);
    
    return(
      <>
        <div className={style.filterbar}>
          <div>{<Filterbycontinent/>}</div>
          <div>{<SortByName/>}</div>
          <div>{<SortByHabs/>}</div>
        </div>
        
        <div>{countrieslist}</div>
      </>  
    )
}

export default Countrieslist;



