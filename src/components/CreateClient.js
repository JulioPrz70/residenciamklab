import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateClient(){
    const navigate= useNavigate();

const[inputs, setInputs] = useState({})

const handleChange=(event)=>{
    const name= event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values, [name]: value}));
    
}

const handleSubmit= (event) => {
event.preventDefault();

axios.post('http://localhost:80/apimklab1/client/save', inputs).then(function(response){
    console.log(response.data);
    navigate('/');
})
    


};

    return(
        <div>
            <h1>Create client</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" name="Nombre" onChange={handleChange}></input>
                    <br />
                <label>Apellido Paterno: </label>
                <input type="text" name="Ap_P" onChange={handleChange}></input>
                <br />
                <label>Apellido Materno: </label>
                <input type="text" name="Ap_M" onChange={handleChange}></input>
                <br />
                <label>Correo: </label>
                <input type="email" name="correo" onChange={handleChange}></input>
                <br />
                <label>Dirección: </label>
                <input type="text" name="Direccion" onChange={handleChange}></input>
                <br />
                <label>Contraseña: </label>
                <input type="text" name="Contrasenia" onChange={handleChange}></input>
                <br />
                <label>RFC:</label>
                <input type="text" name="rfc" onChange={handleChange}></input>
                <br />
                <label>CURP:</label>
                <input type="text" name="curp" onChange={handleChange}></input>
                <br />
                <label>Persona:</label>
                <select name="persona" onChange={handleChange}>
                    <option value="1">Moral</option>
                    <option value="2"> Física</option>
                </select>
                <br />
                <button >Crear</button>
            </form>
        </div>
        
    )
}