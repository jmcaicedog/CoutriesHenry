import style from "./SortByHabs.module.css";
import { useDispatch } from "react-redux";
import { sortByPopulation, setCurrent, setPage } from "../../../redux/actions";


const SortByHabs = ()=>{
    const dispatch = useDispatch();
    const handleSorting = (event) =>{   
        dispatch(sortByPopulation(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
    }
    return(
        <>
        <div className={style.sortcontainer}>
            <p className={style.title}>Sort by Population</p>
            <select className={style.select} onChange={event => handleSorting(event)}>
                <option value={"Select order"}>Select order:</option>
                <option value={"ASC"}>ASC</option>
                <option value={"DESC"}>DESC</option>
            </select>
        </div>
        </>
    )
}

export default SortByHabs;