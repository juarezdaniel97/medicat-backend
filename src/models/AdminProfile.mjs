import mongoose from "mongoose";

const adminProfileSchema = new mongoose.Schema({
    profileId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Profile', 
        required: true, 
        unique: true 
    },
    position: { type: String }, // cargo o puesto dentro de la organización
    department: { type: String }, // área o departamento
    accessLevel: { type: String, enum: ['low', 'medium', 'high'], default: 'high' }, // nivel de acceso
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('AdminProfile', adminProfileSchema);
