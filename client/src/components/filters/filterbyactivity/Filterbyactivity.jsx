import style from "./Filterbyactivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity, setCurrent, setPage} from "../../../redux/actions";


const Filterbyactivity = ()=>{
    const allActivities = useSelector((state)=>state.allActivities);

    const dispatch = useDispatch();

    const handleFilteredActivity = (event) =>{
        dispatch(filterByActivity(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
    }

    const activitiesList = allActivities.map((activity,id)=>{return(
        <option key={id} value={activity.name}>{activity.name}</option>
    )})

    return(
        <>
        <div className={style.filtercontainer}>
            <p className={style.title}>Filter by activity</p>
            <select className={style.select} onChange={event => handleFilteredActivity(event)}>
                <option value={"All"}>All</option>
                {activitiesList}
            </select>
        </div>
        </>
    )
}

export default Filterbyactivity;