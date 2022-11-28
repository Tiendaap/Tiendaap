import React , {useState, useEffect} from "react";
import useItems from "../hooks/useItems.jsx"


//productos.js

//import Articulo from "../Bin/marihuana.png"

function Productos(){
    const totalFetch= useItems()
    const addCarrito = totalFetch.addCarrito;
    const artCarro=totalFetch.Productos
    
    
    const [ cartItems, setCarItems]=useState([]);
    
      
    return(
       
       
        
        <container >
           
             {artCarro.length > 0 
             ?
            (
                ( <div  class="row">
                    {
                        artCarro.map( resultado =>(
                            
                            <div class="Product-card" key={resultado._id} >
                               
                                <section class="">
                                <div class="product-image">
                                    <img src={resultado.image.url} alt="Imagen del Articulo" />
                                </div>
                                <div>
                                    <div class="Product-sub-container">
                                        <h1>Nombre:</h1>
                                        <h3>{resultado.nombre}</h3>
                                    </div>
                                    <div class="Product-sub-container">
                                        <h1>Precio:</h1>
                                        <h3>{resultado.precio}</h3>
                                    </div>
                                    <div class="Product-sub-container">
                                        <h1>Stock: </h1>
                                        <h3>{resultado.stock>0 
                                                ? 
                                                (resultado.stock)
                                                :
                                                ( <div> No hay unidades</div>)  
                                        }</h3>
                                    </div>
                                </div>

                                </section>
                                
                                    
                                    <button class="Comprar" 
                                     onClick={() => addCarrito(resultado._id)}
                                     >
                                        Comprar
                                    </button>
                                    
                                </div>
                            
                        ))
                    }

                
            </div>
                )
            )
            :
            (<div>No hay articulos</div>)
        }
           
        </container>    
            
        )
}

export default Productos;