import React from "react"

import imagen from "../Bin/tienda2.png"
import Admin from "./Admin";
import User from "./User";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import {AuthProvider} from "../context/AuthProvider.jsx";

function Header(){


    
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
        
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/Admin/home/*" element={<Admin/>}></Route>
                <Route path="/User/home/*" element={<User/>}></Route>
            </Routes>
        </AuthProvider>
        </BrowserRouter>
        
        
        
    </div>
</header>
       </>
    )
}

export default Header;