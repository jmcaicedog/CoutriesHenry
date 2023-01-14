import { useHistory, useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { searchCountry } from "../../redux/actions";
import style from "./Searchresult.module.css";

const Searchresult = (props) =>{
    const {searchterm}=useParams();
    const history = useHistory();
  
    const dispatch = useDispatch();
    const country = useSelector((state)=>state.country);
    const activities = useSelector((state)=>state.activities);
    
    useEffect(()=>{
      dispatch(searchCountry(searchterm));
    },[]);

    const activitieslist = activities.map((activity)=>{
        return(
            <div className={style.infoblock} key={activity.id}>
                <p className={style.p}><span className={style.span}>{activity.name}</span></p>
                <p className={style.p}><span className={style.span}>Season:</span> {activity.season}</p>
                <p className={style.p}><span className={style.span}>Difficulty:</span> {activity.difficulty}</p>
                <p className={style.p}><span className={style.span}>Duration:</span> {activity.duration}</p>
            </div>)
    })

    console.log(activitieslist.length);
    
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

export default Searchresult;