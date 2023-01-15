import style from "./Pagination.module.css";
import { setCurrent, setPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Pagination = (params) =>{
    const dispatch = useDispatch();
    const current = useSelector((state)=>state.current);
    const page = useSelector((state)=>state.page);
    let {max} = params;

    max = Math.ceil(max);

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
            <div className={style.paginator}>
                <button className={style.myBtn} onClick={prevPage}>Prev</button>
                <p>{current}</p><p> off {max}</p>
                <button className={style.myBtn} onClick={nextPage}>Next</button>
            </div>
        </>
    )
}

export default Pagination;