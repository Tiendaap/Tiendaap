import React, { useState } from "react";
import Articulo from "../Bin/marihuana.png"
import useItems from "../hooks/useItems.jsx"

const Carro= () => {
    const value= useItems();
    const menu = value.menu
    const setMenu = value.setMenu();
    const carrito = value.carrito;
    const setCarrito = value.setCarrito;
    const total = value.total;
    const LimpiarCarrito =value.Limpia
    
   
    
    

    const resta = id =>{
        carrito.forEach(item =>{
          if(item._id === id){
             item.__v -=1;
             if (item.__v < 0)
             {item.__v=0}
          }
          setCarrito([...carrito])
        })
      }
      
    
      const suma = id =>{
        carrito.forEach(item =>{
          if(item._id === id){
             item.__v +=1;
          }
          setCarrito([...carrito])
        })
      }
      
        
    const removeProducto = id =>{
        if(window.confirm("¿Quieres suspender el producto?")){
            carrito.forEach((item, index)=>{
        if( item.id=== id){
            item.cantidad = 1;
            carrito.splice(index, 1)
            
        }
            })
        setCarrito([...carrito])
    }
    

    }
    

   
    return(
        
        

        <container class="Table-container">
            <div class="cart-items">
               

            </div>
            
            <div>
                
                   

                


                
                    {carrito.length > 0 
             ?
            (
                ( <table  class="Table-movimientos">
                    <tr class="table-title">
                        <th colspan="5">Carro de Compras</th>
                    </tr>
                     
                    <tr class="table-header">
                        
                        <th>Imagen</th>
                        <th>valor</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Agregar</th> 
                        <th>Quitar</th>                        
                        <th>Total</th>
                                              
                    </tr>


                    {
                        carrito.map( resultado =>(
                            
                            <tr class="movements">
                    <th> 
                        <div class="product-image-container">
                            <div class="product-image-placer">
                                <img src={resultado.image.url} alt="Imagen del producto"/>
                            </div>
                        </div>
                    </th>
                    <th>{resultado.precio}</th>
                    <th>{resultado.nombre}</th>
                    <th>{resultado.__v}</th>
                    <th> <button class='add' onClick={() => suma(resultado._id)}>+</button> </th>
                    <th> <button class='less' onClick={()=> resta(resultado._id)}>-</button> </th>
                    
                    
                    <th>{resultado.precio*resultado.__v}</th>  
                    
                    </tr>
                            
                        ))
                    }
                     <tr class="table-footer">
                        <th class="footer-balance" colspan="4">Total    :</th>                        
                        <th>${total}</th>                        
                    </tr>

                
            </table>
                )
            ) : (<tr class="movements">
                    <th> 
                        <div class="product-image-container">
                            <div class="product-image-placer">
                                <img src={Articulo} alt="Imagen del producto"/>
                            </div>
                        </div>
                    </th>
                    <th>2700</th>
                    <th>No se mostró</th>
                    <th>5</th>
                    <th>13500</th>  </tr>) }
                    
                                            
                                         
                    
                   
            </div>
            <div class="button-text-container">
            <button class='button_finalizar'><span>Finalizar compra</span></button>
            <button class = 'button_cancelar' onClick={() => LimpiarCarrito()}>Cancelar </button>
            </div>
        </container>
        
    );
}

export default Carro;
