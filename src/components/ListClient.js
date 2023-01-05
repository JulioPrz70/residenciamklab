import axios from "axios";
import { useEffect, useState } from "react";

export default function ListClient(){

    const [clients, setClients]= useState({});

    useEffect(()=>{
        getUsers();
    }, []);

    function getUsers(){

    axios.get ('http://localhost:80/apimklab1/clients/').then(function(response){
        console.log(response.data);
        set.users(response.data);
    })
    return(
        <div>
            <h1>List Users</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Direccion</th>
                        <th>RFC</th>
                        <th>CURP</th>
                        <th>Acciones</th>
                        
                </thead>
            </table>
        </div>
    )
    
}
}