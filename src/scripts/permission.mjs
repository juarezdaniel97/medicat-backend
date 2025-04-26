import mongoose from "mongoose";
import Permission from '../models/Permission.mjs'
import dotenv from "dotenv";

dotenv.config();

//PARA EJECUTAR EL SCRIPTS: node src/scripts/permission.mjs

await mongoose.connect(process.env.MONGO_URI);

const permissions = [
    // Usuarios
    { name: "user:create", description: "Crear usuarios en el sistema" },
    { name: "user:read", description: "Ver perfiles de usuario" },
    { name: "user:update", description: "Modificar información de usuarios" },
    { name: "user:delete", description: "Eliminar usuarios" },
    { name: "user:list", description: "Listar todos los usuarios" },

    // Perfiles
    { name: "profile:create", description: "Crear perfiles" },
    { name: "profile:read", description: "Ver información de perfiles" },
    { name: "profile:update", description: "Modificar perfiles" },
    { name: "profile:delete", description: "Eliminar perfiles" },
    { name: "profile:list", description: "Listar todos los perfiles" },

    // Turnos
    { name: "appointment:create", description: "Crear nuevos turnos" },
    { name: "appointment:read", description: "Ver información de turnos" },
    { name: "appointment:update", description: "Modificar turnos existentes" },
    { name: "appointment:delete", description: "Eliminar turnos" },
    { name: "appointment:list", description: "Listar todos los turnos" },
    { name: "appointment:approve", description: "Aprobar turnos" },
    { name: "appointment:reject", description: "Rechazar turnos" },

    // Especialidades
    { name: "specialty:create", description: "Crear especialidades" },
    { name: "specialty:read", description: "Ver especialidades" },
    { name: "specialty:update", description: "Modificar especialidades" },
    { name: "specialty:delete", description: "Eliminar especialidades" },
    { name: "specialty:list", description: "Listar especialidades" },

    // Historias clínicas
    { name: "medical_history:create", description: "Crear historia clínica" },
    { name: "medical_history:read", description: "Ver historia clínica" },
    { name: "medical_history:update", description: "Actualizar historia clínica" },
    { name: "medical_history:delete", description: "Eliminar historia clínica" },
    { name: "medical_history:list", description: "Listar historias clínicas" },
];

await Permission.insertMany(permissions);
console.log("Permisos insertados correctamente");
process.exit();
