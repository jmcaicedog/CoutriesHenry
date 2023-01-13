import style from "./Navbar.module.css";
import logo from "../../img/logo.png";
import {NavLink} from "react-router-dom";
const Navbar = () =>
    {
    return (
        <>
            <div className={style.navbar}>
                <NavLink to ="/">
                    <img className={style.logo} src={logo}/>
                </NavLink>
                <h1 className={style.h1}>My touristic activities<br/>arround the world...</h1>
            </div>
        </>
        );
    }

export default Navbar;