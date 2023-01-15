import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch} from "react-redux";
import { searchCountries } from "../../redux/actions";
import style from "./Searchbar.module.css";

const Searchbar = (props) =>{
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(searchCountries(event.target.value));
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