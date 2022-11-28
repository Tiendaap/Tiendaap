import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const ItemsContext = createContext();
const ItemsProvider = ({ children }) => {

  const [Productos, setProductos]=useState([])
  const[menu, setMenu] = useState(false)
  const [item, setItem] = useState({});
  const [carrito, setCarrito] = useState(localStorage.getItem('dataCarrito') ? JSON.parse(localStorage.getItem('dataCarrito')) : []);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta  = await (clienteAxios("/admin/home/productos/productos"));
        const items = respuesta.data
        setProductos(items);  
      } catch (error) {
        console.log("Error" + error.message);       
      }
    };
    consultarApi()    
  },[] );
  
 
  



const addCarrito = (id) =>{
    
    
    const check = carrito.every(item =>{
        return item._id !== id;
        
    })
    if(check){
        const data = Productos.filter(producto =>{
            return producto._id === id;
        })
        setCarrito([...carrito, ...data])
        
    }else{
        alert("El producto se ha añadido al carrito")
    }
}

useEffect(()=>{
    const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
    if(dataCarrito){
        setCarrito(dataCarrito)
    }

},[] )

useEffect(()=>{
    const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
    if(dataCarrito){
        setCarrito(dataCarrito)
        
    }

},[] )


useEffect(()=>{
    localStorage.setItem('dataCarrito', JSON.stringify(carrito))
}, [carrito])


useEffect(() =>{
    const getTotal = () =>{
        const res = carrito.reduce((prev, item) =>{
            return prev + (item.precio * item.__v);
        },0)
        setTotal(res)
    }
    getTotal()
},[carrito])

const Limpia = () => {
    localStorage.removeItem("dataCarrito");
    setCarrito([]);
  };




return (
    <ItemsContext.Provider value = {{
        Productos,
        addCarrito,
        carrito,
        setCarrito,
        total,
        setTotal,
        menu,
        setMenu,
        Limpia   
    }}>

        {children}
    </ItemsContext.Provider>
    );
}
export {
    ItemsProvider
}
export default ItemsContext;
