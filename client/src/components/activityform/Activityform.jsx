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
        if(!form.name || !form.difficulty || !form.duration || !form.season || !form.countryIds) {
            return alert ('Please fill all required fields...')
        }
        try {
            dispatch(postActivity(form));
            setForm({
                name:"",
                difficulty:"",
                duration:"",
                season:"",
                countryIds:[]
            });
            history.push("/countries");
            alert("Activity created succesfully");
            //window.location.reload(true)  Posibilidad fea para recargar la página y que el filtro aplique de entrada
        } catch (error) {
            console.log(error.message);
        }
        
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
                
            <div className={style.subcontainer}>
                <div className={style.right}>
                    <button className={style.myBtn2} onClick={(event) => handleClick(event)}>x</button>
                </div>
            <h2 className={style.title}>Add a touristic activity:</h2>
            
            <form onSubmit={(event)=> handleSubmit(event)}>
            <hr></hr>
            <br></br>
                <div>   
                    <input className={style.input} type="text" value= {form.name} placeholder="Enter the activity name:" name= "name" onChange={(event)=> handleFormChange(event)}/>
                    {errors.name && (<p className={style.errors}>{errors.name}</p>)}
                </div>
                <div>
                    
                    <select className={style.input} name="countryIds" id="countryIds" onChange={(event) => handleSelect(event)}>
                    <option value="Select some countries">Select some countries</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    {errors.countryIds && (<p className={style.errors}>{errors.countries}</p>)}
                    <div className={style.countriescontainer}>
                        {form.countryIds.map(country =>
                        <div key={country} className={style.countrycontainer}>
                            <button className={style.myBtnClose} onClick={()=> handleDelete(country)}>x</button>
                            <p className={style.countryname}> {country} </p>
                        </div>    
                        )}
                    </div>
                    
                </div>
                <div>
                    
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
                    
                    <input className={style.input} type="number" value= {form.difficulty} name= "difficulty" placeholder="Enter the activity difficulty (1 to 5)" onChange={(event)=> handleFormChange(event)}/>
                    {errors.difficulty && (<p className={style.errors}>{errors.difficulty}</p>)}
                </div>
                <div>
                    <input className={style.input} type="number" value= {form.duration} name= "duration" placeholder="Enter the activity duration in hours (1 to 24)" onChange={(event)=> handleFormChange(event)}/>
                    {errors.duration && (<p className={style.errors}>{errors.duration}</p>)}
                </div>
                <div>
                    <button className={style.myBtn} type="submit" disabled={Object.keys(errors).length === 0 ? false : true}>Save activity</button>
                </div>
                
            </form>
                
                
                </div>    
        </div>
    )
}

export default Activityform;

