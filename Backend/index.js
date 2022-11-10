import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import rutas from "./Routes/Routes.js"
import conectarDB from "./config/DB.js"

const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(express.json());


const dominiosPermitidos = [process.env.FRONTEND_URL];
    const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
// El origen del Request esta permitido
        callback(null, true);
        }else{
        callback(new Error('No permitido por CORS'));
        }
    }
};

//gestión de usuarios
app.use('/login/home', rutas );

app.listen(PORT, ()=>{
    console.log(`Servidor Inicializado en el puerto # ${PORT}`);
});