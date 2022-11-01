import React from "react";
import tendero from "../Bin/limpiador.png";
import tiendaColor from "../Bin/Mi_tienda.png";

function Card(){
    return (
        <container class="Card-Conatiner">
            <section class="upper-Card-Container-section">
                <div class="user-image">
                    <img  src={tendero} alt="Aún no hay imagen"  />
                </div>
                <div class="user-general-Data-upper-container">
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
                
              <a href="/User/home">
                 <button>Vista de Usuario</button>
             </a>  
             <a href="/Admin/home">
                 <button>Vista de Admin</button>
             </a>                                  
                
                
            </div>
                
        </container>
    );
}

export default Card;