import Usuario from "../Models/Usuarios.js";
import emailRegistro from '../helper/emailRegistro.js';

const autenticacion = (req, res) => {
    res.send({
        msg: "Aun no se para que es esta ruta  pero es dedicada a usuarios"
    })

}

export const registrar = async (req, res) => {
    const { nombre, email, password, telefono, direccion, web } = req.body;
    // Validar usuario duplicado
    // findOne busca por los diferentes atributos de la coleccion
    const existeUsuario = await Usuario.findOne({ email });
    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    };
    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        // Enviar el email
        emailRegistro({
            email,
            nombre,
            token: usuarioGuardado.token
        });
        res.json(usuarioGuardado);
    } catch (error) {
        console.error(error.message);
    };
};
export const confirmar = async (req, res)=>{
    // req.params para leer datos de la URL, en este caso token por que asi lo definimos en la ruta
    const { token } = req.params;
    const usuarioConfirmar = await Usuario.findOne({token});
    // console.log(usuarioConfirmar);
    // console.log(token);
    if(!usuarioConfirmar){
    const error = new Error("Token no valido");
    // console.log("Token no valido");
    return res.status(404).json({msg: error.message});
    };
    try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({
    msg: "Usuario confirmado correctamente"
    });
    // console.log("Usuario confirmado correctamente");
    } catch (error) {
    console.error(error.message);
    }
    };

    export const getUsuario = async (req, res) => {
        try {
            const { token } = req.params;
            const OneUser = await Usuario.findOne({token});
            if (!OneUser) {
                return res.sendStatus(404);
            } else {
                return res.json({
                    msg:"Usuario confirmado correctamente",
                    email: OneUser.email
                });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

export {
    autenticacion
};
