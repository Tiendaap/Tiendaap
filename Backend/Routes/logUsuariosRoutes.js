import express from "express";
import {autenticacion} from "../Controllers/UsuariosController.js";

const router =express.Router();

router.get('/autentication', autenticacion)

export default router;


