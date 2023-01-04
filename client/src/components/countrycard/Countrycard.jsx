import style from "./Countrycard.module.css";
console.log(style.span);
const Countrycard = (props) =>{
    return(
        <div className={style.cardcontainer}>  
            <div className={style.flag}>
                <img className={style.imgflag} src={props.flag} alt="Flag"/>
            </div>
            <div className={style.infocountry}>
                <h3 className={style.h3}>{props.name}</h3>
                <p className={style.p}><span className={style.span}>Capital:</span> {props.capital}</p>
                <p className={style.p}><span className={style.span}>Continent:</span> {props.continent}</p>
                <p className={style.p}><span className={style.span}>Population:</span> {props.population}</p>
            </div>
        </div>
    );
}

export default Countrycard;