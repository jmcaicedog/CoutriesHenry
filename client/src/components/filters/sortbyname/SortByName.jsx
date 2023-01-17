import style from "./SortByName.module.css";
import { useDispatch } from "react-redux";
import { sortByName, setCurrent, setPage } from "../../../redux/actions";


const SortByName = ()=>{
    const dispatch = useDispatch();
    const handleSorting = (event) =>{   
        dispatch(sortByName(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
    }
    return(
        <>
        <div className={style.sortcontainer}>
            <p className={style.title}>Sort by Name</p>
            <select className={style.select} onChange={event => handleSorting(event)}>
                <option value={"Select order"}>Select order:</option>
                <option value={"A to Z"}>A to Z</option>
                <option value={"Z to A"}>Z to A</option>
            </select>
        </div>
        </>
    )
}

export default SortByName;