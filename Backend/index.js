import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import LogUsuariosRoutes from "./Routes/logUsuariosRoutes.js"
import ProductoRoutes from "./Routes/ProductoRoutes.js"
import VentaRoutes from "./Routes/ventaRoutes.js"
import conectarDB from "./config/DB.js"
import fileUpload from 'express-fileupload';


const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(express.json());

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './files'
}));

conectarDB()





//gestión de usuarios
app.use('/login/home', LogUsuariosRoutes );
//gestión de productos
app.use('/admin/home/productos', ProductoRoutes );
//gestión de ventas
app.use('/admin/home/ventas', VentaRoutes );


app.listen(PORT, ()=>{
    console.log(`Servidor Inicializado en el puerto # ${PORT}`);
});