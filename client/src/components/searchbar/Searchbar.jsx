import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch} from "react-redux";
import { searchCountries, setCurrent, setPage } from "../../redux/actions";
import style from "./Searchbar.module.css";

const Searchbar = () =>{
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(searchCountries(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
      };

    return(
        <>
        <div className={style.searchbar}>
            <FontAwesomeIcon icon={faSearch} className={style.icon}/>
            <input  
              className={style.input}
              placeholder="Search your destination..."
              type="text" 
              name="searchTerm"   
              autoComplete="off"
              onChange={handleChange}>
            </input>
        </div>
        </>
    )
}

export default Searchbar;