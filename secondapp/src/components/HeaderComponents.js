import React from "react"

import imagen from "../Bin/tienda2.png"
import Admin from "./Admin";
import User from "./User";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";

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
        <Switch>
        <Route path="/Admin/home/" component={Admin}></Route>
        <Route path="/User/home/" component={User}></Route>
        </Switch>
    </div>
</header>
       </>
    )
}

export default Header;