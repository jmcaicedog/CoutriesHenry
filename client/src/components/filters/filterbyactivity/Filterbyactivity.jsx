import style from "./Filterbyactivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity, setCurrent, setPage } from "../../../redux/actions";


const Filterbyactivity = ()=>{
    const activities = useSelector((state)=>state.activities);

    const dispatch = useDispatch();

    const handleFilteredActivity = (event) =>{
        dispatch(filterByActivity(event.target.value));
        dispatch(setCurrent(1));
        dispatch(setPage(1));
    }


    console.log(activities);

    const activitiesList = activities.map((activity)=>{return(
        <><option value={activity.name}>{activity.name}</option></>
    )})

    return(
        <>
        <div className={style.filtercontainer}>
            <p className={style.title}>Filter by activity</p>
            <select className={style.select} onChange={event => handleFilteredActivity(event)}>
                <option value={"All"}>Select Activity</option>
                {activitiesList}
            </select>
        </div>
        </>
    )
}

export default Filterbyactivity;