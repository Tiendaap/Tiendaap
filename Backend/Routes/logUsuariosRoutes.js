import express from "express";
import {autenticacion, registrar,confirmar, getUsuario} from "../Controllers/UsuariosController.js";

const router =express.Router();

router.get('/autentication', autenticacion)
router.post('/', registrar );
router.get('/confirmar/:token',confirmar);
router.get('/validar/:token', getUsuario);

export default router;


