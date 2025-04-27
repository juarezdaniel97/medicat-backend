import { config } from "dotenv";
import { connect_BD } from "./config/dbConfig.mjs";
import express from "express";
// import userRoutes from './routes/UserRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';
import roleRoutes from './routes/roleRoutes.mjs';
import permissionRoutes from "./routes/permissionRoutes.mjs";
import profileRoutes from "./routes/profileRoutes.mjs";
import doctorRoutes from "./routes/doctorRoutes.mjs";

//CARGAR LAS VARIABLES DE ENTORNO
config({path: '../.env'})

const app = express();
const PORT = process.env.PORT || 4000;

//Conección a la BD
connect_BD();

//MIDDLEWARE
app.use(express.json());

//RUTAS
app.use('/api', authRoutes)
app.use("/api", roleRoutes);
app.use("/api", permissionRoutes);
app.use("/api", profileRoutes);
app.use("/api", doctorRoutes);



app.get('/', (req, res)=>{
    res.json('Home')
})

app.listen(PORT, ()=>{
    console.log(`El servidor está ejecutando http://localhost:${PORT}`); 
})