import React from "react";

//import useAuth from "../hooks/useAuth";

const Admin= () => {
    //const { cerrarSesion } = useAuth(); 
    return(
        <nav class="nav-bar-placer-left">
            <ul class="nav-bar-placer-left-holder">
                 <a href="/Admin/home/Productos">Productos</a>
                 <a href="/Admin/home/Detalles">Detalles</a>
                 <a href="/Admin/home/Ventas">Ventas</a>
                 <a href="/loggin/home/" >Cerrar Sesión</a>
            </ul>
        </nav>
    );
}

export default Admin;