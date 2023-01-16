import style from "./Pagination.module.css";
import { useHistory } from "react-router-dom";
import { setCurrent, setPage} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const countries = useSelector((state)=>state.countries);
    const countriesPerPage = useSelector((state)=>state.countriesPerPage);
    const current = useSelector((state)=>state.current);
    const page = useSelector((state)=>state.page);
    let max = Math.ceil(countries.length / countriesPerPage);
    const nextPage = ()=>{
        if(current<max){
            dispatch(setCurrent(current + 1));
            dispatch(setPage(page + 1));
        }
    }

    const prevPage = ()=>{
        if(current>1){
            dispatch(setCurrent(current - 1));
            dispatch(setPage(page - 1));
        }
    }

    return(
        <>
        <div className={history.location.pathname==="/countries"? style.paginator : style.paginatorhide}>
            <button className={style.myBtn} onClick={prevPage}>Prev</button>
            <p className={style.current1}>{current}</p><p className={style.current2}> / </p><p className={style.current3}>{max}</p>
            <button className={style.myBtn} onClick={nextPage}>Next</button>
        </div>
        </>
    )
}

export default Pagination;