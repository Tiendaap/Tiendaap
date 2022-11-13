import express from "express";
import {autenticacion} from "../Controllers/ProductosController.js";

const router =express.Router();

router.get('/autentication', autenticacion)

export default router;


