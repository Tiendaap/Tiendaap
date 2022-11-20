import React from "react";
import Articulo from "../Bin/marihuana.png"

const AdminProd= () => {
    return(
        
       
        
        <container class="Product-card">
            
            <section class="">
                <div class="user-image">
                    <img  src={Articulo} alt="Imagen del Articulo"  />
                </div>
                <div>
                    <div class="Product-sub-container">
                    <h1>Nombre:</h1>
                    <h3>Paco de Marihuan 5g</h3>
                    </div>
                    <div class="Product-sub-container">
                    <h1>Precio:</h1>
                    <h3>2.700</h3>
                    </div>
                    <div class="Product-sub-container">
                    <h1>Stock: </h1>
                    <h3>15 Unidades</h3>
                    </div>            
                </div>
                
            </section>
           
        </container>    
            
        )
}

export default AdminProd;