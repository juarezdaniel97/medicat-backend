import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    
    medicoId: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicoProfile', required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'PatientProfile', required: true },
    appointmentDate: { type: Date, required: true },
    reason: { type: String }, // motivo del turno (opcional)
    status: { 
        type: String, 
        enum: ['programado', 'completado', 'cancelado'], 
        default: 'programado' 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Appointment', appointmentSchema);
