import mongoose from "mongoose";

export const connect_BD = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexión a la BD exitosa');
        
    } catch (error) {
        console.log("Error al conectar a la Base de Datos. ", error.message);
        process.exit(1)
    }
}