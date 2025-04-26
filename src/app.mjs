import { config } from "dotenv";
import { connect_BD } from "./config/dbConfig.mjs";
import express from "express";
// import userRoutes from './routes/UserRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';
import roleRoutes from './routes/roleRoutes.mjs';
import permissionRoutes from "./routes/permissionRoutes.mjs";
import profileRoutes from "./routes/profileRoutes.mjs";


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
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api", profileRoutes);



app.get('/', (req, res)=>{
    res.json('Home')
})

app.listen(PORT, ()=>{
    console.log(`El servidor está ejecutando http://localhost:${PORT}`); 
})