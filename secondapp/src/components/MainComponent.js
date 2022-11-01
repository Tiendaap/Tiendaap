import React from "react";
import Card from "./cardUsuario"
import Tabla from "./TablaMovimientos"
import Carro from "./Carro"
import Productos from "./Productos"

function Main(){
    return (
        
        <container class="Central_container">
            <Card></Card>
            <container class= "side-view-placer">
            <Productos></Productos>
            
            </container>
        </container>
        
    );
}

export default Main;