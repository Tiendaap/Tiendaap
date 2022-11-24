import express from "express";
import {autenticacion, registrar,confirmar, getUsuario,
    autenticar,
    perfil,
    usuarioRegistrados,
    actualizarPassword,
    actualizarPerfil

} from "../Controllers/UsuariosController.js";

import checkAuth from "../middleware/authMiddleware.js"

const router =express.Router();

router.get('/autentication', autenticacion)
router.post('/', registrar );
router.get('/confirmar/:token',confirmar);
router.get('/validar/:token', getUsuario);
router.post("/login",autenticar)
router.get("/perfil", checkAuth, perfil)

// Rutas Protegidas atraves del middleware checkAuth
// Identificamos el usuario y se identifica para mostrale los datos o funcionalidades que le corresponden.

router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.get("/lista-usuarios", checkAuth, usuarioRegistrados);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;


