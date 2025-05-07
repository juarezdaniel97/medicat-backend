import { config } from "dotenv";
import { connect_BD } from "./config/dbConfig.mjs";
import express from "express";
import cors from "cors";
import authRoutes from './routes/authRoutes.mjs';
import roleRoutes from './routes/roleRoutes.mjs';
import permissionRoutes from "./routes/permissionRoutes.mjs";
import patientRoutes from "./routes/patientProfileRoutes.mjs";
import medicoRoutes from "./routes/medicoRoutes.mjs";
import adminRoutes from "./routes/adminRoutes.mjs";
import appointmentRoutes from "./routes/appointmentRoutes.mjs";


//CARGAR LAS VARIABLES DE ENTORNO
config({path: '../.env'})

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    // origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    origin: process.env.ALLOWED_ORIGINS?.split(',').map(origin => origin.trim()),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,
    maxAge: 86400
};


//Conección a la BD
connect_BD();

//MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));

//RUTAS
app.use('/api', authRoutes)
app.use("/api", roleRoutes);
app.use("/api", permissionRoutes);
app.use("/api", patientRoutes);
app.use("/api", medicoRoutes);
app.use("/api", adminRoutes);
app.use("/api", appointmentRoutes);


// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

app.get('/', (req, res)=>{
    res.json({message: "API FUNCIONANDO"})
})


app.use((req, res, next) => {
    res.status(404).json({message: "La ruta solicitada no existe"});
    });

app.listen(PORT, ()=>{
    console.log(`El servidor está ejecutando http://localhost:${PORT}`); 
})