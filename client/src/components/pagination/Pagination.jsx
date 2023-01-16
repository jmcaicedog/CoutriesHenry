import style from "./Pagination.module.css";
import { setCurrent, setPage} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { setCountriesPerPage } from "../../redux/actions";

const Pagination = () =>{

    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    const countriesPerPage = useSelector((state)=>state.countriesPerPage);
    const current = useSelector((state)=>state.current);
    const page = useSelector((state)=>state.page);
    let max = Math.ceil(countries.length / countriesPerPage);

    console.log("max: "+max + "countriesPerPage: " +countriesPerPage + "countrieslength: " +countries.length);
    const nextPage = ()=>{
        if(current<max){
            dispatch(setCurrent(current + 1));
            dispatch(setPage(page + 1));
            page===1? dispatch(setCountriesPerPage(9)) : dispatch(setCountriesPerPage(10));
        }
    }

    const prevPage = ()=>{
        if(current>1){
            dispatch(setCurrent(current - 1));
            dispatch(setPage(page - 1));
            page===1? dispatch(setCountriesPerPage(9)) : dispatch(setCountriesPerPage(10));
        }
    }

    return(
        <>
        <div className={style.paginator}>
            <button className={style.myBtn} onClick={prevPage}>Prev</button>
            <p className={style.current1}>{current}</p><p className={style.current2}> / </p><p className={style.current3}>{max}</p>
            <button className={style.myBtn} onClick={nextPage}>Next</button>
        </div>
        </>
    )
}

export default Pagination;