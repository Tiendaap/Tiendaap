import React from "react";
import Articulo from "../Bin/marihuana.png"

function Productos(){
    return(
        
       
        
        <container class="">
            
            <section class="">
                <div class="user-image">
                    <img  src={Articulo} alt="Imagen del Articulo"  />
                </div>
                <div>
                    <div class="user-sub-container">
                    <h1>Usuario:</h1>
                    <h3>Alipser</h3>
                    </div>
                    <div class="user-sub-container">
                    <h1>Nombre:</h1>
                    <h3>Romario André Julio Beltrán</h3>
                    </div>
                    <div class="user-sub-container">
                    <h1>Correo: </h1>
                    <h3>Romarioajb@outlook.com</h3>
                    </div>            
                </div>
                <div>
                <input value="Comprar" role="button" type="submit"/>
                </div>
            </section>
        </container>    
            
        )
}

export default Productos;