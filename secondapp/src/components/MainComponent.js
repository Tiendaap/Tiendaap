import React from "react";
import Card from "./cardUsuario"
import Tabla from "./TablaMovimientos"
import Carro from "./Carro"
import Productos from "./Productos"
import AdminProd from "./AdminProd";
import Detalles from "./Detalles";
import Logger from "./Loggin";

import {Switch, Route, Redirect, withRouter} from "react-router-dom";

function Main(){

    
    return (
        
        <container class="Central_container">
            <Card></Card>
            <container class= "side-view-placer">
                <Switch>
                <Route path="/Admin/home/Productos" component={AdminProd}></Route>
                <Route path="/Admin/home/Detalles" component={Detalles}></Route>
                <Route path="/Admin/home/Ventas" component={Tabla}></Route >
                <Route path="/User/home/Carrito" component={Carro}></Route >
                <Route path="/User/home/Productos" component={Productos}></Route >
                <Route path="/loggin/home/" component={Logger}></Route >
                <Redirect to="/loggin/home"></Redirect>
                </Switch>
               
                 </container>
           
        </container>
        
    );

   

}

export default Main;