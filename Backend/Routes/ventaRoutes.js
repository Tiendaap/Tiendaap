import express from "express";
import {autenticacion, 
    createVentas,
    getVentas,
    getVenta,
    updateVentas} from "../Controllers/VentasController.js";

const router =express.Router();

router.get('/autentication', autenticacion)

router.post('/create', createVentas);
router.get('/get', getVentas);
router.get('/get/:id', getVenta);
router.put('/update/:id', updateVentas);

export default router;









