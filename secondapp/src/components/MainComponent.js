import React from "react";
import Card from "./cardUsuario"
import Tabla from "./TablaMovimientos"
import Carro from "./Carro"
import ProductosClientes from "./ProductosClientes";
import { useState } from "react";




    
function Main(){

    
    return (
        
        <container class="Central_container">
            <Card></Card>
            <container class= "side-view-placer">
                  
                  <ProductosClientes></ProductosClientes>
                 </container>
           
        </container>
        
    );

   

}

export default Main;