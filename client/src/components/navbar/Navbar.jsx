import style from "./Navbar.module.css";
const Navbar = (props) =>
{
    return (
        <>
            <div className={style.navbar}>
                <h2>{props.name}</h2>
            </div>
        </>
    );
}

export default Navbar;