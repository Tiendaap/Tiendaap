import React from "react";
import tendero from "../Bin/limpiador.png";
import tiendaColor from "../Bin/Mi_tienda.png";


import { useEffect } from "react";
import useAuth from "../hooks/useAuth";





  

function Card(){
    const { auth} = useAuth();    
    const usuario = auth.usuario

    

    useEffect(() => {
        
        console.log(auth);
        
      }, [auth]);


    return (
        <container class="Card-Conatiner">
            <section class="upper-Card-Container-section">
                <div class="user-image">
                    <img  src={tendero} alt="Aún no hay imagen"  />
                </div>
                <div class="user-general-Data-upper-container">
                    <div class="user-sub-container">
                    <h1>Nombre:</h1>
                    {usuario === undefined
                        
                                                ? 
                                                (<div></div>)
                                                :
                                                (<h3>{`${auth.usuario.nombre}`}</h3>)}
                    </div>
                    <div class="user-sub-container">
                    <h1>Correo</h1>
                    {usuario === undefined
                        
                        ? 
                        (<div></div>)
                        :
                        (<h3>{`${auth.usuario.email}`}</h3>)}
                    </div>
                    <div class="user-sub-container">
                    <h1>Telefono: </h1>
                    {usuario === undefined
                        
                        ? 
                        (<div></div>)
                        :
                        (<h3>{`${auth.usuario.telefono}`}</h3>)}
                    </div>            
                </div>
              

            </section>

            <section class="Down-Card-Container-section">
                <div class="user-image">
                    <img  src={tiendaColor} alt="Aún no hay imagen" />
                </div>
                <div class="user-general-Data-Down-container">
                    <div class="user-sub-container">
                    <h1>Tienda:</h1>
                    <h3>Los Recuerdos de ella</h3>
                    </div>
                    <div class="user-sub-container">
                    <h1>Ciudad</h1>
                    <h3>Medellín</h3>
                    </div>
                    <div class="user-sub-container">
                    <h1>Dirección </h1>
                    <h3>Cra82bb#15b-18</h3>
                    </div>
                    <div class="user-sub-container">
                    <h1>Balance General:</h1>
                    <h3>Query de Ingresos-Egresos</h3>
                    </div>                
                </div>

            </section>


            <div>
                
                
            </div>
                
        </container>
    );
}

export default Card;