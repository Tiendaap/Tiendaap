import mongoose from "mongoose";

const conectarDB = async () =>{
    try{
        console.log("Conectado")
        const db =await mongoose.connect(
            process.env.MONGO_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology:true

            }
        )

    }
    catch(error){
        console.log(`Ha habido un error de conexión a la 
                            base de datos ${error.message}`)
        process.exit(1);
    }

};

export default conectarDB;