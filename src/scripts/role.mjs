import Role from "../models/Role.mjs"
import Permission from "../models/Permission.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//PARA EJECUTAR EL SCRIPTS: node src/scripts/role.mjs


await mongoose.connect(process.env.MONGO_URI);

const allPermissions = await Permission.find();

const roleAdmin = new Role({
    name: "admin",
    description: "Administrador del sistema",
    permission: allPermissions.map(p => p._id)
});

const roleMedico = new Role({
    name: "medico",
    description: "Médico",
    permission: await Permission.find({
        name: { $in: [
            "profile:read", "profile:update",
            "appointment:read", "appointment:update",
            "medical_history:create", "medical_history:read", "medical_history:update",
        ]}
    }).then(perms => perms.map(p => p._id))
});

const rolePaciente = new Role({
    name: "paciente",
    description: "Paciente",
    permission: await Permission.find({
        name: { $in: [
            "profile:read", "profile:update",
            "aappointment:create", "appointment:read", "appointment:update",
            "medical_history:read"
        ]}
    }).then(perms => perms.map(p => p._id))
});

await Role.insertMany([roleAdmin, roleMedico, rolePaciente]);
console.log("Roles creados correctamente");
process.exit();
