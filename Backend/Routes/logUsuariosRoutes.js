import express from "express";
import {autenticacion, registrar,confirmar} from "../Controllers/UsuariosController.js";

const router =express.Router();

router.get('/autentication', autenticacion)
router.post('/', registrar );
router.get('/confirmar/:token',confirmar);

export default router;


