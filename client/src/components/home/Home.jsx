import style from "./Home.module.css"
import world from "./world.mp4";
console.log(style.videodiv);
const Home = (props) =>{
    return(
        <>
        <div className={style.videodiv}>
        <video className={style.video} autoPlay loop muted>
            <source src={world} type='video/mp4' />
        </video>  
        <button className={style.button}>Ingresar</button>
        </div> 
        </>
    )   
}

export default Home;