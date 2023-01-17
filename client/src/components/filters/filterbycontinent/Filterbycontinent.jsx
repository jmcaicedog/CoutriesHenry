import style from "./Filterbycontinent.module.css";
import { useDispatch } from "react-redux";
import { filterByContinent, setCurrent, setPage } from "../../../redux/actions";


const Filterbycontinent = ()=>{

    const dispatch = useDispatch();

    const handleFilteredCountrie = (event) =>{
        dispatch(filterByContinent(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
    }
    return(
        <>
        <div className={style.filtercontainer}>
            <p className={style.title}>Filter by continent</p>
            <select className={style.select} onChange={event => handleFilteredCountrie(event)}>
                <option value={"All"}>All</option>
                <option value={"South America"}>South America</option>
                <option value={"North America"}>North America</option>
                <option value={"Africa"}>África</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europa</option>
                <option value={"Oceania"}>Oceania</option>
                <option value={"Antarctica"}>Antarctica</option>
            </select>
        </div>
        </>
    )
}

export default Filterbycontinent;