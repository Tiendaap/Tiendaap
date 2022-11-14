import Venta from "../Models/Ventas.js"
import Producto from "../Models/Productos.js";

const autenticacion= (req,res) =>{
    res.send({
        msg:"Aun no se para que es esta ruta pero es para ventas"
    })

}

export const getProducto =  async (id, cantidad) =>{
    const producto = await Producto.findById(id);
   
    if(producto.stock === 0){
        console.log(`No hay stock del Producto ${producto.nombre}`);
    }else{
        if((producto.stock - cantidad) < 0){
            console.log(`La cantidad solicitada no la hay ${producto.stock}`);
        }else{
            producto.stock = producto.stock - cantidad;
            console.log(`Venta registrada del  ${producto.nombre} - cantidad ${cantidad}`);
            await producto.save();
        }
    }
    
};

export const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);
        
        // Generar un proceso que actualice el stock del articulo
        venta.articulos.forEach(element => {
            getProducto(element.inf._id, element.cantidad);
        });

        const ventaGuardado = await venta.save();

        res.json(ventaGuardado);
    } catch (error) {
        console.error(error.message);
    }
};


export const getVentas = async(req, res) => {
    try {
        const Ventas = await Venta.find();
        res.send(Ventas);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const getVenta = async(req, res) => {
    try {
        const OneVenta = await Venta.findById(req.params.id);
        if (!OneVenta) {
            return res.sendStatus(404);
        } else {
            return res.json(OneVenta);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }    
};

export const updateVentas = async(req, res) => {
    try {
        const updateVenta = await Venta.findByIdAndUpdate(
            req.params.id            
        );
        
        return res.send(updateVenta);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export {
    autenticacion
};