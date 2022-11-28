import React from "react";

import useAuth from "../hooks/useAuth";
import { useNavigate} from 'react-router-dom'

const Admin= () => {
    const { cerrarSesion } = useAuth(); 
    const navigate= useNavigate();
    return(
        <nav class="nav-bar-placer-left">
            <ul class="nav-bar-placer-left-holder">
                 <a href="/Admin/home/Productos">Productos</a>
                 <a href="/Admin/home/Detalles">Detalles</a>
                 <a href="/Admin/home/Ventas">Ventas</a>
                 <input type="button" value="Cerrar Sesion" onClick={() => {cerrarSesion()
                                                                        ;navigate('/loggin/home');
                                                                        window.location.reload(true);}}/>
            </ul>
        </nav>
    );
}

export default Admin;