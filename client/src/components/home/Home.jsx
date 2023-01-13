import style from "./Home.module.css"
import world from "../../video/world.mp4";
import {NavLink} from "react-router-dom"

const Home = (props) =>{
    return(
        <>
        <video className={style.myVideo} autoPlay loop muted>
            <source src={world} type='video/mp4' />
            Your browser does not support HTML5 video.
        </video>
        
        <div className={style.content}>
            <h1>Touristic activities arround the world...</h1>
            <p>With this application you will be able to find your next tourist destination. Easily create tourist activities in each country and classify them by difficulty, duration and season. Explore the list of countries and select one of them to see its details and the activities that you or another user have created in it.</p>
            <NavLink to ="/countries">
                <button className={style.myBtn}>Go!</button>
            </NavLink>
        </div>
        </>
    )   
}

export default Home;