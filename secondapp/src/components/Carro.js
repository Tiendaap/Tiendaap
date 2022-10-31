import React from "react";
import Articulo from "../Bin/marihuana.png"

function carro(){
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
                            <div class ="product-image-container">
                                <div class="product-image-placer">
                                <img src={Articulo} alt="Imagen del producto"/>
                                </div>
                            </div>
                        </th>
                        <th>25jbh</th>
                        <th>Pacos de Marihuana 5g</th>
                        <th>5</th>
                        <th>13500</th>                                              
                    </tr>
                    <tr class="table-footer">
                        <th class="footer-balance" colspan="4">Balance    :</th>                        
                        <th>-13500</th>                        
                    </tr>
            </table>
        </container>
    );
}
export default carro;