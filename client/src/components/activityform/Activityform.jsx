import { useEffect, useState } from "react";
import style from "./Activityform.module.css"
import validate from "../../utils/validate";

const Activityform = (props) =>{

    const [form, setForm] = useState({
        email:"",
        password:"",
    });
    
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    });
    
    useEffect(()=>{
        validate(form, errors, setErrors);
    },[form, errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Se envió el formulario");
        setForm({
          password: "",
          email: "",
        });
      };

    const handleFormChange = (event) =>{
        const property =event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            [property]:value,
        });
    }

    return(
      <div className="activityForm">
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Create a new touristic activity...</h2>
                <label htmlFor="name">Activity name: </label>
                <input  
                    className={errors.name && style.error}
                    type="text" 
                    name="name" 
                    onChange={handleFormChange}
                    value={form.name}>
                </input>
                <br/>
                <span>{errors.name ? errors.name: ""}</span>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    className={errors.password && style.error}
                    type="text"
                    name="password"
                    onChange={handleFormChange}
                    value={form.password}>
                </input>
                <br/>
                <span>{errors.password ? errors.password: ""}</span>
            </div>
            <div>
                <button type="submit">Create activity</button>
            </div>
        </form>
      </div>  
    )
}

export default Activityform;

