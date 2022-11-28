import React , {useState, useEffect} from "react";
import useItems from "../hooks/useItems.jsx"

const Detalle= () => {
    const [nombre, setNombre] = useState ("");
    const [description, setDescription] = useState ("");
    const [precio, setPrecio] = useState ("");
    const [stock, setStock] = useState ("");
    const value = useItems();
    const Productos = value.Productos
   


    return(
        <container>

            <section class="Detalles-Container-section">
                
                
             {Productos.length > 0 
             ?
            (
                ( <div  class="row">
                    <label for="lang">Productos</label>
                    <form class="Form-container-Products"action="#" >
                    <select name="Productos_tienda" id="lang" size="25">                    
                    {
                        Productos.map( resultado =>(                           
                
                    <option>{resultado.nombre}</option>      

                        ))
                    }
                    <option>Nuevo Producto</option>
                    </select>
                    <input type="submit" value="Detalle" class="Detalle-button" />
            </form>
            </div>
                )
            )
            :
            (<option>Nuevo Producto</option>)
        }
            </section>

            <section class="Detalles-Container-section">
                
                
                
                <div>
                    <div class="Deattle_Product_image">
                        <img alt="Foto de PRoducto" />
                    </div>
                </div>

            </section>

            <section class="Detalles-Container-section">
                <div>
                    <form class="Labels-Detalles-Conatiner">
                        <label>Nombre del Producto
                            <input 
                            type="text" 
                            placeholder="Paco de Marihana 5g" 
                            value={nombre}  
                            onChange={(e) => setNombre(e.target.value)}
                            />
                            </label>
                        <label>Descripción<input type="text" placeholder="Hierba medicinal" 
                        value={description}  
                            onChange={(e) => setDescription(e.target.value)}
                        
                        /></label>
                        <label>Precio
                        <input type="text" 
                        placeholder="2.700"
                        value={precio}  
                        onChange={(e) => setPrecio(e.target.value)}
                        
                        />
                        </label>
                        <label>Stock
                        <input type="text"placeholder="15"
                        value={stock}  
                        onChange={(e) => setStock(e.target.value)} />
                        </label>

                    </form>
                </div>

            </section>

            
        </container>



        );
}

export default Detalle;