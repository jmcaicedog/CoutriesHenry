import { useHistory, useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteActivity, getCountry, setDetailChange} from "../../redux/actions";
import style from "./Countrydetails.module.css";

const Countrydetails = () =>{
    const {countryId}=useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const country = useSelector((state)=>state.country);
    const activities = useSelector((state)=>state.activities);
    const detailchanged = useSelector((state)=>state.detailchanged);
    console.log(activities);
    
    function handleDelete(id){
        dispatch(deleteActivity(id));
        dispatch(setDetailChange());
    }

    useEffect(()=>{
      dispatch(getCountry(countryId));
    },[countryId, dispatch, detailchanged]);

    const activitieslist = activities.map((activity)=>{
        return(
            <div className={style.infoblock} key={activity.id}>
                <p className={style.p}><span className={style.span}>{activity.name}</span></p>
                <p className={style.p}><span className={style.span}>Season:</span> {activity.season}</p>
                <p className={style.p}><span className={style.span}>Difficulty:</span> {activity.difficulty}</p>
                <p className={style.p}><span className={style.span}>Duration:</span> {activity.duration}</p>
                <div className={style.center}>
                    <button className={style.myBtnClose} onClick={()=> handleDelete(activity.id)}>x</button>
                </div>
            </div>)
    })
    
    return(
        <>
            <div className={style.container}>
                <div className={style.flag}>
                    <img className={style.imgflag} src={country.flag} alt="Flag"/>
                </div>
                <div className={style.info}>
                    <h2 className={style.title}>{country.name}</h2>
                    <div className={style.infoblockcontainer}>
                        <div className={style.infoblock}>
                            <p className={style.p}><span className={style.span}>Country code:</span> {country.id}</p>
                            <p className={style.p}><span className={style.span}>Capital:</span> {country.capital}</p>
                            <p className={style.p}><span className={style.span}>Continent:</span> {country.continent}</p>
                        </div>
                        <div className={style.infoblock}>
                            <p className={style.p}><span className={style.span}>Subregion:</span> {country.subregion}</p>
                            <p className={style.p}><span className={style.span}>Area:</span> {country.area}</p>
                            <p className={style.p}><span className={style.span}>Population:</span> {country.population}</p>
                        </div>
                    </div>
                    <h3 className={activitieslist.length? style.title : style.hide}>Touristic activities:</h3>
                    <div className={style.infoblockcontainer}>
                        {activitieslist}
                    </div>
                    <button onClick={()=>{history.goBack()}} className={style.myBtn}>Back</button>                    
                </div>  
            </div>
            
            
        </>
    )
}

export default Countrydetails;