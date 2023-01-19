import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./Activityform.module.css"
import validate from "../../utils/validate";
import { getCountries, postActivity } from "../../redux/actions";


const Activityform = () =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({});   

    const [form, setForm] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryIds:[]
    });
    
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);



    const handleFormChange = (event) =>{
        const property =event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            [property]:value,
        });
        setErrors(validate({
            ...form,
            [property]:value,
        }));
    }

    const handleSelect = (event) => {
        const property =event.target.name;
        const value = event.target.value;
        setForm((state) => {
            if(property === "countryIds") {
                return {
                    ...state,
                    countryIds: [...state.countryIds, value]
                }
            } else {
                return {
                    ...state,
                    [property]: value,
                }
        }}); 
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Formulrio a enviar: ")
        console.log(form);
        if(!form.name || !form.difficulty || !form.duration || !form.season || !form.countryIds) {
            return alert ('Please fill all required fields...')
        }
        dispatch(postActivity(form));
        //alert("Your activty was created successfully");
        setForm({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countryIds:[]
        });
        //history.push("/countries");
    }

    function handleDelete(event){
        setForm({
            ...form,
            countryIds: form.countryIds.filter( country => country !== event)
        });
    }

    function handleClick(event){
        event.preventDefault();
        history.push("/countries");
        
    }



    return(
        <div className={style.formcontainer}>
            <div className={style.formbar}>
                <button onClick={(event) => handleClick(event)}>Go back!</button>
            </div>
            <div className={style.subcontainer}>
            <h2 className={style.title}>Add an touristic activity:</h2>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div>
                    <label className={style.field}>Activity name: </label>
                    <input className={style.input} type="text" value= {form.name} name= "name" onChange={(event)=> handleFormChange(event)}/>
                    {errors.name && (<p className={style.errors}>{errors.name}</p>)}
                </div>
                <div>
                    <label className={style.field}>Select countries for your activity: </label>
                    <select className={style.input} name="countryIds" id="countryIds" onChange={(event) => handleSelect(event)}>
                    <option value="Select a season">Select some countries</option>
                        {countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    {errors.countryIds && (<p className={style.errors}>{errors.countries}</p>)}
                </div>
                <div>
                    <label className={style.field}>Season: </label>
                    <select className={style.input} name="season" id="season" onChange={(event) => handleSelect(event)}>
                    <option value="Select a season">Select a season</option>
                            <option value={"Summer"}>Summer</option>
                            <option value={"Winter"}>Winter</option>
                            <option value={"Spring"}>Spring</option>
                            <option value={"Autum"}>Autum</option>
                    </select>
                    {errors.season && (<p className={style.errors}>{errors.season}</p>)}
                </div>
                <div>
                    <label className={style.field}>Difficulty: </label>
                    <input className={style.input} type="number" value= {form.difficulty} name= "difficulty" onChange={(event)=> handleFormChange(event)}/>
                    {errors.difficulty && (<p className={style.errors}>{errors.difficulty}</p>)}
                </div>
                <div>
                    <label className={style.field}>Duration: </label>
                    <input className={style.input} type="number" value= {form.duration} name= "duration" onChange={(event)=> handleFormChange(event)}/>
                    <label className={style.field}>Hours</label>
                    {errors.duration && (<p className={style.errors}>{errors.duration}</p>)}
                </div>
                <div>
                    <button className={style.myBtn} type="submit" disabled={Object.keys(errors).length === 0 ? false : true}>Save activity</button>
                </div>
                
            </form>
                
                {form.countryIds.map(event =>
                    <div className={style.conpais}>
                        <p className={style.mpais}> {event} </p>
                        <button className={style.myBtn} onClick={()=> handleDelete(event)}>X </button>
                    </div>    
                    )}
                </div>    
        </div>
    )
}

export default Activityform;

