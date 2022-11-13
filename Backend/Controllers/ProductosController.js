import Producto from "../Models/Productos.js";
import {
    uploadImage,
    deleteImage
} from '../helper/cloudinary.js';
import fs from "fs-extra"



const autenticacion = (req, res) => {
    res.send({
        msg: "Aun no se para que es esta ruta pero es para prodcutos"
    })

}
export const createProductos = async (req, res) => {
    try {
        const { nombre, description, precio, stock } = req.body;
        let image;
        if (req.files.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            };
            console.log(result);
        }
        const Newproducto = new Producto({
            nombre, description, precio, image, stock
        });
        await Newproducto.save();
        return res.json(Newproducto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};
export const updateProductos = async (req, res) => {
    try {
        const updatedProduct = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        return res.send(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProductos = async (req, res) => {
    try {
        const productRemoved = await Producto.findByIdAndDelete(req.params.id);
        if (!productRemoved) {
            const error = new Error("Token no valido");
            return res.sendStatus(404);
        } else {
            if (productRemoved.image.public_id) {
                await deleteImage(productRemoved.image.public_id);
            }
            return res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getProducto = async (req, res) => {
    try {
        const OneProduct = await Producto.findById(req.params.id);
        if (!OneProduct) {
            return res.sendStatus(404);
        } else {
            return res.json(OneProduct);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};




export {
    autenticacion
};