import React , {useState, useEffect} from "react";
//import Articulo from "../Bin/marihuana.png"

function Productos(){
    const [ artCarro, setArtCarro]= useState([]);
    
    const cuandoClick = (e) =>{
        console.log(e.target.resultado)
    }
    
    useEffect(() => {
        const consultarApi = async () =>{
            try{
                const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/")
                const resultado= await respuesta.json();
                setArtCarro(resultado);
            
            }
            catch (error){
                console.log("Error" + error.message)
            }
        };

       


        consultarApi()
    }
        ,[])

       



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
                                    <img src={resultado.imagen.url} alt="Imagen del Articulo" />
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
                                        <h3>{resultado.stock>0 ? (resultado.stock):( <div> No hay unidades</div>)  }</h3>
                                    </div>
                                </div>

                                </section>
                                
                                    
                                    <button class="Comprar" 
                                     onClick={cuandoClick}>
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