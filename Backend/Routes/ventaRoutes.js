import express from "express";
import {autenticacion} from "../Controllers/VentasController.js";

const router =express.Router();

router.get('/autentication', autenticacion)

export default router;


