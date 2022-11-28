import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate} from 'react-router-dom'
import imagencarrito from "../Bin/carts.png"





function User(){
    const { cerrarSesion } = useAuth(); 
    const navigate= useNavigate();
    return(
        <nav class="nav-bar-placer-left">
            <ul class="nav-bar-placer-left-holder">
            <a href="/User/home/Carrito">
           
            </a>
            <a href="/User/home/Carrito">Carrito de Compras </a>
            
            
            <a href="/User/home/Productos">Productos</a>
           
            
            <input type="button" value="Cerrar Sesion" onClick={() => {cerrarSesion()
                                                                        ;navigate('/loggin/home');
                                                                        window.location.reload(true);}}/>
                
            </ul>
        </nav>
    );
}

export default User;