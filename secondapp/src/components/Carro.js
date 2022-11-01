import React from "react";
import Articulo from "../Bin/marihuana.png"

function Carro(){
    return(
        <container class="Table-container">
            <table class="Table-movimientos">
                    <tr class="table-title">
                        <th colspan="5">Carro de Compras</th>
                    </tr>
                    <tr class="table-header">
                        
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>                        
                        <th>Total</th>
                                              
                    </tr>
                    <tr class="movements">
                        <th> 
                            <div class="product-image-container">
                                <div class="product-image-placer">
                                    <img src={Articulo} alt="Imagen del producto"/>
                                </div>
                            </div>
                        </th>
                        <th>2700</th>
                        <th>Pacos de Marihuana 5g</th>
                        <th>5</th>
                        <th>13500</th>                        
                                         
                    </tr>
                    <tr class="table-footer">
                        <th class="footer-balance" colspan="4">Total    :</th>                        
                        <th>13500</th>                        
                    </tr>
            </table>
            <div class="button-text-container">
            <button class='button_finalizar'><span>Finalizar compra</span></button>
            <button class = 'button_cancelar'>Cancelar</button>
            </div>
        </container>
        
    );
}

export default Carro;
