import React from "react";
import Producto from "../Bin/marihuana.png"

function Detalle(){
    return(
        <container>
            <section class="Detalles-Container-section">
                
                <form class="Form-container-Products"action="#">
                <label for="lang">Productos</label>
                <select name="Productos_tienda" id="lang" size="25">
                    <option>Paco de Marihuana 5g</option>
                    <option>Producto 2</option>
                    <option>Producto 3</option>
                    <option>Producto 4</option>
                    <option>Producto 5</option>
                    
                </select>
                <input type="submit" value="Detalle" class="Detalle-button" />
                </form>
            
                <div>
                    <div class="Deattle_Product_image">
                        <img src={Producto} alt="Foto de PRoducto" />
                    </div>
                </div>
                <div>
                    <form class="Labels-Detalles-Conatiner">
                        <label>Nombre del Producto<input type="text" placeholder="Paco de Marihana 5g" /></label>
                        <label>Descripción<input type="text" placeholder="Hierba medicinal"/></label>
                        <label>Precio<input type="text" placeholder="2.700"/></label>
                        <label>Stock<input type="text"placeholder="15" /></label>
                    </form>
                </div>

            </section>

            <section>
                <div class="button-text-container">
                    <button class='button_finalizar'><span>Modificar</span></button>
                    <button class = 'button_cancelar'>Nuevo</button>
                </div>
            </section>
        </container>
        );
}

export default Detalle;