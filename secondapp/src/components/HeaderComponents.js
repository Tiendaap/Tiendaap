import React from "react"
import imagen from "../Bin/tienda.png"

function Header() {
    return(
       <> 
<header class="nav-bar"> 
    <div class="nav-bar-placer">
        <div class="nav-bar-placer-right">
            <div class="nav-bar-logo">
                <img src={imagen} alt="No se cargo el Logo"/>
            </div>
            <h1 class="nav-bar-app-name">Tiendaap</h1>
        </div>
        <nav class="nav-bar-placer-left">
            <ul class="nav-bar-placer-left-holder">
                <li>Productos</li>
                <li>Detalles</li>
                <li>Ventas</li> 
            </ul>
        </nav>
    </div>
</header>
       </>
    )
}

export default Header;