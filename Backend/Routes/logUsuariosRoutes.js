import express from "express";
import {autenticacion, registrar,confirmar, getUsuario,
    autenticar,
    perfil

} from "../Controllers/UsuariosController.js";

import checkAuth from "../middleware/authMiddleware.js"

const router =express.Router();

router.get('/autentication', autenticacion)
router.post('/', registrar );
router.get('/confirmar/:token',confirmar);
router.get('/validar/:token', getUsuario);
router.post("/login",autenticar)
router.get("/perfil", checkAuth, perfil)

export default router;


