import style from "./Navbar.module.css";
import logo from "../../img/logo.png";
import {NavLink} from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import Pagination from "../pagination/Pagination";

const Navbar = () =>{
    return (
        <>
            <div className={style.navbar}>
                <div className={style.oneofftree}>
                    <div className={style.logo}>
                        <NavLink to ="/countries">
                            <img className={style.logo} src={logo} alt="Countries App Logo"/>
                        </NavLink>
                    </div>
                    <div className={style.title}>
                        <h1 className={style.h1}>My touristic activities<br/>arround the world...</h1>
                    </div>
                </div>
                <div className={style.oneofftree}>
                    <div className={style.searchbar}>
                        <Searchbar/>
                    </div>
                </div>    
                <div className={style.oneofftree}>
                    <div className={style.searchbar}>
                        <Pagination/>
                    </div>
                    <div className={style.createactivity}>
                        <NavLink to ="/activity">
                            <button className={style.myBtn}>Create activity</button>
                        </NavLink>
                    </div>
                </div>
                
                
            </div>
        </>
        );
}

export default Navbar;