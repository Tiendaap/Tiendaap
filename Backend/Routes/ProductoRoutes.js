import express from "express";

import {autenticacion,
    deleteProductos,
    getProducto,
    getProductos,
    createProductos,
    updateProductos
    } from "../Controllers/ProductosController.js";
    const router = express.Router();
    // Rutas Publicas
  
    // Rutas Gestión Producto
    router.get('/productos', getProductos);
    router.get('/productos/:id', getProducto);
    router.post('/productos', createProductos);
    router.put('/productos/:id', updateProductos);
    router.delete('/productos/:id', deleteProductos);



router.get('/autentication', autenticacion)


export default router;


