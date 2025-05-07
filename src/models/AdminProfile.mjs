import mongoose from "mongoose";

const adminProfileSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // referencia al usuario
    firstName: { type: String, required: true }, // nombre
    lastName: { type: String, required: true }, // apellido
    position: { type: String }, // cargo o puesto dentro de la organización
    department: { type: String }, // área o departamento
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('AdminProfile', adminProfileSchema);
