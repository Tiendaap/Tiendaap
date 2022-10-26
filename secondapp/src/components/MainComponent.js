import React from "react";
import Card from "./cardUsuario"
import Tabla from "./TablaMovimientos"


function Main(){
    return (
        
        <container class="Central_container">
            <Card></Card>
            <container class= "side-view-placer">
                <Tabla></Tabla>
            </container>
        </container>
        
    );
}

export default Main;